import { Button } from "@chakra-ui/button";
import { Box, HStack, Text } from "@chakra-ui/layout";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { getSearchResult } from "../redux/searchSlice";
import { BsPlusLg } from "react-icons/bs";
import { addPokemon } from "../redux/teamSlice";

const MainContent = () => {
  const result = useSelector(getSearchResult);
  const dispatch = useDispatch();

  const addToTeam = () => {
    dispatch(addPokemon(result));
  };

  return (
    <>
      {(() => {
        if (result.name) {
          return (
            <>
              <Text
                fontWeight="bold"
                textTransform="uppercase"
                fontSize="sm"
                alignSelf="center"
                letterSpacing="wide"
                color="blue.500"
                mt={8}
              >
                Pokemon Details
              </Text>
              <HStack border="1px" borderColor="blue.200" rounded="lg">
                <Box p={4} display={{ md: "flex" }}>
                  <Box mt={{ base: 4, md: 0 }} ml={{ md: 6 }}>
                    <HStack>
                      <Text
                        fontWeight="bold"
                        textTransform="uppercase"
                        fontSize="sm"
                        mr="28"
                        letterSpacing="wide"
                        color="blue.500"
                      >
                        Name:
                      </Text>
                      <Text
                        fontWeight="bold"
                        textTransform="uppercase"
                        fontSize="xl"
                        letterSpacing="wide"
                        color="pink.600"
                      >
                        {result.name}
                      </Text>
                    </HStack>
                    <HStack>
                      <Text
                        fontWeight="bold"
                        textTransform="uppercase"
                        fontSize="sm"
                        letterSpacing="wide"
                        color="blue.500"
                        mr="8"
                      >
                        Base Experience
                      </Text>
                      <Text
                        fontWeight="bold"
                        textTransform="uppercase"
                        fontSize="xl"
                        letterSpacing="wide"
                        color="pink.600"
                      >
                        {result.base_experience}
                      </Text>
                    </HStack>
                    <HStack>
                      <Text
                        fontWeight="bold"
                        textTransform="uppercase"
                        fontSize="sm"
                        letterSpacing="wide"
                        color="blue.500"
                        mr="28"
                      >
                        Order
                      </Text>
                      <Text
                        fontWeight="bold"
                        textTransform="uppercase"
                        fontSize="xl"
                        letterSpacing="wide"
                        color="pink.600"
                      >
                        {result.order}
                      </Text>
                    </HStack>
                    <HStack>
                      <Text
                        fontWeight="bold"
                        textTransform="uppercase"
                        fontSize="sm"
                        letterSpacing="wide"
                        color="blue.500"
                        mr="28"
                      >
                        Weight
                      </Text>
                      <Text
                        fontWeight="bold"
                        textTransform="uppercase"
                        fontSize="xl"
                        letterSpacing="wide"
                        color="pink.600"
                      >
                        {result.weight}
                      </Text>
                    </HStack>
                    <HStack>
                      <Text
                        fontWeight="bold"
                        textTransform="uppercase"
                        fontSize="sm"
                        letterSpacing="wide"
                        color="blue.500"
                        mr="28"
                      >
                        Height
                      </Text>
                      <Text
                        fontWeight="bold"
                        textTransform="uppercase"
                        fontSize="xl"
                        letterSpacing="wide"
                        color="pink.600"
                      >
                        {result.height}
                      </Text>
                    </HStack>
                    <HStack mt={4}>
                      <Button
                        rightIcon={<BsPlusLg />}
                        colorScheme="blue"
                        variant="outline"
                        onClick={addToTeam}
                        width="sm"
                      >
                        Add Pokemon
                      </Button>
                    </HStack>
                  </Box>
                </Box>
              </HStack>
            </>
          );
        } else {
          return <></>;
        }
      })()}
    </>
  );
};

export default MainContent;
