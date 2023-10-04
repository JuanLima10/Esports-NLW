import { GameBannerProps } from "../types/GameBanner"

export function GameBanner(props: GameBannerProps) {
    return (
        <a className="relative rounded-lg overflow-hidden">
            <img
                src={props.bannerUrl === "" ? "/game.png" : `${props.bannerUrl}`}
                alt="game"
            />

            <div className="w-full pb-4 px-4 bg-gameGradient absolute bottom-0 left-0 right-0">
                <strong className="font-bold text-white block">{props.titulo}</strong>
                <span className="text-zinc-300 text-sm block">
                    {props.adsCount === 1 ? `${props.adsCount} anúncio` : `${props.adsCount} anúncios`}
                </span>
            </div>
        </a>
    )
}