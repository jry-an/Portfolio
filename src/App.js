import React, {Component} from "react";
import { Layout, Avatar, Typography, Card, Col, Row, List }  from 'antd';
import 'antd/dist/antd.css';
import {FaMapMarkerAlt, FaEnvelopeOpen, FaGraduationCap, FaReact} from "react-icons/fa";
import profilePic from './profile.jpg'

const { Content, Footer } = Layout;
const { Title } = Typography;
const technologies = [
    'Python','Java','C/C++','Ruby on Rails', 'JavaScript', 'React', 'Android'

];

const skills = [
    'Google Cloud Platform', 'AWS', 'Heroku', 'Docker', 'Machine Learning', 'SQL'

];

export default class App extends Component{
    render() {
        return(
            <Layout>
                <Content style={{height: '100vh', }}>
                    <br/><br/>
                    <div style={{display: 'flex', justifyContent: 'center'}}>
                        <Avatar
                            style={{alignItems: 'middle'}}
                            size={128}
                            src={profilePic}
                        />
                    </div>
                    <br/>
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
                    <div className="site-card-wrapper">
                        <Row gutter={16}>
                            <Col span={8}>
                                <Card title="Technologies" bordered={false}>
                                    <List
                                        dataSource={technologies}
                                        renderItem={item => <List.Item>{item}</List.Item>}

                                    />
                                </Card>
                            </Col>
                            <Col span={8}>
                                <Card title="Skills" bordered={false}>
                                    <List
                                        dataSource={skills}
                                        renderItem={item => <List.Item>{item}</List.Item>}

                                    />
                                </Card>
                            </Col>
                            <Col span={8}>
                                <Card title="Projects" bordered={false}>
                                    Basketball Messenger Bot
                                </Card>
                            </Col>
                        </Row>
                    </div>
                </Content>
                <Footer
                    style={{display: 'flex', justifyContent: 'center',
                    left: 0, bottom: 0, width: '100%' }}>
                    This website was built using React <FaReact/></Footer>
            </Layout>
        );
    }

}
