import { useEffect, useState } from 'react'
import { Image, FlatList, TextInput } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useNavigation } from '@react-navigation/native'

import { THEME } from '../../theme'
import { Game } from '../../@types/Game'

import logoImg from '../../assets/logo-nlw-esports.png'
import { Background } from '../../components/Background'

import { GameCard } from '../../components/GameCard'
import { Heading } from '../../components/Heading'

import { styles } from './styles'

export function Home() {

  const [games, setGames] = useState<Game[]>([])
  
  const [search, setSearch] = useState('')
  const [isSearching, setIsSearching] = useState(false)

  const navigation = useNavigation()

  function handleOpenGame({ id, title, bannerUrl }: Game) {
    navigation.navigate('game', { id, title, bannerUrl })
  }

  useEffect(() => {
    fetch(`http://192.168.18.6:3333/games`)
      .then(res => res.json())
      .then(data => setGames(data))
  }, [])

  const filterGames = search.length > 0
    ? games.filter(game => game.title.toLowerCase().includes(search.toLowerCase()))
    : games

  return (
    <Background>
      <SafeAreaView style={styles.container}>
        <Image
          source={logoImg}
          style={!isSearching ? styles.logo : {display: 'none'}}
        />
        <Heading
          title="Encontre seu duo"
          subtitle="Selecione o game que deseja jogar..."
        />

        <TextInput 
          placeholder="Buscar game..." 
          onChangeText={e => setSearch(e)}
          value={search}
          style={styles.inputSearch}
          placeholderTextColor={THEME.COLORS.TEXT}
          onTextInput={() => search !== `` ? setIsSearching(true) : setIsSearching(false)}
        />
        
        <FlatList
          data={filterGames.sort((a, b) => (a._count.ads < b._count.ads) ? 1 : -1)}
          keyExtractor={item => item.id}
          renderItem={({ item }) => (
            <GameCard
              data={item}
              onPress={() => handleOpenGame(item)}
            />
          )}
          horizontal
          showsHorizontalScrollIndicator={false}
          style={styles.carousel}
        />
      </SafeAreaView>
    </Background>
  )
}