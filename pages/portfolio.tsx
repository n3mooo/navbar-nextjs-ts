import { MainLayout } from '@/components/layout';
import Head from 'next/head';
import React from 'react';

interface PortfolioProps {}

export default function Portfolio(props: PortfolioProps) {
  return (
    <>
      <Head>
        <title>Portfolio Page</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="w-full h-screen flex items-center justify-center text-center">
        <h1 className="text-5xl font-bold">Portfolio Page</h1>
      </div>
    </>
  );
}

Portfolio.Layout = MainLayout;