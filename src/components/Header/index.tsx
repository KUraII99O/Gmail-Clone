import React from "react";
import { Img, Input } from "./..";

interface Props {
  className?: string;
}

export default function Header({ ...props }: Props) {
  const [searchBarValue, setSearchBarValue] = React.useState("");

  return (
    <header {...props} className={`${props.className} flex md:flex-col justify-between items-center gap-5`}>
      <Input
        name="Search Field"
        placeholder={`Search mail`}
        value={searchBarValue}
        onChange={(e: string) => setSearchBarValue(e)}
        prefix={
          <div className="flex h-[15px] w-[15px] items-center justify-center">
            <Img src="images/img_search_gray_700.svg" alt="search" className="h-[15px] w-[15px] cursor-pointer" />
          </div>
        }
        suffix={
          <div className="flex h-[16px] w-[16px] items-center justify-center">
            {searchBarValue?.length > 0 ? (
              <Img
                src="images/img_settings.svg"
                alt="settings"
                onClick={() => setSearchBarValue("")}
                className="h-[16px] w-[16px] cursor-pointer"
              />
            ) : null}
          </div>
        }
        className="flex h-[44px] w-[53%] items-center justify-center gap-[18px] rounded-lg bg-blue-50_01 pl-5 pr-[15px] font-opensans text-sm font-semibold text-gray-600_01 md:w-full"
      />
      <div className="flex w-[12%] items-center justify-between gap-5 md:w-full">
        <a href="#">
          <Img src="images/img_profile.svg" alt="profile icon" className="h-[16px] w-[16px]" />
        </a>
        <Img src="images/img_search.svg" alt="search icon" className="h-[16px] w-[15px]" />
        <Img src="images/img_grid.svg" alt="grid icon" className="h-[14px] w-[14px]" />
        <a href="#">
          <Img src="images/img_avatar.png" alt="avatar image" className="h-[27px] w-[27px] rounded-[50%]" />
        </a>
      </div>
    </header>
  );
}
