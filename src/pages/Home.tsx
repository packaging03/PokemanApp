import { Input } from "@chakra-ui/input";
import { Container, HStack, Stack, Text } from "@chakra-ui/layout";
import { Button } from "@chakra-ui/button";
import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import { useDispatch, useSelector } from "react-redux";
import { randomPokemonSearch, getSearchStatus } from "../redux/searchSlice";

import { FormControl, FormHelperText } from "@chakra-ui/react";
import MainContent from "../components/MainContent";

const Home = () => {
  const dispatch = useDispatch();
  const status = useSelector(getSearchStatus);
  const [loading, setLoading] = useState(false);
  const [searchParam, setSearchParam] = useState({});

  const searchPokeman = () => {
    dispatch(randomPokemonSearch(searchParam));
  };

  useEffect(() => {
    if (status === "loading") {
      setLoading(true);
    } else {
      setLoading(false);
    }
  }, [status]);

  return (
    <>
      <Header />
      <Container>
        <HStack>
          <FormControl id="text">
            <Text
              fontWeight="bold"
              textTransform="uppercase"
              fontSize="sm"
              alignSelf="center"
              letterSpacing="wide"
              color="blue.500"
            >
              Search Pokeman
            </Text>
            <Input
              type="text"
              mt="1.5"
              placeholder="Pokemon Name or Id"
              onChange={(event) => {
                setSearchParam(event.target.value);
              }}
            />
            <FormHelperText fontSize="xs">
              You can perform random pokeman search here
            </FormHelperText>
          </FormControl>
          <Stack direction="row" spacing={4}>
            <Button
              loadingText="Searching"
              colorScheme="blue"
              isLoading={loading}
              onClick={searchPokeman}
            >
              {/* isLoading */}
              Search Pokemon
            </Button>
          </Stack>
        </HStack>

        <MainContent />
      </Container>
    </>
  );
};

export default Home;
