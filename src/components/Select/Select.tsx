import React from "react";
// --- Select plugin
import * as SelectPrimitive from "@radix-ui/react-select";
// --- Stitches
import { styled, keyframes } from "stitches.config";

const SelectTrigger = styled(SelectPrimitive.Trigger, {
  all: 'unset',
  flex: '1 0 0%',
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  gap: 5,
  fontFamily: '$MonaSans',
  fontSize: '$15',
  lineHeight: 1,
  height: '$44',
  marginLeft: -1,
  marginRight: -1,
  paddingLeft: 1,
  paddingRight: '$13',
  boxSizing: 'border-box',
  cursor: 'pointer',
  '@min992': {
    fontSize: '$16',
    height: '$52',
  },
  '& > span:not([aria-hidden])': {
    fontWeight: '500',
    paddingTop: '$18',
    paddingLeft: '$44',
    '@min992': {
      paddingTop: '$20'
    },
  }
});

const SelectIcon = styled(SelectPrimitive.Icon, {
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '$20',
  height: '$20',
  '& svg': {
    width: '$18',
    height: '$18'
  }
});

const SelectContent = styled(SelectPrimitive.Content, {
  width: '100%',
  overflow: 'hidden',
  backgroundColor: 'white',
  boxShadow: '0px 20px 38px -10px rgba(22, 23, 24, 0.15), 0px 20px 20px -15px rgba(22, 23, 24, 0.1)',
  minWidth: 'var(--radix-select-trigger-width)',
  borderBottomLeftRadius: '$6',
  borderBottomRightRadius: '$6',
  border: '1px solid $slate7',
  borderTop: 0,
  '@min992': {
    borderBottomLeftRadius: '$8',
    borderBottomRightRadius: '$8',
  },
})

const SelectViewport = styled(SelectPrimitive.Viewport, {
  padding: 5,
});

const SelectItemStyle = styled(SelectPrimitive.Item, {
  position: 'relative',
  display: 'flex',
  alignItems: 'center',
  fontSize: '$14',
  lineHeight: '1',
  padding: '$10 $2 $10 39px',
  borderRadius: '$6',
  cursor: 'pointer',
  outline: 'none',
  boxShadow: 'none',
  '& + &': {
    marginTop: 2
  },
  '&:hover': {
    backgroundColor: '$sky2'
  },
  '&[data-state=checked]': {
    color: '$sky12',
    backgroundColor: '$sky5'
  },
  '& [aria-hidden]': {
    position: 'absolute',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '$20',
    height: '$20',
    left: '$8',
    '& svg': {
      width: '$17',
      height: '$17',
    }
  },
  '@min992': {
    fontSize: '$15',
  }
})

export const Select = ({children, ...props}: SelectPrimitive.SelectProps) => {
  return (
    <SelectPrimitive.Root {...props}>
      <SelectTrigger>
        <SelectPrimitive.Value className="value" />
        <SelectIcon>
          <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3.13523 6.15803C3.3241 5.95657 3.64052 5.94637 3.84197 6.13523L7.5 9.56464L11.158 6.13523C11.3595 5.94637 11.6759 5.95657 11.8648 6.15803C12.0536 6.35949 12.0434 6.67591 11.842 6.86477L7.84197 10.6148C7.64964 10.7951 7.35036 10.7951 7.15803 10.6148L3.15803 6.86477C2.95657 6.67591 2.94637 6.35949 3.13523 6.15803Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd"></path></svg>
        </SelectIcon>
      </SelectTrigger>
      <SelectPrimitive.Portal>
        <SelectContent position="popper" sideOffset={-3}>
          <SelectPrimitive.ScrollUpButton>
            <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3.13523 8.84197C3.3241 9.04343 3.64052 9.05363 3.84197 8.86477L7.5 5.43536L11.158 8.86477C11.3595 9.05363 11.6759 9.04343 11.8648 8.84197C12.0536 8.64051 12.0434 8.32409 11.842 8.13523L7.84197 4.38523C7.64964 4.20492 7.35036 4.20492 7.15803 4.38523L3.15803 8.13523C2.95657 8.32409 2.94637 8.64051 3.13523 8.84197Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd"></path></svg>
          </SelectPrimitive.ScrollUpButton>
          <SelectViewport>{children}</SelectViewport>
          <SelectPrimitive.ScrollDownButton>
            <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3.13523 6.15803C3.3241 5.95657 3.64052 5.94637 3.84197 6.13523L7.5 9.56464L11.158 6.13523C11.3595 5.94637 11.6759 5.95657 11.8648 6.15803C12.0536 6.35949 12.0434 6.67591 11.842 6.86477L7.84197 10.6148C7.64964 10.7951 7.35036 10.7951 7.15803 10.6148L3.15803 6.86477C2.95657 6.67591 2.94637 6.35949 3.13523 6.15803Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd"></path></svg>
          </SelectPrimitive.ScrollDownButton>
        </SelectContent>
      </SelectPrimitive.Portal>
    </SelectPrimitive.Root>
  )
}

export const SelectItem = ({children, value, ...props}: SelectPrimitive.SelectItemProps) => {
  return (
    <SelectItemStyle {...props} value={value}>
      <SelectPrimitive.ItemText>{children}</SelectPrimitive.ItemText>
      <SelectPrimitive.ItemIndicator>
        <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M11.4669 3.72684C11.7558 3.91574 11.8369 4.30308 11.648 4.59198L7.39799 11.092C7.29783 11.2452 7.13556 11.3467 6.95402 11.3699C6.77247 11.3931 6.58989 11.3355 6.45446 11.2124L3.70446 8.71241C3.44905 8.48022 3.43023 8.08494 3.66242 7.82953C3.89461 7.57412 4.28989 7.55529 4.5453 7.78749L6.75292 9.79441L10.6018 3.90792C10.7907 3.61902 11.178 3.53795 11.4669 3.72684Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd"></path></svg>
      </SelectPrimitive.ItemIndicator>
    </SelectItemStyle>
  )
}