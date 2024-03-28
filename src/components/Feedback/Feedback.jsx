import s from './Feedback.module.css'
const Feedback = ({ feedback, totalFeedback }) => {
    if (totalFeedback === 0) {
        return 
    }
  return (
    <div className={s.feedback}>
              <h2>Good: {feedback.good}</h2>
              <h2>Neutral: {feedback.neutral}</h2>
              <h2>Bad: {feedback.bad}</h2>
              <h2>Total: {totalFeedback}</h2>
              <h2>Positive: {Math.round((feedback.good / totalFeedback) * 100)}%</h2>
          </div>
  )
}

export default Feedback