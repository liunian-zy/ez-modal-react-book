import { Form, Input, Modal, Space, Table, Tag } from 'antd';
import EasyModal, { InnerModalProps } from 'ez-modal-react';
import React from 'react';

interface DataType {
  key: string;
  name: string;
  age: number;
  address: string;
  tags: string[];
}

interface IProps extends InnerModalProps<number> {
  record: DataType;
}

const style: React.CSSProperties = {
  width: '100%',
};

export const EditModal = (props: IProps) => {
  const [count, setCount] = React.useState<string>();

  const [form] = Form.useForm();

  return (
    <Modal
      title="Edit age"
      open={props.visible}
      onOk={() => props.hide(form.getFieldValue('age'))}
      onCancel={() => props.hide(null)}
      // afterClose={props.remove} 关闭后不注销组件
    >
      <Form
        form={form}
        initialValues={{
          age: props.record.age,
        }}
      >
        <Form.Item label="age" name="age">
          <Input
            style={style}
            value={count}
            onChange={(e) => setCount(e.target.value)}
          />
        </Form.Item>
      </Form>
    </Modal>
  );
};

const data = [
  {
    key: '1',
    name: 'John Brown',
    age: 32,
    address: 'New York No. 1 Lake Park',
    tags: ['nice', 'developer'],
  },
  {
    key: '2',
    name: 'Jim Green',
    age: 42,
    address: 'London No. 1 Lake Park',
    tags: ['loser'],
  },
  {
    key: '3',
    name: 'Joe Black',
    age: 32,
    address: 'Sydney No. 1 Lake Park',
    tags: ['cool', 'teacher'],
  },
];

export default function App() {
  const [dataSource, setDataSource] = React.useState(data);

  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      render: (text) => <a>{text}</a>,
    },
    {
      title: 'Age',
      dataIndex: 'age',
      key: 'age',
    },
    {
      title: 'Address',
      dataIndex: 'address',
      key: 'address',
    },
    {
      title: 'Tags',
      key: 'tags',
      dataIndex: 'tags',
      render: (_, { tags }) => (
        <>
          {tags.map((tag) => {
            let color = tag.length > 5 ? 'geekblue' : 'green';
            if (tag === 'loser') {
              color = 'volcano';
            }
            return (
              <Tag color={color} key={tag}>
                {tag.toUpperCase()}
              </Tag>
            );
          })}
        </>
      ),
    },
    {
      title: 'Action',
      key: 'action',
      render: (_, record) => (
        <Space size="middle">
          <a>Invite {record.name}</a>
          <a
            onClick={async () => {
              const age = await EasyModal.show(
                EditModal,
                {
                  record,
                },
                { id: record.key },
              );

              if (age) {
                const newData = [...dataSource];
                const find = newData.find((item) => item.key === record.key);
                if (find) {
                  find.age = age;
                  setDataSource(newData);
                }
              }
            }}
          >
            Edit
          </a>
        </Space>
      ),
    },
  ];

  return (
    <EasyModal.Provider>
      <Table columns={columns} dataSource={dataSource} />
    </EasyModal.Provider>
  );
}
