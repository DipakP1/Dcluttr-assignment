import { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Checkbox,
  TableSortLabel,
  Typography,
  Box,
  Divider,
  Grid,
  Button,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";

const DynamicTable = ({ data, title }) => {
  const [order, setOrder] = useState("asc");
  const [orderBy, setOrderBy] = useState("sales");
  const [selected, setSelected] = useState([]);

  const handleSort = (property) => {
    const isAsc = orderBy === property && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(property);
  };

  const sortedData = [...data].sort((a, b) => {
    if (order === "asc") {
      return a[orderBy] > b[orderBy] ? 1 : -1;
    }
    return a[orderBy] < b[orderBy] ? 1 : -1;
  });

  const handleSelect = (sku) => {
    const selectedIndex = selected.indexOf(sku);
    let newSelected = [];

    if (selectedIndex === -1) {
      newSelected = [...selected, sku];
    } else {
      newSelected = selected.filter((item) => item !== sku);
    }

    setSelected(newSelected);
  };

  const getTotal = () => {
    const totalSales = "₹2,93,132.12";
    const totalOutOfStock = "16%";
    const totalInventory = "2931";
    const totalTraffic = "61,985";
    const totalImpressions = "2,61,768";
    const avgRank = "8.3";

    return {
      totalSales,
      totalOutOfStock,
      totalInventory,
      totalTraffic,
      totalImpressions,
      avgRank,
    };
  };

  const totals = getTotal();

  return (
    <Box width="100%" my={2}>
      <Box
        display={"flex"}
        justifyContent={"space-between"}
        alignItems={"center"}
      >
        <Box>
          <Typography
            sx={{ fontSize: "20px", fontWeight: 700, fontFamily: "Mulish" }}
          >
            {title}
          </Typography>
          <Typography
            sx={{
              fontSize: "14px",
              fontWeight: 400,
              fontFamily: "Mulish",
              mb: 2,
            }}
          >
            Analytics for all your SKUs
          </Typography>
        </Box>
        <Box>
          <Button
            variant="contained"
            sx={{
              backgroundColor: "#027056",
              borderRadius: "10px",
              fontFamily: "Mulish",
              textTransform: "none",
            }}
            endIcon={<ExpandMoreIcon />}
          >
            Filters(1)
          </Button>
        </Box>
      </Box>

      {/* Table */}
      <TableContainer component={Paper} sx={{ borderRadius: "10px" }}>
        <Table sx={{ borderCollapse: "collapse" }}>
          <TableHead>
            <TableRow>
              <TableCell
                rowSpan={2}
                sx={{
                  border: "1px solid #F1F1F1",
                  fontWeight: 700,
                  fontSize: "15px",
                }}
              >
                <img src="/images/ChartLine.png" alt="" /> SKU Name
              </TableCell>
              <TableCell
                colSpan={3}
                align="center"
                sx={{
                  border: "1px solid #F1F1F1",
                  fontWeight: 700,
                  fontSize: "15px",
                }}
              >
                Availability
              </TableCell>
              <TableCell
                colSpan={3}
                align="center"
                sx={{
                  border: "1px solid #F1F1F1",
                  fontWeight: 700,
                  fontSize: "15px",
                }}
              >
                Visibility
              </TableCell>
            </TableRow>
            <TableRow>
              {[
                "Sales",
                "Out of Stock",
                "Total Inventory",
                "Average Rank",
                "Est. Traffic",
                "Est. Impressions",
              ].map((header, index) => {
                const key = header.toLowerCase().replace(/\s+/g, "");
                return (
                  <TableCell
                    key={index}
                    sx={{
                      border: "1px solid #F1F1F1",
                      fontWeight: 700,
                      fontSize: "15px",
                      fontFamily: "Mulish",
                    }}
                  >
                    <TableSortLabel
                      active={orderBy === key}
                      direction={orderBy === key ? order : "asc"}
                      onClick={() => handleSort(key)}
                    >
                      {header}
                    </TableSortLabel>
                  </TableCell>
                );
              })}
            </TableRow>
          </TableHead>

          <TableBody>
            {sortedData.map((row) => (
              <TableRow hover key={row.skuName}>
                <TableCell
                  sx={{
                    border: "1px solid #F1F1F1",
                    display: "flex",
                    alignItems: "center",
                    fontWeight: 700,
                    fontSize: "15px",
                    fontFamily: "Mulish",
                  }}
                >
                  <Checkbox
                    checked={selected.indexOf(row.skuName) !== -1}
                    onChange={() => handleSelect(row.skuName)}
                    color="success"
                  />
                  {row.skuName}
                </TableCell>
                <TableCell
                  sx={{
                    border: "1px solid #F1F1F1",
                    fontSize: "14px",
                    fontWeight: 500,
                  }}
                >
                  {typeof row.sales === "string"
                    ? row.sales
                    : row.sales.map((item, index) => {
                        const isLast = index === row.sales.length - 1;
                        return (
                          <Box
                            key={index}
                            sx={{
                              color: isLast ? "#0CAF60" : "inherit", // green for last
                              display: "flex",
                              alignItems: "center",
                              gap: 0.5,
                              fontWeight: isLast ? 600 : 500,
                            }}
                          >
                            {item}
                            {isLast && (
                              <ArrowUpwardIcon
                                color="success"
                                sx={{ fontSize: "14px" }}
                              />
                            )}
                          </Box>
                        );
                      })}
                </TableCell>
                <TableCell
                  sx={{
                    border: "1px solid #F1F1F1",
                    fontSize: "14px",
                    fontWeight: 500,
                  }}
                >
                  {typeof row.outOfStock === "string"
                    ? row.outOfStock
                    : row.outOfStock.map((item, index) => {
                        const isLast = index === row.sales.length - 1;
                        return (
                          <Box
                            key={index}
                            sx={{
                              color: isLast ? "#0CAF60" : "inherit", // green for last
                              display: "flex",
                              alignItems: "center",
                              gap: 0.5,
                              fontWeight: isLast ? 600 : 500,
                            }}
                          >
                            {item}
                            {isLast && (
                              <ArrowUpwardIcon
                                color="success"
                                sx={{ fontSize: "14px" }}
                              />
                            )}
                          </Box>
                        );
                      })}
                </TableCell>
                <TableCell
                  sx={{
                    border: "1px solid #F1F1F1",
                    fontSize: "14px",
                    fontWeight: 500,
                  }}
                >
                  {typeof row.totalInventory === "string"
                    ? row.totalInventory
                    : row.totalInventory.map((item, index) => {
                        const isLast = index === row.sales.length - 1;
                        return (
                          <Box
                            key={index}
                            sx={{
                              color: isLast ? "#0CAF60" : "inherit", // green for last
                              display: "flex",
                              alignItems: "center",
                              gap: 0.5,
                              fontWeight: isLast ? 600 : 500,
                            }}
                          >
                            {item}
                            {isLast && (
                              <ArrowUpwardIcon
                                color="success"
                                sx={{ fontSize: "14px" }}
                              />
                            )}
                          </Box>
                        );
                      })}
                </TableCell>
                <TableCell
                  sx={{
                    border: "1px solid #F1F1F1",
                    fontSize: "14px",
                    fontWeight: 500,
                  }}
                >
                  {typeof row.averageRank === "string"
                    ? row.averageRank
                    : row.averageRank.map((item, index) => {
                        const isLast = index === row.sales.length - 1;
                        return (
                          <Box
                            key={index}
                            sx={{
                              color: isLast ? "#0CAF60" : "inherit", // green for last
                              display: "flex",
                              alignItems: "center",
                              gap: 0.5,
                              fontWeight: isLast ? 600 : 500,
                            }}
                          >
                            {item}
                            {isLast && (
                              <ArrowUpwardIcon
                                color="success"
                                sx={{ fontSize: "14px" }}
                              />
                            )}
                          </Box>
                        );
                      })}
                </TableCell>
                <TableCell
                  sx={{
                    border: "1px solid #F1F1F1",
                    fontSize: "14px",
                    fontWeight: 500,
                  }}
                >
                  {typeof row.estTraffic === "string"
                    ? row.estTraffic
                    : row.estTraffic.map((item, index) => {
                        const isLast = index === row.sales.length - 1;
                        return (
                          <Box
                            key={index}
                            sx={{
                              color: isLast ? "#0CAF60" : "inherit", // green for last
                              display: "flex",
                              alignItems: "center",
                              gap: 0.5,
                              fontWeight: isLast ? 600 : 500,
                            }}
                          >
                            {item}
                            {isLast && (
                              <ArrowUpwardIcon
                                color="success"
                                sx={{ fontSize: "14px" }}
                              />
                            )}
                          </Box>
                        );
                      })}
                </TableCell>
                <TableCell
                  sx={{
                    border: "1px solid #F1F1F1",
                    fontSize: "14px",
                    fontWeight: 500,
                  }}
                >
                  {typeof row.estImpressions === "string"
                    ? row.estImpressions
                    : row.estImpressions.map((item, index) => {
                        const isLast = index === row.sales.length - 1;
                        return (
                          <Box
                            key={index}
                            sx={{
                              color: isLast ? "#0CAF60" : "inherit", // green for last
                              display: "flex",
                              alignItems: "center",
                              gap: 0.5,
                              fontWeight: isLast ? 600 : 500,
                            }}
                          >
                            {item}
                            {isLast && (
                              <ArrowUpwardIcon
                                color="success"
                                sx={{ fontSize: "14px" }}
                              />
                            )}
                          </Box>
                        );
                      })}
                </TableCell>
              </TableRow>
            ))}

            {/* Total Row */}
            <TableRow
              sx={{
                backgroundColor: "#FAFAFA",
                fontWeight: 700,
                fontSize: "15px",
                fontFamily: "Mulish",
              }}
            >
              <TableCell
                sx={{
                  border: "1px solid #F1F1F1",
                  fontWeight: 700,
                  fontSize: "15px",
                  fontFamily: "Mulish",
                }}
              >
                Total
              </TableCell>
              <TableCell
                sx={{
                  border: "1px solid #F1F1F1",
                  fontWeight: 700,
                  fontSize: "15px",
                  fontFamily: "Mulish",
                }}
              >
                {totals.totalSales}
              </TableCell>
              <TableCell
                sx={{
                  border: "1px solid #F1F1F1",
                  fontWeight: 700,
                  fontSize: "15px",
                  fontFamily: "Mulish",
                }}
              >
                {totals.totalOutOfStock}
              </TableCell>
              <TableCell
                sx={{
                  border: "1px solid #F1F1F1",
                  fontWeight: 700,
                  fontSize: "15px",
                  fontFamily: "Mulish",
                }}
              >
                {totals.totalInventory}
              </TableCell>
              <TableCell
                sx={{
                  border: "1px solid #F1F1F1",
                  fontWeight: 700,
                  fontSize: "15px",
                  fontFamily: "Mulish",
                }}
              >
                {totals.avgRank}
              </TableCell>
              <TableCell
                sx={{
                  border: "1px solid #F1F1F1",
                  fontWeight: 700,
                  fontSize: "15px",
                  fontFamily: "Mulish",
                }}
              >
                {totals.totalTraffic}
              </TableCell>
              <TableCell
                sx={{
                  border: "1px solid #F1F1F1",
                  fontWeight: 700,
                  fontSize: "15px",
                  fontFamily: "Mulish",
                }}
              >
                {totals.totalImpressions}
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default DynamicTable;
