// SongModel.js - Defines a backbone model class for songs.
var SongModel = Backbone.Model.extend({

  play: function(){
    // Triggering an event here will also trigger the event on the collection
    this.trigger('play', this);
  },

  enqueue: function(song) {
       this.trigger('enqueue',this);
     // add song to song queue

    // trigger 'change' or 'add' event for SongQueue Collection that SongQueueEntryView.js will "hear"
    },

  dequeue: function(){
       this.trigger('dequeue',this);
    },

  songOver: function(){
       this.trigger('songOver',this);
    },

  playFirst: function(){
       this.trigger('playFirst',this);
    }

});
