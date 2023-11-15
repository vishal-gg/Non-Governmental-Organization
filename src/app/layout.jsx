import "./globals.scss";
import { ThemeProvider } from "./contexts/ThemeProvider";
import { AuthProvider } from "./contexts/AuthProvider";
import ScrollTop from "./components/scrollTop/ScrollTop";
import { Toaster } from "sonner";
import Navbar from "./components/navbar/Navbar";
import { GalleryProvider } from "./contexts/GalleryProvider";
import Footer from './components/footer/Footer'

export const metadata = {
  title: "Non-Governmental Organization",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider>
          <AuthProvider>
            <Navbar />
            <GalleryProvider>{children}</GalleryProvider>
            <Footer />
          </AuthProvider>
        </ThemeProvider>
        <Toaster richColors position="top-center" />
        <ScrollTop />
      </body>
    </html>
  )
}
