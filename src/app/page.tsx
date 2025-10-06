import HeroSection from "@/components/sections/hero-section";
import SuggestionsSection from "@/components/sections/suggestions-section";
import AccountLoginSection from "@/components/sections/account-login-section";
import ReserveSection from "@/components/sections/reserve-section";
import DriverSignupSection from "@/components/sections/driver-signup-section";
import BusinessSection from "@/components/sections/business-section";
import CarRentalSection from "@/components/sections/car-rental-section";
import AppDownloadSection from "@/components/sections/app-download-section";
import FooterSection from "@/components/sections/footer";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-white">
      <HeroSection />
      <SuggestionsSection />
      <AccountLoginSection />
      <ReserveSection />
      <DriverSignupSection />
      <BusinessSection />
      <CarRentalSection />
      <AppDownloadSection />
      <FooterSection />
    </main>
  );
}