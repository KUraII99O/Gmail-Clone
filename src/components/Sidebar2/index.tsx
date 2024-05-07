import React from "react";
import { Img, Heading } from "./..";
import { MenuItem, Menu, Sidebar, sidebarClasses } from "react-pro-sidebar";

interface Props {
  className?: string;
}

export default function Sidebar2({ ...props }: Props) {
  const [collapsed, setCollapsed] = React.useState(false);

  //use this function to collapse/expand the sidebar
  //function collapseSidebar() {
  //    setCollapsed(!collapsed)
  //}

  return (
    <Sidebar
      {...props}
      width="215px !important"
      collapsedWidth="80px !important"
      collapsed={collapsed}
      rootStyles={{ [`.${sidebarClasses.container}`]: { gap: 35 } }}
      className={`${props.className} flex flex-col h-screen mt-2 gap-[35px] top-0 md:p-5 !sticky overflow-auto md:hidden`}
    >
      <div className="ml-[21px] flex w-[63%] items-center gap-[18px] md:ml-0">
        <Img src="images/img_megaphone.svg" alt="megaphone image" className="h-[11px]" />
        <Img src="images/img_sidebar_logo.png" alt="sidebar logo" className="h-[26px] w-[87px] object-contain" />
      </div>
      <Menu
        menuItemStyles={{
          button: {
            padding: "6px",
            alignSelf: "start",
            color: "#404144",
            fontWeight: 400,
            fontSize: "13px",
            gap: "21px",
            borderTopRightRadius: "14px",
            borderBottomRightRadius: "14px",
            borderBottomLeftRadius: "0px",
            borderTopLeftRadius: "0px",
            [`&:hover, &.ps-active`]: {
              color: "#333333",
              fontWeight: "700 !important",
              backgroundColor: "#d3e3fd !important",
            },
          },
        }}
        className="flex w-full flex-col items-center self-stretch"
      >
        <div className="flex flex-col gap-[5px] self-stretch">
          <MenuItem icon={<Img src="images/img_edit.svg" alt="edit icon" className="h-[16px] w-[17px]" />}>
            Compose
          </MenuItem>
          <MenuItem
            icon={<Img src="images/img_contrast.svg" alt="contrast icon" className="h-[13px] w-[13px]" />}
            suffix={<div className="flex w-[17%] flex-col" />}
          >
            Inbox
          </MenuItem>
          <MenuItem icon={<Img src="images/img_signal.svg" alt="signal icon" className="h-[9px] w-[10px]" />}>
            Starred
          </MenuItem>
          <MenuItem icon={<Img src="images/img_clock.svg" alt="clock icon" className="h-[14px] w-[14px]" />}>
            Snoozed
          </MenuItem>
          <MenuItem icon={<Img src="images/img_user.svg" alt="user icon" className="h-[8px] w-[9px]" />}>Sent</MenuItem>
          <MenuItem icon={<Img src="images/img_file.svg" alt="file icon" className="h-[14px] w-[11px]" />}>
            Drafts
          </MenuItem>
          <MenuItem icon={<Img src="images/img_arrow_down.svg" alt="arrow down icon" className="h-[6px] w-[9px]" />}>
            More
          </MenuItem>
        </div>
        <div className="mt-[15px] flex w-[83%] items-start justify-between gap-5 md:w-full">
          <Heading size="md" as="p" className="!font-opensans tracking-[-0.07px] !text-blue_gray-900">
            Labels
          </Heading>
          <Img src="images/img_plus.svg" alt="add icon" className="h-[12px] w-[12px]" />
        </div>
        <div className="flex flex-col gap-[5px] self-stretch">
          <MenuItem icon={<Img src="images/img_upload.svg" alt="upload icon" className="h-[11px] w-[14px]" />}>
            Categories
          </MenuItem>
          <MenuItem icon={<Img src="images/img_television.svg" alt="television icon" className="h-[10px] w-[14px]" />}>
            Team
          </MenuItem>
          <MenuItem icon={<Img src="images/img_close.svg" alt="close icon" className="h-[11px] w-[14px]" />}>
            News
          </MenuItem>
          <MenuItem icon={<Img src="images/img_thumbs_up.svg" alt="thumbs up icon" className="h-[11px] w-[14px]" />}>
            Work
          </MenuItem>
          <MenuItem
            icon={<Img src="images/img_close_red_500.svg" alt="close red icon" className="h-[11px] w-[14px]" />}
          >
            Personal
          </MenuItem>
        </div>
      </Menu>
    </Sidebar>
  );
}
