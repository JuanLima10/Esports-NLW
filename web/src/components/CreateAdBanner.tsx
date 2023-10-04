import { MagnifyingGlassPlus } from "phosphor-react";
import * as Dialog from '@radix-ui/react-dialog';

export function CreateAdBanner() {
    return(
        <footer className="pt-1 mx-4 mt-8 bg-textGradient self-stretch rounded-lg overflow-hidden">
        <div className="bg-[#2A2634] p-6 px-8 rounded-b-lg flex flex-wrap justify-between items-center">
          <div>
            <strong className="text-2xl text-white font-black block">Não encontrou o seu duo</strong>
            <span className="text-zinc-400 mb-4 mr-8 block">Publique um anúncio para encontrar novos players!</span>
          </div>
          <Dialog.Trigger className="py-3 px-4 bg-violet-500 hover:bg-violet-600 text-white rounded flex flex-wrap justify-center items-center gap-3">
            <MagnifyingGlassPlus size={24} />
            Publicar anúncio
          </Dialog.Trigger>
        </div>
      </footer>
    )
}