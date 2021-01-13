import logo from "./logo.svg";
import "./App.css";
import { Button, Heading, Stack, Text } from "@chakra-ui/react";

function App() {
  return (
    <div className="App">
      <Stack spacing={2} bg="white" p={8} borderRadius="lg">
        <Heading as="h1" size="md" color="primary.900">
          Chakra UI is ready!
        </Heading>
        <Text as="p" fontSize="md" color="primary.500">
          Here are your first Chakra components:
        </Text>
        <Button variantColor="primary" isFullWidth>
          Click me, please!
        </Button>
      </Stack>
    </div>
  );
}

export default App;
