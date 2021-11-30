import { defaultTabsContainer } from "@/helpers/content";

import {
} from '@mui/material';


function TabsContainer (props) {
    const imgsrc = props?.imgsrc ? props.imgsrc : defaultTabsContainer.imgsrc
    const tabs = props?.tabs ? props.tabs : defaultTabsContainer.tabs

    const tabsBlock = (
        <div>
            tabs
        </div>
    )
    const imageBlock = (
        <div>
            image
        </div>
    )
    return (
        <div className="py-4 mt-5">
            <div className="max-w-screen-lg mx-2 md:mx-auto grid gap-4 grid-cols-1 md:grid-cols-2">
                {tabsBlock}
                {imageBlock}
            </div>
        </div>
    )
}

export default TabsContainer
