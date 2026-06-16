import { FlatList, Image, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Poster from '../../components/Poster';
import styles from './style';

interface PopularMovie {
  id: string;
  image: string;
}

interface FriendMovie {
  id: string;
  image: string;
  friend: string;
  avatar: string;
  rating: string;
}

export default function Feed() {
  const popularMovies: PopularMovie[] = [
    { id: '1', image: 'https://a.ltrbxd.com/resized/film-poster/1/2/7/4/4/9/0/1274490-over-your-dead-body-2026-0-1000-0-1500-crop.jpg?v=5078cbe906' },
    { id: '2', image: 'https://a.ltrbxd.com/resized/film-poster/1/1/5/9/2/5/1/1159251-disclosure-day-0-1000-0-1500-crop.jpg?v=9ae810e4bb' },
    { id: '3', image: 'https://a.ltrbxd.com/resized/film-poster/1/2/3/4/4/7/2/1234472-obsession-2025-2-0-1000-0-1500-crop.jpg?v=cff6fc00b6' },
    { id: '4', image: 'https://a.ltrbxd.com/resized/film-poster/5/1/3/5/9/51359-blue-velvet-0-1000-0-1500-crop.jpg?v=b0ee3c20f6' },
  ];

  const friendsMovies: FriendMovie[] = [
    { id: '1', image: 'https://a.ltrbxd.com/resized/film-poster/6/1/1/2/8/8/611288-project-hail-mary-0-1000-0-1500-crop.jpg?v=ac31b6ec03', friend: 'Kaynan', avatar: 'https://media-gig4-1.cdn.whatsapp.net/v/t61.24694-24/647411228_4686213204941373_3878606055118321557_n.jpg?ccb=11-4&oh=01_Q5Aa4wFJD1uWMPEviN8SMdxmxKNnAt1hzHh4w-kJedkqYpY_6g&oe=6A3EFCE3&_nc_sid=5e03e0&_nc_cat=108', rating: '★★★½' },
    { id: '2', image: 'https://a.ltrbxd.com/resized/sm/upload/nr/94/sz/74/51RFCKLFuEbvLQsFzXcupQnkoRD-0-1000-0-1500-crop.jpg?v=9975de21fa', friend: 'Doremir Caetano', avatar: 'https://imagizer.imageshack.com/img924/7082/OEjBkA.jpg', rating: '★★½' },
    { id: '3', image: 'https://a.ltrbxd.com/resized/film-poster/8/4/1/1/0/3/841103-michael-2026-0-1000-0-1500-crop.jpg?v=1e8e478e40', friend: 'Marcival', avatar: 'https://media-gig4-1.cdn.whatsapp.net/v/t61.24694-24/475801669_1274072413697329_2082080263516092492_n.jpg?ccb=11-4&oh=01_Q5Aa4wHjwsi1DntBrtcceaJloLrKqkLedKtOSdI46TOyGVGg7w&oe=6A3EC8A6&_nc_sid=5e03e0&_nc_cat=109', rating: '★★★' },
    { id: '4', image: 'https://a.ltrbxd.com/resized/film-poster/5/1/9/9/4/51994-heat-0-1000-0-1500-crop.jpg?v=54dce97dc6', friend: 'Luciano', avatar: 'https://media-gig4-1.cdn.whatsapp.net/v/t61.24694-24/505525112_1500689667978160_6660472568618489526_n.jpg?ccb=11-4&oh=01_Q5Aa4wHDTWtRy_B34ft1N9_UhrbktzW_zCTA1Wx7a2ScjtZXDg&oe=6A3EED42&_nc_sid=5e03e0&_nc_cat=103', rating: '★★★½' },
  ];

  return (
    <SafeAreaView style={styles.container} edges={['top']}>
      <View style={styles.appHeader}>
        <Text style={styles.logoText}>Letterboxd</Text>
      </View>

      <View style={styles.topTabs}>
        <TouchableOpacity style={[styles.topTabButton, styles.activeTopTab]}><Text style={styles.activeTopTabText}>Films</Text></TouchableOpacity>
        <TouchableOpacity style={styles.topTabButton}><Text style={styles.topTabText}>Reviews</Text></TouchableOpacity>
        <TouchableOpacity style={styles.topTabButton}><Text style={styles.topTabText}>Lists</Text></TouchableOpacity>
        <TouchableOpacity style={styles.topTabButton}><Text style={styles.topTabText}>Journal</Text></TouchableOpacity>
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.proBanner}>
          <View style={styles.proBadge}><Text style={styles.proBadgeText}>PRO</Text></View>
          <Text style={styles.proText}>Remove ads, add profile stats, and more by upgrading to Pro.</Text>
        </View>

        <View style={styles.sectionHeaderRow}><Text style={styles.sectionTitle}>Popular this week</Text><Text style={styles.arrowIcon}>{'>'}</Text></View>
        <FlatList
          horizontal
          data={popularMovies}
          keyExtractor={(item) => item.id}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.listContentContainer}
          renderItem={({ item }) => <Poster uri={item.image} style={{ marginRight: 12 }} />}
        />

        <View style={styles.sectionHeaderRow}><Text style={styles.sectionTitle}>New from friends</Text><Text style={styles.arrowIcon}>{'>'}</Text></View>
        <FlatList
          horizontal
          data={friendsMovies}
          keyExtractor={(item) => item.id}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.listContentContainer}
          renderItem={({ item }) => (
            <View style={styles.friendMovieContainer}>
              <Poster uri={item.image} />
              <View style={styles.friendInfoRow}>
                <Image source={{ uri: item.avatar }} style={styles.friendAvatar} />
                <View>
                  <Text style={styles.friendName} numberOfLines={1}>{item.friend}</Text>
                  <Text style={styles.friendRating}>{item.rating}</Text>
                </View>
              </View>
            </View>
          )}
        />
      </ScrollView>
    </SafeAreaView>
  );
}