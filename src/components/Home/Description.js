import { connect } from 'react-redux';
import { Content } from './StyledComp';
import { removeQuestion } from '../../reduxComponents/actions/Questions';
import showQuiz from '../../reduxComponents/selectors/reducerFilter';

function Description(props) {
    console.log(props.questions)
    return (
        <div>
                {props.questions.map((question, index) => {
                    const { author, title, answers, category, difficulty } = question;
                    return (
                        <Content key={index}>                
                            {author} <br/>
                            {title} <br/>
                            {answers.length} <br/>
                            <small>Category: {category}</small> <br />
                            <small>{difficulty}</small>
                            <button value={question.id}>Remove</button>
                        </Content>
                    )
                })}
        </div>
    )
}

//Accessing Store
const mapStateToProps = (state) => {
    return {
        questions: showQuiz(state.questions, state.filters)
    }
};

export default connect(mapStateToProps)(Description);