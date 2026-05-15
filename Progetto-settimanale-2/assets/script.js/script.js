

//Esercizio 1

const prodotti = [
     {
        nome: 'GeForce 5070',
        categoria: 'Hardware',
        prezzo: '800',
        rating: '5',
        immagine: 'fair',
        disponible: 'non disponibile',
       
    },
    {
        nome: 'Wooting60HE',
        categoria: 'Accessorio',
        prezzo: '120',
        rating: '5',
        immagine: 'fair',
        disponible: 'disponibile',
       
    },
    {
        nome: 'Processore AMD Ryzen 7 5800X ',
        categoria: 'Hardware',
        prezzo: '235',
        rating: '4',
        immagine: 'fair',
        disponible: 'disponibile',
       
    },
    {
        nome: 'MSI Monitor',
        categoria: 'Accessorio',
        prezzo: '180',
        rating: '3',
        immagine: 'fair',
        disponible: 'Displonibile',
       
    },
   {
        nome: 'Mouse Hero',
        categoria: 'Accessorio',
        prezzo: '80',
        rating: '3',
        immagine: 'fair',
        disponible: 'disponibile',
       
    },
    {
        nome: 'Subnautica 2',
        categoria: 'Videogioco',
        prezzo: '30',
        rating: '2',
        immagine: 'fair',
        disponible: 'non disponibile',
       
    },
    {
        nome: 'Case',
        categoria: 'Accessorio',
        prezzo: '90',
        rating: '2',
        immagine: 'fair',
        disponible: 'disponibile',
       
    },
    {
        nome: 'gta 6',
        categoria: 'VideoGioco',
        prezzo: '100',
        rating: '1',
        immagine: 'fair',
        disponible: 'Non Displonibile',
       
    },
];

//Esercizio 2
const formattaPrezzo = function(prezzo) {
    return prezzo + "€ "; 
};

for (let i = 0; i < prodotti.length; i++) {
    let prodotto = prodotti[i];
    let prezzoFormattato = formattaPrezzo(prodotto.prezzo);
    console.log(prodotto.nome + ": " + prezzoFormattato);
}

//Esercizio 3

const stars = function(voto) {
    let rating = "";
    for (let i = 0; i < voto; i++) {
        rating += "★";
    }
    for (let i = voto; i < 5; i++) {
        rating += "☆"; 
    }
    return rating;
};

for (let prodotto of prodotti) {
    let stelline = stars(prodotto.rating);
    console.log(prodotto.nome + " rating: " + stelline);
}

//Esercizio 4

const filtraPerCategoria = function(categoriaScelta) {
    for (let i = 0; i < prodotti.length; i++) {
        if (prodotti[i].categoria === categoriaScelta) {
            console.log("Trovato: " + prodotti[i].nome);
        }
    }
};
filtraPerCategoria("Hardware");

//Esercizio 5

const filtraProdotti = function() {
    let listaFiltrata = [];
    for (let i = 0; i < prodotti.length; i++) {
        let prodotto = prodotti[i];
        if (prodotto.disponible === "disponibile" && prodotto.rating >= 3) {
            listaFiltrata.push(prodotto);
        }
    }
    return listaFiltrata;
};
console.log(filtraProdotti());

//---------------------------------------------------------------------------------------------------//
//---------------------------------------------------------------------------------------------------//
//---------------------------------------------------------------------------------------------------//
//---------------------------------------------------------------------------------------------------//
//---------------------------------------------------------------------------------------------------//