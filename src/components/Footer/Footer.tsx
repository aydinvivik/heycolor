// --- import Stitches
import { styled } from "stitches.config";
// -- Components
import Container from "../Container/Container";

const FooterStyle = styled('footer', {
  position: 'relative',
  textAlign: 'center',
  width: '100%',
  paddingTop: '$40',
  marginTop: 'auto',
  marginBottom: '$30',
  'p': {
    fontSize: '$14',
    'a': {
      fontWeight: '500',
      color: '$sky11',
      textDecoration: 'underline'
    }
  }
})

export default function Footer() {
  return (
    <FooterStyle>
      <Container>
        <p>Developer by <a href="https://twitter.com/aydinvivik">Aydin Vivik</a> - <a href="https://github.com/aydinvivik">Github</a></p>
      </Container>
    </FooterStyle>
  )
}