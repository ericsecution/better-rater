import {useContext} from 'react'
import FeedbackContext from '../context/FeedbackContext'


function FeedbackStats() {
  const {feedback} = useContext(FeedbackContext)
    let average = feedback.reduce((acc, cur) => {
        return acc + cur.rating
    }, 0) / feedback.length
    /* 
       Here I calculate the avg (above) for all feedback using the abbrev. 
       for the 'accumulator' (acc) and the 'currentValue' (cur) as per:
    => https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce
       and RegEx it to one decimal place (except '.0') below; ex: '8.5' 
    */
    average = average.toFixed(1).replace(/[.,]0$/, '')
    

  return (
    <div className='feedback-stats'>
        <h5>{feedback.length} Reviews </h5>
        <h5>Average Rating: {isNaN(average) ? 0 : average}</h5>
    Stats
    </div>
  )
}


export default FeedbackStats
