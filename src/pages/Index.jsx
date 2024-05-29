import { Container, Text, VStack, Heading, Box, Image, Button } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const Index = () => {
  const navigate = useNavigate();
  
  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4}>
        <Heading as="h1" size="2xl">Welcome to My Personal Blog</Heading>
        <Box boxSize="sm">
          <Image src="/images/blog-image.jpg" alt="Blog Image" borderRadius="md" />
        </Box>
        <Text fontSize="xl" textAlign="center">
          Dive into my thoughts, experiences, and stories. Stay tuned for more updates!
        </Text>
      <Button colorScheme="teal" onClick={() => navigate("/add-post")}>Add New Post</Button>
      </VStack>
    </Container>
  );
};

export default Index;