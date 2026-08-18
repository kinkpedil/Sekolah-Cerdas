import "./globals.css";

export const metadata = {
  title: "Sekolah Cerdas",
  description: "Ruang belajar digital yang aman dan terarah.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <body>{children}</body>
    </html>
  );
}
