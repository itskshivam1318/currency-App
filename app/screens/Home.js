import React, { useState,useEffect } from "react";
import { View, Text, StatusBar } from "react-native";

import { Container } from "../components/Contianer";
import { Logo } from "../components/Logo";
import {InputWithButton} from "../components/TextInput";

const TEMP_BASE_CURRENCY = 'USD';
const TEMP_QUOTE_CURRENCY = 'GBP';
const TEMP_BASE_PRICE = '1';
const TEMP_QUOTE_PRICE = '1.30';

export default function Home(){
  const [text,setText] = useState(100)
  const [output,setOutput] = useState(0)
  const handlePressBaseCurrency = () =>{
    console.log('press base')
  }

  const handlePressQuoteCurrency = () => {
    console.log('press quote')

  }

  useEffect(() => {
    setOutput(Number(text)*1.30)
  }, [text])


  return (
    <Container>
      <StatusBar translucent={false} barStyle="light-content" />
      <Logo />
      <InputWithButton 
      buttonText={TEMP_BASE_CURRENCY}
      onPress={handlePressBaseCurrency}
      value={String(text)}
      setText={setText}/>
      <InputWithButton 
      buttonText={TEMP_QUOTE_CURRENCY}
      onPress={handlePressQuoteCurrency}
      editable={false}
      value={String(output)}/>
      <Text>{text}</Text>
    </Container>
  );
};
