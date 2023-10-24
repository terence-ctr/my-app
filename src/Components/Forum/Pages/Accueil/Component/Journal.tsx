import React from "react";
import {BiUser,BiHash} from "react-icons/bi"
import {MdBookmarks} from "react-icons/md"
import {FaMedal} from 'react-icons/fa'
import {HiUsers} from 'react-icons/hi2'
import {PiMedal, PiMedalThin} from 'react-icons/pi'
import Main from "./New";
import Footer from "./Footer";
import HashTag from "./Hash";
import SeConnecter from "./SeConnecter";
import ListUser from "./UsersList";
import Userinfo from "./UserInfo";
import InfoUser from "./UserInfo";
import Classment from "./Classement";


export default function Journal ()  {
  return (
    <div className="bg-[#202433] flex flex-row justify-center w-full">
    <div className="Body bg-brand-colormain-color w-[1345px] h-[930px ]">
      <div className="Body relative w-[1307px] h-[930px] overflow">
        <div className="absolute w-[956px] h-[940px] top-[-20px] left-[-2px]">
          <div className="absolute w-[694px] h-[864px]  left-[262px]">
            <div className="absolute w-[428px] h-[663px]  left-[40px]">
             
             <Main />
            </div>
          
          </div>
          <div className="absolute w-[301px] h-[938px] top-[2px] left-0 overflow-hidden border-r-2 [border-right-style:solid] border-[#13101079]">
                    <InfoUser />
                    <Footer />
                    < Classment />
          </div>
        </div>
        <div className="absolute w-[308px] h-[938px] top-[-14px] left-[1024px] border-l-2 [border-left-style:solid] border-[#13101079]">
                <ListUser />
                <HashTag />
                <SeConnecter />
        </div>
      </div>
    </div>
  </div>
  );
};
