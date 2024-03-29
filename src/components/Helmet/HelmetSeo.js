import React from "react";
import PropTypes from "prop-types";
import { Helmet } from "react-helmet";
import { useLocation } from '@reach/router';
import { useStaticQuery, graphql } from "gatsby";
import seoImage from '../../assets/images/seo-image.png';

function HelmetSeo({ description, lang, meta, title, image, author }) {
  const pathname = useLocation();
  const data = useStaticQuery(graphql`
    query HelmetSeo {
      site {
        siteMetadata {
          defaultTitle: title
          defaultDescription: description
          siteUrl: url
          defaultImage: image
        }
      }
    }
  `);

  const {
    defaultTitle,
    defaultDescription,
    siteUrl,
    defaultImage,
  } = data.site.siteMetadata;

const seo = {
  title: title || defaultTitle,
  description: description || defaultDescription,
  url: `${siteUrl}${pathname}`,
}

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
          property: `og:image`,
          content: seoImage,
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

HelmetSeo.defaultProps = {
  lang: `en`,
  meta: [],
  description: ``,
  image: null
}

HelmetSeo.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string.isRequired,
}

export default HelmetSeo