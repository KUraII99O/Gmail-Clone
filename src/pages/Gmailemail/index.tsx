import React from "react";
import { Helmet } from "react-helmet";
import { Heading, Img, Text } from "../../components";
import GmailEmailEmail from "../../components/GmailEmailEmail";
import Header from "../../components/Header";
import Sidebar1 from "../../components/Sidebar1";
import Sidebar2 from "../../components/Sidebar2";

const data = [
  {
    acmeincone: "images/img_signal_gray_400.svg",
    acmeinctwo: "Acme Inc. ",
    email: "Insights: The latest in industrial equipment and tools",
    date: "12/12/23",
  },
  {
    acmeincone: "images/img_signal_gray_400.svg",
    acmeinctwo: "Travel Tales",
    email: "Our latest Adventures and Destinations",
    date: "12/12/23",
  },
  {
    acmeincone: "images/img_signal.svg",
    acmeinctwo: "Delta Enterprises.",
    email: "Delta Weekly News: Learn about important safety tips before you fly!",
    date: "12/12/23",
  },
  {
    acmeincone: "images/img_signal_gray_400.svg",
    acmeinctwo: "Epsilon Solutions.",
    email: "Insights: Industry trends and best practices",
    date: "12/12/23",
  },
  {
    acmeincone: "images/img_signal_gray_400.svg",
    acmeinctwo: "Foodie Finds",
    email: "Our Complete list of Recipe Ideas and Restaurant Reviews!",
    date: "12/12/23",
  },
  {
    acmeincone: "images/img_signal_gray_400.svg",
    acmeinctwo: "Company Name",
    email: "Lorem ipsum dolor sit amet consectetur. Ac eget eu eget ullamcorper tellus sem scelerisque sit ante. ",
    date: "12/12/23",
  },
  { acmeincone: "images/img_signal.svg", acmeinctwo: "Fashion Forward", date: "12/12/23" },
  { acmeincone: "images/img_signal.svg", acmeinctwo: "Tech Savvy", date: "12/12/23" },
  {
    acmeincone: "images/img_signal_gray_400.svg",
    acmeinctwo: "Company Name",
    email: "Lorem ipsum dolor sit amet consectetur. Ac eget eu eget ullamcorper tellus sem scelerisque sit ante.",
    date: "12/12/23",
  },
];

export default function GmailemailPage() {
  return (
    <>
      <Helmet>
        <title>Gmail Inbox - Organize Your Emails Efficiently</title>
        <meta
          name="description"
          content="Effortlessly manage your emails with Gmail Inbox. Access features like Compose, Starred, Snoozed, and Sent to keep your communication streamlined. Stay on top of your work, personal, and promotional messages with categorized views."
        />
      </Helmet>

      {/* main layout section */}
      <div className="w-full bg-gray-50 pb-[26px] pr-3 pt-[25px] sm:py-5">
        {/* sidebar section */}
        <div className="flex items-start gap-2.5 md:flex-col">
          {/* sidebar top section */}
          <Sidebar2 />
          <div className="flex flex-1 flex-col gap-[9px] md:self-stretch md:p-5">
            {/* header section */}
            <Header />
            <div className="flex items-start gap-3 md:flex-col">
              {/* content section */}
              <div className="flex-1 rounded-[15px] bg-white-A700 pb-[389px] pr-4 pt-4 md:self-stretch md:pb-5">
                <div className="flex flex-col">
                  <div className="ml-[18px] flex items-center justify-between gap-5 md:ml-0">
                    <div className="flex w-[9%] items-center justify-between gap-5">
                      <Img
                        src="images/img_television_blue_gray_900_01.svg"
                        alt="television image"
                        className="h-[13px]"
                      />
                      <Img src="images/img_qrcode.svg" alt="qr code" className="h-[11px] w-[11px]" />
                      <Img src="images/img_menu_dots.svg" alt="menu dots" className="h-[12px]" />
                    </div>
                    <div className="flex items-center gap-[23px] self-end">
                      <Text size="xs" as="p" className="tracking-[0.14px] !text-blue_gray-400">
                        1-16 of 16
                      </Text>
                      <Img src="images/img_maximize.svg" alt="maximize icon" className="h-[10px] self-end" />
                    </div>
                  </div>
                  <div className="relative z-[1] ml-2 mt-7 flex w-[46%] flex-col items-start gap-4 md:ml-0 md:w-full">
                    <div className="ml-2 flex items-center justify-between gap-5 self-stretch md:ml-0">
                      <div className="flex items-center gap-4 self-end">
                        <Img
                          src="images/img_contrast_blue_a400.svg"
                          alt="contrast image"
                          className="h-[13px] w-[13px]"
                        />
                        <Heading as="h1" className="tracking-[-0.04px] !text-blue-A400">
                          Primary
                        </Heading>
                      </div>
                      <div className="flex items-center gap-[13px]">
                        <Img
                          src="images/img_television_gray_600_02.svg"
                          alt="promotions tv"
                          className="h-[17px] w-[17px]"
                        />
                        <Heading as="h2" className="self-start tracking-[-0.04px]">
                          Promotions
                        </Heading>
                      </div>
                      <div className="flex items-center gap-3.5 self-start">
                        <Img
                          src="images/img_settings_gray_600_02.svg"
                          alt="settings icon"
                          className="h-[13px] self-end"
                        />
                        <Heading as="h3" className="tracking-[-0.04px]">
                          Social
                        </Heading>
                      </div>
                    </div>
                    <div className="h-[2px] w-[40%] bg-blue-A400" />
                  </div>

                  {/* email list section */}
                  <div className="relative mt-[-2px] flex flex-col gap-px">
                    {data.map((d, index) => (
                      <GmailEmailEmail {...d} key={"emailList" + index} className="bg-gray-100 pb-2 pt-[9px]" />
                    ))}
                  </div>
                </div>
              </div>

              {/* sidebar utilities section */}
              <Sidebar1 />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
