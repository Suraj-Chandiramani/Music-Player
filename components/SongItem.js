import React,{Component} from 'react';
import { Platform,View,StyleSheet,Text,Image } from 'react-native';
import * as GlobalStyles from "../styles";
import Colors from "../constants/Colors";
import {responsiveFontSize,responsiveWidth,responsiveHeight} from "react-native-responsive-dimensions";

export default class SongItem extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <View style={styles.mainContainer}>
                <View style={GlobalStyles.styles.songContainer}>
                    <Image source={{uri: this.props.song.thumbnail}}
                           style={GlobalStyles.styles.albumArt}/>
                    <View style={GlobalStyles.styles.infoContainer}>
                        <Text style={GlobalStyles.styles.songTitle}>{this.props.song.title}</Text>
                        <Text style={GlobalStyles.styles.albumText}>{this.props.song.album} - {this.props.song.artist}</Text>
                    </View>
                </View>
                <Text style={styles.durationText}>{this.props.song.duration}</Text>
            </View>
        );
    }
}


const styles = StyleSheet.create({
    mainContainer:{
        alignSelf: 'stretch',
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: responsiveWidth(5),
        paddingVertical: responsiveHeight(1.3),
        borderBottomWidth: 2,
        borderBottomColor: 'rgba(76,82,128,0.24)'
    },
    durationText:{
        color: Colors.headingColor,
        fontFamily: 'fira-regular',
        fontSize: responsiveFontSize(1.8),
        alignSelf: 'center'
    }
});

