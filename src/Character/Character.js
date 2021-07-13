import React from 'react';
import {View, Text, Image, ImageBackground} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import LinearGradient from 'react-native-linear-gradient';

const Character = () => {
  const dispatch = useDispatch();
  const character = useSelector(state => state.character);
  const home = useSelector(state => state.home);

  return (
    <View style={{flex:1, backgroundColor:'black'}}>
      {character.currentCharacter && (
        <View style={{flex:1}}>
          <View style={{flex:1}}>
              <ImageBackground
                source={{uri: character.currentCharacter.img}}
                resizeMode="cover"
                style={{flex:1}} imageStyle={{opacity:0.5}}>
                  <Image
                      source={{uri: character.currentCharacter.img}}
                      style={{
                          width: wp('40%'),
                          height: hp('30%'), 
                          borderRadius:10, 
                          alignSelf:'center', top:'30%'
                      }}
                      resizeMode="contain"
                      />
                  <LinearGradient colors={['transparent', 'black', 'black']} style={{width:'100%', top:'30%', height:'40%'}}>
                    <Text style={{color:'white', fontSize:28, fontWeight:'bold', alignSelf:'center'}}>{character.currentCharacter.name}</Text>
                    <Text style={{color:'white', fontSize:16, alignSelf:'center'}}>{character.currentCharacter.nickname}</Text>
                  </LinearGradient>
              </ImageBackground>
          </View>
        </View>
      )}
    </View>
  );
};

export default Character;
