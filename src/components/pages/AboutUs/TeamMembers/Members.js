import React,{useState} from 'react'
import * as styles from './Style/Members.module.scss'

import {ReactComponent as AboutLaurat} from '../../../../assets/images/webp/about_laurat.svg'
import {ReactComponent as AboutAdnan} from '../../../../assets/images/webp/about_adnan.svg'
import {ReactComponent as AboutFitim} from '../../../../assets/images/webp/about_fitim.svg'
import {ReactComponent as AboutBenjamin} from '../../../../assets/images/webp/about_benjamin.svg'
import {ReactComponent as AboutMendrit} from '../../../../assets/images/webp/about_mendrit.svg'



const Members = () => {

    const [toggleState, setToggleState] = useState(1);

    const toggleTab = (index) => {
      setToggleState(index);
    };

    return (
        <section className={styles.out_team} data-aos="fade-up"
        data-aos-anchor-placement="top-center">
        <div className={styles.our_team_container}>
          <div className={styles.our_team_container_header}>
            <h2>OUR TEAM</h2>
            <div className={styles.divider}></div>
          </div>
          <div className={styles.our_team_container_members}>
            <AboutLaurat
              className={toggleState === 1 ? "" : styles.inactive}
              onMouseEnter={() => toggleTab(1)}
            />
            <AboutMendrit
              className={toggleState === 2 ? "" : styles.inactive}
              onMouseEnter={() => toggleTab(2)}
            />
            <AboutBenjamin
              className={toggleState === 3 ? "" : styles.inactive}
              onMouseEnter={() => toggleTab(3)}
            />
         
                 <AboutAdnan
              className={toggleState === 4 ? "" : styles.inactive}
              onMouseEnter={() => toggleTab(4)}
            />
            <AboutFitim
              className={toggleState === 5 ? "" : styles.inactive}
              onMouseEnter={() => toggleTab(5)}
            />
           
          </div>
        </div>
        <div className={styles.our_team_container} data-aos="fade-up"
     data-aos-anchor-placement="top-center">
          <div className={styles.our_team_container_header}>
            <h2>MEMBER INFO</h2>
            <div className={styles.divider}></div>
            <h4
              className={toggleState === 1 ? "tabs active-tabs" : styles.inactive1}
              onClick={() => toggleTab(1)}
            >
              Laurat Hajrullaaga
            </h4>
            <p className={toggleState === 1 ? "tabs active-tabs" : styles.inactive1}
              onClick={() => toggleTab(1)}>
                  
                  Talk is cheap. Show me the code .
              </p>
            <h4
              className={toggleState === 2 ? "tabs active-tabs" : styles.inactive1}
              onClick={() => toggleTab(2)}
            >
              Mendrit Arifi
            </h4>
            <p className={toggleState === 2 ? "tabs active-tabs" : styles.inactive1}
              onClick={() => toggleTab(2)}>
                  I'got 99 problems but a error ain't one .
              </p>
            <h4
              className={toggleState === 3 ? "tabs active-tabs" : styles.inactive1}
              onClick={() => toggleTab(3)}
            >
              Benjamin Fazli
            </h4>
            <p className={toggleState === 3 ? "tabs active-tabs" : styles.inactive1}
              onClick={() => toggleTab(3)}>
                  Software sucks because the users demand it to .
              </p>
          
             <h4
              className={toggleState === 4 ? "tabs active-tabs" : styles.inactive1}
              onClick={() => toggleTab(4)}
            >
              Adnan Kasumaj
            </h4>
            <p className={toggleState === 4 ? "tabs active-tabs" : styles.inactive1}
              onClick={() => toggleTab(4)}>
                  Simplicity is prerequisite for reliability .
              </p>
            <h4
              className={toggleState === 5 ? "tabs active-tabs" : styles.inactive1}
              onClick={() => toggleTab(5)}
            >
              Fitim Hoti
            </h4>
            <p className={toggleState === 5 ? "tabs active-tabs" : styles.inactive1}
              onClick={() => toggleTab(5)}>
                  Need to code ?? Caffeine loading ....
              </p>
          </div>
        </div>
      </section>
    )
}

export default Members
