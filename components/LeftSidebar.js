import React from 'react'
import Image from 'next/image'
import friendsIcon from '../assets/friends.png'
import groupsIcon from '../assets/groups.png'
import marketplaceIcon from '../assets/marketplace.png'
import memoriesIcon from '../assets/memories.png'
import watchIcon from '../assets/watch.png'
import dropdownIcon from '../assets/dropdown.png'

const sidebarData = [
    {
        icon: friendsIcon,
        title: 'Friends',
    },
    {
        icon: groupsIcon,
        title: 'Groups',
    },
    {
        icon: marketplaceIcon,
        title: 'Marketplace',
    },
    {
        icon: memoriesIcon,
        title: 'Memories',
    },
    {
        icon: watchIcon,
        title: 'Watch',
    },
    {
        icon: dropdownIcon,
        title: 'See more',
    },
]

const LeftSidebar = ({name, url}) => {

    const style = {
        wrapper: `py-[25px] px-[10px] w-[24rem] `,
        sidebarRow: `flex w-full mb-[20px] hover:bg-[#2a2b2c] transition-all duration-300 ease-in-out rounded-lg p-[5px] gap-[10px] cursor-pointer`,
        profileImage: `rounded-full object-cover`,
        sidebarItem: `text-white font-semibold flex items-center  flex-col justify-center text-sm `,
    }

  return (
    <div className={style.wrapper}>
        <div className={style.sidebarRow}>
            <Image 
            className={style.profileImage}
            src={url}
            height={30}
            width={30}
            alt="profile image"
            />
            <div className={style.sidebarItem}>{name}</div>
        </div>
        {sidebarData.map((sidebarDataItem, index) => (
            <div className={style.sidebarRow} key = {index}>
                <Image 
                className={style.sidebarIcon}
                src = {sidebarDataItem.icon}
                height={30}
                width={30}
                alt = 'sidebar icon'
                />
                <div className={style.sidebarItem}>{sidebarDataItem.title}</div>
            </div>
        ))}
    </div>
  )
}

export default LeftSidebar