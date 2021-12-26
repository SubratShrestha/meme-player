import * as React from "react"
import {
  ChakraProvider,
  Box,
  Grid,
  theme,
  Flex,
  Container,
} from "@chakra-ui/react"
import { ColorModeSwitcher } from "./ColorModeSwitcher"
import MemeList from "./components/memeList"

export const App = () => {
    return (
      <ChakraProvider theme={theme}>
        <Box textAlign="center" fontSize="xl">
            <Flex padding={10}>
                <Container width="200">
                    <MemeList />
                </Container>
                <ColorModeSwitcher/>
          </Flex>
        </Box>
      </ChakraProvider>
    );
}
