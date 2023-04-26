import {React} from 'react'

import '../css/Card.scss'

const Card = () =>{
    return(
        // <div class="artboard">
            <div class="card">
                <div class="card_side card_side--front">
                    <div class="card_description">
                        <p>timeline</p>
                    </div>
                </div>
                <div class="card_side card_side--back">
                    <div class="card_description">
                        back
                    </div>
                </div>
            </div>
        // </div>
    )
}

export default Card
