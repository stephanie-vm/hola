import React from 'react';
import ReactDOM from 'react-dom';
import { ChakraProvider } from '@chakra-ui/react'
import './index.css';
import BasicUsage from './App'
import reportWebVitals from './reportWebVitals';
import {theme} from './resources/theme/index.js'


ReactDOM.render(
  <ChakraProvider theme={theme}>
    <BasicUsage />
  </ChakraProvider>,
  document.getElementById('root')
);
// console.log(theme.colors)

reportWebVitals();
