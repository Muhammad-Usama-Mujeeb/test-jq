import Snackbar from '@mui/material/Snackbar';
import MuiAlert, { AlertColor } from '@mui/material/Alert';

interface NotificationBarProps {
    open: boolean,
    severity: AlertColor;
    message: string,
    onClose: () => void;
}

function NotificationBar(props: NotificationBarProps) {

    return (
        <Snackbar open={props.open} autoHideDuration={6000} onClose={props.onClose}
            anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}>
            <MuiAlert
                onClose={props.onClose}
                severity={props.severity} // This prop will determine the color (green or red)
                sx={{ width: '100%' }}
            >
                {props.message}
            </MuiAlert>
        </Snackbar>
    );
}

export default NotificationBar;
