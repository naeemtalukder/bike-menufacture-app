import logo from './logo.svg';
import './App.css';
import Navbar from './Pages/Sheard/Navbar';
import { Routes, Route } from "react-router-dom";
import Home from './Pages/Home/Home';
import Blogs from './Pages/Blogs/Blogs';
import Login from './Pages/Sheard/Login';
import Dashboard from './Pages/Dashboard/Dashboard';
import Footer from './Pages/Sheard/Footer';
import Signup from './Pages/Sheard/Signup';
import RequireAuth from './Pages/Sheard/RequireAuth';
import NotFound from './Pages/Sheard/NotFound';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Reviews from './Pages/ReviewsPage/Reviews';
import MyOrders from './Pages/Dashboard/MyOrders';
import Payment from './Pages/Dashboard/Payment';
import AddReview from './Pages/Dashboard/AddReview';
import AllProducts from './Pages/AllProducts/AllProducts';
import AddProducts from './Pages/Dashboard/AddProducts';
import ManageProduct from './Pages/Dashboard/ManageProduct';
import Protfolio from './Pages/Protfolio/Protfolio';
import Order from './Pages/Home/Order';
import MyProfile from './Pages/Dashboard/MyProfile';
import MakeAdmin from './Pages/Dashboard/MakeAdmin';
import ManageAllOrder from './Pages/Dashboard/ManageAllOrder';


function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="blogs" element={<Blogs />} />
        <Route path="portfolio" element={<Protfolio />} />
        <Route path="reviews" element={<Reviews />} />
        <Route path="products" element={<AllProducts />} />
        <Route path='products/:productId' element={
          <RequireAuth>
            <Order />
          </RequireAuth>
        }></Route>
        <Route path="dashboard" element={
          <RequireAuth><Dashboard /></RequireAuth>
        }>
          <Route path='myOrder' element={<MyOrders></MyOrders>}></Route>
          <Route path='payment' element={<Payment></Payment>}></Route>
          <Route path='addReview' element={<AddReview></AddReview>}></Route>
          <Route path='addproduct' element={<AddProducts></AddProducts>}></Route>
          <Route index element={<MyProfile />}></Route>
          <Route path='makeAdmin' element={<MakeAdmin></MakeAdmin>}></Route>
          <Route path='manageProduct' element={<ManageProduct></ManageProduct>}></Route>
          <Route path='manageAllOrders' element={<ManageAllOrder />}></Route>
        </Route>
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<Signup />} />
        <Route path='*' element={<NotFound />}></Route>
      </Routes>
      <Footer />
      <ToastContainer />
    </div>
  );
}

export default App;
