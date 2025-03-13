import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";


const Home = () => {
    return (
        <div>
            <Header></Header>
            <Outlet></Outlet>
            <Footer></Footer>
            {/* Outlet সাধারণত React Router এ ব্যবহৃত একটি কম্পোনেন্ট, যা nested routes (অর্থাৎ, অভ্যন্তরীণ রাউটিং) ব্যবস্থাপনার জন্য ব্যবহৃত হয়।
             এটি মূলত parent route-এর ভিতরে child route-গুলোর content render করার জন্য ব্যবহৃত হয়। */}
        </div>
    );
};

export default Home;