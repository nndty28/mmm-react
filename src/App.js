import React, { Component } from "react";
import quizService from "./quizService";
import QuestionBox from "./components/QuestionBox";
import "./assets/style.css";

class App extends Component{
    constructor(){
        super();
        this.state = {
            counter: 0,
            questionId: 1,
            question: '', 
            answerOptions: [],
            //selectedAnswers: [],
            //budget: 5000
        };

        this.handleAnswerSelected = this.handleAnswerSelected.bind(this);
    }

    componentDidMount () {
        this.setState({
            question: quizService[0].question,
            answerOptions: quizService[0].answers
        })
    }

    handleAnswerSelected(event) {
        //this.setUserAnswer(event.currentTarget.value);
    
        if (this.state.questionId < quizService.length) {
          setTimeout(() => this.setNextQuestion(event.currentTarget.value), 300);
        } else {
          setTimeout(() => this.setResults(this.getResults()), 300);
        }
      }

    /*setUserAnswer(answer) {
        this.setState((state) => ({
          answersCount: {
            ...state.answersCount,
            [answer]: (state.answersCount[answer] || 0) + 1
          },
          answer: answer
        }));
      }*/

      setNextQuestion(answer) {
        
        const counter = this.state.counter + 1;
        const questionId = this.state.questionId + 1;
        //const budget = this.state.budget -
    
        this.setState({
          counter: counter,
          questionId: questionId,
          question: quizService[counter].question,
          answerOptions: quizService[counter].answers,
        });
      }

    render() {
        return(
            <div className="container">
                <div className="title">Scenarios</div>
                <QuestionBox question={this.state.question} options={this.state.answerOptions} />
            </div>
        );
    }
}

export default App;