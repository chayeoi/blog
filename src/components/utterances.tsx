import React, { memo, useLayoutEffect, useRef } from 'react'

export interface Props {
  repo: string;
  theme?: 'github-light' | 'github-dark' | 'github-dark-orange' | 'icy-dark' | 'dark-blue' | 'photon-dark';
}

const Utterances: React.FC<Props> = memo(({ repo, theme = 'github-light' }) => {
  const elementRef = useRef<HTMLDivElement>(null)

  useLayoutEffect(() => {
    const [utterances] = document.getElementsByClassName('utterances')

    if (!utterances) {
      const script = document.createElement('script')

      const attributes = {
        src: 'https://utteranc.es/client.js',
        'issue-term': 'pathname',
        crossOrigin: 'anonymous',
        async: 'true',
        label: 'comment',
        repo,
        theme,
      }

      Object.entries(attributes).forEach(([key, value]) => {
        script.setAttribute(key, value)
      })

      elementRef.current?.appendChild(script)
    }
  }, [repo, theme])

  return <div ref={elementRef} />
})

export default Utterances
