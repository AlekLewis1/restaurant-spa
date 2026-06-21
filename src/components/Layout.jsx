import Header from "./Header.jsx";
import Footer from "./Footer.jsx";

export default function Layout({ children }) {
  return (
    <>
      <Header />
      <main className="container mt-4">
        {children}
      </main>
      <Footer />
    </>
  );
}
