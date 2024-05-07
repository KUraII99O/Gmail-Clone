import React from "react";
import { Img } from "./..";
import { Sidebar, sidebarClasses } from "react-pro-sidebar";

interface Props {
  className?: string;
}

export default function Sidebar1({ ...props }: Props) {
  return (
    <Sidebar
      {...props}
      width="25px !important"
      rootStyles={{ [`.${sidebarClasses.container}`]: { gap: 32 } }}
      className={`${props.className} flex flex-col h-screen mt-[18px] gap-8 top-0 !sticky overflow-auto md:hidden`}
    >
      <Img src="images/img_thumbs_up_blue_a200.svg" alt="thumbs up image" className="h-[16px] w-[16px]" />
      <Img src="images/img_close_white_a700.svg" alt="close button" className="h-[17px] w-[17px]" />
      <Img src="images/img_lock.svg" alt="lock image" className="h-[16px] w-[16px]" />
      <div className="h-[2px] w-[23px] self-stretch border border-solid border-gray-100_01" />
      <Img src="images/img_plus_gray_800_01.svg" alt="add button" className="h-[13px] w-[13px]" />
    </Sidebar>
  );
}
