import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import PropertyList from "./components/PropertyList";
import PropertyDetails from "./components/PropertyDetails";
import TopNavBar from "./components/TopNavBar";
import { Layout } from "antd";

const { Header, Content } = Layout;

function App() {
  return (
    <Router>
      <Layout className="App" style={{ minHeight: "100vh" }}>
        <Header className="header">
          <TopNavBar />
        </Header>
        <Layout>
          <Content className="content">
            <Routes>
              <Route path="/" element={<PropertyList />} />
              <Route path="/details" element={<PropertyDetails />} />
            </Routes>
          </Content>
        </Layout>
      </Layout>
    </Router>
  );
}

export default App;
