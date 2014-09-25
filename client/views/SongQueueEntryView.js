// SongQueueEntryView.js - Defines a backbone view class for the song queue entries.
var SongQueueEntryView = Backbone.View.extend({

  tagName: 'tr',

  template: _.template('<td>(<%= artist %>)</td><td><%= title %></td>'),

  events: {
    'click': function() {
      this.model.dequeue();
      }
    },

  initialize: function() {
  },

  render: function() {
    return this.$el.html(this.template(this.model.attributes));
  }


  // listen for SongQueue.on('add') and invoke this.render() which will bind song data to $el and render it to screen

  // listen for SongQueue.on('remove') and invoke a method to remove song from queue

  // your code here!
});
