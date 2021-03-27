import React, {ReactElement} from 'react';
import {createStyles, makeStyles, Theme} from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
            root: {
                border: '3px solid blue',
                margin: 20,
                paddingLeft: 0,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                '& .sub-style-root': {
                    // margin: theme.spacing(1),
                },
            },
            bookDescription: {
                margin: 30
            }
        }
    ));

interface IGglBookItemProps {
    // prop1: string
    id: string;
    author: string;
    title: string;
    description: string,
    imageUrl: string,
    toShowBookDescription: boolean,
}

const GglBookItem: React.FC<IGglBookItemProps> = (props: IGglBookItemProps): ReactElement => {
    const classes = useStyles();

    return <div className={classes.root}>
        {/*<p>This is a GglBook Component!</p>*/}
        <div>to show = {props.toShowBookDescription ? 'YES' : 'NO'}</div>
        <div>
            {props.author} / {props.title}
        </div>
        <div>
            <img src={props.imageUrl}/>
        </div>
        <div className={classes.bookDescription}>
            {props.toShowBookDescription && props.description}
        </div>
        {/*<p>props.prop1 = {props.prop1}</p>*/}
    </div>;
};

export default GglBookItem;