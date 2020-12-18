import { Snackbar, Button, IconButton  } from '@material-ui/core';

const CustomSnackbar = (props) => {
    const { openAlert, handleCloseAlert, delayHideDuration, closeLabel, messageLabel, alertType } = props;

    return(
        <Snackbar
            anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'right',
            }}
            open={openAlert}
            autoHideDuration={delayHideDuration}
            onClose={handleCloseAlert(alertType)}
            message={messageLabel}
            action={
                <>
                <Button color="secondary" size="small" onClick={handleCloseAlert(alertType)}>{closeLabel}</Button>
                <IconButton size="small" aria-label="close" color="inherit" onClick={handleCloseAlert(alertType)} />                    
                </>
            }
        />
    )
};

export default CustomSnackbar;