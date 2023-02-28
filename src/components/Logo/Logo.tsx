import { styled } from "stitches.config";

const LogoStyle = styled('div', {
  position: 'relative',
  display: 'inline-flex',
  alignItems: 'center',
  fontSize: '$24',
  fontWeight: '600',
  letterSpacing: '-0.035em',
  'svg': {
    position: 'relative',
    width: '$24',
    height: '$24',
    marginRight: '$6',
    top: '-$1'
  },
  'span': {
    lineHeight: 1
  }
})

export default function Logo() {
  return (
    <LogoStyle className="site-brand">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" fill="none">
        <circle cx="24" cy="24" r="20" stroke="currentColor" strokeWidth="4"/>
        <path d="M31 5.25922C23.4067 8.09669 18 15.4169 18 24C18 32.5831 23.4067 39.9033 31 42.7408" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M37 9L18 22" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M41 14L19 29" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M43 20L22 35" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M43 28L26 40" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
      <span>heycolor</span>
    </LogoStyle>
  )
}