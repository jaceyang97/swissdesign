import Image from 'next/image';

export default function AboutSection() {
  return (
    <>
      {/* Text Block */}
      <div className="textblock w-full pt-24 pb-40 px-8">
        <div>
          <span className="textblock__subtitle block text-lg sm:text-xl text-gray-600 mb-4 font-heading">
            资本市场的制度守护者
          </span>
          <span className="textblock__title block text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-black leading-[0.9] [text-wrap:balance] font-heading">
            推动中国资本市场行稳致远<br />构建公开、公平、公正的市场秩序
          </span>
        </div>
      </div>

      {/* Pitch Block */}
      <div className="pitchblock w-full max-w-full aspect-[2/1] relative">
        <div className="pitchblock__text-box absolute top-0 left-0 w-1/2 h-full bg-white overflow-auto relative" style={{ boxSizing: 'border-box' }}>
          <div className="pitchblock__text-box_annotation p-4 max-w-[60%]">
            <p className="text-base sm:text-lg leading-relaxed mb-4 text-gray-800 [text-wrap:pretty] font-heading">
              中国证券监督管理委员会是国务院直属正部级机构，全面负责我国证券、期货市场的统一监督管理。自成立以来，证监会始终坚持依法从严监管，围绕&ldquo;建制度、不干预、零容忍&rdquo;的监管主线，持续推进资本市场改革，完善发行上市、并购重组、信息披露、交易监管、退市制度等关键环节的制度建设。通过压实中介机构&ldquo;看门人&rdquo;责任、强化对违法违规行为的打击、加强对中小投资者的权益保护，证监会不断提升市场透明度与公信力，维护市场公平秩序，坚定市场信心。
            </p>
            <p className="text-base sm:text-lg leading-relaxed text-gray-800 [text-wrap:pretty] font-heading">
              同时，证监会积极服务国家战略，推动科技创新企业融资，鼓励长期资金入市，完善多层次资本市场体系，提升资本市场对实体经济的支持能力。通过推进监管数字化转型，加强与境内外监管机构的协作，证监会致力于构建规范、透明、开放、有活力、有韧性的资本市场生态，助力中国经济高质量发展。
            </p>
          </div>
          <div className="pitchblock__text-box_item bg-black text-white pb-12 border border-white/20 w-[60%] absolute bottom-0 left-0">
            <h3 className="text-sm font-bold mb-2 px-6 pt-4 font-heading">
              核心职能
            </h3>
            <h4 className="text-3xl font-semibold mb-3 px-6 font-heading">
              中国证监会
            </h4>
            <p className="text-sm leading-relaxed mb-4 px-6 text-gray-400 [text-wrap:pretty] font-heading">
              在这里，监管、法治与市场力量协同共进。中国证监会统筹发行审核、交易行为、信息披露与市场秩序，打击违法违规，压实&ldquo;关键少数&rdquo;责任，提升上市公司质量。通过持续制度创新与跨境协同，推动中国资本市场走向更加稳健、包容和国际化的未来。
            </p>
            <div className="flex justify-center mt-8">
              <a
                href="http://www.csrc.gov.cn/csrc/jggk/index.shtml"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="absolute bottom-0 right-0 bg-white text-black px-10 py-3 text-sm hover:bg-black hover:text-[#D00403] hover:border hover:border-[#D00403] transition-colors duration-200 active:scale-[0.96] font-heading">
                  进一步了解 <span className="ml-2">↗</span>
                </button>
              </a>
            </div>
          </div>
        </div>
        <div className="pitchblock__image absolute top-0 right-0 w-1/2 h-full">
          <Image
            src="/section3_stage.webp"
            alt="Section 3"
            fill
            sizes="50vw"
            className="object-cover object-center"
          />
        </div>
      </div>
    </>
  );
}
