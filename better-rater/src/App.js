import { useState } from 'react'
import Header from './components/Header'
import FeedbackList from './components/FeedbackList'
import FeedbackData from './data/FeedbackData'
// passing in from my "Global State" (above)
// to my Components-level State (below)
function App() {
    const [feedback, setFeedback] = useState(FeedbackData)

    const deleteFeedback = (id) => {
        if (window.confirm('Are you sure that you want to delete? (Ok / Cancel)')){
       setFeedback(feedback.filter((item) => item.id !== id ))
        }
    }


    return (
        <>
        <Header />
        <div className='container'>
        <FeedbackList feedback={feedback} 
        handleDelete={deleteFeedback} />
        </div>

        </>
    )
}
export default App