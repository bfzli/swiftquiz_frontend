import React from 'react'
import './MyQuizzes.scss'
import showIcon from '../../../../assets/images/quizes/showIcon.svg'
import editIcon from '../../../../assets/images/quizes/editIcon.svg'
import deleteIcon from '../../../../assets/images/quizes/deleteIcon.svg'
import firstQuiz from '../../../../assets/images/quizes/firstQuiz.webp'
import secondQuiz from '../../../../assets/images/quizes/secondQuiz.webp'
import thirdQuiz from '../../../../assets/images/quizes/thirdQuiz.webp'
import fourthQuiz from '../../../../assets/images/quizes/fourthQuiz.webp'
import fifthQuiz from '../../../../assets/images/quizes/fifthQuiz.webp'
import addIcon from '../../../../assets/images/quizes/addIcon.png'

export default function MyQuizzes() {
    return (
            <div className="mainQuizCont">
                <div className="topQuizCont">
                <h2>All Your Quizzes</h2>
                <input type="text" placeholder="Search your quizzes" />
                </div>
                <div className="bottomQuizCont">
                    <div className="myQuizBody">
                        <img src={firstQuiz} alt="None" />
                        <div className="myQuizContent">
                            <h2>Learn Kubernetes Quiz</h2>
                            <p>The Kubernetes server runs within a Docker container on your local system, and is only for local testing. Enabling Kubernetes allows you to deploy your workloads in parallel, on Kubernetes, Swarm, and as standalone containers.</p>
                        </div>
                        <div className="myQuizButtons">
                            <input type="image"  src={showIcon}/>
                            <input type="image"  src={editIcon}/>
                            <input type="image"  src={deleteIcon}/>
                        </div>
                    </div>
                    <div className="myQuizBody">
                        <img src={secondQuiz} alt="None" />
                        <div className="myQuizContent">
                            <h2>learn kotlin quiz</h2>
                            <p>Kotlin is a cross-platform, statically typed, general-purpose programming language with type inference. Kotlin is designed to interoperate fully with Java, and the JVM version.</p>
                        </div>
                        <div className="myQuizButtons">
                            <input type="image"  src={showIcon}/>
                            <input type="image"  src={editIcon}/>
                            <input type="image"  src={deleteIcon}/>
                        </div>
                    </div>
                    <div className="myQuizBody">
                        <img src={thirdQuiz} alt="None" />
                        <div className="myQuizContent">
                            <h2>learn graphql quiz</h2>
                            <p>GraphQL is an open-source data query and manipulation language for APIs, and a runtime for fulfilling queries with existing data. GraphQL was developed internally by Facebook in 2012 before being publicly released in 2015.</p>
                        </div>
                        <div className="myQuizButtons">
                            <input type="image"  src={showIcon}/>
                            <input type="image"  src={editIcon}/>
                            <input type="image"  src={deleteIcon}/>
                        </div>
                    </div>
                    <div className="myQuizBody">
                        <img src={fourthQuiz} alt="None" />
                        <div className="myQuizContent">
                            <h2>learn gatsby quiz</h2>
                            <p>Generate it statically. Generate it dynamically. Or, somewhere in between. However you build your website – build it fast, secure, and scalable with Gatsby 4.</p>
                        </div>
                        <div className="myQuizButtons">
                            <input type="image"  src={showIcon}/>
                            <input type="image"  src={editIcon}/>
                            <input type="image"  src={deleteIcon}/>
                        </div>
                    </div>
                    <div className="myQuizBody">
                        <img src={fifthQuiz} alt="None" />
                        <div className="myQuizContent">
                            <h2>learn svlete quiz</h2>
                            <p>Svelte is a free and open-source front end compiler created by Rich Harris and maintained by the Svelte core team members. Svelte applications do not include a framework script.</p>
                        </div>
                        <div className="myQuizButtons">
                            <input type="image"  src={showIcon}/>
                            <input type="image"  src={editIcon}/>
                            <input type="image"  src={deleteIcon}/>
                        </div>
                    </div>
                </div>
                <input type="image" id="addQuizButton" src={addIcon} />
            </div>
    )
}
