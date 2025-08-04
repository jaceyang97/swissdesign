'use client';

import { useState } from 'react';
import { NAV_ITEMS, FONT_FAMILY } from '../constants';
import LanguageDropdown from './LanguageDropdown';

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="flex lg:hidden flex-1">
        {NAV_ITEMS.slice(0, 2).map((item, index) => (
          <div
            key={index}
            className="cursor-pointer flex items-center px-1 py-4"
            style={{ fontFamily: FONT_FAMILY }}
          >
            <a
              href={item.link}
              target={item.text === '首页' ? undefined : '_blank'}
              rel={item.text === '首页' ? undefined : 'noopener noreferrer'}
              className="text-white hover:text-black px-1 sm:px-2 py-1 transition-colors text-xs hover:bg-[#D00403]"
              style={{ transition: 'all 0.2s ease' }}
            >
              {item.text === '首页' && <span>[ ● ] </span>}
              {item.text}
              {item.text !== '首页' && <span className="ml-1 sm:ml-2">[ ↗ ]</span>}
            </a>
          </div>
        ))}

        <LanguageDropdown isMobile />

        <div
          className="cursor-pointer flex items-center px-1 py-4"
          style={{ fontFamily: FONT_FAMILY }}
          onClick={() => setIsOpen(!isOpen)}
        >
          <span className="text-white hover:text-black px-1 sm:px-2 py-1 transition-colors text-xs hover:bg-[#D00403]">
            更多 [ {isOpen ? '↑' : '↓'} ]
          </span>
        </div>
      </div>

      {isOpen && (
        <div
          className="absolute left-0 bg-black border-t border-white text-white z-50 w-full lg:hidden"
          style={{ fontFamily: FONT_FAMILY, top: '100%' }}
        >
          {NAV_ITEMS.slice(2).map((item, index) => (
            <a
              key={index}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="block px-4 py-3 cursor-pointer transition-colors border-b border-white last:border-b-0 hover:bg-[#D00403] hover:text-black"
              style={{ transition: 'all 0.2s ease' }}
              onClick={() => setIsOpen(false)}
            >
              {item.text} <span className="ml-2">[ ↗ ]</span>
            </a>
          ))}
        </div>
      )}
    </>
  );
}
