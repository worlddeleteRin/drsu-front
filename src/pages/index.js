import Link from 'next/link';

import styles from '@/styles/Home.module.css'

import IntroContainer1 from '@/components/content/IntroContainer1';

import Features from '@/components/content/Features';
import BlockContainer1 from '@/components/content/BlockContainer1';
import ServicesBlock from '@/components/content/ServicesBlock';
import TabsContainer from '@/components/content/TabsContainer';
import SocialsBlock from '@/components/content/SocialsBlock';
import AccordionQA from '@/components/content/AccordionQA';
import WorkWithUs from '@/components/content/WorkWithUs';
import CallActionContainer from '@/components/content/CallActionContainer';
import ThanksBlock from '@/components/content/ThanksBlock';


export default function Home() {
    const intro_title = "Региональное строительное управление \"ДРСУ - 82\""
  return (
    <div>
        <IntroContainer1 
            title={intro_title}
        />
        <CallActionContainer />
        <Features/>
        <BlockContainer1 />
        <ServicesBlock />
        <TabsContainer />
        <SocialsBlock />
        <WorkWithUs />
        <ThanksBlock />
        <AccordionQA />
    </div>
  )
}

