
import { useSite } from '@/hooks/useSite';

import { useEffect, useState } from 'react';

import Link  from 'next/link';
import { useRouter } from 'next/router';

import DesktopHeader from '@/components/header/DesktopHeader';
import MobileHeader from '@/components/header/MobileHeader';


import {
    Skeleton
} from '@mui/material';


function BaseHeader() {
    const siteHook = useSite();

    useEffect(() => {
        if (!siteHook.headerLinks) {
            siteHook.getHeaderLinks()
        }
        if (!siteHook.commonInfo) {
            siteHook.getCommonInfo()
        }
    }, []);

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

    if (siteHook.headerLoading || siteHook.commonInfoLoading || !Array.isArray(siteHook.headerLinks)) {
        return (
            <>
                {headerLoading } 
            </>
        )
    }

    return (
        <>
        <div className="hidden md:block">
            <DesktopHeader />
        </div>
        <div className="block md:hidden mb-[59px]">
            <MobileHeader />
        </div>
        </>
    )
}

export default BaseHeader;
