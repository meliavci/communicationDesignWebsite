interface ProtoPageProps {
  bgColor?: string;
}

export default function ProtoPage({ bgColor = 'bg-white' }: ProtoPageProps) {
  return (
    <div className={`${bgColor} h-full flex flex-col ml-16 mr-26 overflow-hidden relative z-30`}>
      <div className="flex-1 p-16 overflow-auto">
      </div>
    </div>
  );
}
