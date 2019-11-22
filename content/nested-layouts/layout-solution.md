---
title: "Layout Solution"
metaTitle: "Layout Solution"
metaDescription: "See the solution for the Nested Layouts challenge"
---

## layout.js

```javascript
/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import { css } from "@emotion/core"

import Header from "./header"
import Footer from "./footer"
import "./layout.css"

const Layout = ({ children }) => {
  const wrapperStyle = css`
    margin: 0 auto;
    max-width: 960px;
    padding: 0px 1.0875rem 1.45rem;
    padding-top: 0;
  `;

  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Header siteTitle={data.site.siteMetadata.title} />
      <div css={wrapperStyle}>
        <main>{children}</main>
        <Footer />
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
```

## header.js

```javascript
import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import { css } from "@emotion/core"

import Menu from "./menu"

const Header = ({ siteTitle }) => {
  const headerStyle = css`
    background: rebeccapurple;
    margin-bottom: 1.45rem;
  `;

  const wrapperStyle = css`
    margin: 0 auto;
    max-width: 960px;
    padding: 1.45rem 1.0875rem;
    display: flex;
    justify-content: space-between;
  `;

  const headingStyle = css`
    margin: 0;
  `;

  const linkStyle = css`
    color: white;
    text-decoration: none;
  `;

  return (
    <header css={headerStyle}>
      <div css={wrapperStyle}>
        <h1 css={headingStyle}>
          <Link
            to="/"
            css={linkStyle}
          >
            {siteTitle}
          </Link>
        </h1>
        <Menu />
      </div>
    </header>
  );
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
```

## footer.js

```javascript
import React from "react"

const Footer = () => (
  <footer>
    © {new Date().getFullYear()}, Built with
    {` `}
    <a href="https://www.gatsbyjs.org">Gatsby</a>
  </footer>
)

export default Footer;
```

## menu.js

```javascript
import React from "react"
import { Link } from "gatsby"
import { css } from "@emotion/core"

const Menu = () => {
  const menuStyle = css`
    display: flex;
    list-style: none;
  `;

  const itemStyle = css`
    margin-left: 15px;
  `

  const linkStyle = css`
    color: white;
    text-decoration: none;
  `;

  return (
    <ul css={menuStyle}>
      <li css={itemStyle}>
        <Link css={linkStyle} to="/page-2/">Page 2</Link>
      </li>
      <li css={itemStyle}>
        <Link css={linkStyle} to="/about/">About</Link>
        </li>
    </ul>


  )
}

export default Menu
```

**CHECKPOINT:** You can check out the `gatsby_layouts` branch to get up to this point.
