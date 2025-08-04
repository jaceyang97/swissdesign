'use client';

import { BRAND_COLOR, FONT_FAMILY } from '../constants';

export default function JoinUsButton() {
  const handleHover = (e: React.MouseEvent<HTMLDivElement>, isEnter: boolean) => {
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
    <div
      className="px-3 sm:px-4 lg:px-6 cursor-pointer flex items-center justify-center text-xs sm:text-sm font-bold text-black transition-colors w-40 sm:w-48 lg:w-56"
      style={{
        fontFamily: FONT_FAMILY,
        backgroundColor: BRAND_COLOR,
        border: `3px solid ${BRAND_COLOR}`,
        alignSelf: 'stretch',
        transition: 'all 0.2s ease',
        boxSizing: 'border-box',
      }}
      onMouseEnter={(e) => handleHover(e, true)}
      onMouseLeave={(e) => handleHover(e, false)}
      onClick={() => window.open('http://www.csrc.gov.cn/csrc/index.shtml', '_blank')}
    >
      转入官网<span className="ml-2">[ ↗ ]</span>
    </div>
  );
}
