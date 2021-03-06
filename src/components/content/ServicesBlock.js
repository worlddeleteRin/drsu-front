import {
    Button
} from '@mui/material';

import TitleBig from '@/components/content/TitleBig';
import { defaultServices } from '@/helpers/content';

import { useSetRecoilState } from 'recoil';

import { requestCallModalOpenState } from '@/atoms/siteState';


function ServicesBlock (props) {

    const setRequestCallModal = useSetRecoilState(requestCallModalOpenState)

    const handleOpenCallModal = () => {
        setRequestCallModal(true)
    }

    const services = props.services ? props.services : defaultServices
    const title = (
        <TitleBig
            title="Наши услуги"
            size="medium"
        /> 
    )

    const Service = ({service}) => {
        return (
            <div className="max-w-[300px]">
                <img
                    src={service?.imgsrc}
                />
                <div className="font-semibold mt-2">
                    { service?.title }
                </div>
                <div className="mt-1">
                    { service?.price }
                </div>
                {

                }
                <Button
                    color="primary"
                    variant="outlined"
                    className="w-full mt-3"
                >
                    Подробнее
                </Button>
                {
                <Button
                    color="primary"
                    variant="contained"
                    className="w-full mt-3"
                    onClick={handleOpenCallModal}
                >
                    Заказать
                </Button>
                }
            </div>
        )
    }

    return (
        <div className="py-10 bg-gray-50 mt-6">
            <div className="max-w-screen-lg mx-2 md:mx-auto">

                { title }

                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 py-8">
                    {services?.map((service) =>
                        <Service
                            key={service?.id}
                            service={service}
                        />
                    )}
                </div>
            </div>
        </div>
    )
}

export default ServicesBlock;
