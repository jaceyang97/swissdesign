import Image from 'next/image';

export default function ChartSection() {
  return (
    <div className="chartblock w-full aspect-[4/3] bg-stone-50 relative">
      <div className="grid grid-cols-4 grid-rows-3 h-full w-full">
        {/* Combined panels 1-2 */}
        <div className="col-span-2 flex flex-col items-start justify-start bg-black p-8">
          <span className="text-white text-sm font-bold mb-4">科技驱动 · 创新监管</span>
          <h2 className="text-6xl font-bold text-white mb-6 leading-tight [text-wrap:balance]">科技赋能监管，<br />教育护航投资未来</h2>
          <div className="w-3/4">
            <p className="text-gray-400 text-sm leading-relaxed mb-8 [text-wrap:pretty]">
              证监会依托大数据、AI、RPA等技术手段，不断升级科技监管能力，打造&ldquo;业务在线、合规在线、监管在线&rdquo;的监管新生态。同时深化投资者教育，建设全国投资者教育基地，开展互动式教学与风险提示，增强公众理性投资意识。
            </p>
          </div>
          <div className="relative group inline-block">
            <button className="bg-white text-black px-6 py-3 text-sm hover:bg-black hover:text-[#D00403] hover:border hover:border-[#D00403] transition-colors duration-200 flex items-center active:scale-[0.96]">
              了解案例 <span className="ml-2">↗</span>
            </button>
            <div className="absolute left-full top-1/2 -translate-y-1/2 ml-2 opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto transition-opacity duration-150 ease-out">
              <div className="bg-black text-white text-xs px-2 py-1 border border-white whitespace-nowrap">
                暂不支持
              </div>
            </div>
          </div>
        </div>
        {/* Combined panels 3-4-7-8 */}
        <div className="col-span-2 row-span-2 flex items-center justify-center bg-black relative overflow-hidden">
          <Image
            src="/section5_3.webp"
            alt="Section 5 Image 3"
            fill
            sizes="50vw"
            className="object-cover outline outline-1 -outline-offset-1 outline-black/10"
          />
        </div>
        {/* Panel 5 */}
        <div className="flex items-center justify-center bg-black relative overflow-hidden">
          <Image
            src="/section5_1.webp"
            alt="Section 5 Image 1"
            fill
            sizes="25vw"
            className="object-cover outline outline-1 -outline-offset-1 outline-black/10"
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
          <Image
            src="/section5_2.webp"
            alt="Section 5 Image 2"
            fill
            sizes="25vw"
            className="object-cover outline outline-1 -outline-offset-1 outline-black/10"
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
  );
}
