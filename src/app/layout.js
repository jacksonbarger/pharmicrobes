import "./globals.css";
import Sidebar from "@/components/Sidebar";

export const metadata = {
  title: "PharMicrobes — Med Micro Study Hub",
  description: "Interactive medical microbiology study guide covering bacterial pathogenesis, classification, virulence factors, and antibiotic resistance.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Sidebar />
        <main className="lg:ml-60 min-h-screen">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 py-6 pt-14 lg:pt-6">
            {children}
          </div>
        </main>
      </body>
    </html>
  );
}
