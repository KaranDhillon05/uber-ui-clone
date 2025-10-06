import Image from "next/image";

const AccountLoginSection = () => {
  return (
    <section className="bg-secondary">
      <div className="mx-auto max-w-[1200px] px-4 py-10 md:px-8 md:py-[60px] lg:py-20">
        <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-16">
          <div>
            <h2 className="mb-4 font-display text-[28px] font-bold leading-[1.2] text-primary md:text-[32px] lg:text-[40px]">
              Log in to see your account details
            </h2>
            <p className="mb-8 font-body text-base font-normal leading-[1.5] text-muted-foreground lg:text-lg">
              View past trips, tailored suggestions, support resources, and&nbsp;more.
            </p>
            <div className="flex flex-col gap-3 sm:flex-row sm:gap-4">
              <a
                href="https://auth.uber.com/login-redirect?next_url=https://www.uber.com"
                className="flex w-full items-center justify-center rounded-md bg-primary px-6 py-4 font-body text-base font-medium text-primary-foreground transition-colors hover:bg-gray-700 sm:w-auto"
                aria-label="Log in to your Uber account"
              >
                Log in to your account
              </a>
              <a
                href="https://get.uber.com/sign-up"
                className="flex w-full items-center justify-center px-6 py-4 font-body text-base font-normal text-primary underline transition-colors hover:text-muted-foreground sm:w-auto"
                aria-label="Create a new Uber account"
              >
                Create an account
              </a>
            </div>
          </div>
          <div>
            <Image
              src="https://tb-static.uber.com/prod/udam-assets/850e6b6d-a29e-4960-bcab-46de99547d24.svg"
              alt="Illustration of a woman and a man representing Uber users and drivers"
              width={546}
              height={261}
              className="mt-10 h-auto w-full rounded-2xl lg:mt-0"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AccountLoginSection;