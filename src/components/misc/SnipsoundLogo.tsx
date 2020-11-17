import React from 'react';
import { View, Image } from 'react-native';
const logo = require('../../assets/Snipsound-2.png')

// Component for the logo banner
const SnipsoundLogo = () => {
    return (
        <>
            <Image style={{width: undefined, alignSelf: "stretch", marginVertical: -110, marginHorizontal: 10 }} resizeMode="contain" source={logo} />
        </>
    );
};

export default SnipsoundLogo;