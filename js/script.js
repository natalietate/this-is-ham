(function() {

// class to hold audio controls
  class Controls {
    constructor(jukebox) {
      this.audio = document.querySelector('audio')
    }

    playSong() {
      this.audio.play()
    }

    pauseSong() {
      this.audio.pause()
    }

    stopSong() {
      this.audio.pause();
      this.audio.currentTime = 0
    }

    switchSong(source) {
      this.audio.setAttribute('src', source);
      this.audio.play();
    }
  }
// end of Controls class

  var controls = new Controls();

// start of the actual jukebox
// selecting play / pause / stop buttons
  var play = document.querySelector('#play');
  var pause = document.querySelector('#pause');
  var stop = document.querySelector('#stop');

  // play / pause / stop using Jukebox
  play.addEventListener('click', function() {
    controls.playSong();
  });

  pause.addEventListener('click', function() {
    controls.pauseSong();
  });

  stop.addEventListener('click', function() {
    controls.stopSong();
  });

  //song selector buttons
  var song1 = document.querySelector('#one')
  var song2 = document.querySelector('#two')
  var song3 = document.querySelector('#three')

  // audio files and track name arrays
  var catalog = ['audio/alex.m4a', 'audio/burr.m4a', 'audio/my-shot.m4a']
  var title = ['Alexander Hamilton', 'Aaron Burr, Sir', 'My Shot']

  // set src file, play song, display the title
  song1.addEventListener('click', function() {
    controls.switchSong(catalog[0]);
    document.querySelector('.currently-playing').innerHTML = "Now playing: " + title[0] + " performed by the Original Hamilton Broadway Cast"
  })
  song2.addEventListener('click', function() {
    controls.switchSong(catalog[1]);
    document.querySelector('.currently-playing').innerHTML = "Now playing: " + title[1] + " performed by the Original Hamilton Broadway Cast"
  })
  song3.addEventListener('click', function() {
    controls.switchSong(catalog[2]);
    document.querySelector('.currently-playing').innerHTML = "Now playing: " + title[2] + " performed by the Original Hamilton Broadway Cast"
  })

})();
