import React, {Component} from "react";
import { Layout, Avatar, Typography, Card, Col, Row, List, Divider }  from 'antd';
import 'antd/dist/antd.css';
import {FaMapMarkerAlt, FaEnvelopeOpen, FaGraduationCap, FaPython} from "react-icons/fa";


const { Content, Footer } = Layout;
const { Title } = Typography;
const technologies = [
    'Python','Java','C/C++','Ruby on Rails', 'JavaScript', 'React', 'Android'

];



export default class App extends Component{
    render() {
        return(
            <Layout>
                <Content>
                    <div style={{display: 'flex', justifyContent: 'center'}}>
                        <Avatar
                            style={{alignItems: 'middle'}}
                            shape="square"
                            size={128}
                            src='https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png'
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
                        <p> <FaEnvelopeOpen/> TODO: Encrypted Email </p>
                    </div>

                    <div style={{display: 'flex', justifyContent: 'center'}}>
                        <p> <FaGraduationCap/> Bachelor of Computer Science @ RMIT University </p>
                    </div>


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
                                <Card title="Card title" bordered={false}>
                                    Card content
                                </Card>
                            </Col>
                        </Row>
                    </div>

                </Content>
                <Footer>Footer</Footer>
            </Layout>
        );
    }

}
