import EasyModal, { InnerModalProps } from 'ez-modal-react';
import React from 'react';
import {
  Button,
  Input,
  Modal,
  Notification,
  Placeholder,
  useToaster,
} from 'rsuite';
import 'rsuite/dist/rsuite.min.css';

interface IProps extends InnerModalProps<string> {
  name: string;
  age: number;
}
const RsuiteModal = EasyModal.create((props: IProps) => {
  const [name, setName] = React.useState('RsuiteModal');

  return (
    <Modal
      backdrop={true}
      keyboard={false}
      open={props.visible}
      onClose={() => props.hide(null)}
    >
      <Modal.Header>
        <Modal.Title>Modal Title </Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <div>Hello Rsuite Modal</div>
        <Input
          value={name}
          onChange={(e) => setName(e)}
          placeholder="Default Input"
        />

        <Placeholder.Paragraph />
      </Modal.Body>

      <Modal.Footer>
        <Button onClick={() => props.hide(name)}>Ok</Button>
        <Button onClick={() => props.hide('Cancel')}>Cancel</Button>
      </Modal.Footer>
    </Modal>
  );
});

export default function App() {
  const toaster = useToaster();

  return (
    <EasyModal.Provider>
      <Button
        type="button"
        onClick={async () => {
          EasyModal.show(RsuiteModal).then((result) => {
            console.log('show-result:', result);
            result &&
              toaster.push(<Notification>{result}</Notification>, {
                placement: 'topEnd',
              });
          });
        }}
      >
        Rsuite Modal
      </Button>
    </EasyModal.Provider>
  );
}
