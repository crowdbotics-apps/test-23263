import React from "react"
import {
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
  Text,
  Button,
  Switch,
  TextInput,
  StyleSheet
} from "react-native"
import DateTimePicker from "react-native-datepicker"
import Icon from "react-native-vector-icons/FontAwesome"
import Slider from "@react-native-community/slider"
import { CheckBox } from "react-native-elements"
import { SlideMenuIcon } from "../../../navigator/slideMenuIcon"
import { connect } from "react-redux"
export class Blank extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return { headerLeft: <SlideMenuIcon navigationProps={navigation} /> }
  }
  state = { CheckBox_174: true, CheckBox_176: true }
  render = () => (
    <View>
      <View>
        <View />
        <View />
      </View>
      <View style={styles.View_160}>
        <View />
        <View />
      </View>
      <CheckBox
        title="Checkbox"
        checked={this.state.CheckBox_174}
        onPress={nextChecked => this.setState({ CheckBox_174: nextChecked })}
      />
      <CheckBox
        title="Radio button"
        checkedIcon="dot-circle-o"
        uncheckedIcon="circle-o"
        checked={this.state.CheckBox_176}
        onPress={nextChecked => this.setState({ CheckBox_176: nextChecked })}
      />
      <Button title="Press me!" onPress={() => alert("Pressed!")} />
      <Button title="Press me!" onPress={() => alert("Pressed!")} />
      <Icon name="star" />
    </View>
  )
}

const styles = StyleSheet.create({
  View_1: {},
  View_154: {},
  View_155: {},
  View_156: {},
  View_160: { flexDirection: "row" },
  View_161: {},
  View_162: {},
  CheckBox_174: {},
  CheckBox_176: {},
  Button_164: {},
  Button_169: {},
  Icon_239: {}
})

function mapStateToProps(state) {
  return { state: state.apiReducer }
}
const actionCreators = {}
export default connect(mapStateToProps, actionCreators)(Blank)
