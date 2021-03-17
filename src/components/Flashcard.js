import React, { Component } from "react";
import './Flashcard.css';
import { Redirect } from 'react-router-dom';

class Flashcard extends Component {

    constructor(props) {
        super(props)
        this.state = {
            results: []
        }
    }
        
    render(){
        if(this.props.redirect_to_home){
            this.props.resetRedirectHome()
            return <Redirect to="/" />
        }
        //console.log(cardList)
        return(
            <div>
                <div className="main-title">
                <h1>Create a flashcard</h1> 
                </div>
                <form onSubmit= {(event) => this.props.addQuestion(event)}>
                <div className="main-content">
                    <div className="main-rows" >
                        <div className="label-text">
                            Subject  
                        </div>
                        <div className="label-text">
                        <select name="subjectId" id="cars">
                            <option value="1">Science</option>
                            <option value="2">History</option>
                            <option value="3">Geography</option>
                        </select>
                        </div>
                    </div>
                    <div className="main-rows" >
                        <div className="label-text">
                            Question  
                        </div>
                        <div className="label-text">
                            <input type="text" placeholder="Enter your question" name="question"/>
                        </div>
                    </div>
                    <div className="main-rows" >
                        <div className="label-text">
                            Answer  
                        </div>
                        <div className="label-text">
                            <input type="text" placeholder="Enter your answer" name="answer"/>
                        </div>
                    </div>
                    <div className="main-title" >                    
                            <input type="submit" value="Add Card" />
                    </div>
                </div>
                </form>
            </div>
        );
    }
}

export default Flashcard;