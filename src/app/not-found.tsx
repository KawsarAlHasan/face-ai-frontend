"use client";
import React from "react";
import Link from "next/link";
import { FiArrowLeft, FiHome, FiWifi, FiAlertTriangle } from "react-icons/fi";

const NotFound: React.FC = () => {
  const handleGoBack = () => {
    globalThis.history.back();
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900 text-white transition-colors duration-300">
      <div className="container px-4 mx-auto">
        <div className="max-w-5xl mx-auto relative overflow-hidden bg-gray-800/70 border border-purple-900/30 backdrop-blur-md rounded-2xl shadow-xl transition-all duration-300">
          {/* Decorative Elements */}
          <div className="absolute -top-20 -right-20 w-64 h-64 bg-linear-to-br from-purple-600/20 to-pink-600/20 rounded-full blur-3xl -z-10"></div>
          <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-linear-to-br from-blue-600/20 to-cyan-600/20 rounded-full blur-3xl -z-10"></div>

          {/* Circuit Lines */}
          <div className="absolute inset-0 overflow-hidden opacity-10">
            <div className="absolute top-1/4 left-0 w-full h-px bg-linear-to-r from-transparent via-purple-500 to-transparent animate-pulse"></div>
            <div
              className="absolute top-2/4 left-0 w-full h-px bg-linear-to-r from-transparent via-indigo-500 to-transparent animate-pulse"
              style={{ animationDelay: "1s" }}
            ></div>
            <div
              className="absolute top-3/4 left-0 w-full h-px bg-linear-to-r from-transparent via-cyan-500 to-transparent animate-pulse"
              style={{ animationDelay: "2s" }}
            ></div>

            <div
              className="absolute left-1/4 top-0 h-full w-px bg-linear-to-b from-transparent via-purple-500 to-transparent animate-pulse"
              style={{ animationDelay: "0.5s" }}
            ></div>
            <div
              className="absolute left-2/4 top-0 h-full w-px bg-linear-to-b from-transparent via-indigo-500 to-transparent animate-pulse"
              style={{ animationDelay: "1.5s" }}
            ></div>
            <div
              className="absolute left-3/4 top-0 h-full w-px bg-linear-to-b from-transparent via-cyan-500 to-transparent animate-pulse"
              style={{ animationDelay: "2.5s" }}
            ></div>
          </div>

          <div className="p-8 md:p-12 flex flex-col md:flex-row items-center">
            {/* Left Side */}
            <div className="w-full md:w-1/2 text-center md:text-left mb-8 md:mb-0">
              <div className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium mb-4 bg-red-900/40 text-red-300 border border-red-800/50">
                <FiAlertTriangle className="mr-2" />
                <span>Error 404</span>
              </div>

              <h1 className="text-5xl md:text-6xl font-extrabold mb-4 text-transparent bg-clip-text bg-linear-to-r from-purple-400 via-pink-400 to-cyan-400">
                Oops!
              </h1>

              <p className="text-xl md:text-2xl font-bold mb-2 text-white">
                Page not found
              </p>

              <p className="text-base mb-8 max-w-md text-gray-300">
                The page you are looking for might have been removed, had its
                name changed, or is temporarily unavailable.
              </p>

              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                <button
                  onClick={handleGoBack}
                  className="group relative flex items-center justify-center px-6 py-3 rounded-xl text-sm font-medium bg-gray-800 text-white border border-purple-600/30 hover:bg-gray-700 transition-all duration-300"
                >
                  <FiArrowLeft className="mr-2 group-hover:-translate-x-1 transition-transform duration-300" />
                  Go Back
                </button>

                <Link
                  href="/"
                  className="group relative flex items-center justify-center px-6 py-3 rounded-xl text-sm font-medium bg-linear-to-r from-purple-600 to-pink-600 text-white hover:from-purple-700 hover:to-pink-700 transition-all duration-300"
                >
                  <FiHome className="mr-2 group-hover:scale-110 transition-transform duration-300" />
                  Return to Homepage
                </Link>
              </div>
            </div>

            {/* Right Side */}
            <div className="w-full md:w-1/2 flex justify-center">
              <div className="relative">
                <div className="w-64 h-64 md:w-80 md:h-80 rounded-full bg-gray-700/50 border border-purple-900/30 flex items-center justify-center relative overflow-hidden">
                  {/* Animated Circles */}
                  <div className="absolute inset-0">
                    <div
                      className="absolute top-1/2 left-1/2 w-40 h-40 rounded-full border-4 border-dashed border-purple-500 opacity-20 animate-spin-slow"
                      style={{ animationDuration: "15s" }}
                    ></div>
                    <div
                      className="absolute top-1/2 left-1/2 w-60 h-60 rounded-full border-4 border-dashed border-cyan-500 opacity-10 animate-spin-slow"
                      style={{
                        animationDuration: "30s",
                        animationDirection: "reverse",
                      }}
                    ></div>
                  </div>

                  {/* 404 Text */}
                  <div className="relative z-10 text-center">
                    <div className="text-9xl font-black text-transparent bg-clip-text bg-linear-to-b from-gray-700 to-gray-900">
                      404
                    </div>
                    <div className="mt-4 flex justify-center text-red-400 relative">
                      <FiWifi size={48} className="animate-pulse" />
                      <div className="absolute top-1/2 left-1/2 w-12 h-1 bg-current transform -translate-x-1/2 rotate-45"></div>
                    </div>
                  </div>
                </div>

                {/* Floating Elements */}
                <div
                  className="absolute -top-4 -right-4 w-12 h-12 rounded-lg rotate-12 animate-float bg-linear-to-br from-purple-600/30 to-pink-600/30 backdrop-blur-md border border-purple-500/20"
                  style={{ animationDelay: "0s" }}
                ></div>
                <div
                  className="absolute -bottom-6 -left-6 w-16 h-16 rounded-lg -rotate-12 animate-float bg-linear-to-br from-blue-600/30 to-cyan-600/30 backdrop-blur-md border border-blue-500/20"
                  style={{ animationDelay: "1s" }}
                ></div>
                <div
                  className="absolute top-1/2 -right-8 w-10 h-10 rounded-full animate-float bg-linear-to-br from-cyan-600/30 to-blue-600/30 backdrop-blur-md border border-cyan-500/20"
                  style={{ animationDelay: "2s" }}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Animations */}
      <style jsx>{`
        @keyframes spin-slow {
          from {
            transform: translate(-50%, -50%) rotate(0deg);
          }
          to {
            transform: translate(-50%, -50%) rotate(360deg);
          }
        }

        @keyframes float {
          0% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-10px) rotate(5deg);
          }
          100% {
            transform: translateY(0px) rotate(0deg);
          }
        }

        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }

        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default NotFound;
