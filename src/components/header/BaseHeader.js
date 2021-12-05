

import { useEffect, useState } from 'react';

import Link  from 'next/link';
import { useRouter } from 'next/router';

import DesktopHeader from '@/components/header/DesktopHeader';
import MobileHeader from '@/components/header/MobileHeader';

import {
    useCommonInfo,
    useHeaderLinks,
} from '@/hooks/useSite';


import {
    Skeleton
} from '@mui/material';


function BaseHeader() {
    const commonInfoQuery = useCommonInfo();
    const headerLinksQuery = useHeaderLinks();

    const commonInfo = commonInfoQuery?.data
    const headerLinks = headerLinksQuery?.data


    const headerLoading = (
            <div className="py-2 px-4 grid grid-cols-4 gap-2 max-w-screen-xl mx-auto">
                <Skeleton variant="circular" 
                    className="w-10 h-10"
                />
                <Skeleton animation="wave"/>
                <Skeleton />
                <Skeleton animation="wave"/>
            </div>
    )

    if (commonInfoQuery.isLoading || headerLinksQuery.isLoading) {
        return (
            <>
                {headerLoading } 
            </>
        )
    }

    return (
        <>
        <div className="hidden md:block">
            <DesktopHeader 
                commonInfo={commonInfo}
                headerLinks={headerLinks}
            />
        </div>
        <div className="block md:hidden mb-[59px]">
            <MobileHeader 
                commonInfo={commonInfo}
                headerLinks={headerLinks}
            />
        </div>
        </>
    )
}

export default BaseHeader;
