import {
  Avatar,
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
import { SiGithub } from '@icons-pack/react-simple-icons'
import { BanknotesIcon } from '@heroicons/react/24/solid'
import Head from 'next/head'
import theme from '@hackclub/theme'
import Meta from '@hackclub/meta'

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
    <Box as="header" sx={{ bg: '#000000' }}>
	  <br />
	  <br />
          <Box
            sx={{
              width: '90vw',
              maxWidth: [null, 'layout'],
              position: 'relative',
              mx: 'auto',
              py: [4, 4, 4],
              textShadow: 'text',
            }}
          >
            <Text
              variant="eyebrow"
              sx={{
                color: 'sunken',
                pb: 2,
                position: 'relative',
                display: 'block'
              }}
              as="h4"
            >
              This is LinkScape
            </Text>
            <Heading>
              <Text
                as="h1"
                variant="title"
                sx={{
                  color: 'white',
                  mb: [3, 4],
                  zIndex: 1,
                  textAlign: 'left',
                  fontSize: ['42px', '52px', '64px'],
                  lineHeight: 1.2,
                  width: '100%'
                }}
              >
                We are
                <Text
                  sx={{
                    color: 'transparent',
                    ml: 2,
                    mr: 3,
                    whiteSpace: 'nowrap'
                  }}
                >
                  <Text
                    onClick={() => {
                      setHover(false)
                      !reveal ? setReveal(true) : setReveal(false)
                    }}
                    sx={{
                      // lineHeight: 0.875,
                      px: 2,
                      backgroundColor: 'blue',
                      position: 'absolute',
                      borderRadius: 10,
                      transform: 'rotate(-3deg) translateY(-5px)',
                      color: 'white',
                      whiteSpace: 'nowrap',
                      textDecoration: 'none',
                      '&:hover': {
                        cursor: 'pointer'
                      }
                    }}
                    aria-hidden="true"
                  >
                    student hackers
                  </Text>
                  student hackers
                </Text>
                <br sx={{ display: ['inline', 'none', 'none'] }} /> from 
                China who code together
              </Text>
              <Button
                variant="ctaLg"
                as="a"
                href="/donate"
                mt={[3, 0, 0]}
                sx={{ transformOrigin: 'center left', backgroundImage: theme.util.gx('cyan', 'blue') }}
              >
                <BanknotesIcon className='h-6 w-6 text-white'/>
                Donate
              </Button>
              <Button
                variant="ctaLg"
                as="a"
                href="https://github.com/LinkScapeOfficial"
                ml={3}
                sx={{ transformOrigin: 'center left', backgroundImage: theme.util.gx('cyan', 'blue') }}
              >
                <SiGithub size={24}/>
                Github
              </Button>
            </Heading>
          </Box>
    </Box>
    <Container variant="copy" mt={3}>
      <Card variant='sunken'>
      <Text variant='headline'>Subscribe to our newsletter!</Text>
      <form action="https://postal.hackclub.com/subscribe" method="POST" accept-charset="utf-8">
        <Input type="text" name="name" id="name" placeholder="Name" required />

        <Input mt={2} type="email" name="email" id="email" placeholder="Email" required />

        <Input type="hidden" name="hp" id="hp" />
        <Input type="hidden" name="list" value="1AaBEdR4lS7PwHFOfEzGtQ" />
        <Input type="hidden" name="subform" value="yes" />

        <Button type="submit" mt={3} sx={{ transformOrigin: 'center left', backgroundImage: theme.util.gx('cyan', 'blue') }}>SUBSCRIBE</Button>
      </form>
      </Card>
    </Container>

    <br />
    <Grid
      columns={[1, 'auto auto auto']}
      sx={{
        alignItems: 'center',
        justifyContent: 'center',
        a: { color: 'muted', transition: 'color .125s ease-in-out' },
      }}
      gap={0}
    >
      <Card>
        <Container>
          <Avatar src="https://avatars.githubusercontent.com/u/62056970" />
          <Heading as="h2" variant="headline">
            Thomas Wu
          </Heading>
          <text variant="subtitle">
            Founder & CEO
          </text>
        </Container>
      </Card>
      <Card>
        <Container>
          <Avatar src="https://gcore.jsdelivr.net/gh/thomaswcy/linkscape.io@main/MeliLiu-Avatar.png" />
          <Heading as="h2" variant="headline">
            Meli Liu
          </Heading>
          <text variant="subtitle">
            Founder & COO & CFO
          </text>
        </Container>
        </Card>
      <Card>
        <Container>
          <Avatar src="https://gcore.jsdelivr.net/gh/thomaswcy/linkscape.io@main/JettChen-Avatar.jpg" />
          <Heading as="h2" variant="headline">
            Jett Chen
          </Heading>
          <text variant="subtitle">
            Co-founder & CTO
          </text>
        </Container>
      </Card>
    </Grid>  
    <Box as="footer" sx={{ bg: 'sheet', color: 'text' }}>
      <Container sx={{ pt: 5, pb: [3, 4], textAlign: 'center' }}>
          <a href="https://vercel.com/?utm_source=linkscape&utm_campaign=oss">
            <img alt="Vercel" src="https://www.datocms-assets.com/31049/1618983297-powered-by-vercel.svg" />
          </a>
      <br />
      <text>
        © 2023 LinkScape. 501(c)(3) nonprofit (EIN: 81-2908499)
      </text>
      </Container>
    </Box>
  </>
)

export default DocsPage
