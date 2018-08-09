import React from "react"

export default ({
  card,
  canMoveLeft,
  canMoveRight,
  onMoveLeft,
  onMoveRight,
  onRemoveCard
}) => (
    <div className="card" class="card">
      <div class="card-body text-center">
        <span class="titulo" className="title row">{card.name}</span>
        <span className="title row">{card.desc}</span>
        <div class="col text-center">
          <div class="btn-group" role="group" aria-label="Basic example">
            {canMoveLeft && <button type="button" class="btn btn-primary" onClick={onMoveLeft}>Move Left</button>}
            {canMoveRight && <button type="button" class="btn btn-primary" onClick={onMoveRight}>Move Rigth</button>}
          </div>
          <button type="button" class="btn btn-danger" onClick={onRemoveCard}>Delete</button>
        </div>
      </div>
    </div >
  )