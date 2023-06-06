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






const biciDaCorsa = [
    { nome: "Bici 1", peso: 7 },
    { nome: "Bici 2", peso: 6 },
    { nome: "Bici 3", peso: 8 },
    { nome: "Bici 4", peso: 5 },
  ];

  let pesoMinimo = biciDaCorsa[0].peso;
  let biciPesoMinimo = biciDaCorsa[0];
  

  for (let i = 1; i < biciDaCorsa.length; i++) {
    const { peso } = biciDaCorsa[i]; 
  
    if (peso < pesoMinimo) {
      pesoMinimo = peso;
      biciPesoMinimo = biciDaCorsa[i];
    }
  }
  
  console.log(`La bici più leggera è ${biciPesoMinimo.nome} con un peso di ${biciPesoMinimo.peso} kg.`);
  




const squadre = [
    { nome: 'Milan', puntiFatti: 0, falli: 0 },
    { nome: 'Juventus', puntiFatti: 0, falli: 0 },
    { nome: 'Inter', puntiFatti: 0, falli: 0 },
    { nome: 'Roma', puntiFatti: 0, falli: 0 },
  ];
  
 
  function generateRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  
 
  squadre.forEach((squadra) => {
    squadra.puntiFatti = generateRandomNumber(0, 100);
    squadra.falliSubiti = generateRandomNumber(0, 50);
  });
  
 
  const nuovoArray = squadre.map(({ nome, falli }) => ({ nome, falli }));
  

  console.log('Array originale:');
  console.log(squadre);
  console.log('Nuovo array con nomi e falli subiti:');
  console.log(nuovoArray);
  
