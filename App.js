import React, { useCallback, useMemo, useRef } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import {
  BottomSheetModal,
  BottomSheetModalProvider,
} from '@gorhom/bottom-sheet';

import { GestureHandlerRootView } from 'react-native-gesture-handler';

import { NavigationContainer } from '@react-navigation/native';

import { Provider as PaperProvider } from 'react-native-paper';
import Main from "./src/screens/Main"


const App = () => {
  // ref
  const bottomSheetModalRef = useRef(null);
  // variables
  const snapPoints = useMemo(() => ['25%', '50%'], []);
  // callbacks
  const handlePresentModalPress = useCallback(() => {
    bottomSheetModalRef.current?.present();
  }, []);
  const handleSheetChanges = useCallback((index) => {
    console.log('handleSheetChanges', index);
  }, []);
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
          <BottomSheetModal
            ref={bottomSheetModalRef}
            index={1}
            snapPoints={snapPoints}
            onChange={handleSheetChanges}
          >
            <View style={styles.contentContainer}>
              <Text style={styles.sheetText}>כאן יהיה תפריט</Text>
              <Text style={styles.sheetText}>קישור</Text>

              <Button title="close sheet!" onPress={closeSheet} />
            </View>
          </BottomSheetModal>
          {/* </View> */}
        </BottomSheetModalProvider>
      </GestureHandlerRootView>
      </NavigationContainer>
    </PaperProvider>
  );
};

const styles = StyleSheet.create({
  contentContainer: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-around',

  },
  sheetText: {
    marginBottom: 3,
  }
});
export default App;