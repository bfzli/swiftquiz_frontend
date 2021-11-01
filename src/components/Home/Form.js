import React from 'react';

//THIS FORM IS ONLY FOR TESTING PURPOSES
//Import and use

const boilerplate = {
    author: '',
    question: '',
    answers: []
};

const Form = (props) => {
    const [form, setForm] = React.useState(boilerplate);
    const [answer1, setAnswer1] = React.useState('');
    const [answer2, setAnswer2] = React.useState('');
    const [answer3, setAnswer3] = React.useState('');
    const [answer4, setAnswer4] = React.useState('');

    const resetForm = () => {
        setForm(boilerplate);
        setAnswer1('');
        setAnswer2('');
        setAnswer3('');
        setAnswer4('');
    }; 
    

    const handleSubmit = e => {
        const answers = [answer1,answer2,answer3,answer4];
        setForm((prev) =>  ({...prev, answers}));
        props.handleOnSubmit({
            author: form.author,
            question: form.question,
            answers: answers
        }); 
        resetForm();
        e.preventDefault();
    };

    const handleSearch = e => {
        const term = e.target.value.trim();
        props.onSearch(term);
    };

    return (
        <div>
            <input onChange={handleSearch} />
            <form onSubmit={handleSubmit} style={{ margin: '1rem 0' }}>
                <input placeholder="Enter your question" onChange={(e) => setForm({ ...form ,question: e.target.value }) }/>
                <input placeholder="option 1" onChange={(e) => setAnswer1(e.target.value)}  value={answer1}/>
                <input placeholder="option 2" onChange={(e) => setAnswer2(e.target.value)}  value={answer2}/>
                <input placeholder="option 3" onChange={(e) => setAnswer3(e.target.value)}  value={answer3}/>
                <input placeholder="option 4" onChange={(e) => setAnswer4(e.target.value)}  value={answer4}/> 
                <button type="submit">Ready</button>
            </form>
        </div>
    )
}

export default Form;