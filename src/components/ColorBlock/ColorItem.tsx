import { useState, useCallback, useEffect } from "react";
// --- Copy to clipboard
import { CopyToClipboard } from "react-copy-to-clipboard";
// --- Function
import { getColorStyle } from "@/hooks/UseColor";
// --- import Stitches
import { styled } from "stitches.config";

const CopiedText = styled('p', {
  position: 'absolute',
  fontSize: '$13',
  fontWeight: '600',
  marginTop: 0,
  marginBottom: 0,
  left: '$48',
  padding: '$6 $8 $4',
  color: '$dashboardColor',
  backgroundColor: '$dashboardBody',
  borderRadius: '$4',
  '@min992': {
    left: 'auto',
    top: '$20',
    padding: '$8 $8 $6',
  }
})

interface IProps {
  intensity: string,
  value: string
}

export default function ColorItem({intensity, value}: IProps) {
  const [copy, setCopied] = useState<boolean>(false);

  useEffect(() => {
    const t: any = copy ? setTimeout(() => setCopied(false), 2000) : null;
    return () => clearTimeout(t);
  }, [copy, setCopied]);

  const onCopy = useCallback(() => {
    setCopied(true);
  }, [setCopied]);

  return (
    <CopyToClipboard
      onCopy={onCopy}
      text={value}
    >
      <div style={{backgroundColor: value, color: getColorStyle(value) ? '#FFF' : '#060a23'}}>
        <span>{intensity}</span> 
        {copy && (
          <CopiedText>Copied !</CopiedText>
        )}
        {value}
      </div>
    </CopyToClipboard>
  )
}