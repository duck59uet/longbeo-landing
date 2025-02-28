'use client';

import { setupGetApiConfig } from "@spores/launchpad-common";
import { useEffect, useState } from "react";
import {
  Footer,
  Header,
  SectionDisclaimer
} from "../../components";
import { getApiConfig } from "../../swagger";

const DisclaimerPage: React.FC = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    console.log('getApiConfig', getApiConfig, getApiConfig());
    setupGetApiConfig(getApiConfig)
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
        <SectionDisclaimer />
        <Footer />
      </div>
    )
}

export default DisclaimerPage;