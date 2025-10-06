"use client";

import Image from 'next/image';
import { Calendar, Clock } from 'lucide-react';

const benefitItems = [
  {
    icon: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/5f8e6409-119a-4cb7-bef0-debf54439feb-uber-com/assets/svgs/e12eddee-f082-49f7-a5fc-22c17977de50-6.svg?",
    text: "Choose your exact pickup time up to 90 days in advance.",
    alt: "Calendar and clock icon",
  },
  {
    icon: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/5f8e6409-119a-4cb7-bef0-debf54439feb-uber-com/assets/svgs/30f5ecd4-8ccf-44d0-9976-2833f69df8a9-7.svg?",
    text: "Extra wait time included to meet your ride.",
    alt: "Clock with arrow icon",
  },
  {
    icon: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/5f8e6409-119a-4cb7-bef0-debf54439feb-uber-com/assets/svgs/45ebda59-6a0d-41e3-a924-0dbbce078029-8.svg?",
    text: "Cancel at no charge up to 60 minutes in advance.",
    alt: "No charge icon",
  }
];

const ReserveSection = () => {
  return (
    <section className="bg-white py-10 md:py-[60px] lg:py-20">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-8">
        <h2 className="font-display font-bold text-black text-[28px] lg:text-[36px] mb-10">
          Plan for later
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-5 lg:gap-x-10">
          <div className="lg:col-span-3">
            <div className="relative bg-gradient-to-b from-[#b8e6e1] to-[#9dd9d2] rounded-2xl p-6 md:p-8 lg:p-10 shadow-[0_4px_12px_rgba(0,0,0,0.08)] overflow-hidden">
              <div className="relative z-20">
                <div className="flex items-center gap-3">
                  <button className="bg-black text-white px-6 py-3 rounded-full text-sm font-body font-medium transition-colors">
                    Reserve
                  </button>
                  <button className="bg-transparent text-black border border-black px-6 py-3 rounded-full text-sm font-body font-medium transition-colors hover:bg-black/5">
                    Rent
                  </button>
                </div>

                <h3 className="font-display font-bold text-black text-2xl lg:text-[32px] leading-tight my-6">
                  Get your ride right with Uber Reserve
                </h3>

                <form onSubmit={(e) => e.preventDefault()}>
                  <p className="font-body text-black text-base mb-4">
                    Choose date and time
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 sm:gap-[4%] w-full">
                    <div className="w-full sm:w-[48%]">
                      <label htmlFor="reserve-date" className="sr-only">Date</label>
                      <div className="relative flex items-center h-14 bg-white rounded-lg border border-border">
                        <Calendar className="absolute left-4 w-5 h-5 text-black" aria-hidden="true" />
                        <input id="reserve-date" type="text" placeholder="Date" className="w-full h-full bg-transparent pl-11 pr-4 text-base font-body text-black placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-black rounded-lg" />
                      </div>
                    </div>
                    <div className="w-full sm:w-[48%]">
                       <label htmlFor="reserve-time" className="sr-only">Time</label>
                      <div className="relative flex items-center h-14 bg-white rounded-lg border border-border">
                        <Clock className="absolute left-4 w-5 h-5 text-black" aria-hidden="true" />
                        <input id="reserve-time" type="text" placeholder="Time" className="w-full h-full bg-transparent pl-11 pr-4 text-base font-body text-black placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-black rounded-lg" />
                      </div>
                    </div>
                  </div>
                  <button type="submit" className="w-full h-14 bg-black text-white rounded-lg mt-4 text-base font-body font-medium hover:bg-[#333333] transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black">
                    Next
                  </button>
                </form>
              </div>
              
              <div className="absolute z-10 -right-8 -bottom-16 sm:-right-4 sm:-bottom-20 md:-right-2 md:-bottom-24 lg:right-0 lg:-bottom-[130px]">
                <Image
                  src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/5f8e6409-119a-4cb7-bef0-debf54439feb-uber-com/assets/svgs/850e6b6d-a29e-4960-bcab-46de99547d24-5.svg?"
                  alt="A watch indicating planning ahead with Uber Reserve"
                  width={200}
                  height={392}
                  className="w-[150px] h-auto sm:w-[180px] md:w-[200px]"
                  priority
                />
              </div>
            </div>
          </div>

          <div className="lg:col-span-2 mt-10 lg:mt-0 lg:pl-10 lg:flex lg:flex-col lg:justify-center">
             <h3 className="font-display font-bold text-black text-lg mb-6">Benefits</h3>
             <ul className="space-y-6">
                {benefitItems.map((item, index) => (
                  <li key={index} className="flex items-start gap-4">
                    <div className="flex-shrink-0">
                      <Image src={item.icon} alt={item.alt} width={24} height={24} />
                    </div>
                    <p className="font-body text-black text-base">{item.text}</p>
                  </li>
                ))}
             </ul>
             <a href="https://www.uber.com/in/en/ride/how-it-works/reserve/#see-prices" className="font-body text-black text-sm underline mt-6 block hover:no-underline">
               See terms
             </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReserveSection;