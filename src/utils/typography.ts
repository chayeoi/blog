export const getDefaultFontSize = (): number => {
  // XXX: SSR 대응 방식에 대한 고민
  if (typeof window === 'undefined') {
    return 16
  }

  const html = document.querySelector('html') as HTMLHtmlElement

  return parseInt(getComputedStyle(html).getPropertyValue('font-size'), 10)
}

export const pxToRem = (px: number): string => `${px / getDefaultFontSize()}rem`
