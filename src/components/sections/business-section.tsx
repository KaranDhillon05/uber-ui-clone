import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const BusinessSection = () => {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-[1200px] px-4 py-10 md:px-8 md:py-[60px] lg:px-16 lg:py-20">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="flex flex-col justify-center lg:pr-[60px]">
            <h2 className="mb-4 font-display text-[28px] font-bold leading-[1.2] text-black md:text-[32px] lg:text-[40px]">
              The Uber you know, reimagined for business
            </h2>
            <p className="mb-8 font-body text-base leading-[1.6] text-muted-foreground md:text-lg">
              Uber for Business is a platform for managing global rides and meals,
              and local deliveries, for companies of any size.
            </p>
            <div className="flex flex-col items-start gap-4 sm:flex-row sm:items-center">
              <Link
                href="https://www.uber.com/in/en/business/getting-started/"
                className="w-full rounded-md bg-black px-8 py-4 text-center font-body text-base font-medium text-white transition-all duration-200 ease-in-out hover:scale-[1.02] hover:bg-gray-700 sm:w-auto"
              >
                Get started
              </Link>
              <Link
                href="https://www.uber.com/in/en/business/"
                className="py-4 font-body text-base font-normal text-black underline-offset-4 transition-colors hover:text-muted-foreground hover:underline sm:py-0"
              >
                Check out our solutions
              </Link>
            </div>
          </div>

          <div className="w-full">
            <Image
              src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/5f8e6409-119a-4cb7-bef0-debf54439feb-uber-com/assets/images/srcb64=aHR0cHM6Ly90Yi1zdGF0aWMudWJlci5jb20vcHJvZC91ZGFtLWFzc2V0cy83NmJhZjFlYS0zODVhLTQwOGMtODQ2Yi01OTIxMTA4NjE5NmMucG5n-9.webp?"
              alt="A vibrant illustration of a modern cityscape with geometric buildings, an airplane, and stylized people, representing Uber for Business solutions."
              width={552}
              height={552}
              className="aspect-square h-auto w-full rounded-[16px] object-cover shadow-[0_4px_12px_rgba(0,0,0,0.08)]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default BusinessSection;