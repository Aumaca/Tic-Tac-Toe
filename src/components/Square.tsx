import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faO, faX } from '@fortawesome/free-solid-svg-icons';

interface Props {
    value: string;
    handleClick: () => void;
    bg: number;
}

function Square({ value, handleClick, bg }: Props) {
    let background = "";
    if (bg === 1) {
        background = "success";
    }
    let element;
    if (value === "X") {
        element = <FontAwesomeIcon icon={faX} className='fa-5x'></FontAwesomeIcon>;
    } else if (value === "O") {
        element = <FontAwesomeIcon icon={faO} className='fa-5x'></FontAwesomeIcon>;
    } else {
        element = "";
    }


    return (
        <div className={`square ${background}`} onClick={handleClick}>
            {element}
        </div>
    )
}
export default Square;