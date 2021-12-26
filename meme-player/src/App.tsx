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
          <Grid minH="100vh" p={3}>
            <ColorModeSwitcher justifySelf="flex-end" />
            <Container width="200">
                <MemeList />
            </Container>
          </Grid>
        </Box>
      </ChakraProvider>
    );
}
