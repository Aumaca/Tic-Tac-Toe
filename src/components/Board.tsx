import { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Square from "./Square";
import { Patterns } from "../utils/Patterns";
import { playSound } from "../utils/PlaySound";
interface Props {
    playerTurn: string;
    setPlayerTurn: (player: string) => void;
    handlePoint: (player: string) => void;
}

function Board({ playerTurn, setPlayerTurn, handlePoint }: Props) {
    const [moves, setMoves] = useState(0);
    const [board, setBoard] = useState(Array(9).fill(""));
    const [boardBg, setBoardBg] = useState(Array(9).fill(0));
    const [winner, setWinner] = useState(false);

    useEffect(() => {
        const checkWin = () => {
            if (winner) {
                return;
            }

            Patterns.forEach((pattern) => {
                const [x, y, z] = pattern;
                if (board[x] && board[x] === board[y] && board[y] === board[z]) {
                    playSound(`${import.meta.env.BASE_URL}/audio/victory.mp3`);
                    updateBoardBg(x, y, z);
                    setWinner(true);
                    handlePoint(board[x]);
                    setPlayerTurn(board[x]);
                    return;
                }
            });

            if (moves === 9) {
                if (moves === 9) { playSound(`${import.meta.env.BASE_URL}/audio/tie.mp3`) }
            }
        }
        checkWin();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [board]);

    const updateBoardBg = (x: number, y: number, z: number): void => {
        const newBoardBg = [...boardBg];
        newBoardBg[x] = 1;
        newBoardBg[y] = 1;
        newBoardBg[z] = 1;
        setBoardBg(newBoardBg);
    }

    const resetBoard = (): void => {
        setBoard(Array(9).fill(""));
        setBoardBg(Array(9).fill(""));
        setWinner(false);
        setMoves(0);
    }

    const clickSquare = (square: number): void => {
        // If there's a winner or a tie
        if (winner || moves === 9) {
            resetBoard();
            return;
        }

        setMoves(moves => moves + 1);
        const newBoard = [...board];
        if (newBoard[square] === "") {
            playSound(`${import.meta.env.BASE_URL}/audio/click.mp3`);
            newBoard[square] = playerTurn;
            playerTurn === "X" ? setPlayerTurn("O") : setPlayerTurn("X");
        }
        setBoard(newBoard);
    }

    return (
        <>
            <div className="board text-center mt-5 mb-5" key="sla">
                {board.map((_value, idx) => {
                    return <Square key={idx} value={board[idx]} handleClick={() => clickSquare(idx)} bg={boardBg[idx]} />
                })}
            </div>
        </>
    )
}
export default Board