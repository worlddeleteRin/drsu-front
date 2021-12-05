import { Icon } from '@iconify/react';
import { 
    Button,
    Fab,
} from '@mui/material';

import { Menu } from '@mantine/core';


import { useEffect, useState } from 'react';

import Link  from 'next/link';

import { useRouter } from 'next/router';

import { requestCallModalOpenState } from '@/atoms/siteState';

import { useSetRecoilState } from 'recoil';



function DesktopHeader(props) {
    const router = useRouter()

    const commonInfo = props?.commonInfo || null;
    const headerLinks = props?.headerLinks || [];

    const setCallModalOpen = useSetRecoilState(requestCallModalOpenState)

    // const open = Boolean(anchorEl);
    const [openMenu, setOpenMenu] = useState(null);


    const handleOpenCallModal = () => {
        setCallModalOpen(true)
    }

    const goToPage = (route_link) => {
        router.push(route_link)
    }



    const contactInfo = (
        <div>
            <a 
            href={'tel:'+ commonInfo?.phone}
            className="text-xl font-bold cursor-pointer">
                { commonInfo?.phone_display }
            </a>
            <div className="text-gray-400 text-[14px] font-light">
                { commonInfo?.working_time }
            </div>
        </div>
    )
    const requestCallButton = (
        <div>
            <Button 
                variant="contained"
                onClick={handleOpenCallModal}
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
                    src={commonInfo?.logo_src}
                />
            </Link>
            { chooseCity }
            { calcGo }
            { requestCallButton }
            { contactInfo }
        </div>
    )
    
    const controlMenuButton = (link_item) => (
        <Button
            className="text-black font-medium"
            aria-controls="basic-menu"
            area-haspopup="true"
            area-expanded={open ? 'true': undefined}
            onClick={() => goToPage(link_item?.link?.to)}
        >
            { link_item?.title } 
        </Button>
    )
    const headerLinksBlock = headerLinks?.map((link_item) => {
            return (
                <span
                    key={link_item.id}
                >
                    { link_item?.children.length > 0 ?
                <Menu
                    trigger="hover"
                    delay={200}
                    control={controlMenuButton(link_item)}
                    open={openMenu === link_item.id}
                >
                    {
                        link_item.children?.map((child_route) => (

                                        <Menu.Item
                                            key={child_route.id}
                                            onClick={() => goToPage(child_route?.link?.to)}
                                        >
                                                { child_route?.title }
                                        </ Menu.Item>
                        ))
                    }
                </Menu>
                :
                    controlMenuButton(link_item)
                }
                </span>
            );
        }
    )

    return (
        <div
        >
            <div className="max-w-screen-xl mx-auto py-3">
                { headerFirst }
            </div>
            <div className="bg-gray-100 max-w-screen-xl mx-auto rounded-xl py-1">
                <div className="mx-auto max-w-screen-xl h-full flex items-center justify-center">
                    { headerLinksBlock }
                </div>
            </div>
        </div>
    )
}

export default DesktopHeader;
