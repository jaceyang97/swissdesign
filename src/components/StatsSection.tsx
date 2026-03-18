import Image from 'next/image';

export default function StatsSection() {
  return (
    <div className="animatedblock w-full aspect-[2/1] bg-gray-200 relative">
      <Image
        src="/section4.webp"
        alt="Section 4"
        fill
        sizes="100vw"
        className="object-cover outline outline-1 -outline-offset-1 outline-black/10"
      />
      <div className="animatedblock__text-box_item bg-black text-white pb-12 border border-white/20 w-1/4 h-1/3 absolute bottom-0 right-0">
        <h3 className="text-sm font-bold mb-2 px-6 pt-4 font-heading">
          统计信息
        </h3>
        <h4 className="text-3xl font-semibold mb-3 px-6 font-heading">
          证券市场统计数据
        </h4>
        <p className="text-sm leading-relaxed mb-4 px-6 text-gray-400 [text-wrap:pretty] font-heading">
          中国证监会定期发布证券市场快报和月报，披露交易所交易量、资金流动、品种结构等核心数据，确保监管透明性与及时响应。最近数据包括2025年5月26–30日的证交快报，以及2025年5月的月度统计。
        </p>
        <div className="flex justify-center mt-8">
          <a
            href="http://www.csrc.gov.cn/csrc/tjsj/index.shtml"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="absolute bottom-0 right-0 bg-white text-black px-10 py-3 text-sm hover:bg-black hover:text-[#D00403] hover:border hover:border-[#D00403] transition-colors duration-200 active:scale-[0.96] font-heading">
              了解更多 <span className="ml-2">↗</span>
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}
