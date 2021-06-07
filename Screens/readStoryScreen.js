import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
} from 'react-native';

export default class ReadStoryScreen extends React.Component {
  render() {
    return (
      <View style={styles.allText}>

        <Text style={styles.displayText}>
          😞 Sorry, this screen is not ready to show you yet. 😞
          You can read stories in this screen in the upcoming versions of this
          app.
        </Text>

        <Text style={styles.displayText}>
          But for now, you can read some moral stories by just pasting this link
          in a new tab - 
        </Text>
    <center><a href={"https://americanliterature.com/short-stories-for-children"} target="_blank">American Literature</a></center>
        <center><a href={"https://www.kidsworldfun.com/shortstories.php"} target="_blank">For kids</a></center>
        <center><a href={"https://shortstoriesshort.com/story/category/animal-tales/"} target="_blank">Animal Tales</a></center>
        <center><a href={"https://www.readstoriesforkids.com/"} target="_blank">Stories</a></center>

      </View>
    );
  }
}
const styles = StyleSheet.create({
  allText: {
    backgroundColor: '#ef7b64',
    flex: 1,
    fontFamily: 'comic sans ms',
  },
  displayText: {
    fontFamily: 'britannic',
    fontSize: 20,
    padding: 15,
  },
});
