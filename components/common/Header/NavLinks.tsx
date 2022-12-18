import {
  ChevronDownIcon,
  ChevronUpIcon,
  MinusSmallIcon,
  PlusSmallIcon,
} from '@heroicons/react/24/outline';
import Link from 'next/link';
import React, { useState } from 'react';

interface Props {
  header: {
    menu: {
      name: string;
      submenu: boolean;
      sublinks: {
        url: string;
        subName: string;
        content: string;
      }[];
      url: string;
    }[];
    logo: string;
    btnContent: string;
    url: string;
  };
}

export default function NavLinks({ header }: Props) {
  const [heading, setHeading] = useState('');
  const [subHeading, setSubHeading] = useState('');

  return (
    <>
      {header.menu.map((menu, index) => {
        if (!menu.submenu) {
          return (
            <li key={index}>
              <Link
                href={menu.url}
                className="pt-8 pb-4 md:py-4 inline-block text-[#00172e] hover:text-[#27a9e1]"
              >
                {menu.name}
              </Link>
            </li>
          );
        }
        return (
          <div key={index}>
            <div className="text-left lg:cursor-pointer group">
              <div className="relative">
                <h1
                  className="pt-8 pb-4 md:py-4 flex justify-between items-center group text-[#00172e] hover:text-[#27a9e1]"
                  onClick={() => {
                    heading !== menu.name ? setHeading(menu.name) : setHeading('');
                    setSubHeading('');
                  }}
                >
                  {menu.name}
                  <span className="text-xl lg:hidden inline">
                    {heading === menu.name ? (
                      <ChevronUpIcon className="block h-5 w-5" aria-hidden="true" />
                    ) : (
                      <ChevronDownIcon className="block h-5 w-5" aria-hidden="true" />
                    )}
                  </span>
                  <span className="text-xl lg:mt-0.5 lg:ml-1 lg:block hidden group-hover:rotate-180 duration-200">
                    <ChevronDownIcon className="block h-5 w-5" aria-hidden="true" />
                  </span>
                </h1>
                <div
                  className={`absolute z-20 top-100% w-full h-0.5 mt-1 bg-[#00172e] transition-all hidden group-hover:lg:block hover:lg:block`}
                ></div>
              </div>

              {menu.submenu && (
                <div className="absolute z-[11] hidden group-hover:lg:block hover:lg:block w-full left-0 bg-white shadow-custom">
                  <div className="container py-6 grid grid-cols-3 gap-10">
                    {menu.sublinks.map((item, index) => (
                      <div key={index}>
                        <Link href={item.url} className="text-[#00172e] hover:text-[#27a9e1]">
                          {item.subName}
                        </Link>
                        <p className="text-sm text-gray-600 my-2 cursor-default">{item.content}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Mobile menus */}
            <div className={`${heading === menu.name ? 'lg:hidden' : 'hidden'}`}>
              {menu.sublinks.map((item, index) => (
                <div key={index}>
                  <div className="flex justify-between items-center gap-4">
                    <Link href={'#'} className="pt-6 pb-2 pl-5 font-normal w-[90%]">
                      {item.subName}
                    </Link>
                    <span className="text-xl lg:mt-1 lg:ml-2 inline">
                      {subHeading === item.subName ? (
                        <MinusSmallIcon
                          className="block h-5 w-5"
                          aria-hidden="true"
                          onClick={() =>
                            subHeading !== item.subName
                              ? setSubHeading(item.subName)
                              : setSubHeading('')
                          }
                        />
                      ) : (
                        <PlusSmallIcon
                          className="block h-5 w-5"
                          aria-hidden="true"
                          onClick={() =>
                            subHeading !== item.subName
                              ? setSubHeading(item.subName)
                              : setSubHeading('')
                          }
                        />
                      )}
                    </span>
                  </div>

                  <div className={`${subHeading === item.subName ? 'lg:hidden' : 'hidden'}`}>
                    <p
                      key={index}
                      className="text-sm text-gray-600 py-0 px-5 font-light tracking-normal"
                    >
                      {item.content}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );
      })}
    </>
  );
}
