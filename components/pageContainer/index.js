import Header from "../header";
import Footer from "../footer";

function PageContainer({ children }) {
  return (
    <div>
      <Header />
      {children}
      <Footer />
    </div>
  );
}

export default PageContainer;
