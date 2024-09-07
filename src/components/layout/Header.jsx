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
import { storyblokEditable } from '@storyblok/react';

const Header = ({ headerLinks, logo }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    console.log('Searching for:', searchQuery);
  };

  const showSearch = headerLinks?.some((section) => section.show_search);

  return (
    <header className="bg-gray-800 text-white p-4">
      <nav className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        {logo && (
          <div className="flex-shrink-0">
            <img src={logo} alt="Logo" className="h-10" />
          </div>
        )}

        {/* Links */}
        <div className="flex-grow flex justify-center items-center space-x-6"> {/* Increased spacing */}
          {headerLinks &&
            headerLinks.map((section) => (
              <div key={section._uid} className="relative group">
                {section.link.map((link) => (
                  <a
                    key={link._uid}
                    href={link.url.cached_url ? `/${link.url.cached_url}` : link.url.url}
                    className="text-lg hover:underline px-4 py-2" // Added padding for better spacing
                    target={link.url.linktype === 'url' ? '_blank' : '_self'}
                    rel={link.url.linktype === 'url' ? 'noopener noreferrer' : ''}
                  >
                    {link.label}
                  </a>
                ))}

                {/* Dropdown */}
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

          {/* Search Bar */}
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
    </header>
  );
};

export default Header;
