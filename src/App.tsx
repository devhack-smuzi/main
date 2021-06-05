import Layout, { Footer } from "antd/lib/layout/layout";
import { Header, Sidebar } from "components";

import React from "react";

const App = () => {
  return (
    <Layout>
      <Header />
      <Sidebar />
      <Footer>Footer</Footer>
    </Layout>
  );
};

export default App;
