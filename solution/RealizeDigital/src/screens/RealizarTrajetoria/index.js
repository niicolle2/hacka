import React from 'react';
import {SafeAreaView, ScrollView, View, Text, StatusBar} from 'react-native';

class RealizarTrajetoria extends React.Component {
  constructor(props) {
    super(props);
  }

  static navigationOptions = {
    title: null,
    headerLeft: null,
    tabBarLabel: 'TAB',
  };

  render() {
    const {navigate} = this.props.navigation;

    return (
      <>
        <StatusBar barStyle="light-content" />
        <SafeAreaView>
          <ScrollView contentInsetAdjustmentBehavior="automatic">
            <View>
              <Text>Esta é a tela de trajetória!</Text>
            </View>
          </ScrollView>
        </SafeAreaView>
      </>
    );
  }
}

export default RealizarTrajetoria;
