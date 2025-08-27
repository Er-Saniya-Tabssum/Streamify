import Sidebar from "./Sidebar";
import Navbar from "./Navbar";

const Layout = ({ children, showSidebar = false }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <div className="flex flex-1">
        {showSidebar && <Sidebar />}

        <div className="flex-1 flex flex-col">
          <Navbar />

          <main className="flex-1 overflow-y-auto">{children}</main>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-base-200 border-t border-base-300 py-3 px-4">
        <div className="container mx-auto">
          <div className="flex justify-between items-center">
            <p className="text-sm text-base-content opacity-70">
              Developed by Saniya Tabssum
            </p>
            <p className="text-sm text-base-content opacity-70">
              © {new Date().getFullYear()} Streamify. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};
export default Layout;