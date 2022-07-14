import React, { FC } from 'react';
//navigation
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Welcome from 'screens/Welcome';
import Home from 'screens/Home';
import Greeting from 'components/Header/Greetings/index';
import Profile from 'components/Header/Profile';
import ProfileImage from 'assets/avi/avatar.png';
import { colors } from 'components/colors';

export type RootStackParamList = {
    Welcome: undefined;
    Home: undefined
}

const Stack = createStackNavigator<RootStackParamList>();

const RootStack: FC = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator
                initialRouteName='Home'
                screenOptions={{
                    headerStyle: {
                        backgroundColor: colors.graylight,
                        borderBottomWidth: 0,
                        shadowColor: 'transparent',
                        shadowOpacity: 0,
                        elevation: 0,
                        height: 120
                    },
                    headerTintColor: colors.secondary,
                    headerRightContainerStyle: {
                        paddingRight: 25
                    },
                    headerLeftContainerStyle: {
                        paddingLeft: 10
                    },
                    headerRight: () => (
                        <Profile
                            image={ProfileImage}
                            imageContainerStyle={{backgroundColor: colors.tertiary}}
                        />
                    )
                }}
            >
                <Stack.Screen
                    name="Welcome"
                    component={Welcome}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="Home"
                    component={Home}
                    options={{ 
                        headerTitle: (props) => (
                            <Greeting
                                mainText='Hi Zuha!'
                                subText='Welcome Back'
                                {...props}
                            />
                        ),
                        headerLeft: () => <></>
                    }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default RootStack;