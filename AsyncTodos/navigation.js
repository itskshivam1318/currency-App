import React from 'react'

import {createStackNavigator, createAppContainer} from 'react-navigation'
//importing Screens
import HomeScreen from './screens/HomeScreen'
import AddTaskScreen from './screens/AddTaskScreen'

const StackNavigator = createStackNavigator(
    {
        Home:{
            screen: HomeScreen
        },
        AddTask: {
            screen:AddTaskScreen
        },
    },{
        mode: 'modal',
        initialRoute: 'Home'
    }
)

const RootNavigator = createAppContainer(StackNavigator)

export default RootNavigator