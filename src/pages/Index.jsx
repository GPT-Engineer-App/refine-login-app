import { useState } from "react";
import { Container, VStack, Input, Button, Text, Box, Heading, FormControl, FormLabel, FormErrorMessage, FormHelperText } from "@chakra-ui/react";
import { FaUser, FaLock } from "react-icons/fa";

const LoginForm = ({ onLogin }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username === "admin" && password === "password") {
      onLogin();
    } else {
      setError("Invalid username or password");
    }
  };

  return (
    <Box width="100%" maxW="md" p={8} borderWidth={1} borderRadius={8} boxShadow="lg">
      <Heading mb={6}>Login</Heading>
      <form onSubmit={handleSubmit}>
        <VStack spacing={4}>
          <FormControl id="username" isRequired>
            <FormLabel>Username</FormLabel>
            <Input type="text" value={username} onChange={(e) => setUsername(e.target.value)} placeholder="Enter your username" />
          </FormControl>
          <FormControl id="password" isRequired>
            <FormLabel>Password</FormLabel>
            <Input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Enter your password" />
          </FormControl>
          {error && <Text color="red.500">{error}</Text>}
          <Button type="submit" colorScheme="blue" width="full">
            Login
          </Button>
        </VStack>
      </form>
    </Box>
  );
};

const WelcomeScreen = ({ onLogout }) => {
  return (
    <Container centerContent>
      <VStack spacing={4}>
        <Heading>Welcome to the Enterprise App</Heading>
        <Text>You're successfully logged in!</Text>
        <Button colorScheme="red" onClick={onLogout}>
          Logout
        </Button>
      </VStack>
    </Container>
  );
};

const Index = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      {isLoggedIn ? <WelcomeScreen onLogout={handleLogout} /> : <LoginForm onLogin={handleLogin} />}
    </Container>
  );
};

export default Index;
