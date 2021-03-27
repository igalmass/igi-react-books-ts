import React, {ReactElement} from 'react';
import {createStyles, makeStyles, Theme} from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
            root: {
                border: '1px solid blue',
                paddingLeft: 0,
                '& .sub-style-root': {
                    // margin: theme.spacing(1),
                },
            }
        }
    ));

interface IVoicemailPage1Props {
    // prop1: string
}

const VoicemailPage1: React.FC<IVoicemailPage1Props> = (props: IVoicemailPage1Props): ReactElement => {
    const classes = useStyles();

    return <div className={classes.root}>
        <p>This is a VoicemailPage1 Component!</p>
        {/*<p>props.prop1 = {props.prop1}</p>*/}
    </div>;
};

export default VoicemailPage1;