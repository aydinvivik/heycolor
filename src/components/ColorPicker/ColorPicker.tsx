import { useState } from "react";
// --- import Stitches
import { styled } from "stitches.config";
// --- Debounce
import { useDebouncyEffect } from "use-debouncy";
// --- Color Picker
import { HexColorPicker, HexColorInput } from "react-colorful";

interface IProps {
  color: string,
  onChange: Function,
  input: boolean
}

const ColorPickerStyle = styled('div', {
  position: 'relative'
})

const ColorPickerInput = styled('div', {
  position: 'relative',
  display: 'flex',
  alignItems: 'center',
  marginTop: '$10',
  'p': {
    position: 'absolute',
    fontSize: '$11',
    color: '$slate8',
    marginTop: '$3',
    marginBottom: 0,
    right: '$10',
    pointerEvents: 'none'
  },
  'span': {
    position: 'absolute',
    fontSize: '$15',
    color: '$slate8',
    marginTop: '$3',
    left: '$12',
    pointerEvents: 'none'
  },
  'input': {
    display: 'inline-flex',
    fontFamily: '$MonaSans',
    fontSize: '$15',
    fontWeight: '500',
    lineHeight: '$38',
    width: '100%',
    height: '$38',
    padding: '$4 $12 0 $28',
    border: '1px solid $slate7',
    borderRadius: '$8',
    boxShadow: 'none',
    outline: 'none',
    '&:hover': {
      borderColor: '$slate8'
    },
  }
})

export default function ColorPicker({ color, onChange, input }: IProps) {
  const [value, setValue] = useState(color);
  useDebouncyEffect(() => onChange(value), 200, [value]);

  return (
    <ColorPickerStyle>
      <HexColorPicker color={value} onChange={setValue} />
      {input && (
        <ColorPickerInput>
          <span>#</span>
          <HexColorInput color={value} onChange={setValue} />
          <p>Hex Code</p>
        </ColorPickerInput>
      )}
    </ColorPickerStyle>
  )
}