import { useState } from 'react'
import Header from './components/Header'
import FeedbackList from './components/FeedbackList'
import FeedbackData from './data/FeedbackData'
// passing in from my "Global State" (above)
// to my Components-level State (below)
function App() {
    const [feedback, setFeedback] = useState(FeedbackData)


    return (
        <>
        <Header />
        <div className='container'>
        <FeedbackList feedback={feedback} />
        </div>

        </>
    )
}
export default App