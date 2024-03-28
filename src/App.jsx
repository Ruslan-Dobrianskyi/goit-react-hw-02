import { useEffect, useState } from "react";
import Option from "./components/Option/Option";
import Feedback from "./components/Feedback/Feedback";
import Notification from "./Notification/Notification";
import s from "./App.module.css"


const App = () => {
    const options = ["Good", "Neutral", "Bad",];
    const [feedback, setFeedback] = useState(() => {
        const savedData = JSON.parse(window.localStorage.getItem("feedbackData"));
        if (savedData) {
            return savedData
        }
        return { good: 0, neutral: 0, bad: 0 }
    });

    useEffect(() => {
        window.localStorage.setItem("feedbackData",JSON.stringify(feedback))   
    },[feedback])


    const totalFeedback = feedback.good + feedback.neutral + feedback.bad

    const resetBtn = () => {
        setFeedback({ good: 0, neutral: 0, bad: 0 });
    }
   
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
        <h1 className={s.title}>Sip Happens Café</h1>
        <p className={s.text}>Please leave your feedback about our service by selecting one of the options below.</p>

        <div className={s.btn_container}>
           <Option options={options} updateFeedback={updateFeedback} />
           {totalFeedback > 0 && <button className={s.btn_reset} onClick={resetBtn}>Reset</button>}
              
        </div>
          {totalFeedback !== 0 ? (<Feedback feedback={feedback} totalFeedback={totalFeedback} />)
          : (<Notification message="No feedback yet" />)} 
    </div>
  )
}

export default App