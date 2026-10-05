function temperatuurUlesanne() {
    var temperatuur = Number(document.getElementById('tempInput').value);
    var tulemus;

    if (temperatuur > 25) {
        tulemus = 'Väga kuum ilm!';
    } else if (temperatuur >= 15 && temperatuur <= 25) {
        tulemus = 'Mõnus temperatuur';
    } else {
        tulemus = 'Jahe ilm';
    }

    document.getElementById('tempOutput').textContent = 'Tulemus: ' + tulemus;
}
// 2.ulesanne
function kasutajaUlesanne() {
    var kasutajanimi = document.getElementById('userInput').value;
    var tervitus = kasutajanimi === 'admin' ? 'Tere, administraator!' : 'Tere, külaline!';

    document.getElementById('userOutput').textContent = tervitus;
}
// 3.ulesanne
function piletUlesanne() {
    var piletitüüp = document.getElementById('ticketType').value;
    var vanus = Number(document.getElementById('ageInput').value);
    var hind = 0;

    if (piletitüüp === 'täispilet') {
        if (vanus < 18) {
            hind = 10;
        } else if (vanus >= 18 && vanus <= 64) {
            hind = 20;
        } else {
            hind = 15;
        }
    } else if (piletitüüp === 'sooduspilet') {
        if (vanus < 18 || vanus >= 65) {
            hind = 8;
        } else {
            hind = 15;
        }
    }

    document.getElementById('ticketOutput').textContent = 'Pileti hind: ' + hind + ' eurot';
}
// 4.ulesanne
function positiivneNegatiivne() {
    var number = Number(document.getElementById('numberInput').value);
    var tulemus;

    switch (true) {
        case (number > 0):
            tulemus = 'Number on positiivne.';
            break;
        case (number < 0):
            tulemus = 'Number on negatiivne.';
            break;
        default:
            tulemus = 'Number on null.';
    }

    document.getElementById('numberOutput').textContent = tulemus;
}
// 5.ulesanne
function restoranUlesanne() {
    var arv = Number(document.getElementById('bookingInput').value);
    var tulemus;

    switch (arv) {
        case 1:
        case 2:
            tulemus = 'Valige laud kahele inimesele.';
            break;
        case 3:
        case 4:
            tulemus = 'Valige laud neljale inimesele.';
            break;
        case 5:
        case 6:
            tulemus = 'Valige laud kuuele inimesele.';
            break;
        default:
            tulemus = 'Valige suur laud.';
    }

    document.getElementById('bookingOutput').textContent = tulemus;
}
// 8.ulesanne
function mündidUlesanne() {
    var rahad = [10, 0.05, 200, 0.2, 1, 50, 0.01, 2, 0.1, 100, 5, 0.02, 20, 0.5, 0.01, 200, 0.2, 10, 1, 5, 0.05, 50, 2, 100, 0.1, 20, 0.02, 0.5, 200, 10];
    [200, 0.2, 10, 0.01, 2, 1, 0.1, 0.02, 0.05, 100, 5, 0.5, 50, 20]
    var mündid = [];
    var i = 0;

    while (i < rahad.length) {
        if (rahad[i] > 0 && rahad[i] < 10) {
            mündid.push(rahad[i]);
        }
        i++;
    }

    var summa = 0;
    var j = 0;

    while (j < mündid.length) {
        summa = summa + mündid[j];
        j++;
    }

    document.getElementById('coinsOutput').textContent = 'Leitud mündid: ' + mündid.length + '. Summa: ' + summa.toFixed(2) + ' eurot';
}
// 7.ulesanne

