/** @jsx jsx */
import { css, jsx, SerializedStyles } from '@emotion/core'
import { useTheme } from 'emotion-theming'
import { useEffect } from 'react'

import { ALPHA, COLOR_MODE_KEY, ColorMode, UtterancesTheme } from '../constants'
import { useColorMode } from '../hooks'
import { Theme } from '../models/Theme'

const ThemeSwitch = () => {
  const theme: Theme = useTheme()

  const [, setColorMode] = useColorMode()

  const handleClick = (): void => {
    setColorMode((prevColorMode: ColorMode): ColorMode => (
      prevColorMode === ColorMode.LIGHT
        ? ColorMode.DARK
        : ColorMode.LIGHT
    ))
  }

  useEffect(() => {
    const message = {
      type: 'set-theme',
      theme: theme.palette.type === ColorMode.LIGHT ? UtterancesTheme.GITHUB_LIGHT : UtterancesTheme.DARK_BLUE,
    }

    const iframe = document.querySelector<HTMLIFrameElement>('.utterances-frame')

    const value = localStorage.getItem(COLOR_MODE_KEY) as ColorMode

    if (iframe && value) {
      iframe.contentWindow?.postMessage(message, 'https://utteranc.es')
    }
  }, [theme.palette.type])

  return (
    <button
      css={s.button}
      type="button"
      onClick={handleClick}
    >
      {theme.palette.type}
    </button>
  )
}

const s = {
  button: (theme: Theme): SerializedStyles => css`
    display: block;
    width: 100%;
    height: 100%;
    padding: 8px;
    font-size: ${theme.typography.pxToRem(14)};
    font-weight: 500;
    text-transform: uppercase;
    transition: color 0.2s, background-color 0.2s;
    cursor: pointer;
    outline: none;
    :active, :hover, :focus {
      color: ${theme.palette.primary.main};
      background-color: ${theme.palette.hexToRgb(theme.palette.primary.light, ALPHA)};
    }
  `,
}

export default ThemeSwitch
