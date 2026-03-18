'use client';

import { useState } from 'react';
import Image from 'next/image';
import { ArrowDownIcon, ArrowUpIcon } from './icons';

const NAV_ITEMS = [
  { text: '首页', link: 'http://www.csrc.gov.cn/csrc/index.shtml' },
  { text: '机构概况', link: 'http://www.csrc.gov.cn/csrc/jggk/index.shtml' },
  { text: '新闻发布', link: 'http://www.csrc.gov.cn/csrc/xwfb/index.shtml' },
  { text: '政务信息', link: 'http://www.csrc.gov.cn/csrc/zwxx/index.shtml' },
  { text: '办事服务', link: 'http://www.csrc.gov.cn/csrc/bsfw/index.shtml' },
  { text: '互动交流', link: 'http://www.csrc.gov.cn/csrc/hdjl/index.shtml' },
  { text: '统计信息', link: 'http://www.csrc.gov.cn/csrc/tjsj/index.shtml' },
  { text: '专题专栏', link: 'http://www.csrc.gov.cn/csrc/ztzl/index.shtml' }
];

const LANGUAGES = [
  'ENGLISH', '繁體中文', 'PORTUGUÊS (BRASIL)', 'POLSKI', '한국어', '日本語',
  'ITALIANO', 'FRANÇAIS', 'ESPAÑOL (MÉXICO)', 'ESPAÑOL', 'DEUTSCH', 'РУССКИЙ'
];

function NavItem({
  item,
  isHome = false,
  className = '',
  textSize = 'text-xs sm:text-sm',
  showArrow = true,
  onClick
}: {
  item: { text: string; link: string };
  isHome?: boolean;
  className?: string;
  textSize?: string;
  showArrow?: boolean;
  onClick?: () => void;
}) {
  return (
    <div className={`cursor-pointer flex items-center ${className}`} onClick={onClick}>
      <a
        href={item.link}
        target={isHome ? undefined : "_blank"}
        rel={isHome ? undefined : "noopener noreferrer"}
        className={`text-white hover:text-black hover:bg-[#D00403] px-1 sm:px-2 py-1 transition-colors duration-200 ${textSize}`}
      >
        {isHome && <span>[ ● ] </span>}
        {item.text}
        {!isHome && showArrow && <span className="ml-1 sm:ml-2">[ ↗ ]</span>}
      </a>
    </div>
  );
}

