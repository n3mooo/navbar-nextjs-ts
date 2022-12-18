import { MainLayout } from '@/components/layout';
import Head from 'next/head';
import React from 'react';

interface ServicePageProps {}

export default function ServicePage(props: ServicePageProps) {
  return (
    <>
      <Head>
        <title>Service Page</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="w-full h-screen flex items-center justify-center text-center">
        <h1 className="text-5xl font-bold">Service Page</h1>
      </div>
    </>
  );
}

ServicePage.Layout = MainLayout;