import React, { FC, ReactElement, useEffect } from "react"
import { FiShoppingCart } from "react-icons/fi"
import { AiOutlineMenu } from "react-icons/ai"
import { useRecoilState, useSetRecoilState } from "recoil"
import { activeMenuState } from "../contexts/activeMenu"
import { TooltipComponent } from "@syncfusion/ej2-react-popups"
import { RiNotification3Line } from "react-icons/ri"
import { clickedState, handleClick, userState } from "../contexts/userState"
import avatar from "../data/avatar.jpg"
import { MdKeyboardArrowDown } from "react-icons/md"
import Cart from "./Cart"
import Notification from "./Notification"
import UserProfile from "./UserProfile"
import Chat from "./Chat"
import { screenSizeState } from "../contexts/screenSizeState"

const Navbar = () => {
  const [activeMenu, setActiveMenu] = useRecoilState(activeMenuState)
  const [isClicked, setClicked] = useRecoilState(clickedState)
  const [screenSize, setScreenSize] = useRecoilState(screenSizeState)
  const setUser = useSetRecoilState(userState)

  useEffect(() => {
    const handleResize = () => setScreenSize(window.innerWidth)
    window.addEventListener("resize", handleResize)
    handleResize()
    return () => {
      window.removeEventListener("resize", handleResize)
    }
  }, [setScreenSize])

  useEffect(() => {
    if (screenSize <= 900) {
      setActiveMenu(false)
    } else {
      setActiveMenu(true)
    }
  }, [screenSize, setActiveMenu])

  return (
    <div className="flex justify-between p-2 md:ml-6 md:mr-6 relative">
      <NavButton
        title="Menu"
        customFunc={() => setActiveMenu((prev) => !prev)}
        color="blue"
        icon={<AiOutlineMenu />}
        dotColor=""
      />
      <div className="flex ">
        <NavButton title="Cart" customFunc={() => {}} color="blue" dotColor="" icon={<FiShoppingCart />} />
        <NavButton
          title="Notifications"
          dotColor="#03C9D7"
          customFunc={() => handleClick(setUser, "notification")}
          color="blue"
          icon={<RiNotification3Line />}
        />
        <TooltipComponent content="Profile" position="BottomCenter">
          <div
            className="flex items-center gap-2 cursor-pointer p-1 hover:bg-light-gray rounded-lg"
            onClick={() => handleClick(setUser, "userProfile")}>
            <img className="rounded-full w-8 h-8" src={avatar} alt="user-profile" />
            <p>
              <span className="text-gray-400 text-14">Hi,</span>{" "}
              <span className="text-gray-400 font-bold ml-1 text-14">Michael</span>
            </p>
            <MdKeyboardArrowDown className="text-gray-400 text-14" />
          </div>
        </TooltipComponent>
        {isClicked.cart && <Cart />}
        {isClicked.chat && <Chat />}
        {isClicked.notification && <Notification />}
        {isClicked.userProfile && <UserProfile />}
      </div>
    </div>
  )
}

type Props = {
  title: string
  customFunc: React.MouseEventHandler<HTMLButtonElement>
  icon: ReactElement
  color: string
  dotColor: string
}
const NavButton: FC<Props> = ({ title, customFunc, icon, color, dotColor }) => {
  return (
    <TooltipComponent content={title} position="BottomCenter">
      <button
        type="button"
        onClick={customFunc}
        style={{ color }}
        className="relative text-xl rounded-full p-3 hover:bg-light-gray">
        <span style={{ background: dotColor }} className="absolute inline-flex rounded-full h-2 w-2 right-2 top-2" />
        {icon}
      </button>
    </TooltipComponent>
  )
}

export default Navbar
