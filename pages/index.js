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
      <Grid gap={3} columns={[null, 2]}
        as="div"
        <Container>
        sx={{
        <Heading
          fontSize: '96px',
          as="div"
          mb: [0, '-10px'],
          sx={{
          WebkitTextStroke: 'black',
            fontSize: '96px',
          WebkitTextStrokeWidth: '0.7px',
            mb: [0, '-10px'],
          WebkitTextFillColor: 'White',
            WebkitTextStroke: 'black',
        }}
            WebkitTextStrokeWidth: '0.7px',
      >
            WebkitTextFillColor: 'White',
        Have a dream?
          }}
      </Heading>
        >
      <Heading
          Have a dream?
        sx={{
        </Heading>
          color: 'White',
        <Heading
          fontSize: '96px',
          sx={{
          mb: 2,
            color: 'White',
          textShadow: `0px 0px 40.4900016784668px rgba(255, 71, 148, 1),
            fontSize: '96px',
                        0px 0px 64.9800033569336px rgba(255, 71, 148, 0.9),
            mb: 2,
                        0px 0px 210.42999267578125px rgba(255, 71, 148, 0.8),
            textShadow: `0px 0px 40.4900016784668px rgba(255, 71, 148, 1),
                        0px 0px 200.8599853515625px rgba(255, 71, 148, 0.7)`,
                         0px 0px 64.9800033569336px rgba(255, 71, 148, 0.9),
          position: 'relative',
                         0px 0px 210.42999267578125px rgba(255, 71, 148, 0.8),
          zIndex: '500',
                         0px 0px 200.8599853515625px rgba(255, 71, 148, 0.7)`,
        }}
            position: 'relative',
      >
            zIndex: '500',
        Make it real.
          }}
      </Heading>
        >
    </Box>
    <footer align="center">
      <Container sx={{ textAlign: 'center' }}>
        <a href="https://vercel.com/?utm_source=linkscape&utm_campaign=oss" align="center">
          <img align="center" alt="Vercel" src="https://www.datocms-assets.com/31049/1618983297-powered-by-vercel.svg" />
        </a>
      </Container>
    </footer>
  </>
)

export default DocsPage
