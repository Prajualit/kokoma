import { Montserrat } from "next/font/google";
import "./globals.css";
import { store } from "@/frontend/redux/Store.js";
import { Provider } from "react-redux";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["200", "300", "400", "700"], // specify weights if needed
});

export const metadata = {
  title: "Kokoma",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${montserrat.className} antialiased`}>
        <Provider store={store}>{children}</Provider>
      </body>
    </html>
  );
}
