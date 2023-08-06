import styles from "./ListRow.module.css";

const ListCell = ({ children, index, onSelect }) => {
  return <tr className={styles.cell} onClick={() => onSelect(index)}>{children}</tr>;
};

export default ListCell;
