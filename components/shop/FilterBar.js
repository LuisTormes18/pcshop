import styles from "../../styles/Shop.module.css";
import SearchForm from "../ui/SearchForm";

const FilterBar = () => {
	return (
		<nav className={styles.navbar}>
			<div>FilterBox</div>
			<SearchForm />
		</nav>
	);
};

export default FilterBar
;
