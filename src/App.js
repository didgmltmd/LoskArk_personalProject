import React,{ useState } from 'react';
import styled from 'styled-components';
import { CharacterData } from './CharacterData';
import lostarkLogo from './img/lostarkLogo.png'
import CharacterInterface from './CharacterInterface';
import CharacterFullInterface from './CharacterFullInterface';
import SelectedCharacterList from './SelectedCharacterList'

export default function App(){
  return(
    <Container>
      <SideMenu>
        <LostArkImg src={lostarkLogo} />
        <CharacterData></CharacterData>
        <SelectedCharacterList />
      </SideMenu>
      <Mainbody>
        <RightHeader>
          <CharacterInterface />
        </RightHeader>
        <RightFooter>
          <CharacterFullInterface />
        </RightFooter>
      </Mainbody>
    </Container>
  );
}

const Container = styled.div`
  width:1690px;
  height:850px;

  display:flex;
  flex-direction:row;
  justify-content:center;
`
const LostArkImg = styled.img`
  widht:300px;
  height:100px;
  margin-bottom:10px;

`

const SideMenu = styled.div`
  width:300px;
  height:853px;
  background-color:lightgray;
  display:flex;
  flex-direction:column;
`


const Mainbody = styled.div`
  width:1390px;
  height:600px;
  display:flex;
  flex-direction:column;
`

const RightHeader = styled.div`
  width:1390px;
  height:600px;
  border: 1px solid black;

`

const RightFooter = styled.div`
  width:1390px;
  height:350px;
  border:1px solid black;
`

const MenuContainer = styled.div`

`

const CharacterInfo = styled.div`
  
`