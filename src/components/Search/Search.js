import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './Search.module.scss';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

function Search() {
  return (
    <div className={styles.search}>
      <button className={styles.searchButton}>
        <FontAwesomeIcon icon={faMagnifyingGlass} />
      </button>
      <input placeholder="Search" spellCheck={false} />
    </div>
  );
}

export default Search;
