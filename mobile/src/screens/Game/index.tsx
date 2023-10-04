import { useState, useEffect } from 'react'
import { 
  View, 
  TouchableOpacity, 
  Image, 
  FlatList, 
  Text 
} from 'react-native'
import { useRoute, useNavigation } from '@react-navigation/native'
import { SafeAreaView } from 'react-native-safe-area-context'

import { THEME } from '../../theme'
import { Duo } from '../../@types/Duo'
import { GameRouteParams } from '../../@types/navigation'

import { Entypo } from '@expo/vector-icons'
import logoImg from '../../assets/logo-nlw-esports.png'
import { Background } from '../../components/Background'

import { DuoMatch } from '../../components/DuoMatch'
import { Heading } from '../../components/Heading'
import { DuoCard } from '../../components/DuoCard'

import { styles } from './styles'

export function Game() {

  const [ ads, setAds ] = useState<Duo[]>([])
  const [ discordSelected, setDiscordSelected ] = useState('')
  const navigation = useNavigation()
  
  const route = useRoute()
  const game = route.params as GameRouteParams


  function handleGoBack() {
    navigation.goBack()
  }

  async function getDiscordUser(adsId: string) {
    fetch(`http://192.168.18.6:3333/ads/${adsId}/discord`)
      .then(res => res.json())
      .then(data => setDiscordSelected(data.discord))
  }

  useEffect(() => {
    fetch(`http://192.168.18.6:3333/games/${game.id}/ads`)
      .then(res => res.json())
      .then(data => setAds(data))
  }, [])

  return (
    <Background>
      <SafeAreaView style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity>
            <Entypo
              name="chevron-thin-left"
              color={THEME.COLORS.CAPTION_300}
              size={20}
              onPress={handleGoBack}
            />
          </TouchableOpacity>
          <Image
            source={logoImg}
            style={styles.logo}
          />
        </View>

        <Image
          source={{ uri: game.bannerUrl }}
          style={styles.cover}
          resizeMode="cover"
        />

        <Heading
          title={game.title}
          subtitle="Conecte-se e comece a jogar!"
        />

        <FlatList 
          data={ads}
          keyExtractor={item => item.id}
          renderItem={({item}) => (
            <DuoCard
              data={item}
              onConnect={() => getDiscordUser(item.id)}
            />
          )}
          horizontal
          style={styles.containerList}
          contentContainerStyle={styles.contentList}
          showsHorizontalScrollIndicator={false}
          ListEmptyComponent={() => (
            <Text style={styles.emptyListText}>
              Não há anúncios publicados para esse jogo :(
            </Text>
          )}
        />

        <DuoMatch 
          visible={discordSelected.length > 0} 
          discord={discordSelected} 
          onClose={() => setDiscordSelected('')}
          />

      </SafeAreaView>
    </Background>
  )
}