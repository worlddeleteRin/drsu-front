import {
    Button,
} from '@mui/material'

import Link from 'next/link';
import { useSite } from '@/hooks/useSite';

function IntroContainer1 (props) {
    const site = useSite();

    const background = (
        <div 
        >
        <div
            className="absolute top-0 left-0 z-[3] bg-black w-full h-full opacity-50"
        >
        </div>
        <img
            className="absolute top-0 left-0 z-[2] w-full h-full object-cover"
            src={props?.imgsrc}
        />
        </div>
    )
    const title = (
        <div
            className="text-white tracking-wider text-[65px] font-bold"
        >
            { props?.title }
        </div>
    )
    const phone = (
        <div className="mt-2">
            <a 
                className="text-white text-[32px] font-semibold"
                href={'tel:' + site?.commonInfo?.phone}>
                { site?.commonInfo?.phone_display }
            </a>
        </div>
    )
    const socials = (
        <div>
            <a href={site?.commonInfo?.socials?.whatsapp}>
                <Button>
                    asdf
                </Button>
            </a>
        </div>
    )

    return (
        <div
            className="relative bg-transparent min-h-[400px] flex flex-col justify-center"
        >
            { background }
            <div
                className="max-w-screen-xl mx-auto w-full relative z-[5] px-2"
            >
                <div 
                    className="relative md:w-7/12 h-full flex flex-col border-2 border-black"
                >
                    { title }
                    { phone }
                </div>
            </div>

        </div>
    )
}

export default IntroContainer1
