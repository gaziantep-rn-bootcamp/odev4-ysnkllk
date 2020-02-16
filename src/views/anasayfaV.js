import React from 'react';
import { View, Text, Image, LayoutAnimation, UIManager, StatusBar, TouchableOpacity, FlatList, AsyncStorage } from 'react-native';
import { observer } from 'mobx-react';
import SImage from 'react-native-scalable-image';
import { Pages } from 'react-native-pages';
import codePush from 'react-native-code-push';
import * as Animasyon from 'react-native-animatable';


import { anasayfaS, splashS, ustBarS, isimlerAlaniS, mesajlasmaS, durumS } from '../styles/anasayfaS';
import helperC from '../controllers/helperC';
import anasayfaC from '../controllers/anasayfaC';

UIManager.setLayoutAnimationEnabledExperimental(true);

class anasayfaV extends React.Component {
	componentDidMount = async () => {
		anasayfaC.baslangic();

		
}

componentDidUpdate() {
	LayoutAnimation.easeInEaseOut();
}

	
	renderSplashEkrani() {
		return (
			<View style={splashS.kapsayici}>
				<StatusBar backgroundColor={'rgba(33,38,44,1)'} />

				<SImage source={require('../images/splash2.png')} width={helperC.w * 0.18} style={splashS.whIkon} />
				<SImage source={require('../images/splash1.png')} width={helperC.w * 0.3} style={splashS.fromFacebook} />
			</View>
		);
	}
	renderUstBar() {
		return (
			<View style={ustBarS.ustBar}>
				<SImage source={require('../images/whatsapp.png')} width={helperC.w * 0.3} />

				<View style={ustBarS.ustBarSagIkonlar}>
					<TouchableOpacity style={ustBarS.ustArama}>
						<SImage source={require('../images/arama.png')} height={40} />
					</TouchableOpacity>

					<TouchableOpacity style={ustBarS.ustBar3Nokta}>
						<SImage source={require('../images/3nokta.png')} height={32} />
					</TouchableOpacity>
				</View>
			</View>
		);
	}
	renderSayfaIsimleri() {
		return (
			<View style={isimlerAlaniS.isimlerAlani}>
				<SImage source={require('../images/kameraIkon.png')} height={20} style={isimlerAlaniS.isimlerAlaniKameraIkon} />
				<Text
				onPress={() => anasayfaC.sayfayaGit(0)}
				style={[isimlerAlaniS.isimYazi, anasayfaC.sayfa === 0 && isimlerAlaniS.isimYaziAktif]}
				>
					SOHBETLER
					</Text>
				<Text 
				onPress={() => anasayfaC.sayfayaGit(1)}
				style={[isimlerAlaniS.isimYazi, anasayfaC.sayfa === 1 && isimlerAlaniS.isimYaziAktif]}
				>
					DURUM
					</Text>
				<Text 
				onPress={() => anasayfaC.sayfayaGit(2)}
				style={[isimlerAlaniS.isimYazi, anasayfaC.sayfa === 2 && isimlerAlaniS.isimYaziAktif]}
				>
					ARAMALAR
					</Text>

			</View>
		);
	}


	renderSOHBETLER() {
		return (
			<View style={anasayfaS.govde}>
				<FlatList
					data={anasayfaC.mesajlasmalar}
					renderItem={d => this.renderMesajlasma(d.item)}
				/>
			</View>
		);
	}
	renderDURUM() {
		return (
			<View style={durumS.kapsayici}>

				<SImage
				width={helperC.w * 0.2}
				source={{
					uri: 'data:image/png;base64,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'
				}}
				style={durumS.profilResim}
				/>

				<View
				style={durumS.durumBilgi}
				>
					<Text
						style={durumS.telefonNumara}
						numberOfLines={1}
					>
							+90 568 493 24 27</Text>
						
					<Text
					style={durumS.zaman}
					numberOfLines={1}
					>
						15 Dakika önce </Text>
				</View>
				
			</View>
		);
	}
	renderARAMALAR() {
		return (
			<View style={anasayfaS.govde}>
				<Text style={anasayfaS.isimYazi}>gelenAramalar</Text>
				<Text style={anasayfaS.isimYazi}>gidenAramalar</Text>
			</View>
		);
	}

	renderMesajlasma(d) {
		return (
			<Animasyon.View animation='bounceInLeft' style={mesajlasmaS.kapsayici}>
				<SImage
				
					width={helperC.w * 0.12}
					source={{ uri: d.profil }}
					style={mesajlasmaS.profilResim}
				/>
				<TouchableOpacity 
				
				style={mesajlasmaS.mesajBilgi}
				onPress={() => this.props.navigation.navigate('mesajlasma')}
				>
				
					<View style={mesajlasmaS.numaraTarih}>
						<Text numberOfLines={1} style={mesajlasmaS.telefonNumara}>{d.baslik}</Text>
						<Text style={mesajlasmaS.tarih}>{d.tarih}</Text>
					</View>
					<Text numberOfLines={1} style={mesajlasmaS.sonMesaj}>{d.sonMesaj}</Text>
				
				</TouchableOpacity>
			</Animasyon.View>
		);
		}

	render() {
		if (anasayfaC.splashGoster) return this.renderSplashEkrani();
		this.anasayfaS = anasayfaS();

		return (
			<View style={this.anasayfaS.kapsayici}>
				<StatusBar backgroundColor={'#054c44'} />
				{this.renderUstBar()}
				{this.renderSayfaIsimleri()}

				<Pages
					ref={anasayfaC.setAnasayfaPagesRef}//this.refs.anasayfaPages
					//ref={anasayfaC.setAnasayfaPagesRef()} //this.anasayfaPages 

					indicatorColor={'tranparent'}
					onScrollEnd={anasayfaC.sayfaDegisti}
					containerStyle={this.anasayfaS.pagesContainerStyle}
				>
					{this.renderSOHBETLER()}
					{this.renderDURUM()}
					{this.renderARAMALAR()}
				</Pages>


				<TouchableOpacity
				style={this.anasayfaS.yeniMesajIkon} 
				>
					<SImage source={require('../images/yeniMesaj.png')} width={helperC.w * 0.12} />
				</TouchableOpacity>				 
			
			</View>
		);
	}
}

export default observer(anasayfaV);
