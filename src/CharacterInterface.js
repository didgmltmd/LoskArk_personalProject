import styled from "styled-components";
import { searchedCharacterList } from "./recoilState";
import { useRecoilState, useRecoilValue } from "recoil";
import { searchCharacterName } from "./recoilState";
import { useEffect, useRef, useState } from "react";
import CharacterRender from "./CharacterRender";



export default function CharacterInterface() {
    const  characterList = useRecoilValue(searchedCharacterList);
    const  searchedCharacterName = useRecoilValue(searchCharacterName);
    const characterBlock = [];
    const isMounted = useRef(false);
    useEffect(() => {
        if(isMounted.current){
            let  idx = 1;
            for(let i = 0;i<characterList.length;i++){
                let  itemMaxLevel = parseInt(characterList[i].ItemMaxLevel.replace(/,/g,''));
                if(itemMaxLevel >  1639.9){
                    let characterInfo = {
                        id: idx,
                        characterName: characterList[i].CharacterName,
                        characterClassName: characterList[i].CharacterClassName,
                        characterLevel: characterList[i].ItemMaxLevel
                    }
                    idx++;
                    characterBlock.push(characterInfo);
                }
            }
            console.log(characterBlock);
        } else{
            isMounted.current = true;
        }
    },[characterList]);


    return(
        <CharacterConatiner>
            
        </CharacterConatiner>
    )
}


const CharacterInt = styled.div`
    display:flex;
    flex-direction:column;
`


const CharacterConatiner = styled.div`
    width:1390px;
    height:600px;
    display:flex;
    flex-direction:row;
`














