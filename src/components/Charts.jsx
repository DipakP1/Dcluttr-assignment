"use client";
import { Box, Divider, Grid, IconButton, Typography } from "@mui/material";
import React from "react";
import QuestionMarkIcon from "@mui/icons-material/QuestionMark";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import SouthIcon from "@mui/icons-material/South";
import NorthIcon from "@mui/icons-material/North";

const Charts = () => {
  return (
    <Grid m={2} container spacing={2}>
      <Grid size={{ xs: 12, md: 4 }}>
        <Box
          sx={{
            border: "1px solid #dedede",
            borderRadius: "10px",
            padding: "15px",
            height: "100%",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              borderBottom: "1px solid #dedede",
              pb: 1,
            }}
          >
            <Typography
              sx={{
                fontSize: "14px",
                fontWeight: 600,
                fontFamily: "Mulish",
              }}
            >
              Sales (MRP)
            </Typography>

            <IconButton size="small">
              <QuestionMarkIcon sx={{ fontSize: "14px" }} />
            </IconButton>
          </Box>
          <Box
            display={"flex"}
            alignItems={"center"}
            justifyContent={"space-between"}
            margin={"10px 0"}
          >
            <Typography fontSize={"24px"} fontWeight={700}>
              125.49
            </Typography>
            <Typography
              textAlign={"right"}
              sx={{ color: "#1D874F", fontWeight: 700, fontSize: "15px" }}
            >
              {" "}
              2.4%
              <br />
              <span style={{ color: "#031B1599" }}>vs 119.69 last month</span>
            </Typography>
          </Box>
          <Box width={"100%"} my={3}>
            <img width={"100%"} src="/images/chart.png" />
          </Box>
          <Divider sx={{ width: "100%" }} />
          <Box display={"flex"} alignItems={"center"} gap={2} mt={2}>
            <Typography
              sx={{
                fontSize: "13px",
                fontWeight: 400,
                fontFamily: "Mulish",
                display: "flex",
                alignItems: "center",
                gap: 1,
              }}
            >
              <FiberManualRecordIcon
                sx={{ color: "green", fontSize: "12px" }}
              />
              This Month
            </Typography>
            <Typography
              sx={{
                fontSize: "13px",
                fontWeight: 400,
                fontFamily: "Mulish",
                display: "flex",
                alignItems: "center",
                gap: 1,
              }}
            >
              <FiberManualRecordIcon sx={{ color: "red", fontSize: "12px" }} />
              Last Month
            </Typography>
          </Box>
        </Box>
      </Grid>
      <Grid size={{ xs: 12, md: 4 }}>
        <Box
          sx={{
            border: "1px solid #dedede",
            borderRadius: "10px",
            padding: "15px",
            height: "100%",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Box
            sx={{
              width: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              borderBottom: "1px solid #dedede",
              pb: 1,
            }}
          >
            <Typography
              sx={{
                fontSize: "14px",
                fontWeight: 600,
                fontFamily: "Mulish",
              }}
            >
              Sales (MRP)
            </Typography>

            <IconButton size="small">
              <QuestionMarkIcon sx={{ fontSize: "14px" }} />
            </IconButton>
          </Box>
          <Box
            display={"flex"}
            alignItems={"center"}
            justifyContent={"space-between"}
            margin={"10px 0"}
          >
            <Typography fontSize={"24px"} fontWeight={700}>
              125.49
            </Typography>
            <Typography
              textAlign={"right"}
              sx={{ color: "#1D874F", fontWeight: 700, fontSize: "15px" }}
            >
              {" "}
              2.4%
              <br />
              <span style={{ color: "#031B1599" }}>vs 119.69 last month</span>
            </Typography>
          </Box>
          <Box width={"100%"} my={3}>
            <img width={"100%"} src="/images/chart.png" />
          </Box>
          <Divider sx={{ width: "100%" }} />
          <Box display={"flex"} alignItems={"center"} gap={2} mt={2}>
            <Typography
              sx={{
                fontSize: "13px",
                fontWeight: 400,
                fontFamily: "Mulish",
                display: "flex",
                alignItems: "center",
                gap: 1,
              }}
            >
              <FiberManualRecordIcon
                sx={{ color: "green", fontSize: "12px" }}
              />
              This Month
            </Typography>
            <Typography
              sx={{
                fontSize: "13px",
                fontWeight: 400,
                fontFamily: "Mulish",
                display: "flex",
                alignItems: "center",
                gap: 1,
              }}
            >
              <FiberManualRecordIcon sx={{ color: "red", fontSize: "12px" }} />
              Last Month
            </Typography>
          </Box>
        </Box>
      </Grid>

      <Grid size={{ xs: 12, md: 4 }}>
        <Box
          sx={{
            border: "1px solid #dedede",
            borderRadius: "10px",
            padding: "15px",
            height: "100%",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              borderBottom: "1px solid #dedede",
              pb: 1,
            }}
          >
            <Typography
              sx={{
                fontSize: "14px",
                fontWeight: 600,
                fontFamily: "Mulish",
              }}
            >
              Sales (MRP)
            </Typography>

            <IconButton size="small">
              <QuestionMarkIcon sx={{ fontSize: "14px" }} />
            </IconButton>
          </Box>
          <Box textAlign={"center"} my={4} width={"100%"}>
            <img width={"50%"} src="/images/piechart.png" />
          </Box>

          <Box
            display={"flex"}
            alignItems={"center"}
            gap={2}
            mt={2}
            justifyContent={"space-between"}
            width={"100%"}
          >
            <Typography
              sx={{
                fontSize: "13px",
                fontWeight: 400,
                fontFamily: "Mulish",
                display: "flex",
                alignItems: "center",
                gap: 1,
              }}
            >
              <FiberManualRecordIcon
                sx={{ color: "#6C4FED", fontSize: "12px" }}
              />
              New Delhi
            </Typography>
            <Box
              sx={{
                fontSize: "13px",
                fontWeight: 400,
                fontFamily: "Mulish",
                display: "flex",
                alignItems: "center",
                gap: 1,
              }}
            >
              <Typography
                fontSize={"13px"}
                fontWeight={700}
                fontFamily={"Mulish"}
              >
                ₹26.5L
              </Typography>
              <Typography
                fontSize={"13px"}
                fontWeight={400}
                fontFamily={"Mulish"}
                backgroundColor="#F7F7F7"
                color="#7D7D7E"
                borderRadius={"5px"}
                padding={"2px 5px"}
              >
                35%
              </Typography>

              <Typography>
                <NorthIcon sx={{ fontSize: "14px" }} />
                1.2%
              </Typography>
            </Box>
          </Box>
          <Box
            display={"flex"}
            alignItems={"center"}
            gap={2}
            mt={2}
            justifyContent={"space-between"}
            width={"100%"}
          >
            <Typography
              sx={{
                fontSize: "13px",
                fontWeight: 400,
                fontFamily: "Mulish",
                display: "flex",
                alignItems: "center",
                gap: 1,
              }}
            >
              <FiberManualRecordIcon
                sx={{ color: "#EA6153", fontSize: "12px" }}
              />
              Mumbai
            </Typography>
            <Box
              sx={{
                fontSize: "13px",
                fontWeight: 400,
                fontFamily: "Mulish",
                display: "flex",
                alignItems: "center",
                gap: 1,
              }}
            >
              <Typography
                fontSize={"13px"}
                fontWeight={700}
                fontFamily={"Mulish"}
              >
                ₹36.4L
              </Typography>
              <Typography
                fontSize={"13px"}
                fontWeight={400}
                fontFamily={"Mulish"}
                backgroundColor="#F7F7F7"
                color="#7D7D7E"
                borderRadius={"5px"}
                padding={"2px 5px"}
              >
                23%
              </Typography>

              <Typography>
                <SouthIcon sx={{ fontSize: "14px" }} />
                3.3%
              </Typography>
            </Box>
          </Box>
          <Box
            display={"flex"}
            alignItems={"center"}
            gap={2}
            mt={2}
            justifyContent={"space-between"}
            width={"100%"}
          >
            <Typography
              sx={{
                fontSize: "13px",
                fontWeight: 400,
                fontFamily: "Mulish",
                display: "flex",
                alignItems: "center",
                gap: 1,
              }}
            >
              <FiberManualRecordIcon
                sx={{ color: "#F7C245", fontSize: "12px" }}
              />
              West Bengal
            </Typography>
            <Box
              sx={{
                fontSize: "13px",
                fontWeight: 400,
                fontFamily: "Mulish",
                display: "flex",
                alignItems: "center",
                gap: 1,
              }}
            >
              <Typography
                fontSize={"13px"}
                fontWeight={700}
                fontFamily={"Mulish"}
              >
                ₹12.2L
              </Typography>
              <Typography
                fontSize={"13px"}
                fontWeight={400}
                fontFamily={"Mulish"}
                backgroundColor="#F7F7F7"
                color="#7D7D7E"
                borderRadius={"5px"}
                padding={"2px 5px"}
              >
                21%
              </Typography>

              <Typography>
                <SouthIcon sx={{ fontSize: "14px" }} />
                2.3%
              </Typography>
            </Box>
          </Box>
          <Box
            display={"flex"}
            alignItems={"center"}
            gap={2}
            mt={2}
            justifyContent={"space-between"}
            width={"100%"}
          >
            <Typography
              sx={{
                fontSize: "13px",
                fontWeight: 400,
                fontFamily: "Mulish",
                display: "flex",
                alignItems: "center",
                gap: 1,
              }}
            >
              <FiberManualRecordIcon
                sx={{ color: "#D9D9D9", fontSize: "12px" }}
              />
              Others
            </Typography>
            <Box
              sx={{
                fontSize: "13px",
                fontWeight: 400,
                fontFamily: "Mulish",
                display: "flex",
                alignItems: "center",
                gap: 1,
              }}
            >
              <Typography
                fontSize={"13px"}
                fontWeight={700}
                fontFamily={"Mulish"}
              >
                ₹24.3L
              </Typography>
              <Typography
                fontSize={"13px"}
                fontWeight={400}
                fontFamily={"Mulish"}
                backgroundColor="#F7F7F7"
                color="#7D7D7E"
                borderRadius={"5px"}
                padding={"2px 5px"}
              >
                9%
              </Typography>

              <Typography>
                <NorthIcon sx={{ fontSize: "14px" }} />
                1.09%
              </Typography>
            </Box>
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
};

export default Charts;
