import React from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";
import NavButton from "../../components/NavButton";
import Button from "../button";
import { logout } from "../../redux/reducers/adminAuth/adminAuth";
import { useDispatch } from "react-redux";

const AdminHeader = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const logoutHandler = () => {
    dispatch(logout());
    navigate("/login");
  };
  return (
    <>
      <nav className="bg-secondary flex items-center justify-between p-6">
        <div>
          <p className="self-start text-primary font-extrabold text-xl">
            پنل ادمین
          </p>
        </div>
        <div className="flex items-center gap-8">
          <Link to="/admin/productslist">
            <NavButton variant="admin">لیست محصولات</NavButton>
          </Link>
          <Link to="/admin/orderslist">
            <NavButton variant="admin">لیست سفارشات</NavButton>
          </Link>
          <NavButton variant="admin">موجودی و قیمت ها</NavButton>
        </div>
        <div>
          <Button onClick={logoutHandler}>خروج</Button>
        </div>
      </nav>
      <Outlet />
    </>
  );
};

export default AdminHeader;
