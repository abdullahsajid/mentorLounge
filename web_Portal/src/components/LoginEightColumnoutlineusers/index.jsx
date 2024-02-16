import React from "react";

import { Img, List, Text } from "components";

const LoginEightColumnoutlineusers = (props) => {
  return (
    <>
      <div className={props.className}>
        <List
          className="flex flex-col gap-[25px] items-center w-full"
          orientation="vertical"
        >
          {/* <div className="flex flex-1 flex-col items-center justify-start w-full">
            <div className="flex flex-col items-center justify-start w-full">
              <div className="bg-gray-100_03 border border-gray-900_1e border-solid h-[69px] md:px-10 sm:px-5 px-[64.22px] py-[20.55px] relative rounded-[34px] w-[470px] md:w-full">
                {!!props?.logintoshiftwor ? (
                  <Text
                    className="absolute h-max inset-y-[0] left-[14%] my-auto sm:text-[16.55px] md:text-[18.55px] text-[20.55px] text-gray-900_7f w-auto"
                    size="txtPoppinsRegular2055"
                  >
                    {props?.logintoshiftwor}
                  </Text>
                ) : null}
                {!!props?.outlineusers ? (
                  <Img
                    className="absolute h-[69px] inset-[0] justify-center m-auto rounded-[34px]"
                    alt="outlineusers"
                    src={props?.outlineusers}
                  />
                ) : null}
              </div>
            </div>
          </div> */}
          <div className="flex flex-1 flex-col items-center justify-start w-full">
            <div className="flex flex-col items-center justify-start w-full">
              <div className="bg-gray-100_03 border border-gray-900_1e border-solid h-[69px] md:px-10 sm:px-5 px-[64.22px] py-[20.55px] relative rounded-[34px] w-[470px] md:w-full">
                <Img
                  className="absolute h-[69px] inset-[0] justify-center m-auto rounded-[34px]"
                  src="images/img_linearmessages.svg"
                  alt="linearmessages"
                />
                <input
                  className="absolute bottom-[24%] left-[14%] sm:text-[16.55px] 
                  bg-gray-100_03 md:text-[18.55px] text-[20.55px] text-gray-900_7f w-auto sm:bottom-[32%]"
                  size="txtPoppinsRegular2055"
                  placeholder={`${props?.logintoshiftwor1}`}
                />
              </div>
            </div>
          </div>
          {/* <div className="flex flex-1 flex-col items-center justify-start w-full">
            <div className="flex flex-col items-center justify-start w-full">
              <div className="bg-gray-100_03 border border-gray-900_1e border-solid h-[69px] md:px-10 sm:px-5 px-[64.22px] py-[20.55px] relative rounded-[34px] w-[470px] md:w-full">
                {!!props?.logintoshiftwor2 ? (
                  <Text
                    className="absolute bottom-[24%] left-[14%] sm:text-[16.55px] md:text-[18.55px] text-[20.55px] text-gray-900_7f w-auto"
                    size="txtPoppinsMedium2055"
                  >
                    {props?.logintoshiftwor2}
                  </Text>
                ) : null}
                {!!props?.linearelectroni ? (
                  <Img
                    className="absolute h-[69px] inset-[0] justify-center m-auto rounded-[34px]"
                    alt="linearelectroni"
                    src={props?.linearelectroni}
                  />
                ) : null}
              </div>
            </div>
          </div> */}
        </List>
        <List
          className="flex flex-col gap-[25px] items-center w-full"
          orientation="vertical"
        >
          <div className="flex flex-1 flex-col items-center justify-start w-full">
            <div className="flex flex-col items-center justify-start w-full">
              <div className="bg-gray-100_03 border border-gray-900_1e border-solid h-[69px] md:px-10 sm:px-5 px-[64.22px] py-[20.55px] relative rounded-[34px] w-[470px] md:w-full">
                <div className="flex flex-row h-full items-start justify-between my-auto w-[81%]">
                  {!!props?.logintoshiftwor3 ? (
                    <>
                    <Img
                      className="absolute h-[69px] inset-[0] justify-center m-auto rounded-[34px]"
                      src="images/img_linearsecurity.svg"
                      alt="linearsecurity"
                    />
                    <input
                      className="absolute bottom-[24%] left-[14%] mt-0.5 sm:text-[16.55px] md:text-[18.55px] text-[20.55px]
                       text-gray-900_7f w-auto bg-gray-100_03 sm:bottom-[32%]"
                      size="txtPoppinsRegular2055"
                      placeholder={`${props?.logintoshiftwor3}`}
                    />
                    </>
                  ) : null}
                  {!!props?.eye ? (
                    <Img
                      className="absolute right-5 h-[30px] w-[30px]"
                      alt="eye"
                      src={props?.eye}
                    />
                  ) : null}
                </div>
                
              </div>
            </div>
          </div>
          {/* <div className="flex flex-1 flex-col items-center justify-start w-full">
            <div className="flex flex-col items-center justify-start w-full">
              <div className="bg-gray-100_03 border border-gray-900_1e border-solid h-[69px] md:px-10 sm:px-5 px-[64.22px] py-[20.55px] relative rounded-[34px] w-[470px] md:w-full">
                <div className="flex flex-row h-full items-start justify-between ml-auto my-auto w-[81%]">
                  {!!props?.logintoshiftwor4 ? (
                    <Text
                      className="mt-0.5 sm:text-[16.55px] md:text-[18.55px] text-[20.55px] text-gray-900_7f w-auto"
                      size="txtPoppinsRegular2055"
                    >
                      {props?.logintoshiftwor4}
                    </Text>
                  ) : null}
                  {!!props?.eye1 ? (
                    <Img
                      className="h-[30px] w-[30px]"
                      alt="eye"
                      src={props?.eye1}
                    />
                  ) : null}
                </div>
                {!!props?.linearsecurity ? (
                  <Img
                    className="absolute h-[69px] inset-[0] justify-center m-auto rounded-[34px]"
                    alt="linearsecurity"
                    src={props?.linearsecurity}
                  />
                ) : null}
              </div>
            </div>
          </div> */}
        </List>
        <div className="flex sm:flex-row flex-row gap-[19.27px] items-start justify-start w-auto md:w-full">
          <Img
            className="h-[25px] w-[25px]"
            src="images/img_linear.svg"
            alt="linear"
          />
          {props?.bycheckingthe}
        </div>
      </div>
    </>
  );
};

LoginEightColumnoutlineusers.defaultProps = {
  logintoshiftwor1: "Enter your email",
  bycheckingthe: (
    <Text
      className="leading-[25.00px] max-w-[425px] md:max-w-full text-[17.98px] text-gray-900_66"
      size="txtAclonicaRegular1798"
    >
      <span className="text-gray-900_66 font-proximasoft text-left font-medium">
        By checking the box, you are agreeing to all of our{" "}
      </span>
      <a
        href="javascript:"
        className="text-blue-A200 font-proximasoft text-left font-medium underline"
      >
        Terms and services
      </a>
      <span className="text-gray-900_66 font-proximasoft text-left font-medium">
        {" "}
        and{" "}
      </span>
      <a
        href="javascript:"
        className="text-blue-A200 font-proximasoft text-left font-medium underline"
      >
        Privacy Policy
      </a>
      <span className="text-gray-900_66 font-proximasoft text-left font-medium">
        .
      </span>
    </Text>
  ),
};

export default LoginEightColumnoutlineusers;
