import SlideMenu from "../components/navigation/SliderMenu";
import "./_global.style.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <SlideMenu />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
