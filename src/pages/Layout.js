import Header from "../components/shared/Header/Header";
import Footer from "../components/shared/Footer/Footer";
import { useSelector } from "react-redux";

export default function Layout(props) {
  const theme = useSelector((state) => state.ui.theme);

  return (
    <section class="body" id={theme === "lightmode" ? "lightmode" : "darkmode"}>
      <Header />
      {props.children}
      <Footer />
    </section>
  );
}
