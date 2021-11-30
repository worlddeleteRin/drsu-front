import { defaultFeatures } from '@/helpers/content';
import { Icon } from '@iconify/react';
import Title from '@/components/content/Title';

import {
    Fab
} from '@mui/material';

function Features (props) {
    let features = []

    if (!props?.features) {
        features = defaultFeatures;
    } else {
        features = props?.features;
    }

    const title = (
        <Title 
            title="Наши преимущества"
        />
    )

    const Feature = ({feature}) => {
        return (
            <div className="bg-blue-50 rounded-md py-3 px-3 flex-1 min-w-[150px] min-h-[110px] flex flex-col items-center">
                <div>
                    <Fab
                        color="primary"
                    >
                        <Icon
                            className=""
                            icon={feature?.icon}
                            width="25"
                        />
                    </Fab>
                </div>
                <div className="mt-3">
                { feature?.title }
                </div>
            </div>
        )
    }
    return (
        <div className="py-10 px-2">
            <div 
                className="max-w-screen-lg mx-auto"
            >
                { title }
                <div class="flex gap-3 flex-wrap mt-7">
                    {features?.map((feature) => (
                        <Feature
                            key={feature}
                            feature={feature}
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Features
