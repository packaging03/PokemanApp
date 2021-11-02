import { Container, Box, HStack, Text, Heading } from "@chakra-ui/layout";
import React, { useState } from "react";
import Header from "../components/Header";
import { getMyTeam } from "../redux/teamSlice";
import { useDispatch, useSelector } from "react-redux";
import { useDisclosure } from "@chakra-ui/hooks";
import { removePokemon } from "../redux/teamSlice";
import { BsFillTrashFill, BsFillCheckCircleFill } from "react-icons/bs";
import {
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalOverlay,
} from "@chakra-ui/modal";
import { Button } from "@chakra-ui/button";

const MyPokemon = () => {
  const myteam = useSelector(getMyTeam);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [viewItem, setViewItem] = useState();
  const [actiontype, setActionType] = useState({});
  const dispatch = useDispatch();
  const openView = (team: any) => {
    setViewItem(team);
    setActionType(false);
    onOpen();
  };

  const openDelete = (team: any) => {
    setViewItem(team);
    setActionType(true);
    onOpen();
  };

  const deletePokemon = () => {
    dispatch(removePokemon(viewItem));
    onClose();
  };

  const retContent = () => {
    if (actiontype) {
      return (
        <ModalContent>
          <ModalCloseButton />
          <ModalBody>
            <Heading>Confirm Action</Heading>
            <HStack border="1px" borderColor="gray.200" mt={8}>
              <Box p={4} display={{ md: "flex" }}>
                <Box mt={{ base: 4, md: 0 }} ml={{ md: 6 }}>
                  <HStack>
                    <Text
                      fontWeight="bold"
                      textTransform="uppercase"
                      fontSize="sm"
                      letterSpacing="wide"
                      color="blue.500"
                    >
                      Are you sure you want to delete this pokemon from your
                      team?
                    </Text>
                  </HStack>
                  <HStack>
                    <Button
                      rightIcon={<BsFillTrashFill />}
                      colorScheme="red"
                      variant="outline"
                      onClick={deletePokemon}
                    >
                      Yes
                    </Button>
                    <Button
                      rightIcon={<BsFillCheckCircleFill />}
                      colorScheme="blue"
                      variant="outline"
                      onClick={onClose}
                    >
                      No
                    </Button>
                  </HStack>
                </Box>
              </Box>
            </HStack>
          </ModalBody>

          <ModalFooter>
            <Button mr={3} onClick={onClose}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      );
    } else {
      return (
        <ModalContent>
          <ModalCloseButton />
          <ModalBody>
            <Heading>Pokemon Details</Heading>
            <HStack border="1px" borderColor="gray.200" mt={8}>
              <Box p={4} display={{ md: "flex" }}>
                <Box mt={{ base: 4, md: 0 }} ml={{ md: 6 }}>
                  <HStack>
                    <Text
                      fontWeight="bold"
                      textTransform="uppercase"
                      fontSize="sm"
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
                      {viewItem?.name}
                    </Text>
                  </HStack>
                  <HStack>
                    <Text
                      fontWeight="bold"
                      textTransform="uppercase"
                      fontSize="sm"
                      letterSpacing="wide"
                      color="blue.500"
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
                      {viewItem?.base_experience}
                    </Text>
                  </HStack>
                  <HStack>
                    <Text
                      fontWeight="bold"
                      textTransform="uppercase"
                      fontSize="sm"
                      letterSpacing="wide"
                      color="blue.500"
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
                      {viewItem?.order}
                    </Text>
                  </HStack>
                  <HStack>
                    <Text
                      fontWeight="bold"
                      textTransform="uppercase"
                      fontSize="sm"
                      letterSpacing="wide"
                      color="blue.500"
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
                      {viewItem?.weight}
                    </Text>
                  </HStack>
                  <HStack>
                    <Text
                      fontWeight="bold"
                      textTransform="uppercase"
                      fontSize="sm"
                      letterSpacing="wide"
                      color="blue.500"
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
                      {viewItem?.height}
                    </Text>
                  </HStack>
                </Box>
              </Box>
            </HStack>
          </ModalBody>

          <ModalFooter>
            <Button mr={3} onClick={onClose}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      );
    }
  };

  return (
    <>
      <Header />
      <Container>
        <Text
          fontWeight="bold"
          textTransform="uppercase"
          fontSize="sm"
          alignSelf="center"
          letterSpacing="wide"
          color="blue.500"
        >
          My Pokemon Team
        </Text>
        {myteam.map((team: any) => (
          <HStack border="1px" borderColor="gray.200" mt={1} key={team.id}>
            <Box p={1} display={{ md: "flex" }}>
              <Box mt={{ base: 4, md: 0 }} ml={{ md: 1 }}>
                <HStack key={team.id}>
                  <Text
                    fontWeight="bold"
                    textTransform="uppercase"
                    fontSize="xl"
                    letterSpacing="wide"
                    color="pink.600"
                  >
                    {team.name}
                  </Text>
                  <Button
                    mr={3}
                    onClick={() => {
                      openView(team);
                    }}
                  >
                    View
                  </Button>
                  <Button
                    mr={3}
                    onClick={() => {
                      openDelete(team);
                    }}
                  >
                    Delete
                  </Button>
                </HStack>
              </Box>
            </Box>
          </HStack>
        ))}

        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          {retContent()}
        </Modal>
      </Container>
    </>
  );
};

export default MyPokemon;
