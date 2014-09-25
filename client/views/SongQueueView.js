// SongQueueView.js - Defines a backbone view class for the song queue.
var SongQueueView = Backbone.View.extend({

  initialize: function() {
/*     this.render(); */
    console.log(this.collection);

    this.collection.on('add remove', function() {
      console.log('Something was added (or removed)');
      this.render();
    },this);
  },

  render: function() {
    console.log(this);
    this.$el.html('<th>Queue</th>').append(
      this.collection.map(function(song){
        return new SongQueueEntryView({model: song}).render();
      })
    );
  }

});

// This is the container view of the song queue - basically a view of the collection of songs in the queue