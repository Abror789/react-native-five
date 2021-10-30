import React, {useState} from 'react';
import {View, Text, TextInput, Button, ScrollView, StyleSheet, Image, SafeAreaView} from "react-native";

const App = () => {

    return (
        <SafeAreaView style={{backgroundColor: '#0e2769', flex: 1}}>
            <View style={{
                backgroundColor: "#fff",
                justifyContent: "center",
                alignItems: "center",
                marginTop: 30
            }}>
                <Image
                    style={{
                        width: 200,
                        height: 70,
                        resizeMode: 'contain',
                        marginBottom: 0
                    }}
                    source={{
                        uri: "data:image/jpeg;base64,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"
                    }}
                />
            </View>
            <ScrollView>
                <View>
                    <Image
                        style={{
                            marginTop: -5,
                            width: "100%",
                            height: 220,
                            resizeMode: 'cover'
                        }}
                        source={{
                            uri: "https://storage.kun.uz/source/thumbnails/_medium/7/wOYLjNwOYwqKSKKYklUQ_wGRFRZgQEGj_medium.jpg",
                        }}
                    />
                </View>
                <View
                    style={{
                        marginTop: -5,
                        backgroundColor: "#fafafa",
                        paddingHorizontal: 20
                    }}>
                    <Text style={{fontSize: 22, fontWeight: "bold"}}>
                        Shavkat Mirziyoyev xorijdagilarning
                        daromadini soliqqa tortish bo'yicha o'z fikrini bildirdi
                    </Text>
                </View>
                <View style={{
                    backgroundColor: "#fafafa",
                    paddingHorizontal: 15,
                    alignItems: "center",
                    flexDirection: "row",
                    paddingTop: 7
                }}>
                    <View>
                        <Image
                            style={{width: 22, height: 22}}
                            source={require('./assets/calendar.png')}
                        />
                    </View>
                    <View>
                        <Text style={{color: "#8f8f8f", marginLeft: 7}}>
                            11:07 / 16.10.2021
                        </Text>
                    </View>
                </View>
                <View>
                    <Image
                        style={{
                            width: "100%",
                            height: 200,
                            resizeMode: 'cover'
                        }}
                        source={{
                            uri: "https://storage.kun.uz/source/thumbnails/_medium/7/H5v8UGwKYXWaBX1Ksk4vpzKiFOq3MY-G_medium.jpg"
                        }}
                    />
                </View>
                <View style={{
                    backgroundColor: "#fff",
                    paddingTop:10,
                    paddingHorizontal:20
                }}>
                    <View style={{flexDirection:"row",paddingVertical:10}}>
                        <View>
                            <Image
                                style={{
                                    width: 110,
                                    height: 80,
                                    borderRadius: 8
                                }}
                                source={{
                                    uri: "https://storage.kun.uz/source/thumbnails/_medium/7/fXoSJnJrz2nxFpZ7Be5uUwBIDcuWp4O5_medium.jpg"
                                }}
                            />
                        </View>
                        <View style={{marginLeft:10}}>
                            <View style={{flexDirection: "row"}}>
                                <Image
                                    style={{width: 22, height: 22}}
                                    source={require('./assets/calendar.png')}
                                />
                                <Text style={{color: "#8f8f8f", marginLeft: 7}}>
                                    19:10 / 15.10.2021
                                </Text>
                            </View>
                            <View style={{width:"82%"}}>
                                <Text style={{fontSize:13,fontWeight:"bold"}}>
                                    «Laqaydan chiqqan Bonapart».
                                    Sho‘rolarga qarshi 10 yildan
                                    ziyod jang qilgan Ibrohimbek
                                    Chaqaboyev nega jadidlarni
                                    yoqtirmagan?
                                </Text>
                            </View>
                        </View>
                    </View>
                    <View
                        style={{
                            width:'100%',
                            height:2,
                            backgroundColor:"#ececec",
                        }}>

                    </View>
                </View>




                <View style={{
                    backgroundColor: "#fff",
                    paddingHorizontal: 20,
                    paddingTop:10

                }}>
                    <View style={{flexDirection: "row",paddingVertical:10}}>
                        <View>
                            <Image
                                style={{
                                    width: 110,
                                    height: 80,
                                    borderRadius: 8
                                }}
                                source={{
                                    uri: "https://storage.kun.uz/source/thumbnails/_medium/7/DEEVrKsWo0Sh9ZYGioQNF3Wtq0qAIr_x_medium.jpg"
                                }}
                            />
                        </View>
                        <View style={{marginLeft:10}}>
                            <View style={{flexDirection: "row"}}>
                                <Image
                                    style={{width: 22, height: 22}}
                                    source={require('./assets/calendar.png')}
                                />
                                <Text style={{color: "#8f8f8f", marginLeft: 7}}>
                                    15:45 / 15.10.2021
                                </Text>
                            </View>
                            <View style={{width:"80%"}}>
                                <Text style={{fontSize:13,fontWeight:"bold"}}>
                                    Rustam Azimov hukumatdan ketganidan
                                    beri ilk marta OAVda chiqish qildi
                                </Text>
                            </View>
                        </View>
                    </View>
                    <View
                        style={{
                            width:'100%',
                            height:2,
                            backgroundColor:"#ececec",
                        }}>
                    </View>
                </View>



                <View style={{
                    backgroundColor: "#fff",
                    paddingHorizontal: 20,
                    paddingTop:10

                }}>
                    <View style={{flexDirection: "row",paddingVertical:10}}>
                        <View>
                            <Image
                                style={{
                                    width: 110,
                                    height: 80,
                                    borderRadius: 8
                                }}
                                source={{
                                    uri: "https://storage.kun.uz/source/thumbnails/_medium/7/wVhj06gX_B13GIaOLLJ-XdGraArDSZVv_medium.jpg"
                                }}
                            />
                        </View>
                        <View style={{marginLeft:10}}>
                            <View style={{flexDirection: "row"}}>
                                <Image
                                    style={{width: 22, height: 22}}
                                    source={require('./assets/calendar.png')}
                                />
                                <Text style={{color: "#8f8f8f", marginLeft: 7}}>
                                    14:49 / 15.10.2021
                                </Text>
                            </View>
                            <View style={{width:"80%"}}>
                                <Text style={{fontSize:13,fontWeight:"bold"}}>
                                    Abgor manzillar: Toshkentdagi Abdulla Qodiriy bog'i
                                </Text>
                            </View>
                        </View>
                    </View>
                    <View
                        style={{
                            width:'100%',
                            height:2,
                            backgroundColor:"#ececec",
                        }}>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({})

export default App;
