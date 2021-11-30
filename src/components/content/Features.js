import { defaultFeatures } from '@/helpers/content';
import { Icon } from '@iconify/react';
import Title from '@/components/content/Title';

function Features (props) {
    let features = []

    if (!props?.features) {
        features = defaultFeatures;
    } else {
        features = props?.features;
    }

    const title = (
        <div
            className="text-[50px] tracking-wide font-semibold"
        >
            Наши преимущества
        </div>
    )

    const Feature = ({feature}) => {
        return (
            <div className="bg-blue-50 rounded-md py-3 px-3 flex-1 min-w-[150px] min-h-[110px] flex flex-col justify-center">
                <Icon
                    icon={feature?.icon}
                />
                <div>
                { feature?.title }
                </div>
            </div>
        )
    }
    return (
        <div className="py-10 px-2">
            <div 
                className="max-w-screen-xl mx-auto"
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
