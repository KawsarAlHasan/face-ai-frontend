import features from "@/constants/home/features";
import Image from "next/image";

export default function Features() {
  return (
    <section id="features" className="container py-10 lg:py-20 ">
      {/* Header */}
      <div className="text-center mb-16">
        <h2 className="section-title text-balance">Powerful Features</h2>
        <p className="section-subtitle text-balance">
          Discover how our AI technology helps you achieve your goals
        </p>
      </div>

      {/* Features Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {features?.map((feature, index) => {
          const Icon = feature.icon;
          return (
            <div
              key={index}
              className="group relative bg-[#0C0C0D] backdrop-blur-sm rounded-xl p-6 border border-slate-800 hover:border-slate-700 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/10 boxShadow"
            >
              {/* Icon Container */}
              <div
                className={`inline-flex items-center justify-center w-12 h-12 rounded-xl bg-linear-to-br ${feature.color} mb-4 group-hover:scale-110 transition-transform duration-300`}
              >
                <Image
                  className={`w-6 h-6 ${feature.iconColor}`}
                  width={24}
                  height={24}
                  src={Icon}
                  alt="icon"
                />
              </div>

              {/* Content */}
              <h3 className="text-lg font-semibold text-white mb-2">
                {feature.title}
              </h3>
              <p className="text-sm text-white/80 leading-relaxed">
                {feature.description}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
