import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

import styles from '@/styles/Home.module.css'

export default function Home() {
  return (
    <>
    <div>
        site is here
    </div>
    <div>
        <Link href={{
                pathname: "services/uborka",
            }}
            >
            go to service page
        </Link>
    </div>
    </>
  )
}

      /*
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      */
