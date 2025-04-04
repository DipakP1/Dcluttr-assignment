import { Geist, Geist_Mono, Mulish } from "next/font/google";
import "./globals.css";
import { Box } from "@mui/material";
import { Sidebar } from "@/components/Sidebar";

const mulish = Mulish({
  subsets: ["latin"],
  variable: "--font-mulish",
});

export const metadata = {
  title: "Dcluttr Asignment",
  description: "Dcluttr Asignment (Developed by Dipak patil)",
};

const MainLayout = ({ children }) => {
  return (
    <html lang="en">
      <body className={`${mulish.variable}`}>
        <Box sx={{ display: "flex", height: "100vh" }}>
          <Sidebar />
          <Box sx={{ flexGrow: 1, display: "flex", flexDirection: "column" }}>
           
            <Box sx={{ flexGrow: 1, p: 3, overflow: "auto" }}>{children}</Box>
          </Box>
        </Box>
      </body>
    </html>
  );
};

export default MainLayout;
