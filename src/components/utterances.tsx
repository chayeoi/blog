import React, { memo, useLayoutEffect, useRef } from 'react'

import { COLOR_MODE_KEY, ColorMode, UtterancesTheme } from '../constants'

export type Props = {
  repo: string;
}

const Utterances = memo(({ repo }: Props) => {
  const elementRef = useRef<HTMLDivElement>(null)

  useLayoutEffect(() => {
    const [utterances] = document.getElementsByClassName('utterances')

    if (!utterances) {
      const value = localStorage.getItem(COLOR_MODE_KEY) as ColorMode || ColorMode.LIGHT
      const script = document.createElement('script')
      const attributes = {
        src: 'https://utteranc.es/client.js',
        'issue-term': 'pathname',
        crossOrigin: 'anonymous',
        async: 'true',
        label: 'comment',
        theme: value === ColorMode.LIGHT ? UtterancesTheme.GITHUB_LIGHT : UtterancesTheme.DARK_BLUE,
        repo,
      }

      Object.entries(attributes).forEach(([key, value]) => {
        script.setAttribute(key, value)
      })

      elementRef.current?.appendChild(script)
    }
  }, [repo])

  return <div ref={elementRef} />
})

export default Utterances
