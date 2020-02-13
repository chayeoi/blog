export const hexToRgb = (hex: string, alpha?: number): string => {
  const shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i
  const longhandHex = hex.replace(shorthandRegex, (m, r: string, g: string, b: string) => r + r + g + g + b + b)
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(longhandHex)

  if (result) {
    return (alpha && alpha >= 0 && alpha <= 1)
      ? `rgba(${parseInt(result[1], 16)}, ${parseInt(result[2], 16)}, ${parseInt(result[3], 16)}, ${alpha})`
      : `rgb(${parseInt(result[1], 16)}, ${parseInt(result[2], 16)}, ${parseInt(result[3], 16)})`
  }

  return 'transparent'
}
