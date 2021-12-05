import { Icon } from '@iconify/react';
import { 
    Button,
    IconButton,
    AppBar,
    Toolbar,
    Fab,
} from '@mui/material';

import { useEffect, useState } from 'react';

import Link  from 'next/link';
import { useRouter } from 'next/router';

import { 
    mobileMenuDrawerOpenState 
} from '@/atoms/siteState';
import { useSetRecoilState } from 'recoil';


function MobileHeader(props) {
    const router = useRouter()

    const commonInfo = props?.commonInfo || null;
    const headerLinks = props?.headerLinks || [];

    const setMobileMenuOpen = useSetRecoilState(mobileMenuDrawerOpenState)
    const openMobile = () => setMobileMenuOpen(true);


    const menu = (
        <>
            <IconButton
                color="inherit"
                size="large"
                onClick={openMobile}
            >
                <Icon
                    icon="feather:menu"
                />
            </IconButton>
        </>
    )
    const requestCall = (
        <div>
            <Fab
                href={'tel:' + commonInfo?.phone}
                color="primary"
                size="small"
            >
                <Icon
                    icon="ci:phone"
                    width="17"
                />
            </Fab>
        </div>
    );
    const logo = (
        <div className="w-2/12">
            <Link href="/">
                <img
                    className="h-[50px] object-contain cursor-pointer"
                    src={commonInfo?.logo_src}
                />
            </Link>
        </div>
    )
    const cityButton = (
        <div>
            <Button
                variant="outlined"
                size="small"
            >
                Симферополь
            </Button>
        </div>
    )

    return (
        <AppBar
            color="inherit"
        >
            <Toolbar>
                <div className="flex flex-1 items-center gap-1">
                    { logo }
                    { requestCall }
                    { cityButton }
                </div>
                { menu }
            </Toolbar>
        </AppBar>
    )
}

export default MobileHeader;
