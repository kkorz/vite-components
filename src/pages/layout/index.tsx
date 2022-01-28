import { Layout } from "@arco-design/web-react";
import "./index.less";

import SiderComponent from "./Sider";
import ContentComponent from "./Content";

import NewYear from "@/components/NewYear";

const Sider = Layout.Sider;
const Header = Layout.Header;
const Content = Layout.Content;

function LayoutComponent() {
  return (
    <div className="layout-basic">
      <Layout>
        <Sider resizeDirections={["right"]} style={{ minWidth: 240, maxWidth: 500 }}>
          <SiderComponent />
        </Sider>

        <Layout>
          <Header>宠辱不惊，泰然自若 —— KK</Header>
          <Content>
            <ContentComponent>
              <NewYear />
            </ContentComponent>
          </Content>
        </Layout>
      </Layout>
    </div>
  );
}

export default LayoutComponent;
