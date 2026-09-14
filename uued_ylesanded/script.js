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
