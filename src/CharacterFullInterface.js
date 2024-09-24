import { useEffect, useRef, useState } from "react";
import { useRecoilValue } from "recoil";
import styled from "styled-components";
import { characterFullInfo } from "./recoilState";
import axios from "axios";
import { setCharacterClassLogo } from "./CharacterInterface";

async function searchCharacterProfile(name) {
    // Axios를 활용하여 로아 API로 캐릭터 정보를 가져옴
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


async function searchCharacterequip(name) {
    // Axios를 활용하여 로아 API로 캐릭터 장비 데이터를 가져옴
    try{
        const APIKEY = "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6IktYMk40TkRDSTJ5NTA5NWpjTWk5TllqY2lyZyIsImtpZCI6IktYMk40TkRDSTJ5NTA5NWpjTWk5TllqY2lyZyJ9.eyJpc3MiOiJodHRwczovL2x1ZHkuZ2FtZS5vbnN0b3ZlLmNvbSIsImF1ZCI6Imh0dHBzOi8vbHVkeS5nYW1lLm9uc3RvdmUuY29tL3Jlc291cmNlcyIsImNsaWVudF9pZCI6IjEwMDAwMDAwMDAwNDEyODgifQ.qXiQ81U-Tk8GNhrY2Vq0ngNtlkbSSn0Qck_yCaznrWDQYG-lts6bzTAQkt1qatOCRfRxd725o_wO3POkuuYlo_11PnX4B3otKfQ97I-6gNBhMFqsL4y8oA3BgSsOnL1EKb3aduRs8ny1ruYeHgWg--IWtwtNNs_znz83Te8JcDwTMUaDwSfdlbZiai75ieaHNAijDmy0FlITvv7Ii-JD0tEUuAmN3HNZf7XTzMWnTY5PbV3lNgVMFi84HFifWCkY-R43_m0z709yjk9nA1M6DXTf6hWsbEDuEieGWh7rGBpqpVrEhNYRYhbiYU2CvcEMyBTIAXbv9hoDYOYMwxSq3A";
        const URL = 'https://developer-lostark.game.onstove.com';
        const headers = {
            'accept': 'application/json',
            'authorization' : `bearer ${APIKEY}`
        };

        const response = await axios.get(`${URL}/armories/characters/${name}/equipment`, {headers});

        return response.data;
    }catch(error){
        console.error(error);
        throw error;
    }
}


export default function CharacterFullInterface() {
    const selected = useRecoilValue(characterFullInfo);
    const isMouted = useRef(false);
    const [characterInfo,setCharacterInfo] = useState([]);
    const [chLogo,setChLogo] = useState('');
    const [weapon,setWeapon] = useState();
    useEffect(() => {
        if(isMouted.current){
            async function fetch() {
                const characterProfile = await searchCharacterProfile(selected);
                const characterEquip = await searchCharacterequip(selected);
                let  logo = setCharacterClassLogo(characterProfile.CharacterClassName);
                setChLogo(logo);
                setCharacterInfo(characterProfile);
                console.log(weapon);
            }
            fetch();
        }else{
            isMouted.current = true;
        }
    },[selected]);    
    return(
        <CharacterProfileContainer>
            <CharacterPersonalProfile>
                <CharacterImg src={characterInfo.CharacterImage}/>
                <CharacterInfoBox>
                    <CharacterClassLogo src={chLogo}/>
                    <CharacterName>
                        이름: {characterInfo.CharacterName}
                    </CharacterName>
                    <CharacterClassName>
                        Lv.{characterInfo.CharacterLevel} {characterInfo.CharacterClassName}
                    </CharacterClassName>
                    <CharacterLevel>
                        레벨: {characterInfo.ItemMaxLevel}
                    </CharacterLevel>
                </CharacterInfoBox>
            </CharacterPersonalProfile>
            <CharacterEquipContainer>

            </CharacterEquipContainer>

        </CharacterProfileContainer>
    )
}



const CharacterProfileContainer = styled.div`
    display:flex;
    flex-direction:row;
`
const CharacterPersonalProfile = styled.div`
    display:flex;
    flex-direction:row;
    align-items:center;
`


const CharacterImg = styled.img`
    margin-left:30px;
    margin-top:30px;
    margin-right:30px;
    width:150px;
    height:200px;
`
const CharacterInfoBox = styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
    
`
const CharacterClassLogo = styled.img`
    width:75px;
    height:75px;
`

const CharacterName = styled.div`
`
const CharacterClassName = styled.div`

`
const CharacterLevel = styled.div`

`

const CharacterEquipContainer = styled.div`

`