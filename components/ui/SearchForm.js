import styles from "../../styles/Layout.module.css";

const SearchForm = () => {
    return (
        <form className={styles.search_form}>
            <input type="text" />
            <button>Q</button>
        </form>
    );
};

export default SearchForm;
