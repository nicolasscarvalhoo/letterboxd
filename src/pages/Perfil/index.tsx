import { Ionicons } from '@expo/vector-icons';
import { Image, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Poster from '../../components/Poster';
import style from './style';

interface MovieItem {
  id: string;
  image: string;
  rating?: string;
}

export default function Perfil() {
  const favorites: MovieItem[] = [
    { id: '1', image: 'https://a.ltrbxd.com/resized/film-poster/5/1/5/6/8/51568-fight-club-0-1000-0-1500-crop.jpg?v=768b32dfa4' },
    { id: '2', image: 'https://a.ltrbxd.com/resized/film-poster/5/1/8/1/8/51818-the-godfather-0-1000-0-1500-crop.jpg?v=bca8b67402' },
    { id: '3', image: 'https://a.ltrbxd.com/resized/film-poster/4/6/8/1/3/46813-the-fast-and-the-furious-0-1000-0-1500-crop.jpg?v=ec37dbaf43' },
    { id: '4', image: 'https://a.ltrbxd.com/resized/film-poster/5/1/5/5/6/51556-die-hard-0-1000-0-1500-crop.jpg?v=e24e92754d' },
  ];

  const recentActivity: MovieItem[] = [
    { id: '1', image: 'https://a.ltrbxd.com/resized/film-poster/6/8/6/8/5/5/686855-parallel-mothers-0-1000-0-1500-crop.jpg?v=ccaf1936cf', rating: '★★★½' },
    { id: '2', image: 'https://a.ltrbxd.com/resized/film-poster/4/7/9/0/0/47900-21-0-1000-0-1500-crop.jpg?v=733647ac0d', rating: '★★' },
    { id: '3', image: 'https://a.ltrbxd.com/resized/film-poster/9/7/6/5/1/97651-portrait-of-a-young-girl-at-the-end-of-the-60s-in-brussels-0-1000-0-1500-crop.jpg?v=a6447d2534', rating: '★★★' },
    { id: '4', image: 'https://a.ltrbxd.com/resized/sm/upload/1g/zz/ez/d8/yyCKYaW908ZbpexpnBJ3p8o87HA-0-1000-0-1500-crop.jpg?v=19a50874d0', rating: '★★★½' },
  ];

  return (
    <SafeAreaView style={style.container} edges={['top']}>

      <View style={style.headerRow}>
        <TouchableOpacity><Ionicons name="settings-outline" size={22} color="#99aabb" /></TouchableOpacity>
        <Text style={style.headerUsername}>Felipe Menegheli</Text>
        <TouchableOpacity><Ionicons name="ellipsis-horizontal" size={22} color="#99aabb" /></TouchableOpacity>
      </View>

      {/* Sub-abas de Navegação Interna */}
      <View style={style.profileTabs}>
        <TouchableOpacity style={[style.tabButton, style.activeTabButton]}>
          <Text style={style.activeTabStyleText}>Profile</Text>
        </TouchableOpacity>
        <TouchableOpacity style={style.tabButton}>
          <Text style={style.tabStyleText}>Diary</Text>
        </TouchableOpacity>
        <TouchableOpacity style={style.tabButton}>
          <Text style={style.tabStyleText}>Lists</Text>
        </TouchableOpacity>
        <TouchableOpacity style={style.tabButton}>
          <Text style={style.tabStyleText}>Watchlist</Text>
        </TouchableOpacity>
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Avatar Redondo Centralizado */}
        <View style={style.avatarContainer}>
          <Image 
            source={{ uri: 'https://media-gig4-1.cdn.whatsapp.net/v/t61.24694-24/534425006_1587607675991849_914122749513288492_n.jpg?ccb=11-4&oh=01_Q5Aa4wFQIoMRuMhjVMiHs6Q4NZ4RoUWzUDOnykVU3SPP7Ng9UQ&oe=6A3ED6A4&_nc_sid=5e03e0&_nc_cat=107' }} 
            style={style.avatarImage} 
          />
        </View>

        <View style={style.sectionDivider} />
        <Text style={style.sectionTitle}>FAVORITES</Text>
        <View style={style.gridContainer}>
          {favorites.map((movie) => (
            <Poster key={movie.id} uri={movie.image} style={style.profilePosterSize} />
          ))}
        </View>

        <View style={style.sectionDivider} />
        <Text style={style.sectionTitle}>RECENT ACTIVITY</Text>
        <View style={style.gridContainer}>
          {recentActivity.map((movie) => (
            <View key={movie.id} style={style.activityItemContainer}>
              <Poster uri={movie.image} style={style.profilePosterSize} />
              <View style={style.ratingRow}>
                <Text style={style.ratingStars}>{movie.rating}</Text>
                <Ionicons name="list-outline" size={11} color="#667888" style={{ marginLeft: 3 }} />
              </View>
            </View>
          ))}
        </View>

        <TouchableOpacity style={style.moreActivityRow}>
          <Text style={style.moreActivityText}>More activity</Text>
          <Ionicons name="chevron-forward" size={16} color="#667888" />
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}