import {_saveQuestion, _saveQuestionAnswer} from "../_DATA";

export const RECEIVE_QUESTIONS = "RECEIVE_QUESTIONS";
export const ANSWER_QUESTION = "ANSWER_QUESTION";
export const ADD_QUESTION = "ADD_QUESTION";

export function receiveQuestions(questions) {
    return {
        type: RECEIVE_QUESTIONS,
        questions: questions,
    }
}

function answerQuestion({authedUser, qid, answer}) {
    return {
        type: ANSWER_QUESTION,
        authedUser,
        id: qid,
        answer,
    }
}

function addQuestion(question) {
    return {
        type: ADD_QUESTION,
        question,
    }
}

export function handleAddQuestion(optionOneText, optionTwoText) {
    return (dispatch, getState) => {
        const {authedUser} = getState();

        return _saveQuestion({
            optionOneText,
            optionTwoText,
            author: authedUser,
        })
            .then((question) => dispatch(addQuestion(question)))
            .then((question) => console.log(`Question added`, question))
            .catch((err) => {
                console.error('Error in handleAddQustion: ', err);
                alert('An error occurred adding the poll. Try again.');
            })
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
