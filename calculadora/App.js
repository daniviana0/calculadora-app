import React, { useMemo, useState } from 'react';
import { StyleSheet, Text, View, StatusBar, Pressable  } from 'react-native';

import CalcButto from './components/CalcButton';
import Display from './components/Display';
import { themes } from "./theme/token";
import { createEngine } from "./utils/calcEngine";

export default function App() {
  const [mode, setMode] = useState("dark");
  const theme = themes[mode];
  return (
    <View style={[styles.container, {backgroundColor: theme.bg}]}>
      <Text>oiiii</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
