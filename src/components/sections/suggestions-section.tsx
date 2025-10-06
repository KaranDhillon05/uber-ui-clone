import Image from 'next/image';

type SuggestionCardData = {
  title: string;
  description: string;
  imageUrl: string;
  link: string;
  imagePosition: 'top' | 'bottom';
};

const suggestionData: SuggestionCardData[] = [
  {
    title: "Ride",
    description: "Go anywhere with Uber. Request a ride, hop in, and go.",
    imageUrl: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/5f8e6409-119a-4cb7-bef0-debf54439feb-uber-com/assets/images/top_bar_rides_3d-2.png",
    link: "https://m.uber.com/looking/",
    imagePosition: "top",
  },
  {
    title: "Reserve",
    description: "Reserve your ride in advance so you can relax on the day of your trip.",
    imageUrl: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/5f8e6409-119a-4cb7-bef0-debf54439feb-uber-com/assets/images/reserve_clock-3.png",
    link: "https://m.uber.com/reserve/",
    imagePosition: "top",
  },
  {
    title: "Rental Cars",
    description: "Your perfect rental car is a few clicks away. Learn more about Uber Rent.",
    imageUrl: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/5f8e6409-119a-4cb7-bef0-debf54439feb-uber-com/assets/images/car-rentals-4.png",
    link: "https://m.uber.com/go/rent",
    imagePosition: "top",
  },
  {
    title: "Courier",
    description: "Uber makes same-day item delivery easier than ever.",
    imageUrl: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/5f8e6409-119a-4cb7-bef0-debf54439feb-uber-com/assets/images/Courier-5.png",
    link: "#",
    imagePosition: "bottom",
  },
  {
    title: "Food",
    description: "Order delivery from local restaurants with Uber Eats.",
    imageUrl: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/5f8e6409-119a-4cb7-bef0-debf54439feb-uber-com/assets/images/restaurants-6.png",
    link: "https://www.ubereats.com/",
    imagePosition: "bottom",
  },
  {
    title: "Grocery",
    description: "Get groceries delivered to your door with Uber Eats.",
    imageUrl: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/5f8e6409-119a-4cb7-bef0-debf54439feb-uber-com/assets/images/uber_grocery-7.png",
    link: "https://www.ubereats.com/category-feed/Shop",
    imagePosition: "bottom",
  },
];

const SuggestionsSection = () => {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-[1200px] px-4 py-10 md:px-8 md:py-[60px] lg:px-16 lg:py-20">
        <h2 className="mb-10 font-display text-2xl font-bold text-black md:text-[28px] lg:text-4xl">
          Suggestions
        </h2>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {suggestionData.map((card, index) => (
            <a
              key={index}
              href={card.link}
              className="group relative flex flex-col justify-between rounded-xl bg-secondary p-6 transition-all duration-300 ease-in-out hover:scale-[1.02] hover:shadow-[0_8px_24px_rgba(0,0,0,0.12)] lg:min-h-[280px]"
            >
              <div>
                <h3 className="mb-3 font-display text-2xl font-medium text-black">
                  {card.title}
                </h3>
                <p className="mb-4 font-body text-base leading-6 text-[#5e5e5e]">
                  {card.description}
                </p>
              </div>
              <p className="font-body text-sm font-medium text-black underline-offset-4 group-hover:underline">
                Details
              </p>
              <Image
                src={card.imageUrl}
                alt={card.title}
                width={80}
                height={80}
                className={`absolute right-6 h-auto w-20 ${
                  card.imagePosition === 'top' ? 'top-6' : 'bottom-6'
                }`}
              />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SuggestionsSection;