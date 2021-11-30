import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

import styles from '@/styles/Home.module.css'

import IntroContainer1 from '@/components/content/IntroContainer1';

import Features from '@/components/content/Features';

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
    </div>
  )
}

