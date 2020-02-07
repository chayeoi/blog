import { css, SerializedStyles } from '@emotion/core'
import _ from 'lodash/fp'
import React from 'react'

import {
  ALPHA,
  EMAIL_ICON,
  FACEBOOK_ICON,
  GITHUB_ICON,
  INSTAGRAM_ICON,
  LINKEDIN_ICON,
  TWITTER_ICON,
} from '../constants'
import { Theme } from '../styles/theme'
import Icon from './icon'

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
  twitter: TWITTER_ICON,
}

const Contacts: React.FC<Props> = ({ contacts, ...otherProps }) => (
  <ul css={s.root} {...otherProps}>
    {_.map((contact: Contact): React.ReactNode => (
      <li key={contact.name} css={s.contactItem}>
        <a href={contact.href} target="_blank" rel="noopener noreferrer">
          <Icon name={contact.name} icon={ICONS[contact.name]} />
        </a>
      </li>
    ), contacts)}
  </ul>
)

const s = {
  root: css`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    margin-bottom: 0.5rem;
  `,
  contactItem: (theme: Theme): SerializedStyles => css`
    a {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100%;
      height: 100%;
      padding: 8px;
      border-radius: 50%;
      :hover, :focus {
        background-color: ${theme.palette.hexToRgb(theme.palette.primary.light, ALPHA)};
      }
    }
  `,
}

export default Contacts
