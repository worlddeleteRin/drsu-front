import { Icon } from '@iconify/react';
import { 
    Button,
    IconButton,
    AppBar,
    Toolbar,
    Fab,
} from '@mui/material';

import { useSite } from '@/hooks/useSite';

import { useEffect, useState } from 'react';

import Link  from 'next/link';
import { useRouter } from 'next/router';


function MobileHeader() {
    const router = useRouter()
    const siteHook = useSite()


    const menu = (
        <>
            <IconButton
                color="inherit"
                size="large"
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
                href={'tel:' + siteHook?.commonInfo?.phone}
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
        <div>
            <Link href="/">
                <img
                    className="h-[50px] object-contain"
                    src={siteHook?.commonInfo?.logo_src}
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
