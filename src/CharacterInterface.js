import styled from "styled-components";
import { searchedCharacterList } from "./recoilState";
import { useRecoilState, useRecoilValue } from "recoil";
import { searchCharacterName } from "./recoilState";
import { useEffect, useRef, useState } from "react";
import CharacterRender from "./CharacterRender";
import { searchedFourTCharacterList } from "./recoilState";
import alks from './img/job/alks.png'
import bard from './img/job/bard.png'
import battle from './img/job/battle.png'
import berserker from './img/job/berserker.png'
import blade from './img/job/blade.png'
import blast from './img/job/blast.png'
import demon from './img/job/demon.png'
import devil from './img/job/devil.png'
import dit from './img/job/dit.png'
import dowha from './img/job/dowha.png'
import gigong from './img/job/gigong.png'
import gisang from './img/job/gisang.png'
import hork from './img/job/hork.png'
import infight from './img/job/infight.png'
import riper from './img/job/riper.png'
import scout from './img/job/scout.png'
import slayer from './img/job/slayer.png'
import sorceress from './img/job/sorceress.png'
import summer from './img/job/summer.png'
import worload from './img/job/worload.png'
import breaker from './img/job/breaker.png'
import chang from './img/job/chang.png'
import gunslinger from './img/job/gunslinger.png'
import holy from './img/job/holy.png'
import soul from './img/job/soul.png'
import strike from './img/job/strike.png'



function setCharacterClassLogo(className){
    if(className =="소울이터") return soul
    else if(className =="아르카나") return alks
    else if(className =="바드") return bard
    else if(className =="배틀마스터") return battle
    else if(className =="블래스터") return blast
    else if(className =="데빌헌터") return devil
    else if(className =="디스트로이어") return dit
    else if(className =="도화가") return dowha
    else if(className =="기공사") return gigong
    else if(className =="기상술사") return gisang
    else if(className =="호크아이") return hork
    else if(className =="인파이터") return infight
    else if(className =="리퍼") return riper
    else if(className =="스카우터") return scout
    else if(className =="소서리스") return sorceress
    else if(className =="서머너") return summer
    else if(className =="워로드") return worload
    else if(className =="창술사") return chang
    else if(className =="브레이커") return breaker
    else if(className =="건슬링어") return gunslinger
    else if(className =="홀리나이트") return holy
    else if(className =="스트라이커") return strike
    else if(className =="데모닉") return demon
    else if(className =="블레이드") return blade
    else if(className =="슬레이어") return slayer
    else return strike
}


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
                if(itemMaxLevel >=  1640){
                    const characterLogo = setCharacterClassLogo(characterList[i].CharacterClassName);
                    let characterInfo = {
                        id: idx,
                        characterName: characterList[i].CharacterName,
                        characterClassName: characterList[i].CharacterClassName,
                        characterLevel: characterList[i].ItemMaxLevel,
                        characterLogo: characterLogo
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














