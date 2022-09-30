const {Schema,model} =require('mongoose')

const quizSchema = new Schema(
  {
    
    question: {type: String},
    correctAnswer: {type:String},
    answers: [String],
  },
  {
    collection: "quiz",
  }
 
);
module.exports = model("quiz", quizSchema);
 