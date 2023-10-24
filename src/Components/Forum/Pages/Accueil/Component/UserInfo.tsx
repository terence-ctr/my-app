import { BiHash, BiUser } from "react-icons/bi";
import { MdBookmarks } from "react-icons/md";

export default function InfoUser (){
            return(
                <div className="flex flex-col w-[202px] items-start gap-[18px] absolute top-[58px] left-[15px]">
                <div className="flex w-[248px] items-center gap-[14px] relative flex-[0_0_auto] mr-[-46.00px]">
                  <div className="relative w-[42px] h-[42px] bg-[#dddddd] rounded-[12px] overflow-hidden">
                    <BiUser className="absolute w-[23px] h-[26px] top-[7px] left-[10px]"  />
                  </div>
                  <div className="relative w-fit [font-family:'Poppins-SemiBold',Helvetica] font-semibold text-white text-[18px] tracking-[0] leading-[normal]">
                    Profil
                  </div>
                </div>
                <div className="flex w-[248px] items-center gap-[14px] relative flex-[0_0_auto] mr-[-46.00px]">
                  <div className="relative w-[42px] h-[42px] bg-[#dddddd] rounded-[12px] overflow-hidden">
                       <BiHash className="relative w-[23px] h-[26px] top-[7px] left-[10px]" />
                  </div>
                  <div className="relative w-fit [font-family:'Poppins-SemiBold',Helvetica] font-semibold text-white text-[18px] tracking-[0] leading-[normal]">
                    Vos discussions
                  </div>
                </div>
                <div className="flex w-[248px] items-center gap-[14px] relative flex-[0_0_auto] mr-[-46.00px]">
                  <div className="relative w-[42px] h-[42px] bg-[#dddddd] rounded-[12px] overflow-hidden">  
                    <MdBookmarks className="relative w-[23px] h-[26px] top-[7px] left-[10px]"  />
                  </div>
                  <div className="relative w-fit [font-family:'Poppins-SemiBold',Helvetica] font-semibold text-white text-[18px] tracking-[0] leading-[normal]">
                    Enregistré
                  </div>
                </div>
              </div>
            )
}