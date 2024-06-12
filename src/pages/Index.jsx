import { Container, Box, Heading, Text, VStack, HStack, Divider, IconButton } from "@chakra-ui/react";
import { FaTwitter, FaLinkedin, FaGithub } from "react-icons/fa";

const Index = () => {
  return (
    <Container maxW="container.lg" p={4}>
      <VStack spacing={8} align="stretch">
        {/* Header */}
        <Box textAlign="center" mb={8}>
          <Heading as="h1" size="2xl" mb={2}>
            Welcome to My Blog
          </Heading>
          <Text fontSize="lg" color="gray.600">
            Thoughts, stories and ideas.
          </Text>
        </Box>

        <Divider />

        {/* Latest Post */}
        <Box>
          <Heading as="h2" size="xl" mb={4}>
            Latest Post
          </Heading>
          <Box p={4} borderWidth="1px" borderRadius="lg" overflow="hidden">
            <Heading as="h3" size="lg" mb={2}>
              My First Blog Post
            </Heading>
            <Text fontSize="md" color="gray.600" mb={4}>
              June 1, 2023
            </Text>
            <Text>
              This is the excerpt of my first blog post. It's just a preview of the content. Click to read more.
            </Text>
          </Box>
        </Box>

        <Divider />

        {/* Social Links */}
        <Box textAlign="center">
          <Text fontSize="lg" mb={4}>
            Connect with me
          </Text>
          <HStack spacing={4} justify="center">
            <IconButton
              aria-label="Twitter"
              icon={<FaTwitter />}
              size="lg"
              isRound
              as="a"
              href="https://twitter.com/"
              target="_blank"
            />
            <IconButton
              aria-label="LinkedIn"
              icon={<FaLinkedin />}
              size="lg"
              isRound
              as="a"
              href="https://www.linkedin.com/"
              target="_blank"
            />
            <IconButton
              aria-label="GitHub"
              icon={<FaGithub />}
              size="lg"
              isRound
              as="a"
              href="https://github.com/"
              target="_blank"
            />
          </HStack>
        </Box>
      </VStack>
    </Container>
  );
};

export default Index;