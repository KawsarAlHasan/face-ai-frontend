import HeaderDrawerWrapper from "@/ui/HeaderDrawerWrapper";
import Sidebar from "@/ui/Sidebar";
import UserDashboardHeader from "@/ui/UserDashboardHeader";
import { ConfigProvider } from "antd";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="grid grid-cols-12 text-white bg-linear-to-b from-[#000000] to-[#38115f]">
      {/* Desktop Sidebar */}
      <div className="hidden md:block col-span-2 h-screen bg-[#000000] overflow-x-hidden border-e-2 border-[#99009E]/50 shadow ">
        <Sidebar />
      </div>

      {/* Main container */}
      <div className="col-span-12 md:col-span-10 h-screen">
        <div className="h-[90px] flex items-center justify-between md:justify-end md:pr-5 pr-2 bg-[#000000]  ps-2 border-b-2 border-[#99009E]/50 ">
          <HeaderDrawerWrapper />
          <UserDashboardHeader />
        </div>

        {/* Content */}
        <div className=" h-[calc(100vh-90px)]">
          <div
            className="h-full overflow-y-auto  md:p-5 p-2 bg-cover bg-no-repeat bg-center bg-linear-to-b from-[#000000] to-[#38115f]"
            style={{
              backgroundImage: "url('/dashboard-bg.png')",
            }}
          >
            <ConfigProvider
              theme={{
                components: {
                  Select: {
                    clearBg: "transparent",
                    selectorBg: "#38115f",
                    activeBorderColor: "#38115f",
                    activeOutlineColor: "transparent",
                    optionSelectedBg: "#7c7c7f",
                  },
                },
                token: {
                  colorPrimary: "#A855F7",
                  colorIcon: "white",
                  colorBgBase: "transparent",
                  colorText: "white",
                  colorTextPlaceholder: "#9CA3AF",
                },
              }}
            >
              {children}
            </ConfigProvider>
          </div>
        </div>
      </div>
    </div>
  );
};

export default layout;
