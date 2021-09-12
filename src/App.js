import React, { Component, useState } from "react";
import "antd/dist/antd.css";
import {
  Layout,
  Avatar,
  Typography,
  Card,
  Col,
  Row,
  List,
  Button,
} from "antd";
import {
  FaMapMarkerAlt,
  FaEnvelopeOpen,
  FaGraduationCap,
  FaReact,
} from "react-icons/fa";
import { ArrowDownOutlined } from "@ant-design/icons";
import { SocialIcon } from "react-social-icons";
import profilePic from "./profile.jpg";
import Background from "./codeback.jpg";
import { ReactComponent as CodeSvg } from './static/code_icon.svg';
import { ReactComponent as ToolSvg } from './static/tool_icon.svg';
import { ReactComponent as ProjectIcon } from './static/project_icon.svg';

import { Timeline } from "antd";
import { ClockCircleOutlined } from '@ant-design/icons';


const { Content, Footer } = Layout;
const { Title } = Typography;
const { Meta } = Card;
const technologies = [
  "Python",
  "Java",
  "C/C++",
  "Ruby on Rails",
  "JavaScript",
  "React",
  "Android",
];

const skills = [
  "Google Cloud Platform",
  "AWS",
  "Heroku",
  "Docker",
  "Machine Learning",
  "SQL",
];

const project = [
  "Basketball Messenger Bot",
  "Pacman Contest",
  "In Progress: Splyce",
];



export default function App() {
  const [buttonClicked, setButtonClicked] = useState(false);

  function scrollDown(){
    setButtonClicked(true);
    var elmnt = document.getElementById("scroll-down");
    elmnt.scrollIntoView();
    }

    return (
      <Layout>
        <Content style={{ height: "100%"}}>
          <div
            style={{
              backgroundImage: `url(${Background})`,
              backgroundSize: "cover",
              overflow: "visible",
            }}
          >
            <br />
            <br />
            <div style={{ display: "flex", justifyContent: "center" }}>
              <Avatar
                style={{ alignItems: "middle" }}
                size={200}
                src={profilePic}
              />
            </div>

            <br />
            <br />
            <br />
            <br />
          </div>
          <br />

          <div style={{ display: "flex", justifyContent: "center" }}>
            <Title>Jack Ryan</Title>
          </div>

          <div style={{ display: "flex", justifyContent: "center" }}>
            <p>
              {" "}
              <FaMapMarkerAlt /> Melbourne, Australia{" "}
            </p>
          </div>

          <div style={{ display: "flex", justifyContent: "center" }}>
            <p>
              {" "}
              <FaEnvelopeOpen />{" "}
              <a href="mailto:jackryan1998@hotmail.com">
                jackryan1998@hotmail.com
              </a>
            </p>
          </div>

          <div style={{ display: "flex", justifyContent: "center" }}>
            <p>
              {" "}
              <FaGraduationCap /> Bachelor of Computer Science @ RMIT University{" "}
            </p>
          </div>

          <div style={{ display: "flex", justifyContent: "center" }}>
            <SocialIcon
              style={{ marginRight: "10px" }}
              url="https://www.linkedin.com/in/jryan0/"
            />
            <SocialIcon
              style={{ marginLeft: "10px" }}
              url="https://github.com/jry-an"
            />
          </div>
          <br />
          <br />
         
          <Row justify="space-around">
            <Col span={6}>
              <Card hoverable 
              cover={<ToolSvg style={{ margin: "20px 0px 20px 0px", height: "12vh"}}/>}
              >
                <Meta title="Europe Street beat" />
              </Card>
            </Col>

            <Col span={6}>
              <Card hoverable 
              cover={<CodeSvg style={{ margin: "20px 0px 20px 0px", height: "12vh"}}/>}
              >
                <Meta title="Code" />
              </Card>
            </Col>

            <Col span={6}>
              <Card hoverable 
              cover={<ProjectIcon style={{ margin: "20px 0px 20px 0px", height: "12vh"}}/>}
              >
                <Meta title="Projects" />
              </Card>
            </Col>
          </Row>

          <div class="scroll-down-button" style={{margin: "15vh", display: "flex", justifyContent: "center" }}>
           <Button size="large" onClick={() => scrollDown()} type="primary" icon={<ArrowDownOutlined />}  />
          </div>


          <div id="scroll-down">
          <React.Fragment>
          <div className="site-card-wrapper">
            <Row justify="space-around">
              <Col span={7}>
                <Card title="Technologies" hoverable={true} bordered={false}>
                  <List
                    dataSource={technologies}
                    renderItem={(item) => <List.Item>{item}</List.Item>}
                  />
                </Card>
              </Col>
              <Col span={7}>
                <Card title="Skills" hoverable={true} bordered={false}>
                  <List
                    dataSource={skills}
                    renderItem={(item) => <List.Item>{item}</List.Item>}
                  />
                </Card>
              </Col>
              <Col span={7}>
                <Card title="Projects" hoverable={true} bordered={false}>
                  <List
                    dataSource={project}
                    renderItem={(item) => <List.Item>{item}</List.Item>}
                  />
                </Card>
              </Col>
            </Row>
          </div>

          <br />
          <br />

          <Footer
          style={{
            display: "flex",
            justifyContent: "center",
            left: 0,
            bottom: 0,
          }}
        >
          <p>
            This website was built using React <FaReact />
          </p>{" "}
          <p>
            {" "}
            + <a href={"https://ant.design/"}> ant.design</a>{" "}
          </p>{" "}
        </Footer>
        </React.Fragment>
        </div>

        </Content>
       
      </Layout>
    );
}
