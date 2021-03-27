import React, {ReactElement} from 'react';
import {Button, createStyles, makeStyles, Theme} from '@material-ui/core';
import classNames from 'classnames';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
            buttonText: (props: ICoolButtonProps) => {
                return {
                    color: props.cool ? 'blue' : 'red',
                    [theme.breakpoints.up('sm')]: {
                        color: 'blue'
                    }
                };
            },
            buttonBackground: {
                backgroundColor: "red"
            }
        }
    ));

interface ICoolButtonProps {
    cool: boolean
}

const CoolButton: React.FC<ICoolButtonProps> = (props: ICoolButtonProps): ReactElement => {
    const classes = useStyles(props);

    return <Button fullWidth className={classNames(classes.buttonText, classes.buttonBackground)}>the button</Button>;
};

export default CoolButton;