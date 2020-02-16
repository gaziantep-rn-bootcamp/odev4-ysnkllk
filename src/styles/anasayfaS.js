import { StyleSheet } from 'react-native';
import helperC from '../controllers/helperC';
import anasayfaC from '../controllers/anasayfaC';

const splashS = StyleSheet.create({
    kapsayici: {
        flex: 1,
        backgroundColor: 'rgba(33,38,44,1)',
        justifyContent: 'center',
        alignItems: 'center',
    },

    whIkon: {
        position: 'absolute',
        top: helperC.h * 0.3
    },


    fromFacebook: {
        position: 'absolute',
        bottom: 20
    }
});


const ustBarS = StyleSheet.create({
    ustBar: {
        backgroundColor: '#075e55',
        width: helperC.w,
        height: 50,
        flexDirection: 'row',
        alignItems: 'center'
    },
    ustBarSagIkonlar: {
        position: 'absolute',
        right: 8,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row'
    },
    ustBar3Nokta: {
        marginLeft: 5
    }
});


const isimlerAlaniS = StyleSheet.create({
    isimlerAlani: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        backgroundColor: '#075e55',
        paddingBottom: 10,
        paddingTop: 10,
        paddingLeft: 20,
        
    },
    isimYazi: {
        color: 'rgba(255,255,255,0.3)',
        fontWeight: 'bold',
    },
    isimYaziAktif: {
        color: 'white',
        fontWeight: 'bold',
    },
    isimlerAlaniKameraIkon: {
        position: 'absolute',
        left: 8
    }
});


const anasayfaS = () => StyleSheet.create({
    kapsayici: {
        flex: 1,
    },
    pagesContainerStyle: {
        flex: 1
    },
    govde: {
        flex: 1
    },

    yeniMesajIkon: {
        position: 'absolute',    
        bottom: 1
    },
    yeniMesajIkonAlan: {
        borderWidth: 1,
        width: anasayfaC.tmp ? 47 : undefined,
        height: 47,
        borderRadius: 25,
        backgroundColor: anasayfaC.tmp ? 'red' : 'blue',
    },
    ikonrenk: {
        backgroundColor: 'red',
        width: anasayfaC.tmp ? 100 : undefined,
        borderWidth: 1,

    }
});

const mesajlasmaS = StyleSheet.create({
    kapsayici: {
        flexDirection: 'row',
        height: helperC.h * 0.12,
        borderColor: 'red'
    },
    profilResim: {
        alignSelf: 'center',
        marginLeft: 5,
        aspectRatio: 1,
        borderRadius: helperC.w * 0.6,
        overflow: 'hidden'
    },
    mesajBilgi: {
        borderColor: 'blue',
        flex: 1,
        justifyContent: 'center',
        marginLeft: 5,
        borderBottomWidth: 0.7,
        borderBottomColor: 'rgba(0,0,0,0.2)',
        borderRadius: 20,
    },

    numaraTarih: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    telefonNumara: {
        color: 'black',
        fontWeight: 'bold',
        paddingRight: 10,
        padding: 5,
        fontSize: 18
    },
    tarih: {
        fontSize: 13,
        color: 'rgba(0,0,0,0.75)',
        textAlign: 'right',
        right: 0,
        paddingRight: 10
    },
    sonMesaj: {
        color: 'rgba(0,0,0,0.75)',
        paddingRight: 10,
        padding: 5,
        paddingTop: 0,
        fontSize: 16
    },

});

const durumS = StyleSheet.create({
    kapsayici: {
        flexDirection: 'row',
        height: helperC.h * 0.12,
        borderColor: 'red'
    },
    profilResim: {
        alignSelf: 'center',
        marginLeft: 5,
        aspectRatio: 1,
        borderRadius: helperC.w * 0.6,
        overflow: 'hidden'
    },

    durumBilgi: {
        borderColor: 'blue',
        flex: 1,
        justifyContent: 'center',
        marginLeft: 5
    },

    telefonNumara: {
        color: 'black',
        fontWeight: 'bold',
        paddingRight: 10,
        padding: 5,
        fontSize: 18
    },

    sonMesaj: {
        color: 'rgba(0,0,0,0.75)',
        paddingRight: 10,
        padding: 5,
        paddingTop: 0,
        fontSize: 16
    },

});

export { splashS, anasayfaS, ustBarS, isimlerAlaniS, mesajlasmaS, durumS };
