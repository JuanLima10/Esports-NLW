import React from 'react'

import {
  useFonts,
  Inter_400Regular,
  Inter_600SemiBold,
  Inter_700Bold,
  Inter_800ExtraBold
} from '@expo-google-fonts/inter'

import { StatusBar } from 'expo-status-bar'
import { Background } from './src/components/Background'

import { Loading } from './src/components/Loading'
import { Routes } from './src/routes'

export default function App() {

  const [fontsLoad] = useFonts({
    Inter_400Regular,
    Inter_600SemiBold,
    Inter_700Bold,
    Inter_800ExtraBold
  })

  return (
    <Background>
      <StatusBar
        style="light"
        backgroundColor="black"
      />
      { fontsLoad ? <Routes/> : <Loading/> }
    </Background>
  )
}
