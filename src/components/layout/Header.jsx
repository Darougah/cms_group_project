import React from 'react';

const Header = ({ headerLinks, logo }) => {
  return (
    <header className="bg-gray-800 text-white p-4">
      <nav className="container mx-auto flex justify-between items-center">
        {/* Logo on the far left */}
        {logo && (
          <div className="flex-shrink-0">
            <img src={logo} alt="Logo" className="h-10" />
          </div>
        )}

        {/* Links on the far right */}
        <div className="flex justify-end space-x-4">
          {headerLinks && headerLinks.map((link) => (
            <a key={link.url} href={link.url} className="text-lg hover:underline">
              {link.label}
            </a>
          ))}
        </div>
      </nav>
    </header>
  );
};

export default Header;
