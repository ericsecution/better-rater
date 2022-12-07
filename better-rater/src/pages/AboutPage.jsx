import {Link} from 'react-router-dom'
import Card from "../components/shared/Card"

function AboutPage() {
  return (
    <Card>
        <div className='about'>
            <h2>About This React 'Ratings App'</h2>
            <p>I created this feedback-type App using React in order to familiarize myself with the most up-to-date features available in a React front end build.</p>
            <p>Version 1.0.0</p>

            <p>
               <Link to='/'>Back to Home Page</Link> 
            </p>
        </div>
    </Card>
  )
}
export default AboutPage
