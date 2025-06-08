'use client';

import { FaWeixin } from 'react-icons/fa';
import { AiFillWeiboSquare, AiFillBilibili, AiFillTikTok, AiOutlineAlipayCircle } from 'react-icons/ai';
import { SlArrowDown, SlArrowUp } from 'react-icons/sl';
import { FaDoorOpen } from 'react-icons/fa6';
import { useState } from 'react';

// Constants
const NAV_ITEMS = ['首页', '机构概况', '新闻发布', '政务信息', '办事服务', '互动交流', '统计信息', '专题专栏'];
const LANGUAGES = [
  'ENGLISH', '繁體中文', 'PORTUGUÊS (BRASIL)', 'POLSKI', '한국어', '日本語',
  'ITALIANO', 'FRANÇAIS', 'ESPAÑOL (MÉXICO)', 'ESPAÑOL', 'DEUTSCH', 'РУССКИЙ'
];
const BRAND_COLOR = '#D00403';
const FONT_FAMILY = 'Helvetica, Arial, sans-serif';

// Reusable components
const NavItem = ({ 
  item, 
  isHome = false, 
  className = '', 
  textSize = 'text-xs sm:text-sm',
  showArrow = true,
  onClick
}: {
  item: string;
  isHome?: boolean;
  className?: string;
  textSize?: string;
  showArrow?: boolean;
  onClick?: () => void;
}) => {
  const handleMouseEnter = (e: React.MouseEvent<HTMLElement>) => {
    (e.target as HTMLElement).style.backgroundColor = BRAND_COLOR;
  };
  
  const handleMouseLeave = (e: React.MouseEvent<HTMLElement>) => {
    (e.target as HTMLElement).style.backgroundColor = 'transparent';
  };

  return (
    <div className={`cursor-pointer flex items-center ${className}`} style={{ fontFamily: FONT_FAMILY }} onClick={onClick}>
      <span 
        className={`text-white hover:text-black px-1 sm:px-2 py-1 transition-colors ${textSize}`}
        style={{ transition: 'all 0.2s ease' }}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {isHome && <span>[ ● ] </span>}
        {item}
        {!isHome && showArrow && <span className="ml-1 sm:ml-2">[ ↗ ]</span>}
      </span>
    </div>
  );
};

