import { Ionicons } from '@expo/vector-icons';
import { Image, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Poster from '../../components/Poster';
import styles from './style';

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
    <SafeAreaView style={styles.container} edges={['top']}>
      <View style={styles.headerRow}>
        <TouchableOpacity><Ionicons name="settings-outline" size={22} color="#99aabb" /></TouchableOpacity>
        <Text style={styles.headerUsername}>Felipe Menegheli</Text>
        <TouchableOpacity><Ionicons name="ellipsis-horizontal" size={22} color="#99aabb" /></TouchableOpacity>
      </View>

      <View style={styles.profileTabs}>
        <TouchableOpacity style={[styles.tabButton, styles.activeTabButton]}><Text style={styles.activeTabStyleText}>Profile</Text></TouchableOpacity>
        <TouchableOpacity style={styles.tabButton}><Text style={styles.tabStyleText}>Diary</Text></TouchableOpacity>
        <TouchableOpacity style={styles.tabButton}><Text style={styles.tabStyleText}>Lists</Text></TouchableOpacity>
        <TouchableOpacity style={styles.tabButton}><Text style={styles.tabStyleText}>Watchlist</Text></TouchableOpacity>
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.avatarContainer}>
          <Image source={{ uri: 'https://media-gig4-1.cdn.whatsapp.net/v/t61.24694-24/534425006_1587607675991849_914122749513288492_n.jpg?ccb=11-4&oh=01_Q5Aa4wFQIoMRuMhjVMiHs6Q4NZ4RoUWzUDOnykVU3SPP7Ng9UQ&oe=6A3ED6A4&_nc_sid=5e03e0&_nc_cat=107' }} style={styles.avatarImage} />
        </View>

        <View style={styles.sectionDivider} />
        <Text style={styles.sectionTitle}>FAVORITES</Text>
        <View style={styles.gridContainer}>
          {favorites.map((movie) => <Poster key={movie.id} uri={movie.image} style={styles.profilePosterSize} />)}
        </View>

        <View style={styles.sectionDivider} />
        <Text style={styles.sectionTitle}>RECENT ACTIVITY</Text>
        <View style={styles.gridContainer}>
          {recentActivity.map((movie) => (
            <View key={movie.id} style={styles.activityItemContainer}>
              <Poster uri={movie.image} style={styles.profilePosterSize} />
              <View style={styles.ratingRow}>
                <Text style={styles.ratingStars}>{movie.rating}</Text>
                <Ionicons name="list-outline" size={11} color="#667888" style={{ marginLeft: 3 }} />
              </View>
            </View>
          ))}
        </View>

        <TouchableOpacity style={styles.moreActivityRow}>
          <Text style={styles.moreActivityText}>More activity</Text>
          <Ionicons name="chevron-forward" size={16} color="#667888" />
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}