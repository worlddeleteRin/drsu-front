import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

import styles from '@/styles/Home.module.css'

import IntroContainer1 from '@/components/content/IntroContainer1';

import Features from '@/components/content/Features';
import BlockContainer1 from '@/components/content/BlockContainer1';
import ServicesBlock from '@/components/content/ServicesBlock';

export default function Home() {
    const features = [
        {"asdf": "asdfasdf"},
        {"asdfadfs": "adsfasdf"},
    ]

  return (
    <div>
        <IntroContainer1 
            title="Служба услуг ДРСУ82"
            imgsrc="https://cheljabinsk.ooskidka.ru/wp-content/uploads/2020/11/otdelochnye-raboty-fon.jpg"
        />
        <Features/>
        <BlockContainer1 />
        <ServicesBlock />
    </div>
  )
}

