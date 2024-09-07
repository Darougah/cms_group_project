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
          {headerLinks && headerLinks.map((section) =>
            section.link.map((link) => (
              <a
                key={link._uid}
                href={link.url.cached_url ? `/${link.url.cached_url}` : link.url.url}
                className="text-lg hover:underline"
                target={link.url.linktype === 'url' ? '_blank' : '_self'} // Open external links in a new tab
                rel={link.url.linktype === 'url' ? 'noopener noreferrer' : ''}
              >
                {link.label}
              </a>
            ))
          )}
        </div>
      </nav>
    </header>
  );
};

export default Header;
