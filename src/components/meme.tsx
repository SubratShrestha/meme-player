import { Box, Button, Container, Flex, Heading, Image, Text } from "@chakra-ui/react";
import React from "react"; 
import useSound from "use-sound";

type memeProps = {
    title: string;
    desc: string;
    id: string;
};

const Meme = ({ title, desc, id }: memeProps) => {
    // const [play] = useSound(`/memes/${id}/${id}.mp3`);
    const [play] = useSound(`memes/${id}/${id}.mp3`, {volume: 0.5});

    return (
        <Box w="100%" p={5} shadow="md" borderWidth="1px" borderRadius="10px"> 
            <Flex> 
                <Image src={`memes/${id}/${id}.jpg`} alt={`${title}`} width="100" height="100" />
                <Container> 
                    <Heading fontSize="xl">
                        {title}
                    </Heading>
                    <Text mt={4}>
                        {desc}
                    </Text>
                    <Button onClick={() => play()}>Play</Button>
                </Container>
            </Flex>
        </Box>
    );
}

export default Meme;
