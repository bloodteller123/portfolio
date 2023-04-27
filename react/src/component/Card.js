import {React} from 'react'

import '../css/Card.scss'

const Card = ({company_name, role, tasks, date, imagename}) =>{
    console.log(imagename)
    return(
        // <div class="artboard">
            <div className="card">
                <div className="card_side card_side--front">
                    <div className="card_description">
                        <h2 className='company'>{company_name}</h2>
                        <p className='role'>{role}</p>
                        <p className='date'>{`${date[0]} - ${date[1]}`}</p>
                        <img style={{maxHeight:'50px'}}src={require(`../assests/${imagename}`)} alt="logo"/> 
                    </div>
                </div>
                <div className="card_side card_side--back">
                    <div className="card_description tasks">
                        <ui>
                            {tasks.map((t, ind) => <li className='taskItem' key={ind}>{t}</li>)}
                        </ui>
                    </div>
                </div>
            </div>
        // </div>
    )
}

export default Card
