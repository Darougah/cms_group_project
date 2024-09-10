// import React, { useState } from 'react';
// import { storyblokEditable } from '@storyblok/react';

// const Header = ({ headerLinks, logo }) => {
//   const [searchQuery, setSearchQuery] = useState('');

//   const handleSearch = (e) => {
//     e.preventDefault();
//     // Handle the search logic
//     console.log('Searching for:', searchQuery);
//   };

//   // Check if show_search is enabled
//   const showSearch = headerLinks?.some(section => section.show_search);

//   return (
//     <header className="bg-gray-800 text-white p-4">
//       <nav className="container mx-auto flex justify-between items-center">
//         {/* Logo */}
//         {logo && (
//           <div className="flex-shrink-0">
//             <img src={logo} alt="Logo" className="h-10" />
//           </div>
//         )}

//         {/* Links */}
//         <div className="flex-grow flex justify-center items-center space-x-4">
//           {headerLinks &&
//             headerLinks.map((section) =>
//               section.link.map((link) => (
//                 <a
//                   key={link._uid}
//                   href={link.url.cached_url ? `/${link.url.cached_url}` : link.url.url}
//                   className="text-lg hover:underline"
//                   target={link.url.linktype === 'url' ? '_blank' : '_self'}
//                   rel={link.url.linktype === 'url' ? 'noopener noreferrer' : ''}
//                 >
//                   {link.label}
//                 </a>
//               ))
//             )}

//           {/* Search Bar */}
//           {showSearch && (
//             <form onSubmit={handleSearch} className="flex items-center ml-4">
//               <input
//                 type="text"
//                 className="p-2 rounded-l-md text-gray-800"
//                 placeholder="Search..."
//                 value={searchQuery}
//                 onChange={(e) => setSearchQuery(e.target.value)}
//               />
//               <button
//                 type="submit"
//                 className="bg-blue-500 p-2 rounded-r-md text-white hover:bg-blue-700"
//               >
//                 Search
//               </button>
//             </form>
//           )}
//         </div>
//       </nav>
//     </header>
//   );
// };

// export default Header;


import React, { useState } from 'react';
import { useStoryblokApi } from '@storyblok/react';
import Modal from './Modal'; 
import ProductList from '@/components/nestable/ProductList'; 

const Header = ({ headerLinks, logo }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const storyblokApi = useStoryblokApi();

  const handleSearch = async (e) => {
    e.preventDefault();
    setIsModalOpen(true);
  
    try {
      // Fetch the `productpage` story
      const { data } = await storyblokApi.get('cdn/stories/productpage', {
        version: 'draft',
      });
  
      // Log the full response to understand its structure
      console.log('Full response:', data);
  
      // Extract `product-listing` block
      const productListing = data.story.content.products || [];
  
      // Ensure productListing is an array of products
      console.log('Product Listing:', productListing);
  
      // Filter products based on the search query
      const filteredProducts = productListing.filter((product) =>
        product.productName.toLowerCase().includes(searchQuery.toLowerCase())
      );
  
      console.log('Search results:', filteredProducts);
      setSearchResults(filteredProducts);
    } catch (error) {
      console.error('Error fetching search results:', error);
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
        {logo && (
          <div className="flex-shrink-0">
            <img src={logo} alt="Logo" className="h-10" />
          </div>
        )}

        <div className="flex-grow flex justify-center items-center space-x-6">
          {headerLinks &&
            headerLinks.map((section) => (
              <div key={section._uid} className="relative group">
                {section.link.map((link) => (
                  <a
                    key={link._uid}
                    href={link.url.cached_url ? `/${link.url.cached_url}` : link.url.url}
                    className="text-lg hover:underline px-4 py-2"
                    target={link.url.linktype === 'url' ? '_blank' : '_self'}
                    rel={link.url.linktype === 'url' ? 'noopener noreferrer' : ''}
                  >
                    {link.label}
                  </a>
                ))}

                {section.dropdown_links && section.dropdown_links.length > 0 && (
                  <ul className="absolute hidden group-hover:block bg-white text-gray-800 p-2 shadow-lg rounded-md">
                    {section.dropdown_links.map((dropdownItem) => (
                      <li key={dropdownItem._uid} className="p-2">
                        <a
                          href={dropdownItem.url.cached_url ? `/${dropdownItem.url.cached_url}` : dropdownItem.url.url}
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
            <form onSubmit={handleSearch} className="flex items-center ml-4">
              <input
                type="text"
                className="p-2 rounded-l-md text-gray-800"
                placeholder="Search..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <button type="submit" className="bg-blue-500 p-2 rounded-r-md text-white hover:bg-blue-700">
                Search
              </button>
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
