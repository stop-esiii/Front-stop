import CloseIcon from '@mui/icons-material/Close';
import {
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
    IconButton,
  } from '@mui/material';


export default function ModalGenenric({ open, handleClose, title, children, actions }) {

    return (
        <Dialog
            open={open}
            onClose={handleClose}
            PaperProps={{
                sx: {
                    borderRadius: '20px',
                    backgroundColor: '#ffc94d',
                    border: '10px solid #f74440',
                    width: '300px',
                },
            }}
        >
            <DialogTitle
                sx={{
                    textAlign: 'center',
                    color: '#f74440',
                    fontWeight: 'bold',
                    fontSize: '20px',
                    position: 'relative',
                }}
            >
                {title}
                <IconButton
                    aria-label="close"
                    onClick={handleClose}
                    sx={{ position: 'absolute', right: 8, top: 8, color: '#f74440' }}
                >
                    <CloseIcon />
                </IconButton>
            </DialogTitle>
            <DialogContent dividers sx={{ textAlign: 'center', color: '#f74440' }}>
                {children}
            </DialogContent>
            {actions && (
                <DialogActions sx={{ justifyContent: 'center' }}>
                    {actions}
                </DialogActions>
            )}
        </Dialog>
    );
};