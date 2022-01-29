import { Menu } from "@arco-design/web-react";
import { IconSun, IconThumbUp } from "@arco-design/web-react/icon";
import { useNavigate } from "react-router-dom";

const MenuItem = Menu.Item;
const SubMenu = Menu.SubMenu;

function SiderComponent() {
  const navigate = useNavigate();

  const linkToPage = (path: string) => {
    navigate(path);
  };

  return (
    <div className="slider-component">
      <Menu
        style={{ height: "100%" }}
        hasCollapseButton
        // defaultOpenKeys={["/"]}
        defaultSelectedKeys={["/"]}
        onClickMenuItem={linkToPage}
      >
        <MenuItem key="/">Welcome</MenuItem>

        <SubMenu key="/festival" title="节日">
          <MenuItem key="/festival/newyear">
            <IconSun />
            春节
          </MenuItem>
          <MenuItem key="/festival/midautumn">
            <IconSun />
            中秋
          </MenuItem>
        </SubMenu>

        <SubMenu key="/components" title="组件">
          <MenuItem key="/components/button">
            <IconThumbUp />
            按钮 Button
          </MenuItem>
        </SubMenu>
      </Menu>
    </div>
  );
}

export default SiderComponent;
