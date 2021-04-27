import React from 'react'
import { StatusBar } from 'react-native'

import Navigation from './src/navigation/index'

import {AuthProvider} from './src/context/auth'
import {DataProvider} from './src/context/data'

const App = () => {
  return (
    <>
      <StatusBar/>
      <AuthProvider>
      <DataProvider>
          <Navigation/>
      </DataProvider>
      </AuthProvider>
    </>
  )
}

export default App
