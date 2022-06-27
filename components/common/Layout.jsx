import Navbar from './Navbar';
import Footer from './Footer';

const Layout = ({ children }) => (
  <div className='flex min-h-screen flex-col justify-between p-3 bg-zinc-900 text-gray-300'>
    <Navbar />
    {children}
    <Footer />
  </div>
);

export default Layout;