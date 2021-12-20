import { useState } from "react";
import { Helmet } from "react-helmet";
import Code from "../components/pages/Play/Code/Code";
import Screen from "../components/pages/Play/Screen/Screen";
import { useSelector, useDispatch } from "react-redux";
import { purchaseQuiz } from "../reduxComponents/actions/Questions";
import Dashlayout from "./PlayLayout";
import { useEffect } from "react";

export default function Play() {
  const dispatch = useDispatch();
  const [playing, setPlaying] = useState(false);
  const [quiz, setQuiz] = useState({});
  const url = /[^/]*$/.exec(window.location.href)[0];
  const [code, setCode] = useState(url === "play" ? "" : url);
  const currentQuiz = useSelector((state) => state.user.currentlyPlaying);

  const play_quiz = () => dispatch(purchaseQuiz(code))

  useEffect(() => {
    setQuiz(currentQuiz);
    setPlaying(true);
  }, [currentQuiz])

  function isEmpty(obj) {
    for (var prop in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, prop)) {
        return false;
      }
    }

    return JSON.stringify(obj) === JSON.stringify({});
  }

  return (
    <Dashlayout>
      <Helmet>
        <title>Let's see what do you know! - Swiftquiz</title>
        <meta
          name="description"
          content="Ops something went wrong with the page, if you think this is a mistake contact the team."
        />
      </Helmet>

      {
        playing === true && isEmpty(quiz) === false
          ? 
          <Screen quiz={quiz} />
          :
          <Code code={code} setCode={setCode} play_quiz={() => play_quiz()} />
      }
    </Dashlayout>
  );
}
