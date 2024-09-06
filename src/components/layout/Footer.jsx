import React from 'react';
import { storyblokEditable } from '@storyblok/react';

const Footer = ({ footerSections = [], newsletter }) => {
  return (
    <footer className="bg-gray-900 text-white p-8">
      {/* Container for the footer */}
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 justify-center">
        {/* Newsletter on the far left, but centered */}
        {newsletter && (
          <div className="bg-gray-800 py-6 text-center col-span-1" {...storyblokEditable(newsletter)}>
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

        {/* Footer sections centered */}
        <div className="col-span-3 grid grid-cols-1 md:grid-cols-3 gap-8 justify-center">
          {footerSections.map((section, index) => (
            section.component === 'FooterSection' && (
              <section key={index} {...storyblokEditable(section)} className="text-center mb-4">
                <h4 className="text-lg font-bold mb-2">{section.title}</h4>
                <ul className="flex justify-center space-x-6 mt-4">  {/* Centered flexbox for links with space */}
                  {section.links && section.links.map((link, i) => (
                    <li key={i}>
                      <a href={link.url.cached_url} className="hover:underline">
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </section>
            )
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
