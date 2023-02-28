// --- import Stitches
import { styled } from "stitches.config";

interface IProps {
  value: string;
}

const TrigerStyle = styled('div', {
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '$16',
  height: '$16',
  cursor: 'pointer',
  '@min992': {
    width: '$20',
    height: '$20',
  }
});

const TrigerColor = styled('div', {
  width: '100%',
  height: '100%',
  borderRadius: '50%'
})

export default function ColorTriger({value}: IProps) {
  return (
    <TrigerStyle>
      <TrigerColor style={{backgroundColor: value}} />
    </TrigerStyle>
  )
}