import React, { Component } from 'react';
import Home from './HomeComponent';
import Directory from './DirectoryComponent';
import CampsiteInfo from './CampsiteInfoComponent';
import Reservation from './ReservationComponent';
import { View, Platform, ScrollView } from 'react-native';
import { createStackNavigator, createDrawerNavigator } from 'react-navigation';
import { connect } from 'react-redux';
import { fetchCampsites, fetchComments, fetchPromotions,
    fetchPartners } from '../redux/ActionCreators';
import { Icon } from 'react-native-vector-icons/Icon';

const mapDispatchToProps = {
    fetchCampsites,
    fetchComments,
    fetchPromotions,
    fetchPartners
};

const DirectoryNavigator = createStackNavigator(
    {
        Directory: { screen: Directory },
        CampsiteInfo: { screen: CampsiteInfo }
    },
    {
        initialRouteName: 'Directory',
        navigationOptions: {
            headerStyle: {
                backgroundColor: '#5637DD'
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                color: '#fff'
            }
        }
    }
);

const HomeNavigator = createStackNavigator(
    {
        Home: { screen: Home }
    },
    {
        navigationOptions: {
            headerStyle: {
                backgroundColor: '#5637DD'
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                color: '#fff'
            }
        }
    }
);

const ReservationNavigator = createStackNavigator(
    {
        Reservation: { screen: Reservation }
    },
    {
        navigationOptions: ({navigation}) => ({
            headerStyle: {
                backgroundColor: '#5637DD'
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                color: '#fff'
            },
            headerLeft: <Icon
                name='tree'
                type='font-awesome'
                iconStyle={styles.stackIcon}
                onPress={() => navigation.toggleDrawer()}
            />
        })
    }
);


const MainNavigator = createDrawerNavigator(
    {
        Home: { 
            screen: HomeNavigator,
        navigationOptions: {
            drawerIcon: ({tintColor}) => (
                <Icon
                    name='home'
                    type='font-awesome'
                    size={24}
                    color={tintColor}
                    />
            )
        } },
        Directory: { 
            screen: DirectoryNavigator,
            navigationOptions: {
                drawerIcon: ({tintColor}) => (
                    <Icon
                        name='list'
                        type='font-awesome'
                        size={24}
                        color={tintColor}
                        />
                )
            }
        },
        const ReservationNavigator = createStackNavigator(
            {
                Reservation: { screen: Reservation }
            },
            {
                navigationOptions: ({navigation}) => ({
                    headerStyle: {
                        backgroundColor: '#5637DD'
                    },
                    headerTintColor: '#fff',
                    headerTitleStyle: {
                        color: '#fff'
                    },
                    headerLeft: <Icon
                        name='tree'
                        type='font-awesome'
                        iconStyle={styles.stackIcon}
                        onPress={() => navigation.toggleDrawer()}
                    />
                })
            }
        );

        About: {
            screen: AboutNavigator,
            navigationOptions: {
                drawerLabel: 'About Us',
                drawerIcon: ({tintColor}) => (
                    <Icon
                        name='info-circle'
                        type='font-awesome'
                        size={24}
                        color={tintColor}
                        />
                )
            }
        },
        Contact: {screen: ContactNavigator}
    },
    {
        drawerBackgroundColor: '#CEC8FF'
    }
);

const CustomerDrawerContentComponent = props => (
    <ScrollView>
        <SafeAreaView
        style={styles.container}
        forceInset={{top:'always', horizontal: 'never'}}>
            <View style={styles.drawerHeader}>
                <View style={{flex: 1}}>
                    <Image source={require('./images/logo.png') style={styles.drawerImage}}>>
            </View>
            <View style={{flex: 2}}>
                <Text style={styles.drawerHeaderText}>NuCamp</Text>
            </View>      
            </View>
            <DrawerItems {...props} />
            </SafeAreaView>
    </ScrollView>
);

class Main extends Component {

    componentDidMount() {
        this.props.fetchCampsites();
        this.props.fetchComments();
        this.props.fetchPromotions();
        this.props.fetchPartners();
    }
    
    render() {
        return (
            <View style={{
                flex: 1,
                paddingTop: Platform.OS === 'ios' ? 0 : Expo.Constants.statusBarHeight
            }}>
                <MainNavigator />
            </View>
        );
    }
}

export default connect(null, mapDispatchToProps)(Main);
