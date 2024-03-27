import { useState } from "react";
import Option from "./components/Option/Option";
import Feedback from "./components/Feedback/Feedback";
import Notification from "./Notification/Notification";



const App = () => {
    const options = ["Good", "Neutral", "Bad"];
    const [feedback, setFeedback] = useState({ good: 0, neutral: 0, bad: 0 });
    const totalFeedback = feedback.good + feedback.neutral + feedback.bad

   
    const updateFeedback = feedbackType => {

        if (feedbackType === "Good") {
            setFeedback(prev => ({ ...prev, good: prev.good + 1 }));
        }
        if (feedbackType === "Neutral") {
            setFeedback(prev => ({ ...prev, neutral: prev.neutral + 1 }));
        }
        if (feedbackType === "Bad") {
            setFeedback(prev => ({ ...prev, bad: prev.bad + 1 }));
        }
    }

  return (
    <div>
        <h1>Sip Happens Café</h1>
        <p>Please leave your feedback about our service by selecting one of the options below.</p>

        <Option options={options} updateFeedback={updateFeedback} />
          
          {totalFeedback !== 0
              ? (<Feedback feedback={feedback} totalFeedback={totalFeedback} />)
              : (<Notification message="No feedback yet"/>)}

    </div>
  )
}

export default App