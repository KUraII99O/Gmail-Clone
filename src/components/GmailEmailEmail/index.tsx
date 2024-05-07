import React from "react";
import { Text, Img } from "./..";

interface Props {
  className?: string;
  acmeincone?: string;
  acmeinctwo?: string;
  email?: string;
  date?: string;
}

export default function GmailEmailEmail({
  acmeincone = "images/img_signal_gray_400.svg",
  acmeinctwo = "Acme Inc. ",
  email = "Insights: The latest in industrial equipment and tools",
  date = "12/12/23",
  ...props
}: Props) {
  return (
    <div
      {...props}
      className={`${props.className} flex sm:flex-col justify-between items-center pl-[15px] pr-[77px] gap-5 md:pr-5 border-gray-300 border-b border-solid flex-1`}
    >
      <div className="flex w-[47%] justify-between gap-5 sm:w-full sm:flex-col">
        <div className="flex w-[22%] items-center justify-center gap-[15px] self-start sm:w-full">
          <div className="h-[13px] w-[13px] rounded-[1px] border border-solid border-gray-400" />
          <Img src={acmeincone} alt="companylogo" className="h-[9px] w-[10px]" />
          <Text as="p" className="!font-medium tracking-[-0.04px] !text-gray-600">
            {acmeinctwo}
          </Text>
        </div>
        <Text as="p" className="self-end !font-medium tracking-[-0.04px] !text-gray-600">
          {email}
        </Text>
      </div>
      <Text size="s" as="p" className="self-start tracking-[-0.04px]">
        {date}
      </Text>
    </div>
  );
}
