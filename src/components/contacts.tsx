import { css } from '@emotion/core'
import _ from 'lodash/fp'
import React from 'react'

import {
  EMAIL_ICON,
  FACEBOOK_ICON,
  GITHUB_ICON,
  INSTAGRAM_ICON,
  LINKEDIN_ICON,
  RSS_ICON,
  TWITTER_ICON,
} from '../constants'
import Icon from './icon'
import IconButton from './icon-button'

interface Contact {
  name: 'email' | 'facebook' | 'github' | 'instagram' | 'linkedin' | 'twitter';
  value: string;
  href: string;
}

interface Props {
  contacts: Contact[];
}

const ICONS = {
  email: EMAIL_ICON,
  facebook: FACEBOOK_ICON,
  github: GITHUB_ICON,
  instagram: INSTAGRAM_ICON,
  linkedin: LINKEDIN_ICON,
  rss: RSS_ICON,
  twitter: TWITTER_ICON,
}

const Contacts: React.FC<Props> = ({ contacts, ...otherProps }) => (
  <ul css={s.root} {...otherProps}>
    {_.map((contact: Contact): React.ReactNode => (
      <li key={contact.name} css={s.contactItem}>
        <IconButton as="a" href={contact.href} target="_blank" rel="noopener noreferrer">
          <Icon name={contact.name} icon={ICONS[contact.name]} />
        </IconButton>
      </li>
    ), contacts)}
  </ul>
)

const s = {
  root: css`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 0.5rem;
  `,
  contactItem: css`
    margin: 0 0.25rem;
  `,
}

export default Contacts
