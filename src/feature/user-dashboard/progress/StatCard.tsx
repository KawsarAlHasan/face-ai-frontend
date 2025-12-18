
const StatCard = ({ icon, value, label, sublabel, gradient }: {
  icon: React.ReactNode;
  value: string;
  label: string;
  sublabel: string;
  gradient: string;
}) => {
    return (
        <div className="bg-black/80 backdrop-blur-sm border border-[#9810FA85] rounded-2xl md:p-5 p-3">
            <div className="flex items-start justify-between mb-4">
                <div className={`md:w-10 md:h-10 w-8 h-8 rounded-xl bg-linear-to-br ${gradient} flex items-center justify-center text-white`}>
                    {icon}
                </div>
                <div className="text-white md:text-2xl text-xl font-medium">{value}</div>
            </div>
            <div className="text-white md:text-[16px] text-sm font-medium mb-1">{label}</div>
            <div className="text-[#D8D8D8] text-sm">{sublabel}</div>
        </div>
    );
};

export default StatCard;