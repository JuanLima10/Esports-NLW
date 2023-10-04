import { View, Text, TouchableOpacity } from 'react-native';
import { GameController } from 'phosphor-react-native';

import { DuoInfo } from '../DuoInfo';
import { THEME } from '../../theme';
import { DuoCardProps } from '../../@types/Duo';

import { styles } from './styles';

export function DuoCard({ data, onConnect }: DuoCardProps) {
    return (
        <View style={styles.container}>
            <DuoInfo
                label="Nome"
                value={data.name}
            />
            <DuoInfo
                label="Tempo de jogo" 
                value={
                    data.yearsPlaying <= 1
                        ? `${data.yearsPlaying} ano`
                        : `${data.yearsPlaying} anos`
                }
            />
            <DuoInfo
                label="Disponibilidade"
                value={
                    data.weekDays.length <= 1
                        ? `${data.weekDays.length} dia \u2022 ${data.hourStart} - ${data.hourEnd}`
                        : `${data.weekDays.length} dias \u2022 ${data.hourStart} - ${data.hourEnd}`
                }
            />
            <DuoInfo
                label="Chamada de áudio"
                value={data.useVoiceChannel ? "Sim" : "Não"}
                colorValue={data.useVoiceChannel ? THEME.COLORS.SUCCESS : THEME.COLORS.ALERT}
            />

            <TouchableOpacity style={styles.button} onPress={onConnect}>
                <GameController 
                    color={THEME.COLORS.TEXT} 
                    size={20}
                />
                <Text style={styles.buttonTitle}>Conectar</Text>
            </TouchableOpacity>
        </View>
    );
}