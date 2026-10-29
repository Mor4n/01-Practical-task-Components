// Profile Card — practical task (React Native basics)
// Follow the steps in README.md and build your solution in this file.
import { View, Text, Image, StyleSheet,Platform } from 'react-native';

// Data to display. Do not change it.
const BIO =
  'Building cross-platform apps with React Native. I love clean layouts, accessible design and sharing what I learn with the community.';

const STATS = [
  { label: 'Projects', value: '24' },
  { label: 'Followers', value: '1.2k' },
  { label: 'Following', value: '180' },
];

const SKILLS = ['React Native', 'JavaScript', 'UI Design', 'Git', 'Flexbox'];

const COLORS = {
  background:"#EEF1F6",
  card:"#FFFFFF",
  text:"#0c111b",
  muted:"#6d7482",
  primary:"#2f6fed",
  primaryLight:"#E8EFFD",
  border:"#e7e7e7",
  online:"#22C55E"
}


export default function App() {
  return (
    <View style={styles.screen}>
      {/* TODO STEP 1: build the card with View and Text (name, role, location, bio) */}
      <View style={styles.card}>

        {/* TODO STEP 2: add the banner and the avatar with Image */}
        <View style={styles.bannerWrap}>
        <Image source={require('./assets/banner.png')} style={styles.banner} resizeMode='cover'/>

        </View>
          
        {/* TODO STEP 3: header row and stats row with Flexbox */}

        <View style={styles.header}>

        {/* TODO STEP 4: online badge, skill tags and action buttons (layout) */}
          <View style={styles.avatarWrap}>
            <Image source={require('./assets/avatar.png')} style={styles.avatar}/>
            <View style={styles.badge}/>
          </View>

          <View style={styles.information}>
            <Text style={styles.name}>Alex Rivera</Text>
          
            <Text style={styles.role}>Mobile Developer</Text>
            
            <Text style={styles.location}>Lisbon, Portugal</Text>
          </View>

        </View>
          
        <Text style={styles.bio} numberOfLines={3}>{BIO}</Text>

        <View style={styles.rowStats}>
          
          {
          STATS.map( (item,index) => ( 
            <View style={[styles.stats, index > 0 && styles.statDivider]} key={item.label}>
            
                <Text style={styles.value}>{item.value}</Text>
                <Text style={styles.label}>{item.label}</Text>
                
            </View>

          )
          )}
        </View>

        <View style={styles.tags}>
          {
            SKILLS.map( skillItem => (
              <View style={styles.tag} key={skillItem}>
                  <Text style={styles.tagText}>{skillItem}</Text>
              </View>
            ))
          }


        </View>


        <View style={styles.actions}>

          <View style={[styles.button, styles.buttonFilled]}>
            <Text style={[styles.buttonText,styles.buttonTextFilled]}>Follow</Text>
          </View>

          <View style={[styles.button, styles.buttonUnfilled]}>
            <Text style={[styles.buttonText, styles.buttonTextUnfilled]}>Message</Text>
          </View>

        </View>

      </View>


      {/* TODO STEP 5: polish the styles (colors, typography, shadow) */}
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    justifyContent: 'center',
    flex: 1,
    paddingHorizontal: 20,
    backgroundColor: COLORS.background,
  },
  card:{
    backgroundColor: COLORS.card,
    padding:20,
    borderRadius: 20,
    ...Platform.select({
      ios: {
        shadowColor: COLORS.text,
        shadowOffset: { width: 0, height: 8 },
        shadowOpacity: 0.12,
        shadowRadius: 16,
      },
      android: {
        elevation: 6,
      },
    }),
  },
  bannerWrap:{
    marginTop: -20,
    marginHorizontal: -20,
  },
  banner:{
    width: '100%',
    height: 120,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  header:{
    flexDirection:'row',
  },
  avatarWrap:{
    marginTop:-38
  },
  avatar:{
    width:96,
    height:96,
    borderRadius: 100,
    borderWidth: 4,
    borderColor:COLORS.card,
  },
  badge:{
    width:18,
    height:18,
    backgroundColor:COLORS.online,
    borderRadius:100,
    borderWidth:3,
    borderColor:COLORS.card,
    position:'absolute',
    top:70,
    right:5
  },
  information:{
    flex:1,
    marginTop:7,
    marginLeft:10
  },
  name:{
    fontSize: 25,
    fontWeight: 'bold',
    color: COLORS.text
  },
  role:{
    fontSize: 17,
    color: COLORS.primary,
    fontWeight: '500',
    marginTop: 2,
  },
  location:{
    fontSize: 16,
    color: COLORS.muted,
    marginTop: 2,
  },
  bio:{
    fontSize: 15,
    marginTop: 15,
    color:COLORS.text,
    lineHeight:22
  },
  rowStats:{
    flexDirection:"row",
    marginTop:12,
    borderTopWidth:1,
    borderBottomWidth: 1,
    borderColor: COLORS.border,
  },
  stats:{
    paddingVertical: 9,
    flex:1,
    alignItems:"center"
  },
  statDivider:{
    borderLeftWidth:1,
    borderColor:COLORS.border
  },
  value:{
    fontSize:24,
    fontWeight:"bold",
    color:COLORS.text
  },
  label:{
    fontSize:15,
    color: COLORS.muted
  },
  tags:{
    flexDirection: "row",
    flexWrap: 'wrap',
    gap:10,
    marginTop:15
  },
  tag:{
    paddingHorizontal:12,
    paddingVertical: 6,
    borderRadius:10000,
    backgroundColor: COLORS.primaryLight,
  },
  tagText:{
    fontSize:13,
    color: COLORS.primary,
    fontWeight:'600'
  },
  actions:{
    flexDirection:"row",
    marginTop: 12,
    gap: 6
  },
  button:{
    flex:1,
    flexBasis:0,
    alignItems:"center",
    paddingVertical:12,
    borderColor:COLORS.primary,
    borderWidth:2,
    borderRadius:12,
  },
  buttonFilled: {
    backgroundColor: COLORS.primary,
  },
  buttonUnfilled: {
    backgroundColor: 'transparent',
  },
  buttonText:{
    fontSize:17,
    fontWeight:'600'
  },
  buttonTextFilled: {
    color: COLORS.card,
  },
  buttonTextUnfilled: {
    color: COLORS.primary,
  },

});
