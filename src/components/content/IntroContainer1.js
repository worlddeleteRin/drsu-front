import { Button,
} from '@mui/material'

import Link from 'next/link';
import { useCommonInfo } from '@/hooks/useSite';

import { Icon } from '@iconify/react';

import { requestCallModalOpenState } from '@/atoms/siteState';
import { useSetRecoilState } from 'recoil';

import { motion } from 'framer-motion';

function IntroContainer1 (props) {
    const titleMotion = {
        hidden: { opacity: 0, y: -50 },
        show: { 
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.8,
                ease: "easeInOut"
            }
        },
    }
    const leftMotion = {
        hidden: { opacity: 0, x: -100 },
        show: { 
            opacity: 1,
            x: 0,
            transition: {
                duration: 0.8,
                ease: "easeInOut"
            }
        },
    }
    const bottomMotion = {
        hidden: { opacity: 0, y: -100 },
        show: { 
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.8,
                ease: "easeInOut"
            }
        },
    }

    const title = props?.title ? props.title : "Служба услуг ДРСУ82"
    const imgsrc = props?.imgsrc ? props?.imgsrc : "https://cheljabinsk.ooskidka.ru/wp-content/uploads/2021/03/Remont-krovli.jpg"
    // eof props
    //
    const setRequestCallModal = useSetRecoilState(requestCallModalOpenState)

    const commonInfoQuery = useCommonInfo();
    const commonInfo = commonInfoQuery?.data

    const handleOpenCallModal = () => {
        setRequestCallModal(true);
    }

    const background = (
        <div 
        >
        <div
            className="absolute top-0 left-0 z-[3] bg-black w-full h-full opacity-50"
        >
        </div>
        <img
            className="absolute top-0 left-0 z-[2] w-full h-full object-cover"
            src={imgsrc}
        />
        </div>
    )
    const titleBlock = (
        <motion.div
            variants={titleMotion}
            animate="show"
            initial="hidden"
            className="text-white tracking-wider text-[35px] mx-auto md:mx-0 md:text-[65px] font-bold"
        >
            { title }
        </motion.div>
    )
    const phone = (
        <motion.div 
            variants={leftMotion}
            animate="show"
            initial="hidden"
            className="mt-2 mx-auto md:mx-0">
            <a 
                className="text-white text-[24px] md:text-[32px] font-semibold"
                href={'tel:' + commonInfo?.phone}>
                { commonInfo?.phone_display }
            </a>
        </motion.div>
    )
    const socials = (
        <div
            variants={bottomMotion}
            animate="show"
            initial="hidden"
            className="mt-4 flex flex-row gap-4 mx-auto md:mx-0"
        >
            <a 
                variants={bottomMotion}
                animate="show"
                initial="hidden"
                href={commonInfo?.socials?.whatsapp?.link}>
                <Button
                    variant="contained"
                    color="primary"
                    className="bg-[#83d05b]"
                    size="large"
                    startIcon={
                        <Icon
                            icon="akar-icons:whatsapp-fill"
                        />
                    }
                >
                    WhatsApp
                </Button>
            </a>
            <a 
                href={commonInfo?.socials?.viber?.link}>
                <Button
                    variant="contained"
                    color="primary"
                    className="bg-[#614d9b]"
                    size="large"
                    startIcon={
                        <Icon
                            icon="akar-icons:whatsapp-fill"
                        />
                    }
                >
                    Viber
                </Button>
            </a>
        </div>
    )
    const requestCallButton = (
        <div className="mt-7 flex">
            <Button
                color="secondary"
                variant="contained"
                size="large"
                onClick={handleOpenCallModal}
                className="w-8/12 mx-auto md:w-auto md:mx-0"
            >
            Оставить заявку
            </Button>
        </div>
    )

    return (
        <div
            className="relative bg-transparent min-h-[400px] flex flex-col justify-center"
        >
            { background }
            <div
                className="max-w-screen-lg mx-auto w-full relative z-[5] md:px-12 px-2 py-10"
            >
                <div 
                    className="relative md:w-9/12 h-full flex flex-col"
                >
                    { titleBlock }
                    { phone }
                    { socials }
                    { requestCallButton }
                </div>
            </div>

        </div>
    )
}

export default IntroContainer1
