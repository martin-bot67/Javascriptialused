/*
  Nimi: Sinu Nimi
  Kuupäev: 07.09.2026
  Ülesanne: Ülesanne 3 (Sõned ja nende meetodid)
*/


// ==========================================
// Kellaaeg
// ==========================================
let tunnid = 2;
let minutid = 38;
let sekundid = 59;

// Ühendame muutujad kokku koolonitega ja lisame lõppu "PM"
let kellaaeg = tunnid + ":" + minutid + ":" + sekundid + "PM";
console.log("Kellaaeg:", kellaaeg); // Oodatav tulemus: "2:38:59PM"


// ==========================================
// Tsitaat lause sees
// ==========================================
let tsitaat = "Mõtlen, järelikult olen olemas.";
let autor = "René Descartes";

// Kasutame ühekordseid jutumärke väljas, et teksti sees saaks kasutada kahekordseid jutumärke
let lauseTsitaadiga = 'Kuulus tsitaat: "' + tsitaat + '" - ' + autor;
console.log(lauseTsitaadiga);


// ==========================================
// Mallide kasutamine
// ==========================================
let eesnimi = "Jüri";
let perenimi = "Jurakas";

// Eraldame nimede esitähed
let eesNimeTaht = eesnimi.charAt(0);
let pereNimeTaht = perenimi.charAt(0);

// Kasutame malli ehk template literalit (tagurpidi jutumärgid ` `)
let initsiaalideLause = `${eesnimi} ${perenimi} nimetähed on ${eesNimeTaht}.${pereNimeTaht}.`;
console.log(initsiaalideLause); // Oodatav tulemus: "Jüri Jurakas nimetähed on J.J."


// ==========================================
// Perenime pikkus
// ==========================================
let nimi = "Jurakas, Jüri";

// Leiame koma asukoha indeksi
let komaIndeks = nimi.indexOf(",");

// Eraldame perenime (alates indeksist 0 kuni komani)
let eraldatudPerenimi = nimi.substring(0, komaIndeks);

// Muudame perenime suurtähtedeks
let perenimiSuurtega = eraldatudPerenimi.toUpperCase();

console.log("Perenimi suurtähtedega:", perenimiSuurtega);
console.log("Perenime pikkus:", perenimiSuurtega.length);


// ==========================================
// E-posti aadressi muutmine
// ==========================================
let epost = "karrolk@netlog.com";

// Asendame domeeni "netlog" domeeniga "gmail"
let uusEpost = epost.replace("netlog", "gmail");
console.log("Muudetud e-post:", uusEpost); // Oodatav tulemus: "karrolk@gmail.com"


// ==========================================
// Andmerida analüüs
// ==========================================
let andmerida = "1,Marshal,Martinovic,mmartinovic0@dedecms.com,Male,40.19.226.175";

// Tükeldame andmerida komade kohalt massiiviks
let osad = andmerida.split(",");

// IP-aadress on massiivi viimane element (indeks 5)
let ipAadress = osad[5];

// Email on massiivi 4. element (indeks 3)
let email = osad[3];

// Eraldame emailist kasutajanime (kõik märgikoodid enne @-märki)
let atIndeks = email.indexOf("@");
let kasutajanimi = email.substring(0, atIndeks);

console.log("IP-aadress:", ipAadress);
console.log("Kasutajanimi emailist:", kasutajanimi);
// Oodatav tulemus: "40.19.226.175" ja "mmartinovic0"