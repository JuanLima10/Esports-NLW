import { View, Text } from 'react-native'

import { HeadingProps } from '../../@types/Heading'

import { styles } from './styles'

export function Heading({ title, subtitle, ...rest }: HeadingProps) {
    return (
        <View style={styles.container} {...rest}>
            <Text style={styles.title}>
                {title}
            </Text>
            <Text style={styles.subtitle}>
                {subtitle}
            </Text>
        </View>
    )
}