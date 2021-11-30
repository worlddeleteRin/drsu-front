import Title from '@/components/content/Title';
import { defaultServices } from '@/helpers/content';

function ServicesBlock (props) {
    const services = props.services ? props.services : defaultServices
    const title = (
        <Title
            title="Наши услуги"
        /> 
    )

    const Service = ({service}) => {
        return (
            <div className="flex flex-col max-w-[200px]">
                <img
                    src={service?.imgsrc}
                />
                <div className="">
                </div>
            </div>
        )
    }

    return (
        <div>
            <div className="flex flex-wrap gap-4">
                {services?.map((service) =>
                    <Service
                        key={service?.id}
                        service={service}
                    />
                )}
            </div>
        </div>
    )
}

export default ServicesBlock;
