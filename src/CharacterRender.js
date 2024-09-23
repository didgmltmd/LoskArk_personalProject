import styled from "styled-components";
import { searchedFourTCharacterList } from "./recoilState";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { useEffect, useRef, useState } from "react";


//CharacterInterface 컴포넌트에서 props로 이 컴포넌트로 값을 전달해주어 사용할경우 해당 컴포넌트가 2번씩 실행되는 상황이 발생
//해결방법을 찾지못해 Recoil을 활용(Strict Mode 꺼져있는데도 2번실행)  -> CharacterInterface에서 감지하는 변수가 초기화되는 상황에서 발생하는 문제라고 짐작중


//CharacterInterface에서 특정 레벨 이상의 캐릭터 배열을 생성하게되면 Recoil을통해 변경하고 
//이 컴포넌트는 해당값의 변화를 감지하여 해당 배열을 감지하고 값을 가져와 배열 렌더링을 실행



export default function CharacterRender(){  
    const fourTCharacterList = useRecoilValue(searchedFourTCharacterList);
    console.log(fourTCharacterList);
    const isMouted = useRef(false);
    useEffect(() => {
        if(isMouted.current) {
            //캐릭터들을 렌더링할때 이미지값까지 불러오는 코드 작성중

        }else{
            isMouted.current=true;
        }
        console.log(fourTCharacterList);
    },[fourTCharacterList]);



    return(
        <DisplayContainer>
            {fourTCharacterList.map((it) => (
                <CharacterConatiner key={it.id}>
                    <CharacterClassImg src={it.characterLogo}/>
                    <CharacterInfo>
                        <CharacterName>
                            이름:{it.characterName}
                        </CharacterName>
                        <CharacterClassName>
                            직업:{it.characterClassName}
                        </CharacterClassName>
                        <CharacterLevel>      
                            레벨:{it.characterLevel}
                        </CharacterLevel>
                    </CharacterInfo>
                    <CharacterRaid>
                        
                    </CharacterRaid>
            </CharacterConatiner>
            ))}
        </DisplayContainer>
    )
}

const DisplayContainer = styled.div`
    display:flex;
    flex-direction:row;
`

const CharacterConatiner = styled.div`
    display:flex;
    flex-direction:row;
    height:300px;
    width:300px;
    align-items:center;
    justify-content:center;
    border:1px solid black;
`
const CharacterClassImg = styled.img`
    width:50px;
    height:50px;
    margin-right:20px;
`

const CharacterName = styled.div`

`
const CharacterInfo = styled.div`

`


const CharacterClassName = styled.div`

`

const CharacterLevel = styled.div`


`


const CharacterRaid = styled.div`

`

const Behimos = styled.input`

`
const Kamen = styled.input`

`

const Ekid = styled.input`
`
