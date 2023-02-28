// --- import Stitches
import { styled } from "stitches.config";

const ContentStyle = styled('div', {
  position: 'relative',
  textAlign: 'center',
  marginTop: '$30',
  '@min992': {
    marginTop: '$88'
  }
})

const Title = styled('h1', {
  position: 'relative',
  fontSize: '$24',
  fontWeight: '600',
  lineHeight: '1.2',
  maxWidth: 820,
  marginLeft: 'auto',
  marginRight: 'auto',
  '@min992': {
    fontSize: '$54'
  }
})

const Description = styled('div', {
  fontFamily: '$MonaSans',
  fontSize: '$15',
  lineHeight: '1.4',
  color: '$slate10',
  maxWidth: 520,
  marginLeft: 'auto',
  marginRight: 'auto',
  '@min992': {
    fontSize: '$20'
  }
})

export default function Content() {
  return (
    <ContentStyle>
      <Title>Create and use your own gorgeous color palette</Title>
      <Description>
        <p>You can create your own color palettes and use them in sites and apps with component libraries.</p>
      </Description>
    </ContentStyle>
  )
}