import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import anasayfaV from './views/anasayfaV';
import mesajlasmaV from './views/mesajlasmaV';


const ayarlar = {
	header: true
};


const sayfalar = createStackNavigator({
	splash: { screen: anasayfaV, navigationOptions: ayarlar },
	mesajlasma: { screen: mesajlasmaV, navigationOptions: ayarlar },
});


export default createAppContainer(sayfalar);
