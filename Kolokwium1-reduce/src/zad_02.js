const questionsChatGpt = require('./questions-chat-gpt.js').questionsChatGpt;
const users = require('./users.js').users;

class QuestionService {
  constructor(array) {
    this.array = array;
  }

  getQuestionById(id) {
    return this.array.reduce((acc, curr) => {
      return (id === curr.id) ? `${acc} ${curr.question}` : acc;
    }, ``);
  }

  createNewQuestion(question, id) {
    if (question === undefined) {
      console.log("Operacja się nie udała");
    } else {
      this.array.push({
        id: this.array.length+1,
        question: question,
        timestamp: new Date(),
        user: users[id]
      });
      return this.array;
    }
  }

  updateAnswer(id, answer) {
    if (id > this.array.length) console.log(`Nie ma pytania o ${id}`);
    else {
      this.array = this.array.reduce((acc, curr) => {
        if (id === curr.id) {
          return [...acc, {
            id: curr.id,
            question: curr.question,
            answer: answer,
            timestamp: curr.timestamp,
            user: curr.user
          }];
        } else return [...acc, curr];
      }, []);
    }
  }

  updateQuestion(objekt) {
    if (objekt.id === undefined || objekt.question === undefined || objekt.id === undefined) {
      console.log("Operacja nie powiodła się");
    } else {
      this.array = this.array.reduce((acc, curr) => {
        if (objekt.id === curr.id) {
          return [...acc, {
            id: curr.id,
            question: objekt.question,
            answer: curr.answer,
            timestamp: new Date(),
            user: objekt.user
          }];
        }
        return acc;
      }, []);
      return this.array;
    }
  }

  deleteQuestion(id) {
    this.array = this.array.reduce((acc, curr) => {
      return id !== curr.id ? [...acc, curr] : acc;
    }, []);
    return this.array;
  }

  getQuestionByUser(user) {
    return this.array.reduce((acc, curr) => {
      if (user === curr.user.id) {
        return [...acc, {
          id: curr.id,
          question: curr.question
        }];
      } return acc;
    }, []);
  }
}

const chatGPT = new QuestionService(questionsChatGpt);
// console.log(chatGPT.getQuestionById(6));
// chatGPT.createNewQuestion("Will you merry me?", 4);

// console.log(chatGPT.updateAnswer(20, "Odpowiedź"));

const newQuestion = {
  id: 20,
  question: "How many water...?",
  user: {
    id: {
      id: 1
    }
  }
};

console.log(chatGPT.updateQuestion(newQuestion));
// console.log(chatGPT.deleteQuestion(20));
console.log(chatGPT.getQuestionByUser(1));

