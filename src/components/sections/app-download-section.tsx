import React from 'react';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';

const appCards = [
  {
    title: 'Download the Uber app',
    subtitle: 'Scan to download',
    qrCode: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/5f8e6409-119a-4cb7-bef0-debf54439feb-uber-com/assets/images/srcb64=aHR0cHM6Ly90Yi1zdGF0aWMudWJlci5jb20vcHJvZC91ZGFtLWFzc2V0cy9hNTk5ODZhZC0wZDlmLTQzOTYtODUzOS0zODliY2U5N2Y1NzkucG5n-11.webp',
    qrAlt: 'QR code to download the Uber app',
    href: 'https://rides.sng.link/Aw5zn/o42y?_dl=uber%3A%2F%2F&_smtype=3&pcn=uber-com-homepage-block&mvid=[marketing-visitor-id]',
  },
  {
    title: 'Download the Driver app',
    subtitle: 'Scan to download',
    qrCode: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/5f8e6409-119a-4cb7-bef0-debf54439feb-uber-com/assets/images/srcb64=aHR0cHM6Ly90Yi1zdGF0aWMudWJlci5jb20vcHJvZC91ZGFtLWFzc2V0cy9jODQ2NmEyNy1kMzBjLTUxNGEtOTZmMi1lMDlmMThmYWY4MDYucG5n-12.webp',
    qrAlt: 'QR code to download the Uber Driver app',
    href: 'https://earn.sng.link/A3ir4p/mf0l?_dl=uberdriver%3A%2F%2F&_smtype=3&pcn=uber-com-homepage-block&mvid=[marketing-visitor-id]',
  },
];

const AppDownloadSection = () => {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-[1200px] px-4 py-10 md:px-8 md:py-[60px] lg:px-16 lg:py-20">
        <h2 className="mb-12 text-[24px] font-bold leading-none text-black md:text-[28px] lg:text-[36px]">
          It&apos;s easier in the apps
        </h2>
        <div className="flex flex-col gap-8 md:flex-row">
          {appCards.map((card, index) => (
            <a
              key={index}
              href={card.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative flex min-h-[280px] flex-col justify-between rounded-lg bg-secondary p-6 no-underline transition-all duration-300 ease-in-out hover:scale-[1.02] hover:shadow-[0_8px_16px_rgba(0,0,0,0.1)] md:flex-1 md:p-8 lg:p-10"
            >
              <Image
                src={card.qrCode}
                alt={card.qrAlt}
                width={120}
                height={120}
              />
              <div>
                <h3 className="mb-2 text-2xl font-medium text-black">{card.title}</h3>
                <p className="text-base font-normal text-muted-foreground">{card.subtitle}</p>
              </div>
              <ArrowRight className="absolute right-6 top-6 h-6 w-6 text-black md:right-8 md:top-8 lg:right-10 lg:top-10" />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AppDownloadSection;