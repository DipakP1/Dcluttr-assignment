"use client";

import {
  AppBar,
  Toolbar,
  Typography,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Box,
  IconButton,
  Stack,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  ListSubheader,
  ListItemButton,
  ListItemIcon,
  Collapse,
  Divider,
  Icon,
} from "@mui/material";
import UnfoldMoreIcon from "@mui/icons-material/UnfoldMore";
import KeyboardDoubleArrowLeftIcon from "@mui/icons-material/KeyboardDoubleArrowLeft";
import KeyboardDoubleArrowRightSharpIcon from "@mui/icons-material/KeyboardDoubleArrowRightSharp";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useState } from "react";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import { StarBorder } from "@mui/icons-material";
import GroupIcon from "@mui/icons-material/Group";

export const Sidebar = () => {
  const [open, setOpen] = useState(true);
  const [activeItem, setActiveItem] = useState("Quick Commerce");
  const [isCollapsed, setIsCollapsed] = useState(false);

  const handleClick = () => {
    setOpen(!open);
  };
  const toggleSidebar = () => {
    setIsCollapsed((prev) => !prev);
  };

  const handleItemClick = (item) => {
    setActiveItem(item);
  };
  return (
    <Drawer
      variant="permanent"
      sx={{
        width: isCollapsed ? 70 : 350,
        flexShrink: 0,

        "& .MuiDrawer-paper": {
          width: isCollapsed ?70 : 350,
          boxSizing: "border-box",
          border: "none",
          scrollbarWidth: "none",

          "&::-webkit-scrollbar": {
            display: "none",
          },
        },
      }}
    >
      {isCollapsed && (
        <Box
          display="flex"
          justifyContent="flex-end"
          alignItems="center"
          sx={{ px: 1, pt: 1 }}
        >
          <IconButton onClick={toggleSidebar}>
            {isCollapsed ? (
              <KeyboardDoubleArrowLeftIcon
                style={{ transform: "rotate(180deg)" }}
              />
            ) : (
              <KeyboardDoubleArrowLeftIcon />
            )}
          </IconButton>
        </Box>
      )}
      <Box
        sx={{
          display: "flex",
          alignItems: "start",
          flexDirection: "row",
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            height: "100vh",
            flexDirection: "column",
            gap: "20px",
            width: "60px",
            marginRight: 1,
            marginLeft: 1,
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              flexDirection: "column",
              gap: "20px",
            }}
          >
            <IconButton style={{ marginTop: "20px" }}>
              <img src="/images/b1.png" alt="" />
            </IconButton>
            <IconButton>
              <img src="/images/b2.png" alt="" />
            </IconButton>
            <IconButton>
              <img src="/images/b3.png" alt="" />
            </IconButton>
            <IconButton>
              <img src="/images/b4.png" alt="" />
            </IconButton>
          </Box>

          <Box
            display={"flex"}
            flexDirection={"column"}
            gap={2}
            alignItems={"center"}
            width={"60px"}
            mb={2}
          >
            <IconButton>
              <img src="/images/users.png" alt="" />
            </IconButton>
            <IconButton>
              <img src="/images/user1.png" alt="" />
            </IconButton>
          </Box>
        </Box>
        <Box>
          <Stack direction={"row"} gap={2} mt={2}>
            <Box
              display={"flex"}
              alignItems={"center"}
              sx={{
                border: "1px solid #dedede",
                borderRadius: "10px",
                padding: "4px 5px",
                gap: 2,
              }}
            >
              <img src="/images/user.png" alt="" />
              <Typography
                sx={{
                  fontSize: "14px",
                  fontWeight: "600",
                  fontFamily: "Mulish",
                }}
              >
                Test_brand
              </Typography>
              <IconButton>
                <UnfoldMoreIcon color="#00000" />
              </IconButton>
            </Box>
            <IconButton onClick={toggleSidebar}>
              {isCollapsed ? (
                <KeyboardDoubleArrowLeftIcon
                  style={{ transform: "rotate(180deg)" }}
                />
              ) : (
                <KeyboardDoubleArrowLeftIcon />
              )}
            </IconButton>
          </Stack>
          <Box
            sx={{
              backgroundColor: "#F8F8F8",
              height: "90vh",
              borderRadius: "2px",
              marginTop: "15px",
              width: "100%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            {/* Top Menu List */}
            <List
              sx={{
                bgcolor: "#F8F8F8",
                mt: 2,
                ml: 1.5,
                mr: 1,
              }}
              component="nav"
              aria-labelledby="nested-list-subheader"
            >
              {/* Overview */}
              <ListItemButton sx={{ gap: 1 }}>
                <ListItemIcon sx={{ minWidth: "30px" }}>
                  <img src="/images/home.png" alt="" />
                </ListItemIcon>
                <ListItemText
                  primary="Overview"
                  primaryTypographyProps={{
                    sx: {
                      fontSize: "14px",
                      fontWeight: 500,
                      fontFamily: "Mulish",
                    },
                  }}
                />
              </ListItemButton>

              {/* Channels */}
              <ListItemButton onClick={handleClick} sx={{ gap: 1 }}>
                <ListItemIcon sx={{ minWidth: "30px" }}>
                  <img src="/images/channel.png" alt="" />
                </ListItemIcon>
                <ListItemText
                  primary="Channels"
                  primaryTypographyProps={{
                    sx: {
                      fontSize: "14px",
                      fontWeight: 500,
                      fontFamily: "Mulish",
                    },
                  }}
                />
                {open ? <ExpandLessIcon /> : <ExpandMoreIcon />}
              </ListItemButton>

              <Collapse in={open} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                  <ListItemButton sx={{ pl: 8, gap: 1 }}>
                    <ListItemText
                      primary="Meta Ads"
                      primaryTypographyProps={{
                        sx: {
                          fontSize: "14px",
                          fontWeight: 500,
                          fontFamily: "Mulish",
                        },
                      }}
                    />
                  </ListItemButton>
                  <ListItemButton sx={{ pl: 8, gap: 1 }}>
                    <ListItemText
                      primary="Google Ads"
                      primaryTypographyProps={{
                        sx: {
                          fontSize: "14px",
                          fontWeight: 500,
                          fontFamily: "Mulish",
                        },
                      }}
                    />
                  </ListItemButton>
                  <ListItemButton
                    sx={{
                      pl: 8,
                      gap: 1,
                      bgcolor:
                        activeItem === "Quick Commerce"
                          ? "#DFEAE8"
                          : "transparent",
                      borderRadius:
                        activeItem === "Quick Commerce" ? "10px" : "none",
                    }}
                  >
                    <ListItemText
                      primary="Quick Commerce"
                      primaryTypographyProps={{
                        sx: {
                          fontSize: "14px",
                          fontWeight: 500,
                          fontFamily: "Mulish",
                          color:
                            activeItem === "Quick Commerce"
                              ? "#027056"
                              : "inherit",
                        },
                      }}
                    />
                  </ListItemButton>
                </List>
              </Collapse>

              {/* Creatives */}
              <ListItemButton sx={{ gap: 1 }}>
                <ListItemIcon sx={{ minWidth: "30px" }}>
                  <img src="/images/creative.png" alt="" />
                </ListItemIcon>
                <ListItemText
                  primary="Creatives"
                  primaryTypographyProps={{
                    sx: {
                      fontSize: "14px",
                      fontWeight: 500,
                      fontFamily: "Mulish",
                    },
                  }}
                />
              </ListItemButton>
            </List>

            {/* Bottom Help & Settings */}
            <Box sx={{ px: 2, pb: 2 }}>
              <List>
                <ListItemButton sx={{ gap: 1 }}>
                  <ListItemIcon sx={{ minWidth: "30px" }}>
                    <img src="/images/help.png" alt="" />
                  </ListItemIcon>
                  <ListItemText
                    primary="Help"
                    primaryTypographyProps={{
                      sx: {
                        fontSize: "14px",
                        fontWeight: 500,
                        fontFamily: "Mulish",
                      },
                    }}
                  />
                </ListItemButton>

                <ListItemButton sx={{ gap: 1 }}>
                  <ListItemIcon sx={{ minWidth: "30px" }}>
                    <img src="/images/setting.png" alt="" />
                  </ListItemIcon>
                  <ListItemText
                    primary="Settings"
                    primaryTypographyProps={{
                      sx: {
                        fontSize: "14px",
                        fontWeight: 500,
                        fontFamily: "Mulish",
                      },
                    }}
                  />
                </ListItemButton>
              </List>
            </Box>
          </Box>
        </Box>
      </Box>
    </Drawer>
  );
};
