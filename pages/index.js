import {
  BaseStyles,
  Badge,
  Box,
  Button,
  Card,
  Checkbox,
  Container,
  Flex,
  Grid,
  Heading,
  Input,
  Label,
  Link,
  NavLink,
  Radio,
  Select,
  Slider,
  Text,
  Textarea
} from 'theme-ui'
import Head from 'next/head'
import theme from '@hackclub/theme'
import Meta from '@hackclub/meta'
import ColorSwitcher from '../components/color-switcher'

const DocsPage = () => (
  <>
    <Meta
      as={Head}
      name="LinkScape"
      title="LinkScape"
    description="A non-profit organization which works for the future of open-source software"
    color="#ec3750"
    manifest="/site.webmanifest"
    />
  
    <Box as="header" sx={{ bg: 'sheet', color: 'text' }}>
      <Container sx={{ pt: 5, pb: [3, 4], textAlign: 'center' }}>
        <ColorSwitcher />
        <Heading as="h1" variant="title" color="red">
          LinkScape
        </Heading>
        <Text as="p" variant="subtitle" mt={3}>
          A non-profit organization which works for the future of open-source software
        </Text>
        <Grid
          gap={4}
          columns="auto auto auto"
          sx={{
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: 2,
            mt: 3,
            mb: 4,
            a: { color: 'muted', transition: 'color .125s ease-in-out' }
          }}
        >
          <NavLink href="https://github.com/LinkScapeFoundation">GitHub</NavLink>
          <NavLink href="https://github.com/LinkScapeFoundation/LinkDown">
            LinkDown
          </NavLink>
          <NavLink href="https://hackclub.com">
            HackClub
          </NavLink>
        </Grid>
      </Container>
    </Box>
    <Grid
      gaps={4}
      columns = "auto auto"
    >
      <Box
        sx={{
          color: 'White',
          lineHeight: 1.5,
          textAlign: 'left',
          margin: 'auto',
          maxWidth: '1600px',
          my: 5,
          px: 4,
          py: 3,
        }}
      >        
        <Heading
          as="div"
          sx={{
            fontSize: '96px',
            mb: [0, '-10px'],
            WebkitTextStroke: 'black',
            WebkitTextStrokeWidth: '0.7px',
            WebkitTextFillColor: 'White',
          }}
        >
          Have a dream?
        </Heading>
        <Heading
          sx={{
            color: 'White',
            fontSize: '96px',
            mb: 2,
            textShadow: `0px 0px 40.4900016784668px rgba(255, 71, 148, 1),
                          0px 0px 64.9800033569336px rgba(255, 71, 148, 0.9),
                          0px 0px 210.42999267578125px rgba(255, 71, 148, 0.8),
                          0px 0px 200.8599853515625px rgba(255, 71, 148, 0.7)`,
            position: 'relative',
            zIndex: '500',
          }}
        >
          Make it real.
        </Heading>
      </Box>
      <Container sx={{ textAlign: 'center' }}>
        <br />
        <br />
        <Heading as="h1" variant="title">
          Sponsors
        </Heading>
        <br />
        <Grid
          gaps={0}
          columns = "auto auto"
          sx={{
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: 6,
            mt: 3,
            mb: 4,
            a: { color: 'muted', transition: 'color .125s ease-in-out' }
          }}
        >
          <img alt="Hack Club Bank" src="https://gcore.jsdelivr.net/gh/thomaswcy/linkscape.io/hcb-logo-original-light.svg" />
          <svg fill="var(--geist-foreground)" width="256" viewBox="0 0 284 65"><path d="M141.68 16.25c-11.04 0-19 7.2-19 18s8.96 18 20 18c6.67 0 12.55-2.64 16.19-7.09l-7.65-4.42c-2.02 2.21-5.09 3.5-8.54 3.5-4.79 0-8.86-2.5-10.37-6.5h28.02c.22-1.12.35-2.28.35-3.5 0-10.79-7.96-17.99-19-17.99zm-9.46 14.5c1.25-3.99 4.67-6.5 9.45-6.5 4.79 0 8.21 2.51 9.45 6.5h-18.9zm117.14-14.5c-11.04 0-19 7.2-19 18s8.96 18 20 18c6.67 0 12.55-2.64 16.19-7.09l-7.65-4.42c-2.02 2.21-5.09 3.5-8.54 3.5-4.79 0-8.86-2.5-10.37-6.5h28.02c.22-1.12.35-2.28.35-3.5 0-10.79-7.96-17.99-19-17.99zm-9.45 14.5c1.25-3.99 4.67-6.5 9.45-6.5 4.79 0 8.21 2.51 9.45 6.5h-18.9zm-39.03 3.5c0 6 3.92 10 10 10 4.12 0 7.21-1.87 8.8-4.92l7.68 4.43c-3.18 5.3-9.14 8.49-16.48 8.49-11.05 0-19-7.2-19-18s7.96-18 19-18c7.34 0 13.29 3.19 16.48 8.49l-7.68 4.43c-1.59-3.05-4.68-4.92-8.8-4.92-6.07 0-10 4-10 10zm82.48-29v46h-9v-46h9zM37.59.25l36.95 64H.64l36.95-64zm92.38 5l-27.71 48-27.71-48h10.39l17.32 30 17.32-30h10.39zm58.91 12v9.69c-1-.29-2.06-.49-3.2-.49-5.81 0-10 4-10 10v14.8h-9v-34h9v9.2c0-5.08 5.91-9.2 13.2-9.2z"></path></svg>
          <img alt="1Password" src="https://gcore.jsdelivr.net/gh/thomaswcy/linkscape.io/1P-wordmark.svg" width='256' />
          <img alt="StickerMule" src="https://gcore.jsdelivr.net/gh/thomaswcy/linkscape.io@main/sticker-mule-logo-light-bg.svg" width="256" />
          
        </Grid>
      </Container>
    </Grid>
    <footer>
      <Container sx={{ textAlign: 'center' }}>
        <a href="https://vercel.com/?utm_source=linkscape&utm_campaign=oss">
          <img alt="Vercel" src="https://www.datocms-assets.com/31049/1618983297-powered-by-vercel.svg" />
        </a>
      </Container>
    </footer>
  </>
)

export default DocsPage
