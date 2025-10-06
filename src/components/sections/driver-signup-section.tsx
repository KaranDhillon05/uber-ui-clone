import Image from 'next/image';

const DriverSignupSection = () => {
  return (
    <section className="bg-[#fafafa] py-10 md:py-[60px] lg:py-20">
      <div className="max-w-[1200px] mx-auto px-4 md:px-8 lg:px-16">
        <div className="flex flex-col-reverse lg:flex-row lg:items-center">
          <div className="w-full lg:w-1/2 mt-10 lg:mt-0">
            <div className="relative aspect-[4/3] w-full rounded-2xl overflow-hidden shadow-[0_4px_12px_rgba(0,0,0,0.08)]">
              <Image
                src="https://cn-geo1.uber.com/image-proc/crop/resizecrop/udam/format=auto/width=552/height=552/srcb64=aHR0cHM6Ly90Yi1zdGF0aWMudWJlci5jb20vcHJvZC91ZGFtLWFzc2V0cy85NjRkZDNkMS05NGU3LTQ4MWUtYjI4Yy0wOGQ1OTM1M2I5ZTAucG5n"
                alt="Man driving a car."
                fill
                sizes="(max-width: 1023px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </div>
          <div className="w-full lg:w-1/2 lg:pl-[60px]">
            <h2 className="font-display font-bold text-black text-[28px] md:text-[32px] lg:text-[40px] leading-[1.2] mb-4">
              Drive when you want, make what you need
            </h2>
            <p className="font-body text-[#5e5e5e] text-base lg:text-lg leading-[1.6] mb-8">
              Make money on your schedule with deliveries or rides—or both. You can use your own car or choose a rental through Uber.
            </p>
            <div className="flex flex-col items-start gap-4">
              <a
                href="https://drivers.uber.com/"
                className="bg-primary text-primary-foreground font-body font-medium text-base py-4 px-8 rounded-md w-full lg:w-auto text-center lg:min-w-[200px] transition-all duration-200 ease-in-out hover:bg-gray-700 no-underline hover:no-underline hover:scale-[1.02] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                role="button"
              >
                Get started
              </a>
              <a
                href="https://drivers.uber.com/"
                className="text-black font-body text-base py-2 underline hover:text-[#5e5e5e] transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
              >
                Already have an account? Sign in
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DriverSignupSection;