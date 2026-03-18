import Image from 'next/image';
import { WeixinIcon, WeiboIcon, BilibiliIcon, TikTokIcon, AlipayIcon } from './icons';

const BRAND_COLOR = '#D00403';

export default function Footer() {
  return (
    <>
      <div className="footer w-full bg-black text-white">
        <div className="grid grid-cols-12" style={{ gridTemplateRows: '2fr 0.7fr 2fr 0.7fr 1fr', height: '36rem', width: '100%' }}>
          {Array.from({ length: 5 }).map((_, rowIdx) => (
            Array.from({ length: 12 }).map((_, colIdx) => {
              // Merge R3C1 to R5C3 into a single cell
              if (rowIdx === 2 && colIdx === 0) {
                return (
                  <div key={`r3c1-merged`} className="flex items-end justify-start row-span-3 col-span-3 bg-black h-full w-full p-4">
                    <div className="flex items-end pr-2">
                      <Image
                        src="/china_logo.svg"
                        alt="China Logo"
                        width={48}
                        height={48}
                        className="h-14 w-auto"
                      />
                      <div className="flex flex-col w-[280px] ml-2">
                        <h1 className="text-xl font-bold text-white mb-2 text-center">中国证券监督管理委员会</h1>
                        <h2 className="text-xs text-white text-center">CHINA SECURITIES REGULATORY COMMISSION</h2>
                      </div>
                    </div>
                  </div>
                );
              }
              if (
                (rowIdx >= 2 && rowIdx <= 4) && (colIdx >= 0 && colIdx <= 2) && !(rowIdx === 2 && colIdx === 0)
              ) {
                return null;
              }

              // Merge R2C2 to R2C3
              if (rowIdx === 1 && colIdx === 1) {
                return (
                  <div key={`r2c2-merged`} className="flex items-center justify-start col-span-2 bg-black border-[1.25px] border-[#D00403] pl-4">
                    <span className="text-[#D00403] text-lg font-medium">社交媒体</span>
                  </div>
                );
              }
              if (rowIdx === 1 && colIdx === 2) return null;

              // R2C1
              if (rowIdx === 1 && colIdx === 0) {
                return (
                  <div key={`r2c1`} className="flex items-center justify-start bg-black border-[1.25px] border-[#D00403] pl-4">
                    <span className="text-[#D00403] text-lg font-medium">(5)</span>
                  </div>
                );
              }

              let cellClass = 'flex items-center justify-center';
              if (rowIdx === 0 && colIdx < 6) {
                cellClass += ' border-t border-white border-[1.25px]';
              } else if (rowIdx === 1 && colIdx === 0) {
                cellClass += ' border-l border-b border-white border-[1.25px]';
              } else if (rowIdx === 1 && colIdx === 1) {
                cellClass += ' border-b border-l border-white border-[1.25px]';
              } else if (rowIdx === 1 && colIdx === 2) {
                cellClass += ' border-b border-r border-white border-[1.25px]';
              }

              if (rowIdx === 2 && colIdx === 3) cellClass += ' border-t border-white';
              else if (rowIdx === 2 && colIdx === 4) cellClass += ' border-t border-white';
              else if (rowIdx === 2 && colIdx === 5) cellClass += ' border-t border-r border-white';
              if (rowIdx === 3 && colIdx === 3) cellClass += ' border-b border-white';
              else if (rowIdx === 3 && colIdx === 4) cellClass += ' border-b border-white';
              else if (rowIdx === 3 && colIdx === 5) cellClass += ' border-b border-r border-white';

              // Merge R1C7 to R2C9
              if (rowIdx === 0 && colIdx === 6) {
                return (
                  <div key={`r1c7-merged`} className="flex items-start justify-start row-span-2 col-span-3 bg-black border border-white border-[1.25px] h-full w-full p-4">
                    <span className="text-white text-base font-semibold leading-snug">
                    中国证监会致力于构建一个更加规范、透明、有韧性的资本市场。我们相信，健康的市场秩序源于严谨的监管，也来自每一位投资者对规则的信任。无论你是市场新手还是资深机构，清晰、可预期的制度环境，始终是我们努力的方向。
                    </span>
                  </div>
                );
              }
              if (
                (rowIdx === 0 && (colIdx === 7 || colIdx === 8)) ||
                (rowIdx === 1 && (colIdx >= 6 && colIdx <= 8))
              ) {
                return null;
              }

              // R5C4 - CSRC Logo
              if (rowIdx === 4 && colIdx === 3) {
                return (
                  <div key={`r5c4`} className="flex items-center justify-center bg-black border-l border-b border-r border-white h-full w-full">
                    <Image
                      src="/csrc_logo.svg"
                      alt="CSRC Logo"
                      width={48}
                      height={48}
                      className="h-12 w-auto"
                    />
                  </div>
                );
              }

              // Merge R5C5 to R5C6 - Copyright
              if (rowIdx === 4 && colIdx === 4) {
                return (
                  <div key={`r5c5-merged`} className="flex items-center justify-start col-span-2 bg-black border-l border-b border-r border-white h-full w-full pl-4">
                    <span className="text-white text-xs">&copy; 2025 中国证券监督管理委员会</span>
                  </div>
                );
              }
              if (rowIdx === 4 && colIdx === 5) return null;

              // R5C7 - Badge
              if (rowIdx === 4 && colIdx === 6) {
                return (
                  <div key={`r5c7`} className="flex items-center justify-center bg-black border border-white border-[1.25px] h-full w-full">
                    <Image
                      src="/badge.png"
                      alt="badge"
                      width={80}
                      height={80}
                      className="h-20 w-auto"
                    />
                  </div>
                );
              }

              // Merge R5C8 to R5C12 - ICP info
              if (rowIdx === 4 && colIdx === 7) {
                return (
                  <div key={`r5c8-merged`} className="flex items-center justify-center col-span-5 bg-black border border-white border-[1.25px] h-full w-full pl-4">
                    <span className="text-white text-xs">京ICP备20010911号-1</span>
                    <Image
                      src="/beian.png"
                      alt="beian"
                      width={16}
                      height={16}
                      className="h-4 w-auto mx-2 inline-block align-middle"
                    />
                    <span className="text-white text-xs">京公网安备 123456789000 号</span>
                  </div>
                );
              }
              if (rowIdx === 4 && (colIdx >= 8 && colIdx <= 11)) return null;

              // Merge R3C10 to R3C12 - Exchange links
              if (rowIdx === 2 && colIdx === 9) {
                return (
                  <div key={`r3c10-merged`} className="flex flex-col items-start justify-center col-span-3 bg-black border-t border-white border-[1.25px] h-full w-full p-2">
                    <ul className="grid grid-cols-2 gap-x-2 gap-y-2 w-full">
                      {[
                        { href: 'https://www.sse.com.cn/', name: '上海证券交易所' },
                        { href: 'https://www.szse.cn/index/index.html', name: '深圳证券交易所' },
                        { href: 'https://www.bse.cn/', name: '北京证券交易所' },
                        { href: 'https://www.shfe.com.cn/', name: '上海期货交易所' },
                        { href: 'http://www.czce.com.cn/', name: '郑州商品交易所' },
                        { href: 'http://www.dce.com.cn/', name: '大连商品交易所' },
                        { href: 'http://www.cffex.com.cn/', name: '中国金融期货交易所' },
                        { href: 'http://www.gfex.com.cn/', name: '广州期货交易所' },
                      ].map((exchange) => (
                        <li key={exchange.name} className="flex items-center text-white text-base font-medium group cursor-pointer">
                          <a href={exchange.href} target="_blank" rel="noopener noreferrer" className="group-hover:bg-[#D00403] group-hover:text-black transition-colors">
                            [ <span className="mx-1">↗</span> ] <span className="ml-2">{exchange.name}</span>
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                );
              }
              if (rowIdx === 2 && (colIdx === 10 || colIdx === 11)) return null;

              // Merge R3C7 to R4C9 - Diagonal strips
              if (rowIdx === 2 && colIdx === 6) {
                return (
                  <div
                    key={`r3c7-merged`}
                    className="flex items-center justify-end row-span-2 col-span-3 bg-black h-full w-full relative"
                  >
                    <div
                      className="absolute right-0 top-0 h-full"
                      style={{
                        width: '96px',
                        height: '100%',
                        backgroundImage: `repeating-linear-gradient(135deg, ${BRAND_COLOR} 0 16px, transparent 8px 35px)`,
                        backgroundPosition: 'right',
                        backgroundRepeat: 'no-repeat',
                        backgroundSize: '100px 100%'
                      }}
                    />
                  </div>
                );
              }
              if (
                (rowIdx === 2 && (colIdx === 7 || colIdx === 8)) ||
                (rowIdx === 3 && (colIdx >= 6 && colIdx <= 8))
              ) {
                return null;
              }

              // Merge R1C10 to R2C12
              if (rowIdx === 0 && colIdx === 9) {
                return (
                  <div key={`r1c10-merged`} className="flex items-center justify-center row-span-2 col-span-3 bg-black border border-white border-[1.25px]">
                  </div>
                );
              }
              if (
                (rowIdx === 0 && (colIdx === 10 || colIdx === 11)) ||
                (rowIdx === 1 && (colIdx >= 9 && colIdx <= 11))
              ) {
                return null;
              }

              // Merge R3C4 to R4C6 - Social media icons
              if (rowIdx === 2 && colIdx === 3) {
                return (
                  <div key={`r3c4-merged`} className="flex flex-col items-start justify-center row-span-2 col-span-3 bg-black border-[1.25px] border-[#D00403] p-2">
                    <ul className="space-y-3">
                      {[
                        { Icon: WeixinIcon, name: '微信' },
                        { Icon: WeiboIcon, name: '微博' },
                        { Icon: BilibiliIcon, name: '哔哩哔哩' },
                        { Icon: TikTokIcon, name: '抖音' },
                        { Icon: AlipayIcon, name: '支付宝' },
                      ].map(({ Icon, name }) => (
                        <li key={name} className="flex items-center text-[#D00403] text-lg font-medium">
                          <span className="mr-2">[</span>
                          <Icon className="inline-block w-[1em] h-[1em]" />
                          <span className="ml-1 mr-2">]</span>
                          <span>{name}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                );
              }
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
    </>
  );
}
