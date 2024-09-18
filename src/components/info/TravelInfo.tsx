import React, { useState } from "react";
import { TabSelector } from "./TabSelector";
import { TabContent } from "./TabContent";

interface TravelInfoProps {
  scrollToSection: (ref: React.RefObject<HTMLDivElement>) => void;
  contactoRef: React.RefObject<HTMLDivElement>;
}

export const TravelInfo: React.FC<TravelInfoProps> = ({ scrollToSection, contactoRef }) => {
  const [activeTab, setActiveTab] = useState("stats");

  const handleTabClick = (tabId: string) => {
    setActiveTab(tabId);
  };

  return (
    <div className="w-full bg-gradient-to-r from-yellow-100 to-pink-100 rounded-lg shadow py-16">
      <TabSelector activeTab={activeTab} onTabClick={handleTabClick} />
      <div className="border-t border-gray-300">
        <TabContent activeTab={activeTab} />
      </div>
    </div>
  );
};
