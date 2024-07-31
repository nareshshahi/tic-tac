import {useState} from "react";
import Card from "../card/card.jsx";
import isWinner from "../../helpers/checkwinner.js";
import './grid.css'

function Grid ({numberOfCards}) {
    const [board , setBoard] = useState(Array(numberOfCards).fill(""));
    function play (index){
        if(turn == true) {
            board[index] == "o";
        }
        else {
            board[index] = "x";
        }

        const win = isWinner(board, turn ? "o": "x" );
        if (win){
            setWinner(win);
        }
        swrBoard([...board]);
        SetTurn(!turn);
      }
    return (
        <div className="grid-wrapper">
            <h1 className="turn-highlight">current turn:{(turn) ? 'o' : 'x'}</h1>
            <div className="grid">
                {board.map((el,idx) => <Card key ={idx} onplay ={play} player={el} index={idx} />)}
             </div>

        </div>

    );


}
export default Grid;