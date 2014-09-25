// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Songs.extend({

  initialize: function(){
    this.on('add',function() {
      console.log('Length of songQueue: ',this.length);
    });
  },

  playFirst: function() {
    console.log('Run playFirst');

    // if this.length > 0
      // set currentSong to songQueue[0] -> this.model.set('currentSong',songQueue[0])
      // play songQueue[0]
    // else
      // do nothing

  }


});