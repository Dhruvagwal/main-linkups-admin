import React from 'react'
import { StatusBar } from 'react-native'

import Navigation from './src/navigation/index'

import {AuthProvider} from './src/context/auth'
import {DataProvider} from './src/context/data'

import color from './src/asset/styles/color'

const App = () => {
  return (
    <>
      <StatusBar translucent={true} backgroundColor={'transparent'} />
      <AuthProvider>
      <DataProvider>
          <Navigation/>
      </DataProvider>
      </AuthProvider>
    </>
  )
}

export default App
