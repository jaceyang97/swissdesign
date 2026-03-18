'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';

export default function HeroSection() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          video.play();
        } else {
          video.pause();
        }
      });
    });

    observer.observe(video);
    return () => observer.unobserve(video);
  }, []);

  return (
    <div className="video-main-page h-screen flex relative">
      {/* Background Video */}
      <video
        ref={videoRef}
        className="absolute inset-0 w-full h-full object-cover z-0"
        muted
        loop
        playsInline
        preload="metadata"
        poster="/section1-video-poster.webp"
      >
        <source src="/frontpage_video.webm" type="video/webm" />
        <source src="/frontpage_video.mp4" type="video/mp4" />
      </video>

      {/* Dark overlay */}
      <div className="absolute inset-0 w-full h-full bg-black/50 z-[1]"></div>

      {/* Red strip on the left */}
      <div className="w-8 sm:w-12 lg:w-16 relative flex flex-col items-center justify-end pb-12 sm:pb-16 lg:pb-24 z-10 bg-[#D00403]">
        <Image
          src="/section1-leftbar.svg"
          alt="Strip Left"
          width={32}
          height={32}
          priority
          className="w-auto h-auto px-2"
        />
      </div>

      {/* Main content area */}
      <div className="flex-1 flex items-end relative z-10">
        <div className="pb-12 sm:pb-16 lg:pb-24 pl-4 sm:pl-6 lg:pl-8 pr-4">
          <h2 className="text-sm sm:text-base lg:text-lg font-normal text-white mb-1 sm:mb-2 ml-1 sm:ml-2 font-heading">
            CHINA SECURITIES REGULATORY COMMISSION
          </h2>
          <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-white relative [text-wrap:balance] font-heading">
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
  );
}
