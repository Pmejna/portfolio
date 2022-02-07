/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react";
import PropTypes from "prop-types";
import { Helmet } from "react-helmet";
import { useLocation } from '@reach/router';
import { useStaticQuery, graphql } from "gatsby";

function SEO({ description, lang, meta, title, image, author }) {
  const pathname = useLocation();
  // const { site } = useStaticQuery(query);
  // const {
  //   defaultTitle,
  //   defaultDescription,
  //   siteUrl,
  //   // defaultImage,
  // } = site.siteMetadata;

// const seo = {
//   title: title || defaultTitle,
//   description: description || defaultDescription,
//   // image: `${siteUrl}${image || defaultImage}`,
//   url: `${siteUrl}${pathname}`,
// }

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      meta={[
        {
          name: `description`,
          content: description,
        },
        {
          property: `og:title`,
          content: title,
        },
        {
          property: `og:description`,
          content: description,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          name: `twitter:card`,
          content: `summary`,
        },
        {
          name: `twitter:creator`,
          content: author || ``,
        },
        {
          name: `twitter:title`,
          content: title,
        },
        {
          name: `twitter:description`,
          content: description,
        },
      ].concat(meta)}
    />
  )
}

SEO.defaultProps = {
  lang: `en`,
  meta: [],
  description: ``,
  image: null
}

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string.isRequired,
}

// const query = graphql`
//   query SEO {
//     site {
//       siteMetadata {
//         defaultTitle: title
//         defaultDescription: description
//         siteUrl: url
//         defaultImage: image
//       }
//     }
//   }
// `;

export default SEO
