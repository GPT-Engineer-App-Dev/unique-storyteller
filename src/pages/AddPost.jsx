import React, { useState } from "react";
import { Container, Box, Heading, Input, Textarea, Button, VStack } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const AddPost = () => {
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [content, setContent] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const newPost = { title, date, content };
    const existingPosts = JSON.parse(localStorage.getItem('posts')) || [];
    localStorage.setItem('posts', JSON.stringify([...existingPosts, newPost]));
    navigate("/");
  };

  return (
    <Container maxW="container.md" p={4}>
      <VStack spacing={4} align="stretch">
        <Box textAlign="center" mb={8}>
          <Heading as="h1" size="2xl">Add New Post</Heading>
        </Box>
        <form onSubmit={handleSubmit}>
          <VStack spacing={4}>
            <Input 
              placeholder="Title" 
              value={title} 
              onChange={(e) => setTitle(e.target.value)} 
              isRequired 
            />
            <Input 
              type="date" 
              placeholder="Date" 
              value={date} 
              onChange={(e) => setDate(e.target.value)} 
              isRequired 
            />
            <Textarea 
              placeholder="Content" 
              value={content} 
              onChange={(e) => setContent(e.target.value)} 
              isRequired 
            />
            <Button type="submit" colorScheme="blue" width="full">Add Post</Button>
          </VStack>
        </form>
      </VStack>
    </Container>
  );
};

export default AddPost;