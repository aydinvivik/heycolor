import Head from 'next/head';
// --- import Stitches
import { styled } from "stitches.config";
// -- Components
import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';
import Container from '@/components/Container/Container';
import Content from '@/components/Content/Content';
import NewColor from '@/components/NewColor/NewColor';
import ColorList from '@/components/ColorList/ColorList';

const MainStyle = styled('main', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'space-between',
  minHeight: '100vh'
})

export default function Home() {
  return (
    <>
      <Head>
        <title>Heycolor</title>
        <meta name="description" content="Color shades generator for Tailwind, Chakra UI and Mantien Dev." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <MainStyle>
        <Header />
        <Container>
          <Content />
          <NewColor />
          <ColorList />
        </Container>
        <Footer />
      </MainStyle>
    </>
  )
}
