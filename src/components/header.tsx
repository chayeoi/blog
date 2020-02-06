import { Link } from 'gatsby'
import React from 'react'

interface Props {
  siteTitle?: string;
}

const Header: React.FC<Props> = ({ siteTitle = '' }) => (
  <header>
    <div>
      <h1>
        <Link to="/">
          {siteTitle}
        </Link>
      </h1>
    </div>
  </header>
)

export default Header
