import { ImageBackground } from 'react-native'
import { BackgroundProps } from '../../@types/Background'

import { styles } from './styles'

import backgroundImg from '../../assets/background-galaxy.png'


export function Background({ children }: BackgroundProps) {
  return (
    <ImageBackground 
    source={backgroundImg}
    defaultSource={backgroundImg}
    style={styles.container}>
        { children }
    </ImageBackground>
  )
}