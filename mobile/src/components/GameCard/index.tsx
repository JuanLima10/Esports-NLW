import {
    Text,
    TouchableOpacity,
    ImageBackground
} from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'

import { GameCardProps } from '../../@types/Game'
import { THEME } from '../../theme'

import { styles } from './styles'

export function GameCard({ data, ...rest }: GameCardProps) {
    return (
        <TouchableOpacity style={styles.container} {...rest}>
            <ImageBackground
                style={styles.cover}
                source={{ uri: data.bannerUrl }}
            >

                <LinearGradient
                    colors={THEME.COLORS.FOOTER}
                    style={styles.footer}
                >

                    <Text style={styles.name}>
                        {data.title}
                    </Text>

                    <Text style={styles.ads}>
                        {data._count.ads} anúncios
                    </Text>

                </LinearGradient>
            </ImageBackground>
        </TouchableOpacity>
    )
}