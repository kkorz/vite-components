import { Menu } from "@arco-design/web-react";
import { IconSun, IconThumbUp } from "@arco-design/web-react/icon";

const MenuItem = Menu.Item;
const SubMenu = Menu.SubMenu;

function SiderComponent() {
  return (
    <div className="slider-component">
      <Menu
        style={{ height: "100%" }}
        // hasCollapseButton
        defaultOpenKeys={["0"]}
        defaultSelectedKeys={["0"]}
      >
        <MenuItem key="0">Welcome</MenuItem>
        <SubMenu
          key="1"
          title={
            <>
              <IconSun /> 节日
            </>
          }
        >
          <MenuItem key="1_0">春节</MenuItem>
          <MenuItem key="1_1">中秋</MenuItem>
        </SubMenu>
        <SubMenu
          key="2"
          title={
            <>
              <IconThumbUp /> 组件
            </>
          }
        >
          <MenuItem key="2_0">Button按钮</MenuItem>
          <MenuItem key="2_1">Menu菜单</MenuItem>
        </SubMenu>
      </Menu>
    </div>
  );
}

export default SiderComponent;
