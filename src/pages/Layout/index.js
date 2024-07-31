import { Button } from "antd-mobile";
import { Outlet } from "react-router-dom";

const Layout = () => {
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
