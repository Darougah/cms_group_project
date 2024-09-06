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
      {/* Pass logo to the Header */}
      <Header headerLinks={config.header_links} logo={config.logo.filename} />

      <main className="container mx-auto p-4">{children}</main>

      <Footer footerSections={config.footer_sections} />
    </>
  );
}
