import React from "react";
import { Helmet } from "react-helmet";
import { useLocation } from "react-router-dom";

const MetaTags = () => {
  const location = useLocation();

  const metaInfo = {
    "/": {
      title: "Biomed International | Leading Life Science Manufacturing Since 2014",
      description:
        "Biomed International is a trusted manufacturer of Chondroitin Sulfate Sodium and Collagen. Serving pharmaceutical, nutraceutical, and food supplement industries globally since 2014.",
      keywords:
        "Biomed International, Chondroitin Sulfate Sodium, Collagen manufacturer, life sciences, pharmaceutical manufacturing, nutraceutical suppliers",
    },
    "/infrastructure": {
      title: "Biomed International | Advanced Infrastructure & Manufacturing Facilities",
      description:
        "Explore Biomed International’s advanced manufacturing units, cleanrooms, quality labs, and state-of-the-art biomolecule production infrastructure.",
      keywords:
        "Biomed facilities, life science manufacturing plant, cleanroom manufacturing, biomolecule production, pharmaceutical infrastructure",
    },
    "/about-us": {
      title: "Biomed International | About Us & Our Commitment",
      description:
        "Learn about Biomed International’s journey, vision, mission, promoters, and our commitment to quality and global standards in life sciences.",
      keywords:
        "About Biomed International, life science company India, pharmaceutical company profile, promoters, vision mission",
    },
    "/product/chondroitin-sulfate-sodium": {
      title: "Biomed International | Chondroitin Sulfate Sodium Manufacturer",
      description:
        "High-quality Chondroitin Sulfate Sodium (USP/BP grade) manufactured by Biomed International for pharmaceutical, nutraceutical, and medical applications.",
      keywords:
        "Chondroitin Sulfate Sodium, joint health supplement, USP BP grade chondroitin, Biomed International products",
    },
    "/product/collagen": {
      title: "Biomed International | Collagen Products: Fish, Bovine, Chicken",
      description:
        "Discover Biomed International’s premium Collagen range including Fish Collagen, Bovine Collagen, and Chicken Collagen for health and nutrition industries.",
      keywords:
        "Collagen manufacturer, Fish Collagen, Bovine Collagen, Chicken Collagen, nutraceutical ingredients",
    },
    "/contact": {
      title: "Biomed International | Contact Us",
      description:
        "Connect with Biomed International for inquiries about our products, manufacturing capabilities, partnerships, or bulk orders.",
      keywords:
        "Biomed contact, life science manufacturer contact, bulk Chondroitin supplier, collagen supplier India",
    },
  };

  const normalizePath = (path) => path.toLowerCase().replace(/\/+$/, "");
  const normalizedPath = normalizePath(location.pathname);

  const matchedPath = Object.keys(metaInfo).find(
    (key) => normalizePath(key) === normalizedPath
  );

  const { title, description, keywords } = matchedPath
    ? metaInfo[matchedPath]
    : metaInfo["/"];

  const image = "https://images.theconversation.com/files/675612/original/file-20250620-56-novrkv.jpg?ixlib=rb-4.1.0&rect=300%2C0%2C5340%2C2567&q=45&auto=format&w=668&h=324&fit=crop";
  const url = `https://bio-med-dhana1612s-projects.vercel.app${location.pathname}`;

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />

      {/* Open Graph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content="website" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      <link rel="canonical" href={url} />
    </Helmet>
  );
};

export default MetaTags;
