'use client';

import { useEffect, useState } from "react";
import {
  Header,
  Section1,
  Section6,
  Footer,
} from "../components";

const Page: React.FC = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setIsLoading(false)
  }, []);

  useEffect(() => {
    const handleResize = () => {
      // Check if the window width is below a certain threshold (e.g., 768 pixels)
      const mobileThreshold = 768;
      setIsMobile(window.innerWidth < mobileThreshold);
    };

    // Initial check on mount
    handleResize();

    // Attach event listener for window resize
    window.addEventListener('resize', handleResize);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return isLoading
    ? (<>Loading, please wait...</>)
    : (
      <div className="flex flex-col min-h-screen">
        <Header />
        <Section1 />
        <Section6 />
        {/* <Section7 /> */}
        <Footer />
      </div>
    )
}

export default Page;