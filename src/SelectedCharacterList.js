import { useEffect } from "react";
import { useRecoilValue } from "recoil";
import styled from "styled-components";
import { searchedCharacterList } from "./recoilState";

export default function SelectedCharacterList() {
    const characterList = useRecoilValue(searchedCharacterList);
    
    useEffect(() => {
        console.log(characterList);
    },[characterList]);



    return(
        <div>

        </div>
    )
}





