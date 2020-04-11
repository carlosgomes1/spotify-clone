import React, { useState } from 'react'
import { View, Text, TouchableOpacity, ScrollView, Image } from 'react-native'

import { Feather } from '@expo/vector-icons'

import styles from './styles'

export default function Main() {
    const boaTarde = [
        {   
            img1: 'https://lastfm.freetls.fastly.net/i/u/770x0/22803ebce445484e87e55796dac13c76.jpg', 
            img2: 'https://img.discogs.com/KPpsxZIJ6i8nWxfpe2eRz9bloQU=/fit-in/300x300/filters:strip_icc():format(jpeg):mode_rgb():quality(40)/discogs-images/R-3019269-1445881833-9535.jpeg.jpg', 
            img3: 'https://lastfm.freetls.fastly.net/i/u/770x0/e9931be215c64aeaa7240513fc86758a.jpg', 
            img4: 'https://4.bp.blogspot.com/-O5KaCrJIs4I/V44kr1jVWxI/AAAAAAAAD_k/AQViufDFnwUhj8y6D3ehXLl1b5Se82fywCLcB/s400/desiigner-new-english.jpg', 
            title: 'black' 
        },

        {   
            img1: 'https://http2.mlstatic.com/cd-planta-e-raiz-este-e-o-remedio-novo-D_NQ_NP_12579-MLB20062218983_032014-F.jpg', 
            img2: 'https://images.suamusica.com.br/dGopbAfgY7sn6KV2zjKaiLBjvc8=/240x240/486341/621894/cd_cover.jpg', 
            img3: 'https://img.discogs.com/vvCruQcMAYT8R3tJ6dGhB0hKW3w=/fit-in/300x300/filters:strip_icc():format(jpeg):mode_rgb():quality(40)/discogs-images/R-1012697-1326536550.jpeg.jpg', 
            img4: 'https://i.pinimg.com/474x/07/c0/30/07c03013feeed6eee6ebc232214016fc.jpg', 
            title: 'Amo a Julia' 
        },

        { 
            img1: 'https://s.mxmcdn.net/images-storage/albums4/4/7/9/8/5/9/43958974_800_800.jpg', 
            img2: 'https://images.genius.com/3cdbe4a1710618cbafe74a4d6b05551f.500x500x1.jpg', 
            img3: 'https://i.scdn.co/image/ab67616d0000b273b7c95d6ed02efaa00f1a0969', 
            img4: 'https://i.scdn.co/image/ab67616                                                                                                     d0000b273c0e7bf5cdd630f314f20586a', 
            title: 'banho' 
        },

        { 
            img1: 'https://i.scdn.co/image/ab67616d0000b27316b4a7826f816788b3f3e05e', 
            img2: 'https://i.scdn.co/image/ab67616d0000b273c80aa60ed55b174917f68d07', 
            img3: 'https://i.scdn.co/image/ab67616d0000b2734e2a5390a672487c282f5ee7', 
            img4: 'https://i.scdn.co/image/ab67616d0000b273f55f6c2da30c091efe767926', 
            title: 'sambinha' 
        },

        { 
            img1: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS_ctnm6IkymJiNd0FpWVpcT2h2PgtOk1E388bwVjzzxngelWnM&usqp=CAU', 
            img2: 'https://i.scdn.co/image/ab67616d0000b2733eac0a18fdf3d3941cc6e3fd', 
            img3: 'https://i.scdn.co/image/ab67616d0000b2737007fc56fce764afccfc8063', 
            img4: 'https://i.scdn.co/image/ab67616d0000b273f0204d1babff9a7423614c00', 
            title: 'top do topo' 
        },

        { 
            img1: 'https://i.scdn.co/image/ab67616d0000b27312933ba406ca66d3f3b36d11', 
            img2: 'https://i.scdn.co/image/ab67616d0000b27346c5a0e12aa63af3fbd9a0e7', 
            img3: 'https://i.scdn.co/image/ab67616d0000b27364cbad69fa2a4896699ecd9d', 
            img4: 'https://i.scdn.co/image/ab67616d0000b273cc576f35200b3f00e6fefb5e', 
            title: 'Amém' 
        }
    ]

    return(
        <View style={ styles.container }>
            <ScrollView>
                <TouchableOpacity>
                    <Feather name="settings" color="#FFF" size={ 24 } style={ styles.settings }/>
                </TouchableOpacity>
                <Text style={ styles.headerTitle }> Boa tarde </Text>
                <View style={ styles.boaTardeList }>
                    {boaTarde.map( item => (
                        <View style={ styles.boaTardeItem }>
                        <View style={ styles.boaTardeItemImagens }>
                        <Image 
                            style={ styles.boaTardeItemImage }
                            source = {{uri:`${item.img1}`}}
                        />
                        <Image 
                            style={ styles.boaTardeItemImage }
                            source = {{uri:`${item.img2}`}}
                        />
                        <Image 
                            style={ styles.boaTardeItemImage }
                            source = {{uri:`${item.img3}`}}
                        />
                        <Image 
                            style={ styles.boaTardeItemImage }
                            source = {{uri:`${item.img4}`}}
                        />
                        </View>
                            <Text style={ styles.boaTardeItemTitle }> {item.title} </Text>
                    </View>

                    ))}
                </View>
            
                <Text style={ styles.headerTitle }> Tocadas recentemente </Text>
                <ScrollView horizontal>
                    <View style={ styles.tocadasRecentementeItem }>
                        <View style={ styles.tocadasRecentementeItemImagens }>
                        <Image 
                            style={ styles.tocadasRecentementeItemImage }
                            source = {{uri:'https://i.scdn.co/image/ab67616d0000b273f0204d1babff9a7423614c00'}}
                        />
                        <Image 
                            style={ styles.tocadasRecentementeItemImage }
                            source = {{uri:'https://i.scdn.co/image/ab67616d0000b2737007fc56fce764afccfc8063'}}
                        />
                        <Image 
                            style={ styles.tocadasRecentementeItemImage }
                            source = {{uri:'https://i.scdn.co/image/ab67616d0000b2733eac0a18fdf3d3941cc6e3fd'}}
                        />
                        <Image 
                            style={ styles.tocadasRecentementeItemImage }
                            source = {{uri:'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS_ctnm6IkymJiNd0FpWVpcT2h2PgtOk1E388bwVjzzxngelWnM&usqp=CAU'}}
                        />
                        </View>
                        <Text style={ styles.tocadasRecentementeItemText }> top do topo </Text>
                    </View>
                    <View style={ styles.tocadasRecentementeItem }>
                        <View style={ styles.tocadasRecentementeItemImagens }>
                        <Image 
                            style={ styles.tocadasRecentementeItemImage }
                            source = {{uri:'https://i.pinimg.com/474x/07/c0/30/07c03013feeed6eee6ebc232214016fc.jpg'}}
                        />
                        <Image 
                            style={ styles.tocadasRecentementeItemImage }
                            source = {{uri:'https://images.suamusica.com.br/dGopbAfgY7sn6KV2zjKaiLBjvc8=/240x240/486341/621894/cd_cover.jpg'}}
                        />
                        <Image 
                            style={ styles.tocadasRecentementeItemImage }
                            source = {{uri:'https://http2.mlstatic.com/cd-planta-e-raiz-este-e-o-remedio-novo-D_NQ_NP_12579-MLB20062218983_032014-F.jpg'}}
                        />
                        <Image 
                            style={ styles.tocadasRecentementeItemImage }
                            source = {{uri:'https://img.discogs.com/vvCruQcMAYT8R3tJ6dGhB0hKW3w=/fit-in/300x300/filters:strip_icc():format(jpeg):mode_rgb():quality(40)/discogs-images/R-1012697-1326536550.jpeg.jpg'}}
                        />
                        </View>
                        <Text style={ styles.tocadasRecentementeItemText }> Amo a Julia </Text>
                    </View>
                    <View style={ styles.tocadasRecentementeItem }>
                        <View style={ styles.tocadasRecentementeItemImagens }>
                        <Image 
                            style={ styles.tocadasRecentementeItemImage }
                            source = {{uri:'https://i.scdn.co/image/ab67616d0000b273f55f6c2da30c091efe767926'}}
                        />
                        <Image 
                            style={ styles.tocadasRecentementeItemImage }
                            source = {{uri:'https://i.scdn.co/image/ab67616d0000b27316b4a7826f816788b3f3e05e'}}
                        />
                        <Image 
                            style={ styles.tocadasRecentementeItemImage }
                            source = {{uri:'https://i.scdn.co/image/ab67616d0000b2734e2a5390a672487c282f5ee7'}}
                        />
                        <Image 
                            style={ styles.tocadasRecentementeItemImage }
                            source = {{uri:'https://i.scdn.co/image/ab67616d0000b273c80aa60ed55b174917f68d07'}}
                        />
                        </View>
                        <Text style={ styles.tocadasRecentementeItemText }> sambinha </Text>
                    </View>
                </ScrollView>
            </ScrollView>
        </View>
    )
}