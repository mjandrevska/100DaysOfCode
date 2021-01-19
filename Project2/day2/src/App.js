import "./App.css";
import {
  Box,
  SimpleGrid,
  Image,
} from "@chakra-ui/react";

//Avatars
import avatar1 from "./img/avatar1.png";
import avatar2 from "./img/avatar2.png";
import avatar3 from "./img/avatar3.png";
import avatar4 from "./img/avatar4.png";

const items = [
  {
    name: "John Doe",
    title: "PhD",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    image: avatar1,
  },
  {
    name: "John Doe",
    title: "CEO",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    image: avatar2,
  },
  {
    name: "John Doe",
    title: "PhD",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    image: avatar3,
  },
  {
    name: "Jane Doe",
    title: "COO",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut l",
    image: avatar4,
  },
];

function App() {
  return (
    <div className="App">
      <SimpleGrid
        bg="gray.50"
        columns={{ sm: 2, md: 4 }}
        spacing="8"
        p="10"
        textAlign="center"
        rounded="lg"
        color="gray.400"
      >
        {items.map((item, idx) => {
          console.log(item);
          return (
            <Box
              maxW="sm"
              borderWidth="1px"
              borderRadius="lg"
              overflow="hidden"
            >
              <Image src={item.image} />

              <Box p="6">
                <Box
                  mt="1"
                  fontWeight="semibold"
                  as="h4"
                  lineHeight="tight"
                  isTruncated
                >
                  {item.name}
                </Box>
                <Box
                  mt="1"
                  fontWeight="semibold"
                  as="h4"
                  lineHeight="tight"
                  isTruncated
                >
                  {item.title}
                </Box>

                <Box>
                  <Box as="span" color="gray.600" fontSize="sm">
                    {item.description}
                  </Box>
                </Box>
              </Box>
            </Box>
          );
        })}
      </SimpleGrid>
    </div>
  );
}

export default App;
