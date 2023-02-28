// --- Plugins
import Color from "color";
import ColorNamer from "color-namer";

export type Palette = {
  name: string,
  colors: {
    [key: string]: {
      [key: number]: string
    }
  }
}

type Rgb = {
  r: number;
  g: number;
  b: number;
  a?: number | null;
};

const generateShade = (hex: string, intensity: number, type: string): string => {
  let color = Color(hex).object() as Rgb;

  if (!hex) {
    return '';
  }

  if (type === 'light') {
    color.r = Math.round(color.r + (255 - color.r) * intensity);
    color.g = Math.round(color.g + (255 - color.g) * intensity);
    color.b = Math.round(color.b + (255 - color.b) * intensity);
  } else {
    color.r = Math.round(color.r * intensity);
    color.g = Math.round(color.g * intensity);
    color.b = Math.round(color.b * intensity);

  }

  return Color(color).hex();
}

export const getColorStyle = (hex: string): boolean => {
  return !Color(hex).isLight();
}

export const getColorName = (color: string): string => {
  const { name } =  ColorNamer(color).ntc[0];

  return name.split(' ').join('-');
}

export default function useColor(baseColor: string, layout: string): Palette {
  const name = getColorName(baseColor);
  let shades: {
    [key: string]: {
      [key: number]: string
    }
  } = {};

  let scheme: Palette = {
    name,
    colors: {}
  };

  if (layout == 'style-1') {

    shades = {
      light: {
        50: generateShade(baseColor, 0.9, 'light'),
        100: generateShade(baseColor, 0.8, 'light'),
        200: generateShade(baseColor, 0.6, 'light'),
        300: generateShade(baseColor, 0.4, 'light'),
        400: generateShade(baseColor, 0.2, 'light'),
        500: baseColor,
        600: Color(generateShade(baseColor, 0.8, 'dark')).saturate(0.1).rotate(0.1).hex(),
        700: Color(generateShade(baseColor, 0.6, 'dark')).saturate(0.2).rotate(0.2).hex(),
        800: Color(generateShade(baseColor, 0.4, 'dark')).saturate(0.3).rotate(0.3).hex(),
        900: Color(generateShade(baseColor, 0.3, 'dark')).saturate(0.4).rotate(0.4).hex(),
      },
      dark: {
        50: Color(generateShade(baseColor, 0.3, 'dark')).saturate(0.4).rotate(0.4).hex(),
        100: Color(generateShade(baseColor, 0.4, 'dark')).saturate(0.3).rotate(0.3).hex(),
        200: Color(generateShade(baseColor, 0.6, 'dark')).saturate(0.2).rotate(0.2).hex(),
        300: Color(generateShade(baseColor, 0.8, 'dark')).saturate(0.1).rotate(0.1).hex(),
        400: Color(generateShade(baseColor, 0.9, 'dark')).saturate(0.1).rotate(0.1).hex(),
        500: baseColor,
        600: generateShade(baseColor, 0.2, 'light'),
        700: generateShade(baseColor, 0.4, 'light'),
        800: generateShade(baseColor, 0.7, 'light'),
        900: generateShade(baseColor, 0.9, 'light')
      }
    }
  } else {
    shades = {
      light: {
        25: generateShade(baseColor, 0.97, 'light'),
        50: generateShade(baseColor, 0.93, 'light'),
        100: generateShade(baseColor, 0.87, 'light'),
        200: generateShade(baseColor, 0.80, 'light'),
        300: generateShade(baseColor, 0.70, 'light'),
        400: generateShade(baseColor, 0.55, 'light'),
        500: generateShade(baseColor, 0.25, 'light'),
        600: baseColor,
        700: Color(generateShade(baseColor, 0.75, 'dark')).saturate(0.2).rotate(0.2).hex(),
        800: Color(generateShade(baseColor, 0.6, 'dark')).saturate(0.3).rotate(0.3).hex(),
        900: Color(generateShade(baseColor, 0.4, 'dark')).saturate(0.4).rotate(0.4).hex(),
        1000: Color(generateShade(baseColor, 0.25, 'dark')).saturate(0.4).rotate(0.4).hex(),
      },
      dark: {
        25: Color(generateShade(baseColor, 0.15, 'dark')).saturate(0.4).rotate(0.4).hex(),
        50: Color(generateShade(baseColor, 0.22, 'dark')).saturate(0.4).rotate(0.4).hex(),
        100: Color(generateShade(baseColor, 0.29, 'dark')).saturate(0.3).rotate(0.3).hex(),
        200: Color(generateShade(baseColor, 0.35, 'dark')).saturate(0.2).rotate(0.2).hex(),
        300: Color(generateShade(baseColor, 0.5, 'dark')).saturate(0.1).rotate(0.1).hex(),
        400: Color(generateShade(baseColor, 0.65, 'dark')).saturate(0.1).rotate(0.1).hex(),
        500: Color(generateShade(baseColor, 0.8, 'dark')).saturate(0.1).rotate(0.1).hex(),
        600: baseColor,
        700: generateShade(baseColor, 0.2, 'light'),
        800: generateShade(baseColor, 0.5, 'light'),
        900: generateShade(baseColor, 0.7, 'light'),
        1000: generateShade(baseColor, 0.9, 'light')
      }
    }
  }
  
  scheme.colors = shades;
  return scheme as Palette;

}