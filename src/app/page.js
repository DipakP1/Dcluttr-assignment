"use client";
import styles from "./page.module.css";
import { Box, Divider, Grid, IconButton, Typography } from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

import DynamicTable from "@/components/Table";
import Charts from "@/components/Charts";

const jsonData = [
  {
    skuName: "Protein Bar 100g",
    sales: "₹93,132.12",
    outOfStock: "1.68%",
    totalInventory: "931.9",
    averageRank: "3.2",
    estTraffic: "12303",
    estImpressions: "25005",
    clicks: "1.9",
  },
  {
    skuName: "Choco Bar 100g",
    sales: ["₹8,526.32", "₹9,132.12", "2.4%"],
    outOfStock: ["6.79%", "3.28", "3.4%"],
    totalInventory: ["679", "328", "-"],
    averageRank: [7, 4, "2.4%"],
    estTraffic: ["3005", "2906", "2.4%"],
    estImpressions: ["4231", "3657", "2.4%"],
    clicks: ["2.4", "2.4", "2.4%"],
  },
  {
    skuName: "SKU 3",
    sales: "₹9313",
    outOfStock: "1.68%",
    totalInventory: "931.9",
    averageRank: "11",
    estTraffic: "1931.9",
    estImpressions: "₹931.9",
    clicks: "1.9",
  },
  {
    skuName: "SKU 4",
    sales: "₹0",
    outOfStock: "0%",
    totalInventory: "0",
    averageRank: "0",
    estTraffic: "0",
    estImpressions: "0",
    clicks: "0.0",
  },
];

export default function Home() {
  return (
    <Box>
      <Box
        sx={{
          border: "1px solid #dedede",
          borderRadius: "10px",
          margin: "10px",
          paddingBottom: "10px",
          width: "100%",
        }}
      >
        <Grid
          padding={"10px 9px"}
          display={"flex"}
          alignItems={"center"}
          justifyContent={"space-between"}
        >
          <Grid size={{ xs: 12, md: 6 }}>
            <Typography
              fontSize={"14px"}
              fontWeight={500}
              fontFamily={"Mulish"}
              marginLeft={1}
            >
              Quick Commerce
            </Typography>
          </Grid>
          <Grid
            size={{ xs: 12, md: 6 }}
            sx={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <Box
              sx={{
                gap: 2,
                display: "flex",
                alignItems: "center",
                border: "1px solid #dedede",
                borderRadius: "10px",
                padding: "5px 10px",
                height: "40px",
              }}
            >
              <img src="/images/ChartLine.png" />
              <img src="/images/toggle.png" />
            </Box>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 2,
                border: "1px solid #dedede",
                borderRadius: "10px",
                padding: "5px 10px",
                ml: 2,
                height: "40px",
              }}
            >
              <img src="/images/calender.png" />
              <Typography>Aug 01, 024 - Aug 03, 2024</Typography>

              <IconButton>
                <KeyboardArrowDownIcon />
              </IconButton>
            </Box>
          </Grid>
        </Grid>

        <Divider sx={{ width: "100%" }} />

        <Grid
          padding={"10px 9px"}
          display={"flex"}
          alignItems={"center"}
          justifyContent={"space-between"}
        >
          <Grid size={{ xs: 12, md: 6 }}>
            <Box
              sx={{
                display: "flex",
                gap: 2,
                border: "1px solid #031B151A",
                borderRadius: "14px",
                padding: "5px",
              }}
            >
              <Box
                display={"flex"}
                alignItems={"center"}
                sx={{
                  backgroundColor: "#DFEAE8",
                  borderRadius: "10px",
                  padding: "4px 10px",
                  gap: 1,
                }}
              >
                <img src="/images/blinkit.png" />
                <Typography
                  fontSize={"14px"}
                  fontWeight={500}
                  fontFamily={"Mulish"}
                >
                  Blinkit
                </Typography>
              </Box>
              <Box
                display={"flex"}
                alignItems={"center"}
                sx={{
                  borderRadius: "10px",
                  padding: "4px 10px",
                  gap: 1,
                }}
              >
                <img src="/images/zepto.png" />
                <Typography
                  fontSize={"14px"}
                  fontWeight={500}
                  fontFamily={"Mulish"}
                >
                  Zepto
                </Typography>
              </Box>
              <Box
                display={"flex"}
                alignItems={"center"}
                sx={{
                  borderRadius: "10px",
                  padding: "4px 10px",
                  gap: 1,
                }}
              >
                <img src="/images/instamart.png" />
                <Typography
                  fontSize={"14px"}
                  fontWeight={500}
                  fontFamily={"Mulish"}
                >
                  Instamart
                </Typography>
              </Box>
            </Box>
          </Grid>
        </Grid>

        <Divider sx={{ width: "100%" }} />
        <Charts />

        <Grid container>
          <Grid size={{ xs: 12, md: 12 }}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                padding: "10px 20px",
              }}
            >
              <DynamicTable data={jsonData} title="SKU level data" />
            </Box>
          </Grid>
        </Grid>
        <Grid container>
          <Grid size={{ xs: 12, md: 12 }}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                padding: "10px 20px",
              }}
            >
              <DynamicTable data={jsonData} title="City level data" />
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}
