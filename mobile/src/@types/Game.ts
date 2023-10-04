import { TouchableOpacityProps } from 'react-native';

export interface Game {
    id: string;
    title: string;
    _count: {
        ads: number
    };
    bannerUrl: string
}

export interface GameCardProps extends TouchableOpacityProps {
    data: Game,
}