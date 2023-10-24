import React from "react";
import CardF from "./Card";
import { BiUser } from "react-icons/bi";

export default function ProfilUser  () {
  return (
    <div className="w-[819px] h-[934px]">
    <div className="relative w-[562px] h-[792px] top-[52px] left-[129px]">
      <div className="absolute w-[550px] h-[214px] top-[14px] left-0">
        <div className="relative h-[214px]">
          <div className="absolute w-[550px] h-[144px] top-0 left-0 rounded-[5px] [background:linear-gradient(180deg,rgba(9.52,44.73,228.44,0.74)_0%,rgb(219.94,1.83,1.83)_46.88%,rgb(112,255,203.52)_100%)]" />
          <div className="absolute w-[144px] h-[148px] top-[66px] left-[203px] bg-[#9ab78d] rounded-[5px] overflow-hidden">
            <BiUser
              className="w-[112px] h-[112px] top-[18px] left-[18px] absolute object-cover text-red-700"
                />
          </div>
        </div>
      </div>
      <div className="inline-flex flex-col items-start gap-[10px] absolute top-[238px] left-0">
        <div className="inline-flex flex-col items-start relative flex-[0_0_auto]">
          <div className="text-[28px] relative w-fit mt-[-1.00px] [font-family:'Poppins',Helvetica] font-medium text-white tracking-[0] leading-[normal]">
            Don Musimbi
          </div>
          <div className="relative w-fit [font-family:'Poppins',Helvetica] font-normal text-neutralbrown text-[16px] tracking-[0] leading-[normal]">
            Avocat
          </div>
        </div>
        <p className="relative w-[405px] [font-family:'Poppins',Helvetica] font-medium text-white text-[16px] tracking-[0] leading-[normal]">
          Concentrez-vous et sur ce qui vous rend heureux.
          <br />
          détendez-vous un instant et jouez à des jeux ;
        </p>
      </div>
      <div className="absolute w-[550px] h-[39px] top-[404px] left-0">
        <div className="absolute w-[550px] h-[4px] top-[35px] left-0 bg-brand-colorfourth-color" />
        <div className="inline-flex items-start gap-[35px] absolute top-0 left-[14px]">
          <div className="inline-flex flex-col items-center gap-[5px] relative flex-[0_0_auto]">
            <div className="relative w-[67px] mt-[-1.00px] [font-family:'Poppins',Helvetica] font-medium text-white text-[16px] text-center tracking-[0] leading-[normal]">
              Sujets
            </div>
            <div className="relative w-[61.32px] h-[6px] bg-[#7b61ff] rounded-[2px]" />
          </div>
          <div className="inline-flex flex-col items-center gap-[5px] relative flex-[0_0_auto]">
            <div className="relative w-[83px] mt-[-1.00px] [font-family:'Poppins',Helvetica] font-medium text-white text-[16px] text-center tracking-[0] leading-[normal]">
              Enregistré
            </div>
          </div>
        </div>
      </div>
      <CardF />
    </div>
  </div>
  );
};
