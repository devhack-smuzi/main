import { Layout } from 'antd';

import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';

import React from 'react';

const App = () => {
  return (
    <Layout>
      <Header />
      <Sidebar />
    </Layout>
  );
};

export default App;
