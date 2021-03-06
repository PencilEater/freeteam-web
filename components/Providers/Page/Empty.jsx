import React from 'react'
import { SnackbarProvider } from 'notistack'
import { Header } from "components";
import { makeStyles } from '@material-ui/styles'
import styles from "assets/jss/pages/LandingPage";

const useStyles = makeStyles(styles);

function PageProvider(props) {
    const classes = useStyles();
    return (
        <SnackbarProvider maxSnack={3} anchorOrigin={{ horizontal: 'center', vertical: 'top' }}>
            <Header
                pageName={props.pageName}
            />
            <div className={classes.container} style={{ textAlign: 'center' }}>
                {props.children}
            </div>
        </SnackbarProvider>
    )
}
export default PageProvider;
