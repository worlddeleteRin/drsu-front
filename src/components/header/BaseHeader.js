import { Icon } from '@iconify/react';
import { Button } from '@mui/material';

function BaseHeader () {
    return (
        <>
            <Button
                color="primary"
                variant="contained"
                startIcon={
                    <Icon 
                    width="25"
                    icon="mdi:account-circle"/>
                }
            >
                some text is here
            </Button>
            base header is here
        </>
    )
}

export default BaseHeader;
