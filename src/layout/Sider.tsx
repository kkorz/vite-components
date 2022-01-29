import { Menu } from "@arco-design/web-react";
import { IconSun, IconThumbUp } from "@arco-design/web-react/icon";
import { Link } from "react-router-dom";

const MenuItem = Menu.Item;
const SubMenu = Menu.SubMenu;

function SiderComponent() {
  return (
    <div className="slider-component">
      <Menu
        style={{ height: "100%" }}
        hasCollapseButton
        // defaultOpenKeys={["/"]}
        defaultSelectedKeys={["/"]}
      >
        <MenuItem key="/">
          <Link to="/">Welcome</Link>
        </MenuItem>

        <SubMenu key="/festival" title="节日">
          <MenuItem key="/festival/newyear">
            <IconSun />
            <Link to="/festival/newyear">春节</Link>
          </MenuItem>
          <MenuItem key="/festival/midautumn">
            <IconSun />
            <Link to="/festival/midautumn">中秋</Link>
          </MenuItem>
        </SubMenu>

        <SubMenu key="/components" title="组件">
          <MenuItem key="/components/button">
            <IconThumbUp />
            <Link to="/components/button">按钮 Button</Link>
          </MenuItem>
        </SubMenu>
      </Menu>
    </div>
  );
}

export default SiderComponent;
