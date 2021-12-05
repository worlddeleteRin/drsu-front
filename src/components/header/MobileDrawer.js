import {
    Drawer,
    List,
    MenuItem,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    Fab,
} from '@mui/material';

import { Icon } from '@iconify/react';

import { useRecoilState } from 'recoil';

import { 
    mobileMenuDrawerOpenState
} from '@/atoms/siteState';


function MobileDrawer ({commonInfo, headerLinks}) {
    const [isOpen, setIsOpen] = useRecoilState(mobileMenuDrawerOpenState)

    const handleClose = () => {
        setIsOpen(false)
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



    const socials_width = 32
    const socials_size = "medium"
    const socials_color = "secondary"
    const socials = (
        <div className="flex justify-center items-center gap-2">
            { commonInfo?.socials && Object.keys(commonInfo?.socials).map((social, index) => (
            <Fab 
                key={index}
                color={socials_color} size={socials_size}>
                <Icon icon={commonInfo?.socials[social]?.icon} width={socials_width} />
            </Fab>
            ))
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
            { headerLinks && 
            headerLinks?.map((menuLink) => (
                <MenuItem key={menuLink?.id}
                >   
                        <ListItemIcon>
                            <Icon icon="bx:bx-chevron-right" width="30" className="text-primary"/>
                        </ListItemIcon>
                        <ListItemText primary={menuLink?.title} />
                </MenuItem>
            ))
            }
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