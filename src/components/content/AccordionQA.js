import TitleBig from '@/components/content/TitleBig';

import { Icon } from '@iconify/react';

import { useState } from 'react';

import {
    Accordion,
    AccordionSummary,
    AccordionDetails,
} from '@mui/material';


function AccordionQA (props) {
    const default_title = "Частые вопросы и ответы"
    const default_content = [
        {
            "title": "Что предусматривает промышленный такелаж?",
            "body": "Перемещение грузов весом от 800 кг до 50 т. Для погрузочных, разгрузочных работ, перевозки применяются краны или манипуляторы, спецоборудование, автомобильные платформы и тягачи с большой грузоподъемностью. У нас есть вся необходимая техника и лицензия на оказание услуг."
        },
        {
            "title": "Как посчитать стоимость такелажных работ?",
            "body": "Такелаж — опасная и трудная задача, где нет ни одной похожей ситуации. Поэтому по телефону озвучить конечную стоимость нельзя. Сделать это может специалист, после осмотра места выполнения работ. При больших объемах требуется произвести дополнительные замеры."
        },
        {
            "title": "Почему заказывают услуги такелажников?",
            "body": "Такелажные операции должны выполнять только опытные грузчики после получения специального сертификата. Специалисты имеют навык применения различных механизмов для перемещения многотонных грузов, работают после проведения инструктажа."
        },
        {
            "title": "С каким предприятиям мы работаем?",
            "body": "Заказать у нас профессиональный такелаж любой сложности могут металлургические, сельскохозяйственные, перерабатывающие предприятия, пищевые и промышленные производства. А также любые компании, которым требуется перевезти или переместить медицинское, музыкальное, торговое оборудование и т. д."
        },
    ]
    // eof def values

    const title = props?.title || default_title
    const content = props?.content || default_content

    const [expandedId, setExpanded] = useState(0);
    const handleExpanded = (id) => {
        const newId = id === expandedId ? null: id 
        setExpanded(newId)
    }

    const titleBlock = (
        <TitleBig 
            title={title}
            size="small"
        />
    )
    const accordionBlock = (
        <div className="grid grid-cols-1 mt-5 gap-3">
            {content && content.map((item, index) => (
          <Accordion 
              expanded={expandedId === index}
              key={index}
              onChange={() => handleExpanded(index)}
              className="rounded-xl"
          >
            <AccordionSummary
              expandIcon={<Icon icon="bx:bx-chevron-down" width="30" className="text-white"/>}
              className="bg-primary rounded-xl"
            >
                <div className="font-semibold text-white tracking-wide">
                { item?.title }
                </div>
            </AccordionSummary>
            <AccordionDetails className="rounded-xl">
                { item?.body }
            </AccordionDetails>
          </Accordion>
            ))
            }
        </div>
    )
   return (
       <div className="mx-4 py-10">
            <div className="max-w-screen-lg mx-auto">
                { titleBlock }
                { accordionBlock }
            </div>
       </div>
   )
}

export default AccordionQA
