import React from 'react'
import './App.css'
import BackGround from './image/bg.png';
import BackGrounds from './image/img-4.svg';
import HeadPortrait from './image/wenwen.jpg';
import {Form, Input, Button, Checkbox} from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';



class App extends React.Component {


    render() {
        const layout = {
            labelCol: {span: 8},
            wrapperCol: {span: 16},
        };
        const tailLayout = {
            wrapperCol: {offset: 8, span: 16},
        };
        return (
            <div className="app-content">
                <img src={BackGround} alt="" className="app-content-img"/>
                <div>
                    <img src={BackGrounds} alt="" className="app-div-image"/>
                </div>
                <div className="avatar">
                    <img src={HeadPortrait} alt="head portrait" />
                    <Form
                        {...layout}
                        name="basic"
                        initialValues={{remember: true}}
                        className="login-form"
                    >
                        <Form.Item
                            name="username"
                            rules={[{required: true, message: '账号不能为空！'}]}
                            className="form-item"
                        >
                            <Input prefix={<UserOutlined
                                                className="site-form-item-icon"
                                                placeholder="Username" />}/>
                        </Form.Item>

                        <Form.Item
                            name="password"
                            rules={[{required: true, message: '密码不能为空！'}]}
                            className="form-items"
                        >
                            <Input.Password prefix={<LockOutlined
                                                        className="site-form-item-icon"
                                                        type="password"
                                                        placeholder="password"/>}/>
                        </Form.Item>

                        <Form.Item {...tailLayout} name="remember" valuePropName="checked" className="checkbox">
                            <Checkbox>Remember me</Checkbox>
                        </Form.Item>

                        <Form.Item {...tailLayout}>
                            <Button type="primary" htmlType="submit" className="form-button">
                                LOGIN
                            </Button>
                        </Form.Item>
                    </Form>
                </div>
            </div>
        );
    }
}

export default App;
