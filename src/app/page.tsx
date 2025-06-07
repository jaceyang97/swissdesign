'use client';

import { FaWeixin } from 'react-icons/fa';
import { AiFillWeiboSquare, AiFillBilibili, AiFillTikTok, AiOutlineAlipayCircle } from 'react-icons/ai';
import { SlArrowDown, SlArrowUp } from 'react-icons/sl';
import { FaDoorOpen } from 'react-icons/fa6';
import { useState } from 'react';

// Constants
const NAV_ITEMS = ['首页', '政策法规', '业务办理', '服务支持', '信息公示', '行业动态', '关于协会'];
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
      {/* Navigation Bar */}
      <nav className="flex relative sticky top-0 z-50">
        {/* Red strip with logo */}
        <div className="w-12 sm:w-16 relative" style={{ backgroundColor: BRAND_COLOR }}>
          <div className="absolute inset-0 flex items-center justify-center">
            <img 
              src="/cfa_logo_black.svg" 
              alt="CFA Logo" 
              className="w-6 h-6 sm:w-10 sm:h-10"
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
      <div className="h-screen flex relative">
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
              CHINA FUTURES ASSOCIATION
            </h2>
            <h1 
              className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-white relative"
              style={{ fontFamily: '"Noto Sans", Arial, sans-serif' }}
            >
              中国期货业协会
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
      <div className="bg-white" style={{ height: '115vh' }}>
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
              紧跟协会公告、行业要闻和媒体看期市的最新资讯动态。
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
              登记备案、信息报送、信息公示、资格考试、培训学苑、适当性测试、上市品种、投资者园地、重要会议、乡村振兴、研究管理系统
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
                  &ldquo;中期协联合研究计划（第十八期）&rdquo; 启动公告
                </p>
                
                {/* Main title */}
                <h3 
                  className="text-base sm:text-lg md:text-xl font-bold text-black leading-tight"
                  style={{ fontFamily: '"Noto Sans", Arial, sans-serif' }}
                >
                  本期聚焦衍生品市场监管强化、服务实体经济路径研究与市场机制创新支持。
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
                  关于健全资源环境要素市场化配置体系的意见
                </p>
                
                {/* Subtitle (larger text) */}
                <h3 
                  className="text-base sm:text-lg md:text-xl font-bold text-black leading-tight"
                  style={{ fontFamily: '"Noto Sans", Arial, sans-serif' }}
                >
                  明确碳、水、污三权交易路径，完善要素市场制度，推动资源配置精细化、市场化。
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
                  衍生品工具箱不断丰富 期市服务实体经济能力再升级
                </p>
                
                {/* Subtitle (larger text) */}
                <h3 
                  className="text-base sm:text-lg md:text-xl font-bold text-black leading-tight"
                  style={{ fontFamily: '"Noto Sans", Arial, sans-serif' }}
                >
                  衍生品工具新增铸造铝合金、纯苯、丙烯，增强期市服务能力与产业协同深度。
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

      {/* Third Section - About CFA */}
      <div className="bg-white relative pl-2 sm:pl-4 lg:pl-6 pr-8 sm:pr-12 lg:pr-16 py-8 sm:py-12 lg:py-16" style={{ height: '140vh' }}>
        {/* Main content in top left */}
        <div className="w-full">
          {/* Subtitle */}
          <p 
            className="text-lg sm:text-xl text-gray-600 mb-4"
            style={{ fontFamily: '"Noto Sans", Arial, sans-serif' }}
          >
            市场的秩序引擎
          </p>
          
          {/* Main title - spanning 2 rows */}
          <h1 
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-black mb-16 leading-[0.9]"
            style={{ fontFamily: '"Noto Sans", Arial, sans-serif' }}
          >
            驱动中国期货生态的中枢系统<br />构建稳健与创新并行的市场结构
          </h1>
          
          {/* Description without box */}
          <div className="max-w-lg mt-32">
            <p 
              className="text-base sm:text-lg leading-relaxed mb-4 text-gray-800"
              style={{ fontFamily: '"Noto Sans", Arial, sans-serif' }}
            >
              中国期货业协会致力于构建一个公开、公平、公正的期货市场环境。我们联合行业成员制定规则、强化自律监管、推动产品创新、提升服务实体经济的能力——这一切，都为中国期货市场的稳健发展保驾护航。
            </p>
            <p 
              className="text-base sm:text-lg leading-relaxed text-gray-800"
              style={{ fontFamily: '"Noto Sans", Arial, sans-serif' }}
            >
              我们不仅是规则的制定者，更是行业发展的合作者，致力于打造具备国际竞争力的期货生态系统。
            </p>
          </div>
        </div>

        {/* Placeholder square background */}
        <div className="absolute right-0 bottom-0 w-[820px] h-[820px]" style={{ backgroundImage: 'url(/section3_stage.png)', backgroundSize: 'cover', backgroundPosition: 'center' }}></div>

        {/* Black box in exact bottom left corner of section */}
        <div className="absolute bg-black text-white max-w-lg pb-12 border border-white/20" style={{ bottom: 0, left: 0 }}>
          <h3 
            className="text-sm font-bold mb-2 px-6 pt-4"
            style={{ fontFamily: '"Noto Sans", Arial, sans-serif' }}
          >
            行业舞台
          </h3>
          <h4 
            className="text-3xl font-semibold mb-3 px-6"
            style={{ fontFamily: '"Noto Sans", Arial, sans-serif' }}
          >
            中国期货市场
          </h4>
          <p 
            className="text-sm leading-relaxed mb-4 px-6 text-gray-400"
            style={{ fontFamily: '"Noto Sans", Arial, sans-serif' }}
          >
            在这里，监管、技术与市场力量交织共生。中国期货业协会聚合券商、交易所、投资机构等多方资源，推动风险管理工具的多样化，服务实体经济的发展新路径。规范与发展并举，信任与创新同行——这是我们共同参与和塑造的市场未来。
          </p>
          <button 
            className="absolute bottom-0 right-0 bg-white text-black px-10 py-3 text-sm hover:bg-black hover:text-red-500 hover:border hover:border-red-500 transition-colors"
            style={{ fontFamily: '"Noto Sans", Arial, sans-serif' }}
          >
            进一步了解 ↗
          </button>
        </div>
      </div>

      {/* Fourth Section - Placeholder */}
      <div className="h-screen bg-gray-50 relative flex items-center justify-center">
        <h2 
          className="text-4xl font-bold text-gray-400"
          style={{ fontFamily: '"Noto Sans", Arial, sans-serif' }}
        >
          Section 4 - Placeholder
        </h2>
      </div>

      {/* Fifth Section - Placeholder */}
      <div className="h-screen bg-stone-50 relative flex items-center justify-center">
        <h2 
          className="text-4xl font-bold text-gray-400"
          style={{ fontFamily: '"Noto Sans", Arial, sans-serif' }}
        >
          Section 5 - Placeholder
        </h2>
      </div>
    </div>
  );
}
