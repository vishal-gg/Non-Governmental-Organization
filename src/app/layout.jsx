import "./globals.scss";
import { ThemeProvider } from "./contexts/ThemeProvider";
import { AuthProvider } from "./contexts/AuthProvider";
import ScrollTop from "./components/scrollTop/ScrollTop";
import { Toaster } from "sonner";
import Navbar from "./components/navbar/Navbar";
import { GalleryProvider } from "./contexts/GalleryProvider";
import Footer from './components/footer/Footer'

export const metadata = {
  title: "Ek Nayi Soch - non governmental organization",
  description: "Ek Nayi Soch is a non-governmental organization dedicated to fostering positive change and empowerment within communities. Through various initiatives and programs, we strive to address social issues, promote education, and provide support to those in need. Join us in our mission to create a better tomorrow.",
}

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
