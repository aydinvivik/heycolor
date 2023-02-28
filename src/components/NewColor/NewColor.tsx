import { useState, useRef } from "react";
// --- import Stitches
import { styled } from "stitches.config";
// --- Context
import { useContextProvider } from "@/context/ContextProvider";
// --- Get color name
import { getColorName } from "@/hooks/UseColor";
// --- Plugins
import { HexColorInput } from "react-colorful";
// --- Components
import { Popover, PopoverTrigger, PopoverContent } from "../Popover/Popover";
import ChangeStyle from "../ChangeStyle/ChangeStyle";
import ColorTriger from "../ColorTriger/ColorTriger";
import ColorPicker from "../ColorPicker/ColorPicker";

interface Palette {
  name: string;
  color: string
}

const NewColorStyle = styled('div', {
  position: 'relative',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexWrap: 'wrap',
  gap: '$10',
  maxWidth: 820,
  marginLeft: 'auto',
  marginRight: 'auto',
  marginTop: '$30',
  '@min992': {
    gap: '$20',
    marginTop: '$56',
  }
})

const ColorSelector = styled('div', {
  position: 'relative',
  display: 'inline-flex',
  alignItems: 'center',
  flex: '0 0 auto',
  width: '100%',
  paddingLeft: '$5',
  paddingRight: '$5',
  border: '1px solid $slate7',
  borderRadius: '$6',
  $$shadowColor: '$colors$slate3',
  boxShadow: '0 1px 2px $$shadowColor',
  '@min992': {
    width: 'calc(60% - 20px + 10px)',
    borderRadius: '$8',
  },
  '&:hover': {
    borderColor: '$slate8'
  },
  '&.isActive': {
    $$shadowColor: '$colors$sky7',
    boxShadow: '0 0 0 1px $$shadowColor',
    borderColor: '$sky7'
  },
  '& > button': {
    display: 'inline-flex',
    fontFamily: '$MonaSans',
    fontSize: '$14',
    fontWeight: '600',
    lineHeight: '$34',
    paddingLeft: '$12',
    paddingRight: '$12',
    height: '$34',
    color: '$sky12',
    backgroundColor: '$sky5',
    border: '0',
    borderRadius: '$4',
    cursor: 'pointer',
    '@min992': {
      fontSize: '$15',
      lineHeight: '$42',
      height: '$42',
      paddingLeft: '$16',
      paddingRight: '$16',
      borderRadius: '$6',
    },
    '&:hover': {
      backgroundColor: '$sky6'
    }
  }
})

const InputStyle = styled('div', {
  display: 'inline-flex',
  alignItems: 'center',
  flexWrap: 'wrap',
  flex: '1 0 0%',
  'button': {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '$34',
    height: '$34',
    border: 0,
    padding: 0,
    borderRadius: '$4',
    cursor: 'pointer',
    marginRight: '$5',
    backgroundColor: 'transparent',
    '@min992': {
      width: '$42',
      height: '$42',
      borderRadius: '$6',
    }
  },
  'span': {
    position: 'relative',
    fontSize: '$16',
    lineHeight: '1',
    color: '$slate8',
    marginRight: '$5',
    userSelect: 'none',
    pointerEvents: 'none',
    top: '$1',
    '@min992': {
      fontSize: '$18',
      top: '$2',
      marginRight: '$6',
    }
  },
  'input': {
    flex: '1 0 0%',
    display: 'inline-flex',
    alignItems: 'center',
    fontFamily: '$MonaSans',
    fontSize: '$16',
    fontWeight: '500',
    textTransform: 'uppercase',
    lineHeight: '1',
    width: '100%',
    height: '$44',
    padding: '$3 0 0 0',
    backgroundColor: 'transparent',
    border: 0,
    outline: 'none',
    boxShadow: 'none',
    '@min992': {
      fontSize: '$17',
      height: '$52',
      padding: '$2 0 0 0',
    }
  }
})

const SubDescription = styled('div', {
  fontSize: '$13',
  textAlign: 'center',
  color: '$slate8',
  marginTop: '$14',
  marginBottom: '$20'
})

export default function NewColor() {
  const { addNewColor } = useContextProvider();
  const [defaultColor, setDefaultColor] = useState('#56c6f0');
  const [active, setActive] = useState(false);

  const addColor = (): void => {
    const color: Palette = {
      name: getColorName(defaultColor),
      color: defaultColor
    }

    addNewColor(color);
  }

  return (
    <>
      <NewColorStyle>
        <ColorSelector className={active ? 'isActive' : ''}>
          <InputStyle>
            <Popover>
              <PopoverTrigger>
                <ColorTriger value={defaultColor} />
              </PopoverTrigger>
              <PopoverContent>
                <ColorPicker color={defaultColor} onChange={setDefaultColor} input={false} />
              </PopoverContent>
            </Popover>
            <span>#</span>
            <HexColorInput color={defaultColor} onChange={setDefaultColor} onFocus={() => setActive(true)} onBlur={() => setActive(false)} />
          </InputStyle>
          <button onClick={addColor}>Add Color</button>
        </ColorSelector>
        <ChangeStyle />
      </NewColorStyle>
      <SubDescription>You can use the color schemes you create in Tailwind CSS, Chakra UI and Mantine Dev component libraries.</SubDescription>
    </>
  )
}