// ------------------- Déclaration de variable

// let numberOfSeasons = 1;
// let numberOfEpisodes = 10;

// let episodeTime = 42;
// let creditsTime = 5;

//----------------------------------- Manipuler des variables

// let totalShowTime = (episodeTime + creditsTime) * numberOfSeasons * numberOfEpisodes;


let paragraph = document.querySelector('#info');
// paragraph.innerText = `${numberOfSeasons} seasons, ${numberOfEpisodes} episodes per season

// Total viewing time: ${totalShowTime} minutes`


// --------------------------------------------------- Créer et manipuler un obj


let myShow = {
    title: "Les anneaux de pouvoir",
    broadcaster: "Amazon",
    numberOfEpisodes: 10,
    aired: false
};

let myShow2={
    title: "Friends",
    broadcaster: "NBC",
    numberOfEpisodes: 252,
    aired : true
};

let myShow3={
    title: "The walking dead",
    broadcaster: "AMC",
    numberOfEpisodes: 98,
    aired : true
};

// ----------------------------  instructions IF/ELSE/ELSE IF
let shows = [myShow, myShow2, myShow3]
let valid = ""


for (let i = 0; i < shows.length; i++) {
    
   if (shows[i].aired === true) {
     valid = "Oui";
} else {
     valid = "Non";
};
    
    paragraph.innerHTML += '<strong>' + shows[i].title + '</strong>' + '<br>' + shows[i].broadcaster + '<br>' + shows[i].numberOfEpisodes + ' Episodes' + '<br>' + valid + '<br><br>';
}



let btnReveal = document.querySelector('.btnReveal');
let frame = document.querySelector('.series-frame');
function reveal(){
    frame.setAttribute("class", "series-frame reveal");
    // console.log(paragraph);
};

btnReveal.addEventListener('click', reveal);

let btnHide = document.querySelector('.btnHide');
function hide(){
    frame.setAttribute("class", "series-frame hide");
}
btnHide.addEventListener('click', hide);


// ------------------------Classe et constructeur (modèle pour un obj qui permet de construire plusieurs objets du meme type)
//------------------------ PLUS TARD

// class Show {
//     constructor(title, broadcaster, numberOfEpisodes, aired){
        
//         this.title= title;
//         this.broadcaster = broadcaster;
//         this.numberOfEpisodes = numberOfEpisodes;
//         this.aired = aired;
//     }
// }

// let show1 = new Show ("Friends", "NBC", 236, true);
// let show2 = new Show ("The walking dead", "AMC", 92, true);



