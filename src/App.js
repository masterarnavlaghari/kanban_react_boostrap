import React, { Component } from "react";
import Column from "./Column"
import "./App.css";

const DIRECTION_LEFT = -1;
const DIRECTION_RIGHT = 1;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      columns: [
        {
          name: "Backlog",
          cards: [{ name: "Card A" , desc: "Task A."}]
        },
        {
          name: "Doing",
          cards: [{ name: "Card B" , desc: "Task B."}]
        },
        {
          name: "Done",
          cards: [{ name: "Card C" , desc: "Task C.  "}]
        }
      ]
    };
  }

  handleAdd = columnIndex => {
    const name = window.prompt('Name?')
    if(!name) return
    const desc = window.prompt('Descript?')
    if(!desc) return
    //const desc = window.prompt('Descrip?')
    //if(!desc) return
    const card = { name,desc }
    //card.desc = desc
        this.setState(prevState => {
      const { columns } = this.state
      columns[columnIndex].cards.push(card)
      return { columns }
    })
  }

  handleDelete = (columnIndex, cardIndex) => {
    this.setState(prevState => {
      const { columns } = prevState
      columns[columnIndex].cards.splice(cardIndex, 1)
      return { columns }
    })
  }

  handleMove = (columnIndex, cardIndex, direction) => {
    this.setState(prevState => {
      const { columns } = prevState
      const [card] = columns[columnIndex].cards.splice(cardIndex, 1)
      columns[columnIndex + direction].cards.push(card)
      return { columns }
    })
  }

  render() {
    return (
      <div className="App">
        {this.state.columns.map((column, columnIndex) => (
          <Column
            column={column}
            columnIndex={columnIndex}
            key={columnIndex}
            onMoveLeft={cardIndex => this.handleMove(columnIndex, cardIndex, DIRECTION_LEFT)}
            onMoveRight={cardIndex => this.handleMove(columnIndex, cardIndex, DIRECTION_RIGHT)}
            onAddCard={() => this.handleAdd(columnIndex)}
            onRemoveCard={cardIndex => this.handleDelete(columnIndex,cardIndex)}
          />
        ))}
      </div>
    );
  }
}

export default App;