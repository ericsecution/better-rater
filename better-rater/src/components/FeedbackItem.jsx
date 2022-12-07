import { FaTimes } from 'react-icons/fa'
import PropTypes from 'prop-types'
import Card from "./shared/Card"


function FeedbackItem({ item, handleDelete }) {
  

  return (
    // <Card reverse={true}> 
    // use above code to flip cards to dark / reverse colors
    <Card>
      <div className="num-display">{item.rating}</div>
      <button onClick={() => handleDelete(item.id)} className='close'>
        <FaTimes color='purple' />
      </button>
      <div className="text-display">{item.text}</div>
     
    </Card>
  )

}

FeedbackItem.propTypes = {
  item: PropTypes.object.isRequired,

}

export default FeedbackItem
