import {
  Button,
  Col,
  Drawer,
  Form,
  Input,
  InputNumber,
  Row,
  Space,
  Typography,
  message,
} from 'antd';
import EasyModal, { InnerModalProps } from 'ez-modal-react';
import React from 'react';

interface IProps extends InnerModalProps<string> {
  name: string;
  age: number;
}

const style: React.CSSProperties = {
  width: '100%',
};

const { Text } = Typography;

export const SingleDrawer = EasyModal.create((props: IProps) => {
  const [count, setCount] = React.useState<string>();

  return (
    <Drawer
      title="Hello Drawer"
      open={props.visible}
      onClose={() => props.hide(count!)}
      destroyOnClose={true}
      afterOpenChange={(v) => !v && props.remove()}
    >
      <div>
        props.name <Text type="success">{props.name}</Text>
      </div>

      <div>
        props.age<Text type="success"> {props.age}</Text>
      </div>

      <ul>
        {new Array<number>(10).fill(0, 0, 10).map((_t, idx) => (
          <li key={idx}>{idx}</li>
        ))}
      </ul>

      <Form.Item label="return">
        <Input
          style={style}
          value={count}
          onChange={(e) => setCount(e.target.value)}
          placeholder="将作为EasyModal.show()调用的返回值"
        />
      </Form.Item>
    </Drawer>
  );
});

export default function App() {
  const [name, setName] = React.useState('drawer');
  const [age, setAge] = React.useState(20);
  return (
    <EasyModal.Provider>
      <Row gutter={[24, 24]}>
        <Col span={8}>
          <Form.Item label="name">
            <Input
              style={style}
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="将作为name属性传递给组件"
            />
          </Form.Item>
        </Col>
        <Col span={8}>
          <Form.Item label="age">
            <InputNumber
              style={style}
              value={age}
              onChange={(e) => setAge(e!)}
              placeholder="将作为age属性传递给组件"
            />
          </Form.Item>
        </Col>

        <Col span={24}>
          <Space>
            <Button
              type="primary"
              onClick={async () => {
                EasyModal.show(SingleDrawer, { name, age }).then((result) => {
                  message.success('show-result:' + result);
                });
              }}
            >
              EasyModal.show(SingleDrawer,{'{name,age}'})
            </Button>
          </Space>
        </Col>
      </Row>
    </EasyModal.Provider>
  );
}
