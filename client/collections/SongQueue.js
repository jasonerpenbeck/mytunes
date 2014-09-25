// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Songs.extend({

  initialize: function(){
    this.on('add remove',function() {


      console.log('Length of songQueue: ',this.length);
    return this.length;
    });
  },

  playFirst: function() {
    console.log('Run playFirst');
    console.log(this.at(0));
    this.at(0).play();
  }






});