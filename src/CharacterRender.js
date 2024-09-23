import styled from "styled-components";
import { searchedFourTCharacterList } from "./recoilState";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { useEffect, useRef, useState } from "react";
import { render } from "@testing-library/react";
import axios from "axios";


//캐릭터의 이미지를 가져오는 axios 통신
async function searchCharacterImg(name) {
    // Axios를 활용하여 로아 API로 데이터를 받아옴
    try{
        const APIKEY = "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6IktYMk40TkRDSTJ5NTA5NWpjTWk5TllqY2lyZyIsImtpZCI6IktYMk40TkRDSTJ5NTA5NWpjTWk5TllqY2lyZyJ9.eyJpc3MiOiJodHRwczovL2x1ZHkuZ2FtZS5vbnN0b3ZlLmNvbSIsImF1ZCI6Imh0dHBzOi8vbHVkeS5nYW1lLm9uc3RvdmUuY29tL3Jlc291cmNlcyIsImNsaWVudF9pZCI6IjEwMDAwMDAwMDAwNDEyODgifQ.qXiQ81U-Tk8GNhrY2Vq0ngNtlkbSSn0Qck_yCaznrWDQYG-lts6bzTAQkt1qatOCRfRxd725o_wO3POkuuYlo_11PnX4B3otKfQ97I-6gNBhMFqsL4y8oA3BgSsOnL1EKb3aduRs8ny1ruYeHgWg--IWtwtNNs_znz83Te8JcDwTMUaDwSfdlbZiai75ieaHNAijDmy0FlITvv7Ii-JD0tEUuAmN3HNZf7XTzMWnTY5PbV3lNgVMFi84HFifWCkY-R43_m0z709yjk9nA1M6DXTf6hWsbEDuEieGWh7rGBpqpVrEhNYRYhbiYU2CvcEMyBTIAXbv9hoDYOYMwxSq3A";
        const URL = 'https://developer-lostark.game.onstove.com';
        const headers = {
            'accept': 'application/json',
            'authorization' : `bearer ${APIKEY}`
        };

        const response = await axios.get(`${URL}/armories/characters/${name}/profiles`, {headers});
        return response.data;
    }catch(error){
        console.error(error);
        throw error;
    }
}

//CharacterInterface 컴포넌트에서 props로 이 컴포넌트로 값을 전달해주어 사용할경우 해당 컴포넌트가 2번씩 실행되는 상황이 발생
//해결방법을 찾지못해 Recoil을 활용(Strict Mode 꺼져있는데도 2번실행)  -> CharacterInterface에서 감지하는 변수가 초기화되는 상황에서 발생하는 문제라고 짐작중


//CharacterInterface에서 특정 레벨 이상의 캐릭터 배열을 생성하게되면 Recoil을통해 변경하고 
//이 컴포넌트는 해당값의 변화를 감지하여 해당 배열을 감지하고 값을 가져와 배열 렌더링을 실행

async function getCharacterImg(name){
    const charcterData = await searchCharacterImg(name);

    return charcterData;
}




export default function CharacterRender(){  
    const fourTCharacterList = useRecoilValue(searchedFourTCharacterList);
    const isMouted = useRef(false);
    const [characterData,setCharacterData] = useState();
    useEffect(() => {
        if(isMouted.current) {
            
            
        }else{
            isMouted.current=true;
        }
    },[fourTCharacterList]);



    return(
        <DisplayContainer>
            {fourTCharacterList.map((it) => (
                <CharacterConatiner>
                <CharacterName>
                    이름:{it.characterName}
                </CharacterName>
                <CharacterClassName>
                    직업:{it.characterClassName}
                </CharacterClassName>
                <CharacterLevel>      
                    레벨:{it.characterLevel}
                </CharacterLevel>
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
    flex-direction:column;
    height:600px;
    width:300px;
    align-items:center;
    justify-content:center;
`


const CharacterName = styled.div`

`


const CharacterClassName = styled.div`

`

const CharacterLevel = styled.div`


`


