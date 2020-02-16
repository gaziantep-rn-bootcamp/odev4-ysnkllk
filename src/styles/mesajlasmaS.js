import { StyleSheet } from 'react-native';
import helperC from '../controllers/helperC';

const mesajlasmaS = StyleSheet.create({
    kapsayici: {
        flex: 1,
    }
});

const ustBarS = StyleSheet.create({
    kapsayici: {
        backgroundColor: '#075e55',
        width: helperC.w,
        height: 50,
        flexDirection: 'row',
        alignItems: 'center',
        paddingLeft: 10
    },
    sagdakiIkonlar: {
        position: 'absolute',
        right: 10,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    profil: {
        marginLeft: 5,
        borderRadius: 15,
        aspectRatio: 1,
        overflow: 'hidden'
    },
    baslikYazi: {
        marginLeft: 5,
        color: 'white',
        fontWeight: 'bold',
        fontSize: 16
    },
    bosluk: {
        height: 0,
        width: 23
    }
});

const mesajlasmaAlaniS = StyleSheet.create({
    kapsayici: {
        flex: 1
    },
    sagMesaj: {
        backgroundColor: 'rgb(220, 248, 198)',
        alignSelf: 'flex-end',
        marginRight: 10,
        marginTop: 5,
        marginBottom: 5,
        padding: 10,
        paddingBottom: 20,
        borderRadius: 5,
        maxWidth: helperC.w * 0.7
    },
    solMesaj: {
        backgroundColor: 'white',
        alignSelf: 'flex-start',
        marginLeft: 10,
        marginTop: 5,
        marginBottom: 5,
        padding: 10,
        paddingBottom: 20,
        borderRadius: 5,
        maxWidth: helperC.w * 0.7
    },
    arkaplan: {
        position: 'absolute',
        zIndex: -100,
    },
    mesajSaatSag: {
        position: 'absolute',
        right: 5,
        bottom: 5,
        fontSize: 10,
        color: 'rgba(0,0,0,0.5)'
    },
    mesajSaatSol: {
        position: 'absolute',
        left: 5,
        bottom: 5,
        fontSize: 10,
        color: 'rgba(0,0,0,0.5)'
    }
});

export { mesajlasmaS, ustBarS, mesajlasmaAlaniS };
