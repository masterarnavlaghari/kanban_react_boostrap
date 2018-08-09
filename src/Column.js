import React from "react"
import Card from "./Card"

export default ({
  column,
  columnIndex,
  onMoveRight,
  onMoveLeft,
  onAddCard,
  onRemoveCard
}) => (
  <div className="column">
    <h1>{column.name}</h1>
    {column.cards.map((card, cardIndex) => (
      <Card
        key={cardIndex}
        card={card}
        cardIndex={cardIndex}
        canMoveLeft={columnIndex !== 0}
        canMoveRight={columnIndex !== 2}
        onMoveLeft={() => onMoveLeft(cardIndex)}
        onMoveRight={() => onMoveRight(cardIndex)}
        onRemoveCard={() => onRemoveCard(cardIndex)}
      />
    ))}
    <button type="button" class="btn btn-success" onClick={onAddCard}>Add</button>
  </div>
)