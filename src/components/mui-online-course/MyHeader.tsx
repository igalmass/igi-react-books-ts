import React, {ReactElement} from 'react';
import {AppBar, createStyles, makeStyles, Theme, Toolbar, Typography} from '@material-ui/core';
import {AcUnitRounded} from '@material-ui/icons';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
            root: {},
            typographyStyles: {
                flexGrow: 1
            }
        },
    ));

interface IMyHeaderProps {
    // prop1: string
}

const MyHeader: React.FC<IMyHeaderProps> = (props: IMyHeaderProps): ReactElement => {
    const classes = useStyles();

    return <AppBar position="static">
        <Toolbar>
            <Typography className={classes.typographyStyles}>Logen and Farrow are the best!!!</Typography>
            <AcUnitRounded/>
        </Toolbar>
    </AppBar>;
};

export default MyHeader;