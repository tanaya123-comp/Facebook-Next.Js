import React from 'react'
import { useSession } from 'next-auth/client'
import {
    BellIcon,
    CalendarIcon,
    ChatIcon,
    ChevronDownIcon,
    ClockIcon,
    DesktopComputerIcon,
    HomeIcon,
    ShoppingBagIcon,
    UserGroupIcon,
    UserIcon,
    ViewGridIcon,
  } from "@heroicons/react/solid";
  import {
    FlagIcon,
    PlayIcon,
    SearchIcon,
    ShoppingCartIcon,
  } from "@heroicons/react/outline";
  import './SideBarRow'
import SideBarRow from './SideBarRow';

function SideBar() {

    const [session,loading]=useSession();
    // console.log("In here");
    // console.log(session.user.name);
    const image=session.user.image;

    return (
        <div className="p-2 mt-5 max-w-[600px] xl:min-w-[300px]">
        {/* <SideBarRow Icon={image} title={session.user.name}/> */}
        <SideBarRow Icon={UserIcon} title="friends"/>
        <SideBarRow Icon={UserGroupIcon} title="Groups"/>
        <SideBarRow Icon={ShoppingBagIcon} title="Market Place"/>

        <SideBarRow Icon={DesktopComputerIcon} title="Watch"/>
        <SideBarRow Icon={CalendarIcon} title="Events"/>
        <SideBarRow Icon={ClockIcon} title="Memories"/>
        <SideBarRow Icon={ChevronDownIcon} title="more"/>
            
        </div>
    )
}

export default SideBar
