import { AppRegistry } from 'react-native';
import navigasyon from './src/navigasyon';
//import deneme from './deneme';
// eslint-disable-next-line import/imports-first
import CodePush from 'react-native-code-push';

console.disableYellowBox = true;

const codepushAyarlar = {
    checkFrequency: CodePush.CheckFrequency.MANUAL
};


AppRegistry.registerComponent('hafta3', () => CodePush(codepushAyarlar)(navigasyon));

