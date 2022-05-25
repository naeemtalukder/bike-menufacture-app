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
import AddReview from './Pages/Dashboard/AddReview';


function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="blogs" element={<Blogs />} />
        <Route path="reviews" element={<Reviews />} />
        <Route path="dashboard" element={
          <RequireAuth><Dashboard /></RequireAuth>
        }>
          <Route index element={<MyOrders></MyOrders>}></Route>
          <Route path='addReview' element={<AddReview></AddReview>}></Route>
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
