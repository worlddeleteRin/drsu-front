import { atom, selector } from "recoil";

export const commonInfoState = atom({
    key: 'commonInfoState',
    default: null,
})

export const headerLinksState = atom({
    key: 'headerLinksState',
    default: null,
})

export const requestCallModalOpenState = atom({
    key: 'requestCallModalOpenState',
    default: false, 
})

