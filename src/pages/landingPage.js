import Benefits from "../component/Benefits/Benefits";
import Location from "../component/Location/Location";
import Product from "../component/Product/Product";
import Reviews from "../component/Reviews/Reviews";
import LandingSection from "../component/landingSection/andingSection";

export default function LandingPage() {
  return (
    <>
      <LandingSection />
      <Product />
      <Benefits />
      <Reviews />
      <Location />
    </>
  );
}
