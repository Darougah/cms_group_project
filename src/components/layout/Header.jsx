import React, { useState } from "react";
import { useStoryblokApi } from "@storyblok/react";
import Modal from "./Modal";
import ProductList from "@/components/nestable/ProductList";
import Image from "next/image";
import Link from "next/link";

const Header = ({ headerLinks, logo }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [filteredSuggestions, setFilteredSuggestions] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const storyblokApi = useStoryblokApi();

  const handleSearch = async (query = searchQuery) => {
    setIsModalOpen(true);
    try {
      const { data } = await storyblokApi.get("cdn/stories/productpage", {
        version: "draft",
      });

      const productListing = data.story.content.products || [];

      const filteredProducts = productListing.filter((product) =>
        product.productName.toLowerCase().includes(query.toLowerCase())
      );

      setSearchResults(filteredProducts);
    } catch (error) {
      console.error("Error fetching search results:", error);
    }
  };

  const handleInputChange = async (e) => {
    const query = e.target.value;
    setSearchQuery(query);

    if (query.length > 0) {
      try {
        const { data } = await storyblokApi.get("cdn/stories/productpage", {
          version: "draft",
        });

        const productListing = data.story.content.products || [];

        const filteredProducts = productListing.filter((product) =>
          product.productName.toLowerCase().includes(query.toLowerCase())
        );

        setFilteredSuggestions(filteredProducts);
      } catch (error) {
        console.error("Error fetching live search suggestions:", error);
      }
    } else {
      setFilteredSuggestions([]);
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSearchResults([]);
  };

  const showSearch = headerLinks?.some((section) => section.show_search);

  return (
    <header className="bg-gray-800 text-white p-4">
      <nav className="container mx-auto flex justify-between items-center">
        <Link href="/">
          <div className="flex-shrink-0">
            <Image
              src={logo}
              width={100}
              height={400}
              alt="The logotype for the page"
              className="h-10"
            />
          </div>
        </Link>

        <div className="flex-grow flex justify-center items-center space-x-6">
          {headerLinks &&
            headerLinks.map((section) => (
              <div key={section._uid} className="relative group">
                {section.link.map((link) => (
                  <a
                    key={link._uid}
                    href={
                      link.url.cached_url
                        ? `/${link.url.cached_url}`
                        : link.url.url
                    }
                    className="text-lg hover:underline px-4 py-2"
                    target={link.url.linktype === "url" ? "_blank" : "_self"}
                    rel={
                      link.url.linktype === "url" ? "noopener noreferrer" : ""
                    }
                  >
                    {link.label}
                  </a>
                ))}

                {section.dropdown_links &&
                  section.dropdown_links.length > 0 && (
                    <ul className="absolute hidden group-hover:block bg-white text-gray-800 p-2 shadow-lg rounded-md">
                      {section.dropdown_links.map((dropdownItem) => (
                        <li key={dropdownItem._uid} className="p-2">
                          <a
                            href={
                              dropdownItem.url.cached_url
                                ? `/${dropdownItem.url.cached_url}`
                                : dropdownItem.url.url
                            }
                            className="block hover:bg-gray-100 rounded-md p-2"
                          >
                            {dropdownItem.label}
                          </a>
                        </li>
                      ))}
                    </ul>
                  )}
              </div>
            ))}

          {showSearch && (
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSearch();
              }}
              className="flex items-center ml-4 relative"
            >
              <input
                type="text"
                className="p-2 rounded-l-md text-gray-800"
                placeholder="Search..."
                value={searchQuery}
                onChange={handleInputChange}
              />
              <button
                type="submit"
                className="bg-blue-500 p-2 rounded-r-md text-white hover:bg-blue-700"
              >
                Search
              </button>

              {filteredSuggestions.length > 0 && (
                <div className="absolute top-full left-0 mt-2 w-full bg-white border rounded-lg shadow-lg">
                  {filteredSuggestions.map((product) => (
                    <div key={product._uid} className="p-2 hover:bg-gray-200">
                      <button
                        onClick={() => {
                          setSearchQuery(product.productName); // Set the clicked product as the search query
                          handleSearch(product.productName); // Trigger search with that product
                        }}
                        className="text-black w-full text-left"
                      >
                        {product.productName}
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </form>
          )}
        </div>
      </nav>

      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <ProductList products={searchResults} searchQuery={searchQuery} />
      </Modal>
    </header>
  );
};

export default Header;
