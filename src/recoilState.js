import {atom} from 'recoil'

export const counterState = atom({
    key:'counterState',
    default:0,
});



//검색하고자하는 캐릭터명
export const searchCharacterName = atom({
    key:'searchCharacterName',
    default:"아브까지"
})



//검색한 이름의 캐릭터 리스트가 저장되는 배열
export const searchedCharacterList = atom({
    key:'searchedCharacterList',
    default:[],
});



export const searchedFourTCharacterList = atom({
    key:'searchedFourTCharacterList',
    default:[],
});