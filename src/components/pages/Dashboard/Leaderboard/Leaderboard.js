import * as styles from './Leaderboard.module.scss';
import { allUsersLeaderboard } from '../../../../reduxComponents/actions/User';
import { sortLeaderboardUsers } from '../../../../reduxComponents/selectors/selectorsUserQuizzes';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { connect } from 'react-redux';
import Loader from '../../../shared/Loaders/Pagloader';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import coin from "../../../shared/Dashbar/components/coin.svg";

function Leaderboard({ leaderboardRank }) {
  const dispatch = useDispatch();

  const { t } = useTranslation();

  var count = 5;

  useEffect(() => {
    dispatch(allUsersLeaderboard());
  }, []);

  return (
    <div className={styles.container}>
      {leaderboardRank === undefined ||
      leaderboardRank === null ||
      leaderboardRank.length === 0 ? (
        <Loader />
      ) : (
        <>
          <div className={styles.page_info} data-aos='fade-down'>
            <h2 className={styles.welcome_text}>Leaderboard</h2>
            <div className={styles.search}>
              <input
                className={styles.search_input}
                type='text'
                placeholder='Search leaderboard...'
              />
              <div className={styles.search_wrapper}>
                <svg
                  className={styles.search_icon}
                  width='32'
                  viewBox='0 0 24 24'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'>
                  <path d='M11 2C15.968 2 20 6.032 20 11C20 15.968 15.968 20 11 20C6.032 20 2 15.968 2 11C2 6.032 6.032 2 11 2ZM11 18C14.867 18 18 14.867 18 11C18 7.132 14.867 4 11 4C7.132 4 4 7.132 4 11C4 14.867 7.132 18 11 18ZM19.485 18.071L22.314 20.899L20.899 22.314L18.071 19.485L19.485 18.071Z' />
                </svg>
              </div>
            </div>
          </div>

          <main style={{ marginTop: '2.5em' }}>
            <div className={styles.top_right} data-aos='fade-left'>
              <div className={styles.hallOfFame}>
                <h2 className={styles.hallOfFameTitle}>Hall of Fame</h2>
                <div className={styles.leftleftPinned}>
                  <div className={styles.profilePinnedDown}>
                    <Link to={`profile/${leaderboardRank[3].username}`}>
                      <img
                        src={`https://swiftapi.vercel.app/${leaderboardRank[3].avatar}`}
                        className={styles.avatarPinned}
                      />
                    </Link>
                    <Link
                      to={`profile/${leaderboardRank[3].username}`}
                      className={styles.hallusername}>
                      {leaderboardRank[3].name}
                    </Link>
                    <p className={styles.hallcoins}>
                      {leaderboardRank[3].coins} <img src={coin} width="1em"/>
                    </p>
                  </div>
                  <div className={styles.leftleftScene}>
                      <p className={styles.specific}>4</p>
                  </div>
                </div>
                <div className={styles.leftPinned}>
                  <div className={styles.profilePinnedCenter}>
                    <Link to={`profile/${leaderboardRank[1].username}`}>
                      <img
                        src={`https://swiftapi.vercel.app/${leaderboardRank[1].avatar}`}
                        className={styles.avatarPinned}
                      />
                    </Link>
                    <Link
                      to={`profile/${leaderboardRank[1].username}`}
                      className={styles.hallusername}>
                      {leaderboardRank[1].name}
                    </Link>
                    <p className={styles.hallcoins}>
                      {leaderboardRank[1].coins} coins
                    </p>
                  </div>
                  <div className={styles.leftScene}>
                    <p className={styles.specific}>2</p>
                  </div>
                </div>
                <div className={styles.centerPinned}>
                  <div className={styles.profilePinnedTop}>
                    <Link to={`profile/${leaderboardRank[0].username}`}>
                      <img
                        src={`https://swiftapi.vercel.app/${leaderboardRank[0].avatar}`}
                        className={styles.avatarPinned}
                      />
                    </Link>
                    <Link
                      to={`profile/${leaderboardRank[0].username}`}
                      className={styles.hallusername}>
                      {leaderboardRank[0].name}
                    </Link>
                    <p className={styles.hallcoins}>
                      {leaderboardRank[0].coins} coins
                    </p>
                  </div>
                  <div className={styles.centerScene}>
                      <p className={styles.specific}>1</p>
                  </div>
                </div>
                <div className={styles.rightPinned}>
                  <div className={styles.profilePinnedCenter}>
                    <Link to={`profile/${leaderboardRank[2].username}`}>
                      <img
                        src={`https://swiftapi.vercel.app/${leaderboardRank[2].avatar}`}
                        className={styles.avatarPinned}
                      />
                    </Link>
                    <Link
                      to={`profile/${leaderboardRank[2].username}`}
                      className={styles.hallusername}>
                      {leaderboardRank[2].name}
                    </Link>
                    <p className={styles.hallcoins}>
                      {leaderboardRank[2].coins} coins
                    </p>
                  </div>
                  <div className={styles.rightScene}>3</div>
                </div>
                <div className={styles.rightrightPinned}>
                  <div className={styles.profilePinnedDown}>
                    <Link to={`profile/${leaderboardRank[4].username}`}>
                      <img
                        src={`https://swiftapi.vercel.app/${leaderboardRank[4].avatar}`}
                        className={styles.avatarPinned}
                      />
                    </Link>
                    <Link
                      to={`profile/${leaderboardRank[4].username}`}
                      className={styles.hallusername}>
                      {leaderboardRank[4].name}
                    </Link>
                    <p className={styles.hallcoins}>
                      {leaderboardRank[4].coins} coins
                    </p>
                  </div>
                  <div className={styles.rightrightScene}>5</div>
                </div>
              </div>
            </div>
            <div className={styles.top_right}>
              <div className={styles.ranking}>
                {leaderboardRank.map((item) => (
                  <div className={styles.rank}>
                    <div className={styles.rank_count}>
                      <p className={styles.rank_count_text}>{++count}</p>
                    </div>

                    <div className={styles.rank_avatar}>
                      <Link to={`profile/${item.username}`}>
                        <img
                          src={`https://swiftapi.vercel.app/${item.avatar}`}
                          className={styles.rank_avatar_image}
                        />
                      </Link>
                    </div>
                    <div className={styles.rank_name}>
                      <Link to={`profile/${item.username}`}>
                        <h3 className={styles.hallusername}>{item.name}</h3>
                      </Link>
                    </div>

                    <div className={styles.rank_count}>
                      <p>{item.coins}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </main>
        </>
      )}
    </div>
  );
}

const mapStateToProps = (state) => ({
  leaderboardRank: sortLeaderboardUsers(state),
});

export default connect(mapStateToProps)(Leaderboard);
