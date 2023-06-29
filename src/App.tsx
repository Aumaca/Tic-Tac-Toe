import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/App.css'
import Board from './components/Board';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faX } from '@fortawesome/free-solid-svg-icons';

function App() {

  const [player1Points, setPlayer1Points] = useState(0);
  const [player2Points, setPlayer2Points] = useState(0);
  const [playerTurn, setPlayerTurn] = useState("X");

  const handlePoint = (player: string): void => {
    if (player === "X") {
      setPlayer1Points(player1Points => player1Points + 1);
    } else if (player === "O") {
      setPlayer2Points(player2Points => player2Points + 1);
    }
  }

  return (
    <>
      <div className="first_div bg-primary pt-5 pb-5">
        <div className="d-flex flex-column gap-5">

          {/* TITLE */}
          <div className="title">
            <h1 className="text-white text-center">Tic-Tac-Toe Game</h1>
          </div>

          {/* SCORE */}
          <div className="container text-center bg-white w-auto rounded p-4">
            <div className="d-flex flex-column">

              <div className="score d-flex justify-content-center align-items-center mt-3">

                {/* PLAYER 1 */}
                <div className='me-4'>
                  <h3>Player 1 (X)</h3>
                  <div className="bg-white p-4 border border-4 rounded">
                    <h1 className='m-0'>{player1Points}</h1>
                  </div>
                </div>

                <FontAwesomeIcon icon={faX} className='fa-3x mt-5'></FontAwesomeIcon>

                {/* PLAYER 2 */}
                <div className="ms-4">
                  <h3>Player 2 (O)</h3>
                  <div className="bg-white p-4 border border-4 rounded">
                    <h1 className='m-0'>{player2Points}</h1>
                  </div>
                </div>

              </div>
            </div>
            <div className="turn mt-3">
              {/* PLAYER TURN */}
              <h3 className='m-0'>Turn: {playerTurn}</h3>
            </div>
          </div>


        </div>
        <Board handlePoint={handlePoint} playerTurn={playerTurn} setPlayerTurn={setPlayerTurn} />
      </div>

      <div className="footer">
        <p className="p-2 m-0 text-white">Made with ❤️ by <a className="text-white github-link" href="http://github.com/Aumaca"
          target="_blank" rel="noopener">Carlos Augusto</a>
        </p>
      </div>
    </>
  )
}

export default App
