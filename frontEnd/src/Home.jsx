//Import Custom Hook:
import useFetchItem from "../hooks/useFetchItem";
//Import ShadCn Component:
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious, // Add these
  CarouselNext, // Add these
} from "@/components/ui/carousel";
import { ItemCard } from "./components/custom/ItemCard";
const Home = () => {
  const { items } = useFetchItem();
  return (
    <div className="w-full min-h-screen flex flex-col justify-center items-start bg-gray-100">
      {/* Title Of The Section */}
      <div className="mt-[2rem] mb-[2rem] ml-[2rem] text-[1.35rem] font-bold text-amber-900">
        Featured Products
      </div>
      {/* Displaying The Cards */}
      <div className="mb-4 flex flex-wrap justify-center items-center w-full bg-transparent">
        <Carousel
          opts={{
            align: "start",
            loop: true,
            slidesToScroll: 1,
            duration: 10,
            speed: 5,
          }}
        >
          <CarouselContent>
            {items.map((productInfo) => (
              <CarouselItem
                className="basis-1/2 md:basis-1/3 lg:basis-1/3"
                key={productInfo.id}
              >
                <ItemCard data={productInfo} />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </div>
  );
};

export default Home;
