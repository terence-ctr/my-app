import { HiUsers } from "react-icons/hi2";


export default function ListUser(){
    return(
        <div className="absolute w-[239px] h-[402px] top-[115px] left-[33px] bg-brand-colorthird-color rounded-[10px] overflow-hidden">
        <div className="flex flex-col w-[214px] items-start gap-[10px] absolute top-[35px] left-[13px]">
          <div className="flex w-[214px] items-center gap-[10px] relative flex-[0_0_auto]">
            <div className="relative w-[38px] h-[38px] bg-[#9ab78d] rounded-[50px]" />
            <div className="inline-flex flex-col items-start relative flex-[0_0_auto]">
              <div className="relative w-fit mt-[-1.00px] [font-family:'Poppins-Medium',Helvetica] font-medium text-white text-[14px] tracking-[0] leading-[normal]">
                Don Musimbi
              </div>
              <div className="mt-2 text-[#755e4a] w-fit [font-family:'Poppins-Regular',Helvetica] font-normal text-neutralbrown text-[12px] tracking-[0] leading-[normal]">
                Avocat
              </div>
            </div>
          </div>
          <div className="flex w-[214px] items-center gap-[10px] relative flex-[0_0_auto]">
            <div className="relative w-[38px] h-[38px] bg-[#8db7b2] rounded-[50px]" />
            <div className="inline-flex flex-col items-start relative flex-[0_0_auto]">
              <div className="relative w-fit mt-[-1.00px] [font-family:'Poppins-Medium',Helvetica] font-medium text-white text-[14px] tracking-[0] leading-[normal]">
                Elie oko
              </div>
              <div className="mt-2 text-[#755e4a]  w-fit [font-family:'Poppins-Regular',Helvetica] font-normal text-neutralbrown text-[12px] tracking-[0] leading-[normal]">
                informaticien
              </div>
            </div>
          </div>
          <div className="flex w-[214px] items-center gap-[10px] p-[5px] relative flex-[0_0_auto] bg-[#07090c41] rounded-[5px] overflow-hidden border border-solid border-[#07090c0c]">
            <div className="relative w-[38px] h-[38px] bg-[#b7958d] rounded-[50px]" />
            <div className="inline-flex flex-col items-start relative flex-[0_0_auto]">
              <div className="relative w-fit mt-[-1.00px] [font-family:'Poppins-Medium',Helvetica] font-medium text-white text-[14px] tracking-[0] leading-[normal]">
                Ethberg Muzola
              </div>
              <div className="mt-2 w-fit [font-family:'Poppins-Regular',Helvetica] font-normal text-[#755e4a]  text-[12px] tracking-[0] leading-[normal]">
                Magistrat
              </div>
            </div>
          </div>
          <div className="flex w-[214px] items-center gap-[10px] relative flex-[0_0_auto]">
            <div className="relative w-[38px] h-[38px] bg-[#b78d9e] rounded-[50px]" />
            <div className="inline-flex flex-col items-start relative flex-[0_0_auto]">
              <div className="relative w-fit mt-[-1.00px] [font-family:'Poppins-Medium',Helvetica] font-medium text-white text-[14px] tracking-[0] leading-[normal]">
                Terence Musimbi
              </div>
              <div className="mt-2 text-[#755e4a]  w-fit [font-family:'Poppins-Regular',Helvetica] font-normal text-neutralbrown text-[12px] tracking-[0] leading-[normal]">
                Informaticien
              </div>
            </div>
          </div>
          
          
        </div>
        <div className="flex w-[214px] items-center justify-between absolute top-0 left-[13px]">
          <div className="relative w-fit [font-family:'Poppins-Medium',Helvetica] font-medium text-[#ddd8d8] text-lg tracking-[0] leading-[normal]">
            Liste des utilisateurs
          </div>
        <HiUsers className="relative w-[24px] h-[24px] text-[#b7a5d4]" />
        </div>
        <div className="absolute w-[214px] h-[35px] top-[250px] left-[13px] rounded-[5px] overflow-hidden">
          <div className="absolute top-[5px] left-[69px] [font-family:'Poppins-SemiBold',Helvetica] font-semibold text-[#b7a5d4] text-lg tracking-[0] leading-[normal]">
            Voir Plus
          </div>
        </div>
      </div>
    )
}