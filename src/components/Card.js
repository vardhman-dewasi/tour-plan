import './Card.css';
import {useState} from 'react'

function Card({id, image, info, price, name, removeTour}){
    const description= `${info.substring(0,200)}....`

    const[readmore,setReadmore] = useState(false);

    function readmoreHandler(){
        setReadmore(!readmore);
    }

    return (
        <div className="card">
            <img src={image} className='image' alt=''></img>
            <div className='tour-details'>
                <h4 className='tour-price'>${price}</h4>
                <h4 className='tour-name'>{name}</h4>
            </div>
            <div className='description'>
                {readmore ? info : description} 
                <span className='read-more' onClick={readmoreHandler}>
                    {readmore ? `show less` : `read more`}
                </span>
            </div>
            <button className='btn-red' onClick={()=>removeTour(id)}>
                Not Interested
            </button>
        </div>
    );

}
export default Card;