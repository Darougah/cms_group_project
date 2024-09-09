import React from 'react';
import { storyblokEditable } from '@storyblok/react';

const Footer = ({ footerSections = [], newsletter }) => {
  return (
    <footer className="bg-gray-900 text-white p-8">
      {/* Container for the footer */}
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Newsletter section */}
        {newsletter && (
          <div className="bg-gray-800 py-6 text-center" {...storyblokEditable(newsletter)}>
            <h3 className="text-xl font-semibold mb-4">{newsletter.heading}</h3>
            <p className="mb-4">{newsletter.description}</p>
            <form className="flex flex-col items-center">
              <input 
                type="email" 
                placeholder="Email Address" 
                className="p-2 rounded-md mb-4 text-black w-full"
              />
              <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 w-full">
                {newsletter.buttonText}
              </button>
            </form>
          </div>
        )}

        {/* Footer sections */}
        <div className="col-span-3 grid grid-cols-1 md:grid-cols-1 gap-4">
          {footerSections.map((section, index) => (
            section.component === 'FooterSection' && (
              <section key={index} {...storyblokEditable(section)} className="text-center">
                <h4 className="text-lg font-bold mb-2">{section.title}</h4>
                <div className="flex justify-between">
                  {section.links && section.links.map((link, i) => (
                    <div key={i} className="flex flex-col items-center">
                      <h5 className="font-semibold mb-2">{link.label}</h5>
                      {/* Render sub-links if they exist */}
                      {link.subLinks && link.subLinks.length > 0 && (
                        <ul className="mt-2 space-y-2 text-sm text-gray-400">
                          {link.subLinks.map((subLink, j) => (
                            <li key={j}>
                              <a href={subLink.url.cached_url} className="hover:underline">
                                {subLink.label}
                              </a>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  ))}
                </div>
              </section>
            )
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
