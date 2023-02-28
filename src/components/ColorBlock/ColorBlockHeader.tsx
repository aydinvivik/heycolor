// --- import Stitches
import { styled } from "stitches.config";
// --- Context
import { useContextProvider } from "@/context/ContextProvider";
// --- Export function
import UseExport from "@/hooks/UseExport";
// --- Components
import { Dialog, DialogContent, DialogTrigger } from "../Dialog/Dialog";
// --- Import type
import { Palette } from "@/hooks/UseColor";

import * as Tabs from '@radix-ui/react-tabs';

interface IProps {
  children: React.ReactNode,
  name: string,
  colors: Palette
}

const BlockHeader = styled('div', {
  display: 'flex',
  alignItems: 'center',
  marginBottom: '$15',
  paddingBottom: '$10',
  borderBottom: '1px solid $slate4',
  '@min992': {
    marginBottom: '$30',
  }
})

const ColorName = styled('h3', {
  fontSize: '$15',
  fontWeight: '500',
  lineHeight: '1',
  marginBottom: 0,
  marginLeft: '$10',
  '@min992': {
    fontSize: '$16',
  }
});

const ColorExport = styled('div', {
  fontSize: '$14',
  fontWeight: '500',
  lineHeight: '1',
  color: '$slate9',
  marginBottom: 0,
  marginLeft: 'auto',
  cursor: 'pointer',
  '@min992': {
    fontSize: '$15',
  },
  'button': {
    all: 'unset'
  }
})

const ColorDelete = styled('div', {
  fontSize: '$14',
  fontWeight: '500',
  lineHeight: '1',
  color: '$slate8',
  marginBottom: 0,
  marginLeft: '$15',
  cursor: 'pointer',
  '@min992': {
    fontSize: '$15',
  },
  '&:hover': {
    color: 'red'
  }
})

const TabsList = styled(Tabs.List, {
  display: 'flex',
  alignItems: 'center',
  flexWrap: 'wrap',
  borderBottom: '1px solid $slate5',
  userSelect: 'none',
  'button': {
    all: 'unset',
    position: 'relative',
    display: 'inline-flex',
    fontSize: '$15',
    fontWeight: '500',
    color: '$slate9',
    padding: '$14 $20',
    cursor: 'pointer',
    '&[data-state="active"]': {
      color: '$dashboardColor',
      '&::before': {
        position: 'absolute',
        content: '',
        backgroundColor: '$sky8',
        width: '100%',
        height: '$2',
        bottom: -1,
        left: 0
      }
    }
  }
})

const TabContent = styled(Tabs.Content, {
  display: 'flex',
  flexWrap: 'wrap',
  gap: 10,
  '& > *': {
    flex: '0 0 auto',
    width: '100%',
    padding: 10,
  },
  'span': {
    display: 'block',
    fontFamily: 'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace',
    fontSize: '$13',
    color: '$slate8',
    padding: '$5 $10 $2',
    marginTop: 8,
    pointerEvents: 'none',
    userSelect: 'none'
  },
  'pre': {
    fontFamily: 'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace',
    fontSize: '$13',
    lineHeight: '1.46',
    margin:0,
    padding: 10,
    whiteSpace: 'pre'
  },
  '@min992': {
    justifyContent: 'space-between',
    '& > *': {
      width: '45%',
    }
  }
})

export default function ColorBlockHeader({children, name, colors}: IProps) {
  const { color, deleteColor } = useContextProvider();

  const colorIndex = (): number => {
    return color.findIndex((e) => e.name === name);
  }

  const deletePalette = (): void =>{
    deleteColor(colorIndex());
  }
 
  return (
    <BlockHeader>
      {children}
      <ColorName>{name}</ColorName>
      <ColorExport>
        <Dialog>
          <DialogTrigger>Export</DialogTrigger>
          <DialogContent>
            <Tabs.Root defaultValue="tab1" orientation="vertical">
              <TabsList aria-label="tabs example">
                <Tabs.Trigger value="tab1">Default</Tabs.Trigger>
                <Tabs.Trigger value="tab2">Light</Tabs.Trigger>
                <Tabs.Trigger value="tab3">Dark</Tabs.Trigger>
              </TabsList>
              <TabContent value="tab1">
                <div>
                  <span>Default Shades</span>
                  <pre>
                    {JSON.parse(UseExport(colors, 'default'))}
                  </pre>
                </div>
              </TabContent>
              <TabContent value="tab2">
                <div>
                  <span>Light Shades</span>
                  <pre>
                    {JSON.parse(UseExport(colors, 'light'))}
                  </pre>
                </div>
                <div>
                  <span>Mantine Light Shades</span>
                  <pre>
                    {JSON.parse(UseExport(colors, 'mantine-light'))}
                  </pre>
                </div>
              </TabContent>
              <TabContent value="tab3">
                <div>
                  <span>Dark Shades</span>
                  <pre>
                    {JSON.parse(UseExport(colors, 'dark'))}
                  </pre>
                </div>
                <div>
                  <span>Mantine Dark Shades</span>
                  <pre>
                    {JSON.parse(UseExport(colors, 'mantine-dark'))}
                  </pre>
                </div>
              </TabContent>
            </Tabs.Root>
          </DialogContent>
        </Dialog>
      </ColorExport>
      {colorIndex() !== 0 && (
        <ColorDelete onClick={deletePalette}>Delete</ColorDelete>
      )}
    </BlockHeader>
  )
}