import showQuiz from '../../reduxComponents/selectors/reducerFilter';
import { useSelector, useDispatch } from 'react-redux';
import { removeQuestion, addQuestion } from '../../reduxComponents/actions/Questions';
import { setTextFilter } from '../../reduxComponents/actions/Filters';
import React from 'react';

function Description() {
    const state = useSelector(state => showQuiz(state.questions, state.filters));
    const dispatch = useDispatch();

    const handleRemove = e => {
        const id = Number(e.target.value);
        dispatch(removeQuestion({ id }));
    };

    //Create a Form component and send these callback functions as props
    /* const handleOnSubmit = ({ question, answers }) => {    
        dispatch(addQuestion({ title: question, answers }));
    }

    const onSearch = term => {
        dispatch(setTextFilter(term))
    }; */

    return (
        <div>
                {state.map((question, index) => {
                    const { author, title, answers, category, difficulty } = question;
                    return (
                        <ul key={index}>                
                            {author} <br/>
                            {title} <br/>
                            {answers.length} <br/>
                            <small>Category: {category}</small> <br />
                            <small>{difficulty}</small>
                            <button value={question.id} onClick={handleRemove} >Remove</button>
                        </ul>
                    )
                })}
        </div>
    )
};

export default Description;