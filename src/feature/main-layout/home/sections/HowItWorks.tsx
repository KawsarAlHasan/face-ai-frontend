import steps from "@/constants/home/steps";

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="relative container py-10 lg:py-20 ">
      {/* Header */}
      <div className="text-center mb-16">
        <h2 className="section-title mb-3">How It Works</h2>
        <p className="section-subtitle">
          Three simple steps to start your transformation journey
        </p>
      </div>

      {/* Steps Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-4 relative">
        {/* Connecting Lines */}
        <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-[#FCCEE8] hidden md:block mx-4" />
        {steps?.map((step, index) => {
          const Icon = step.icon;
          return (
            <div key={index} className="relative">
              {/* Step Number Circle */}
              <div
                className={`absolute -top-6 -right-12 -translate-x-1/2 w-12 h-12 rounded-full ${step.numberBg} flex items-center justify-center text-white  text-sm`}
              >
                {step?.number}
              </div>

              {/* Card */}
              <div
                className={`pt-8 px-6 py-8 rounded-lg border-[0.9px] border-[#9810FA] bg-[#0C0C0D] bg-opacity-50 hover:bg-opacity-75 transition-all duration-300 h-full flex flex-col`}
              >
                {/* Icon */}
                <div className="mb-4">
                  <div
                    className={`inline-flex p-3 rounded-lg ${step.numberBg} bg-opacity-20`}
                  >
                    <Icon className="w-6 h-6" />
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-2xl font-medium text-white mb-3">
                  {step.title}
                </h3>

                {/* Description */}
                <p className="text-white/80 text-sm lg:text-base leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
