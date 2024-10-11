import { LoadSpinner } from "react-loader-spinner";
import styles from "./Loader.module.css";

const Loader = () => {
  return (
    <div className={styles.loader}>
      <LoadSpinner
        visible={true}
        height="80"
        width="80"
        color={["#e15b64", "#f47e60", "#f8b26a", "#abbd81", "#849b87"]}
        ariaLabel="color-ring-loading"
        wrapperStyle={{}}
        wrapperClass="color-ring-wrapper"
      />
    </div>
  );
};

export default Loader;
