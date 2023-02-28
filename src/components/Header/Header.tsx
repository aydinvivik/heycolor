// --- import Stitches
import { styled } from "stitches.config";
// --- Components
import Container from "../Container/Container";
import Logo from "../Logo/Logo";
import ThemeSwitcher from "../ThemeSwitcher/ThemeSwitcher";
import GithubIcon from "../GithubIcon/GithubIcon";

const HeaderStyle = styled('header', {
  position: 'relative',
  width: '100%',
  marginTop: '$15',
  paddingBottom: '$15',
  '@min992': {
    marginTop: '$40',
    paddingBottom: '$10',
  }
})

const HeaderInner = styled('div', {
  display: 'flex',
  alignItems: 'center'
})

export default function Header() {
  return (
    <HeaderStyle>
      <Container>
        <HeaderInner>
          <Logo />
          <GithubIcon />
          <ThemeSwitcher />
        </HeaderInner>
      </Container>
    </HeaderStyle>
  )
}