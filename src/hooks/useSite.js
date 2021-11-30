
import {useState} from 'react';
import { useRecoilState } from "recoil";

import { APISite } from '@/api/site';

import { 
    commonInfoState,
    headerLinksState,
} from '@/atoms/siteState';

export const useSite = () => {
    const [commonInfo, setCommonInfo] = useRecoilState(commonInfoState)
    const [headerLinks, setHeaderLinks] = useRecoilState(headerLinksState)

    const [commonInfoLoading, setCommonInfoLoading] = useState(false)
    const [headerLoading, setHeaderLoading] = useState(false)

    const getCommonInfo = async () => {
        setCommonInfoLoading(true)
        const data = await APISite.getCommonInfo()
        setCommonInfo(data.data)
        setCommonInfoLoading(false)
    }
    const getHeaderLinks = async () => {
        setHeaderLoading(true)
        const data = await APISite.getHeaderLinks()
        setHeaderLinks(data.data)
        setHeaderLoading(false)
    }

    return {
        commonInfo,
        headerLinks,
        // functions
        getCommonInfo,
        getHeaderLinks,
        // loaders
        commonInfoLoading,
    }
}


