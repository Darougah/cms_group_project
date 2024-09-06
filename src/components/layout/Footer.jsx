import React from 'react';

const Footer = ({ footerSections }) => {
  return (
    <footer className="bg-gray-900 text-white p-8">
      {footerSections && footerSections.map((section, index) => (
        <section key={index} className="mb-4">
          <h4 className="text-lg font-bold mb-2">{section.title}</h4>
          <ul className="flex space-x-4">  {/* Flexbox to align links in a row */}
            {section.links && section.links.map((link, i) => (
              <li key={i}>
                <a href={link.url} className="hover:underline">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </section>
      ))}
    </footer>
  );
};

export default Footer;
