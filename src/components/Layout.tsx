import Header from "./Header";
import Footer from "./Footer";
import EnquiryModal from "./EnquiryModal";
import { EnquiryProvider } from "./EnquiryContext";

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <EnquiryProvider>
      <a href="#main" className="skip-link">
        Skip to content
      </a>
      <div className="flex min-h-screen flex-col bg-cream text-ink">
        <Header />
        {/*
          Header is fixed; give pages a consistent offset.
          Mobile dock needs bottom padding so content doesn't hide behind it.
        */}
        <main id="main" className="flex-1 pb-20 pt-20 md:pb-0 md:pt-24">
          {children}
        </main>
        <Footer />
      </div>
      <EnquiryModal />
    </EnquiryProvider>
  );
};

export default Layout;
