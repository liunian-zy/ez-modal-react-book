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
              { id: 2 },
            ).then((result) => {
              console.log('show-result:', result);
            });

            message.info('3秒后立即移除组件', 3000);

            setTimeout(() => {
              /* 移除时传入指定id */
              EasyModal.remove(2);
            }, 3000);
          }}
        >
          通过id移除组件
        </Button>

        <Button
          type="primary"
          onClick={async () => {
            const MyExampleModalHOC = EasyModal.create(ExampleModal);
            EasyModal.show(MyExampleModalHOC, { index: 5, loading: true }).then(
              (result) => {
                console.log('show-result:', result);
              },
            );

            message.info('3秒后立即移除组件', 3000);

            setTimeout(() => {
              /* 更新时传入HOC */
              EasyModal.remove(MyExampleModalHOC);
            }, 3000);
          }}
        >
          通过HOC移除组件
        </Button>
      </Space>
    </EasyModal.Provider>
  );
}
