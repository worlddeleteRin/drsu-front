import { defaultTabsContainer } from "@/helpers/content";

import {
    Tab,
} from '@mui/material';
import {
    Accordion,
    AccordionSummary,
    AccordionDetails,
} from '@mui/material';

import { Icon } from '@iconify/react';

import TitleBig from '@/components/content/TitleBig';

import { useState } from 'react';



function TabsContainer (props) {
    const default_title = "Как рассчитывается стоимость?"
    const imgsrc = props?.imgsrc ? props.imgsrc : defaultTabsContainer.imgsrc
    const tabs = props?.tabs ? props.tabs : defaultTabsContainer.tabs
    const title = props?.title || default_title

    const [expandedId, setExpanded] = useState(0)
    const handleExpanded = (id) => {
        const newId = id === expandedId ? null : id 
        setExpanded(newId)
    }


    const titleBlock = (
        <div className="">
            <TitleBig 
                title={title}
                size="small"
            />
        </div>
    )

    const tabsBlock = (
        <div>
            { titleBlock }
                <div className="mt-5 grid gird-cols-1 gap-1"> 
                    {tabs?.map((tab, index) =>
                            <Accordion
                                expanded={expandedId === index}
                                onChange={() => handleExpanded(index)}
                                key={tab?.id}
                                className="rounded-xl"
                            >
                                <AccordionSummary
                                    expandIcon={<Icon icon="bx:bx-chevron-down" width="30" className="text-white"/>}
                                    className="rounded-xl bg-primary"
                                >
                                    <div className="font-semibold text-white tracking-wide">
                                    { tab?.title }
                                    </div>
                                </AccordionSummary>
                                <AccordionDetails>
                                    { tab?.content }
                                </AccordionDetails>
                            </Accordion>
                    )}
                </div>
        </div>
    )
    const imageBlock = (
        <div>
            <img
                className="max-h-[400px] object-contain"
                src={imgsrc}
            />
        </div>
    )
    return (
        <div className="py-4 mt-5 mx-2">
            <div className="max-w-screen-lg mx-2 md:mx-auto grid gap-4 grid-cols-1 md:grid-cols-2">
                {tabsBlock}
                {imageBlock}
            </div>
        </div>
    )
}

export default TabsContainer
