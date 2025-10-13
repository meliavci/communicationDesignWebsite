import { TabType } from '@/app/page';

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
  { id: 'doomscrolling', label: 'Doomscrolling', color: 'bg-blue-950' },
  { id: 'addiction', label: 'Addiction', color: 'bg-blue-900' },
  { id: 'rehab', label: 'Rehab', color: 'bg-blue-800' },
  { id: 'pressure', label: 'Pressure', color: 'bg-blue-700' },
  { id: 'socialMedia', label: 'Social Media', color: 'bg-blue-600' },
];

export default function Navigation({ activeTab, setActiveTab }: NavigationProps) {
  return (
    <nav className="fixed right-20 top-1/2 -translate-y-1/2 flex flex-col justify-center gap-0 rounded-r-lg overflow-hidden z-20">
      {tabs.map((tab, index) => (
        <button
          key={tab.id}
          onClick={() => setActiveTab(tab.id)}
          className={`
            ${tab.color}
            ${activeTab === tab.id
            ? 'w-16 shadow-xl rounded-r-lg translate-x-0'
            : 'w-14 translate-x-0 hover:translate-x-0'
          }
            pl-1
            h-40
            relative
            transition-all
            duration-300
            ease-out
            flex
            items-center
            justify-center
            text-blue-50
            font-light
            text-md
            tracking-wider
            overflow-hidden
            group
            font-sans
            ${index === 0 ? 'rounded-tr-lg' : ''}
            ${index === tabs.length - 1 ? 'rounded-br-lg' : ''}
          `}
          style={{
            writingMode: 'vertical-rl',
            textOrientation: 'mixed',
          }}
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
