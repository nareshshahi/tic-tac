import Icons from "../icon/icon.jsx";
import './card.css'
function Card({player }) {
    let icon = <Icons />
    if (player == 'x'){
        icon = <Icons name ="cross" />

    }
    else if (player == 'o') {
        icon = <Icons name='circle' />
    }

return (
    <div className=" card">
        {icon}

    </div>
)
}
export default Card;