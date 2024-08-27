import { ReactNode } from "react"
import phoneImg from "@/assets/imgs/phone.png"
import backgroundImg from "@/assets/imgs/background-dark.jpg"

interface Props {
  children: ReactNode
}

export function Frame({ children }: Props) {
  return (
    <div className={"relative h-phone w-phone"}>
      <div
        className={
          "absolute bottom-0 left-0 right-0 top-0 my-4 ml-[1.175rem] mr-[1.15rem] overflow-hidden rounded-[58px]"
        }
      >
        <div className={"h-full w-full"}>{children}</div>

        <img
          className={"absolute bottom-0 left-0 right-0 top-0 -z-10"}
          src={backgroundImg}
          alt={""}
        />
      </div>

      <img
        className={"pointer-events-none relative z-10 h-full w-full"}
        src={phoneImg}
        alt={""}
      />
    </div>
  )
}
