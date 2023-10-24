import avatar from "./avatar-1-3.png"
import avatar2 from "./avatar-1-2.png"

export function ListClass (){
  const imageavatar2 = avatar2.src  
  const imageavatar = avatar.src

    return(
        <div className="relative w-[819px] h-[934px] overflow-hidden">
      <div className="flex flex-col w-[550px] h-[804px] items-center gap-[30px] absolute top-[240px] left-[135px]">
        <div className="flex w-[490px] items-center justify-between relative flex-[0_0_auto]">
          <div className="relative w-fit mt-[-1.00px] [font-family:'Poppins',Helvetica] font-semibold text-white text-[20px] tracking-[0] leading-[normal]">
            Utilisateurs
          </div>
          <div className="relative w-fit mt-[-1.00px] [font-family:'Poppins',Helvetica] font-semibold text-white text-[20px] tracking-[0] leading-[normal]">
            Point
          </div>
        </div>
        <div className="flex flex-col w-[490px] items-start gap-[25px] relative flex-[0_0_auto]">
          <div className="flex w-[490px] items-center justify-between relative flex-[0_0_auto]">
            <div className="inline-flex items-center gap-[8px] relative flex-[0_0_auto]">
              <div className="relative w-[60px] h-[60px] bg-[#9ab78d] rounded-[5px] overflow-hidden">
                <img
                  className="absolute w-[45px] h-[45px] top-[8px] left-[8px] object-cover"
                  alt="Avatar"
                  src={imageavatar}
                />
              </div>
              <div className="inline-flex flex-col items-start justify-center relative flex-[0_0_auto]">
                <div className="relative w-fit mt-[-1.00px] [font-family:'Poppins',Helvetica] font-medium text-white text-[16px] tracking-[0] leading-[normal]">
                  Don Musimbi
                </div>
                <div className="relative w-fit [font-family:'Poppins',Helvetica] font-normal text-neutralbrown text-[12px] tracking-[0] leading-[normal]">
                  Avocat
                </div>
              </div>
            </div>
            <div className="flex w-[62px] items-center justify-center gap-[8px] px-[8px] py-px relative self-stretch bg-[#d1c9ff] rounded-[5px]">
              <div className="relative w-fit [font-family:'Poppins',Helvetica] font-semibold text-brand-colorsecond-color text-[18px] tracking-[0] leading-[normal]">
                100
              </div>
            </div>
          </div>
          <div className="flex w-[490px] items-center justify-between relative flex-[0_0_auto]">
            <div className="inline-flex items-center gap-[8px] relative flex-[0_0_auto]">
              <div className="relative w-[60px] h-[60px] bg-[#9ab78d] rounded-[5px] overflow-hidden">
                <img
                  className="absolute w-[45px] h-[45px] top-[8px] left-[8px] object-cover"
                  alt="Avatar"
                  src={imageavatar}
                />
              </div>
              <div className="inline-flex flex-col items-start justify-center relative flex-[0_0_auto]">
                <div className="relative w-fit mt-[-1.00px] [font-family:'Poppins',Helvetica] font-medium text-white text-[16px] tracking-[0] leading-[normal]">
                  Terence Musimbi
                </div>
                <div className="relative w-fit [font-family:'Poppins',Helvetica] font-normal text-neutralbrown text-[12px] tracking-[0] leading-[normal]">
                  Informaticien
                </div>
              </div>
            </div>
            <div className="flex w-[62px] items-center justify-center gap-[8px] px-[8px] py-px relative self-stretch bg-[#d1c9ff] rounded-[5px]">
              <div className="relative w-fit [font-family:'Poppins',Helvetica] font-semibold text-brand-colorsecond-color text-[18px] tracking-[0] leading-[normal]">
                100
              </div>
            </div>
          </div>
          <div className="flex w-[490px] items-center justify-between relative flex-[0_0_auto]">
            <div className="inline-flex items-center gap-[8px] relative flex-[0_0_auto]">
              <div className="relative w-[60px] h-[60px] bg-[#9ab78d] rounded-[5px] overflow-hidden">
                <img
                  className="absolute w-[45px] h-[45px] top-[8px] left-[8px] object-cover"
                  alt="Avatar"
                  src={imageavatar}
                />
              </div>
              <div className="inline-flex flex-col items-start justify-center relative flex-[0_0_auto]">
                <div className="relative w-fit mt-[-1.00px] [font-family:'Poppins',Helvetica] font-medium text-white text-[16px] tracking-[0] leading-[normal]">
                  ethberg Muzola
                </div>
                <div className="relative w-fit [font-family:'Poppins',Helvetica] font-normal text-neutralbrown text-[12px] tracking-[0] leading-[normal]">
                  Informaticien
                </div>
              </div>
            </div>
            <div className="flex w-[62px] items-center justify-center gap-[8px] px-[8px] py-px relative self-stretch bg-[#d1c9ff] rounded-[5px]">
              <div className="relative w-fit [font-family:'Poppins',Helvetica] font-semibold text-brand-colorsecond-color text-[18px] tracking-[0] leading-[normal]">
                100
              </div>
            </div>
          </div>
          <div className="flex w-[490px] items-center justify-between relative flex-[0_0_auto]">
            <div className="inline-flex items-center gap-[8px] relative flex-[0_0_auto]">
              <div className="relative w-[60px] h-[60px] bg-[#9ab78d] rounded-[5px] overflow-hidden">
                <img
                  className="absolute w-[45px] h-[45px] top-[8px] left-[8px] object-cover"
                  alt="Avatar"
                  src={imageavatar}
                />
              </div>
              <div className="inline-flex flex-col items-start justify-center relative flex-[0_0_auto]">
                <div className="relative w-fit mt-[-1.00px] [font-family:'Poppins',Helvetica] font-medium text-white text-[16px] tracking-[0] leading-[normal]">
                  Elie oko
                </div>
                <div className="relative w-fit [font-family:'Poppins',Helvetica] font-normal text-neutralbrown text-[12px] tracking-[0] leading-[normal]">
                  Informaticien
                </div>
              </div>
            </div>
            <div className="flex w-[62px] items-center justify-center gap-[8px] px-[8px] py-px relative self-stretch bg-[#d1c9ff] rounded-[5px]">
              <div className="relative w-fit [font-family:'Poppins',Helvetica] font-semibold text-brand-colorsecond-color text-[18px] tracking-[0] leading-[normal]">
                100
              </div>
            </div>
          </div>
          <div className="flex w-[490px] items-center justify-between relative flex-[0_0_auto]">
            <div className="inline-flex items-center gap-[8px] relative flex-[0_0_auto]">
              <div className="relative w-[60px] h-[60px] bg-[#9ab78d] rounded-[5px] overflow-hidden">
                <img
                  className="absolute w-[45px] h-[45px] top-[8px] left-[8px] object-cover"
                  alt="Avatar"
                  src={imageavatar}
                />
              </div>
              <div className="inline-flex flex-col items-start justify-center relative flex-[0_0_auto]">
                <div className="relative w-fit mt-[-1.00px] [font-family:'Poppins',Helvetica] font-medium text-white text-[16px] tracking-[0] leading-[normal]">
                  Stephan Taj
                </div>
                <div className="relative w-fit [font-family:'Poppins',Helvetica] font-normal text-neutralbrown text-[12px] tracking-[0] leading-[normal]">
                  Avocat
                </div>
              </div>
            </div>
            <div className="flex w-[62px] items-center justify-center gap-[8px] px-[8px] py-px relative self-stretch bg-[#d1c9ff] rounded-[5px]">
              <div className="relative w-fit [font-family:'Poppins',Helvetica] font-semibold text-brand-colorsecond-color text-[18px] tracking-[0] leading-[normal]">
                100
              </div>
            </div>
          </div>
          <div className="flex w-[490px] items-center justify-between relative flex-[0_0_auto]">
            <div className="inline-flex items-center gap-[8px] relative flex-[0_0_auto]">
              <div className="relative w-[60px] h-[60px] bg-[#9ab78d] rounded-[5px] overflow-hidden">
                <img
                  className="absolute w-[45px] h-[45px] top-[8px] left-[8px] object-cover"
                  alt="Avatar"
                  src={imageavatar}
                />
              </div>
              <div className="inline-flex flex-col items-start justify-center relative flex-[0_0_auto]">
                <div className="relative w-fit mt-[-1.00px] [font-family:'Poppins',Helvetica] font-medium text-white text-[16px] tracking-[0] leading-[normal]">
                  Alain Kap
                </div>
                <div className="relative w-fit [font-family:'Poppins',Helvetica] font-normal text-neutralbrown text-[12px] tracking-[0] leading-[normal]">
                  avocat
                </div>
              </div>
            </div>
            <div className="flex w-[62px] items-center justify-center gap-[8px] px-[8px] py-px relative self-stretch bg-[#d1c9ff] rounded-[5px]">
              <div className="relative w-fit [font-family:'Poppins',Helvetica] font-semibold text-brand-colorsecond-color text-[18px] tracking-[0] leading-[normal]">
                100
              </div>
            </div>
          </div>
          <div className="flex w-[490px] items-center justify-between relative flex-[0_0_auto]">
            <div className="inline-flex items-center gap-[8px] relative flex-[0_0_auto]">
              <div className="relative w-[60px] h-[60px] bg-[#9ab78d] rounded-[5px] overflow-hidden">
                <img
                  className="absolute w-[45px] h-[45px] top-[8px] left-[8px] object-cover"
                  alt="Avatar"
                  src={imageavatar}
                />
              </div>
              <div className="inline-flex flex-col items-start justify-center relative flex-[0_0_auto]">
                <div className="relative w-fit mt-[-1.00px] [font-family:'Poppins',Helvetica] font-medium text-white text-[16px] tracking-[0] leading-[normal]">
                  Eric Kubota
                </div>
                <div className="relative w-fit [font-family:'Poppins',Helvetica] font-normal text-neutralbrown text-[12px] tracking-[0] leading-[normal]">
                  Avocat
                </div>
              </div>
            </div>
            <div className="flex w-[62px] items-center justify-center gap-[8px] px-[8px] py-px relative self-stretch bg-[#d1c9ff] rounded-[5px]">
              <div className="relative w-fit [font-family:'Poppins',Helvetica] font-semibold text-brand-colorsecond-color text-[18px] tracking-[0] leading-[normal]">
                100
              </div>
            </div>
          </div>
          <div className="flex w-[490px] items-center justify-between relative flex-[0_0_auto]">
            <div className="inline-flex items-center gap-[8px] relative flex-[0_0_auto]">
              <div className="relative w-[60px] h-[60px] bg-[#9ab78d] rounded-[5px] overflow-hidden">
                <img
                  className="absolute w-[45px] h-[31px] top-[8px] left-[8px] object-cover"
                  alt="Avatar"
                  src={imageavatar2}
                />
              </div>
              <div className="inline-flex flex-col items-start justify-center relative flex-[0_0_auto]">
                <div className="relative w-fit mt-[-1.00px] [font-family:'Poppins',Helvetica] font-medium text-white text-[16px] tracking-[0] leading-[normal]">
                  Aline Makito
                </div>
                <div className="relative w-fit [font-family:'Poppins',Helvetica] font-normal text-neutralbrown text-[12px] tracking-[0] leading-[normal]">
                 Avocat
                </div>
              </div>
            </div>
            <div className="flex w-[62px] items-center justify-center gap-[8px] px-[8px] py-px relative self-stretch bg-[#d1c9ff] rounded-[5px]">
              <div className="relative w-fit [font-family:'Poppins',Helvetica] font-semibold text-brand-colorsecond-color text-[18px] tracking-[0] leading-[normal]">
                100
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="inline-flex flex-col items-center justify-center gap-[5px] absolute top-[60px] left-[236px]">
        <p className="relative w-fit mt-[-1.00px] [font-family:'Poppins',Helvetica] font-semibold text-white text-[25px] text-center tracking-[0] leading-[normal]">
          Meilleurs classements des <br />
          Discussions por 24h
        </p>
        <p className="relative w-[348px] [font-family:'Poppins',Helvetica] font-normal text-neutralbrown text-[18px] text-center tracking-[0] leading-[normal]">
          Le classement est utilisé pour voir les meilleurs utilisateurs avec le score le plus élevé.
        </p>
      </div>
    </div>
    )
}