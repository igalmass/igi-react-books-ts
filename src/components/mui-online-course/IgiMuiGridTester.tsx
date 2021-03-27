import React, {ReactElement} from 'react';
import {createStyles, Grid, makeStyles, Theme} from '@material-ui/core';
import MyHeader from './MyHeader';
import Content from './Content';

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

interface IIgiMuiGridTesterProps {
    // prop1: string
}

const IgiMuiGridTester: React.FC<IIgiMuiGridTesterProps> = (props: IIgiMuiGridTesterProps): ReactElement => {
    const classes = useStyles();

    return <Grid container direction="column">
        <Grid item>
            <MyHeader/>
        </Grid>
        <Grid item container>
            <Grid item sm={2}/>
            <Grid item xs={12} sm={8}>
                <Content/>
            </Grid>
            <Grid item sm={2}/>
        </Grid>
    </Grid>;
};

export default IgiMuiGridTester;
