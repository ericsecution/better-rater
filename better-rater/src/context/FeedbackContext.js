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

        // sets item object to be Updated
        const editFeedback = (item) => {
            setFeedbackEdit({
                item,
                edit: true,
            })
        }

        // actually Update the feedback item
        const updateFeedback = (id, updItem) => {
            setFeedback(feedback.map((item) => item.id === id ? {...item, ...updItem } : item))
        }

    return (
        // feedback & feedbackEdit = the state holding the item object
        // delete, add, edit, & updateFeedback = the functions
        //   -> incl the boolean
        <FeedbackContext.Provider 
            value={{
                feedback,
                feedbackEdit,
                deleteFeedback,
                addFeedback,
                editFeedback,
                updateFeedback,
            }}
            >
            {children}
        </FeedbackContext.Provider>
    )
}

export default FeedbackContext