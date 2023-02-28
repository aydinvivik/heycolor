import { 
  sky,
  slate,
  skyDark,
  slateDark
} from "@radix-ui/colors";
// -- Create stitches
import { createStitches } from "@stitches/react";
import { spaceTokens, sizeTokes, mediaTokens, radiiTokens, shadowTokens, zIndicesTokens, fontSizesTokens, lineHeightsTokens } from "@/util/tokens";
import localFont from 'next/font/local';

// Local font Mona Sans (Github)
const MonaSans = localFont({ 
  src: './src/util/fonts/MonaSans.woff2',
  weight: '100 900'
 });

 // Local font Hubot Sans (Github)
 const HubotSans = localFont({ 
  src: './src/util/fonts/hubot-sans.woff2',
  weight: '100 900'
 });

const fontsTokens = {
  MonaSans: `${MonaSans.style.fontFamily}`,
  HubotSans: `${HubotSans.style.fontFamily}`
}

const colorsTokens = {
  black: '#060a23',
  white: '#fff',
  // contrast colors
  hiContrast: '$slate12',
  lowContrast: '$slate1'
}

const colorsTokensLightTheme = {
  dashboardColor: '$black',
  dashboardBody: '$white'
}

const colorsTokensDarkTheme = {
  dashboardColor: '$white',
  dashboardBody: '$lowContrast'
}

export const { styled, createTheme, globalCss, getCssText, theme, keyframes } = createStitches({
  theme: {
    colors: {
      ...sky,
      ...slate,
      ...colorsTokens,
      ...colorsTokensLightTheme
    },
    space: { ...spaceTokens },
    fontSizes: { ...fontSizesTokens },
    fonts: { ...fontsTokens },
    fontWeights: {},
    lineHeights: { ...lineHeightsTokens },
    letterSpacings: {},
    sizes: { ...sizeTokes },
    borderWidths: {},
    borderStyles: {},
    radii: { ...radiiTokens },
    shadows: { ...shadowTokens },
    zIndices: { ...zIndicesTokens },
    transitions: {},
  },
  media: { ...mediaTokens }
});

export const darkTheme = createTheme('dark', {
  colors: {
    ...skyDark,
    ...slateDark,
    ...colorsTokens,
    ...colorsTokensDarkTheme
  }
})

globalCss({
  body: {
    fontFamily: '$MonaSans !important',
    letterSpacing: '-0.01em',
    backgroundColor: '$dashboardBody',
    color: '$hiContrast',
  },
  [`h1, h2, h3, h4, h5, h6`]: {
    fontFamily: '$MonaSans !important',
  }
})();