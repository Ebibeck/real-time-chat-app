import Sidebar from "./components/sidebar";
import "./globals.css";

export const metadata = {
  title: "Real-Time-Chat-App",
  description: "chat with friends",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <div className="grid grid-flow-col h-screen w-screen">
          <div className="grid col-span-2"><Sidebar /></div>
          <div className="grid col-span-10">{children}</div>
        </div>
      </body>
    </html>
  );
}
