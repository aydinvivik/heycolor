// --- Import dialog settings
import * as DialogPrimitive from "@radix-ui/react-dialog";
// --- import Stitches
import { styled, keyframes } from "stitches.config";

const overlayShow = keyframes({
  '0%': { opacity: 0 },
  '100%': { opacity: 1 },
});

const contentShow = keyframes({
  '0%': { opacity: 0, transform: 'translate(-50%, -48%) scale(.96)' },
  '100%': { opacity: 1, transform: 'translate(-50%, -50%) scale(1)' },
});

const DialogOverlay = styled(DialogPrimitive.Overlay, {
  backgroundColor: 'rgba(0, 0, 0, 0.8)',
  position: 'fixed',
  inset: 0,
  animation: `${overlayShow} 150ms cubic-bezier(0.16, 1, 0.3, 1)`,
});

const DialogContentStyle = styled(DialogPrimitive.Content, {
  backgroundColor: '$dashboardBody',
  borderRadius: 12,
  boxShadow: 'hsl(206 22% 7% / 35%) 0px 10px 38px -10px, hsl(206 22% 7% / 20%) 0px 10px 20px -15px',
  position: 'fixed',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '90vw',
  maxWidth: '560px',
  maxHeight: '85vh',
  animation: `${contentShow} 150ms cubic-bezier(0.16, 1, 0.3, 1)`,
  '&:focus': { outline: 'none' },
});

const DialogClose = styled(DialogPrimitive.Close, {
  all: 'unset',
  position: 'absolute',
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '$26',
  height: '$26',
  top: 10,
  right: 10,
  cursor: 'pointer',
  'svg': {
    width: '$18',
    height: '$18'
  }
})

export const DialogContent = ({children, ...props}: DialogPrimitive.DialogProps) => {
  return (
    <DialogPrimitive.Portal>
      <DialogOverlay />
      <DialogContentStyle {...props}>
        {children}
        <DialogClose aria-label="Close">
          <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12.8536 2.85355C13.0488 2.65829 13.0488 2.34171 12.8536 2.14645C12.6583 1.95118 12.3417 1.95118 12.1464 2.14645L7.5 6.79289L2.85355 2.14645C2.65829 1.95118 2.34171 1.95118 2.14645 2.14645C1.95118 2.34171 1.95118 2.65829 2.14645 2.85355L6.79289 7.5L2.14645 12.1464C1.95118 12.3417 1.95118 12.6583 2.14645 12.8536C2.34171 13.0488 2.65829 13.0488 2.85355 12.8536L7.5 8.20711L12.1464 12.8536C12.3417 13.0488 12.6583 13.0488 12.8536 12.8536C13.0488 12.6583 13.0488 12.3417 12.8536 12.1464L8.20711 7.5L12.8536 2.85355Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd"></path></svg>
        </DialogClose>
      </DialogContentStyle>
    </DialogPrimitive.Portal>
  )
}

export const Dialog = DialogPrimitive.Root;
export const DialogTrigger = DialogPrimitive.Trigger;