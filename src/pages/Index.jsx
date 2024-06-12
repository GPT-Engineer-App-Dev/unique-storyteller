import { Container, Box, Heading, Text, VStack, HStack, Divider, IconButton, Button } from "@chakra-ui/react";
import { FaTwitter, FaLinkedin, FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

const Index = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const savedPosts = JSON.parse(localStorage.getItem('posts')) || [];
    setPosts(savedPosts);
  }, []);

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
          <Button as={Link} to="/add-post" colorScheme="blue" mt={4}>
            Add New Post
          </Button>
        </Box>

        <Divider />

        {/* Latest Post */}
        {posts.length > 0 ? (
          posts.map((post, index) => (
            <Box key={index}>
              <Heading as="h2" size="xl" mb={4}>
                {post.title}
              </Heading>
              <Box p={4} borderWidth="1px" borderRadius="lg" overflow="hidden">
                <Heading as="h3" size="lg" mb={2}>
                  {post.title}
                </Heading>
                <Text fontSize="md" color="gray.600" mb={4}>
                  {post.date}
                </Text>
                <Text>
                  {post.content}
                </Text>
              </Box>
            </Box>
          ))
        ) : (
          <Text>No posts available.</Text>
        )}

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