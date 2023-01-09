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
    <footer>
      <a href="https://vercel.com/?utm_source=linkscape&utm_campaign=oss">
        <img alt="Vercel" src="https://www.datocms-assets.com/31049/1618983297-powered-by-vercel.svg" />
      </a>
    </footer>
  </>
)

export default DocsPage
