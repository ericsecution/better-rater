import { v4 as uuidv4 } from 'uuid'
import { createContext, useState } from 'react'

const FeedbackContext = createContext()

export const FeedbackProvider = ({children}) => {
        const [feedback, setFeedback] = useState([
            {
                id: 1,
                text: 'This is FeedbackItem id 1',
                rating: 10
            },
            {
                id: 2,
                text: 'This is FeedbackItem id 2',
                rating: 9
            },
            {
                id: 3,
                text: 'This is FeedbackItem id 3',
                rating: 7
            },
        ])
        const [feedbackEdit, setFeedbackEdit] = useState({
            item: {},
            edit: false,
        })

        // Create feedback item (with new id, via uuid)
        const addFeedback = (newFeedback) => {
            newFeedback.id = uuidv4()
            setFeedback([newFeedback, ...feedback])
        }

        // Delete feedback item (incl confirmation pop-up window)
        const deleteFeedback = (id) => {
            if (window.confirm('Are you sure that you want to delete? (Ok / Cancel)')){
        setFeedback(feedback.filter((item) => item.id !== id ))
            }
        }

        // Update item object
        const editFeedback = (item) => {
            setFeedbackEdit({
                item,
                edit: true,
            })
        }

    return (
        <FeedbackContext.Provider 
            value={{
                feedback,
                deleteFeedback,
                addFeedback,
                editFeedback,
            }}
            >
            {children}
        </FeedbackContext.Provider>
    )
}

export default FeedbackContext