"use client";

import React from "react";
import Image from "next/image";
import { MapPin, Navigation, CalendarDays, Clock, ChevronDown } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-[1280px] px-4 py-10 md:px-8 md:py-[60px] lg:px-16 lg:py-20">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:gap-16">
          <div className="flex flex-col justify-center md:order-1">
            <div className="mb-4 flex items-center md:mb-8">
              <MapPin size={16} className="text-black" />
              <span className="ml-2 font-medium font-body text-black">Boston, US</span>
              <button className="ml-4 text-sm font-medium text-black hover:underline">
                Change city
              </button>
            </div>
            
            <h1 className="font-display text-[48px] font-bold leading-tight tracking-[-0.02em] text-black lg:text-[56px] lg:leading-[62px]">
              Go anywhere with Uber
            </h1>

            <div className="mt-8">
              <div className="relative">
                <div aria-hidden="true" className="absolute left-[18px] top-[28px] h-4 w-px bg-border"></div>
                
                {/* Pickup Location */}
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 flex items-center pl-[14px]">
                    <div className="h-2.5 w-2.5 rounded-full bg-black"></div>
                  </div>
                  <input
                    type="text"
                    placeholder="Pickup location"
                    className="h-14 w-full rounded-lg border border-border bg-secondary p-4 pl-10 pr-36 font-body text-base placeholder-muted-foreground transition-colors focus:border-ring focus:outline-none focus:ring-2 focus:ring-ring/40"
                  />
                  <button className="absolute inset-y-0 right-0 my-2 mr-2 flex items-center rounded-md bg-white px-3 py-2 text-sm font-medium text-black shadow-sm transition-colors hover:bg-gray-100">
                    <Navigation size={16} className="mr-1.5" />
                    Get exact location
                  </button>
                </div>
                
                <div className="h-4"></div>

                {/* Dropoff Location */}
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 flex items-center pl-[14px]">
                    <div className="h-2.5 w-2.5 bg-black"></div>
                  </div>
                  <input
                    type="text"
                    placeholder="Dropoff location"
                    className="h-14 w-full rounded-lg border border-border bg-secondary p-4 pl-10 font-body text-base placeholder-muted-foreground transition-colors focus:border-ring focus:outline-none focus:ring-2 focus:ring-ring/40"
                  />
                </div>
              </div>

              <div className="mt-4 flex flex-col gap-4 sm:flex-row">
                <div className="relative w-full sm:w-1/2">
                  <button className="flex h-14 w-full items-center rounded-lg border border-border bg-secondary px-4 text-left font-body text-base transition-colors hover:bg-accent focus:border-ring focus:outline-none focus:ring-2 focus:ring-ring/40">
                    <CalendarDays size={20} className="mr-3 text-black" />
                    Today
                    <ChevronDown size={20} className="ml-auto text-black" />
                  </button>
                </div>
                <div className="relative w-full sm:w-1/2">
                   <button className="flex h-14 w-full items-center rounded-lg border border-border bg-secondary px-4 text-left font-body text-base transition-colors hover:bg-accent focus:border-ring focus:outline-none focus:ring-2 focus:ring-ring/40">
                    <Clock size={20} className="mr-3 text-black" />
                    Now
                    <ChevronDown size={20} className="ml-auto text-black" />
                  </button>
                </div>
              </div>

              <button className="text-btn mt-4 h-12 w-full rounded-lg bg-primary px-6 text-primary-foreground transition-colors hover:bg-gray-700 md:h-14 md:w-auto">
                See prices
              </button>
              
              <p className="mt-3 text-center text-sm text-muted-foreground md:text-left">
                <a href="#" className="hover:underline">Log in to see your recent activity</a>
              </p>
            </div>
          </div>
          
          <div className="flex items-center md:order-2">
            <div className="relative w-full">
              <Image
                src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/5f8e6409-119a-4cb7-bef0-debf54439feb-uber-com/assets/images/srcb64=aHR0cHM6Ly90Yi1zdGF0aWMudWJlci5jb20vcHJvZC91ZGFtLWFzc2V0cy9hM2NmODU2NC1lMmE2LTQxOGMtYjliMC02NWRkMjg1YzEwMGIuanBn-1.webp?"
                alt="Illustration of a woman with groceries getting out of a blue Uber car in a city."
                width={552}
                height={368}
                className="h-auto w-full rounded-2xl object-cover shadow-[0_4px_12px_rgba(0,0,0,0.08)]"
                style={{ aspectRatio: "4 / 3" }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;