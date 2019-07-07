import React from 'react';
import Square from './Square';

class Board extends React.Component {
  value = [];
  renderSquare(i) {
    for (let i = 1; i < 10; i++) {
    }
    return <Square value={i} />;
  }

  render() {
    const status = 'Next player:x';
    return (
      <div>
        <div className="status">{status}</div>
        <div className="borad-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className="borad-row">
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className="borad-row">
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </div>
    );
  }
}
export default Board;