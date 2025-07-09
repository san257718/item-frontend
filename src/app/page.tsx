import Header from "../components/header/page";
import Main from "../components/main/page";
import Footer from "../components/footer/page";

export default function Home() {
  return (
    <div className="w-full min-h-screen">
      <div className="h-16">
        <Header />
      </div>
      <Main />
      <Footer />
    </div>
  );
}
