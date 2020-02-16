import { observable, action, decorate } from 'mobx';
import Axios from 'axios';

class mesajlasmaC {
    splashGoster = true;

    splashKapat = () => (setTimeout(() => (this.splashGoster = false), 750));

    sayfa = 0;
    sayfaDegisti = d => (this.sayfa = d);

    anasayfaPagesRef = null;
    setAnasayfaPagesRef = d => (this.anasayfaPagesRef = d);
    sayfayaGit = d => (this.anasayfaPagesRef.scrollToPage(d));


    mesajlar = [
        {
            id: 0,
            mesaj: 'Merhaba nasılsın? test Merhaba nasılsın? testMerhaba nasılsın? testMerhaba nasılsın? testMerhaba nasılsın? testMerhaba nasılsın? testMerhaba nasılsın? testMerhaba nasılsın? testMerhaba nasılsın? testMerhaba nasılsın? testMerhaba nasılsın? testMerhaba nasılsın? testMerhaba nasılsın? testMerhaba nasılsın? testMerhaba nasılsın? testMerhaba nasılsın? testMerhaba nasılsın? testMerhaba nasılsın? testMerhaba nasılsın? testMerhaba nasılsın? testMerhaba nasılsın? testMerhaba nasılsın? testMerhaba nasılsın? testMerhaba nasılsın? testMerhaba nasılsın? testMerhaba nasılsın? testMerhaba nasılsın? testMerhaba nasılsın? testMerhaba nasılsın? testMerhaba nasılsın? testMerhaba nasılsın? testMerhaba nasılsın? testMerhaba nasılsın? testMerhaba nasılsın? testMerhaba nasılsın? testMerhaba nasılsın? testMerhaba nasılsın? testMerhaba nasılsın? testMerhaba nasılsın? testMerhaba nasılsın? testMerhaba nasılsın? test',
            saat: '12:30',
            gonderen: 2
        },
        {
            id: 1,
            mesaj: 'Merhaba nasılsın?',
            saat: '12:30',
            gonderen: 1
        },
        {
            id: 2,
            mesaj: 'Merhaba nasılsın?',
            saat: '12:30',
            gonderen: 2
        },
        {
            id: 3,
            mesaj: 'Merhaba nasılsın?',
            saat: '12:30',
            gonderen: 2
        },
        {
            id: 4,
            mesaj: 'Merhaba nasılsın?',
            saat: '12:30',
            gonderen: 1
        },
        {
            id: 5,
            mesaj: 'Merhaba nasılsın?',
            saat: '12:30',
            gonderen: 2
        },
        {
            id: 0,
            mesaj: 'Merhaba nasılsın?',
            saat: '12:30',
            gonderen: 2
        },
        {
            id: 1,
            mesaj: 'Merhaba nasılsın?',
            saat: '12:30',
            gonderen: 1
        },
        {
            id: 2,
            mesaj: 'Merhaba nasılsın?',
            saat: '12:30',
            gonderen: 2
        },
        {
            id: 3,
            mesaj: 'Merhaba nasılsın?',
            saat: '12:30',
            gonderen: 2
        },
        {
            id: 4,
            mesaj: 'Merhaba nasılsın?',
            saat: '12:30',
            gonderen: 1
        },
        {
            id: 5,
            mesaj: 'Merhaba nasılsın?',
            saat: '12:30',
            gonderen: 2
        },
        {
            id: 0,
            mesaj: 'Merhaba nasılsın?',
            saat: '12:30',
            gonderen: 2
        },
        {
            id: 1,
            mesaj: 'Merhaba nasılsın?',
            saat: '12:30',
            gonderen: 1
        },
        {
            id: 2,
            mesaj: 'Merhaba nasılsın?',
            saat: '12:30',
            gonderen: 2
        },
        {
            id: 3,
            mesaj: 'Merhaba nasılsın?',
            saat: '12:30',
            gonderen: 2
        },
        {
            id: 4,
            mesaj: 'Merhaba nasılsın?',
            saat: '12:30',
            gonderen: 1
        },
        {
            id: 5,
            mesaj: 'Merhaba nasılsın?',
            saat: '12:30',
            gonderen: 2
        },
    ];
}

decorate(
    mesajlasmaC,
    {
        splashGoster: observable,
        splashKapat: action,

        sayfa: observable,
        sayfaDegisti: action,

        anasayfaPagesRef: observable,
        setAnasayfaPagesRef: action,
        sayfayaGit: action,

        mesajlar: observable,
    }
);

export default new mesajlasmaC();
