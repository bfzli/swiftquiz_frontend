import * as styles from './Quizzes.module.scss'
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { removeQuiz } from '../../../../reduxComponents/actions/Questions';
import { Link } from 'react-router-dom';

export default function QuizCard({ item }) {
    const dispatch = useDispatch();
    const [dropdown, setDropdown] = useState(false);

    return (
        <div>
            <div key={item._id} className={styles.quiz}>
                <img className={styles.quiz_image} alt={item.title} src={`https://swiftapi.vercel.app/${item.thumbnail}`} />
                <svg onClick={() => setDropdown(!dropdown)} className={styles.dots} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5 10C3.9 10 3 10.9 3 12C3 13.1 3.9 14 5 14C6.1 14 7 13.1 7 12C7 10.9 6.1 10 5 10ZM19 10C17.9 10 17 10.9 17 12C17 13.1 17.9 14 19 14C20.1 14 21 13.1 21 12C21 10.9 20.1 10 19 10ZM12 10C10.9 10 10 10.9 10 12C10 13.1 10.9 14 12 14C13.1 14 14 13.1 14 12C14 10.9 13.1 10 12 10Z" fill="var(--icon-border)" />
                </svg>
                {
                    dropdown === true ?
                        <div className={styles.dots_dropdown}>
                            <div className={styles.quiz_play}>
                                <svg className={styles.actions_btn} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M6.8 2.25H6.7679H6.76789C5.95505 2.24999 5.29944 2.24999 4.76853 2.29336C4.2219 2.33803 3.74175 2.43239 3.29754 2.65873C2.59193 3.01825 2.01825 3.59193 1.65873 4.29754C1.43239 4.74175 1.33803 5.2219 1.29336 5.76853C1.24999 6.29944 1.24999 6.95504 1.25 7.76787V7.7679V7.8V8C1.25 8.41421 1.58579 8.75 2 8.75C2.41421 8.75 2.75 8.41421 2.75 8V7.8C2.75 6.94755 2.75058 6.35331 2.78838 5.89068C2.82547 5.4368 2.8946 5.17604 2.99524 4.97852C3.21095 4.55516 3.55516 4.21095 3.97852 3.99524C4.17604 3.8946 4.43681 3.82547 4.89068 3.78838C5.35331 3.75058 5.94755 3.75 6.8 3.75H7C7.41421 3.75 7.75 3.41421 7.75 3C7.75 2.58579 7.41421 2.25 7 2.25H6.8ZM17.2 3.75C18.0525 3.75 18.6467 3.75058 19.1093 3.78838C19.5632 3.82547 19.824 3.8946 20.0215 3.99524C20.4448 4.21095 20.789 4.55516 21.0048 4.97852C21.1054 5.17604 21.1745 5.4368 21.2116 5.89068C21.2494 6.35331 21.25 6.94755 21.25 7.8V8C21.25 8.41421 21.5858 8.75 22 8.75C22.4142 8.75 22.75 8.41421 22.75 8V7.8V7.76788C22.75 6.95505 22.75 6.29944 22.7066 5.76853C22.662 5.2219 22.5676 4.74175 22.3413 4.29754C21.9817 3.59193 21.4081 3.01825 20.7025 2.65873C20.2582 2.43239 19.7781 2.33803 19.2315 2.29336C18.7006 2.24999 18.0449 2.24999 17.2321 2.25H17.2321H17.2H17C16.5858 2.25 16.25 2.58579 16.25 3C16.25 3.41421 16.5858 3.75 17 3.75H17.2ZM2.75 16C2.75 15.5858 2.41421 15.25 2 15.25C1.58579 15.25 1.25 15.5858 1.25 16V16.2V16.2321V16.2321C1.24999 17.045 1.24999 17.7006 1.29336 18.2315C1.33803 18.7781 1.43239 19.2582 1.65873 19.7025C2.01825 20.4081 2.59193 20.9817 3.29754 21.3413C3.74175 21.5676 4.2219 21.662 4.76853 21.7066C5.29944 21.75 5.95505 21.75 6.76788 21.75H6.8H7C7.41421 21.75 7.75 21.4142 7.75 21C7.75 20.5858 7.41421 20.25 7 20.25H6.8C5.94755 20.25 5.35331 20.2494 4.89068 20.2116C4.43681 20.1745 4.17604 20.1054 3.97852 20.0048C3.55516 19.789 3.21095 19.4448 2.99524 19.0215C2.8946 18.824 2.82547 18.5632 2.78838 18.1093C2.75058 17.6467 2.75 17.0525 2.75 16.2V16ZM22.75 16C22.75 15.5858 22.4142 15.25 22 15.25C21.5858 15.25 21.25 15.5858 21.25 16V16.2C21.25 17.0525 21.2494 17.6467 21.2116 18.1093C21.1745 18.5632 21.1054 18.824 21.0048 19.0215C20.789 19.4448 20.4448 19.789 20.0215 20.0048C19.824 20.1054 19.5632 20.1745 19.1093 20.2116C18.6467 20.2494 18.0525 20.25 17.2 20.25H17C16.5858 20.25 16.25 20.5858 16.25 21C16.25 21.4142 16.5858 21.75 17 21.75H17.2H17.2321C18.045 21.75 18.7006 21.75 19.2315 21.7066C19.7781 21.662 20.2582 21.5676 20.7025 21.3413C21.4081 20.9817 21.9817 20.4081 22.3413 19.7025C22.5676 19.2582 22.662 18.7781 22.7066 18.2315C22.75 17.7006 22.75 17.045 22.75 16.2321V16.2V16ZM9.16957 6.25L9.2 6.25L14.8 6.25L14.8304 6.25C15.3646 6.24999 15.8104 6.24998 16.1747 6.27974C16.5546 6.31078 16.9112 6.37789 17.2485 6.54973C17.7659 6.81338 18.1866 7.23408 18.4503 7.75153C18.6221 8.08879 18.6892 8.44545 18.7203 8.82533C18.75 9.18956 18.75 9.6354 18.75 10.1695V10.2V11V13.8V13.8305C18.75 14.3646 18.75 14.8104 18.7203 15.1747C18.6892 15.5546 18.6221 15.9112 18.4503 16.2485C18.1866 16.7659 17.7659 17.1866 17.2485 17.4503C16.9112 17.6221 16.5546 17.6892 16.1747 17.7203C15.8104 17.75 15.3646 17.75 14.8304 17.75H14.8304H14.8H9.2H9.16959H9.16955C8.6354 17.75 8.18956 17.75 7.82533 17.7203C7.44545 17.6892 7.08879 17.6221 6.75153 17.4503C6.23408 17.1866 5.81338 16.7659 5.54973 16.2485C5.37789 15.9112 5.31078 15.5546 5.27974 15.1747C5.24998 14.8104 5.24999 14.3646 5.25 13.8304L5.25 13.8L5.25 11V10.2L5.25 10.1696C5.24999 9.63541 5.24998 9.18956 5.27974 8.82533C5.31078 8.44545 5.37789 8.08879 5.54973 7.75153C5.81338 7.23408 6.23408 6.81338 6.75153 6.54973C7.08879 6.37789 7.44545 6.31078 7.82533 6.27974C8.18956 6.24998 8.63541 6.24999 9.16957 6.25ZM17.25 10.2V10.25L6.75 10.25V10.2C6.75 9.62757 6.75058 9.24336 6.77476 8.94748C6.79822 8.66035 6.8401 8.52307 6.88624 8.43251C7.00608 8.19731 7.19731 8.00608 7.43251 7.88624C7.52307 7.8401 7.66035 7.79822 7.94748 7.77476C8.24336 7.75058 8.62757 7.75 9.2 7.75L14.8 7.75C15.3724 7.75 15.7566 7.75058 16.0525 7.77476C16.3396 7.79822 16.4769 7.8401 16.5675 7.88624C16.8027 8.00608 16.9939 8.19731 17.1138 8.43251C17.1599 8.52307 17.2018 8.66035 17.2252 8.94748C17.2494 9.24336 17.25 9.62757 17.25 10.2ZM17.25 11.75L6.75 11.75V13.8C6.75 14.3724 6.75058 14.7566 6.77476 15.0525C6.79822 15.3396 6.8401 15.4769 6.88624 15.5675C7.00608 15.8027 7.19731 15.9939 7.43251 16.1138C7.52307 16.1599 7.66035 16.2018 7.94748 16.2252C8.24336 16.2494 8.62757 16.25 9.2 16.25H14.8C15.3724 16.25 15.7566 16.2494 16.0525 16.2252C16.3396 16.2018 16.4769 16.1599 16.5675 16.1138C16.8027 15.9939 16.9939 15.8027 17.1138 15.5675C17.1599 15.4769 17.2018 15.3396 17.2252 15.0525C17.2494 14.7566 17.25 14.3724 17.25 13.8V11.75Z" />
                                </svg>

                                <p className={styles.actions_txt}>Play Quiz</p>
                            </div>

                            <div className={styles.quiz_play}>
                                <svg className={styles.actions_btn} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M14.325 4.25001C14.6725 2.53832 16.1858 1.25 18 1.25C20.0711 1.25 21.75 2.92894 21.75 5C21.75 7.07107 20.0711 8.75 18 8.75C16.1858 8.75 14.6725 7.46168 14.325 5.75001L9 5.75001C7.43146 5.75001 6.12245 6.86118 5.8172 8.3393C7.49529 8.71226 8.75 10.2096 8.75 12C8.75 13.7904 7.49529 15.2877 5.8172 15.6607C6.12244 17.1388 7.43145 18.25 8.99999 18.25L14.325 18.25C14.6725 16.5383 16.1858 15.25 18 15.25C20.0711 15.25 21.75 16.9289 21.75 19C21.75 21.0711 20.0711 22.75 18 22.75C16.1858 22.75 14.6725 21.4617 14.325 19.75L8.99999 19.75C6.60911 19.75 4.63081 17.9836 4.29896 15.6846C2.56295 15.3563 1.25 13.8315 1.25 12C1.25 10.1685 2.56295 8.6437 4.29896 8.31541C4.63081 6.01644 6.60912 4.25001 9 4.25001L14.325 4.25001ZM18 2.75C16.7574 2.75 15.75 3.75736 15.75 5C15.75 6.24264 16.7574 7.25 18 7.25C19.2426 7.25 20.25 6.24264 20.25 5C20.25 3.75736 19.2426 2.75 18 2.75ZM5 9.75C3.75736 9.75 2.75 10.7574 2.75 12C2.75 13.2426 3.75736 14.25 5 14.25C6.24264 14.25 7.25 13.2426 7.25 12C7.25 10.7574 6.24264 9.75 5 9.75ZM15.75 19C15.75 17.7574 16.7574 16.75 18 16.75C19.2426 16.75 20.25 17.7574 20.25 19C20.25 20.2426 19.2426 21.25 18 21.25C16.7574 21.25 15.75 20.2426 15.75 19Z" />
                                </svg>

                                <p className={styles.actions_txt}>Share Quiz</p>
                            </div>

                            <div className={styles.quiz_play}>
                                <svg className={styles.actions_btn} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M19.8408 3.90339C19.364 3.47003 18.636 3.47003 18.1592 3.90339C18.1405 3.9204 18.1161 3.9445 18.0303 4.03027L17.7233 4.33728C17.6991 5.41346 18.5865 6.30088 19.6627 6.27662L19.9697 5.96961C20.0554 5.88384 20.0795 5.85943 20.0965 5.84073C20.5299 5.36397 20.5299 4.63592 20.0965 4.15916C20.0795 4.14045 20.0554 4.11604 19.9697 4.03027C19.8839 3.94451 19.8595 3.9204 19.8408 3.90339ZM18.3917 7.54755C17.5064 7.2019 16.798 6.49357 16.4524 5.60821L13.7838 8.27679C13.3006 8.76001 13.1189 8.94489 12.9729 9.14793C12.8361 9.33827 12.7203 9.54284 12.6275 9.7581C12.5285 9.98771 12.4634 10.2386 12.2977 10.9016L12.0308 11.9692L13.0983 11.7023C13.7613 11.5365 14.0122 11.4715 14.2418 11.3725C14.4571 11.2797 14.6617 11.1638 14.852 11.027C15.055 10.881 15.2399 10.6994 15.7232 10.2161L18.3917 7.54755ZM17.1503 2.79342C18.1991 1.84002 19.8009 1.84002 20.8497 2.79342C20.8985 2.83776 20.9503 2.88957 21.0175 2.95682L21.0177 2.95698L21.0177 2.95701L21.0303 2.96961L21.0429 2.98218L21.0429 2.98221C21.1103 3.04954 21.1621 3.1014 21.2065 3.15021C22.1599 4.19908 22.1599 5.8008 21.2065 6.84967C21.1621 6.89848 21.1103 6.95033 21.0429 7.01765L21.0429 7.01769L21.0303 7.03027L16.7838 11.2768L16.7397 11.3209L16.7397 11.3209C16.3152 11.7455 16.0415 12.0193 15.7276 12.245C15.4494 12.4449 15.1504 12.6142 14.8358 12.7499C14.4807 12.903 14.1051 12.9968 13.5227 13.1424L13.5226 13.1424L13.5226 13.1424L13.4621 13.1575L11.1819 13.7275C10.9263 13.7914 10.656 13.7166 10.4697 13.5303C10.2834 13.344 10.2085 13.0736 10.2724 12.818L10.8425 10.5378L10.8576 10.4773C11.0031 9.89484 11.097 9.51922 11.2501 9.16417C11.3857 8.84957 11.555 8.55057 11.755 8.27239C11.9807 7.95844 12.2545 7.68471 12.679 7.26024L12.679 7.26023L12.6791 7.26022L12.7232 7.21613L16.9697 2.96961L16.9822 2.95703L16.9823 2.95698L16.9823 2.95696C17.0496 2.88964 17.1015 2.83779 17.1503 2.79342ZM9.367 2.24994L9.4 2.24994H12C12.4142 2.24994 12.75 2.58573 12.75 2.99994C12.75 3.41416 12.4142 3.74994 12 3.74994H9.4C8.26752 3.74994 7.46327 3.75053 6.83388 3.80195C6.21326 3.85266 5.829 3.94903 5.52453 4.10417C4.91301 4.41576 4.41582 4.91295 4.10423 5.52447C3.94909 5.82895 3.85271 6.2132 3.80201 6.83382C3.75058 7.46321 3.75 8.26746 3.75 9.39994L3.75 14.5999C3.75 15.7324 3.75058 16.5367 3.80201 17.1661C3.85271 17.7867 3.94909 18.1709 4.10423 18.4754C4.41582 19.0869 4.91301 19.5841 5.52453 19.8957C5.829 20.0508 6.21326 20.1472 6.83388 20.1979C7.46327 20.2494 8.26752 20.2499 9.4 20.2499H14.6C15.7325 20.2499 16.5367 20.2494 17.1661 20.1979C17.7867 20.1472 18.171 20.0508 18.4755 19.8957C19.087 19.5841 19.5842 19.0869 19.8958 18.4754C20.0509 18.1709 20.1473 17.7867 20.198 17.1661C20.2494 16.5367 20.25 15.7324 20.25 14.5999V11.9999C20.25 11.5857 20.5858 11.2499 21 11.2499C21.4142 11.2499 21.75 11.5857 21.75 11.9999V14.5999V14.633C21.75 15.7251 21.75 16.5906 21.693 17.2882C21.6347 18.0016 21.5131 18.6052 21.2323 19.1564C20.7769 20.0502 20.0502 20.7768 19.1565 21.2322C18.6053 21.5131 18.0017 21.6347 17.2883 21.693C16.5907 21.75 15.7252 21.7499 14.633 21.7499H14.6H9.4H9.36698C8.27485 21.7499 7.40935 21.75 6.71174 21.693C5.99835 21.6347 5.39472 21.5131 4.84355 21.2322C3.94978 20.7768 3.22312 20.0502 2.76772 19.1564C2.48688 18.6052 2.36528 18.0016 2.30699 17.2882C2.24999 16.5906 2.25 15.7251 2.25 14.633V14.6329V14.5999L2.25 9.39994V9.36694V9.36688C2.25 8.27476 2.24999 7.40928 2.30699 6.71168C2.36528 5.99829 2.48688 5.39466 2.76772 4.84349C3.22312 3.94972 3.94978 3.22306 4.84355 2.76766C5.39472 2.48682 5.99835 2.36522 6.71174 2.30693C7.40936 2.24993 8.27486 2.24994 9.367 2.24994Z" />
                                </svg>

                                <Link to={`/dashboard/quizzes/edit-quiz/${item._id}`} className={styles.actions_txt}>Edit Quiz</Link>
                            </div>

                            <div onClick={() => dispatch(removeQuiz(item._id))} className={styles.quiz_play}>
                                <svg className={styles.actions_btn} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M9.72076 3.75C9.61315 3.75 9.51762 3.81886 9.48359 3.92094L9.04057 5.25L14.9594 5.25L14.5164 3.92094C14.4824 3.81886 14.3868 3.75 14.2792 3.75L9.72076 3.75ZM16.5406 5.25L15.9394 3.4466C15.7012 2.732 15.0325 2.25 14.2792 2.25L9.72076 2.25C8.96751 2.25 8.29876 2.732 8.06056 3.4466L7.45943 5.25H5H3C2.58579 5.25 2.25 5.58579 2.25 6C2.25 6.41421 2.58579 6.75 3 6.75H4.29834L5.06497 18.2494C5.19629 20.2193 6.83242 21.75 8.80666 21.75H15.1933C17.1676 21.75 18.8037 20.2193 18.935 18.2494L19.7017 6.75H21C21.4142 6.75 21.75 6.41421 21.75 6C21.75 5.58579 21.4142 5.25 21 5.25H19H16.5406ZM18.1983 6.75H16L8 6.75L5.80166 6.75L6.56164 18.1497C6.64044 19.3316 7.62212 20.25 8.80666 20.25H15.1933C16.3779 20.25 17.3596 19.3316 17.4384 18.1497L18.1983 6.75ZM10 9.25C10.4142 9.25 10.75 9.58579 10.75 10L10.75 17C10.75 17.4142 10.4142 17.75 10 17.75C9.58579 17.75 9.25 17.4142 9.25 17L9.25 10C9.25 9.58579 9.58579 9.25 10 9.25ZM14.75 10C14.75 9.58579 14.4142 9.25 14 9.25C13.5858 9.25 13.25 9.58579 13.25 10L13.25 14C13.25 14.4142 13.5858 14.75 14 14.75C14.4142 14.75 14.75 14.4142 14.75 14L14.75 10Z" />
                                </svg>

                                <p className={styles.actions_txt}>Delete Quiz</p>
                            </div>
                        </div>
                        : null
                }
                <h3 className={styles.quiz_title}>
                    {item.title}
                </h3>
                <p className={styles.quiz_description}>
                    {item.description}
                </p>
            </div>
        </div>
    )
}
