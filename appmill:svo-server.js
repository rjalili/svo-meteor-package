Meteor.startup(function () {

  if (Events.find().count() === 0) {
    var data = [
      {subject:"mike",verb:"told",object:"joe"},   
      {subject:"joe",verb:"told",object:"sam"},   
      {subject:"mike",verb:"told",object:"sam"},   
      {subject:"sam",verb:"told",object:"fred"}   
    ];

    var timestamp = (new Date()).getTime();
    _.each(data, function(item) {
      Events.insert(_.extend(item,{when:timestamp}));  
      timestamp += 1; // ensure unique timestamp.
    });
  }
});

Meteor.methods({
  addSVO: function(svo) {
    check(svo,Object);
    return SVOLog.put(svo)
  },
  querySVO: function(svo) {
    check(svo,Object);
    return SVOLog.query(svo)    
  }
})