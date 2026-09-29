import React from "react";
import { Helmet } from "react-helmet-async";
import { headTags } from "../../data/meta";

// Title, description, canonical, social tags and structured data for one route. The build
// writes the same tags into each page's HTML (scripts/prerender.js); Helmet replaces
// them on client-side navigation.
export const PageMeta = ({ path }) => {
  const { title, tags } = headTags(path);
  return (
    <Helmet>
      <title>{title}</title>
      {tags.map(({ tag: Tag, attrs, json }) =>
        json ? (
          <Tag key="ld" {...attrs}>
            {JSON.stringify(json)}
          </Tag>
        ) : (
          <Tag key={attrs.name ?? attrs.property ?? attrs.rel} {...attrs} />
        )
      )}
    </Helmet>
  );
};
