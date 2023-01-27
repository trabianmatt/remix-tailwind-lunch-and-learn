import { Outlet } from "@remix-run/react";
import { NavBar } from "~/components";

export default function InboxLayout() {
  return (
    <div>
      <NavBar />
      <div className="relative flex flex-col min-h-screen">
        <div className="flex-grow w-full mx-auto max-w-7xl lg:flex xl:px-8">
          {/* Left sidebar & main wrapper */}
          <div className="flex-1 min-w-0 bg-white xl:flex">
            <div className="bg-white border-b border-gray-200 xl:w-64 xl:flex-shrink-0 xl:border-b-0 xl:border-r xl:border-gray-200">
              <div className="h-full py-6 pl-4 pr-6 sm:pl-6 lg:pl-8 xl:pl-0">
                {/* Start left column area */}
                <div className="relative h-full" style={{ minHeight: "12rem" }}>
                  <div className="absolute inset-0 border-2 border-gray-200 border-dashed rounded-lg" />
                </div>
                {/* End left column area */}
              </div>
            </div>
            <div className="bg-white lg:min-w-0 lg:flex-1">
              <div className="h-full px-4 py-6 sm:px-6 lg:px-8">
                {/* Start main area*/}
                <Outlet />
                {/* End main area */}
              </div>
            </div>
          </div>
          <div className="pr-4 bg-gray-50 sm:pr-6 lg:flex-shrink-0 lg:border-l lg:border-gray-200 lg:pr-8 xl:pr-0">
            <div className="h-full py-6 pl-6 lg:w-80">
              {/* Start right column area */}
              <div className="relative h-full" style={{ minHeight: "16rem" }}>
                <div className="absolute inset-0 border-2 border-gray-200 border-dashed rounded-lg" />
              </div>
              {/* End right column area */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
