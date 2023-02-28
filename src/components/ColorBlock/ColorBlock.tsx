import { useState } from "react";
// --- Context
import { useContextProvider } from "@/context/ContextProvider";
// --- import UseColor
import useColor from "@/hooks/UseColor";
// --- import Stitches
import { styled } from "stitches.config";
// --- Components
import { Popover, PopoverTrigger, PopoverContent } from "../Popover/Popover";
import ColorPicker from "../ColorPicker/ColorPicker";
import ColorBlockHeader from "./ColorBlockHeader";
import ColorPalette from "./ColorPalette";

interface IProps {
  color: {
    name: string,
    color: string
  }
}

const ColorBlockStyle = styled('div', {
  marginBottom: '$30',
  '@min992': {
    marginBottom: '$72',
  },
});

const ColorChanger = styled('div', {
  'button': {
    all: 'unset',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '$16',
    height: '$16',
    padding: '$2',
    border: '1px solid $slate7',
    borderRadius: '50%',
    cursor: 'pointer',
    '@min992': {
      width: '$18',
      height: '$18',
    },
    '&:hover': {
      borderColor: '$slate9'
    },
    '& > div': {
      width: '100%',
      height: '100%',
      borderRadius: '50%'
    },
  }
});

export default function ColorBlock({ color }: IProps) {
  const { changeColor, style } = useContextProvider();
  const [currentColor, setCurrentColor] = useState(color.color);
  const palette = useColor(currentColor, style);

  const handleChange = (value: string): void => {
    changeColor(currentColor, value);
    setCurrentColor(value);
  }

  return (
    <ColorBlockStyle>
      <ColorBlockHeader
        name={palette.name}
        colors={palette}
      >
        <ColorChanger>
          <Popover>
            <PopoverTrigger>
              <div style={{backgroundColor: currentColor}}></div>
            </PopoverTrigger>
            <PopoverContent>
              <ColorPicker color={currentColor} onChange={handleChange} input={true} />
            </PopoverContent>
          </Popover>
        </ColorChanger>
      </ColorBlockHeader>
      <ColorPalette color={palette.colors} />
    </ColorBlockStyle>
  )
}