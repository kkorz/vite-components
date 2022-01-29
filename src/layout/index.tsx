import { ReactNode } from "react";
import { Layout } from "@arco-design/web-react";
import "./styles/index.less";

import SiderComponent from "./Sider";
import ContentComponent from "./Content";

const Sider = Layout.Sider;
const Header = Layout.Header;
const Content = Layout.Content;

interface Iprops {
  children: ReactNode;
}

function LayoutComponent({ children }: Iprops) {
  return (
    <div className="layout-basic">
      <Layout>
        <Sider>
          <SiderComponent />
        </Sider>

        <Layout>
          <Header>宠辱不惊，泰然自若 —— KK</Header>
          <Content>
            <ContentComponent>{children}</ContentComponent>
          </Content>
        </Layout>
      </Layout>
    </div>
  );
}

export default LayoutComponent;
