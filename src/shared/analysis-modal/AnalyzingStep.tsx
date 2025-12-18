import Image from "next/image";

interface AnalyzingStepProps {
  image: string;
}

export function AnalyzingStep({ image }: AnalyzingStepProps) {
  return (
    <div className="px-6 pb-6">
      <h2 className="text-xl font-bold text-white mb-2">Analyzing Your Face</h2>
      <p className="text-sm text-gray-400 mb-6">
        Our AI is processing your facial features...
      </p>

      <div className="relative rounded-xl overflow-hidden mb-6 bg-linear-to-br from-[#9810FA]/10 to-[#E60076]/10 aspect-video flex items-center justify-center">
        <img
          src={image || "/placeholder.svg"}
          alt="Analyzing face"
          className="w-full h-[400px] object-cover opacity-50"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="relative w-20 h-20">
            <div className="absolute inset-0 rounded-full border-4 border-purple-500/30 animate-spin" />
            <div className="absolute inset-0 rounded-full border-4 border-transparent border-t-purple-500 animate-spin" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-12 h-12 bg-linear-to-br from-pink-500 to-purple-600 rounded-full flex items-center justify-center">
                <Image
                  src={"/favicon.png"}
                  alt="logo"
                  width={200}
                  height={200}
                  className="w-[600px] h-fit"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <p className="text-center text-gray-400 text-sm">Calculating scores...</p>
    </div>
  );
}
