import React from "react";

import { Text } from "components";

const FrameOnePage = () => {
  return (
    <>
      <div className="flex flex-col font-poppins items-center justify-start mx-auto w-full">
        <div className="bg-purple-700 flex flex-col items-center justify-center p-[162px] md:px-10 sm:px-5 w-full">
          <Text
            className="mt-[186px] md:text-5xl text-[150px] text-white-A700"
            size="txtPoppinsExtraBold150"
          >
            Mentor’s Lounge
          </Text>
          <Text
            className="mb-[151px] md:text-5xl text-[64px] text-center text-white-A700"
            size="txtPoppinsSemiBold64"
          >
            An App, Web App and Admin Panel
          </Text>
        </div>
      </div>
    </>
  );
};

export default FrameOnePage;
