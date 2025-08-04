'use client';

import { useState } from 'react';
import { FONT_FAMILY } from '../constants';

export default function DisclaimerBanner() {
  const [show, setShow] = useState(true);

  if (!show) return null;

  return (
    <div className="fixed top-0 left-0 right-0 bg-black/95 text-white z-[100] p-4 border-b border-[#D00403]">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex-1 text-sm sm:text-base" style={{ fontFamily: FONT_FAMILY }}>
          <p className="font-bold mb-1">免责声明</p>
          <p>
            本网站为个人设计作品展示，与中国证券监督管理委员会（以下简称证监会）无任何关联。本网站所展示的内容、设计元素及标识仅用于展示目的，不代表证监会的官方立场或观点。本网站不提供任何证券监管、投资建议或金融服务。未经本人授权，任何人不得使用本网站内容进行商业用途或误导公众。
          </p>
        </div>
        <button
          onClick={() => setShow(false)}
          className="ml-4 px-4 py-2 text-sm border border-white hover:bg-white hover:text-black transition-colors"
        >
          关闭
        </button>
      </div>
    </div>
  );
}
