import Head from 'next/head';
import Link from 'next/link';

import styles from '@/styles/Home.module.css'

import IntroContainer1 from '@/components/content/IntroContainer1';

import Features from '@/components/content/Features';
import BlockContainer1 from '@/components/content/BlockContainer1';
import ServicesBlock from '@/components/content/ServicesBlock';
import TabsContainer from '@/components/content/TabsContainer';
import SocialsBlock from '@/components/content/SocialsBlock';


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
        <Features/>
        <BlockContainer1 />
        <ServicesBlock />
        <TabsContainer />
        <SocialsBlock />
    </div>
  )
}

