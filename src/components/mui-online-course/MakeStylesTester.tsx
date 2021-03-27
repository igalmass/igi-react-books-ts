import React, {ReactElement} from 'react';
import {Button, createStyles, makeStyles, Theme} from '@material-ui/core';
import CoolButton from './CoolButton';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
            buttonStyle: {
                color: 'red',
            },
            textStyle: {
                color: 'green'
            }
        }
    ));

interface IMakeStylesTesterProps {
    // prop1: string
}

const MakeStylesTester: React.FC<IMakeStylesTesterProps> = (props: IMakeStylesTesterProps): ReactElement => {
    const classes = useStyles();

    return <CoolButton cool={false}/>
    // return <>
    //     <Button className={classes.buttonStyle}>Small Button</Button>
    //     <h1 className={classes.textStyle}>this is textiti</h1>
    // </>;
};

export default MakeStylesTester;