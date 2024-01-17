import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  TextField,
} from '@mui/material';
import EasyModal, { InnerModalProps } from 'ez-modal-react';

import React from 'react';

interface IProps extends InnerModalProps<string> {
  name: string;
  age: number;
}

const MaterialModal = EasyModal.create((props: IProps) => {
  return (
    <Dialog
      open={props.visible}
      onClose={() => props.hide(null)}
      PaperProps={{
        component: 'form',
        onSubmit: (event: React.FormEvent<HTMLFormElement>) => {
          event.preventDefault();
          const formData = new FormData(event.currentTarget);
          const formJson = Object.fromEntries((formData as any).entries());
          const email = formJson.email;
          console.log(email);
          props.hide(email);
        },
      }}
      TransitionProps={{
        onExited: () => props.remove(),
      }}
    >
      <DialogTitle>Subscribe</DialogTitle>
      <DialogContent>
        <DialogContentText>
          To subscribe to this website, please enter your email address here. We
          will send updates occasionally.
        </DialogContentText>
        <TextField
          autoFocus
          required
          margin="dense"
          id="name"
          name="email"
          label="Email Address"
          type="email"
          fullWidth
          variant="standard"
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={() => props.hide(null)}>Cancel</Button>
        <Button type="submit">Subscribe</Button>
      </DialogActions>
    </Dialog>
  );
});

export default function App() {
  const [msg, setMsg] = React.useState<string>();
  return (
    <EasyModal.Provider>
      <Button
        onClick={async () => {
          const res = await EasyModal.show(MaterialModal);
          setMsg(res);
        }}
        color="primary"
      >
        Material Modal {msg}
      </Button>
    </EasyModal.Provider>
  );
}
