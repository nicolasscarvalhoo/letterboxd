import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: 
  { 
    flex: 1, 
    backgroundColor: '#14181c' 
  },
  appHeader: 
  { 
    alignItems: 'center', 
    paddingVertical: 10 
  },
  logoText: 
  { 
    color: '#ffffff', 
    fontSize: 22, 
    fontWeight: '900', 
    letterSpacing: 0.5 
  },
  topTabs: 
  { 
    flexDirection: 'row', 
    backgroundColor: '#1c242c', 
    marginHorizontal: 10, 
    borderRadius: 8, 
    padding: 3, 
    marginBottom: 15 
  },
  topTabButton: 
  { 
    flex: 1, 
    alignItems: 'center', 
    paddingVertical: 8, 
    borderRadius: 6 
  },
  activeTopTab: 
  { 
    backgroundColor: '#445566' 
  },
  topTabText: 
  { 
    color: '#99aabb', 
    fontWeight: '600', 
    fontSize: 14 
  },
  activeTopTabText: 
  { 
    color: '#ffffff', 
    fontWeight: 'bold', 
    fontSize: 14 
  },
  proBanner: 
  { 
    flexDirection: 'row', 
    backgroundColor: '#1c242c', 
    margin: 15, padding: 15, 
    borderRadius: 6, 
    alignItems: 'center' 
  },
  proBadge: 
  { 
    backgroundColor: '#ff8000', 
    paddingHorizontal: 8, 
    paddingVertical: 4, 
    borderRadius: 4, 
    marginRight: 12 
  },
  proBadgeText: 
  { 
    color: '#fff', 
    fontWeight: 'bold', 
    fontSize: 12 
  },
  proText: 
  { 
    color: '#99aabb', 
    flex: 1, 
    fontSize: 12, 
    lineHeight: 16 
  },
  sectionHeaderRow: 
  { 
    flexDirection: 'row', 
    justifyContent: 'space-between', 
    alignItems: 'center', 
    paddingHorizontal: 15, 
    marginTop: 20, 
    marginBottom: 12 
  },
  sectionTitle: 
  { 
    color: '#ffffff', 
    fontSize: 18, 
    fontWeight: 'bold' 
  },
  arrowIcon: 
  { 
    color: '#667888', 
    fontSize: 18 
  },
  listContentContainer: 
  { 
    paddingLeft: 15, 
    paddingRight: 15 
  },
  friendMovieContainer: { 
    width: 95,
    marginRight: 12, 
  },
  friendInfoRow: 
  { 
    flexDirection: 'row', 
    alignItems: 'center', 
    marginTop: 8 
  },
  friendAvatar: 
  { 
    width: 20, 
    height: 20, 
    borderRadius: 10, 
    marginRight: 6 
  },
  friendName: 
  { 
    color: '#99aabb', 
    fontSize: 11, 
    fontWeight: '600', 
    width: 65 
  },
  friendRating: 
  { 
    color: '#00e054', 
    fontSize: 10, 
    marginTop: 2 
  }
});

export default styles;