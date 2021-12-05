import Head from 'next/head';
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


export default function Home() {
    const features = [
        {"asdf": "asdfasdf"},
        {"asdfadfs": "adsfasdf"},
    ]

  return (
    <div>
        <IntroContainer1 
            title="Служба услуг ДРСУ82"
        />
        <CallActionContainer />
        <Features/>
        <BlockContainer1 />
        <ServicesBlock />
        <TabsContainer />
        <SocialsBlock />
        <WorkWithUs />
        <AccordionQA />
    </div>
  )
}

