import { MainLayout } from '@/components/layout';
import Head from 'next/head';
import React from 'react';

interface AboutPageProps {}

export default function AboutPage(props: AboutPageProps) {
  return (
    <>
      <Head>
        <title>About Page</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="w-full h-screen flex items-center justify-center text-center">
        <h1 className='text-5xl font-bold'>About Page</h1>
      </div>
    </>
  );
}

AboutPage.Layout = MainLayout;