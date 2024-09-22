import React,{ useState } from 'react';
import styled from 'styled-components';
import { CharacterData } from './CharacterData';
import lostarkLogo from './img/lostarkLogo.png'
import CharacterInterface from './CharacterInterface';


export default function App(){
  return(
    <Container>
      <SideMenu>
        <LostArkImg src={lostarkLogo} />
        <CharacterData></CharacterData>
      </SideMenu>
      <Mainbody>
        <RightHeader>
          <CharacterInterface></CharacterInterface>
        </RightHeader>
        <RightFooter>

        </RightFooter>
      </Mainbody>
    </Container>
  );
}

const Container = styled.div`
  width:1690px;
  height:900px;

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
  height:900px;
  background-color:lightgray;
  display:flex;
  flex-direction:column;
`


const Mainbody = styled.div`
  width:1390px;
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
  height:300px;
  border:1px solid black;
`

const MenuContainer = styled.div`

`

const CharacterInfo = styled.div`
  
`