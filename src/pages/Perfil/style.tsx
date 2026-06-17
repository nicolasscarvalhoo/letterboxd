import { Dimensions, StyleSheet } from 'react-native';

const { width } = Dimensions.get('window');

const posterWidth = (width - 30 - 18) / 4; 
const posterHeight = posterWidth * 1.48;

const style = StyleSheet.create({
  container: 
  {
    flex: 1,
    backgroundColor: '#14181c',
  },
  headerRow: 
  {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 15,
    paddingVertical: 12,
  },
  headerUsername: 
  {
    color: '#ffffff',
    fontSize: 17,
    fontWeight: 'bold',
    letterSpacing: 0.3,
  },
  profileTabs: 
  {
    flexDirection: 'row',
    backgroundColor: '#1c242c',
    marginHorizontal: 10,
    borderRadius: 8,
    padding: 3,
    marginBottom: 15,
  },
  tabButton: 
  {
    flex: 1,
    alignItems: 'center',
    paddingVertical: 8,
    borderRadius: 6,
  },
  activeTabButton: 
  {
    backgroundColor: '#445566',
  },
  tabStyleText: 
  {
    color: '#99aabb',
    fontWeight: '600',
    fontSize: 13,
  },
  activeTabStyleText: 
  {
    color: '#ffffff',
    fontWeight: 'bold',
    fontSize: 13,
  },
  avatarContainer: 
  {
    alignItems: 'center',
    marginVertical: 15,
  },
  avatarImage: 
  {
    width: 96,
    height: 96,
    borderRadius: 48,
    backgroundColor: '#1c242c',
  },
  locationText: 
  {
    color: '#667888',
    fontSize: 13,
    marginTop: 10,
  },
  sectionDivider: 
  {
    height: 1,
    backgroundColor: '#242c34',
    marginTop: 15,
  },
  sectionTitle: 
  {
    color: '#99aabb',
    fontSize: 11,
    fontWeight: '700',
    letterSpacing: 1,
    marginLeft: 15,
    marginTop: 15,
    marginBottom: 12,
  },
  gridContainer: 
  {
    flexDirection: 'row',
    paddingHorizontal: 15,
    justifyContent: 'space-between',
  },
  profilePosterSize: 
  {
    width: posterWidth,
    height: posterHeight,
    borderRadius: 4,
  },
  activityItemContainer: 
  {
    alignItems: 'flex-start',
    width: posterWidth,
  },
  ratingRow: 
  {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 6,
  },
  ratingStars: 
  {
    color: '#00e054',
    fontSize: 11,
  },
  moreActivityRow: 
  {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 15,
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#242c34',
    marginTop: 20,
  },
  moreActivityText: 
  {
    color: '#99aabb',
    fontSize: 15,
  },
});

export default style;