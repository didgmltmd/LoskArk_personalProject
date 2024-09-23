import styled from "styled-components";
import { searchedCharacterList } from "./recoilState";
import { useRecoilState, useRecoilValue } from "recoil";
import { searchCharacterName } from "./recoilState";
import { useEffect, useRef, useState } from "react";
import CharacterRender from "./CharacterRender";
import { searchedFourTCharacterList } from "./recoilState";


export default function CharacterInterface() {
    //값이 변경된것을 감지하기만 하기떄문에 useRecoilValue를 사용
    const  characterList = useRecoilValue(searchedCharacterList);
    const  searchedCharacterName = useRecoilValue(searchCharacterName);
    const [fourTCharacter,setFourTCharacter] = useRecoilState(searchedFourTCharacterList);
    const characterBlock = [];
    const isMounted = useRef(false);

    //캐릭터를 담는 리스트의 변화가있을경우(즉,캐릭터의 검색이 이루어졌을경우) 특정 레벨 이상의 캐릭터를 추출하고 원하는 값을 추출하여 배열로 만듦
    useEffect(() => {
        if(isMounted.current){
            //배열 렌더링을 위해 사용할 키값을 선언
            let  idx = 1;

            for(let i = 0;i<characterList.length;i++){
                //API로 받은 아이템레벨이 String이므로 이를 int로 변환하는 작업
                let  itemMaxLevel = parseInt(characterList[i].ItemMaxLevel.replace(/,/g,''));
                if(itemMaxLevel >  1639.9){
                    let characterInfo = {
                        id: idx,
                        characterName: characterList[i].CharacterName,
                        characterClassName: characterList[i].CharacterClassName,
                        characterLevel: characterList[i].ItemMaxLevel
                    }
                    idx++;


                    //만든 데이터객체를 배열에 저장
                    characterBlock.push(characterInfo);
                }
            }
            setFourTCharacter(characterBlock);
        } else{
            isMounted.current = true;
        }
    },[characterList]);


    return(
        <CharacterConatiner>
            <CharacterRender>

            </CharacterRender>
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














