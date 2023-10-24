

export default function EditPub(){
    return(
        <div className="w-[819px] h-[934px]">
      <div className="relative w-[550px] h-[792px] top-[7px] left-[135px]">
        <div className="inline-flex flex-col items-start gap-[21px] absolute top-[270px] left-[77px]">
          <div className="h-[57px] border-[#d1c9ff] relative w-[395px] rounded-[5px] overflow-hidden border border-solid">
            <div className="absolute top-[14px] left-[16px] [font-family:'Poppins',Helvetica] font-normal text-white text-[18px] tracking-[0] leading-[normal]">
              Titre
            </div>
          </div>
          <div className="h-[57px] border-[#c9ebff] relative w-[395px] rounded-[5px] overflow-hidden border border-solid">
            <div className="absolute top-[14px] left-[16px] [font-family:'Poppins',Helvetica] font-normal text-white text-[18px] tracking-[0] leading-[normal]">
              Categorie
            </div>
          </div>
          <div className="h-[197px] border-[#ffc9c9] relative w-[395px] rounded-[5px] overflow-hidden border border-solid">
            <p className="absolute top-[11px] left-[16px] [font-family:'Poppins',Helvetica] font-normal text-white text-[18px] tracking-[0] leading-[normal]">
              Dites aux gens ce que vous avez à dire
            </p>
          </div>
        </div>
        <div className="inline-flex flex-col items-center gap-[15px] absolute top-[94px] left-[61px]">
          <p className="relative w-fit mt-[-1.00px] [font-family:'Poppins',Helvetica] font-semibold text-white text-[32px] tracking-[0] leading-[normal]">
            Ajoutez vos fils de discussion
          </p>
          <p className="relative w-[304px] [font-family:'Poppins',Helvetica] font-normal text-white text-[16px] text-center tracking-[0] leading-[normal]">
            Vous êtes libre de parler
            <br />
            #Liberté d&#39;expression.
          </p>
        </div>
        <div className="flex w-[348px] items-center justify-center gap-[10px] p-[25px] absolute top-[660px] left-[101px] bg-light-100 rounded-[6px]">
          <div className="relative w-fit mt-[-1.00px] [font-family:'Inter',Helvetica] font-semibold text-[#202433] text-[16px] tracking-[0] leading-[normal] whitespace-nowrap">
            Ajouter un sujet
          </div>
        </div>
      </div>
    </div>
    )
}