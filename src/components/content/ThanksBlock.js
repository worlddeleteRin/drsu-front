import TitleBig from '@/components/content/TitleBig';

function ThanksBlock () {
    const thanksItems = [
        {title: "", imgsrc: "http://placehold.it/500x500"},
        {title: "", imgsrc: "http://placehold.it/500x500"},
        {title: "", imgsrc: "http://placehold.it/500x500"},
        {title: "", imgsrc: "http://placehold.it/500x500"},
        {title: "", imgsrc: "http://placehold.it/500x500"},
        {title: "", imgsrc: "http://placehold.it/500x500"},
    ]

    const titleBlock = (
        <TitleBig 
            title="Нам благодарны"
            size="medium"
        />
    )
    const contentBlock = (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 mt-6">
            {thanksItems && thanksItems.map((item, index) => (
                <div key={index}
                    className="overflow-hidden"
                >
                    <img
                        className="object-contain max-w-[300px] w-full rounded-md"
                        src={item?.imgsrc}
                    />
                </div>
            )
            )}
        </div>
    )
    return (
        <div className="mx-4 md:py-8">
            <div className="max-w-screen-lg mx-auto">
                { titleBlock }
                { contentBlock }
            </div>
        </div>
    )
}

export default ThanksBlock;
