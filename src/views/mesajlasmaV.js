import React from 'react';
import { View, Text, StatusBar, TouchableOpacity, FlatList } from 'react-native';
import SImage from 'react-native-scalable-image';
import database from '@react-native-firebase/database';
import { observer } from 'mobx-react';

import { mesajlasmaS, ustBarS, mesajlasmaAlaniS } from '../styles/mesajlasmaS';
import helperC from '../controllers/helperC';
import mesajlasmaC from '../controllers/mesajlasmaC';


class mesajlasmaV extends React.Component {
    renderUstBar() {
        return (
            <View style={ustBarS.kapsayici}>
                <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
                    <SImage
                        source={require('../images/geributon.png')}
                        height={20}
                    />
                </TouchableOpacity>

                <SImage
                    source={{ uri: 'https://www.jodilogik.com/wordpress/wp-content/uploads/2016/05/people.png' }}
                    height={30}
                    style={ustBarS.profil}
                />

                <Text style={ustBarS.baslikYazi}>Mesajlaşma başlık</Text>

                <View style={ustBarS.sagdakiIkonlar}>
                    <TouchableOpacity>
                        <SImage
                            source={require('../images/kamera.png')}
                            height={24}
                        />
                    </TouchableOpacity>

                    <View style={ustBarS.bosluk} />

                    <TouchableOpacity>
                        <SImage
                            source={require('../images/telefon.png')}
                            height={18}
                        />
                    </TouchableOpacity>


                    <View style={ustBarS.bosluk} />

                    <TouchableOpacity>
                        <SImage
                            source={require('../images/3nokta.png')}
                            height={32}
                        />
                    </TouchableOpacity>
                </View>
            </View>
        );
    }

    renderMesajlasmaAlani() {
        return (
            <View style={mesajlasmaAlaniS.kapsayici}>
                <SImage source={require('../images/arkaplan.jpg')} width={helperC.w} style={mesajlasmaAlaniS.arkaplan} />
                <FlatList
                    data={mesajlasmaC.mesajlar.reverse()}
                    renderItem={d => ((d.item.gonderen === 1) ? this.renderSagMesaj(d.item) : this.renderSolMesaj(d.item))}
                    inverted
                />
            </View>
        );
    }

    renderSagMesaj(d) {
        return (
            <TouchableOpacity style={mesajlasmaAlaniS.sagMesaj}>
                <Text>{d.mesaj}</Text>
                <Text style={mesajlasmaAlaniS.mesajSaatSag}>{d.saat}</Text>
            </TouchableOpacity>
        );
    }
    renderSolMesaj(d) {
        return (
            <TouchableOpacity style={mesajlasmaAlaniS.solMesaj} onLongPress={() => this.props.navigation.goBack()}>
                <Text>{d.mesaj}</Text>
                <Text style={mesajlasmaAlaniS.mesajSaatSag}>{d.saat}</Text>
            </TouchableOpacity>
        );
    }

    render() {
        return (
            <View style={mesajlasmaS.kapsayici}>
                {this.renderUstBar()}
                {this.renderMesajlasmaAlani()}
            </View>
        );
    }
}

export default observer(mesajlasmaV);
