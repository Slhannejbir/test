let now_playing = document.querySelector('.now-playing');
let track_art = document.querySelector('.track-art');
let track_name = document.querySelector('.track-name');
let track_artist = document.querySelector('.track-artist');

let playpause_btn = document.querySelector('.playpause-track');
let next_btn = document.querySelector('.next-track');
let prev_btn = document.querySelector('.prev-track');

let seek_slider = document.querySelector('.seek_slider');
let volume_slider = document.querySelector('.volume_slider');
let curr_time = document.querySelector('.current-time');
let total_duration = document.querySelector('.total-duration');
let wave = document.getElementById('wave');
let randomIcon = document.querySelector('.fa-random');
let curr_track = document.createElement('audio');

let track_index = 0;
let isPlaying = false;
let isRandom = false;
let updateTimer;

const music_list = [
    {
        img : 'images/1.jpg',
        name : 'Metamorphosis',
        artist : 'InterWorld',
        music : 'music/1.mp3'
    },
    {
        img : 'images/2.jpg',
        name : 'Crystals',
        artist : 'isolate.exe',
        music : 'music/2.mp3'
    },
    {
        img : 'images/3.jpg',
        name : 'Jealous',
        artist : 'Eyedrees',
        music : 'music/3.mp3'
    },
    {
        img : 'images/yook.jpg',
        name : 'Limbo',
        artist : 'Freddie Dredd',
        music : 'music/4.mp3'
    },
    {
        img : 'images/5.jpg',
        name : 'Gigachad-Phonk',
        artist : 'g3ox_em',
        music : 'music/5.mp3'
    },
    {
        img : 'images/6.jpg',
        name : 'The Perfect Girl',
        artist : 'Mareux',
        music : 'music/6.mp3'
    },
    {
        img : 'images/7.jpg',
        name : 'After Dark',
        artist : ' Mr.Kitty',
        music : 'music/7.mp3'
    },
    {
        img : 'images/8.jpg',
        name : 'Another love (slowled)',
        artist : 'Tom Odell',
        music : 'music/8.mp3'
    },
    {
        img : 'images/9.jpg',
        name : 'AUTOMOTIVO',
        artist : ' [Dj NK3]',
        music : 'music/9.mp3'
    },
    {
        img : 'images/yook.jpg',
        name : 'Beat Trava Pulmao',
        artist : 'Remix',
        music : 'music/10.mp3'
    },
    {
        img : 'images/11.jpg',
        name : 'in my head',
        artist : 'bedroom ',
        music : 'music/11.mp3'
    },
    {
        img : 'images/12.jpg',
        name : 'BONKERS (slowled)',
        artist : 'staplegun',
        music : 'music/12.mp3'
    },
    {
        img : 'images/13.jpg',
        name : 'Call me (phonk)',
        artist : 'plenka',
        music : 'music/13.mp3'
    },
    {
        img : 'images/14.jpg',
        name : ' On My Own ',
        artist : 'Darci',
        music : 'music/14.mp3'
    },
    {
        img : 'images/15.jpg',
        name : 'Devil Eyes',
        artist : 'Zodıvk',
        music : 'music/15.mp3'
    },
    {
        img : 'images/16.jpg',
        name : 'Thank you (Slowed)',
        artist : 'Dido',
        music : 'music/16.mp3'
    },
    {
        img : 'images/17.jpg',
        name : ' CLOSE EYES ',
        artist : 'DVRST ',
        music : 'music/17.mp3'
    },
    {
        img : 'images/yook.jpg',
        name : 'Lose Yourself',
        artist : 'Eminem',
        music : 'music/18.mp3'
    },
    {
        img : 'images/19.jpg',
        name : 'Mockingbird',
        artist : 'Eminem',
        music : 'music/19.mp3'
    },
    {
        img : 'images/20.jpg',
        name : 'The Real Slim Shady',
        artist : 'Eminem',
        music : 'music/20.mp3'
    },
    {
        img : 'images/21.jpg',
        name : 'Till I Collapse',
        artist : 'Eminem',
        music : 'music/21.mp3'
    },
    {
        img : 'images/22.jpg',
        name : 'Without Me',
        artist : 'Eminem',
        music : 'music/22.mp3'
    },
    {
        img : 'images/23.jpg',
        name : 'SAHARA (slowed)',
        artist : 'HENSONN',
        music : 'music/23.mp3'
    },
    {
        img : 'images/yook.jpg',
        name : 'Hier encore',
        artist : 'Wasaap',
        music : 'music/24.mp3'
    },
    {
        img : 'images/yook.jpg',
        name : ' Devil Eyes',
        artist : 'Hippie Sabotage',
        music : 'music/25.mp3'
    },
    {
        img : 'images/26.jpg',
        name : 'Hope',
        artist : 'xxtxtentacion',
        music : 'music/26.mp3'
    },
    {
        img : 'images/27.jpg',
        name : 'I Wanna Be Yours',
        artist : 'Arctic Monkeys',
        music : 'music/27.mp3'
    },
    {
        img : 'images/28.jpg',
        name : 'Im yours ',
        artist : 'Isabel LaRosa',
        music : 'music/28.mp3'
    },
    {
        img : 'images/29.jpg',
        name : 'Youre alone again',
        artist : 'chamber of reflection',
        music : 'music/29.mp3'
    },
    {
        img : 'images/30.jpg',
        name : 'Shootout',
        artist : 'HIzzamuzzic',
        music : 'music/30.mp3'
    },
    {
        img : 'images/31.jpg',
        name : ' crystal castles ',
        artist : 'kerosene',
        music : 'music/31.mp3'
    },
    {
        img : 'images/32.jpg',
        name : 'Live Another Day ',
        artist : 'KORDHELL',
        music : 'music/32.mp3'
    },
    {
        img : 'images/33.jpg',
        name : ' MURDER IN MY MIND',
        artist : 'KORDHELL',
        music : 'music/33.mp3'
    },
    {
        img : 'images/34.jpg',
        name : ' SCOPIN (slowed)',
        artist : 'KORDHELL',
        music : 'music/34.mp3'
    },
    {
        img : 'images/35.jpg',
        name : 'The Arap girl ',
        artist : 'Mareux',
        music : 'music/35.mp3'
    },
    {
        img : 'images/6.jpg',
        name : ' The Perfect (slow)',
        artist : 'Mareux',
        music : 'music/36.mp3'
    },
    {
        img : 'images/37.jpg',
        name : 'Little Dark Age',
        artist : 'MGMT',
        music : 'music/37.mp3'
    },
    {
        img : 'images/38.jpg',
        name : 'sudno',
        artist : 'Molchat Doma',
        music : 'music/38.mp3'
    },
    {
        img : 'images/39.jpg',
        name : 'Money So Big ',
        artist : 'yeat',
        music : 'music/39.mp3'
    },
    {
        img : 'images/40.jpg',
        name : 'Orquestra snıfocıca',
        artist : 'MONTAGEM',
        music : 'music/40.mp3'
    },
    {
        img : 'images/41.jpg',
        name : ' NOVINHA DO ABC ',
        artist : 'MTG',
        music : 'music/41.mp3'
    },
    {
        img : 'images/42.jpg',
        name : 'My Ordinary Life',
        artist : 'The Living Tombstone',
        music : 'music/42.mp3'
    },
    {
        img : 'images/43.jpg',
        name : 'Miss You',
        artist : 'Oliver Tree ',
        music : 'music/43.mp3'
    },
    {
        img : 'images/44.jpg',
        name : ' snowfall',
        artist : 'øneheart x reidenshi',
        music : 'music/44.mp3'
    },
    {
        img : 'images/45.jpg',
        name : 'I Aint Worried',
        artist : 'OneRepublic',
        music : 'music/45.mp3'
    },
    {
        img : 'images/yook.jpg',
        name : 'Move Your Body',
        artist : ' Sevek x Ownboss',
        music : 'music/46.mp3'
    },
    {
        img : 'images/47.jpg',
        name : 'SILHOUETTE',
        artist : 'PASTEL GHOST',
        music : 'music/47.mp3'
    },
    {
        img : 'images/48.jpg',
        name : 'SLAUGHTER HOUSE ',
        artist : 'Phonkha x zecki',
        music : 'music/48.mp3'
    },
    {
        img : 'images/49.jpg',
        name : 'PHONKY TOWN ',
        artist : 'PlayaPhonk',
        music : 'music/49.mp3'
    },
    {
        img : 'images/50.jpg',
        name : ' Sunflower ',
        artist : 'Post Malone x Swae Lee ',
        music : 'music/50.mp3'
    },
    {
        img : 'images/51.jpg',
        name : 'prolly my spookiest',
        artist : 'Prodby668',
        music : 'music/51.mp3'
    },
    {
        img : 'images/52.jpg',
        name : 'Black Beatles',
        artist : 'Rae Sremmurd',
        music : 'music/52.mp3'
    },
    {
        img : 'images/53.jpg',
        name : 'Shadow',
        artist : 'ONIMXRU, SMITHMANE',
        music : 'music/53.mp3'
    },
    {
        img : 'images/54.jpg',
        name : 'Prınce of Darkness',
        artist : 'ARCHEZ x KXNVRA x SHADXWBXRN',
        music : 'music/54.mp3'
    },
    {
        img : 'images/55.jpg',
        name : 'Shootout (speed)',
        artist : 'Izzamuzzic',
        music : 'music/55.mp3'
    },
    {
        img : 'images/56.jpg',
        name : 'Sing for the moment ',
        artist : 'Eminem',
        music : 'music/56.mp3'
    },
    {
        img : 'images/57.jpg',
        name : 'Space Song ',
        artist : 'Beach House',
        music : 'music/57.mp3'
    },
    {
        img : 'images/58.jpg',
        name : 'Spit in my face',
        artist : 'ThxSoMch',
        music : 'music/58.mp3'
    },
    {
        img : 'images/59.jpg',
        name : 'Stay With Me',
        artist : 'Bilinmiyor',
        music : 'music/59.mp3'
    },
    {
        img : 'images/60.jpg',
        name : 'SUNRISE',
        artist : 'Xantesha',
        music : 'music/60.mp3'
    },
    {
        img : 'images/yook.jpg',
        name : 'Superman',
        artist : 'Eminem',
        music : 'music/61.mp3'
    },
    {
        img : 'images/yook.jpg',
        name : 'Freaks',
        artist : 'Surf Curse',
        music : 'music/62.mp3'
    },
    {
        img : 'images/63.jpg',
        name : 'The Batman ',
        artist : 'Nirvana',
        music : 'music/63.mp3'
    },
    {
        img : 'images/64.jpg',
        name : 'The Call',
        artist : ' 2WEI x Louis Leibfried x Edda Hayes',
        music : 'music/64.mp3'
    },
    {
        img : 'images/65.jpg',
        name : ' Sweater Weather',
        artist : 'The Neighbourhood ',
        music : 'music/65.mp3'
    },
    {
        img : 'images/66.jpg',
        name : 'Blinding Lights',
        artist : 'The Weeknd',
        music : 'music/66.mp3'
    },
    {
        img : 'images/67.jpg',
        name : ' Save Your Tears ',
        artist : 'The Weeknd',
        music : 'music/67.mp3'
    },
    {
        img : 'images/68.jpg',
        name : 'The Hills',
        artist : 'The Weeknd',
        music : 'music/68.mp3'
    },
    {
        img : 'images/69.jpg',
        name : 'Enemy ',
        artist : 'Tommee Profitt',
        music : 'music/69.mp3'
    },
    {
        img : 'images/70.jpg',
        name : 'ＳＡＦＥ',
        artist : 'TRAH',
        music : 'music/70.mp3'
    },
    {
        img : 'images/71.jpg',
        name : 'Heathens',
        artist : 'twenty one pilots',
        music : 'music/71.mp3'
    },
    {
        img : 'images/72.jpg',
        name : 'İce Cream Man',
        artist : 'Tyga',
        music : 'music/72.mp3'
    },
    {
        img : 'images/yook.jpg',
        name : 'Twilight ',
        artist : 'Bilinmiyor',
        music : 'music/73.mp3'
    },
    {
        img : 'images/74.jpg',
        name : 'Vacations young',
        artist : 'Vibes & Days',
        music : 'music/74.mp3'
    },
    {
        img : 'images/75.jpg',
        name : 'Vai dar Problema',
        artist : 'MC Pedrinho x Pollo',
        music : 'music/75.mp3'
    },
    {
        img : 'images/76.jpg',
        name : 'Vendetta',
        artist : 'MUPP x Sadfriendd',
        music : 'music/76.mp3'
    },
    {
        img : 'images/77.jpg',
        name : 'Party Party',
        artist : 'yally',
        music : 'music/77.mp3'
    },
    {
        img : 'images/78.jpg',
        name : 'Warriors',
        artist : '2WEI and Edda Hayes',
        music : 'music/78.mp3'
    },
    {
        img : 'images/79.jpg',
        name : 'Who is she ',
        artist : 'I Monster',
        music : 'music/79.mp3'
    },
    {
        img : 'images/80.jpg',
        name : 'Who is She',
        artist : 'remix',
        music : 'music/80.mp3'
    },
    {
        img : 'images/81.jpg',
        name : 'Revenge',
        artist : 'xxtxtentacion',
        music : 'music/81.mp3'
    }
];

