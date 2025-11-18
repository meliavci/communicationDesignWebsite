import {TabType} from '@/app/page';
import {cn} from '@/lib/utils';

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
  {id: 'doomscrolling', label: 'DRUG', color: 'bg-blue-950'},
  {id: 'gaming', label: 'HABITS', color: 'bg-blue-900'},
  {id: 'pressure', label: 'SYSTEM', color: 'bg-blue-800'},
  {id: 'addiction', label: 'ROT', color: 'bg-blue-700'},
];

export default function Navigation({activeTab, setActiveTab}: NavigationProps) {
  return (
    <nav
      className={cn(
        "flex justify-start gap-0 overflow-hidden z-20 mt-4 sm:mt-10 shadow-t-2xl shadow-x-lg",
        "w-full max-w-screen-xl px-0 sm:px-4 lg:px-50"
      )}
    >
      {tabs.map((tab, index) => (
        <button
          key={tab.id}
          onClick={() => setActiveTab(tab.id)}
          className={`
            ${activeTab === tab.id
            ? 'bg-white text-blue-950 shadow-xl rounded-t-lg translate-y-0'
            : `${tab.color} text-blue-50 translate-y-0 hover:translate-y-0`
          }
            flex-1
            px-1 sm:px-4
            h-10 sm:h-12
            relative
            transition-all
            duration-300
            ease-out
            flex
            items-center
            justify-center
            font-light
            text-xs sm:text-lg
            tracking-wider
            overflow-hidden
            group
            font-sans
            cursor-pointer
            rounded-t-lg
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