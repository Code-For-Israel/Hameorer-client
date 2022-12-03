import React, { useCallback, useMemo, useRef } from 'react';
// import { View, Text, StyleSheet, Button } from 'react-native';


import { FAB } from 'react-native-paper';
import { StyleSheet, View } from 'react-native';


import {
  BottomSheetModal,
  BottomSheetModalProvider,
} from '@gorhom/bottom-sheet';

import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { Provider as PaperProvider } from 'react-native-paper';
import Main from "./src/screens/Main"
import SheetBottomMenu from './src/navigation/SheetBottomMenu';

import CustomBackground from "./src/navigation/CustomBackground"

const App = () => {
  // ref
  const bottomSheetModalRef = useRef(null);
  // variables
  // const snapPoints = useMemo(() => ['25%', '50%'], []);
  const snapPoints = useMemo(() => ['40%', '40%'], []);
  // callbacks
  const handlePresentModalPress = useCallback(() => {
    bottomSheetModalRef.current?.present();
  }, []);
  // const handleSheetChanges = useCallback((index) => {
  //   console.log('handleSheetChanges', index);
  // }, []);
  const closeSheet = useCallback(() => {
    bottomSheetModalRef.current?.dismiss()
  }, [])
  // renders
  return (
    <PaperProvider>
      <NavigationContainer>
        <GestureHandlerRootView style={{ flex: 1 }}>
          <BottomSheetModalProvider>
            <Main handlePresentModalPress={handlePresentModalPress} />
            <FAB
              style={styles.fab}
              icon="plus"
              onPress={() => handlePresentModalPress()}
              
            />
            <BottomSheetModal
              ref={bottomSheetModalRef}
              index={1}
              snapPoints={snapPoints}
              // onChange={handleSheetChanges}
              backgroundComponent={CustomBackground}
              enablePanDownToClose={true}
            >
              {/* the content in difrent component */}
              <SheetBottomMenu closeSheet={closeSheet} />
            </BottomSheetModal>

          </BottomSheetModalProvider>
        </GestureHandlerRootView>
      </NavigationContainer>
    </PaperProvider>
  );
};

const styles = StyleSheet.create({

  fab: {
    position: 'absolute',
    margin: 16,
    bottom: 80,
    right: 0,
  },
});
// const styles = StyleSheet.create({
//   contentContainer: {
//     flex: 1,
//     flexDirection: 'column',
//     alignItems: 'center',
//     justifyContent: 'space-around',

//   },
//   sheetText: {
//     marginBottom: 3,
//   }
// });
export default App;