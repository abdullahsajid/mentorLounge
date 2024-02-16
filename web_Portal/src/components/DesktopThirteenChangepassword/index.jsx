import React from "react";

import { Text } from "components";

const DesktopThirteenChangepassword = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex flex-col items-center justify-start w-full">
          <div className="flex flex-col items-start justify-start w-full">
            <div className="flex flex-row items-center justify-between w-full">
              <Text
                className="text-[17.79px] text-gray-900"
                size="txtProximaSoftSemiBold1779"
              >
                {props?.password}
              </Text>
              <div className="flex flex-col items-center justify-center p-[12.7px] w-auto">
                <Text
                  className="text-[17.79px] text-gray-900 text-right underline w-auto"
                  size="txtProximaSoftMedium1779Gray900"
                >
                  {props?.update}
                </Text>
              </div>
            </div>
            <Text
              className="mt-0.5 text-[17.79px] text-gray-900_90"
              size="txtProximaSoftRegular1779"
            >
              {props?.duration}
            </Text>
          </div>
        </div>
      </div>
    </>
  );
};

DesktopThirteenChangepassword.defaultProps = {
  password: "Password",
  update: "Update",
  duration: "Last updated 6 months ago",
};

export default DesktopThirteenChangepassword;
