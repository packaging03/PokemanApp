import { IconButton } from "@chakra-ui/react";
import { Heading, HStack, VStack } from "@chakra-ui/layout";
import React from "react";
import { FaSun } from "react-icons/fa";
import { Link } from "react-router-dom";
import { getMyTeam } from "../redux/teamSlice";
import { useSelector } from "react-redux";

const Header = () => {
  const myteam = useSelector(getMyTeam);

  return (
    <VStack p={4}>
      <IconButton
        aria-label="Sun Icon"
        icon={<FaSun />}
        isRound={true}
        size="lg"
        alignSelf="flex-end"
      />
      <Heading
        mb="8"
        fontWeight="extrabold"
        size="2xl"
        bgGradient="linear(to-r, pink.500, pink.300, blue.500)"
        bgClip="text"
      >
        Pokemon Application
      </Heading>
      <HStack>
        <Heading
          mt="8"
          mb="8"
          mx="8"
          fontWeight="bold"
          size="xl"
          bgGradient="linear(to-r, blue.500, purple.300, red.500)"
          bgClip="text"
        >
          <Link to="/">Home</Link>
        </Heading>
        <Heading
          mt="8"
          mb="16"
          mx="8"
          mr="16"
          fontWeight="bold"
          size="xl"
          bgGradient="linear(to-r, blue.500, purple.300, red.500)"
          bgClip="text"
        >
          <Link to="mypokemon">My Team ({myteam?.length})</Link>
        </Heading>
      </HStack>
    </VStack>
  );
};

export default Header;
