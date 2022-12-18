import { LayoutProps } from '@/models';
import React from 'react';
import Header from '../common/Header';

export function MainLayout({ children }: LayoutProps) {
  return (
    <>
      <Header />
      <div>{children}</div>
    </>
  );
}
