import { observable, action, decorate } from 'mobx';
import { Dimensions } from 'react-native';

class helperC {
    w = Dimensions.get('window').width;
    h = Dimensions.get('window').height;

    telefonNumaram = '';
	setTelefonNumaram = d => (this.telefonNumaram = d);
}

decorate(
    helperC,
    {
        w: observable,
        h: observable,

        telefonNumaram: observable,
        setTelefonNumaram: action,
    }
);

export default new helperC();