function tootedUlesanne() {
    var products = ["Õunad", "Piim", "Leib", "Juust", "Tomatid", "Kanafilee", "Muna", "Sibul", "Apelsinid", "Riis", "Jogurt", "Kartul", "Kalafilee", "Pasta", "Jogurtijook", "Porgandid", "Virsikud", "Pähklid", "Rosinad", "Kapsas", "Kreeka jogurt", "Veiseliha", "Banaanid", "Oliivid", "Mandlid", "Magus kartul", "Greibid"];
    var tulemus = "";
    var count = 0;

    for (var i = 0; i < 10; i++) {
        var toode = products[i];

        if (toode === 'Muna' || toode === 'Sibul' || toode === 'Riis') {
            continue;
        }

        count = count + 1;
        tulemus += count + ". " + toode + "<br>";
    }

    document.getElementById('productsOutput').innerHTML = tulemus;
}
// 2.ulesanne
function temperatuuridUlesanne() {
    var temperatures = [
        [5, 8, 12, 10, 7, 9, 11, 14, 16, 13, 10, 6, 4, 3, 2, 4, 6, 8, 10, 12, 15, 17, 18, 16, 13, 10],
        [1, 4, 6, 7, 9, 11, 13, 15, 12, 9, 7, 5, 3, 2, 3, 6, 8, 10, 12, 15, 17, 19, 18, 16, 13, 11],
        [8, 10, 13, 15, 16, 18, 19, 20, 17, 15, 13, 11, 10, 9, 8, 10, 12, 14, 16, 18, 20, 22, 21, 18, 16, 14],
        [2, 5, 7, 9, 12, 15, 17, 18, 15, 13, 11, 8, 6, 5, 4, 7, 9, 12, 14, 16, 19, 21, 20, 18, 16, 13],
        [6, 8, 11, 14, 16, 18, 20, 21, 18, 15, 12, 10, 8, 6, 5, 8, 10, 13, 15, 18, 20, 22, 21, 19, 16, 13],
        [11, 14, 17, 19, 21, 23, 24, 22, 19, 16, 13, 11, 10, 9, 9, 12, 15, 18, 20, 23, 25, 27, 26, 24, 21, 18],
        [9, 11, 14, 16, 18, 20, 22, 21, 18, 16, 13, 11, 9, 8, 7, 10, 13, 16, 18, 21, 23, 24, 23, 21, 18, 15],
        [7, 10, 13, 15, 17, 20, 22, 23, 20, 17, 14, 12, 10, 9, 8, 11, 14, 17, 19, 22, 24, 26, 25, 23, 20, 17],
        [3, 6, 9, 11, 13, 15, 17, 18, 16, 14, 11, 9, 7, 6, 5, 8, 10, 13, 15, 17, 19, 21, 20, 18, 15, 12],
        [1, 3, 5, 7, 9, 11, 13, 15, 12, 9, 7, 5, 3, 2, 3, 6, 8, 10, 12, 15, 17, 19, 18, 16, 13, 11],
        [6, 8, 11, 14, 16, 18, 20, 21, 18, 15, 12, 10, 8, 6, 5, 8, 10, 13, 15, 18, 20, 22, 21, 19, 16, 13],
        [10, 13, 16, 18, 20, 22, 23, 24, 21, 18, 15, 13, 11, 10, 9, 12, 15, 18, 20, 23, 25, 27, 26, 24, 21, 18]
    ];

    var months = [
        'Jaanuar', 'Veebruar', 'Märts', 'Aprill', 'Mai', 'Juuni',
        'Juuli', 'August', 'September', 'Oktoober', 'November', 'Detsember'
    ];

    var keskmised = "";
    var suurimKuu = 0;
    var madalaimKuu = 0;
    var suurimTemp = -Infinity;
    var madalTemp = Infinity;

    for (var i = 0; i < temperatures.length; i++) {
        var sum = 0;
        for (var j = 0; j < temperatures[i].length; j++) {
            sum = sum + temperatures[i][j];
        }
        var average = sum / temperatures[i].length;
        keskmised += months[i] + ': ' + average.toFixed(2) + '<br>';

        for (var j = 0; j < temperatures[i].length; j++) {
            if (temperatures[i][j] > suurimTemp) {
                suurimTemp = temperatures[i][j];
                suurimKuu = i;
            }

            if (temperatures[i][j] < madalTemp) {
                madalTemp = temperatures[i][j];
                madalaimKuu = i;
            }
        }
    }

    var tekst = "Keskmised temperatuurid:<br>" + keskmised + "<br>";
    tekst += "Kõrgeim temperatuur oli kuus " + months[suurimKuu] + ": " + suurimTemp + "<br>";
    tekst += "Madalaim temperatuur oli kuus " + months[madalaimKuu] + ": " + madalTemp;

    document.getElementById('temperaturesOutput').innerHTML = tekst;
}

function tervitaKasutajat() {
    var nimi = document.getElementById('nameInput').value.trim();

    if (nimi === '') {
        nimi = 'külaline';
    }

    document.getElementById('greetingOutput').textContent = 'Tere, ' + nimi + '!';
}

function kuupaevEesti(kuupaev) {
    var osad = kuupaev.split('.');
    var paev = Number(osad[0]);
    var kuu = Number(osad[1]) - 1;
    var aasta = Number(osad[2]);

    if (aasta < 100) {
        aasta = aasta + 2000;
    }

    var kuudEesti = [
        'jaanuar', 'veebruar', 'märts', 'aprill', 'mai', 'juuni',
        'juuli', 'august', 'september', 'oktoober', 'november', 'detsember'
    ];

    var kuupaevObjekt = new Date(aasta, kuu, paev);

    if (isNaN(kuupaevObjekt.getTime())) {
        document.getElementById('dateOutput').textContent = 'Vale kuupäev';
        return;
    }

    var tekst = paev + '. ' + kuudEesti[kuupaevObjekt.getMonth()] + ' ' + kuupaevObjekt.getFullYear();
    document.getElementById('dateOutput').textContent = tekst;
}

function arvutaArvud() {
    var arvud = Array.prototype.slice.call(arguments);

    if (arvud.length === 0) {
        return { kogus: 0, keskmine: 0 };
    }

    var summa = 0;
    for (var i = 0; i < arvud.length; i++) {
        summa += Number(arvud[i]);
    }

    return {
        kogus: arvud.length,
        keskmine: summa / arvud.length
    };
}

