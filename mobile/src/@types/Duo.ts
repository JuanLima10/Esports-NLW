import { ColorValue, ModalProps } from "react-native";

export interface Duo {
    id: string;
    hourEnd: string;
    hourStart: string;
    name: string;
    useVoiceChannel: true;
    weekDays: string[];
    yearsPlaying: number;
}

export interface DuoCardProps {
    data: Duo;
    onConnect: () => void;
}

export interface DuoInfoProps {
    label: string;
    value: string;
    colorValue?: ColorValue;
}

export interface DuoMatchProps extends ModalProps {
    discord: string;
    onClose: () => void;
}