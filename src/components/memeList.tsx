import React from "react";
import {VStack, StackDivider, Box} from "@chakra-ui/react";
import memes from "../list.json";
import Meme from "./meme";

type memeProps = {
    title: string;
    desc: string;
    id: string;
}

const MemeList = () => {
    return (
        <VStack spacing={8} divider={<StackDivider borderColor="gray.500" />} >
        {
            memes.memes.map((meme: memeProps) => (
                <Meme title={meme.title} desc={meme.desc} id={meme.id}/>)
            )
        }
        </VStack>
    );
}

export default MemeList;
