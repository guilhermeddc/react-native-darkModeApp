/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState, useRef} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  StatusBar,
  Image,
  Switch,
} from 'react-native';

import {
  Transitioning,
  TransitioningView,
  Transition,
} from 'react-native-reanimated';

import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';

Ionicons.loadFont();
Feather.loadFont();

declare var global: {HermesInternal: null | {}};

const App = () => {
  const ref = useRef<TransitioningView>(null);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const transition = (
    <Transition.Together>
      <Transition.In type="fade" durationMs={600} />
      <Transition.Out type="fade" durationMs={600} />
    </Transition.Together>
  );
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <Transitioning.View
        style={{
          flex: 1,
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
        {...{ref, transition}}>
        {isDarkMode && (
          <View
            style={{...StyleSheet.absoluteFillObject, backgroundColor: 'black'}}
          />
        )}
        <View style={{marginVertical: 40, marginHorizontal: 40}}>
          <View style={styles.switchWrapper}>
            <Switch
              value={isDarkMode}
              onValueChange={() => {
                if (ref.current) {
                  ref.current.animateNextTransition();
                }
                setIsDarkMode(!isDarkMode);
              }}
            />
            {isDarkMode ? (
              <Ionicons
                name="ios-sunny"
                size={25}
                color="#fff"
                style={{marginLeft: 20}}
              />
            ) : (
              <Ionicons
                name="ios-moon"
                size={25}
                color="teal"
                style={{marginLeft: 20}}
              />
            )}
          </View>
          <View style={styles.imageWrapper}>
            <Image
              source={require('./assets/images/profile.jpg')}
              style={styles.image}
            />
          </View>
          <Text
            style={{
              textAlign: 'center',
              fontSize: 20,
              marginTop: 70,
              marginBottom: 40,
              color: isDarkMode ? '#fff' : 'black',
            }}>
            An Image of a Model
          </Text>
          <View style={styles.iconsWrapper}>
            <View style={styles.icon}>
              <Feather name="github" size={32} color="#fff" />
            </View>
            <View style={styles.icon}>
              <Feather name="instagram" size={32} color="#fff" />
            </View>
            <View style={styles.icon}>
              <Feather name="facebook" size={32} color="#fff" />
            </View>
          </View>
          <Text
            style={{
              textAlign: 'center',
              fontSize: 20,
              marginVertical: 25,
              color: isDarkMode ? '#fff' : 'black',
            }}>
            Follow me on my Social media Accounts for the best JPEGS!!
          </Text>
        </View>
      </Transitioning.View>
    </>
  );
};

const styles = StyleSheet.create({
  switchWrapper: {
    flexDirection: 'row',
  },
  imageWrapper: {
    width: 300,
    height: 300,
    alignSelf: 'center',
  },
  image: {
    width: 300,
    height: 300,
    borderRadius: 300 / 2,
    overflow: 'hidden',
    marginVertical: 50,
    alignSelf: 'center',
  },
  iconsWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 30,
  },
  icon: {
    backgroundColor: 'teal',
    height: 60,
    width: 60,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 30,
  },
});

export default App;
