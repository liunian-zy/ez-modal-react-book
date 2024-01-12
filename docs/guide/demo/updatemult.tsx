import { Button, Modal, Space, message } from 'antd';
import EasyModal, { InnerModalProps, useModal } from 'ez-modal-react';
import React from 'react';

interface Props extends InnerModalProps<number> {
  index: number;
  loading: boolean;
}

export const ExampleModal = (props: Props) => {
  const modal = useModal<Props>();

  return (
    <Modal
      title={`Hello Antd:${props.index}`}
      open={modal.visible}
      onOk={() => modal.hide(props.index)}
      onCancel={() => modal.hide(null)}
      afterClose={modal.remove}
      confirmLoading={props.loading}
    ></Modal>
  );
};

export default function App() {
  return (
    <EasyModal.Provider>
      <Space>
        <Button
          type="primary"
          onClick={async () => {
            EasyModal.show(
              ExampleModal,
              { index: 4, loading: true },
              /* 打开时指定id */
              { id: 'hello world' },
            ).then((result) => {
              console.log('show-result:', result);
            });

            message.info('3秒后更新title内容', 3);

            setTimeout(() => {
              /* 更新时传入指定id */
              EasyModal.update('hello world', { index: 66, loading: false });
            }, 3000);
          }}
        >
          更新 Mult 模式组件
        </Button>
      </Space>
    </EasyModal.Provider>
  );
}
