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

 
        const res = await axios
            .all([axios.get(`${URL}/armories/characters/${name}/profiles`, {headers}), 
                axios.get(`${URL}/armories/characters/${name}/equipment`, {headers}),
                axios.get(`${URL}/armories/characters/${name}/gems`, {headers})])        
        
        const response = [res[0].data,res[1].data,res[2].data];
        return response;
    }catch(error){
        console.error(error);
        throw error;
    }
}


export default function CharacterFullInterface() {
    const selected = useRecoilValue(characterFullInfo);
    const isMouted = useRef(false);
    const [characterInfo,setCharacterInfo] = useState([]);
    const [characterEquip,setCharacterEquip] = useState([]);
    const [characterGem,setCharacterGem] = useState([]);
    const [chLogo,setChLogo] = useState('');
    const [gemName,setGemName] = useState('');
 
    useEffect(() => {
        if(isMouted.current){
            async function fetch() {
                const characterProfile = await searchCharacterProfile(selected);
                
                let  logo = setCharacterClassLogo(characterProfile[0].CharacterClassName);
                setChLogo(logo);
                setCharacterInfo(characterProfile[0]);
                setCharacterEquip(characterProfile[1][0]);
                setCharacterGem(characterProfile[2].Gems);
                setGemName(characterProfile[2].Gems[0].Name)
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
                <CharacterWeapon>
                    <CharacterWeaponImg src={characterEquip.Icon} />
                    {characterEquip.Name}
                </CharacterWeapon>
                <CharacterGemContainer>
                    {characterGem.map((gem) => (
                        <CharacterGem key={gem.Slot}>
                            <CharacterGemImg src={gem.Icon} />
                            Lv.{gem.Level}
                        </CharacterGem>
                    ))}
                </CharacterGemContainer>
            </CharacterEquipContainer>
            <CharacterRaidContainer>
                <KamenRaid>

                </KamenRaid>
                <EkidnaRaid>

                </EkidnaRaid>
                <BehimosRaid>

                </BehimosRaid>
            </CharacterRaidContainer>
        </CharacterProfileContainer>
    )
}



const CharacterProfileContainer = styled.div`
    display:flex;
    flex-direction:row;
    height:250px;
`
const CharacterPersonalProfile = styled.div`
    display:flex;
    flex-direction:row;
    align-items:center;
`


const CharacterImg = styled.img`
    margin-left:30px;
    margin-right:30px;
    width:150px;
    height:200px;
`
const CharacterInfoBox = styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
    margin-left:10px;
    
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
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    margin-left:50px;
`

const CharacterWeapon = styled.div`
    display:flex;
    flex-direction:row;
    justify-content:center;
    align-items:center;
    margin-bottom:30px;
`
const CharacterWeaponImg = styled.img`
    width:40px;
    height:40px;
    margin-right:20px;
`

const CharacterGemContainer = styled.div`
    display:flex;
    flex-direction:row;

`

const CharacterGem = styled.div`
    display:flex;
    flex-direction:column;
    margin-right:10px;
`
const CharacterGemImg = styled.img`
    width:40px;
    height:40px;
`


const CharacterRaidContainer = styled.div`

`
const EkidnaRaid = styled.div`

`

const KamenRaid = styled.div`

`

const BehimosRaid = styled.div`

`