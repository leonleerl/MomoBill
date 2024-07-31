import { getBillList } from "@/store/modules/billStore";
import { Button } from "antd-mobile";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Outlet } from "react-router-dom";

const Layout = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getBillList());
  }, [dispatch]);
  return (
    <>
      <Outlet />
      <div>我是layout</div>
      <Button color="primary">测试全局</Button>
      <div className="purple">
        <Button color="danger">测试局部</Button>
      </div>
    </>
  );
};

export default Layout;
