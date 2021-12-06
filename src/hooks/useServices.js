import {
    useQuery
} from 'react-query';

import { APIServices } from '@/api/services';


export function useServicePage(slug) {
    return useQuery({
        queryKey: ["services/", slug], 
        queryFn: () => APIServices.getServicePage(slug),
        staleTime: Infinity,
        retry: false,
        refetchOnMount: false,
        refetchOnWindowFocus: false,
        enabled: slug && slug.length > 0,
    });
}

