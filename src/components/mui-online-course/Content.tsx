import React, {ReactElement} from 'react';
import {createStyles, Grid, makeStyles, Theme} from '@material-ui/core';
import CoffeeCard from './CoffeeCard';

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

interface IContentProps {
    // prop1: string
}

const Content: React.FC<IContentProps> = (props: IContentProps): ReactElement => {
    const classes = useStyles();

    return <Grid container spacing={4}>
        <Grid item xs={12} sm={4}>
            <CoffeeCard title={'Hamilton Beach flexbrew'} subtitle={'89.99'}
                        imgSrc={'https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Lysefjorden_-_Man_standing_on_Preikestolen.JPG/1200px-Lysefjorden_-_Man_standing_on_Preikestolen.JPG'}
                        description={''}
                        avatarSrc={'https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Lysefjorden_-_Man_standing_on_Preikestolen.JPG/1200px-Lysefjorden_-_Man_standing_on_Preikestolen.JPG'}/>

        </Grid>
    </Grid>;
};

export default Content;