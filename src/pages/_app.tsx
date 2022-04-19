import "./_global.style.css";
import { css } from "@emotion/css";

import Header from "../components/header";
import SlideMenu from "../components/navigation/SliderMenu";

const style = css`
  display: grid;
  grid-template-columns: repeat(auto-fill, 6rem);
  grid-template-rows: repeat(auto-fill, 4rem);
  grid-auto-flow: row;

  .main {
    grid-row: 2 / auto-fill;
    grid-column: 2 / auto-fill;
    padding: 2rem;
  }

  .slide-menu {
    grid-column: 1;
    grid-row: 1 / auto-fill;
  }

  .header {
    grid-row: 1;
    grid-column: 2 / auto-fill;
  }
`;

function MyApp({ Component, pageProps }) {
  return (
    <div className={style}>
      <div className="slide-menu">
        <SlideMenu />
      </div>

      <div className="header">
        <Header />
      </div>

      <div className="main">
        <Component {...pageProps} />
      </div>
    </div>
  );
}

export default MyApp;
