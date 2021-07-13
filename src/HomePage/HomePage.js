import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  ActivityIndicator,
  ScrollView,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {SEARCH, HEART_FILLED, HEART_EMPTY} from '../assets/ICONS/index';
import {useSelector, useDispatch} from 'react-redux';
import {
  getCharacters,
  addToFavourites,
  removeFavourites,
  searchData,
} from './HomePageActions';

import {
  CharacterScreen
} from '../Character/CharacterActions'

import {FlatList} from 'react-native-gesture-handler';
import { Actions } from 'react-native-router-flux';

const HomePage = () => {
  const dispatch = useDispatch();
  const home = useSelector(state => state.home);
  const [ShowFavourites, setShowFavourites] = useState(false);
  const [Search, setSearch] = useState(false);
  const [SearchInput, setSearchInput] = useState('');

  let TypingTimeout;

  useEffect(() => {
    dispatch(getCharacters());
  }, []);

  return (
    <View style={[styles.containerStyle]}>
      {!ShowFavourites && !Search && (
        <View
          style={[styles.headerStyle]}>
          <Text
            style={{fontSize: hp('2.5%'), fontFamily: 'Roboto-Bold', color: 'white'}}>
            The Breaking Bad
          </Text>
          <TouchableOpacity onPress={() => setSearch(!Search)}>
            <Image source={SEARCH} style={{marginLeft: 80}} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setShowFavourites(!ShowFavourites)}>
            <Image source={HEART_FILLED} style={{marginRight: 20}} />
          </TouchableOpacity>
        </View>
      )}
      {ShowFavourites && (
        <View
          style={styles.headerStyle}>
          <Text
            style={{fontSize: hp('2%'), fontFamily: 'Roboto-Bold', color: '#18CA75'}}>
            Favourites
          </Text>
          <TouchableOpacity onPress={() => setShowFavourites(!ShowFavourites)}>
            <Text
              style={{
                fontFamily: 'Roboto-Bold',
                color: 'white',
                paddingRight: hp('2%'),
                fontSize:hp('2.5%')
              }}>
              X
            </Text>
          </TouchableOpacity>
        </View>
      )}
      {Search && (
        <View
          style={[styles.headerStyle,{backgroundColor:'#242424'}]}>
          <TextInput
            placeholder="Search"
            placeholderTextColor="#ABABAB"
            style={[styles.searchTextStyle]}
            onChangeText={val => {
              clearTimeout(TypingTimeout)
              TypingTimeout = setTimeout(() => {
                dispatch(searchData(val));
              },500)
              }
            }   
          />
          <TouchableOpacity onPress={() => setSearch(!Search)}>
            <Text
              style={{
                fontFamily: 'Roboto-Bold',
                color: 'white',
                paddingRight: hp('2%'),
                fontSize:hp('2.5%')
              }}>
              X
            </Text>
          </TouchableOpacity>
        </View>
      )}
      <View style={{flex: 1}}>
        {home.showLoader && (
          <ActivityIndicator
            color="white"
            size="large"
            style={[styles.activityIndicator]}
          />
        )}
        {!home.showLoader && (
          <View>
            {!ShowFavourites && (
              <FlatList
                columnWrapperStyle={{justifyContent: 'space-between'}}
                numColumns={2}
                bounces={false}
                keyExtractor={(item, index) => index.toString()}
                data={home.characters}
                renderItem={({item}) => (
                  <View style={{marginTop: hp('3%'), paddingRight: hp('2%')}}>
                    <View>
                      <TouchableOpacity onPress={()=> dispatch(CharacterScreen(item))}>
                      <Image
                        source={{uri: item.img}}
                        style={{
                          width: wp('40%'),
                          height: hp('30%'),
                          borderRadius: 10,
                        }}
                      />
                      </TouchableOpacity>
                      <View>
                        <View
                          style={{
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            paddingTop: hp('1%'),
                          }}>
                          <Text style={{color: 'white', fontWeight: '700', fontSize:hp('1.5%')}}>
                            {item.name}
                          </Text>
                          <TouchableOpacity
                            onPress={() =>
                              home.favourites.includes(item)
                                ? dispatch(removeFavourites(item))
                                : dispatch(addToFavourites(item))
                            }>
                            <Image
                              source={
                                home.favourites.includes(item)
                                  ? HEART_FILLED
                                  : HEART_EMPTY
                              }
                              style={{alignSelf: 'flex-end'}}
                            />
                          </TouchableOpacity>
                        </View>
                        <View>
                          <Text
                            style={{
                              color: 'white',
                              fontFamily: 'Roboto-Light',
                              fontWeight: '300',
                              fontSize:hp('1.2%')
                            }}>
                            {item.nickname}
                          </Text>
                        </View>
                      </View>
                    </View>
                  </View>
                )}
              />
            )}
            {ShowFavourites && (
              <FlatList
                columnWrapperStyle={{justifyContent: 'space-between'}}
                numColumns={2}
                bounces={false}
                keyExtractor={(item, index) => index.toString()}
                data={home.favourites}
                renderItem={({item}) => (
                  <View style={{marginTop: hp('3%'), paddingRight: hp('2%')}}>
                    <View>
                      <Image
                        source={{uri: item.img}}
                        style={{
                          width: wp('40%'),
                          height: hp('30%'),
                          borderRadius: 10,
                        }}
                      />
                      <View>
                        <View
                          style={{
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            paddingTop: hp('1%'),
                          }}>
                          <Text style={{color: 'white', fontWeight: '700', fontSize:hp('1.5%')}}>
                            {item.name}
                          </Text>
                          <TouchableOpacity
                            onPress={() =>
                              home.favourites.includes(item)
                                ? dispatch(removeFavourites(item))
                                : dispatch(addToFavourites(item))
                            }>
                            <Image
                              source={
                                home.favourites.includes(item)
                                  ? HEART_FILLED
                                  : HEART_EMPTY
                              }
                              style={{alignSelf: 'flex-end'}}
                            />
                          </TouchableOpacity>
                        </View>
                        <View>
                          <Text
                            style={{
                              color: 'white',
                              fontFamily: 'Roboto-Light',
                              fontWeight: '300',
                              fontSize:hp('1.2%')
                            }}>
                            {item.nickname}
                          </Text>
                        </View>
                      </View>
                    </View>
                  </View>
                )}
              />
            )}
          </View>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  containerStyle: {
    flex: 1,
    paddingLeft: wp('3%'),
    backgroundColor: 'black',
  },
  activityIndicator: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: 80,
  },
  headerStyle: {
    height: hp('10%'),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#070707',
  },
  searchTextStyle:  {
      fontSize: hp('4%'), 
      color: '#ABABAB',
      fontFamily:'Roboto-Light'
  }
});

export default HomePage;
