const _ = require('lodash'); 

exports.model = function(question, session, env){
  console.log('question: ', JSON.stringify(question, null, '  '));
  console.log('session: ', JSON.stringify(session, null, '  '));
  console.log('env: ',JSON.stringify(env, null, '  '));
  var correct = _.isEqual(question.correctResponse, session.response);
  var feedback = question.model.feedback || { correct: 'correct', incorrect: 'incorrect'}  
  var out = _.assign({}, question.model); 
  out.env = env;
  console.log('return: ', JSON.stringify(out, null, '  '));
  return out;
};