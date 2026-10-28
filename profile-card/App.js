// Profile Card — practical task (React Native basics)
// Follow the steps in README.md and build your solution in this file.
import { View, Text, Image, StyleSheet } from 'react-native';

// Data to display. Do not change it.
const BIO =
  'Building cross-platform apps with React Native. I love clean layouts, accessible design and sharing what I learn with the community.';

const STATS = [
  { label: 'Projects', value: '24' },
  { label: 'Followers', value: '1.2k' },
  { label: 'Following', value: '180' },
];

const SKILLS = ['React Native', 'JavaScript', 'UI Design', 'Git', 'Flexbox'];

export default function App() {
  return (
    <View style={styles.screen}>
      {/* TODO STEP 1: build the card with View and Text (name, role, location, bio) */}
      <View style={styles.card}>

        {/* TODO STEP 2: add the banner and the avatar with Image */}
        <Image source={require('./assets/banner.png')} style={styles.banner} resizeMode='cover'/>
          
        {/* TODO STEP 3: header row and stats row with Flexbox */}

        <View style={styles.header}>
          <Image source={require('./assets/avatar.png')} style={styles.avatar}/>

          <View style={styles.information}>
            <Text style={styles.name}>Alex Rivera</Text>
          
            <Text style={styles.role}>Mobile Developer</Text>
            
            <Text style={styles.location}>Lisbon, Portugal</Text>
          </View>

        </View>
          
        <Text style={styles.bio} numberOfLines={3}>{BIO}</Text>

        <View style={styles.rowStats}>
          
          {
          STATS.map( item => ( 
            <View style={styles.stats} key={item.label}>
            
                <Text style={styles.value}>{item.value}</Text>
                <Text style={styles.label}>{item.label}</Text>
                
            </View>

          )
          )}
        </View>

      </View>


      {/* TODO STEP 4: online badge, skill tags and action buttons (layout) */}
      {/* TODO STEP 5: polish the styles (colors, typography, shadow) */}
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    paddingTop: 64,
    paddingHorizontal: 20,
    backgroundColor: '#EEF1F6',
  },
  card:{
    backgroundColor: '#FFFFFF',
    padding:20
  },
  name:{
    fontSize: 25,
    fontWeight: 'bold'
  },
  role:{
    fontSize: 17,
    color: '#2f6fed',
  },
  location:{
    fontSize: 16,
    color: '#6d7482'

  },
  bio:{
    fontSize: 15,
    marginTop: 15,

  },
  banner:{
    width:'100%',
    height: 120,
  },
  avatar:{
    width:96,
    height:96,
    borderRadius: 100,
    borderWidth: 4,
    borderColor:"#ffffff",
    marginTop:-48
  },
  header:{
    flexDirection:'row',
  },
  information:{
    flex:1,
    marginTop:7,
    marginLeft:7

  },
  rowStats:{
    flexDirection:"row",
    marginTop:12,
    borderTopWidth:1,
    borderBottomWidth: 1,
    borderColor: '#e7e7e7',
    paddingVertical: 12,
  },
  stats:{
    flex:1,
    alignItems:"center"
    
  },
  value:{
    fontSize:24,
    fontWeight:"bold",
  },
  label:{
    fontSize:15,
    color: '#6d7482'

  }



});
