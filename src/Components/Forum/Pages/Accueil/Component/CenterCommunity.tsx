
import Mirror from "./iconsax-linear-mirroringscreen.png"
export default function CenterCom (){
  const imagemirror = Mirror.src
    return(
        <div className="relative w-[819px] h-[934px]">
        <div className="inline-flex flex-col items-center justify-center gap-[5px] absolute top-[60px] left-[239px]">
          <p className="relative w-fit mt-[-1.00px] [font-family:'Poppins',Helvetica] font-semibold text-white text-[25px] text-center tracking-[0] leading-[normal]">
            Meilleure communauté qui
            <br />
            vous pouvez rejoindre et discuter
          </p>
          <p className="relative w-[342px] [font-family:'Poppins',Helvetica] font-normal text-neutralbrown text-[18px] text-center tracking-[0] leading-[normal]">
            Vous pouvez rejoindre la communauté dont vous souhaitez discuter avec n’importe qui, n’importe où et à tout
            moment.
          </p>
        </div>
        <div className="absolute w-[400px] h-[284px] top-[325px] left-[210px]">
          <div className="relative h-[284px]">
            <div className="absolute w-[385px] h-[262px] top-0 left-0 rounded-[10px] border-[3px] border-solid border-[#ff7a92]" />
            <div className="absolute w-[385px] h-[262px] top-[22px] left-[15px] rounded-[10px] overflow-hidden border-[3px] border-solid border-[#30bddc]">
              <div className="inline-flex flex-col items-center gap-[33px] relative top-[56px] left-[24px]">
                <div className="flex w-[307px] items-start gap-[15px] relative flex-[0_0_auto]">
                  <img
                    className="relative w-[32px] h-[32px]"
                    alt="i"
                    src={imagemirror}
                  />
                  <div className="relative w-[279px] mt-[-1.00px] mr-[-19.00px] [font-family:'Poppins',Helvetica] font-medium text-light-100 text-[22px] tracking-[0] leading-[normal]">
                    Aucune communautaire
                  </div>
                </div>
                <p className="relative w-[337px] [font-family:'Poppins',Helvetica] font-medium text-white text-[14px] text-center tracking-[0] leading-[normal]">
                  désolé #Maloba, fonctionnalité communautaire pas encore disponible. mais ne vous inquiétez pas, cette
                  fonctionnalité est en cours de développement par des développeurs professionnels. à la prochaine...
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
}