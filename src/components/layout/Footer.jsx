import React from 'react';
import { storyblokEditable } from '@storyblok/react';

const Footer = ({ footerSections = [], newsletter }) => {
  return (
    <footer className="bg-white text-black p-8">
      {/* Container for the footer */}
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4">
        {/* Newsletter section */}
        {newsletter && (
          <div className="py-6 text-center" {...storyblokEditable(newsletter)}>
            <h3 className="text-3xl font-semibold mb-4">{newsletter.heading}</h3>
            <p className="">{newsletter.description}</p>
            <p className="mb-4">{newsletter.description2}</p>
            <form className="flex items-center justify-center">
              <div className="relative w-full max-w-sm">
                <input 
                  type="email" 
                  placeholder="Email Address" 
                  className="p-2 rounded-md text-black w-full pr-24 border border-gray-700"
                />
                <button 
                  className="absolute right-0 top-0 h-full text-black px-4 py-2 rounded-r-md hover:bg-blue-400"
                >
                  {newsletter.buttonText}
                </button>
              </div>
            </form>
          </div>
        )}

        {/* Footer sections */}
        <div className="col-span-3 grid grid-cols-1 md:grid-cols-1">
          {footerSections.map((section, index) => (
            section.component === 'FooterSection' && (
              <section key={index} {...storyblokEditable(section)} className="text-center">
                <h4 className="text-lg font-bold mb-2">{section.title}</h4>
                <div className="flex justify-evenly">
                  {section.links && section.links.map((link, i) => (
                    <div key={i} className="flex flex-col items-center">
                      <h5 className="font-semibold mb-2">{link.label}</h5>
                      {/* Render sub-links if they exist */}
                      {link.subLinks && link.subLinks.length > 0 && (
                        <ul className="mt-2 space-y-2 text-sm text-gray-700">
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
