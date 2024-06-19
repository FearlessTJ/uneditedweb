import { Container, Heading, SimpleGrid, Divider, Link } from "@chakra-ui/react"
import Section from "../components/section"
import Layout from "../components/layouts/blog"
import { ExternalLinkIcon } from "@chakra-ui/icons"
import { IoLogoGithub, IoLogoWhatsapp, IoLogoLinkedin } from "react-icons/io5"

const About = () => {
  return (
    <Layout title={undefined}>
      <Container>
        <Heading
          as="h3"
          fontSize={24}
          mt={5}
          mb={4}
          fontFamily="Work Sans, sans-serif"
        >
          About me
        </Heading>
        <Divider mb={4} mt={3}/>
        <p>
          Hey, I'm Charlie! <br />
          I'm a 15 year old full stack web developer. I've been coding
          websites, apps and custom built software solutions since 5, expanding
          my knowledge of code and design over time. <br />
          In March 2024 I've finished a MicroBachelor in Web Development 
          (By IBM via EDx. For more info, check my LinkedIn page)
          <Divider mb={3} mt={4}/>
          Links: <br />
        </p>
        <Link
          target="_blank"
          href="https://github.com/notlaven/"
          display="inline-flex"
          alignItems="center"
          style={{ gap: 4 }}
          pl={2}
          color={"whiteAlpha"}
          mt={1}
        >
          <IoLogoGithub /> Github
        </Link>
        <br />
        <Link
          target="_blank"
          href="https://www.linkedin.com/in/tjalling-van-abbema-8430811a8/"
          display="inline-flex"
          alignItems="center"
          style={{ gap: 4 }}
          pl={2}
          color={"blue.500"}
        >
          <IoLogoLinkedin /> LinkedIn
        </Link>
      </Container>
    </Layout>
  )
}

export default About