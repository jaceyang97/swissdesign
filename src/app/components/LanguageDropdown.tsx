'use client';

import { useState } from 'react';
import { SlArrowDown, SlArrowUp } from 'react-icons/sl';
import { LANGUAGES, BRAND_COLOR, FONT_FAMILY } from '../constants';

export default function LanguageDropdown({ isMobile = false }: { isMobile?: boolean }) {
  const [isOpen, setIsOpen] = useState(false);
  const [hoveredLanguage, setHoveredLanguage] = useState<string | null>(null);

  const displayLanguages = isMobile ? LANGUAGES.slice(0, 6) : LANGUAGES;
  const dropdownClasses = isMobile ? 'absolute right-0 min-w-32 text-xs' : 'absolute left-0 min-w-48 text-sm';

  const handleLanguageHover = (
    e: React.MouseEvent<HTMLElement>,
    language: string,
    isEnter: boolean
  ) => {
    const element = e.currentTarget as HTMLElement;
    if (isEnter) {
      element.style.color = BRAND_COLOR;
      element.style.borderBottomColor = BRAND_COLOR;
      if (language !== 'ENGLISH') {
        setHoveredLanguage(language);
      }
    } else {
      element.style.color = 'white';
      element.style.borderBottomColor = 'white';
      setHoveredLanguage(null);
    }
  };

  const handleLanguageClick = (language: string) => {
    if (language === 'ENGLISH') {
      window.open('http://www.csrc.gov.cn/csrc_en/index.shtml', '_blank');
    }
    setIsOpen(false);
  };

  return (
    <div className="relative">
      <div
        className={`cursor-pointer flex items-center px-1 ${isMobile ? '' : 'sm:px-2 lg:px-3'} py-4`}
        style={{ fontFamily: FONT_FAMILY }}
        onClick={() => setIsOpen(!isOpen)}
      >
        <span
          className={`text-white hover:text-black px-1 sm:px-2 py-1 transition-colors ${
            isMobile ? 'text-xs' : 'text-xs sm:text-sm'
          } flex items-center`}
          style={{ transition: 'all 0.2s ease' }}
          onMouseEnter={(e) => {
            (e.currentTarget as HTMLElement).style.backgroundColor = BRAND_COLOR;
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLElement).style.backgroundColor = 'transparent';
          }}
        >
          中文 [ {isOpen ? <SlArrowUp className="mx-1" /> : <SlArrowDown className="mx-1" />} ]
        </span>
      </div>

      {isOpen && (
        <div
          className={`${dropdownClasses} bg-black border-t border-white text-white z-50`}
          style={{ fontFamily: FONT_FAMILY, top: '100%' }}
        >
          {displayLanguages.map((language, index) => (
            <div
              key={index}
              className={`${isMobile ? 'px-3 py-2' : 'px-4 py-2'} cursor-pointer transition-colors border-b border-white last:border-b-0 relative`}
              style={{ transition: 'all 0.2s ease' }}
              onMouseEnter={(e) => handleLanguageHover(e, language, true)}
              onMouseLeave={(e) => handleLanguageHover(e, language, false)}
              onClick={() => handleLanguageClick(language)}
            >
              {language}
              {hoveredLanguage === language && language !== 'ENGLISH' && (
                <div
                  className="absolute left-full top-1/2 -translate-y-1/2 ml-2 bg-black text-white px-3 py-1 text-xs whitespace-nowrap border border-white"
                  style={{ fontFamily: FONT_FAMILY }}
                >
                  暂不支持此语言
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

