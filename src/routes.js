import React from 'react'
import { View, Text } from 'react-native'
import {Scene, Router, Stack, Actions} from 'react-native-router-flux';
import Character from './Character/Character';
import HomePage from './HomePage/HomePage';

const RouterComponent = () => {
    return (
        <Router>
            <Stack>
                <Scene key="HomePage" initial={true} component={HomePage} hideNavBar={true} />
                <Scene key="Character" component={Character} hideNavBar={true} />
                {/* <Scene key="CharacterPage" initial={true} component={CharacterPage} /> */}
            </Stack>
        </Router>
    )
}

export default RouterComponent
