import * as styles from './Console.module.scss'
import { useState } from 'react'
import { useSelector } from 'react-redux';
export default function Console({ console, setConsole }) {
    const user = useSelector(state => state.auth.auth)
    const [content, setContent] = useState([`Welcome back @${user.username === null ? 'loading' : user.username}, good day to mess up with people.`]);
    const [fullScreen, setFullScreen] = useState(false)
    const [consoleContent, setConsoleContent] = useState("")
    const [loading, setLaoding] = useState(false)
    const addLine = () => {
        content.push(consoleContent)
        switch (consoleContent.split(" ")[0]) {
            case "clear":
                if (content.length < 0) content.push("There is nothing to delete.");
                else {
                    setContent([""])
                    content.push("Content was cleared.");
                }

                break;

            case "help":
                content.push(
                    <>
                        A list of commands you can use: <br />
                        - delete user [username] <br />
                        - delete user [*] <br />
                        - delete quiz [redeem code] <br />
                        - delete quiz [*] <br />
                        - add coin username [coin_count] <br />
                        - add coin * [coin_count] <br />
                        - delete coin * <br />
                        - delete coin username [coin_count] <br />
                    </>
                )
                break;

            case "delete":
                handleDelete(consoleContent.split(" ")[1], consoleContent.split(" ")[2])
                break;

            case "add":
                addCoins(consoleContent.split(" ")[1], consoleContent.split(" ")[2], consoleContent.split(" ")[3])
                break;

            default:
                content.push(`The command '${consoleContent}' is not recognized. Try "help" to list all avialable commands.`);
                break;
        }
        setConsoleContent("")
    }

    const handleDelete = async (model, target) => {
        try {
            setLaoding(true)
            const response = await fetch("https://swiftapi.vercel.app/api/terminal/delete", {
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: "Bearer " + user.token,
                },
                body: JSON.stringify({
                    model: model,
                    target: target
                })
            }
            );
            const data = await response.json();
            content.push(data.message)



        } catch (err) {
            content.push(err.message);
        }
        finally {
            setLaoding(false)
        }
    }

    const addCoins = async (model, target, value) => {
        try {
            setLaoding(true)
            const response = await fetch("https://swiftapi.vercel.app/api/terminal/add", {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: "Bearer " + user.token,
                },
                body: JSON.stringify({
                    model: model,
                    target: target,
                    value: value
                })
            }
            );
            const data = await response.json();
            content.push(data.message)



        } catch (err) {
            content.push(err.message);
        }
        finally {
            setLaoding(false)
        }
    }

    return (
        <section id="terminal" className={fullScreen === false ? styles.container : styles.container_full}>
            <div className={styles.head}>
                <div className={styles.head_left}>
                    <svg width="1em" viewBox="0 0 83 82" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M57.5804 42.6399C59.2018 43.45 60.4752 44.5712 65.159 49.312C81.2774 65.6265 81.1902 65.5221 81.8807 69.3311C82.1495 70.8137 82.1243 71.5244 81.7442 73.1636C81.148 75.7343 80.2421 77.2632 78.2194 79.1116C75.6977 81.4164 74.2783 81.977 70.9141 81.9975C66.0926 82.0266 66.0626 82.0052 54.039 69.9679C48.4302 64.3526 43.5445 59.291 43.1822 58.7198C42.0869 56.9921 41.5362 54.914 41.5365 52.5094C41.5365 50.6464 41.6822 49.958 42.3887 48.482C43.6 45.951 45.7239 43.8305 48.3299 42.5497C50.4193 41.5227 50.4205 41.5227 53.1093 41.5969C55.2865 41.6568 55.8981 41.7995 57.5804 42.6399Z" fill="var(--icon-border)" />
                        <path d="M45.9874 0.393832C49.1308 0.916997 51.6727 1.52741 53.406 2.17491C54.1405 2.4494 55.0085 2.75327 55.3349 2.8503C56.6685 3.24646 61.6604 6.02075 63.6225 7.45611C64.7765 8.30065 66.8356 10.0651 68.1977 11.377C76.695 19.5619 81.0086 29.2644 81 40.1731C80.997 43.705 80.3017 49.2425 79.6664 50.7901C78.996 52.4234 78.9655 52.3979 65.5466 39.0401C58.4611 31.9867 52.1817 25.8583 51.5923 25.4209C49.8549 24.1324 46.2812 22.5033 44.2069 22.0543C37.0375 20.5023 29.5467 23.522 24.8732 29.8481C24.2453 30.6982 23.7314 31.573 23.7314 31.792C23.7314 32.0113 23.6156 32.3173 23.4741 32.4725C22.1746 33.8963 21.4933 41.6034 22.3607 45.0694C23.1242 48.12 24.7142 50.9358 27.3825 53.9626C28.7203 55.4799 34.7137 61.6745 40.7011 67.7284C48.645 75.7599 51.5072 78.8321 51.2894 79.0944C50.3914 80.1763 41.9335 81.1179 37.0045 80.685C26.8223 79.7903 17.9059 75.4014 10.6549 67.715C5.4559 62.2039 1.7154 54.6324 0.410899 46.9792C-0.312866 42.7331 -0.048166 34.9542 0.950981 31.1178C2.94838 23.4478 6.46098 17.2953 11.9256 11.8945C18.0412 5.85011 24.7507 2.26007 32.7821 0.735682C34.0878 0.487602 35.4232 0.228245 35.7496 0.158806C37.1592 -0.140612 43.6742 0.00895092 45.9874 0.393832Z" fill="var(--icon-border)" />
                    </svg>
                    <p className={styles.console_title}>Swfit-terminal.exe</p>
                </div>

                <div className={styles.head_right}>
                    <p onClick={() => setFullScreen(!fullScreen)}>
                        {
                            fullScreen === false ?
                                <svg style={{ cursor: 'pointer' }} width="20" height="20" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M26.995 5.901C26.9937 5.88754 26.9911 5.87448 26.9893 5.86117C26.9866 5.84216 26.9843 5.82312 26.9806 5.80426C26.9774 5.78845 26.9731 5.77319 26.9692 5.75769C26.9652 5.74154 26.9616 5.72531 26.9568 5.70935C26.9522 5.69403 26.9464 5.67926 26.9411 5.66428C26.9354 5.64847 26.9301 5.63257 26.9237 5.61697C26.918 5.60309 26.9112 5.58981 26.9048 5.57626C26.8973 5.56018 26.8902 5.54401 26.8817 5.52826C26.8748 5.51542 26.867 5.50324 26.8595 5.49073C26.8503 5.47523 26.8415 5.45957 26.8314 5.44449C26.8222 5.43079 26.812 5.41791 26.8021 5.4047C26.7926 5.39176 26.7835 5.37851 26.7732 5.36594C26.7546 5.34333 26.7348 5.32178 26.7144 5.30091C26.7119 5.29831 26.7097 5.29548 26.7072 5.29291C26.7052 5.29089 26.7029 5.28925 26.7009 5.28723C26.6795 5.26614 26.6573 5.24586 26.6339 5.22675C26.6222 5.2171 26.6098 5.20868 26.5977 5.19965C26.5836 5.18915 26.5699 5.17822 26.5553 5.16846C26.5412 5.159 26.5265 5.15079 26.5119 5.14212C26.4984 5.13403 26.4852 5.12555 26.4713 5.1181C26.4567 5.11029 26.4417 5.1037 26.4268 5.09668C26.4121 5.08969 26.3976 5.08237 26.3825 5.07611C26.3682 5.07022 26.3538 5.06549 26.3394 5.0603C26.323 5.05438 26.3068 5.04813 26.29 5.04306C26.2758 5.03876 26.2613 5.03564 26.247 5.03198C26.2298 5.02759 26.2127 5.02283 26.1952 5.01935C26.1789 5.01611 26.1624 5.01425 26.146 5.01184C26.1301 5.00952 26.1145 5.00653 26.0984 5.00497C26.0694 5.00211 26.0402 5.00089 26.0111 5.00055C26.0073 5.00052 26.0037 5 26 5H20C19.7348 5 19.4805 5.10536 19.2929 5.29289C19.1054 5.48043 19 5.73478 19 6C19 6.26522 19.1054 6.51957 19.2929 6.70711C19.4805 6.89464 19.7348 7 20 7H23.5858L18.2929 12.2929C18.1053 12.4805 18 12.7348 18 13C18 13.2653 18.1054 13.5196 18.2929 13.7072C18.4805 13.8947 18.7348 14 19.0001 14C19.2653 14 19.5196 13.8946 19.7072 13.7071L25 8.41425V12C25 12.2652 25.1054 12.5196 25.2929 12.7071C25.4805 12.8946 25.7348 13 26 13C26.2652 13 26.5196 12.8946 26.7071 12.7071C26.8947 12.5196 27 12.2652 27 12V6.00064C27 5.96738 26.9984 5.93417 26.995 5.901Z" fill="var(--icon-border)" />
                                    <path d="M12.2928 18.2929L7 23.5858V20C7 19.7348 6.89464 19.4805 6.70711 19.2929C6.51957 19.1054 6.26522 19 6 19C5.73478 19 5.48043 19.1054 5.29289 19.2929C5.10536 19.4805 5 19.7348 5 20V25.9994C5 26.0327 5.00167 26.0659 5.005 26.099C5.00634 26.1125 5.00891 26.1256 5.01074 26.1389C5.01342 26.1579 5.01568 26.1769 5.0194 26.1958C5.02258 26.2116 5.02691 26.2268 5.03082 26.2423C5.03479 26.2585 5.03839 26.2747 5.04321 26.2907C5.04785 26.306 5.05365 26.3208 5.05896 26.3358C5.06463 26.3516 5.06988 26.3675 5.07629 26.3831C5.08203 26.3969 5.08886 26.4102 5.09521 26.4238C5.10272 26.4399 5.10986 26.456 5.11834 26.4718C5.12524 26.4846 5.13305 26.4968 5.1405 26.5093C5.14972 26.5248 5.15851 26.5405 5.16858 26.5555C5.17779 26.5692 5.18805 26.5821 5.19787 26.5953C5.20746 26.6083 5.21649 26.6215 5.22686 26.6341C5.24542 26.6567 5.2652 26.6782 5.28564 26.6991C5.28814 26.7017 5.29028 26.7046 5.29284 26.7071C5.29486 26.7091 5.29712 26.7108 5.29913 26.7128C5.32055 26.7339 5.34277 26.7542 5.36609 26.7733C5.37787 26.783 5.39032 26.7914 5.40246 26.8005C5.41644 26.811 5.43017 26.8218 5.4447 26.8316C5.45904 26.8412 5.47393 26.8495 5.48864 26.8583C5.50195 26.8662 5.51495 26.8745 5.52856 26.8819C5.54357 26.8899 5.55902 26.8967 5.57434 26.9039C5.58862 26.9106 5.60266 26.9178 5.6173 26.9238C5.63207 26.93 5.64715 26.9349 5.66217 26.9403C5.67797 26.946 5.6936 26.952 5.70971 26.9569C5.72473 26.9614 5.73992 26.9648 5.755 26.9685C5.77148 26.9727 5.78778 26.9773 5.80456 26.9806C5.82214 26.9841 5.83996 26.9862 5.85766 26.9887C5.87225 26.9908 5.88654 26.9936 5.9013 26.995C5.93408 26.9983 5.96704 27 6 27H12C12.2652 27 12.5196 26.8947 12.7071 26.7071C12.8946 26.5196 13 26.2652 13 26C13 25.7348 12.8946 25.4805 12.7071 25.2929C12.5196 25.1054 12.2652 25 12 25H8.41425L13.7072 19.7071C13.8 19.6143 13.8737 19.504 13.9239 19.3827C13.9742 19.2613 14 19.1313 14 19C14 18.8687 13.9742 18.7386 13.9239 18.6173C13.8736 18.496 13.8 18.3857 13.7071 18.2929C13.6142 18.2 13.504 18.1264 13.3827 18.0761C13.2613 18.0259 13.1313 18 13 18C12.8686 18 12.7386 18.0259 12.6173 18.0761C12.4959 18.1264 12.3857 18.2001 12.2929 18.2929L12.2928 18.2929Z" fill="var(--icon-border)" />
                                </svg>

                                :

                                <svg style={{ cursor: 'pointer' }} width="20" height="20" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M26.7072 5.29291C26.5196 5.10543 26.2652 5.00012 26 5.00012C25.7348 5.00012 25.4804 5.10543 25.2928 5.29291L20 10.5858V7.00006C20 6.73484 19.8946 6.48049 19.7071 6.29295C19.5196 6.10542 19.2652 6.00006 19 6.00006C18.7348 6.00006 18.4804 6.10542 18.2929 6.29295C18.1054 6.48049 18 6.73484 18 7.00006V12.9994C18 13.0327 18.0017 13.0659 18.005 13.0991C18.0063 13.1125 18.0089 13.1255 18.0107 13.1387C18.0134 13.1578 18.0157 13.1769 18.0194 13.1958C18.0225 13.2115 18.0269 13.2266 18.0307 13.242C18.0348 13.2583 18.0384 13.2747 18.0433 13.2908C18.0478 13.3059 18.0535 13.3204 18.0588 13.3352C18.0644 13.3513 18.0698 13.3674 18.0763 13.3832C18.082 13.3967 18.0886 13.4096 18.0947 13.4228C18.1024 13.4393 18.1098 13.4559 18.1185 13.472C18.1249 13.4841 18.1324 13.4956 18.1393 13.5074C18.1489 13.5237 18.1582 13.5401 18.1688 13.5559C18.1771 13.5683 18.1864 13.5798 18.1952 13.5918C18.2057 13.6061 18.2157 13.6206 18.2271 13.6345C18.2416 13.6521 18.2573 13.6687 18.273 13.6853C18.2798 13.6925 18.2858 13.7002 18.2928 13.7072C18.2996 13.714 18.3071 13.7198 18.314 13.7263C18.3309 13.7423 18.3477 13.7583 18.3657 13.773C18.379 13.784 18.393 13.7935 18.4067 13.8037C18.4192 13.813 18.4314 13.8227 18.4443 13.8314C18.4596 13.8415 18.4753 13.8504 18.491 13.8597C18.5034 13.8671 18.5156 13.8749 18.5283 13.8817C18.5438 13.89 18.5598 13.8971 18.5756 13.9045C18.5894 13.911 18.603 13.9179 18.6171 13.9238C18.6323 13.93 18.6477 13.9351 18.6631 13.9406C18.6785 13.9462 18.6938 13.9521 18.7096 13.9569C18.7248 13.9615 18.7402 13.9649 18.7556 13.9687C18.7719 13.9728 18.788 13.9774 18.8046 13.9807C18.8221 13.9841 18.84 13.9862 18.8577 13.9888C18.8722 13.9909 18.8865 13.9936 18.9013 13.9951C18.9341 13.9983 18.967 14.0001 19 14.0001H25C25.2652 14.0001 25.5196 13.8947 25.7071 13.7072C25.8946 13.5196 26 13.2653 26 13.0001C26 12.7348 25.8946 12.4805 25.7071 12.2929C25.5196 12.1054 25.2652 12.0001 25 12.0001H21.4143L26.7072 6.7072C26.8947 6.51964 27 6.26528 27 6.00006C27 5.73483 26.8947 5.48047 26.7072 5.29291Z" fill="var(--icon-border)" />
                                    <path d="M13.995 18.901C13.9937 18.8876 13.9911 18.8746 13.9893 18.8614C13.9866 18.8423 13.9843 18.8231 13.9806 18.8042C13.9775 18.7886 13.9732 18.7734 13.9693 18.7581C13.9652 18.7418 13.9616 18.7254 13.9567 18.7093C13.9522 18.6942 13.9465 18.6797 13.9412 18.6649C13.9356 18.6488 13.9302 18.6327 13.9237 18.6169C13.918 18.6034 13.9115 18.5905 13.9053 18.5773C13.8976 18.5608 13.8902 18.5442 13.8815 18.528C13.8751 18.5159 13.8676 18.5045 13.8607 18.4927C13.8511 18.4764 13.8418 18.46 13.8312 18.4442C13.8229 18.4318 13.8136 18.4203 13.8048 18.4083C13.7943 18.394 13.7843 18.3794 13.7729 18.3656C13.7584 18.348 13.7427 18.3314 13.727 18.3148C13.7202 18.3076 13.7142 18.2999 13.7072 18.2928C13.7005 18.2862 13.6932 18.2805 13.6864 18.2741C13.6694 18.258 13.6524 18.2419 13.6343 18.227C13.6212 18.2163 13.6075 18.2069 13.5941 18.197C13.5812 18.1875 13.5689 18.1775 13.5556 18.1686C13.5408 18.1588 13.5255 18.1501 13.5103 18.1411C13.4973 18.1334 13.4848 18.1253 13.4714 18.1182C13.4566 18.1103 13.4414 18.1036 13.4263 18.0965C13.4118 18.0896 13.3974 18.0823 13.3825 18.0761C13.3684 18.0703 13.354 18.0656 13.3397 18.0605C13.3231 18.0545 13.3068 18.0482 13.2898 18.043C13.2761 18.0389 13.2622 18.0359 13.2484 18.0324C13.2306 18.0278 13.213 18.0229 13.1949 18.0193C13.1797 18.0163 13.1644 18.0146 13.1491 18.0123C13.1321 18.0098 13.1153 18.0066 13.098 18.0049C13.0728 18.0025 13.0474 18.0017 13.0221 18.0011C13.0147 18.0009 13.0075 18 13 18H7.00001C6.73479 18 6.48044 18.1054 6.2929 18.2929C6.10536 18.4804 6.00001 18.7348 6.00001 19C6.00001 19.2652 6.10536 19.5196 6.2929 19.7071C6.48044 19.8946 6.73479 20 7.00001 20H10.5857L5.29285 25.2928C5.19999 25.3857 5.12632 25.496 5.07606 25.6173C5.02581 25.7386 4.99994 25.8687 4.99994 26C4.99994 26.1313 5.02581 26.2614 5.07606 26.3827C5.12632 26.504 5.19999 26.6143 5.29285 26.7072C5.4804 26.8947 5.73477 27.0001 6.00001 27.0001C6.13134 27.0001 6.26138 26.9742 6.38271 26.9239C6.50405 26.8737 6.61429 26.8 6.70716 26.7072L12 21.4143V25C12 25.2652 12.1054 25.5196 12.2929 25.7071C12.4804 25.8946 12.7348 26 13 26C13.2652 26 13.5196 25.8946 13.7071 25.7071C13.8946 25.5196 14 25.2652 14 25V19.0006C14 18.9674 13.9983 18.9342 13.995 18.901Z" fill="var(--icon-border)" />
                                </svg>
                        }
                    </p>

                    <svg style={{ marginLeft: '.65em', cursor: 'pointer' }} onClick={() => setConsole(!console)} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 10.586L16.95 5.63599L18.364 7.04999L13.414 12L18.364 16.95L16.95 18.364L12 13.414L7.04999 18.364L5.63599 16.95L10.586 12L5.63599 7.04999L7.04999 5.63599L12 10.586Z" fill="var(--icon-border)" />
                    </svg>
                </div>
            </div>

            <div className={styles.body}>
                {content.length > 0 ? content.map(currentLine => <p className={styles.command}>{currentLine}</p>) : null}
                <div style={{display: 'flex'}}>
                    <p className={styles.consolepre}>{user.role}${user.username} ~ %</p> <input type="text" autoCorrect="off" autoComplete="off" autcomplete="off" autocorrect="off" autofocus="true" autoFocus="true" className={styles.console_input} id="pw" value={consoleContent} onKeyPress={(keypress) => keypress.key === 'Enter' ? addLine() : null} onChange={(e) => { e.preventDefault(); setConsoleContent(e.target.value) }} />
                </div>
            </div>
        </section>
    )
}
