import React from "react";
import { Illustration } from "./CardGroup";
import {BiUser,BiHash} from "react-icons/bi"
import {MdBookmarks} from "react-icons/md"
import {FaMedal} from 'react-icons/fa'
import {HiUsers} from 'react-icons/hi2'
import {PiMedal} from 'react-icons/pi'
import medal from "./iconsax-linear-medalstar-1.png"

export default function PageDAccueil () {
  return (
    <div className="bg-[#202433] flex flex-row justify-center w-full">
      <div className="bg-brand-colormain-color w-[1345px] h-[650px]">
        <div className="relative w-[1307px] h-[650px] overflow-hidden">
          <div className="absolute w-[956px] h-[940px] top-[-20px] left-[-2px]">
            <div className="absolute w-[694px] h-[864px]  left-[262px]">
              <div className="absolute w-[428px] h-[663px]  left-[40px]">
               
                <Illustration />
              </div>
              <button className="flex w-[348px] h-[68px] items-center justify-center gap-[10px] p-[25px] absolute top-[590px] left-[236px] bg-[#b7a5d4] rounded-[6px]">
                <a className="relative w-fit mt-[-1.50px] [] font-semibold text-[#202433] text-[16px] tracking-[0] leading-[normal] whitespace-nowrap">
                  Aller aux #Discussions
                </a>
              </button>
            </div>
            <div className="absolute w-[301px] h-[938px] top-[2px] left-0 overflow-hidden border-r-2 [border-right-style:solid] border-[#13101079]">
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
              <footer className="absolute w-[302px] h-[59px] top-[580px] left-[-3px] bg-transparent">
                <p className="absolute w-[163px] top-[31px] left-[63px] [font-family:'Inter-Regular',Helvetica] font-normal text-[#999999] text-[18px] text-center tracking-[0] leading-[normal]">
                  ©2023 Nsiku. All rights reserved.
                </p>
                <div className="absolute w-[300px] h-px top-0 left-0 bg-brand-colorfourth-color" />
              </footer>
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
                  <a className=" text-white f txrelative w-fit mt-[-8.00px] mb-[-6.00px] mr-[-21.00px] [font-family:'Inter-SemiBold',Helvetica] font-semibold text-neutralwhite text-[16px] tracking-[0] leading-[normal] whitespace-nowrap">
                    Voir tous les classements
                  </a>
                </button>
              </div>
            </div>
          </div>
          <div className="absolute w-[308px] h-[938px] top-[-14px] left-[1024px] border-l-2 [border-left-style:solid] border-[#13101079]">
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
            <div className="absolute w-[239px] h-[270px] top-[400px] left-[30px] bg-brand-colorthird-color rounded-[10px] overflow-hidden">
              <div className="inline-flex flex-col items-start gap-[10px] absolute top-[60px] left-[13px]">
                <div className="inline-flex flex-col items-start gap-[5px] relative flex-[0_0_auto]">
                  <div className="flex w-[213px] items-start justify-between relative flex-[0_0_auto]">
                    <div className="inline-flex items-center gap-[7px] relative flex-[0_0_auto]">
                      <BiHash
                        className="relative w-[19.5px] h-[18.55px] mt-[-0.28px] mb-[-0.28px] ml-[-0.75px] text-[#999999]"
                        
                      />
                      <div className=" text-[#999999] relative w-fit mt-[-1.00px] [font-family:'Poppins-Medium',Helvetica] font-medium text-neutralgray text-[12px] tracking-[0] leading-[normal]">
                        Droit Constitutionnel
                      </div>
                    </div>
                    <div className="relative text-[#755e4a]  w-fit mt-[-1.00px] [font-family:'Poppins-Regular',Helvetica] font-normal text-neutralbrown text-[12px] tracking-[0] leading-[normal]">
                      il y a 2h
                    </div>
                  </div>
                  <div className="relative w-[212px] h-px bg-[#d9d9d92b]" />
                </div>
                <div className="inline-flex flex-col items-start gap-[10px] relative flex-[0_0_auto]">
                  <div className="inline-flex flex-col items-start gap-[5px] relative flex-[0_0_auto]">
                    <div className="flex w-[213px] items-start justify-between relative flex-[0_0_auto]">
                      <div className="inline-flex items-center gap-[7px] relative flex-[0_0_auto]">
                        <BiHash
                          className="relative w-[19.5px] h-[18.55px] mt-[-0.28px] mb-[-0.28px] ml-[-0.75px] text-[#999999]"
                         
                        />
                        <div className="relative text-[#999999] w-fit mt-[-1.00px] [font-family:'Poppins-Medium',Helvetica] font-medium text-neutralgray text-[12px] tracking-[0] leading-[normal]">
                          Droit des affaires
                        </div>
                      </div>
                      <div className="relative text-[#755e4a]  w-fit mt-[-1.00px] [font-family:'Poppins-Regular',Helvetica] font-normal text-neutralbrown text-[12px] tracking-[0] leading-[normal]">
                        il y a 4h
                      </div>
                    </div>
                    <div className="relative w-[212px] h-px bg-[#d9d9d92b]" />
                  </div>
                </div>
                <div className="inline-flex flex-col items-start gap-[10px] relative flex-[0_0_auto]">
                  <div className="inline-flex flex-col items-start gap-[5px] relative flex-[0_0_auto]">
                    <div className="flex w-[213px] items-start justify-between relative flex-[0_0_auto]">
                      <div className="inline-flex items-center gap-[7px] relative flex-[0_0_auto]">
                        <BiHash
                          className="relative w-[19.5px] h-[18.55px] mt-[-0.28px] mb-[-0.28px] ml-[-0.75px] text-[#999999]"
                         
                        />
                        <div className="relative  text-[#999999] w-fit mt-[-1.00px] [font-family:'Poppins-Medium',Helvetica] font-medium text-neutralgray text-[12px] tracking-[0] leading-[normal]">
                          Droits humains
                        </div>
                      </div>
                      <div className="relative text-[#755e4a] w-fit mt-[-1.00px] [font-family:'Poppins-Regular',Helvetica] font-normal text-neutralbrown text-[12px] tracking-[0] leading-[normal]">
                        il ya 2 j
                      </div>
                    </div>
                    <div className="relative w-[212px] h-px bg-[#d9d9d92b]" />
                  </div>
                </div>
                <div className="inline-flex flex-col items-start gap-[10px] relative flex-[0_0_auto]">
                  <div className="inline-flex flex-col items-start gap-[5px] relative flex-[0_0_auto]">
                    <div className="flex w-[213px] items-start justify-between relative flex-[0_0_auto]">
                      <div className="inline-flex items-center gap-[7px] relative flex-[0_0_auto]">
                        <BiHash
                          className="relative text-[#999999] w-[19.5px] h-[18.55px] mt-[-0.28px] mb-[-0.28px] ml-[-0.75px]"
                      
                        />
                        <div className="relative text-[#999999] w-fit mt-[-1.00px] [font-family:'Poppins-Medium',Helvetica] font-medium text-neutralgray text-[12px] tracking-[0] leading-[normal]">
                          liberté d’expression
                        </div>
                      </div>
                      <div className="relative w-[52px] text-[#755e4a]  mt-[-1.00px] [font-family:'Poppins-Regular',Helvetica] font-normal text-neutralbrown text-[12px] tracking-[0] leading-[normal]">
                       il ya 5 j
                      </div>
                    </div>
                    <div className="relative w-[212px] h-px bg-[#d9d9d92b]" />
                  </div>
                </div>
                <div className="inline-flex flex-col items-start gap-[10px] relative flex-[0_0_auto]">
                  <div className="inline-flex flex-col items-start gap-[5px] relative flex-[0_0_auto]">
                    <div className="flex w-[213px] items-start justify-between relative flex-[0_0_auto]">
                      <div className="inline-flex items-center gap-[7px] relative flex-[0_0_auto]">
                        <BiHash
                          className="relative w-[19.5px] h-[18.55px] mt-[-0.28px] mb-[-0.28px] text-[#999999] ml-[-0.75px]"
                          />
                        <div className="relative text-[#999999] w-fit mt-[-1.00px] [font-family:'Poppins-Medium',Helvetica] font-medium text-neutralgray text-[12px] tracking-[0] leading-[normal]">
                          Droit de l’homme
                        </div>
                      </div>
                      <p className="relative w-fit mt-[-1.00px] text-[#755e4a]  [font-family:'Poppins-Regular',Helvetica] font-normal text-neutralbrown text-[12px] tracking-[0] leading-[normal]">
                        il y a 8 j
                      </p>
                    </div>
                    <div className="relative w-[212px] h-px bg-[#d9d9d92b]" />
                  </div>
                </div>
                
              </div>
              <div className="inline-flex items-center justify-center gap-[45px] absolute top-[15px] left-[13px]">
                <div className="passe relative w-fit mt-[-1.00px]  font-medium text-[#ddd8d8] text-[16px] tracking-[0] leading-[normal]">
                  Ce qui se passe?
                </div>
                <PiMedal className="relative w-[24px] h-[24px] text-[#b7a5d4] font-medium" />
              </div>
            </div>
            <button className="relative  w-[239px] h-[103px] top-[0px] left-[31px] bg-brand-colorthird-color rounded-[10px] overflow-hidden">
              <div className="absolute w-[159px] h-[67px] top-[30px] left-[49px] bg-light-100 rounded-[5px] overflow-hidden shadow-[5px_5px_0px_#2d222261]">
                <div className="absolute w-[137px] top-[22px] left-[16px] [font-family:'Poppins-SemiBold',Helvetica] font-semibold text-brand-colorsecond-color text-[20px] tracking-[0] leading-[normal]">
                  Se connecter
                </div>
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};