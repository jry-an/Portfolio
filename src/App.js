import React, {Component} from "react";
import 'antd/dist/antd.css';
import { Layout, Avatar, Typography, Card, Col, Row, List }  from 'antd';
import {FaMapMarkerAlt, FaEnvelopeOpen, FaGraduationCap, FaReact} from "react-icons/fa";
import profilePic from './profile.jpg'
import Background from './codeback.jpg'

const { Content, Footer } = Layout;
const { Title } = Typography;
const technologies = [
    'Python','Java','C/C++','Ruby on Rails', 'JavaScript', 'React', 'Android'
];

const skills = [
    'Google Cloud Platform', 'AWS', 'Heroku', 'Docker', 'Machine Learning', 'SQL'
];

const project = [
    'Basketball Messenger Bot', 'Pacman Contest', 'In Progress: Splyce'
];

export default class App extends Component{
    render() {
        return(
            <Layout>
                <Content style={{height: '100%', backgroundColor: "light-grey" }}>
                    <div style={{backgroundImage: `url(${Background})`, backgroundSize: 'cover', overflow: 'visible'}}>
                        <br/><br/>
                    <div style={{display: 'flex', justifyContent: 'center'}}>
                        <Avatar
                            style={{alignItems: 'middle'}}
                            size={200}
                            src={profilePic}
                        />
                    </div>

                        <br/>
                        <br/>
                        <br/>
                        <br/>
                    </div>
                    <br/>


                    <div style={{display: 'flex', justifyContent: 'center'}}>
                        <Title >Jack Ryan</Title>
                    </div>

                    <div style={{display: 'flex', justifyContent: 'center'}}>
                        <p> <FaMapMarkerAlt/> Melbourne, Australia </p>
                    </div>

                    <div style={{display: 'flex', justifyContent: 'center'}}>
                        <p> <FaEnvelopeOpen/> <a href="mailto:jackryan1998@hotmail.com">jackryan1998@hotmail.com</a></p>
                    </div>

                    <div style={{display: 'flex', justifyContent: 'center'}}>
                        <p> <FaGraduationCap/> Bachelor of Computer Science @ RMIT University </p>
                    </div>


                    <br/>
                    <div className="site-card-wrapper" >
                        <Row justify="space-around">
                            <Col span={7}>
                                <Card title="Technologies" hoverable={true} bordered={false}>
                                    <List
                                        dataSource={technologies}
                                        renderItem={item => <List.Item>{item}</List.Item>}

                                    />
                                </Card>
                            </Col>
                            <Col span={7}>
                                <Card title="Skills" hoverable={true} bordered={false}>
                                    <List
                                        dataSource={skills}
                                        renderItem={item => <List.Item>{item}</List.Item>}

                                    />
                                </Card>
                            </Col>
                            <Col span={7}>
                                <Card title="Projects" hoverable={true} bordered={false}>
                                    <List
                                        dataSource={project}
                                        renderItem={item => <List.Item>{item}</List.Item>}

                                    />
                                </Card>
                            </Col>
                        </Row>
                    </div>

                    <br/><br/>

                </Content>
                <Footer
                    style={{display: 'flex', justifyContent: 'center',
                    left: 0, bottom: 0 }}>
                    <p>This website was built using React <FaReact/></p> <p> +  <a href={"https://ant.design/"}> ant.design</a> </p> </Footer>
            </Layout>
        );
    }

}
