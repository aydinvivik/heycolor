import React from "react";
// --- Stitches
import { styled, keyframes } from "stitches.config";
// --- Popover plugin
import * as PopoverPrimitive from "@radix-ui/react-popover";

const slideUpAndFade = keyframes({
  '0%': { opacity: 0, transform: 'translateY(2px)' },
  '100%': { opacity: 1, transform: 'translateY(0)' },
});

const slideRightAndFade = keyframes({
  '0%': { opacity: 0, transform: 'translateX(-2px)' },
  '100%': { opacity: 1, transform: 'translateX(0)' },
});

const slideDownAndFade = keyframes({
  '0%': { opacity: 0, transform: 'translateY(-2px)' },
  '100%': { opacity: 1, transform: 'translateY(0)' },
});

const slideLeftAndFade = keyframes({
  '0%': { opacity: 0, transform: 'translateX(2px)' },
  '100%': { opacity: 1, transform: 'translateX(0)' },
});

const PopoverContentStyle = styled(PopoverPrimitive.Content, {
  borderRadius: 12,
  padding: 10,
  width: 220,
  backgroundColor: 'white',
  boxShadow: 'hsl(206 22% 7% / 35%) 0px 10px 38px -10px, hsl(206 22% 7% / 20%) 0px 10px 20px -15px',
  animationDuration: '400ms',
  animationTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)',
  willChange: 'transform, opacity',
  zIndex: '$popover',
  '&[data-state="open"]': {
    '&[data-side="top"]': { animationName: slideDownAndFade },
    '&[data-side="right"]': { animationName: slideLeftAndFade },
    '&[data-side="bottom"]': { animationName: slideUpAndFade },
    '&[data-side="left"]': { animationName: slideRightAndFade },
  }
});

const PopoverArrow = styled(PopoverPrimitive.Arrow, {
  fill: 'white',
});

const PopoverTrigerReset = styled(PopoverPrimitive.Trigger, {
  all: 'unset'
})

export const Popover = PopoverPrimitive.Root;
export const PopoverTrigger = PopoverPrimitive.Trigger;

interface IProps {
  children: React.ReactNode
}

export const PopoverContent = ({children, ...props}: IProps) => {
  return (
    <PopoverPrimitive.Portal>
      <PopoverContentStyle sideOffset={3} {...props}>
        {children}
        <PopoverArrow />
      </PopoverContentStyle>
    </PopoverPrimitive.Portal>
  )
}