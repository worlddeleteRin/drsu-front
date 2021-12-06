import {
    Drawer,
    List,
    MenuItem,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    Fab,
    Collapse,
} from '@mui/material';

import { Icon } from '@iconify/react';

import { useRecoilState } from 'recoil';

import { useState } from 'react';

import { useRouter } from 'next/router';


import { 
    mobileMenuDrawerOpenState
} from '@/atoms/siteState';


function MobileDrawer ({commonInfo, headerLinks}) {
    const router = useRouter();
    const [isOpen, setIsOpen] = useRecoilState(mobileMenuDrawerOpenState)
    const [menuOpen, setMenuOpen] = useState(true)

    const handleClose = () => {
        setIsOpen(false)
    }

    const handleMenuClick = (id) => {
        setMenuOpen((prevState => ({...prevState, [id]: !prevState[id]})))
    }

    const goToPage = (link) => {
        router.push(link)
        handleClose()
    }


    const topBlock = (
        <div className="">
            <div>
                <img 
                    src={commonInfo?.logo_src} 
                    className="w-10/12 mx-auto h-24 object-contain" 
                />
            </div>
            <div>
            </div>
        </div>
    )




    const socials = (
        <div className="flex justify-center items-center gap-2">
            { commonInfo?.socials && Object.keys(commonInfo?.socials).map((social, index) => {
                const socials_width = 28
                const socials_size = "medium"
                const socials_color = "text-white"
                return (
                    <Fab
                        key={index}
                        size={socials_size}
                        style={{backgroundColor: commonInfo?.socials[social]?.color}}
                        className={socials_color}
                    >
                        <Icon icon={commonInfo?.socials[social]?.icon} width={socials_width} />
                    </Fab>
                );
            })
            }
        </div>
    )


    const bottomBlock = (
        <div className="w-full py-8 text-white bg-primary rounded-t-lg">
            { socials }
        </div>
    )

    const menuBlock = (
        <div className="overflow-y-scroll flex-1">
            <List>
                { headerLinks && 
                    headerLinks?.map((menuLink) => {
                        return (
                        <>
                        { menuLink?.children?.length > 0 ?
                        <span key={menuLink?.id}>
                            <ListItemButton
                                onClick={() => handleMenuClick(menuLink?.id)}
                            >
                                    <ListItemIcon>
                                        <Icon icon="bi:plus-square" width="30" className="text-primary"/>
                                    </ListItemIcon>
                                    <ListItemText primary={menuLink?.title} />
                            </ListItemButton>

                            <Collapse in={menuOpen[menuLink?.id]}>
                                <List>
                                    {menuLink.children?.length > 0  && 
                                            menuLink?.children?.map((sublink, index) => (
                                                <div key={index} className="ml-4">
                                                     <ListItemButton
                                                        onClick={() => goToPage(sublink?.link?.to)}
                                                    >
                                                            <ListItemIcon>
                                                                <Icon icon="bx:bx-chevron-right" width="30" className="text-primary"/>
                                                            </ListItemIcon>
                                                            <ListItemText primary={sublink?.title} />
                                                    </ListItemButton>
                                                </div>
                                            ))
                                    }
                                </List>
                            </Collapse>
                        </span> :
                            <ListItemButton
                                onClick={() => goToPage(menuLink?.link?.to)}
                            >
                                    <ListItemIcon>
                                        <Icon icon="bx:bx-chevron-right" width="30" className="text-primary"/>
                                    </ListItemIcon>
                                    <ListItemText primary={menuLink?.title} />
                            </ListItemButton>
                        }
                        </>
                    );
                })
                }
            </List>
        </div>
    )

    return (
        <>
            <Drawer
                open={isOpen}
                onClose={handleClose}
                classes={{paper: "w-9/12 max-w-[500px]"}}
            >
                { topBlock }
                { menuBlock }
                { bottomBlock }
            </Drawer>
            
        </>
    )
}

export default MobileDrawer
