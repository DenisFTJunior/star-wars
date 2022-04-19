import Header from "../components/header";
import SlideMenu from "../components/navigation/SliderMenu";
import "./_global.style.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <SlideMenu />
      <Header />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
