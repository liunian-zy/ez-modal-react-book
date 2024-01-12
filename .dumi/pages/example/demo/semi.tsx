import { Toast } from '@douyinfe/semi-ui';
import '@douyinfe/semi-ui/dist/css/semi.min.css';
import Button from '@douyinfe/semi-ui/lib/es/button/Button';
import Input from '@douyinfe/semi-ui/lib/es/input';
import Modal from '@douyinfe/semi-ui/lib/es/modal';
import EasyModal, { InnerModalProps } from 'ez-modal-react';
import React from 'react';

interface IProps extends InnerModalProps<string> {
  name: string;
  age: number;
}

const SemiModal = EasyModal.create((props: IProps) => {
  const [name, setName] = React.useState('SemiModal');

  return (
    <Modal
      title="基本对话框"
      visible={props.visible}
      onOk={() => props.hide(name)}
      afterClose={() => props.remove()}
      onCancel={() => props.hide(null)}
      closeOnEsc={true}
    >
      This is the content of a basic modal.
      <br />
      More content...
      <br />
      <Input
        placeholder="default"
        value={name}
        onChange={(value) => setName(value)}
      ></Input>
    </Modal>
  );
});

export default function App() {
  return (
    <EasyModal.Provider>
      <Button
        onClick={async () => {
          EasyModal.show(SemiModal).then((result) => {
            console.log('show-result:', result);
            Toast.info(result);
          });
        }}
      >
        Semi Modal
      </Button>
    </EasyModal.Provider>
  );
}