const LanguageDropdown = ({ 
  isOpen, 
  onToggle, 
  isMobile = false 
}: {
  isOpen: boolean;
  onToggle: () => void;
  isMobile?: boolean;
}) => {
  const handleLanguageHover = (e: React.MouseEvent<HTMLElement>, isEnter: boolean) => {
    const element = e.target as HTMLElement;
    if (isEnter) {
      element.style.color = BRAND_COLOR;
      element.style.borderBottomColor = BRAND_COLOR;
    } else {
      element.style.color = 'white';
      element.style.borderBottomColor = 'white';
    }
  };

  const displayLanguages = isMobile ? LANGUAGES.slice(0, 6) : LANGUAGES;
  const dropdownClasses = isMobile ? 'absolute right-0 min-w-32 text-xs' : 'absolute left-0 min-w-48 text-sm';

  return (
    <div className="relative">
      <div 
        className={`cursor-pointer flex items-center px-1 ${isMobile ? '' : 'sm:px-2 lg:px-3'} py-4`} 
        style={{ fontFamily: FONT_FAMILY }} 
        onClick={onToggle}
      >
        <span 
          className={`text-white hover:text-black px-1 sm:px-2 py-1 transition-colors ${isMobile ? 'text-xs' : 'text-xs sm:text-sm'} flex items-center`}
          style={{ transition: 'all 0.2s ease' }}
          onMouseEnter={(e) => {
            (e.target as HTMLElement).style.backgroundColor = BRAND_COLOR;
          }}
          onMouseLeave={(e) => {
            (e.target as HTMLElement).style.backgroundColor = 'transparent';
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
              className={`${isMobile ? 'px-3 py-2' : 'px-4 py-2'} cursor-pointer transition-colors border-b border-white last:border-b-0`}
              style={{ transition: 'all 0.2s ease' }}
              onMouseEnter={(e) => handleLanguageHover(e, true)}
              onMouseLeave={(e) => handleLanguageHover(e, false)}
              onClick={onToggle}
            >
              {language}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default function Home() {
  const [isLanguageDropdownOpen, setIsLanguageDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [showDisclaimer, setShowDisclaimer] = useState(true);

  const toggleLanguageDropdown = () => setIsLanguageDropdownOpen(!isLanguageDropdownOpen);
  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  const handleJoinUsHover = (e: React.MouseEvent<HTMLElement>, isEnter: boolean) => {
    const element = e.currentTarget as HTMLElement;
    if (isEnter) {
      element.style.backgroundColor = 'black';
      element.style.color = BRAND_COLOR;
      element.style.borderColor = BRAND_COLOR;
      element.style.borderWidth = '2px';
    } else {
      element.style.backgroundColor = BRAND_COLOR;
      element.style.color = 'black';
      element.style.borderColor = BRAND_COLOR;
      element.style.borderWidth = '3px';
    }
  };

  return (
    <div className="flex flex-col">
      {/* Disclaimer Banner */}
      {showDisclaimer && (
        <div className="fixed top-0 left-0 right-0 bg-black/95 text-white z-[100] p-4 border-b border-red-500">
          <div className="max-w-7xl mx-auto flex items-center justify-between">
            <div className="flex-1 text-sm sm:text-base">
              <p className="font-bold mb-1">免责声明</p>
              <p>本网站为个人设计作品展示，与中国证券监督管理委员会（以下简称"证监会"）无任何关联。本网站所展示的内容、设计元素及标识仅用于展示目的，不代表证监会的官方立场或观点。本网站不提供任何证券监管、投资建议或金融服务。未经本人授权，任何人不得使用本网站内容进行商业用途或误导公众。</p>
            </div>
            <button 
              onClick={() => setShowDisclaimer(false)}
              className="ml-4 px-4 py-2 text-sm border border-white hover:bg-white hover:text-black transition-colors"
            >
              关闭
            </button>
          </div>
        </div>
      )}

      {/* Navigation Bar */}
      <nav className="flex relative sticky top-0 z-50">
        {/* Red strip with logo */}
        <div className="w-12 sm:w-16 relative" style={{ backgroundColor: 'white' }}>
          <div className="absolute inset-0 flex items-center justify-center">
            <img 
              src="/csrc_logo.svg" 
              alt="CFA Logo" 
              className="w-6 h-6 sm:w-12 sm:h-12"
            />
          </div>
        </div>
        
        {/* Navigation items */}
        <div className="flex-1 flex" style={{ backgroundColor: 'black' }}>
          <div className="flex flex-1 border-b border-white relative">
            {/* Desktop Navigation */}
            <div className="hidden lg:flex flex-1">
              {NAV_ITEMS.map((item, index) => (
                <NavItem 
                  key={index}
                  item={item}
                  isHome={item === '首页'}
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
                  isHome={item === '首页'}
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
                item={`更多 [ ${isMobileMenuOpen ? '↑' : '↓'} ]`}
                className="px-1 py-4"
                textSize="text-xs"
                onClick={toggleMobileMenu}
              />
            </div>
            
            {/* Mobile Dropdown Menu */}
            {isMobileMenuOpen && (
              <div 
                className="absolute left-0 bg-black border-t border-white text-white z-50 w-full lg:hidden"
                style={{ fontFamily: FONT_FAMILY, top: '100%' }}
              >
                {NAV_ITEMS.slice(2).map((item, index) => (
                  <div
                    key={index}
                    className="px-4 py-3 cursor-pointer transition-colors border-b border-white last:border-b-0"
                    style={{ transition: 'all 0.2s ease' }}
                    onMouseEnter={(e) => {
                      const element = e.target as HTMLElement;
                      element.style.backgroundColor = BRAND_COLOR;
                      element.style.color = 'black';
                    }}
                    onMouseLeave={(e) => {
                      const element = e.target as HTMLElement;
                      element.style.backgroundColor = 'black';
                      element.style.color = 'white';
                    }}
                    onClick={toggleMobileMenu}
                  >
                    {item} <span className="ml-2">[ ↗ ]</span>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Join Us Button */}
          <div 
            className="px-3 sm:px-4 lg:px-6 cursor-pointer flex items-center justify-center text-xs sm:text-sm font-bold text-black transition-colors w-40 sm:w-48 lg:w-56"
            style={{ 
              fontFamily: FONT_FAMILY,
              backgroundColor: BRAND_COLOR,
              border: `3px solid ${BRAND_COLOR}`,
              alignSelf: 'stretch',
              transition: 'all 0.2s ease',
              boxSizing: 'border-box'
            }}
            onMouseEnter={(e) => handleJoinUsHover(e, true)}
            onMouseLeave={(e) => handleJoinUsHover(e, false)}
          >
            加入我们<span className="ml-2">[ ↗ ]</span>
          </div>
        </div>
      </nav>

      {/* Main content area */}
      <div className="video-main-page h-screen flex relative">
        {/* Background Video */}
        <video 
          className="absolute inset-0 w-full h-full object-cover z-0"
          autoPlay 
          muted 
          loop 
          playsInline
        >
          <source src="/frontpage_video.mp4" type="video/mp4" />
        </video>
        
        {/* Dark overlay */}
        <div className="absolute inset-0 w-full h-full bg-black/50 z-[1]"></div>
        
        {/* Red strip on the left */}
        <div className="w-8 sm:w-12 lg:w-16 relative flex flex-col items-center justify-end pb-12 sm:pb-16 lg:pb-24 z-10" style={{ backgroundColor: BRAND_COLOR }}>
          {/* Strip Left Image */}
          <img 
            src="/strip-left.svg" 
            alt="Strip Left" 
            className="w-auto h-auto px-2"
          />
        </div>
        
        {/* Main content area */}
        <div className="flex-1 flex items-end relative z-10">
          <div className="pb-12 sm:pb-16 lg:pb-24 pl-4 sm:pl-6 lg:pl-8 pr-4">
            <h2 
              className="text-sm sm:text-base lg:text-lg font-normal text-white mb-1 sm:mb-2 ml-1 sm:ml-2"
              style={{ fontFamily: '"Noto Sans", Arial, sans-serif' }}
            >
              CHINA SECURITIES REGULATORY COMMISSION
            </h2>
            <h1 
              className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-white relative"
              style={{ fontFamily: '"Noto Sans", Arial, sans-serif' }}
            >
              中国证券监督管理委员会
              <span 
                className="absolute -top-1 sm:-top-2 text-xs sm:text-sm lg:text-base"
                style={{ right: '-2px' }}
              >
                ©
              </span>
            </h1>
          </div>
        </div>
      </div>

      {/* Second Section - Industry News */}
      <div className="news bg-white" style={{ height: '115vh' }}>
        {/* 8-panel grid layout: 2 rows x 4 columns with custom row heights */}
        <div className="h-full grid grid-cols-4 gap-0" style={{ gridTemplateRows: '1fr 1.4fr' }}>
          {/* Combined first two panels for title (top-left, spans 2 columns) */}
          <div className="col-span-2 border-r border-b border-gray-300 pt-4 sm:pt-6 lg:pt-8 pl-4 sm:pl-6 lg:pl-8 pr-4 flex flex-col">
            {/* Subheader */}
            <p 
              className="text-xs sm:text-sm text-gray-600 mb-2 sm:mb-3 tracking-wider"
              style={{ fontFamily: '"Noto Sans", Arial, sans-serif' }}
            >
              要闻
            </p>
            
            {/* Main title */}
            <h2 
              className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-black mb-3 sm:mb-4"
              style={{ fontFamily: '"Noto Sans", Arial, sans-serif' }}
            >
              最新动态
            </h2>
            
            {/* Subtitle */}
            <p 
              className="text-sm sm:text-base text-gray-700 mb-6 sm:mb-8 leading-relaxed"
              style={{ fontFamily: '"Noto Sans", Arial, sans-serif' }}
            >
              紧跟时政要闻、证监会要闻和新闻发布会的最新资讯动态。
            </p>
            
            {/* Button */}
            <button 
              className="inline-flex items-center text-sm sm:text-base font-bold text-white hover:text-red-500 bg-black border-2 border-black px-4 sm:px-6 py-2 sm:py-3 transition-all duration-200 self-start"
              style={{ 
                fontFamily: '"Noto Sans", Arial, sans-serif',
                boxShadow: '0 0 0 0px rgba(239, 68, 68, 0)'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = '0 0 20px 8px rgba(239, 68, 68, 0.1)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = '0 0 0 0px rgba(239, 68, 68, 0)';
              }}
            >
              查看全部要闻
              <span className="ml-2">↗</span>
            </button>
          </div>
          
          {/* Top row - remaining 2 panels */}
          <div className="border-r border-b border-gray-300 p-4 bg-red-600 flex flex-col justify-between items-start">
            {/* Panel 3 header image */}
            <img 
              src="/sociallinks-headimage.svg" 
              alt="Social Links Header" 
              className="w-full h-auto mb-2"
            />
            
            {/* Panel 3 content - Social Media Links */}
            <div className="space-y-1">
              <div className="flex items-center space-x-3">
                <div className="flex items-center">
                  <span className="text-sm font-medium text-black" style={{ fontFamily: '"Noto Sans", Arial, sans-serif' }}>[ </span>
                  <FaWeixin className="w-3 h-3 text-black mx-1" />
                  <span className="text-sm font-medium text-black" style={{ fontFamily: '"Noto Sans", Arial, sans-serif' }}> ]</span>
                </div>
                <span className="text-sm font-medium text-black" style={{ fontFamily: '"Noto Sans", Arial, sans-serif' }}>微信</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="flex items-center">
                  <span className="text-sm font-medium text-black" style={{ fontFamily: '"Noto Sans", Arial, sans-serif' }}>[ </span>
                  <AiFillWeiboSquare className="w-3 h-3 text-black mx-1" />
                  <span className="text-sm font-medium text-black" style={{ fontFamily: '"Noto Sans", Arial, sans-serif' }}> ]</span>
                </div>
                <span className="text-sm font-medium text-black" style={{ fontFamily: '"Noto Sans", Arial, sans-serif' }}>微博</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="flex items-center">
                  <span className="text-sm font-medium text-black" style={{ fontFamily: '"Noto Sans", Arial, sans-serif' }}>[ </span>
                  <AiFillBilibili className="w-3 h-3 text-black mx-1" />
                  <span className="text-sm font-medium text-black" style={{ fontFamily: '"Noto Sans", Arial, sans-serif' }}> ]</span>
                </div>
                <span className="text-sm font-medium text-black" style={{ fontFamily: '"Noto Sans", Arial, sans-serif' }}>哔哩哔哩</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="flex items-center">
                  <span className="text-sm font-medium text-black" style={{ fontFamily: '"Noto Sans", Arial, sans-serif' }}>[ </span>
                  <AiFillTikTok className="w-3 h-3 text-black mx-1" />
                  <span className="text-sm font-medium text-black" style={{ fontFamily: '"Noto Sans", Arial, sans-serif' }}> ]</span>
                </div>
                <span className="text-sm font-medium text-black" style={{ fontFamily: '"Noto Sans", Arial, sans-serif' }}>抖音</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="flex items-center">
                  <span className="text-sm font-medium text-black" style={{ fontFamily: '"Noto Sans", Arial, sans-serif' }}>[ </span>
                  <AiOutlineAlipayCircle className="w-3 h-3 text-black mx-1" />
                  <span className="text-sm font-medium text-black" style={{ fontFamily: '"Noto Sans", Arial, sans-serif' }}> ]</span>
                </div>
                <span className="text-sm font-medium text-black" style={{ fontFamily: '"Noto Sans", Arial, sans-serif' }}>支付宝</span>
              </div>
            </div>
          </div>
          <div className="border-b border-gray-300 bg-black flex flex-col relative">
            {/* Panel 4 content */}
            {/* Top right corner text */}
            <div className="absolute top-3 right-4">
              <span 
                className="text-red-500 text-sm font-bold"
                style={{ fontFamily: '"Noto Sans", Arial, sans-serif' }}
              >
                直达服务
              </span>
            </div>
            
            {/* Header with icon and title */}
            <div className="flex items-center mb-4 pt-3 px-4">
              <div className="w-6 h-6 mr-3 flex items-center justify-center">
                <FaDoorOpen className="text-red-500 text-lg" />
              </div>
              <h3 
                className="text-red-500 text-sm font-bold"
                style={{ fontFamily: '"Noto Sans", Arial, sans-serif' }}
              >
                常用功能
              </h3>
            </div>
            
            {/* Description */}
            <p 
              className="text-white text-xs sm:text-sm leading-relaxed mb-4 flex-1 px-4"
              style={{ fontFamily: '"Noto Sans", Arial, sans-serif' }}
            >
              公开指南、公开年度报告、主动公开目录、依申请公开、网上办事服务平台、办事指南、公众留言、征求意见、举报专栏、信访专栏
            </p>
            
            {/* Quick entry button at exact bottom right corner */}
            <button 
              className="absolute bottom-0 right-0 bg-black text-red-500 border border-red-500 text-xs px-10 py-3 hover:bg-red-500 hover:text-black transition-colors flex items-center"
              style={{ fontFamily: '"Noto Sans", Arial, sans-serif' }}
            >
              快速入口 <span className="ml-2">↗</span>
            </button>
          </div>
          
          {/* Bottom row - 4 panels */}
                    <div className="border-r border-b border-gray-300 flex flex-col">
            {/* Panel 5 content */}
            {/* Building photo matching first row panel height */}
            <img 
              src="/panel5.png" 
              alt="Panel 5" 
              className="w-full object-cover"
              style={{ height: 'calc(100% / 1.4)' }}
            />
            
            {/* Content area with padding */}
            <div className="flex-1 flex flex-col relative p-4">
              <div>
                {/* Subheader */}
                <p 
                  className="text-sm sm:text-base text-gray-600 mb-2 leading-tight"
                  style={{ fontFamily: '"Noto Sans", Arial, sans-serif' }}
                >
                  &ldquo;中国经济持续展现强劲韧性&rdquo;
                </p>
                
                {/* Main title */}
                <h3 
                  className="text-base sm:text-lg md:text-xl font-bold text-black leading-tight"
                  style={{ fontFamily: '"Noto Sans", Arial, sans-serif' }}
                >
                  国际人士积极评价中国一系列政策举措提振经济发展信心。
                </h3>
              </div>
              
              {/* Black button in exact bottom right corner */}
              <button 
                className="absolute bottom-0 right-0 bg-black text-white text-sm px-10 py-3 hover:bg-gray-800 transition-colors flex items-center"
                style={{ fontFamily: '"Noto Sans", Arial, sans-serif' }}
              >
                查看更多 <span className="ml-2">↗</span>
              </button>
            </div>
          </div>
          <div className="border-r border-b border-gray-300 flex flex-col">
            {/* Panel 6 content */}
            {/* Pipes photo matching first row panel height */}
            <img 
              src="/panel6.png" 
              alt="Panel 6" 
              className="w-full object-cover"
              style={{ height: 'calc(100% / 1.4)' }}
            />
            
            {/* Content area with padding */}
            <div className="flex-1 flex flex-col relative p-4">
              <div>
                {/* Title (smaller text) */}
                <p 
                  className="text-sm sm:text-base text-gray-600 mb-2 leading-tight"
                  style={{ fontFamily: '"Noto Sans", Arial, sans-serif' }}
                >
                  关于完善中国特色现代企业制度的意见
                </p>
                
                {/* Subtitle (larger text) */}
                <h3 
                  className="text-base sm:text-lg md:text-xl font-bold text-black leading-tight"
                  style={{ fontFamily: '"Noto Sans", Arial, sans-serif' }}
                >
                  为贯彻落实党中央关于完善中国特色现代企业制度的战略部署，经党中央、国务院同意，现提出如下意见。
                </h3>
              </div>
              
                              {/* Black button in exact bottom right corner */}
                <button 
                  className="absolute bottom-0 right-0 bg-black text-white text-sm px-10 py-3 hover:bg-gray-800 transition-colors flex items-center"
                  style={{ fontFamily: '"Noto Sans", Arial, sans-serif' }}
                >
                  查看更多 <span className="ml-2">↗</span>
                </button>
              </div>
            </div>
            <div className="border-r border-gray-300 p-4">
            {/* Panel 7 content */}
          </div>
          <div className="border-b border-gray-300 flex flex-col">
            {/* Panel 8 content */}
            {/* Panel 8 photo matching first row panel height */}
            <img 
              src="/panel8.png" 
              alt="Panel 8" 
              className="w-full object-cover"
              style={{ height: 'calc(100% / 1.4)' }}
            />
            
            {/* Content area with padding */}
            <div className="flex-1 flex flex-col relative p-4">
              <div>
                {/* Title (smaller text) */}
                <p 
                  className="text-sm sm:text-base text-gray-600 mb-2 leading-tight"
                  style={{ fontFamily: '"Noto Sans", Arial, sans-serif' }}
                >
                  2024年4月12日新闻发布会
                </p>
                
                {/* Subtitle (larger text) */}
                <h3 
                  className="text-base sm:text-lg md:text-xl font-bold text-black leading-tight"
                  style={{ fontFamily: '"Noto Sans", Arial, sans-serif' }}
                >
                  加强监管、防范风险，推动资本市场高质量发展。
                </h3>
              </div>
              
              {/* Black button in exact bottom right corner */}
              <button 
                className="absolute bottom-0 right-0 bg-black text-white text-sm px-10 py-3 hover:bg-gray-800 transition-colors flex items-center"
                style={{ fontFamily: '"Noto Sans", Arial, sans-serif' }}
              >
                查看更多 <span className="ml-2">↗</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Section 3 - About CFA */}
      <div className="textblock w-full pt-24 pb-40 px-8">
        <div>
          <span 
            className="textblock__subtitle block text-lg sm:text-xl text-gray-600 mb-4"
            style={{ fontFamily: '"Noto Sans", Arial, sans-serif' }}
          >
            资本市场的制度守护者
          </span>
          <span 
            className="textblock__title block text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-black leading-[0.9]"
            style={{ fontFamily: '"Noto Sans", Arial, sans-serif' }}
          >
            推动中国资本市场行稳致远<br />构建公开、公平、公正的市场秩序
          </span>
        </div>
      </div>
      <div className="pitchblock w-full max-w-full aspect-[2/1] relative">
        <div className="pitchblock__text-box absolute top-0 left-0 w-1/2 h-full bg-white overflow-auto relative" style={{ boxSizing: 'border-box' }}>
          <div className="pitchblock__text-box_annotation p-4 max-w-[60%]">
            <p 
              className="text-base sm:text-lg leading-relaxed mb-4 text-gray-800"
              style={{ fontFamily: '"Noto Sans", Arial, sans-serif' }}
            >
              中国证券监督管理委员会是国务院直属正部级机构，全面负责我国证券、期货市场的统一监督管理。自成立以来，证监会始终坚持依法从严监管，围绕"建制度、不干预、零容忍"的监管主线，持续推进资本市场改革，完善发行上市、并购重组、信息披露、交易监管、退市制度等关键环节的制度建设。通过压实中介机构"看门人"责任、强化对违法违规行为的打击、加强对中小投资者的权益保护，证监会不断提升市场透明度与公信力，维护市场公平秩序，坚定市场信心。
            </p>
            <p 
              className="text-base sm:text-lg leading-relaxed text-gray-800"
              style={{ fontFamily: '"Noto Sans", Arial, sans-serif' }}
            >
              同时，证监会积极服务国家战略，推动科技创新企业融资，鼓励长期资金入市，完善多层次资本市场体系，提升资本市场对实体经济的支持能力。通过推进监管数字化转型，加强与境内外监管机构的协作，证监会致力于构建规范、透明、开放、有活力、有韧性的资本市场生态，助力中国经济高质量发展。
            </p>
          </div>
          <div className="pitchblock__text-box_item bg-black text-white pb-12 border border-white/20 w-[60%] absolute bottom-0 left-0">
            <h3 
              className="text-sm font-bold mb-2 px-6 pt-4"
              style={{ fontFamily: '"Noto Sans", Arial, sans-serif' }}
            >
              核心职能
            </h3>
            <h4 
              className="text-3xl font-semibold mb-3 px-6"
              style={{ fontFamily: '"Noto Sans", Arial, sans-serif' }}
            >
              中国证监会
            </h4>
            <p 
              className="text-sm leading-relaxed mb-4 px-6 text-gray-400"
              style={{ fontFamily: '"Noto Sans", Arial, sans-serif' }}
            >
              在这里，监管、法治与市场力量协同共进。中国证监会统筹发行审核、交易行为、信息披露与市场秩序，打击违法违规，压实"关键少数"责任，提升上市公司质量。通过持续制度创新与跨境协同，推动中国资本市场走向更加稳健、包容和国际化的未来。
            </p>
            <button 
              className="absolute bottom-0 right-0 bg-white text-black px-10 py-3 text-sm hover:bg-black hover:text-red-500 hover:border hover:border-red-500 transition-colors"
              style={{ fontFamily: '"Noto Sans", Arial, sans-serif' }}
            >
              进一步了解 ↗
            </button>
          </div>
        </div>
        <div className="pitchblock__image absolute top-0 right-0 w-1/2 h-full" style={{ backgroundImage: 'url(/section3_stage.png)', backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
      </div>

      {/* Fourth Section - Animated Block */}
      <div className="animatedblock w-full aspect-[2/1] bg-gray-200 relative">
        <img 
          src="/section4.png" 
          alt="Section 4" 
          className="w-full h-full object-cover"
        />
        <div className="animatedblock__text-box_item bg-black text-white pb-12 border border-white/20 w-1/4 h-1/3 absolute bottom-0 right-0">
          <h3 
            className="text-sm font-bold mb-2 px-6 pt-4"
            style={{ fontFamily: '"Noto Sans", Arial, sans-serif' }}
          >
            全品类监管覆盖
          </h3>
          <h4 
            className="text-3xl font-semibold mb-3 px-6"
            style={{ fontFamily: '"Noto Sans", Arial, sans-serif' }}
          >
            证监会统一监管商品与金融衍生品市场
          </h4>
          <p 
            className="text-sm leading-relaxed mb-4 px-6 text-gray-400"
            style={{ fontFamily: '"Noto Sans", Arial, sans-serif' }}
          >
            证监会依法对金属、能源、农产、金融等期货与期权市场实施全链条监管，保障市场规范运作，提升服务实体经济能力。通过完善品种上市制度与交易监管机制，推动衍生品市场稳健发展与功能发挥。
          </p>
          <button 
            className="absolute bottom-0 right-0 bg-white text-black px-10 py-3 text-sm hover:bg-black hover:text-red-500 hover:border hover:border-red-500 transition-colors"
            style={{ fontFamily: '"Noto Sans", Arial, sans-serif' }}
          >
            了解更多 ↗
          </button>
        </div>
      </div>

      {/* Fifth Section - Chart Block */}
      <div className="chartblock w-full aspect-[4/3] bg-stone-50 relative">
        <div className="grid grid-cols-4 grid-rows-3 h-full w-full">
          {/* Combined panels 1-2 */}
          <div className="col-span-2 flex flex-col items-start justify-start bg-black p-8">
            <span className="text-white text-sm font-bold mb-4">科技驱动 · 创新监管</span>
            <h2 className="text-6xl font-bold text-white mb-6 leading-tight">科技赋能监管，<br />教育护航投资未来</h2>
            <div className="w-3/4">
              <p className="text-gray-400 text-sm leading-relaxed mb-8">
                证监会依托大数据、AI、RPA等技术手段，不断升级科技监管能力，打造&ldquo;业务在线、合规在线、监管在线&rdquo;的监管新生态。同时深化投资者教育，建设全国投资者教育基地，开展互动式教学与风险提示，增强公众理性投资意识。
              </p>
            </div>
            <button className="bg-white text-black px-6 py-3 text-sm hover:bg-red-500 hover:text-white transition-colors flex items-center">
              了解科案例与教育基地 <span className="ml-2">↗</span>
            </button>
          </div>
          {/* Combined panels 3-4-7-8 */}
          <div className="col-span-2 row-span-2 flex items-center justify-center bg-black relative overflow-hidden">
            <img 
              src="/section5_3.png" 
              alt="Section 5 Image 3" 
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>
          {/* Panel 5 */}
          <div className="flex items-center justify-center bg-black relative overflow-hidden">
            <img 
              src="/section5_1.png" 
              alt="Section 5 Image 1" 
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>
          {/* Panel 6 */}
          <div className="flex items-center justify-center bg-black">
          </div>
          {/* Panel 9 */}
          <div className="flex items-center justify-center bg-black">
          </div>
          {/* Panel 10 */}
          <div className="flex items-center justify-center bg-black relative overflow-hidden">
            <img 
              src="/section5_2.png" 
              alt="Section 5 Image 2" 
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>
          {/* Panel 11 */}
          <div className="flex items-center justify-center bg-black">
          </div>
          {/* Panel 12 */}
          <div className="flex items-center justify-center bg-black">
          </div>
        </div>
      </div>

      {/* Footer Section */}
      <div className="footer w-full bg-black text-white">
        <div className="grid grid-cols-12" style={{ gridTemplateRows: '2fr 0.7fr 2fr 0.7fr 1fr', height: '36rem', width: '100%' }}>
          {/* 5 rows x 12 columns = 60 cells */}
          {Array.from({ length: 5 }).map((_, rowIdx) => (
            Array.from({ length: 12 }).map((_, colIdx) => {
              // Merge R3C1 to R5C3 into a single cell
              if (rowIdx === 2 && colIdx === 0) {
                return (
                  <div key={`r3c1-merged`} className="flex items-end justify-start row-span-3 col-span-3 bg-black h-full w-full">
                    <img src="/actual_logo.png" alt="CSRC Logo" className="h-24 w-auto object-contain bg-white" />
                  </div>
                );
              }
              // Skip rendering the rest of the merged region
              if (
                (rowIdx >= 2 && rowIdx <= 4) && (colIdx >= 0 && colIdx <= 2) && !(rowIdx === 2 && colIdx === 0)
              ) {
                return null;
              }

              // Merge R2C2 to R2C3 into a single cell
              if (rowIdx === 1 && colIdx === 1) {
                return (
                  <div key={`r2c2-merged`} className="flex items-center justify-start col-span-2 bg-black border border-red-500 pl-4">
                    <span className="text-red-500 text-lg font-medium">社交媒体</span>
                  </div>
                );
              }
              // Skip rendering R2C3
              if (rowIdx === 1 && colIdx === 2) {
                return null;
              }
              // R2C1 single cell, make border red and set text to (5), align left with padding
              if (rowIdx === 1 && colIdx === 0) {
                return (
                  <div key={`r2c1`} className="flex items-center justify-start bg-black border border-red-500 pl-4">
                    <span className="text-red-500 text-lg font-medium">(5)</span>
                  </div>
                );
              }

              let cellClass = 'flex items-center justify-center';
              if (rowIdx === 0 && colIdx < 6) {
                cellClass += ' border-t border-white'; // Add top border to first 6 cells in row 1
              } else if (rowIdx === 1 && colIdx === 0) {
                cellClass += ' border border-white'; // R2C1
              } else if (rowIdx === 1 && colIdx === 1) {
                cellClass += ' border-t border-b border-l border-white'; // R2C2
              } else if (rowIdx === 1 && colIdx === 2) {
                cellClass += ' border-t border-b border-r border-white'; // R2C3
              }

              // Borders for R3C4 to R4C6 block
              // Top row of block
              if (rowIdx === 2 && colIdx === 3) {
                cellClass += ' border-t border-l border-white'; // Top-left
              } else if (rowIdx === 2 && colIdx === 4) {
                cellClass += ' border-t border-white'; // Top-middle
              } else if (rowIdx === 2 && colIdx === 5) {
                cellClass += ' border-t border-r border-white'; // Top-right
              }
              // Bottom row of block
              if (rowIdx === 3 && colIdx === 3) {
                cellClass += ' border-b border-l border-white'; // Bottom-left
              } else if (rowIdx === 3 && colIdx === 4) {
                cellClass += ' border-b border-white'; // Bottom-middle
              } else if (rowIdx === 3 && colIdx === 5) {
                cellClass += ' border-b border-r border-white'; // Bottom-right
              }

              // Merge R1C7 to R2C9 into a single cell
              if (rowIdx === 0 && colIdx === 6) {
                return (
                  <div key={`r1c7-merged`} className="flex items-start justify-start row-span-2 col-span-3 bg-black border border-white h-full w-full p-4">
                    <span className="text-white text-base font-semibold leading-snug">
                    中国证监会致力于构建一个更加规范、透明、有韧性的资本市场。我们相信，健康的市场秩序源于严谨的监管，也来自每一位投资者对规则的信任。无论你是市场新手还是资深机构，清晰、可预期的制度环境，始终是我们努力的方向。
                    </span>
                  </div>
                );
              }
              // Skip rendering the rest of the merged region for R1C7 to R2C9
              if (
                (rowIdx === 0 && (colIdx === 7 || colIdx === 8)) ||
                (rowIdx === 1 && (colIdx >= 6 && colIdx <= 8))
              ) {
                return null;
              }

              // R5C4 single cell, remove top border and fill with CFA logo
              if (rowIdx === 4 && colIdx === 3) {
                return (
                  <div key={`r5c4`} className="flex items-center justify-center bg-black border-l border-b border-r border-white h-full w-full">
                    <img src="/csrc_logo.svg" alt="CFA Logo" className="h-18 w-auto" />
                  </div>
                );
              }

              // Merge R5C5 to R5C6 into a single cell, remove top border and fill with copyright text
              if (rowIdx === 4 && colIdx === 4) {
                return (
                  <div key={`r5c5-merged`} className="flex items-center justify-start col-span-2 bg-black border-l border-b border-r border-white h-full w-full pl-4">
                    <span className="text-white text-xs">© 2025 中国证券监督管理委员会</span>
                  </div>
                );
              }
              // Skip rendering R5C6
              if (rowIdx === 4 && colIdx === 5) {
                return null;
              }

              // R5C7 single cell, fill with badge.png, centered
              if (rowIdx === 4 && colIdx === 6) {
                return (
                  <div key={`r5c7`} className="flex items-center justify-center bg-black border border-white h-full w-full">
                    <img src="/badge.png" alt="badge" className="h-20 w-auto" />
                  </div>
                );
              }

              // Merge R5C8 to R5C12 into a single cell, fill with provided text, left-aligned with padding
              if (rowIdx === 4 && colIdx === 7) {
                return (
                  <div key={`r5c8-merged`} className="flex items-center justify-center col-span-5 bg-black border border-white h-full w-full pl-4">
                    <span className="text-white text-xs">京ICP备37182615号-1</span>
                    <img src="/beian.png" alt="beian" className="h-4 w-auto mx-2 inline-block align-middle" />
                    <span className="text-white text-xs">京公网安备 8921153702840 号</span>
                  </div>
                );
              }
              // Skip rendering R5C9, R5C10, R5C11, R5C12
              if (rowIdx === 4 && (colIdx >= 8 && colIdx <= 11)) {
                return null;
              }

              // Merge R3C10 to R3C12 into a single cell, fill with list and up-right arrow icon
              if (rowIdx === 2 && colIdx === 9) {
                return (
                  <div key={`r3c10-merged`} className="flex flex-col items-start justify-center col-span-3 bg-black border border-white h-full w-full p-2">
                    <ul className="grid grid-cols-2 gap-x-2 gap-y-2 w-full">
                      <li className="flex items-center text-white text-base font-medium group cursor-pointer">
                        <span className="group-hover:bg-red-500 group-hover:text-black transition-colors">[ <span className="mx-1">↗</span> ] <span className="ml-2">上海证券交易所</span></span>
                      </li>
                      <li className="flex items-center text-white text-base font-medium group cursor-pointer">
                        <span className="group-hover:bg-red-500 group-hover:text-black transition-colors">[ <span className="mx-1">↗</span> ] <span className="ml-2">深圳证券交易所</span></span>
                      </li>
                      <li className="flex items-center text-white text-base font-medium group cursor-pointer">
                        <span className="group-hover:bg-red-500 group-hover:text-black transition-colors">[ <span className="mx-1">↗</span> ] <span className="ml-2">北京证券交易所</span></span>
                      </li>
                      <li className="flex items-center text-white text-base font-medium group cursor-pointer">
                        <span className="group-hover:bg-red-500 group-hover:text-black transition-colors">[ <span className="mx-1">↗</span> ] <span className="ml-2">上海期货交易所</span></span>
                      </li>
                      <li className="flex items-center text-white text-base font-medium group cursor-pointer">
                        <span className="group-hover:bg-red-500 group-hover:text-black transition-colors">[ <span className="mx-1">↗</span> ] <span className="ml-2">郑州商品交易所</span></span>
                      </li>
                      <li className="flex items-center text-white text-base font-medium group cursor-pointer">
                        <span className="group-hover:bg-red-500 group-hover:text-black transition-colors">[ <span className="mx-1">↗</span> ] <span className="ml-2">大连商品交易所</span></span>
                      </li>
                      <li className="flex items-center text-white text-base font-medium group cursor-pointer">
                        <span className="group-hover:bg-red-500 group-hover:text-black transition-colors">[ <span className="mx-1">↗</span> ] <span className="ml-2">中国金融期货交易所</span></span>
                      </li>
                      <li className="flex items-center text-white text-base font-medium group cursor-pointer">
                        <span className="group-hover:bg-red-500 group-hover:text-black transition-colors">[ <span className="mx-1">↗</span> ] <span className="ml-2">广州期货交易所</span></span>
                      </li>
                    </ul>
                  </div>
                );
              }
              // Skip rendering R3C11 and R3C12
              if (rowIdx === 2 && (colIdx === 10 || colIdx === 11)) {
                return null;
              }

              // Merge R3C7 to R4C9 into a single cell, remove left border and add red strip pattern aligned to the right
              if (rowIdx === 2 && colIdx === 6) {
                return (
                  <div
                    key={`r3c7-merged`}
                    className="flex items-center justify-end row-span-2 col-span-3 bg-black border-t border-b border-r border-white h-full w-full relative"
                  >
                    <div
                      className="absolute right-0 top-0 h-full"
                      style={{
                        width: '33.3333%',
                        backgroundImage:
                          'repeating-linear-gradient(135deg, #ef4444 0 20px, #000 20px 40px)',
                        backgroundPosition: 'right',
                        backgroundRepeat: 'repeat',
                        backgroundSize: '60px 60px',
                      }}
                    />
                  </div>
                );
              }
              // Skip rendering the rest of the merged region for R3C7 to R4C9
              if (
                (rowIdx === 2 && (colIdx === 7 || colIdx === 8)) ||
                (rowIdx === 3 && (colIdx >= 6 && colIdx <= 8))
              ) {
                return null;
              }

              // Merge R1C10 to R2C12 into a single cell
              if (rowIdx === 0 && colIdx === 9) {
                return (
                  <div key={`r1c10-merged`} className="flex items-center justify-center row-span-2 col-span-3 bg-black border border-white">
                  </div>
                );
              }
              // Skip rendering the rest of the merged region for R1C10 to R2C12
              if (
                (rowIdx === 0 && (colIdx === 10 || colIdx === 11)) ||
                (rowIdx === 1 && (colIdx >= 9 && colIdx <= 11))
              ) {
                return null;
              }

              // Merge R3C4 to R4C6 into a single cell
              if (rowIdx === 2 && colIdx === 3) {
                return (
                  <div key={`r3c4-merged`} className="flex flex-col items-start justify-center row-span-2 col-span-3 bg-black border border-red-500 p-2">
                    <ul className="space-y-3">
                      <li className="flex items-center text-red-500 text-lg font-medium">
                        <span className="mr-2">[</span>
                        <FaWeixin className="inline-block" />
                        <span className="ml-1 mr-2">]</span>
                        <span>微信</span>
                      </li>
                      <li className="flex items-center text-red-500 text-lg font-medium">
                        <span className="mr-2">[</span>
                        <AiFillWeiboSquare className="inline-block" />
                        <span className="ml-1 mr-2">]</span>
                        <span>微博</span>
                      </li>
                      <li className="flex items-center text-red-500 text-lg font-medium">
                        <span className="mr-2">[</span>
                        <AiFillBilibili className="inline-block" />
                        <span className="ml-1 mr-2">]</span>
                        <span>哔哩哔哩</span>
                      </li>
                      <li className="flex items-center text-red-500 text-lg font-medium">
                        <span className="mr-2">[</span>
                        <AiFillTikTok className="inline-block" />
                        <span className="ml-1 mr-2">]</span>
                        <span>抖音</span>
                      </li>
                      <li className="flex items-center text-red-500 text-lg font-medium">
                        <span className="mr-2">[</span>
                        <AiOutlineAlipayCircle className="inline-block" />
                        <span className="ml-1 mr-2">]</span>
                        <span>支付宝</span>
                      </li>
                    </ul>
                  </div>
                );
              }
              // Skip rendering the rest of the merged region for R3C4 to R4C6
              if (
                (rowIdx === 2 && (colIdx === 4 || colIdx === 5)) ||
                (rowIdx === 3 && (colIdx >= 3 && colIdx <= 5))
              ) {
                return null;
              }

              // R1C1 to R1C6 cells with top border
              if (rowIdx === 0 && colIdx < 6) {
                return (
                  <div key={`r${rowIdx + 1}c${colIdx + 1}`} className="flex items-center justify-center bg-black border-t border-white">
                  </div>
                );
              }

              return (
                <div key={`r${rowIdx + 1}c${colIdx + 1}`} className={cellClass}>
                </div>
              );
            })
          ))}
        </div>
      </div>
      <div className="pb-4 bg-black"></div>
    </div>
  );
}