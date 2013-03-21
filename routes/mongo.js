/*
 * Mongo.
 */

exports.index = function(req, res){
  res.render('mongo', { title: 'Mongo' });
};


exports.list = function(req, res){
  res.render('list', { title: 'Mongo' });
};

exports.detail = function(req, res){
  res.render('detail', { title: 'Mongo' });
};