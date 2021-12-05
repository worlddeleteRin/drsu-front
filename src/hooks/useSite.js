import {
    useQuery
} from 'react-query';

import { APISite } from '@/api/site';


export function useCommonInfo () {
    return useQuery({
        queryKey: ["common-info"], 
        queryFn: APISite.getCommonInfo,
        staleTime: Infinity,
        retry: false,
        refetchOnMount: false,
        refetchOnWindowFocus: false,
    });
}

export function useHeaderLinks() {
    return useQuery({
        queryKey: ["header-links"], 
        queryFn: APISite.getHeaderLinks,
        staleTime: Infinity,
        retry: false,
        refetchOnMount: false,
        refetchOnWindowFocus: false,
    });
}


