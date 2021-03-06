import React from 'react';

// components below
import TestComponent from '@/components/TestComponent';
import BlockContainer1 from '@/components/content/BlockContainer1';
import Features from '@/components/content/Features';
import IntroContainer1 from '@/components/content/IntroContainer1';
import ServicesBlock from '@/components/content/ServicesBlock';
import TabsContainer from '@/components/content/TabsContainer';
import CallActionContainer from '@/components/content/CallActionContainer';
import SocialsBlock from '@/components/content/SocialsBlock';
import WorkWithUs from '@/components/content/WorkWithUs';
import AccordionQA from '@/components/content/AccordionQA';

const Components = {
    'TestComponent': TestComponent,
    'BlockContainer1': BlockContainer1,
    'Features': Features,
    'IntroContainer1': IntroContainer1,
    'ServicesBlock': ServicesBlock,
    'TabsContainer': TabsContainer,
    'CallActionContainer': CallActionContainer,
    'SocialsBlock': SocialsBlock,
    'WorkWithUs': WorkWithUs,
    'AccordionQA': AccordionQA,
}

const getComponent = (component) => {
    if(typeof Components[component?.name] !== "undefined") {
        return React.createElement(
            Components[component?.name],
            {
                key: component?.id,
                ...component.props
            }
        )
    }
    return undefined
}

export default getComponent
