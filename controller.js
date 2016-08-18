const _ = require('lodash'); 

exports.model = function(question, session, env){
  var out = _.assign({}, question.model); 
  out.isStatic = env.mode !== 'gather';

  if(env.mode === 'evaluate'){
    console.log(JSON.stringify(question));
    out.correct = _.isEqual(question.correctResponse, session.response);
    console.log('out.correct: ', out.correct);
    var feedback = question.model.feedback || { correct: 'correct', incorrect: 'incorrect'}  
    console.log('feedback: ', feedback);
    out.message = feedback[out.correct ? 'correct' : 'incorrect'];
    console.log('message: ', out.message);
  }
  return out;
};