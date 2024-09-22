import axios from "axios";
import { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { searchCharacterName, searchedCharacterList } from "./recoilState";
import { useRecoilState } from "recoil";


async function searchCharacter(name) {
    try{
        const APIKEY = "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6IktYMk40TkRDSTJ5NTA5NWpjTWk5TllqY2lyZyIsImtpZCI6IktYMk40TkRDSTJ5NTA5NWpjTWk5TllqY2lyZyJ9.eyJpc3MiOiJodHRwczovL2x1ZHkuZ2FtZS5vbnN0b3ZlLmNvbSIsImF1ZCI6Imh0dHBzOi8vbHVkeS5nYW1lLm9uc3RvdmUuY29tL3Jlc291cmNlcyIsImNsaWVudF9pZCI6IjEwMDAwMDAwMDAwNDEyODgifQ.qXiQ81U-Tk8GNhrY2Vq0ngNtlkbSSn0Qck_yCaznrWDQYG-lts6bzTAQkt1qatOCRfRxd725o_wO3POkuuYlo_11PnX4B3otKfQ97I-6gNBhMFqsL4y8oA3BgSsOnL1EKb3aduRs8ny1ruYeHgWg--IWtwtNNs_znz83Te8JcDwTMUaDwSfdlbZiai75ieaHNAijDmy0FlITvv7Ii-JD0tEUuAmN3HNZf7XTzMWnTY5PbV3lNgVMFi84HFifWCkY-R43_m0z709yjk9nA1M6DXTf6hWsbEDuEieGWh7rGBpqpVrEhNYRYhbiYU2CvcEMyBTIAXbv9hoDYOYMwxSq3A";
        const URL = 'https://developer-lostark.game.onstove.com';
        const headers = {
            'accept': 'application/json',
            'authorization' : `bearer ${APIKEY}`
        };

        const response = await axios.get(`${URL}/characters/${name}/siblings`, {headers});

        return response.data;
    }catch(error){
        console.error(error);
        throw error;
    }
}

export function CharacterData() {
    const [searchName,setSearchName] = useState("");
    const [finalName,setfinalName] = useRecoilState(searchCharacterName);
    const isMounted = useRef(false);

    let characterArr = [];
    const activeEnter = (e) => {
        if(e.key === "Enter"){
            setSearchName(e.value);
            setfinalName(searchName);  
        }
    }
    
    const [characterList,setcharacterList] = useRecoilState(searchedCharacterList);
    useEffect(() => {
        if(isMounted.current) {

            async function fetch() {
                const  characterData = await searchCharacter(finalName);
                setcharacterList(characterData);
            };
            fetch();
        }else{
            isMounted.current=true;
        }
    },[finalName])







    return (
        <UserConatiner>
          <SearchCharacter type="search" 
            onChange={(e) => setSearchName(e.target.value)} 
            onKeyDown={(e) => activeEnter(e)} 
            placeholder='캐릭명을 입력하세요'  
            value={searchName}/>
        </UserConatiner>
    )
}

const UserConatiner = styled.div`
    width:300px;
    height:30px;
`

const SearchCharacter = styled.input`
    width:300px;
    height:30px;
    margin-bottom:10px;
`