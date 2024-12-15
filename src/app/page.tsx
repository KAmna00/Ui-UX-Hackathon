import Hero from "@/app/components/hero";
import PickDrop from "@/app/components/pickup-dropoff";
import PopularCarsHome from "@/app/components/popularCarHome";
import RecommendedCarsHome from "@/app/components/RecommendedCarHome";
import Footer from "./components/footer";
import Header from "./components/header";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <PickDrop />
      <PopularCarsHome />
      <RecommendedCarsHome />
      <Footer />
    </>
  );
}
