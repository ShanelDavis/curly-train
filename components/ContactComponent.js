import React, { Component } from 'react';
import { View, Text, ScrollView } from 'react-native';
import { Card } from 'react-native-elements';
import { CAMPSITES } from '../shared/campsites';
import { PROMOTIONS } from '../shared/promotions';
import { PARTNERS } from '../shared/partners';

class Contact extends Component {

    constructor(props) {
        super(props);
        this.state = {
            campsites: CAMPSITES,
            promotions: PROMOTIONS,
            partners: PARTNERS
        };
    }

    static navigationOptions = {
        title: 'Contact Us'
    }

    render() {
        return (
            <ScrollView>
                    <Card title="Contact Information" wrapperStyle={{margin: 20}}>
                        <text>1 Nucamp Way</text>
                        <text>Seattle, WA 98001</text>
                        <text wrapperStyle={{marginBottom: 10}}>U.S.A.</text>
                        <text>Phone: 1-206-555-1234</text>
                        <text>Email: campsites@nucamp.co</text>
                    </Card>
            </ScrollView>
        );
    }
}

export default Contact;