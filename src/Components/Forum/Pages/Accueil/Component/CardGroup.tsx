import React from "react";
import Nsiku from "./Nsiku.png"
import Rectangle from "./rectangle-23.png"
import like from "./iconsax-linear-like-1.png"
import smile from "./iconsax-linear-smileys.png"
import medal from "./iconsax-linear-medalstar-1.png"

export const Illustration = (): JSX.Element => {
  const imagerect = Rectangle.src;
  const imagelike = like.src;
  const imagemedal = medal.src
  const imagesmile = smile.src
  const imagePath = Nsiku.src
  return (
  <div className="relative w-[893px] h-[934px]">
    <div className="flex w-[862px] items-center gap-[49px] absolute  left-0">
      <div className="relative w-[428px] h-[554px] overflow-hidden">
        <div className="relative w-[429px] h-[480px] top-[53px]">
          <img className="absolute w-[304px] h-[266px] top-[214px] left-0" alt="Mine" src={imagelike} />
          <div className="w-[428px] h-[534px] overflow-hidden">
            <div className="relative w-[429px] h-[480px] top-[53px]">
              <img className="absolute w-[304px] h-[266px] top-[214px] left-0" alt="Rectangle" src={imagerect} />
              <div className="absolute w-[409px] h-[415px] top-0 left-[20px]">
                <div className="h-[415px]">
                  <div className="relative w-[409px] h-[415px]">
                    <div className="absolute w-[287px] h-[220px] top-[82px] left-0 bg-light-200 rounded-[10px] shadow-[10px_10px_0px_#20243324]">
                      <div className="inline-flex flex-col items-start gap-[21px] relative top-[36px] left-[37px]">
                        <img className="relative w-[38px] h-[38px]" alt="Iconsax linear" src={imagemedal} />
                        <div className="inline-flex flex-col items-start gap-[9px] relative flex-[0_0_auto]">
                          <div className="relative w-fit mt-[-1.00px] [font-family:'Inter-SemiBold',Helvetica] font-semibold text-[#202433] text-[16px] tracking-[0] leading-[normal] whitespace-nowrap">
                            #Faites confiance à tous
                          </div>
                          <p className="relative w-[211px] [font-family:'Inter-Medium',Helvetica] font-medium text-[#202433] text-[12px] tracking-[0] leading-[22px]">
                            Cette plateforme est autorisée à toute personne, à condition qu&#39;il ne s&#39;agisse pas
                            d&#39;une personne.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="absolute w-[287px] h-[220px] top-0 left-[85px] bg-[#d1c9ff] rounded-[10px]">
                      <div className="relative h-[220px] rounded-[10px]">
                        <div className="absolute top-[94px] left-[37px] [font-family:'Inter-SemiBold',Helvetica] font-semibold text-[#202433] text-[16px] tracking-[0] leading-[normal] whitespace-nowrap">
                          Instagram Account
                        </div>
                        <p className="absolute w-[211px] top-[122px] left-[38px] [font-family:'Inter-Medium',Helvetica] font-medium text-[#202433] text-[12px] tracking-[0] leading-[22px]">
                          Post a story, manage DMs, and more in a single dashboard.
                        </p>
                        <img
                          className="absolute w-[38px] h-[38px] top-[31px] left-[37px]"
                          alt="Instagram icon"
                          src="instagram-icon-1.svg"
                        />
                        <div className="absolute w-[287px] h-[220px] top-0 left-0 bg-[#b7a5d4] rounded-[10px] shadow-[10px_10px_0px_#20243324]">
                          <div className="inline-flex flex-col items-start gap-[21px] relative top-[36px] left-[37px]">
                            <img className="relative w-[32px] h-[32px]" alt="Iconsax linear like" src={imagelike} />
                            <div className="inline-flex flex-col items-start gap-[9px] relative flex-[0_0_auto]">
                              <p className="relative w-fit mt-[-1.00px] [font-family:'Inter-SemiBold',Helvetica] font-normal text-[#202433] text-[16px] tracking-[0] leading-[normal] whitespace-nowrap">
                                <span className="font-semibold">#</span>
                                <span className="[font-family:'Inter-Regular',Helvetica]">Liberté d&#39;expression.</span>
                              </p>
                              <p className="relative w-[211px] [font-family:'Inter-Medium',Helvetica] font-medium text-[#202433] text-[11px] tracking-[0] leading-[22px]">
                                Vous pouvez ou non aimer ou détester une discussion, mais n’agissez jamais contre votre
                                volonté.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="absolute w-[287px] h-[220px] top-[195px] left-[122px] bg-light-300 rounded-[10px] overflow-hidden shadow-[10px_10px_0px_#20243324]">
                      <div className="inline-flex flex-col items-start gap-[21px] relative top-[36px] left-[37px]">
                        <img className="relative w-[38px] h-[38px]" alt="Iconsax linear" src={imagesmile} />
                        <div className="inline-flex flex-col items-start gap-[9px] relative flex-[0_0_auto]">
                          <p className="relative w-fit mt-[-1.00px] [font-family:'Inter-SemiBold',Helvetica] font-normal text-[#202433] text-[16px] tracking-[0] leading-[normal] whitespace-nowrap">
                            <span className="font-semibold">#</span>
                            <span className="[font-family:'Inter-Regular',Helvetica]">Liberté d&#39;expression.</span>
                          </p>
                          <p className="relative w-[211px] [font-family:'Inter-Medium',Helvetica] font-medium text-[#202433] text-[12px] tracking-[0] leading-[22px]">
                            Vous êtes libre de parler, de discuter, à condition de ne pas blesser les autres.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="inline-flex flex-col items-start justify-center gap-[15px] relative flex-[0_0_auto]">
        <img
          className="relative w-[240px] h-[182.24px] object-cover"
          alt="Nsiku"
          src={imagePath}
        />
        <div className="relative w-fit [font-family:'Poppins-SemiBold',Helvetica] font-semibold text-white text-[38px] tracking-[0] leading-[normal]">
          Nsiku Forum
        </div>
        <p className="relative w-[250px] h-[140px] [font-family:'Poppins-Regular',Helvetica] font-normal text-white text-lg tracking-[0] leading-[normal]">
          Bienvenue dans la discussion avec n&#39;importe qui, exclusivement sur des sujets liés
          aux&nbsp;&nbsp;#droits
          <br />
          #Maloba
        </p>
      </div>
    </div>
   
  </div>
  );
};
