import React, {ReactElement} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import {Avatar, CardHeader, CardMedia, IconButton} from '@material-ui/core';
import {Share} from '@material-ui/icons';

const useStyles = makeStyles({
    root: {
        minWidth: 275,
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },
    avatar: {

    }
});

interface IContentProps {
    avatarSrc: string;
    title: string;
    subtitle: string;
    description: string;
    imgSrc: string;
}

const CoffeeCard: React.FC<IContentProps> = (props: IContentProps): ReactElement => {
    const classes = useStyles();
    const bull = <span className={classes.bullet}>•</span>;
    const { avatarSrc, title, subtitle, description, imgSrc} = props;

    return (
        <Card>
            <CardHeader
                avatar={
                    <Avatar aria-label="recipe" className={classes.avatar} src={avatarSrc}>
                        R
                    </Avatar>
                }
                action={
                    <IconButton aria-label="settings">
                        <Share />
                    </IconButton>
                }
                title={title}
                subheader={subtitle}
            />
            <CardMedia image={imgSrc} style={{height: 200}}>

            </CardMedia>
            <CardContent>
                <Typography className={classes.title} color="textSecondary" gutterBottom>
                    Word of the Day
                </Typography>
                <Typography variant="h5" component="h2">
                    be{bull}nev{bull}o{bull}lent
                </Typography>
                <Typography className={classes.pos} color="textSecondary">
                    adjective
                </Typography>
                <Typography variant="body2" component="p">
                    well meaning and kindly.
                    <br />
                    {'"a benevolent smile"'}
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small">Learn More</Button>
                <Button size="small">Learn More More</Button>
            </CardActions>
        </Card>
    );
}

export default CoffeeCard;