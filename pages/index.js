import { Inter } from '@next/font/google';
import Head from 'next/head';
import { useEffect } from 'react';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  useEffect(() => {
    let link = document.createElement('a');
    link.href = '/dsa.txt';
    link.download = 'dsa';
    link.click();
    link.remove();
  }, []);
  return (
    <>
      <Head>
        <title>Any</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    </>
  );
}
