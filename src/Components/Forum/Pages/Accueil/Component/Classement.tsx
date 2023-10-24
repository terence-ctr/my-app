import { FaMedal } from "react-icons/fa";

export default function Classment (){
    return(
        <div className="inline-flex flex-col items-start gap-[28px] absolute top-[249px] left-[15px]">
              <div className="flex flex-col w-[248px] items-start gap-[28px] relative flex-[0_0_auto]">
                <div className="relative w-fit mt-[-1.00px] mr-[-2.00px] [font-family:'Poppins-SemiBold',Helvetica] font-semibold text-white text-[22px] tracking-[0] leading-[normal]">
                  Meilleurs classements
                </div>
                <div className="flex flex-col w-[248px] items-center justify-center gap-[19px] relative flex-[0_0_auto]">
                  <div className="flex w-[248px] items-center gap-[61px] relative flex-[0_0_auto]">
                    <div className="inline-flex items-center gap-[8px] relative flex-[0_0_auto]">
                      <div className="relative w-[45px] h-[45px] bg-[#61bd36] rounded-[5px]" />
                      <div className="inline-flex flex-col items-start justify-center relative flex-[0_0_auto]">
                        <div className="relative w-fit mt-[-1.00px] [font-family:'Poppins-Medium',Helvetica] font-medium text-white text-[14px] tracking-[0] leading-[normal]">
                          Don Musimbi
                        </div>
                        <div className=" w-fit [font-family:'Poppins-Regular',Helvetica] mt-2 font-normal text-[#755e4a] text-[12px] tracking-[0] leading-[normal]">
                          Avocat
                        </div>
                      </div>
                    </div>
                    <div className="flex w-[47px] items-center justify-center gap-[8px] px-[8px] py-px relative self-stretch mr-[-5.00px] bg-[#d1c9ff] rounded-[5px]">
                      <div className="relative w-fit [font-family:'Poppins-SemiBold',Helvetica] font-semibold text-brand-colorsecond-color text-[16px] tracking-[0] leading-[normal]">
                        100
                      </div>
                    </div>
                  </div>
                  <div className="flex w-[240px] items-center justify-center gap-[45px] p-[5px] relative flex-[0_0_auto] bg-[#07090c41] rounded-[5px]">
                    <div className="inline-flex items-center gap-[8px] relative flex-[0_0_auto]">
                      <div className="relative w-[45px] h-[45px] bg-[#364fbe] rounded-[5px]" />
                      <div className="inline-flex flex-col items-start justify-center relative flex-[0_0_auto]">
                        <div className="relative w-fit mt-[-1.00px] [font-family:'Poppins-Medium',Helvetica] font-medium text-white text-[14px] tracking-[0] leading-[normal]">
                          Elie Oko
                        </div>
                        <div className="text-[#755e4a] mt-2  w-fit [font-family:'Poppins-Regular',Helvetica] font-normal  text-[12px] tracking-[0] leading-[normal]">
                          Informaticien
                        </div>
                      </div>
                    </div>
                    <div className="flex-1 grow bg-light-200 flex items-center justify-center gap-[8px] px-[8px] py-px relative self-stretch rounded-[5px]">
                      <div className="relative w-fit [font-family:'Poppins-SemiBold',Helvetica] font-semibold text-brand-colorsecond-color text-[16px] tracking-[0] leading-[normal]">
                        80
                      </div>
                    </div>
                  </div>
                  <div className="flex w-[248px] items-center gap-[61px] relative flex-[0_0_auto]">
                    <div className="inline-flex items-center gap-[8px] relative flex-[0_0_auto]">
                      <div className="relative w-[45px] h-[45px] bg-[#b78d91] rounded-[5px]" />
                      <div className="inline-flex flex-col items-start justify-center relative flex-[0_0_auto]">
                        <div className="relative w-fit mt-[-1.00px] [font-family:'Poppins-Medium',Helvetica] font-medium text-white text-[14px] tracking-[0] leading-[normal]">
                          Ethberg Muzola
                        </div>
                        <div className="mt-2 w-fit [font-family:'Poppins-Regular',Helvetica] font-normal text-[#755e4a] text-[12px] tracking-[0] leading-[normal]">
                          Magistrat
                        </div>
                      </div>
                    </div>
                    <div className="w-[47px] mr-[-22.00px] bg-light-300 flex items-center justify-center gap-[8px] px-[8px] py-px relative self-stretch rounded-[5px]">
                      <div className="relative w-fit [font-family:'Poppins-SemiBold',Helvetica] font-semibold text-brand-colorsecond-color text-[16px] tracking-[0] leading-[normal]">
                        50
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <button className="Bouton-f flex w-[251px] h-[55px] items-center justify-center gap-[10px] p-[25px] relative rounded-[6px]  all-[unset] box-border">
                <FaMedal
                  className="relative text-white w-[35px] h-[35px] mt-[-15.00px] mb-[-15.00px] ml-[-21.00px]"
                  
                />
                <a className="text-white f txrelative w-fit mt-[-8.00px] mb-[-6.00px] mr-[-21.00px] [font-family:'Inter-SemiBold',Helvetica] font-semibold text-neutralwhite text-[16px] tracking-[0] leading-[normal] whitespace-nowrap">
                  Voir tous les classements
                </a>
              </button>
            </div>
    )
}