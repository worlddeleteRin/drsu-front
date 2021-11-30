import { defaultTabsContainer } from "@/helpers/content";

import {
    Tab,
} from '@mui/material';
import {
    TabContext,
    TabList,
    TabPanel
} from '@mui/lab';


function TabsContainer (props) {
    const imgsrc = props?.imgsrc ? props.imgsrc : defaultTabsContainer.imgsrc
    const tabs = props?.tabs ? props.tabs : defaultTabsContainer.tabs

    const [tabValue, setTabValue] = useState(1);

    const handleSetTab = (event, newValue) => {
        setValue(newValue)
    }

    const tabsBlock = (
        <div>
            <TabContext
                value={tabValue}
            >
                <TabList
                    onChange={handleSetTab}
                >
                    {tabs?.map((tab) =>
                            <Tab
                                label={tab?.title}
                                value={tab?.id}
                            >
                            </Tab>
                    )}
                </TabList>
                <div>
                    {tabs?.map((tab) => 
                            <> 
                            <TabPanel value={tab?.id}>
                                {tab?.content}
                            </TabPanel>
                            </>
                    )}
                </div>
              </TabContext>
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
