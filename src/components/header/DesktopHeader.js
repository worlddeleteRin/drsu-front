import { Icon } from '@iconify/react';
import { 
    Button,
    Menu,
    MenuList,
    MenuItem,
    CircularProgress,
    Fab,
} from '@mui/material';

import { useSite } from '@/hooks/useSite';

import { useEffect, useState } from 'react';

import Link  from 'next/link';
import { useRouter } from 'next/router';


function DesktopHeader() {
    const router = useRouter()
    const siteHook = useSite()

    const [anchorEl, setAnchorEl] = useState(null);
    // const open = Boolean(anchorEl);
    const [openMenu, setOpenMenu] = useState(null);


    const handleClick = (event, item_id) => {
        setAnchorEl(event.currentTarget);
        setOpenMenu(item_id)
    }
    const handleClose = () => {
        setAnchorEl(null);
        setOpenMenu(null);
    }

    useEffect(() => {
        if (!siteHook.headerLinks) {
            siteHook.getHeaderLinks()
        }
        if (!siteHook.commonInfo) {
            siteHook.getCommonInfo()
        }
    }, []);

    if (siteHook.headerLoading || siteHook.commonInfoLoading) {
        return (
            <>
                <CircularProgress />
            </>
        )
    }

    const contactInfo = (
        <div>
            <a 
            href={'tel:'+ siteHook?.commonInfo?.phone}
            className="text-xl font-bold cursor-pointer">
                { siteHook?.commonInfo?.phone_display }
            </a>
            <div className="text-gray-400 text-[14px] font-light">
                { siteHook?.commonInfo?.working_time }
            </div>
        </div>
    )
    const requestCallButton = (
        <div>
            <Button 
                variant="contained"
            >
                Заказать звонок
            </Button>
        </div>
    )
    const chooseCity = (
        <div className="flex items-center">
            <Fab
                size="small"
                color="primary"
            >
                <Icon
                    icon="mdi:map-marker-outline"
                    width="25"
                />
            </Fab>
            <div className="ml-2">
                <span>Ваш город:</span>
                <div color="primary">
                    Симферополь  
                </div>
            </div>
        </div>
    )
    const calcGo = (
        <div className="flex items-center">
            <Fab
                size="small"
                color="primary"
            >
                <Icon
                    icon="bi:calculator"
                    width="22"
                />
            </Fab>
            <div className="max-w-[150px] ml-2">
                Калькулятор расчета стоимости 
            </div>
        </div>
    )


    const headerFirst = (
        <div 
            className="flex items-center justify-around"
        >
            <Link href="/">
                <img
                    className="max-h-[70px] cursor-pointer"
                    src={siteHook?.commonInfo?.logo_src}
                />
            </Link>
            { chooseCity }
            { calcGo }
            { requestCallButton }
            { contactInfo }
        </div>
    )
    
    const headerLinks = siteHook.headerLinks?.map((link_item) => (
            <span
                key={link_item.id}
            >
            <Button
                className="text-black font-medium"
                key={link_item.id}
                aria-controls="basic-menu"
                area-haspopup="true"
                area-expanded={open ? 'true': undefined}
                onClick={(e) => handleClick(e, link_item.id)}
            >
                { link_item?.title } 
            </Button>
                { link_item?.children.length > 0 &&
            <Menu
                open={openMenu === link_item.id}
                onClose={handleClose}
                anchorEl={anchorEl}
                MenuListProps={{
                    // onMouseLeave: handleClose
                }}
                children={
                    link_item.children?.map((child_route) => (
                        <MenuItem
                            key={child_route.id}
                            onClick={handleClose}
                        >
                            <Link href={child_route?.link?.to}>
                                { child_route?.title }
                            </Link>
                        </ MenuItem>
                    ))
                } 
            >
            </Menu>
            }
            </span>
        )
    )

    return (
        <div
        >
            <div className="max-w-screen-xl mx-auto py-3">
                { headerFirst }
            </div>
            <div className="bg-gray-100 max-w-screen-xl mx-auto rounded-xl py-1">
                <div className="mx-auto max-w-screen-xl h-full flex items-center justify-center">
                    { headerLinks }
                </div>
            </div>
        </div>
    )
}

export default DesktopHeader;
