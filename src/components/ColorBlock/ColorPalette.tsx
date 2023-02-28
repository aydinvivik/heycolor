// --- import Stitches
import { styled } from "stitches.config";
// --- Components
import ColorItem from "./ColorItem";

interface IProps {
  color: {
    [key: string]: {
      [key: number]: string
    }
  }
}

const PaletteBlock = styled('div', {
  position: 'relative'
})

const PaletteItem = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  marginBottom: '$20',
  '@min992': {
    marginBottom: 0,
  },
  '& > span': {
    display: 'block',
    fontSize: '$13',
    marginBottom: '$10',
    '@min992': {
      display: 'none'
    }
  }
});

const PaletteStyle = styled('div', {
  display: 'flex',
  flexWrap: 'wrap'
})

const PaletteColor = styled('div', {
  flex: '0 0 auto',
  width: '100%',
  '@min992': {
    flex: '1 0 0%',
    width: 'auto',
  },
  '& > span': {
    display: 'none',
    '@min992': {
      display: 'block',
      fontSize: '$14',
      textAlign: 'center',
      marginBottom: '$14'
    }
  },
  '& > div': {
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    fontSize: '$13',
    lineHeight: '1',
    padding: '$17 $10 $15',
    cursor: 'pointer',
    '@min992': {
      alignItems: 'flex-end',
      justifyContent: 'center',
      height: 110,
      '& > span': {
        display: 'none'
      }
    }
  },
  '&:first-child': {
    '& > div': {
      borderTopLeftRadius: '$6',
      borderTopRightRadius: '$6',
      '@min992': {
        borderTopLeftRadius: '$8',
        borderTopRightRadius: 0,
      }
    },
    '&.dark-color': {
      '& > div': {
        '@min992': {
          borderTopLeftRadius: 0,
          borderBottomLeftRadius: '$8',
        }
      }
    }
  },
  '&:last-child': {
    '& > div': {
      borderBottomLeftRadius: '$6',
      borderBottomRightRadius: '$6',
    },
    '&.light-color': {
      '& > div': {
        '@min992': {
          borderTopRightRadius: '$8',
          borderBottomLeftRadius: 0,
          borderBottomRightRadius: 0,
        }
      }
    },
    '&.dark-color': {
      '& > div': {
        '@min992': {
          borderBottomLeftRadius: 0,
          borderBottomRightRadius: '$8',
        }
      }
    }
  },
  '&.dark-color.intensity-500': {
    '@min992': {
      position: 'relative',
      '&:before': {
        position: 'absolute',
        content: '',
        width: '100%',
        height: 1,
        top: 0,
        left: 0,
        backgroundColor: 'rgba(255, 255, 255, 0.15)',
        zIndex: '1'
      }
    }
  }
});

export default function ColorPalette({color}: IProps) {
  return (
    <PaletteBlock>
      {color.light && (
        <PaletteItem>
          <span>Light Scheme</span>
          <PaletteStyle className="light-scheme">
            {Object.entries(color.light).map(([key, value], index) => (
              <PaletteColor className={`color light-color intensity-${key}`} key={index}>
                <span>{key}</span> 
                <ColorItem intensity={key} value={value} />
              </PaletteColor>
            ))}
          </PaletteStyle>
        </PaletteItem>
      )}
      {color.dark && (
        <PaletteItem>
          <span>Dark Scheme</span>
          <PaletteStyle className="dark-scheme">
            {Object.entries(color.dark).map(([key, value], index) => (
              <PaletteColor className={`color dark-color intensity-${key}`} key={index}>
                <ColorItem intensity={key} value={value} />
              </PaletteColor>
            ))}
          </PaletteStyle>
        </PaletteItem>
      )}
    </PaletteBlock>
  )
}