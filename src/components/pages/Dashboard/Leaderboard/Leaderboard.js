import * as styles from './Leaderboard.module.scss'
import { allUsersLeaderboard } from '../../../../reduxComponents/actions/User'
import { sortLeaderboardUsers } from '../../../../reduxComponents/selectors/selectorsUserQuizzes'
import { useDispatch } from 'react-redux'
import { useEffect } from 'react';
import { connect } from 'react-redux';

function Leaderboard({ leaderboardRank }) {
    const dispatch = useDispatch();

    const ranking = leaderboardRank.slice(0, 5);

    useEffect(() => {
        dispatch(allUsersLeaderboard());
    }, [])

    const profile = "https://scontent.fskp1-2.fna.fbcdn.net/v/t39.30808-6/241109043_144164544562523_407886122530123291_n.jpg?_nc_cat=110&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=sOudlO5tSHMAX9T4hox&_nc_ht=scontent.fskp1-2.fna&oh=006778ab37fd14a6083784348607dd17&oe=61AD6B3C"

    return (
        <div className={styles.container}>
            <div className={styles.page_info} data-aos="fade-down">
                <h2 className={styles.welcome_text}>Leaderboard</h2>
                <div className={styles.search}>
                    <input
                        className={styles.search_input}
                        type="text"
                        placeholder="Search leaderboard..."
                    />
                    <div className={styles.search_wrapper}>
                        <svg
                            className={styles.search_icon}
                            width="32"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <path d="M11 2C15.968 2 20 6.032 20 11C20 15.968 15.968 20 11 20C6.032 20 2 15.968 2 11C2 6.032 6.032 2 11 2ZM11 18C14.867 18 18 14.867 18 11C18 7.132 14.867 4 11 4C7.132 4 4 7.132 4 11C4 14.867 7.132 18 11 18ZM19.485 18.071L22.314 20.899L20.899 22.314L18.071 19.485L19.485 18.071Z" />
                        </svg>
                    </div>
                </div>
            </div>

            <main style={{ marginTop: '2.5em' }}>
                <div className={styles.top_right} data-aos="fade-left">
                    <div className={styles.hallOfFame}>
                        <h2 className={styles.hallOfFameTitle}>Hall of Fame</h2>
                        <div className={styles.leftleftPinned}>
                            <div className={styles.profilePinnedDown}>
                                <img src={profile} className={styles.avatarPinned} />
                                <h3 className={styles.hallusername}>Benjamin Fazli</h3>
                                <p className={styles.hallcoins}>102 coins</p>
                            </div>
                            <div className={styles.leftleftScene}>
                                4
                            </div>
                        </div>
                        <div className={styles.leftPinned}>
                            <div className={styles.profilePinnedCenter}>
                                <img src={profile} className={styles.avatarPinned} />
                                <h3 className={styles.hallusername}>Benjamin Fazli</h3>
                                <p className={styles.hallcoins}>102 coins</p>
                            </div>
                            <div className={styles.leftScene}>
                                2
                            </div>
                        </div>
                        <div className={styles.centerPinned}>
                            <div className={styles.profilePinnedTop}>
                                <img src={profile} className={styles.avatarPinned} />
                                <h3 className={styles.hallusername}></h3>
                                <p className={styles.hallcoins}>102 coins</p>
                            </div>
                            <div className={styles.centerScene}>
                                1
                            </div>
                        </div>
                        <div className={styles.rightPinned}>
                            <div className={styles.profilePinnedCenter}>
                                <img src={profile} className={styles.avatarPinned} />
                                <h3 className={styles.hallusername}>Benjamin Fazli</h3>
                                <p className={styles.hallcoins}>102 coins</p>
                            </div>
                            <div className={styles.rightScene}>
                                3
                            </div>
                        </div>
                        <div className={styles.rightrightPinned}>
                            <div className={styles.profilePinnedDown}>
                                <img src={profile} className={styles.avatarPinned} />
                                <h3 className={styles.hallusername}>Benjamin Fazli</h3>
                                <p className={styles.hallcoins}>102 coins</p>
                            </div>
                            <div className={styles.rightrightScene}>
                                5
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.top_right}>
                    <div className={styles.ranking}>
                        {
                            ranking.map(item =>
                                <div className={styles.rank}>
                                    <div className={styles.rank_count}>
                                        <p className={styles.rank_count_text}></p>
                                    </div>

                                    <div className={styles.rank_avatar}>
                                        <img src={profile} className={styles.rank_avatar_image} />
                                    </div>

                                    <div className={styles.rank_name}>
                                        <h3 className={styles.hallusername}>{item.name}</h3>
                                    </div>

                                    <div className={styles.rank_count}>
                                        <p>{item.coins}</p>
                                    </div>
                                </div>
                            )
                        }
                    </div>
                </div>
            </main >
        </div >
    )
}

const mapStateToProps = (state) => ({
    leaderboardRank: sortLeaderboardUsers(state)
});

export default connect(mapStateToProps)(Leaderboard);