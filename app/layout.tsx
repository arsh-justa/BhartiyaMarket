import '@/styles/globals.css';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <div className="bg-red-500 text-white p-4 rounded-lg shadow-md">
  Tailwind is working!
</div>

      <body className="font-sans bg-white text-gray-800">
        <header className="p-4 bg-blue-600 text-white text-xl font-semibold">Company Leaders</header>
        {children}
        <footer className="p-4 text-center text-sm text-gray-500">© 2025 Company Leaders</footer>
      </body>
    </html>
  );
}