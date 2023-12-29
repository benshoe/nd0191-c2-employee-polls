import {_saveQuestionAnswer} from "../_DATA";

export const RECEIVE_QUESTIONS = "RECEIVE_QUESTIONS";
export const ANSWER_QUESTION = "ANSWER_QUESTION";

export function receiveQuestions(questions) {
    return {
        type: RECEIVE_QUESTIONS,
        questions: questions,
    }
}

function answerQuestion({authedUser, qid, answer}) {
    console.log('En we slaan de vraag op', authedUser, qid, answer);
    return {
        type: ANSWER_QUESTION,
        authedUser,
        id: qid,
        answer,
    }
}

export function handleAnswerQuestion(info) {
    return (dispatch) => {
        dispatch(answerQuestion(info));

        return _saveQuestionAnswer(info)
            .then(question => console.log(`Question is saved`, question))
            .catch((err) => {
                console.warn("Error in handleAnswerQuestion", err);
                alert("An error occurred answering the question. Try again.");
            });
    }
}
