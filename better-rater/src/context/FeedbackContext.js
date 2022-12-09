import { createContext, useState, useEffect } from 'react'

const FeedbackContext = createContext()

export const FeedbackProvider = ({children}) => {
        const [isLoading, setIsLoading] = useState(true)
        const [feedback, setFeedback] = useState([])
        const [feedbackEdit, setFeedbackEdit] = useState({
            item: {},
            edit: false,
        })

        useEffect(() => {
            fetchFeedback()
          }, [])
        
          // Fetch feedback
          const fetchFeedback = async () => {
            const response = await fetch(`/feedback?_sort=id&_order=desc`)
            const data = await response.json()
        
            setFeedback(data)
            setIsLoading(false)
          }

        // Create feedback item (with new id, via uuid)
        const addFeedback = async (newFeedback) => {
            const response = await fetch('/feedback', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(newFeedback),
            })

            const data = await response.json()

            setFeedback([data, ...feedback])
        }

        // Delete feedback item (incl confirmation pop-up window)
        const deleteFeedback = async (id) => {
            if (window.confirm('Are you sure that you want to delete? (Ok / Cancel)')){
                await fetch(`/feedback/${id}`, { method: 'DELETE' })
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
        const updateFeedback = async (id, updItem) => {
            const response = await fetch(`/feedback/${id}`, { 
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(updItem) 
            })

            const data = await response.json()

            setFeedback(feedback.map((item) => item.id === id ? {...item, ...data } : item))
        }

    return (
        // feedback & feedbackEdit = the state holding the item object
        // delete, add, edit, & updateFeedback = the functions
        //   -> incl the boolean
        <FeedbackContext.Provider 
            value={{
                feedback,
                feedbackEdit,
                isLoading,
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