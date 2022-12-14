import styles from "./panelHistory.module.css";
import {
  TableContainer,
  Table,
  TableRow,
  TableCell,
  TableBody,
  TableHead,
} from "@mui/material";
import { useState } from "react";
import { MdAssignment } from "react-icons/md";

interface IHistory {
  product: string;
  date: string;
  price: number;
}

const PanelHistory = () => {
  const [history, setHistory] = useState<IHistory[]>([
    { product: "product1", date: "22-20-2022", price: 1 },
    { product: "product2", date: "22-20-2022", price: 2 },
    { product: "product3", date: "22-20-2022", price: 3 },
    { product: "product4", date: "22-20-2022", price: 4 },
    { product: "product4", date: "22-20-2022", price: 4 },
    { product: "product4", date: "22-20-2022", price: 4 },
    { product: "product4", date: "22-20-2022", price: 4 },
    { product: "product4", date: "22-20-2022", price: 4 },
    { product: "product4", date: "22-20-2022", price: 4 },
    { product: "product4", date: "22-20-2022", price: 4 },
    { product: "product4", date: "22-20-2022", price: 4 },
    { product: "product4", date: "22-20-2022", price: 4 },
    { product: "product4", date: "22-20-2022", price: 4 },
    { product: "product4", date: "22-20-2022", price: 4 },
    { product: "product4", date: "22-20-2022", price: 4 },
    { product: "product4", date: "22-20-2022", price: 4 },
    { product: "product4", date: "22-20-2022", price: 4 },
    { product: "product4", date: "22-20-2022", price: 4 },
    { product: "product4", date: "22-20-2022", price: 4 },
    { product: "product4", date: "22-20-2022", price: 4 },
    { product: "product4", date: "22-20-2022", price: 4 },
    { product: "product4", date: "22-20-2022", price: 4 },
    { product: "product4", date: "22-20-2022", price: 4 },
    { product: "product4", date: "22-20-2022", price: 4 },
    { product: "product4", date: "22-20-2022", price: 4 },
    { product: "product4", date: "22-20-2022", price: 4 },
  ]);

  return (
    <main className={styles.container}>
      <div className={styles.content}>
        <div className={styles.assignmentContainer}>
          <div className={styles.assignment}>
            <MdAssignment size={25} className="text-white" />
          </div>
          <h5>History</h5>
        </div>
        <div className={styles.tableContainer}>
          <TableContainer className={styles.table}>
            <Table stickyHeader aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell className="fs-6">Product</TableCell>
                  <TableCell className="fs-6" align="center">Date</TableCell>
                  <TableCell className="fs-6" align="center">Price</TableCell>
                </TableRow>
              </TableHead>

              <TableBody>
                {history.map((row, index) => (
                  <TableRow
                    hover
                    key={index}
                    // sx={{ "&:last-child td,   &:last-child th": { border: 0 } }}
                  >
                    <TableCell component="th" scope="row">
                      {row.product}
                    </TableCell>
                    <TableCell align="center">{row.date}</TableCell>
                    <TableCell align="center">${row.price}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </div>
      </div>
    </main>
  );
};

export default PanelHistory;
