import { useContext } from 'react'

import ColorModeContext, { ColorModeState } from '../contexts/color-mode-context'

const useColorMode = (): ColorModeState => useContext(ColorModeContext)

export default useColorMode
