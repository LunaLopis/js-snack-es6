const nomeTavolo = "Tavolo Vip";
const listaInvitati = ['Brad Pitt', 'Johnny Depp', 'Lady Gaga', 'Cristiano Ronaldo', 'Georgina Rodriguez', 'Chiara Ferragni', 'Fedez', 'George Clooney', 'Amal Clooney', 'Maneskin'];

const ListaSegnaposto = [];

listaInvitati.forEach((invitato, posto) => {

    const segnaposto = {
        tavolo: nomeTavolo,
        invitato: invitato,
        posto: posto + 1
    };
    ListaSegnaposto.push(segnaposto);
});
console.log(ListaSegnaposto)




const studenti = [
    { iq: 213, name: "Marco della Rovere", voto: 78 },
    { iq: 110, name: "Paola Cortellessa", voto: 96 },
    { iq: 250, name: "Andrea Mantegna", voto: 48 },
    { iq: 145, name: "Gaia Borromini", voto: 74 },
    { iq: 196, name: "Luigi Grimaldello", voto: 68 },
    { iq: 102, name: "Piero della Francesca", voto: 50 },
    { iq: 120, name: "Francesca da Polenta", voto: 84 }
];

const nomiMaiuscoli = studenti.map(studente => studente.name.toUpperCase());
console.log(nomiMaiuscoli);


const studentiVotiAlti = studenti.filter(studente => studente.voto > 70);
console.log(studentiVotiAlti);

const studentiVotiIdAlti = studenti.filter(studente => studente.voto > 70 && studente.iq > 120);
console.log(studentiVotiIdAlti);

