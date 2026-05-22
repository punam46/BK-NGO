import React from 'react';
import { Helmet } from 'react-helmet-async';

const SEO = ({ 
  title, 
  description, 
  name = 'BK Education & Welfare Society', 
  type = 'website' 
}) => {
  // Use the provided title or fallback to a default
  const pageTitle = title ? `${title} | ${name}` : name;
  // Use the provided description or fallback to a default
  const pageDescription = description || "Building the future of rural journalism and education, one village at a time. Join BK NGO to make a real difference.";

  return (
    <Helmet>
      {/* Standard Meta Tags */}
      <title>{pageTitle}</title>
      <meta name="description" content={pageDescription} />

      {/* Facebook / Open Graph Meta Tags */}
      <meta property="og:type" content={type} />
      <meta property="og:title" content={pageTitle} />
      <meta property="og:description" content={pageDescription} />
      <meta property="og:site_name" content={name} />
      {/* Fallback image for sharing on social media */}
      <meta property="og:image" content="/ALL_LOGO.jpg" />

      {/* Twitter Meta Tags */}
      <meta name="twitter:creator" content={name} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={pageTitle} />
      <meta name="twitter:description" content={pageDescription} />
      <meta name="twitter:image" content="/ALL_LOGO.jpg" />
    </Helmet>
  );
};

export default SEO;
