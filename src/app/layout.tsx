import "globals.css";
import { TopNavBar } from "components/TopNavBar";
import { Analytics } from "@vercel/analytics/react";

export const metadata = {
  title: "Erudite Resume Builder - Resume Builder and Parser",
  description:
    "Erudite Resume Builder is a powerful resume builder that allows anyone to create a modern professional resume in a few steps. For those who have an existing resume, the parser can help test and confirm its ATS readability.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <TopNavBar />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
