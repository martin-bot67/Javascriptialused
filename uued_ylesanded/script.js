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

function kasutajaUlesanne() {
    var kasutajanimi = document.getElementById('userInput').value;
    var tervitus = kasutajanimi === 'admin' ? 'Tere, administraator!' : 'Tere, külaline!';

    document.getElementById('userOutput').textContent = tervitus;
}

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
