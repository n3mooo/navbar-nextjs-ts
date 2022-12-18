import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

export default function Brand() {
  return (
    <Link href={'/'} className="relative w-[100px] lg:w-[110px]">
      <h1 className="text-2xl font-bold">Brand</h1>
    </Link>
  );
}
