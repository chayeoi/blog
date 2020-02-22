import { createContext, Dispatch, SetStateAction } from 'react'

import { ColorMode } from '../constants'

export type ColorModeState = [ColorMode, Dispatch<SetStateAction<ColorMode>>]

const ColorModeContext = createContext<ColorModeState>([ColorMode.LIGHT, () => undefined])

export default ColorModeContext
