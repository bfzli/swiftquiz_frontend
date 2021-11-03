import Header from "../components/shared/Header/Header"
import Footer from "../components/shared/Footer/Footer"

export default function Layout(props) {
    return (
        <section>
            <Header />
                {props.children}
            <Footer />
        </section>
    )
}