var music = new Audio('s/1.mp3').autoplay;
//music.play();

let songs = [
    {
        id: 1,
        songname: 'Fallin All in You <br> <div class="subtitle">Shawn Mandees</div>',
        poster: "p/shawn.jpeg",
        filePath: "s/1.mp3",
    },
    
    {
        id: 2,
        songname: 'Lemonade <br> <div class="subtitle">Diljit Dosanjh</div>',
        poster: "p/lemonade.jpg",
    },

    {
        id: 3,
        songname: 'Under The Influence<br> <div class="subtitle">Chris Brown</div>',
        poster: "p/under.jpg",
    },

    {
        id: 4,
        songname: 'SNAP<br> <div class="subtitle">Rosa Linn</div>',
        poster: "p/snap.jpeg",
    },

    {
        id: 5,
        songname: 'Control <br> <div class="subtitle">Armaan Malik</div>',
        poster: "p/control.jpg",
    },

    {
        id: 6,
        songname: 'Mehram <br> <div class="subtitle">Sachet Tandon</div>',
        poster: "p/mehram.jpg",
    },

    {
        id: 7,
        songname: 'Me & My Friends <br> <div class="subtitle">Munn,Jude,Fortune</div>',
        poster: "p/me.jpg"
    },

    {
        id: 8,
        songname: 'Dndelions <br> <div class="subtitle">Ruth B.</div>',
        poster: "p/Dandelions.jpeg"
    },

    {
        id: 9,
        songname: 'I DONT WANNA LIVE FOREVER<br> <div class="subtitle">ZAYN,Taylor Swift</div>',
        poster: "p/zayn.jpg"
    },

    {
        id: 10,
        songname: 'LET ME<br> <div class="subtitle">ZAYN</div>',
        poster: "p/zayn.jpeg"
    },

    {
        id: 11,
        songname: 'Strawberries & Cigarettes<br> <div class="subtitle">Troye Sivan</div>',
        poster: "p/shawn.jpeg"
    },

    {
        id: 12,
        songname: 'Samjhawan <br> <div class="subtitle">Arjit Singh,Shreya Ghoshal</div>',
        poster: "p/sam.jpg"
    },

    {
        id: 13,
        songname: '>Older<br> <div class="subtitle">Sasha Alex Sloan</div>',
        poster: "p/older.jpeg"
    },

    {
        id: 14,
        songname: 'Kho Gaye<br> <div class="subtitle">Seeb Studio</div>',
        poster: "p/kho.jpg"
    },

    {
        id: 15,
        songname: 'Sweetheart<br> <div class="subtitle">Dev Negi</div>',
        poster: "p/sweet.jpeg"
    },

    {
        id: 16,
        songname: 'Aisa Kyun<br> <div class="subtitle">Anurag Saikia</div>',
        poster: "p/aisa.jpg"
    },

    {
        id: 17,
        songname: 'Willow<br> <div class="subtitle">Taylor Swift</div>',
        poster: "p/willow.jpeg"
    },

    {
        id: 18,
        songname: 'love Me Like You Do<br> <div class="subtitle">Ellie Goulding</div>',
        poster: "p/love.jpg"
    },

    {
        id: 19,
        songname: 'Mere Mahaboob<br> <div class="subtitle">SANAM</div>',
        poster: "p/shawn.jpeg"
    },
    
    {
        id: 20,
        songname: 'Rich Boy<br> <div class="subtitle">Payton</div>',
        poster: "p/rich.jpeg"
    }

]

//Array.from(document.getElementsByClassName())

let popsongleft = document.getElementById('popsongleft');
let popsongright = document.getElementById('popsongright');
let popsong = document.getElementsByClassName('popsong')[0];


popsongright.addEventListener('click', ()=>{
    popsong.scrollLeft += 330;
});

popsongleft.addEventListener('click', ()=>{
    popsong.scrollLeft -= 330;
});



var masterplay = document.getElementById('masterplay');
var wave = document.getElementById('wave'); 

masterplay.addEventListener('click', ()=>{
    if (music.paused || music.currenttime <= 0) {
        music.play();
        wave.classList.add('active1')
        masterplay.classList.remove('bi-pause-fill')
        masterplay.classList.add('bi bi-play-fill')
    }else {
        music.pause();
        wave.classList.remove('active1')
        masterplay.classList.add('bi-pause-fill')
        masterplay.classList.remove('bi bi-play-fill')
    }
});

var sound;


//let index = 0;
//index++;
//console.





let popartleft = document.getElementById('popartleft');
let popartright = document.getElementById('popartright');
let item = document.getElementsByClassName('item')[0];


popartright.addEventListener('click', ()=>{
    item.scrollLeft += 330;
});

popartleft.addEventListener('click', ()=>{
    item.scrollLeft -= 330;
});