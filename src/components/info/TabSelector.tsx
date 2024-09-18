import { Plane, Briefcase, HelpCircle } from "lucide-react";

const tabData = [
  { id: "stats", label: "Estadísticas", icon: Plane },
  { id: "services", label: "Servicios", icon: Briefcase },
  { id: "faq", label: "FAQ", icon: HelpCircle },
];

interface TabSelectorProps {
  activeTab: string;
  onTabClick: (tabId: string) => void;
}

export const TabSelector: React.FC<TabSelectorProps> = ({ activeTab, onTabClick }) => (
  <>
    {/* Button for mobile devices */}
    <div className="sm:hidden">
      <select
        className="w-full p-2.5 text-gray-900 bg-white border border-yellow-500 rounded-md shadow-sm outline-none appearance-none focus:border-yellow-600"
        onChange={(e) => onTabClick(e.target.value)}
        value={activeTab}
      >
        {tabData.map((tab) => (
          <option key={tab.id} value={tab.id}>
            {tab.label}
          </option>
        ))}
      </select>
    </div>

    {/* Tabs for desktop */}
    <ul className="hidden text-sm font-medium text-center text-gray-900 divide-x divide-gray-300 rounded-lg sm:flex">
      {tabData.map((tab) => (
        <li key={tab.id} className="w-full">
          <button
            onClick={() => onTabClick(tab.id)}
            className={`inline-flex items-center justify-center w-full p-4 border rounded-lg ${
              activeTab === tab.id
                ? "text-yellow-600 bg-white border-yellow-500"
                : "text-gray-900 border-transparent hover:text-yellow-600 hover:bg-yellow-50 hover:border-yellow-500"
            } focus:outline-none transition-colors`}
          >
            <tab.icon className="w-5 h-5 mr-2" />
            {tab.label}
          </button>
        </li>
      ))}
    </ul>
  </>
);
