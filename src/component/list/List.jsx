import ListRow from "./ListRow";
import ListRowCell from "./ListRowCell";

import ListHeader from "./ListHeader";
import ListHeaderCell from "./ListHeaderCell";

import styles from "./List.module.css";

const List = ({ rows, timeStamp, onSelect, searchedText, currency}) => {
  
  const handleSelect = (index) => {
    onSelect(index);
  }

  const filteredOrders = rows.filter((row) => {
    return row["&id"].toLowerCase().includes(searchedText.toLowerCase());
  });

  let orderData = (filteredOrders? filteredOrders : rows);
  
  return (
    <table className={styles.container}>
      <thead>
        <ListHeader>
          <ListHeaderCell>Order ID</ListHeaderCell>
          <ListHeaderCell>Buy/Sell</ListHeaderCell>
          <ListHeaderCell>Country</ListHeaderCell>
          <ListHeaderCell>Order Submitted</ListHeaderCell>
          <ListHeaderCell>Order Volume / {currency}</ListHeaderCell>
        </ListHeader>
      </thead>
      <tbody>
        {orderData.map((row, index) => (
          <ListRow key={index} index={index} onSelect={handleSelect}>
            <ListRowCell>{row["&id"]}</ListRowCell>
            <ListRowCell>{row.executionDetails.buySellIndicator}</ListRowCell>
            <ListRowCell>{row.executionDetails.orderStatus}</ListRowCell>
            <ListRowCell>{timeStamp[index].timestamps.orderSubmitted}</ListRowCell>
            <ListRowCell>{row.bestExecutionData.orderVolume[currency]}</ListRowCell>
          </ListRow>
        ))}
      </tbody>
    </table>
  );
};

export default List;
