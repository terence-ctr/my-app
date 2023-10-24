import React from "react";
import { BiDislike, BiLike, BiUser } from "react-icons/bi";
import {BsBookmarkFill, BsFillChatFill} from "react-icons/bs"

export default function Main () {
  return (
    <div className="w-[819px] h-[934px]">
      <div className="relative w-[564px] h-[820px] top-[34px] left-[128px] overflow-hidden">
        <div className="inline-flex flex-col items-center gap-[34px] absolute top-[147px] left-[7px]">
          <div className="relative w-[550px] h-[294px] bg-brand-colorsecond-color rounded-[15px] overflow-hidden shadow-[10px_10px_0px_#01010273]">
            <p className="top-[142px] absolute w-[490px] left-[30px] [font-family:'Poppins-Medium',Helvetica] font-medium text-white text-[18px] tracking-[0] leading-[normal]">
              Le droit constitutionnel est une branche du droit public, il rassemble les règles relatives à la forme de
              l&#39;État,......
            </p>
            <div className="top-[68px] flex w-[490px] items-center justify-between absolute left-[30px]">
              <div className="inline-flex items-center gap-[8px] relative flex-[0_0_auto]">
                <div className="relative w-[55px] h-[55px] bg-[#9ab78d] rounded-[5px] overflow-hidden">
                  <BiUser
                    className="text-black absolute w-[44px] h-[44px] top-[3px] left-[6px] object-cover"
                    
                  />
                </div>
                <div className="inline-flex flex-col items-start relative flex-[0_0_auto]">
                  <div className="relative w-fit mt-[-1.00px] [font-family:'Poppins-Medium',Helvetica] font-medium text-white text-[14px] tracking-[0] leading-[normal]">
                    Don Musimbi
                  </div>
                  <p className="relative w-fit [font-family:'Poppins-Regular',Helvetica] font-normal text-neutralbrown text-[12px] tracking-[0] leading-[normal]">
                    il y a 2 h
                  </p>
                </div>
              </div>
              <div className="relative w-[144px] h-[34px] mr-[-2.00px]">
                <div className="relative w-[142px] h-[34px] bg-[#d1c9ff] rounded-[5px]">
                  <div className="absolute w-[131px] top-[8px] left-[11px] [font-family:'Poppins-Medium',Helvetica] font-medium text-brand-colorsecond-color text-[12px] tracking-[0] leading-[normal]">
                    Droit Constitutionnel
                  </div>
                </div>
              </div>
            </div>
            <p className="absolute w-[508px] top-[19px] left-[30px] [font-family:'Poppins-SemiBold',Helvetica] font-semibold text-white text-[25px] tracking-[0] leading-[normal] whitespace-nowrap">
              Quel est le but du droit constitutionnel?
            </p>
            <div className="flex w-[490px] items-center justify-between absolute top-[248px] left-[30px]">
              <div className="flex w-[227px] items-start gap-[9px] relative">
                <div className="relative w-[34px] h-[34px] bg-[#d9D9D9] rounded-[12px] overflow-hidden">
                  <BsBookmarkFill className="absolute w-[18px] h-[22px] top-[6px] left-[8px] text-black"  />
                </div>
                <div className="relative w-[184px] h-[34px] bg-[#d9d9d9] rounded-[15px]">
                  <div className="inline-flex items-center gap-[12px] relative top-[7px] left-[10px]">
                    <div className="inline-flex items-start gap-[5px] relative flex-[0_0_auto]">
                      <BsFillChatFill className="relative w-[16px] h-[14px]" />
                      <div className="relative w-fit mt-[-1.00px] [font-family:'Poppins-Medium',Helvetica] font-medium text-[#33394e] text-[10px] tracking-[0] leading-[normal]">
                        Ajouter une réponse
                      </div>
                    </div>
                    <div className="relative w-[26px] h-[19px] bg-brand-colorprimary rounded-[0px_5px_5px_0px]">
                      <div className="absolute top-0 left-[7px] [font-family:'Poppins-Medium',Helvetica] font-medium text-[12px] text-neutralwhite tracking-[0] leading-[normal]">
                        10
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative w-[78px] h-[32px]">
                <div className="inline-flex items-end gap-[2px] absolute top-0 left-0">
                  <div className="relative w-[24px] h-[24px]">
                    <BiLike className="absolute w-[22px] h-[22px] top-px left-px text-red-500"  />
                  </div>
                  <div className="relative w-fit [font-family:'Poppins-Regular',Helvetica] font-normal text-[10px] text-neutralwhite tracking-[0] leading-[normal]">
                    10
                  </div>
                </div>
                <div className="inline-flex items-start gap-[2px] absolute top-[8px] left-[42px]">
                  <BiDislike className="relative w-[24px] h-[24px] text-red-500" />
                  <div className="relative w-fit mt-[-1.00px] [font-family:'Poppins-Regular',Helvetica] font-normal text-[10px] text-neutralwhite tracking-[0] leading-[normal]">
                    10
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="relative w-[550px] h-[350px] bg-brand-colorsecond-color rounded-[15px] overflow-hidden shadow-[10px_10px_0px_#01010273]">
            <p className="top-[183px] absolute w-[490px] left-[30px] [font-family:'Poppins-Medium',Helvetica] font-medium text-white text-[18px] tracking-[0] leading-[normal]">
              Le droit constitutionnel est une branche du droit public, il rassemble les règles relatives à la forme de
              l&#39;État,......
            </p>
            <div className="top-[104px] flex w-[490px] items-center justify-between absolute left-[30px]">
              <div className="inline-flex items-center gap-[8px] relative flex-[0_0_auto]">
                <div className="relative w-[55px] h-[55px] bg-[#779ebe] rounded-[5px] overflow-hidden">
                  <BiUser
                    className="absolute w-[52px] h-[52px] top-[2px] left-[2px] object-cover"
                    
                  />
                </div>
                <div className="inline-flex flex-col items-start relative flex-[0_0_auto]">
                  <div className="relative w-fit mt-[-1.00px] [font-family:'Poppins-Medium',Helvetica] font-medium text-white text-[14px] tracking-[0] leading-[normal]">
                    Terence Musimbi
                  </div>
                  <div className="relative w-fit [font-family:'Poppins-Regular',Helvetica] font-normal text-neutralbrown text-[12px] tracking-[0] leading-[normal]">
                    6h ago
                  </div>
                </div>
              </div>
              <div className="relative w-[144px] h-[34px] mr-[-2.00px]">
                <div className="relative w-[142px] h-[34px] bg-[#d1c9ff] rounded-[5px]">
                  <div className="absolute w-[131px] top-[8px] left-[11px] [font-family:'Poppins-Medium',Helvetica] font-medium text-brand-colorsecond-color text-[12px] tracking-[0] leading-[normal]">
                    Droit Constitutionnel
                  </div>
                </div>
              </div>
            </div>
            <p className="absolute w-[506px] top-[19px] left-[30px] [font-family:'Poppins-SemiBold',Helvetica] font-semibold text-white text-[25px] tracking-[0] leading-[normal]">
              Quel est le but du droit constitutionnel?
            </p>
            <div className="flex w-[490px] items-center justify-between absolute top-[283px] left-[20px]">
              <div className="flex w-[227px] items-start gap-[9px] relative">
                  <div className="relative w-[34px] h-[34px] bg-[#d9D9D9] rounded-[12px] overflow-hidden">
                    <BsBookmarkFill className="absolute w-[18px] h-[22px] top-[6px] left-[8px] text-black"  />
                  </div>
                <div className="relative w-[184px] h-[34px] bg-[#d9d9d9] rounded-[15px]">
                  <div className="inline-flex items-center gap-[12px] relative top-[7px] left-[10px]">
                    <div className="inline-flex items-start gap-[5px] relative flex-[0_0_auto]">
                        <BsFillChatFill className="relative w-[16px] h-[14px]" />
                      <div className="relative w-fit mt-[-1.00px] [font-family:'Poppins-Medium',Helvetica] font-medium text-[#33394e] text-[10px] tracking-[0] leading-[normal]">
                        Ajouter une réponse
                      </div>
                    </div>
                    <div className="relative w-[26px] h-[19px] bg-brand-colorprimary rounded-[0px_5px_5px_0px]">
                      <div className="absolute top-0 left-[7px] [font-family:'Poppins-Medium',Helvetica] font-medium text-[12px] text-neutralwhite tracking-[0] leading-[normal]">
                        10
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative w-[78px] h-[32px]">
                <div className="inline-flex items-end gap-[2px] absolute top-0 left-0">
                  <div className="relative w-[24px] h-[24px]">
                  <BiLike className="relative w-[24px] h-[24px] text-red-500" />
                  </div>
                  <div className="relative w-fit [font-family:'Poppins-Regular',Helvetica] font-normal text-[10px] text-neutralwhite tracking-[0] leading-[normal]">
                    10
                  </div>
                </div>
                <div className="inline-flex items-start gap-[2px] absolute top-[8px] left-[42px]">
                     <BiDislike className="relative w-[24px] h-[24px] text-red-500" />
                  <div className="relative w-fit mt-[-1.00px] [font-family:'Poppins-Regular',Helvetica] font-normal text-[10px] text-neutralwhite tracking-[0] leading-[normal]">
                    10
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute w-[564px] h-[121px] top-0 left-0">
          <div className="h-[121px] bg-brand-colorsecond-color overflow-hidden relative rounded-[5px]">
            <div className="flex w-[540px] items-center justify-between absolute top-[72px] left-[12px]">
              <img className="relative w-[193px] h-[40px]" alt="Fitur" src="fitur.svg" />
              <div className="relative w-[102px] h-[34px] mr-[-2.00px]">
                <div className="relative w-[100px] h-[34px] bg-[#d1c9ff] rounded-[5px]">
                  <div className="absolute w-[59px] top-[9px] left-[21px] [font-family:'Poppins-Medium',Helvetica] font-medium text-brand-colorsecond-color text-[12px] tracking-[0] leading-[normal]">
                    Response
                  </div>
                </div>
              </div>
            </div>
            <div className="flex w-[540px] items-center justify-between absolute top-[12px] left-[12px]">
              <div className="inline-flex items-center gap-[10px] relative flex-[0_0_auto]">
                <div className="relative w-[50px] h-[50px] bg-[#9ab78d] rounded-[5px] overflow-hidden">
                  <BiUser
                    className="absolute w-[38px] h-[38px] top-[6px] left-[6px] object-cover"
                    
                  />
                </div>
              </div>
              <div className="w-[472px] h-[50px] bg-brand-colorfourth-color border border-solid border-light-100 relative rounded-[5px]" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
