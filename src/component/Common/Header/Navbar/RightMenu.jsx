import { Menu, Grid } from 'antd';
import { useState } from 'react';

const { useBreakpoint } = Grid;

const RightMenu = () => {
  const { md } = useBreakpoint();
  const { selected, setSelected } = useState('mail');
  return (
    <Menu mode={md ? 'horizontal' : 'inline'} selectable selectedKeys={['maill']}>
      <Menu.Item key="mail">
        <a href="/">Signin</a>
      </Menu.Item>
      <Menu.Item key="app">
        <a href="/festival">Signup</a>
      </Menu.Item>
    </Menu>
  );
};

export default RightMenu;
