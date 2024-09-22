import {atom} from 'recoil'

export const counterState = atom({
    key:'counterState',
    default:0,
});


export const searchCharacterName = atom({
    key:'searchCharacterName',
    default:"아브까지"
})

export const searchedCharacterList = atom({
    key:'searchedCharacterList',
    default:[],
});