function LanguageDropdown({
  isOpen,
  onToggle,
  isMobile = false
}: {
  isOpen: boolean;
  onToggle: () => void;
  isMobile?: boolean;
}) {
  const displayLanguages = isMobile ? LANGUAGES.slice(0, 6) : LANGUAGES;
  const dropdownClasses = isMobile ? 'absolute right-0 min-w-32 text-xs' : 'absolute left-0 min-w-48 text-sm';

  const handleLanguageClick = (language: string) => {
    if (language === 'ENGLISH') {
      window.open('http://www.csrc.gov.cn/csrc_en/index.shtml', '_blank');
    }
    onToggle();
  };

  return (
    <div className="relative">
      <div
        className={`cursor-pointer flex items-center px-1 ${isMobile ? '' : 'sm:px-2 lg:px-3'} py-4`}
        onClick={onToggle}
      >
        <span
          className={`text-white hover:text-black hover:bg-[#D00403] px-1 sm:px-2 py-1 transition-colors duration-200 ${isMobile ? 'text-xs' : 'text-xs sm:text-sm'} flex items-center`}
        >
          中文 [ {isOpen ? <ArrowUpIcon className="mx-1 w-[1em] h-[1em]" /> : <ArrowDownIcon className="mx-1 w-[1em] h-[1em]" />} ]
        </span>
      </div>

      {isOpen && (
        <div
          className={`${dropdownClasses} bg-black border-t border-white text-white z-50`}
          style={{ top: '100%' }}
        >
          {displayLanguages.map((language, index) => (
            <div
              key={index}
              className={`${isMobile ? 'px-3 py-2' : 'px-4 py-2'} cursor-pointer transition-colors duration-200 border-b border-white last:border-b-0 relative group hover:text-[#D00403] hover:border-b-[#D00403]`}
              onClick={() => handleLanguageClick(language)}
            >
              {language}
              {language !== 'ENGLISH' && (
                <div className="absolute left-full top-1/2 -translate-y-1/2 ml-2 opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto transition-opacity duration-150 ease-out">
                  <div className="bg-black text-white text-xs px-3 py-1 border border-white whitespace-nowrap">
                    暂不支持此语言
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default function NavBar() {
  const [isLanguageDropdownOpen, setIsLanguageDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleLanguageDropdown = () => setIsLanguageDropdownOpen(!isLanguageDropdownOpen);
  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  return (
    <nav className="flex relative sticky top-0 z-50">
      {/* Red strip with logo */}
      <div className="w-12 sm:w-16 relative bg-white">
        <div className="absolute inset-0 flex items-center justify-center">
          <Image
            src="/csrc_logo.svg"
            alt="CFA Logo"
            width={48}
            height={48}
            priority
            className="w-6 h-6 sm:w-12 sm:h-12"
          />
        </div>
      </div>

      {/* Navigation items */}
      <div className="flex-1 flex bg-black">
        <div className="flex flex-1 border-b border-white relative">
          {/* Desktop Navigation */}
          <div className="hidden lg:flex flex-1">
            {NAV_ITEMS.map((item, index) => (
              <NavItem
                key={index}
                item={item}
                isHome={item.text === '首页'}
                className="px-1 sm:px-2 lg:px-3 py-4"
              />
            ))}
            <LanguageDropdown
              isOpen={isLanguageDropdownOpen}
              onToggle={toggleLanguageDropdown}
            />
          </div>

          {/* Mobile Navigation */}
          <div className="flex lg:hidden flex-1">
            {NAV_ITEMS.slice(0, 2).map((item, index) => (
              <NavItem
                key={index}
                item={item}
                isHome={item.text === '首页'}
                className="px-1 py-4"
                textSize="text-xs"
              />
            ))}

            <LanguageDropdown
              isOpen={isLanguageDropdownOpen}
              onToggle={toggleLanguageDropdown}
              isMobile={true}
            />

            <NavItem
              item={{ text: `更多 [ ${isMobileMenuOpen ? '↑' : '↓'} ]`, link: '#' }}
              className="px-1 py-4"
              textSize="text-xs"
              onClick={toggleMobileMenu}
            />
          </div>

          {/* Mobile Dropdown Menu */}
          {isMobileMenuOpen && (
            <div
              className="absolute left-0 bg-black border-t border-white text-white z-50 w-full lg:hidden"
              style={{ top: '100%' }}
            >
              {NAV_ITEMS.slice(2).map((item, index) => (
                <a
                  key={index}
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block px-4 py-3 min-h-[44px] cursor-pointer transition-colors duration-200 border-b border-white last:border-b-0 hover:bg-[#D00403] hover:text-black"
                  onClick={toggleMobileMenu}
                >
                  {item.text} <span className="ml-2">[ ↗ ]</span>
                </a>
              ))}
            </div>
          )}
        </div>

        {/* Join Us Button */}
        <div
          className="px-3 sm:px-4 lg:px-6 cursor-pointer flex items-center justify-center text-xs sm:text-sm font-bold text-black transition-[color,background-color,border-width] duration-200 w-40 sm:w-48 lg:w-56 bg-[#D00403] border-[#D00403] border-[3px] self-stretch hover:bg-black hover:text-[#D00403] hover:border-[2px]"
          onClick={() => window.open('http://www.csrc.gov.cn/csrc/index.shtml', '_blank')}
        >
          转入官网<span className="ml-2">[ ↗ ]</span>
        </div>
      </div>
    </nav>
  );
}
