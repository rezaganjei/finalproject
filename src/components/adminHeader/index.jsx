import React, { useEffect, useState } from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";
import NavButton from "../../components/NavButton";
import Button from "../button";
import { logout } from "../../redux/reducers/adminAuth/adminAuth";
import { useDispatch, useSelector } from "react-redux";
import { AiOutlineClose } from "react-icons/ai";
import { GiHamburgerMenu } from "react-icons/gi";

const BurgerMenu = ({ isOpen, setIsOpen }) => {
  return (
    <>
      {isOpen && (
        <div
          onClick={(e) => {
            setIsOpen(false);
          }}
          className="min-h-[100vh] bg-black bg-opacity-60 w-full fixed top-0 right-0 z-50  md:hidden"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="w-[60%] bg-white min-h-[100vh]"
          >
            <button onClick={() => setIsOpen(false)} className="p-2">
              <AiOutlineClose />
            </button>

            <nav className="bg-secondary flex flex-col items-center justify-center h-[250px] gap-6">
              <div className="flex flex-col items-start gap-6">
                <Link to="/admin/productslist">
                  <NavButton variant="admin">لیست محصولات</NavButton>
                </Link>
                <Link to="/admin/orderslist">
                  <NavButton variant="admin">لیست سفارشات</NavButton>
                </Link>
              </div>
            </nav>
          </div>
        </div>
      )}
    </>
  );
};

const AdminHeader = () => {
  const accessToken = useSelector(
    (state) => state.adminAuth.adminAuth.accessToken
  );
  const [isBurgerMenuOpen, setIsBurgerMenuOpen] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const logoutHandler = () => {
    dispatch(logout());
  };

  useEffect(() => {
    if (!accessToken) {
      navigate("/login");
    }
  }, [accessToken]);
  return (
    <>
      <BurgerMenu isOpen={isBurgerMenuOpen} setIsOpen={setIsBurgerMenuOpen} />
      <nav className="bg-secondary flex items-center justify-between p-6">
        <div>
          <p className="self-start text-primary font-extrabold text-xl">
            پنل ادمین
          </p>
        </div>
        <button
          onClick={() => setIsBurgerMenuOpen(true)}
          className="block md:hidden p-2 m-auto text-[40px]"
        >
          <GiHamburgerMenu />
        </button>
        <div className="hidden md:flex items-center gap-8">
          <Link to="/admin/productslist">
            <NavButton variant="admin">لیست محصولات</NavButton>
          </Link>
          <Link to="/admin/orderslist">
            <NavButton variant="admin">لیست سفارشات</NavButton>
          </Link>
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
