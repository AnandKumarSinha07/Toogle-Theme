import "./styles.css";
import { useTheme } from "./theme";

export default function App() {
  const { theme, toggleMode } = useTheme();
  console.log(theme);
  return (
    <>
      <div className="blob"></div>
      <div className="switch">
        <h1 className="heading-toggle">Toggle Features</h1>
        <label>
          <input
            type="checkbox"
            onChange={toggleMode}
            checked={theme === "dark"}
          />
          <span className="slider"></span>
        </label>
      </div>

      <div className="card">
        <img
          src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/e4338a77b6c3e99a91df47d0a8626a3f"
          alt="Card Image"
        />
        <h3>Coffee</h3>
        <p>
          This is a description of the coffee which is made by Anand Kumar
          Sinha.and it provides additional details of the toggle card
        </p>
      </div>
    </>
  );
}
