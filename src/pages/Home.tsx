import { IconButton } from "@chakra-ui/react";
import { Heading, VStack } from "@chakra-ui/layout";
import React from "react";
import { FaSun } from "react-icons/fa";

const Home = () => {
  return (
    <VStack>
      <IconButton aria-label="Sun Icon" icon={<FaSun />} />
      <Heading>Pokemon Application</Heading>
    </VStack>
  );
};

export default Home;
