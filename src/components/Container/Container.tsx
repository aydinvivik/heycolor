import React from "react";
// --- import Stitches
import { styled } from "stitches.config";

const ContainerStyle = styled('div', {
  position: 'relative',
  maxWidth: 1280,
  width: '100%',
  marginLeft: 'auto',
  marginRight: 'auto',
  paddingLeft: '$20',
  paddingRight: '$20'
})

interface IProps {
  children: React.ReactNode
}

export default function Container({children}: IProps) {
  return (
    <ContainerStyle>{children}</ContainerStyle>
  )
}