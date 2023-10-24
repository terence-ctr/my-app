import CenterCom from "./CenterCommunity";
import Classment from "./Classement";
import Footer from "./Footer";
import HashTag from "./Hash";
import { ListClass } from "./ListClass";
import ProfilUser from "./ProfilUSer";
import EditPub from "./PublicationEdit";
import SeConnecter from "./SeConnecter";
import InfoUser from "./UserInfo";
import ListUser from "./UsersList";


export default function profilFull (){
    return(
        <div className="bg-[#202433] flex flex-row justify-center w-full">
        <div className="Body bg-brand-colormain-color w-[1345px] h-[930px ]">
          <div className="Body relative w-[1307px] h-[930px] overflow">
            <div className="absolute w-[956px] h-[940px] top-[-20px] left-[-2px]">
              <div className="absolute w-[694px] h-[864px]  left-[262px]">
                <div className="absolute w-[428px] h-[663px]  left-[40px]">
                 
                 <ListClass />
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
    )
}