import { HeroSection } from "@/components/hero-section";
import TopCategories from "@/components/top-categories";
import TrendingBlogs from "@/components/trending-blogs";
import { Boxes } from "@/components/ui/background-boxes";
import HellBackground from "@/src/components/lightswind/hell-background";

export default function Home() {
  return (
    <>
      <HellBackground />
      {/* <Boxes /> */}
      {/* <HeroSectionOne /> */}
      <HeroSection />
      {/* <TrendingBlogs /> */}
      <TrendingBlogs />
      <TopCategories />
    </>
  );
}
