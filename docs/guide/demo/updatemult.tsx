import { Button, Modal, Space, message } from 'antd';
import EasyModal, { InnerModalProps, useModal } from 'ez-modal-react';
import React from 'react';

interface Props extends InnerModalProps<number> {
  index: number;
}

/* 1. not use EasyModal.create function */
export const ExampleModal = (props: Props) => {
  const modal = useModal<Props>();

  return (
    <Modal
      title={`Hello Antd:${props.index}`}
      open={modal.visible}
      onOk={() => modal.hide(props.index)}
      onCancel={() => modal.hide(null)}
      afterClose={() => modal.remove}
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
              { index: 4 },
              { id: 'hello world' },
            ).then((result) => {
              console.log('show-result:', result);
            });

            message.info('3秒后更新title内容');

            setTimeout(() => {
              EasyModal.update('hello world', { index: 66 });
            }, 3000);
          }}
        >
          MultModal
        </Button>
      </Space>
    </EasyModal.Provider>
  );
}
