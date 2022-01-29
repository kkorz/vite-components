import { BrowserRouter, useRoutes } from "react-router-dom";
import routes from "@/routes";
import Layout from "@/layout";

function RouteElement() {
  const element = useRoutes(routes);
  return element;
}

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <RouteElement />
      </Layout>
    </BrowserRouter>
  );
}

export default App;
