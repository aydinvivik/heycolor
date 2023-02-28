// --- Import stitches
import { styled } from "stitches.config";
// --- Context
import { useContextProvider } from "@/context/ContextProvider";
// --- Components
import ColorBlock from "../ColorBlock/ColorBlock";

const ColorListStyle = styled('div', {
  position: 'relative',
  marginTop: '$30',
  '@min992': {
    marginTop: '$80',
  }
})

export default function ColorList() {
  const { color } = useContextProvider();

  return (
    <ColorListStyle>
      {color.map((item, index) => (
        <ColorBlock key={index} color={item} />
      ))}
    </ColorListStyle>
  )
}