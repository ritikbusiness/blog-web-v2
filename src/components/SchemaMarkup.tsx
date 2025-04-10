
import React from "react";

interface SchemaMarkupProps {
  type: "blogPosting" | "person" | "website";
  data: any;
}

const SchemaMarkup = ({ type, data }: SchemaMarkupProps) => {
  let schema;

  switch (type) {
    case "blogPosting":
      schema = {
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        headline: data.title,
        description: data.excerpt,
        image: data.image,
        author: {
          "@type": "Person",
          name: data.author,
          url: data.authorUrl,
        },
        publisher: {
          "@type": "Person",
          name: data.publisher,
          url: data.publisherUrl,
        },
        datePublished: data.datePublished,
        dateModified: data.dateModified || data.datePublished,
        mainEntityOfPage: {
          "@type": "WebPage",
          "@id": data.url,
        },
        keywords: data.keywords,
        articleSection: data.category,
      };
      break;
    case "person":
      schema = {
        "@context": "https://schema.org",
        "@type": "Person",
        name: data.name,
        url: data.url,
        image: data.image,
        jobTitle: data.jobTitle,
        description: data.description,
        sameAs: data.socialLinks,
      };
      break;
    case "website":
      schema = {
        "@context": "https://schema.org",
        "@type": "WebSite",
        name: data.name,
        url: data.url,
        description: data.description,
        potentialAction: {
          "@type": "SearchAction",
          target: `${data.url}/posts?search={search_term_string}`,
          "query-input": "required name=search_term_string",
        },
      };
      break;
    default:
      return null;
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
};

export default SchemaMarkup;
