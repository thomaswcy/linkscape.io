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
          <NavLink href="https://github.com/LinkScapeFuundation">GitHub</NavLink>
          <NavLink href="https://github.com/LinkScapeFuundation/LinkDown">
            LinkDown
          </NavLink>
          <NavLink href="https://hackclub.com">
            HackClub
          </NavLink>
        </Grid>
      </Container>
    </Box>
 <container>
   <Grid gap={3} columns={[null, 2]} as="form" variant="cards.sunken">
     <Label>
       Full name
     </Label>
     <Label>
       What School are you from?
       <Select>
         <option value="" disabled hidden>
           Select one…
         </option>
         <option value="international">I'm from a international school</option>
         <option value="bilingual">I'm from a bilingual schiik</option>
         <option value="public">I'm from a public school</option>
         <option value="none">None of the above</option>
       </Select>
     </Label>
     <Label>
       Why do you want to join LinkScape?
       <Textarea placeholder="Write a few sentences." />
     </Label>
     <Button
       as="button"
       type="submit"
       children="Submit"
       sx={{ gridColumn: [null, 'span 2'] }}
     />
   </Grid>
  </container>
  </>
)

export default DocsPage
