import TitleBig from '@/components/content/TitleBig';

function WorkWithUs (props) {
    const defaultContent = [
        "https://simferopol.ooskidka.ru/wp-content/themes/ooskidka/images/rab/p1.jpg",
        "https://simferopol.ooskidka.ru/wp-content/themes/ooskidka/images/rab/p3.jpg",
        "https://simferopol.ooskidka.ru/wp-content/themes/ooskidka/images/rab/p5.jpg",
        "https://simferopol.ooskidka.ru/wp-content/themes/ooskidka/images/rab/p6.jpg",
        "https://simferopol.ooskidka.ru/wp-content/themes/ooskidka/images/rab/p7.jpg",
        "https://simferopol.ooskidka.ru/wp-content/themes/ooskidka/images/rab/p8.jpg",
        "https://simferopol.ooskidka.ru/wp-content/themes/ooskidka/images/rab/p10.jpg",
        "https://simferopol.ooskidka.ru/wp-content/themes/ooskidka/images/rab/p12.jpg",
        "https://simferopol.ooskidka.ru/wp-content/themes/ooskidka/images/rab/p14.jpg",
        "https://simferopol.ooskidka.ru/wp-content/themes/ooskidka/images/rab/p15.jpg",
        "https://simferopol.ooskidka.ru/wp-content/themes/ooskidka/images/rab/p16.jpg",
    ]
    const content = props?.content || defaultContent;
    
    const titleBlock = (
        <TitleBig 
            title="С нами работают"
            size="medium"
        />
    )
    const contentBlock = (
        <div className="mt-10 flex flex-wrap gap-4">
            {content && content.map((imgSrc, index) => (
                <div key={index} className="">
                    <img
                        src={imgSrc}
                        className="max-w-[150px]"
                    />
                </div>
            ))
            }
        </div>
    )
    return (
        <div className="py-10">
            <div className="mx-4">
                <div className="max-w-screen-lg mx-auto">
                    { titleBlock }
                    { contentBlock }
                </div>
            </div>
        </div>
    )
}

export default WorkWithUs
