// "use client";

// import { useEffect, useState } from 'react';
// import { StoryblokCMS } from '../../utils/cms';
// import Header from './Header';
// import Footer from './Footer';

// export default function Layout({ children }) {
//   const [config, setConfig] = useState(null);

//   useEffect(() => {
//     async function fetchConfig() {
//       const data = await StoryblokCMS.getConfig();
//       setConfig(data.content);
//     }
//     fetchConfig();
//   }, []);

//   if (!config) return <p>Loading...</p>;

//   return (
//     <>
//       <Header headerLinks={config.header_section} logo={config.logo?.filename} />
//       <main className="container mx-auto p-4">{children}</main>

//       {/* Pass the data to Footer */}
//       <Footer 
//         footerSections={config.footer_sections} 
//         newsletter={config.footer_sections.find(section => section.component === 'newsletter')} 
//       />
//     </>
//   );
// }


"use client";

import { useEffect, useState } from 'react';
import { StoryblokCMS } from '../../utils/cms';
import Header from './Header';
import Footer from './Footer';

export default function Layout({ children }) {
  const [config, setConfig] = useState(null);

  useEffect(() => {
    async function fetchConfig() {
      const data = await StoryblokCMS.getConfig();
      setConfig(data.content);
    }
    fetchConfig();
  }, []);

  if (!config) return <p>Loading...</p>;

  return (
    <>
      <Header headerLinks={config.header_section} logo={config.logo?.filename} />
      <main className="container mx-auto p-4">{children}</main>
      <Footer 
        footerSections={config.footer_sections} 
        newsletter={config.footer_sections.find(section => section.component === 'newsletter')} 
      />
    </>
  );
}
