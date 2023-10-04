import { View, Text } from 'react-native'

import { THEME } from '../../theme'
import { DuoInfoProps } from '../../@types/Duo'

import { styles } from './styles'

export function DuoInfo({
  label,
  value,
  colorValue = THEME.COLORS.TEXT
}: DuoInfoProps) {

  return (
    <View style={styles.container}>
      <Text style={styles.label}>
        {label}
      </Text>
      <Text style={[styles.value, { color: colorValue }]} numberOfLines={1}>
        {value}
      </Text>
    </View>
  )
}