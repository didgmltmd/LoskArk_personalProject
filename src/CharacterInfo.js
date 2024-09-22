import { useState } from "react"
import styled from "styled-components"

export default function CharacterInfo(Name,ClassName,ItemLevel) {
    const characterName = Name;
    const characterClassName = ClassName;
    const characterItemlevel = ItemLevel;


    return(
        <CharacterConatiner>
            <CharacterName>캐릭터명: {characterName}</CharacterName>
            <CharacterClassName>직업: {characterClassName}</CharacterClassName>
            <CharacterItemLevel>레벨: {characterItemlevel}</CharacterItemLevel>
        </CharacterConatiner>
    )
}

const CharacterConatiner = styled.div`
    width:300px;
    height:400px;
    display:flex;
    flex-direction:align;
    alig-items:center;
`

const CharacterName = styled.div`

`

const CharacterClassName = styled.div`

`
const CharacterItemLevel = styled.div`

`