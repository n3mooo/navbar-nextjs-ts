import Link from 'next/link';
import React from 'react';

interface Props {
  header: {
    btnContent: string;
    url: string;
  };
}

export default function Button({ header }: Props) {
  return (
    <Link
      href={header.url}
      className="w-[110px] inline-block text-center rounded bg-[#00172e] mt-8 lg:mt-0 py-2 lg:py-2 text-base md:text-sm lg:text-base font-medium leading-5 text-white shadow-sm ring-1 ring-[#00172e] hover:text-[#00172e] hover:bg-white hover:ring-[#00172e]"
    >
      {header.btnContent}
    </Link>
  );
}
