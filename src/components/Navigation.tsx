import {TabType} from '@/app/page';

interface NavigationProps {
  activeTab: TabType;
  setActiveTab: (tab: TabType) => void;
}

interface Tab {
  id: TabType;
  label: string;
  color: string;
}

const tabs: Tab[] = [
  {id: 'doomscrolling', label: 'Doomscrolling', color: 'bg-blue-950'},
  {id: 'addiction', label: 'Addiction', color: 'bg-blue-900'},
  {id: 'rehab', label: 'Rehab', color: 'bg-blue-800'},
  {id: 'pressure', label: 'Pressure', color: 'bg-blue-700'},
  {id: 'gaming', label: 'Gaming/Scrolling', color: 'bg-blue-600'},
  {id: 'socialMedia', label: 'Social Media', color: 'bg-blue-500'},
];

export default function Navigation({activeTab, setActiveTab}: NavigationProps) {
  return (
    <nav
      className="
        flex justify-start gap-0 overflow-hidden z-20
        mx-50 mt-10 shadow-t-2xl shawod-x-lg
      ">
      {tabs.map((tab, index) => (
        <button
          key={tab.id}
          onClick={() => setActiveTab(tab.id)}
          className={`
            ${activeTab === tab.id
            ? 'bg-white text-blue-950 shadow-xl rounded-t-lg translate-y-0'
            : `${tab.color} text-blue-50 translate-y-0 hover:translate-y-0`
          }
            w-40
            px-4
            h-12
            relative
            transition-all
            duration-300
            ease-out
            flex
            items-center
            justify-center
            font-light
            text-md
            tracking-wider
            overflow-hidden
            group
            font-sans
            cursor-pointer
            ${(index === 0 && activeTab !== tab.id) ? 'rounded-tl-lg' : ''}
            ${(index === tabs.length - 1 && activeTab !== tab.id) ? 'rounded-tr-lg' : ''}
          `}
        >
          <span className={`
            transform
            ${activeTab === tab.id ? 'scale-108' : 'group-hover:scale-108'}
            transition-transform
            duration-200
          `}>
            {tab.label}
          </span>
        </button>
      ))}
    </nav>
  );
}