import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
          {children}
          <Toaster /> {/* inherited by children */}
      </body>
    </html>
  );
}