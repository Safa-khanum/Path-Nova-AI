import Sidebar from '../components/Sidebar';

function DashboardLayout({ children }) {
  return (
    <div className="flex min-h-screen bg-gray-50">
      <Sidebar />
      <main className="flex-1 p-6 md:p-8 md:ml-0">
        {children}
      </main>
    </div>
  );
}

export default DashboardLayout;
