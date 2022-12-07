import { useState } from 'react'
import Card from './shared/Card'
import Button from './shared/Button'

function FeedbackForm() {
    const [text, setText] = useState('')
    const [btnDisabled, setBtnDisabled] = useState(true)
    const [message, setMessage] = useState('')

    const handleTextChange = (e) => {
        if(text === '') {
            setBtnDisabled(true)
            setMessage(null)
        } else if (text !== '' && text.trim().length < 10) {
            setMessage('Text must be at least 10 characters.')
            setBtnDisabled(true)
        } else {
            setMessage(null)
            setBtnDisabled(false)
        }

        setText(e.target.value)
    
    }

  return (
    <Card>
        <form>
            <h4>Please add a brief description for your Rating.</h4>

            {/* @todo - RatingSelect component goes here */}
            <div className='input-group'>

                <input onChange={handleTextChange}
                type='text' 
                placeholder='Please Write a Review.'
                value={text}
                />
                <Button type='submit' isDisabled={btnDisabled}>
                    Send
                </Button>
            </div>

            {message && <div className='message'>{message}</div>}
        </form>

    </Card>
   
  )
}
export default FeedbackForm
