import React from 'react';
import Image from 'next/image';

const CarRentalSection = () => {
  return (
    <section className="bg-[#fafafa]">
      <div className="mx-auto max-w-[1200px] px-4 py-10 md:px-8 md:py-[60px] lg:px-16 lg:py-20">
        <div className="flex flex-col-reverse lg:grid lg:grid-cols-2 lg:items-center">
          <div className="mt-10 lg:mt-0">
            <Image
              src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/5f8e6409-119a-4cb7-bef0-debf54439feb-uber-com/assets/images/srcb64=aHR0cHM6Ly90Yi1zdGF0aWMudWJlci5jb20vcHJvZC91ZGFtLWFzc2V0cy8xODM0ZTZmZC0zM2UzLTRjOTUtYWQ3YS1mNDg0YThjODEyZDcuanBn-10.webp"
              alt="A person celebrating next to a silver car in a city with confetti"
              width={552}
              height={414}
              className="w-full h-auto rounded-2xl object-cover aspect-[4/3] shadow-[0_4px_12px_rgba(0,0,0,0.08)]"
            />
          </div>
          <div className="lg:pl-[60px]">
            <h2 className="font-display font-bold text-black text-[28px] leading-[1.2] md:text-[32px] lg:text-[40px] mb-4">
              Make money by renting out your car
            </h2>
            <p className="font-body text-[#5e5e5e] text-base leading-[1.6] lg:text-lg mb-8">
              Connect with thousands of drivers and earn more per week with Uber’s free fleet management tools.
            </p>
            <a
              href="https://www.uber.com/in/en/earn/fleet-management/"
              className="inline-block w-full text-center bg-black text-white font-body font-medium text-base px-8 py-4 rounded-md no-underline transition-all duration-200 ease-in-out lg:w-auto lg:min-w-[200px] hover:bg-gray-700 hover:scale-[1.02] hover:shadow-[0_4px_12px_rgba(0,0,0,0.15)]"
            >
              Get started
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CarRentalSection;