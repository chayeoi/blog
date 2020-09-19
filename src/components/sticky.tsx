/** @jsx jsx */
import { jsx } from '@emotion/core'
import _ from 'lodash/fp'
import { useCallback, useEffect, useRef } from 'react'

type Props = {
  top?: number;
}

const Sticky = ({ top = 0, ...otherProps }: Props) => {
  const elementRef = useRef<HTMLDivElement>(null)
  const y = useRef(0)

  const handleScroll = useCallback(_.throttle(50, () => {
    const element = elementRef.current

    if (!element) {
      return
    }

    const fixed = element.style.position === 'fixed'
    const nextFixed = window.pageYOffset + top > y.current

    if (fixed !== nextFixed) {
      element.style.position = nextFixed ? 'fixed' : 'static'
      element.style.top = nextFixed ? `${top}px` : 'auto'
    }
  }), [top])

  useEffect(() => {
    const element = elementRef.current

    if (!element) {
      return
    }

    const rect = element.getBoundingClientRect()

    y.current = rect.top + window.pageYOffset
  }, [])

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [handleScroll])

  return (
    <div
      ref={elementRef}
      {...otherProps}
    />
  )
}

export default Sticky
