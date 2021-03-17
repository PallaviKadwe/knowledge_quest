import React, { Component } from 'react';
import './App.css';
import { Route, Link, Switch } from "react-router-dom";
import axios from "axios";
import Header from './components/Header';
import Homepage from './components/Homepage';
import Cards from './components/Cards';
import Flashcard from './components/Flashcard';

class App extends Component {

  constructor(props){
    super(props)

    //this.apiUrl = "http://localhost:3003/api/quizzer/";
    this.apiUrl = "https://ppkflashcardapi.herokuapp.com/api/quizzer/";
    this.state = {
      allTreatments:[],
      cards_history:[],
      cards_science:[],
      cards_geography:[],
      error:null,
      redirect_to_home: false
    }
  }

  get_History_Cards = async () => {
    let response = await axios.get(`${this.apiUrl}history`);
    console.log("At app history")
    console.log(response.data)
    this.setState({
      cards_history: response.data
    });
  }

  get_Science_Cards = async () => {
    let response = await axios.get(`${this.apiUrl}science`);
    this.setState({
      cards_science: response.data
    });
  }

  get_Geography_Cards = async () => {
    let response = await axios.get(`${this.apiUrl}geography`);
    this.setState({
      cards_geography: response.data
    });
  }

  addQuestion = (event) =>{
    event.preventDefault();

    const url = `${this.apiUrl}flashcard`

    axios.post(url, {
      question: event.target.question.value,
      answer: event.target.answer.value,
      subjectId: event.target.subjectId.value,
    })
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
    this.setState({
      redirect_to_home: true
    });
    this.get_all_Cards();
  }

  reset_Home_Redirect = () => {
    this.setState({
      redirect_to_home: false
    });
  }

  get_all_Cards(){
    this.get_History_Cards()
    this.get_Science_Cards()
    this.get_Geography_Cards()
  }

  componentDidMount = async () => {
    this.get_all_Cards();
  }

  render() {
    return (
      <div className="wrapper"> 
          <nav>
            <Header />
          </nav>
          <main>
            <Switch>
              <Route exact path='/' component={Homepage} />
              <Route path='/flashcard' 
                render={(routerProps) => <Flashcard 
                  addQuestion={this.addQuestion} resetRedirectHome={this.reset_Home_Redirect}
                  {...this.state}{...routerProps} />}></Route>
              <Route path='/history' 
                render={(routerProps) => <Cards {...this.state}{...routerProps} />}>
              </Route>
              <Route path='/science' 
                render={(routerProps) => <Cards  {...this.state}{...routerProps} />}>
              </Route>
              <Route path='/geography' 
                render={(routerProps) => <Cards {...this.state}{...routerProps} />}>
              </Route>

            </Switch>
             
          </main>
          <div className="footer">
            <h4>Knowledge Quest </h4> 
          </div>       
      </div>
    );
  }
}

export default App;

