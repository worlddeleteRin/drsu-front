
import { useSite } from '@/hooks/useSite';

import { useEffect, useState } from 'react';

import Link  from 'next/link';
import { useRouter } from 'next/router';

import DesktopHeader from '@/components/header/DesktopHeader';
import MobileHeader from '@/components/header/MobileHeader';

function BaseHeader() {
    return (
        <>
        <div className="hidden md:block">
            <DesktopHeader />
        </div>
        <div className="block md:hidden">
            <MobileHeader />
        </div>
        </>
    )
}

export default BaseHeader;