loadTrack(track_index);

function loadTrack(track_index){
    clearInterval(updateTimer);
    reset();

    curr_track.src = music_list[track_index].music;
    curr_track.load();

    track_art.style.backgroundImage = "url(" + music_list[track_index].img + ")";
    track_name.textContent = music_list[track_index].name;
    track_artist.textContent = music_list[track_index].artist;
    now_playing.textContent = "Müzik Çalyor " + (track_index + 1) + " / " + music_list.length;

    updateTimer = setInterval(setUpdate, 1000);

    curr_track.addEventListener('ended', nextTrack);
    random_bg_color();
}

function random_bg_color(){
    let hex = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e'];
    let a;

    function populate(a){
        for(let i=0; i<6; i++){
            let x = Math.round(Math.random() * 14);
            let y = hex[x];
            a += y;
        }
        return a;
    }
    let Color1 = populate('#');
    let Color2 = populate('#');
    var angle = 'to right';

    let gradient = 'linear-gradient(' + angle + ',' + Color1 + ', ' + Color2 + ")";
    document.body.style.background = gradient;
}
function reset(){
    curr_time.textContent = "00:00";
    total_duration.textContent = "00:00";
    seek_slider.value = 0;
}
function randomTrack(){
    isRandom ? pauseRandom() : playRandom();
}
function playRandom(){
    isRandom = true;
    randomIcon.classList.add('randomActive');
}
function pauseRandom(){
    isRandom = false;
    randomIcon.classList.remove('randomActive');
}
function repeatTrack(){
    let current_index = track_index;
    loadTrack(current_index);
    playTrack();
}
function playpauseTrack(){
    isPlaying ? pauseTrack() : playTrack();
}
function playTrack(){
    curr_track.play();
    isPlaying = true;
    wave.classList.add('loader');
    playpause_btn.innerHTML = '<i class="fa fa-pause-circle fa-5x"></i>';
}
function pauseTrack(){
    curr_track.pause();
    isPlaying = false;
    track_art.classList.remove('rotate');
    wave.classList.remove('loader');
    playpause_btn.innerHTML = '<i class="fa fa-play-circle fa-5x"></i>';
}
function nextTrack(){
    if(track_index < music_list.length - 1 && isRandom === false){
        track_index += 1;
    }else if(track_index < music_list.length - 1 && isRandom === true){
        let random_index = Number.parseInt(Math.random() * music_list.length);
        track_index = random_index;
    }else{
        track_index = 0;
    }
    loadTrack(track_index);
    playTrack();
}
function prevTrack(){
    if(track_index > 0){
        track_index -= 1;
    }else{
        track_index = music_list.length -1;
    }
    loadTrack(track_index);
    playTrack();
}
function seekTo(){
    let seekto = curr_track.duration * (seek_slider.value / 100);
    curr_track.currentTime = seekto;
}
function setVolume(){
    curr_track.volume = volume_slider.value / 100;
}
function setUpdate(){
    let seekPosition = 0;
    if(!isNaN(curr_track.duration)){
        seekPosition = curr_track.currentTime * (100 / curr_track.duration);
        seek_slider.value = seekPosition;

        let currentMinutes = Math.floor(curr_track.currentTime / 60);
        let currentSeconds = Math.floor(curr_track.currentTime - currentMinutes * 60);
        let durationMinutes = Math.floor(curr_track.duration / 60);
        let durationSeconds = Math.floor(curr_track.duration - durationMinutes * 60);

        if(currentSeconds < 10) {currentSeconds = "0" + currentSeconds; }
        if(durationSeconds < 10) { durationSeconds = "0" + durationSeconds; }
        if(currentMinutes < 10) {currentMinutes = "0" + currentMinutes; }
        if(durationMinutes < 10) { durationMinutes = "0" + durationMinutes; }

        curr_time.textContent = currentMinutes + ":" + currentSeconds;
        total_duration.textContent = durationMinutes + ":" + durationSeconds;
    }
}
