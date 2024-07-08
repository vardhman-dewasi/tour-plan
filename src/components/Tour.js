import './Tour.css';
import Card from './Card';

function Tours({tours, removeTour}){
    return(
        <div className='tour'>
            <div className='heading'>
            <h1> Tour with Love</h1>
            </div>
            <div className='tour-cards'>
                {
                    tours.map( (tour) => {
                        return <Card {...tour} key={tour.id} removeTour={removeTour}></Card>
                    })
                }
            </div>
        </div>
    );
}
export default Tours;
