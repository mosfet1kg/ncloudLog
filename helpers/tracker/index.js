const Tail = require('tail').Tail;

module.exports = (function() {
  return {
    createTracker: ( filePath ) => {
      const tail = new Tail( filePath );
      return tail;
    },
    unwatch: ( tracker ) => {
      tracker.unwatch();
    },
    watch: ( tracker ) => {
      tracker.watch();
    }
  }
})();
