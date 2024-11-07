import React from 'react';
import { SafeAreaView } from 'react-native';
import Title from './Título/index.js';  // Importa o componente Title que criamos

export default function App() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Title />  {/* Exibe o título na tela */}
    </SafeAreaView>
  );
}
