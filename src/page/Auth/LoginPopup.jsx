
import { Link } from 'react-router-dom';
import React, { useState } from 'react';

import { Form, Input, Button, Checkbox, Modal } from 'antd';


export const Login = (props) => {

    const [visible, setVisible ] = useState(false);
    // constructor(props) {
    //     super(props);
    //     this.WrappedNormalLoginForm = Form.create({ name: 'normal_login' })(NormalLoginForm);
    // }

    const loginSubmit = () => {

    }


        // const { app, isLogin, openLogin } = props;
        return (
            <Modal
                title="Đăng nhập tài khoản"
                visible={visible}
                footer={''}
                onCancel={() => {setVisible(false)}}
            >
                <Form.Item>
                    <Input autoFocus placeholder="Nhập chứng minh nhân dân" className='input' />
                </Form.Item>
                {/* <Form.Item>
                    <Input.Password
                        type="password"
                        placeholder="Password"
                        className='input'
                    />
                </Form.Item> */}
                <Form.Item>
                    <Button onClick={loginSubmit} type="primary" htmlType="submit" className="login-form-button">
                            Đăng nhập
                    </Button>
                </Form.Item>
            </Modal>
        )
    }

export default Login