function arvutaArvudFromInput() {
    var tekst = document.getElementById('numberListInput').value;
    var arvud = tekst.split(',').map(function (item) {
        return Number(item.trim());
    }).filter(function (value) {
        return !isNaN(value);
    });

    var tulemus = arvutaArvud.apply(null, arvud);
    document.getElementById('numberListOutput').textContent = 'Kogus: ' + tulemus.kogus + ', keskmine: ' + tulemus.keskmine;
}

var salajaneSonum = function (sonum) {
    var taishaalikud = ['a', 'e', 'i', 'o', 'u', 'ä', 'ö', 'ü'];
    var tulemus = '';

    for (var i = 0; i < sonum.length; i++) {
        var täht = sonum[i].toLowerCase();
        tulemus += taishaalikud.indexOf(täht) !== -1 ? '*' : sonum[i];
    }

    return tulemus;
};

function showSecretMessage() {
    var sonum = document.getElementById('messageInput').value;
    document.getElementById('messageOutput').textContent = salajaneSonum(sonum);
}

var leiaUnikaalsedNimed = function (nimed) {
    var nähtud = {};
    var tulemus = [];

    for (var i = 0; i < nimed.length; i++) {
        var nimi = nimed[i];
        if (!nähtud[nimi]) {
            nähtud[nimi] = true;
            tulemus.push(nimi);
        }
    }

    return tulemus;
};

function showUniqueNames() {
    var nimed = document.getElementById('namesInput').value.split(',').map(function (nimi) {
        return nimi.trim();
    }).filter(function (nimi) {
        return nimi !== '';
    });

    document.getElementById('namesOutput').textContent = leiaUnikaalsedNimed(nimed).join(', ');
}

function Kasutaja() {
    var nimi = document.getElementById('Sisestatudnimi').value.trim();

    document.getElementById('KasutajaOutput').textContent = '' + nimi + '';

    if (nimi === '') {
        document.getElementById('KasutajaOutput').textContent = 'Tere, külaline!';
    }

}


const toode = {
    nimetus: 'Kohv',
    hind: 5.8,
    kogus: 2,
    koguSumma() { return this.hind * this.kogus; },
    muudaKogust(kogus) { this.kogus = kogus; },
    kuvaSisu() { console.log(`${this.nimetus} - ${this.hind} EUR - Kogus: ${this.kogus}`); }
};

console.log('Toote omadused:', toode, 'Kogusumma:', toode.koguSumma());
toode.muudaKogust(3);
toode.kuvaSisu();

const ostukorv = {
    tooted: [
        { nimi: 'Piim', hind: 3.6, kogus: 2 },
        { nimi: 'Leib', hind: 2, kogus: 1 },
        { nimi: 'Munad', hind: 1.50, kogus: 6 },    
    ],
    kuvaSisu() { this.tooted.forEach(t => console.log(`${t.nimi} - ${t.hind} EUR - Kogus: ${t.kogus}`)); },
    lisaToode(nimi, hind, kogus) { this.tooted.push({ nimi, hind, kogus }); },
    koguSumma() { return this.tooted.reduce((summa, t) => summa + t.hind * t.kogus, 0); }
};

ostukorv.lisaToode('Kohv', 5.8, 2);

function kuvaAndmed() {
    document.getElementById('toodeValjund').textContent = `${toode.nimetus} - ${toode.hind.toFixed(2)} EUR - Kogus: ${toode.kogus} - Kokku: ${toode.koguSumma().toFixed(2)} EUR`;
    document.getElementById('ostukorvValjund').textContent = ostukorv.tooted
        .map(t => `${t.nimi} - ${t.hind.toFixed(2)} EUR - Kogus: ${t.kogus}`).join('\n');
    document.getElementById('ostukorvSummaValjund').textContent = `Ostukorvi kogu summa: ${ostukorv.koguSumma().toFixed(2)} EUR`;
}

function uuendaTooteKogust() {
    const kogus = Number(document.getElementById('tooteKogusInput').value);
    if (!Number.isInteger(kogus) || kogus < 0) return;
    toode.muudaKogust(kogus);
    kuvaAndmed();
    toode.kuvaSisu();
    console.log('Toote kogusumma:', toode.koguSumma());
}

function kuvaOstukorvLehel() {
    kuvaAndmed();
    ostukorv.kuvaSisu();
    console.log('Ostukorvi kogu summa:', ostukorv.koguSumma());
}

function lisaOstukorvi() {
    const nimi = document.getElementById('uusToodeNimi').value.trim();
    const hindInput = document.getElementById('uusToodeHind');
    const hind = Number(hindInput.value);
    const kogus = Number(document.getElementById('uusToodeKogus').value);
    if (!nimi || !hindInput.value || !Number.isFinite(hind) || hind < 0 || !Number.isInteger(kogus) || kogus < 1) return;
    ostukorv.lisaToode(nimi, hind, kogus);
    kuvaOstukorvLehel();
}

kuvaOstukorvLehel();

kuupaevEesti('19.07.23');
