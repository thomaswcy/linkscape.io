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
    <Container>
      <Heading variant="headline">Containers</Heading>
    </Container>
 <Grid gap={3} columns={[null, 2]} as="form" variant="cards.sunken">
          <Label>
            Full name
            <Input placeholder="Zach Latta" />
          </Label>
          <Label>
            How are you primarily associated with Hack Club?
            <Select>
              <option value="" disabled hidden>
                Select one…
              </option>
              <option value="club-leader">I lead a club</option>
              <option value="club-member">I am a club member</option>
              <option value="slack-member">I am active on Slack</option>
              <option value="alum">I am a Hack Club alum</option>
              <option value="none">None of the above</option>
            </Select>
          </Label>
          <Label variant="labelHoriz">
            <Checkbox />
            Remember me
          </Label>
          <Flex sx={{ flexWrap: 'wrap' }}>
            <Label variant="labelHoriz">
              <Radio name="letter" /> Alpha
            </Label>
            <Label variant="labelHoriz">
              <Radio name="letter" /> Bravo
            </Label>
            <Label variant="labelHoriz">
              <Radio name="letter" /> Charlie
            </Label>
          </Flex>
          <Label>
            Why do you want to come?
            <Textarea placeholder="Write a few sentences." />
          </Label>
          <Label>
            Slider
            <Slider color="red" />
          </Label>
          <Button
            as="button"
            type="submit"
            children="RSVP"
            sx={{ gridColumn: [null, 'span 2'] }}
          />
        </Grid>
  </>
)

export default DocsPage
