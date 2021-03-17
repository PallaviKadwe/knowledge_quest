import React, { Component } from "react";
import './Cards.css';

class Cards extends Component {

    constructor(props) {
        super(props)
        this.state = {
            results: []
        }
    }
        
    render(){
        let results = []
        console.log("At cards")
        console.log(this.props)
        if(this.props.match.path === '/history'){
                results= this.props.cards_history.history               
        }else if(this.props.match.path === '/science'){
                results = this.props.cards_science.science  
        }else{
                results = this.props.cards_geography.geography     
        }   
        console.log(results)     

        let cardList = results.map((value,index) => 
            <div className='row'>

                <div className='question-column'>
                {value.question}
                </div>

                <div className='flip-card'>
                    <div className="flip-card-inner">
                        <div className="flip-card-front">
                            Answer
                        </div>
                        <div className="flip-card-back">
                            {value.answer}
                        </div>                    
                    </div>
                </div>
            
            </div>
        )
        //console.log(cardList)
        return(

            <div >
               {cardList}
            </div>
        );
    }
}

export default Cards;