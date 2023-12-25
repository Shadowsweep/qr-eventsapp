import { useNavigation } from "@react-navigation/native";
import { View, Text , StyleSheet , Button} from "react-native";
import EventList from "../components/events/event-list";
const HomeScreen = () =>{
    const navigation = useNavigation()
    return (
        <View  style={styles.screen}>
          {/* <Text> This is the Home Screen </Text>
          <Button title="move to detail" onPress = {() =>navigation.navigate('Event')}  /> */}
          <EventList />
        </View>
      
         );
     }
     
     const styles = StyleSheet.create({
         screen:{
             padding:20,
         }
     
     }   
     )
     
     export default HomeScreen;