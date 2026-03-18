import Image from 'next/image';
import { WeixinIcon, WeiboIcon, BilibiliIcon, TikTokIcon, AlipayIcon, DoorOpenIcon } from './icons';

function SocialLink({ icon: Icon, name, href }: { icon: React.ComponentType<React.SVGProps<SVGSVGElement>>; name: string; href?: string }) {
  const content = (
    <div className="flex items-center group-hover:bg-black group-hover:text-[#D00403] px-1 py-2 transition-colors">
      <span className="text-sm font-medium text-black group-hover:text-[#D00403] transition-colors font-heading">[ </span>
      <Icon className="w-3 h-3 text-black group-hover:text-[#D00403] mx-1 transition-colors" />
      <span className="text-sm font-medium text-black group-hover:text-[#D00403] transition-colors font-heading"> ]</span>
      <span className="text-sm font-medium text-black group-hover:text-[#D00403] ml-2 transition-colors font-heading">{name}</span>
    </div>
  );

  if (href) {
    return (
      <div className="flex items-center space-x-3 group">
        <a href={href} target="_blank" rel="noopener noreferrer">
          {content}
        </a>
      </div>
    );
  }

  return (
    <div className="flex items-center space-x-3 group relative">
      {content}
      <div className="absolute left-full ml-2 opacity-0 translate-y-1 pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto transition-[opacity,transform] duration-150 ease-out">
        <div className="bg-black text-white text-xs px-2 py-1 border border-white whitespace-nowrap">
          暂不支持
        </div>
      </div>
    </div>
  );
}

function NewsCard({ src, alt, title, subtitle, href }: { src: string; alt: string; title: string; subtitle: string; href: string }) {
  return (
    <div className="border-r border-b border-gray-300 flex flex-col">
      <div className="relative" style={{ height: 'calc(100% / 1.4)' }}>
        <Image
          src={src}
          alt={alt}
          fill
          sizes="25vw"
          className="object-cover outline outline-1 -outline-offset-1 outline-black/10"
        />
      </div>
      <div className="flex-1 flex flex-col relative p-4">
        <div>
          <p className="text-sm sm:text-base text-gray-600 mb-2 leading-tight">
            {title}
          </p>
          <h3 className="text-base sm:text-lg md:text-xl font-bold text-black leading-tight font-heading">
            {subtitle}
          </h3>
        </div>
        <a href={href} target="_blank" rel="noopener noreferrer">
          <button className="absolute bottom-0 right-0 bg-black text-white text-sm px-10 py-3 border-2 border-transparent hover:text-[#D00403] hover:border-[#D00403] transition-colors duration-200 flex items-center active:scale-[0.96] font-heading">
            查看更多 <span className="ml-2">↗</span>
          </button>
        </a>
      </div>
    </div>
  );
}

export default function NewsSection() {
  return (
    <div className="news bg-white" style={{ height: '115vh' }}>
      <div className="h-full grid grid-cols-4 gap-0" style={{ gridTemplateRows: '1fr 1.4fr' }}>
        {/* Title panel (top-left, spans 2 columns) */}
        <div className="col-span-2 border-r border-b border-gray-300 pt-4 sm:pt-6 lg:pt-8 pl-4 sm:pl-6 lg:pl-8 pr-4 flex flex-col">
          <p className="text-xs sm:text-sm text-gray-600 mb-2 sm:mb-3 tracking-wider font-heading">
            要闻
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-black mb-3 sm:mb-4 [text-wrap:balance] font-heading">
            最新动态
          </h2>
          <p className="text-sm sm:text-base text-gray-700 mb-6 sm:mb-8 leading-relaxed [text-wrap:pretty] font-heading">
            紧跟时政要闻、证监会要闻和新闻发布会的最新资讯动态。
          </p>
          <a
            href="http://www.csrc.gov.cn/csrc/xwfb/index.shtml"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="inline-flex items-center text-sm sm:text-base font-bold text-white hover:text-[#D00403] bg-black border-2 border-black px-4 sm:px-6 py-2 sm:py-3 transition-colors duration-200 self-start active:scale-[0.96] active:transition-transform active:duration-150 active:ease-out hover:shadow-[0_0_20px_8px_rgba(208,4,3,0.1)] font-heading">
              查看全部要闻
              <span className="ml-2">↗</span>
            </button>
          </a>
        </div>

        {/* Social Media Panel */}
        <div className="border-b border-gray-300 p-4 bg-[#D00403] flex flex-col justify-between items-start">
          <Image
            src="/sociallinks-headimage.svg"
            alt="Social Links Header"
            width={400}
            height={200}
            className="w-full h-auto mb-2"
          />
          <div className="space-y-0.25">
            <SocialLink icon={WeixinIcon} name="微信" />
            <SocialLink icon={WeiboIcon} name="微博" href="https://weibo.com/csrcfabu" />
            <SocialLink icon={BilibiliIcon} name="哔哩哔哩" />
            <SocialLink icon={TikTokIcon} name="抖音" />
            <SocialLink icon={AlipayIcon} name="支付宝" />
          </div>
        </div>

        {/* Quick Entry Panel */}
        <div className="border-b border-gray-300 bg-black flex flex-col relative">
          <div className="absolute top-3 right-4">
            <span className="text-[#D00403] text-sm font-bold font-heading">
              直达服务
            </span>
          </div>
          <div className="flex items-center mb-4 pt-3 px-4">
            <div className="w-6 h-6 mr-3 flex items-center justify-center">
              <DoorOpenIcon className="text-[#D00403] text-lg w-[1em] h-[1em]" />
            </div>
            <h3 className="text-[#D00403] text-sm font-bold font-heading">
              常用功能
            </h3>
          </div>
          <p className="text-white text-xs sm:text-sm leading-relaxed mb-4 flex-1 px-4 font-heading">
            公开指南、公开年度报告、主动公开目录、依申请公开、网上办事服务平台、办事指南、公众留言、征求意见、举报专栏、信访专栏
          </p>
          <a
            href="https://neris.csrc.gov.cn/portal/portalHome/index"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="absolute bottom-0 right-0 bg-black text-[#D00403] border border-[#D00403] text-xs px-16 py-3.75 hover:bg-[#D00403] hover:text-black transition-colors duration-200 flex items-center active:scale-[0.96] font-heading">
              快速入口 <span className="ml-2">↗</span>
            </button>
          </a>
        </div>

        {/* Bottom row - News Cards */}
        <NewsCard
          src="/section2-2.webp"
          alt="Panel 5"
          title={'\u201C中国经济持续展现强劲韧性\u201D'}
          subtitle="国际人士积极评价中国一系列政策举措提振经济发展信心。"
          href="https://www.peopleapp.com/column/30049242247-500006295158"
        />
        <NewsCard
          src="/section2-1.webp"
          alt="Panel 6"
          title="关于完善中国特色现代企业制度的意见"
          subtitle="为贯彻落实党中央关于完善中国特色现代企业制度的战略部署，经党中央、国务院同意，现提出如下意见。"
          href="http://www.csrc.gov.cn/csrc/c100028/c7560525/content.shtml"
        />

        {/* Empty panel */}
        <div className="border-r border-gray-300 p-4">
          <div className="relative h-full"></div>
        </div>

        <NewsCard
          src="/section2-3.webp"
          alt="Panel 8"
          title="2024年4月12日新闻发布会"
          subtitle="加强监管、防范风险，推动资本市场高质量发展。"
          href="http://www.csrc.gov.cn/csrc/c100029/c7473708/content.shtml"
        />
      </div>
    </div>
  );
}
