import React, {ChangeEvent, ReactElement, useState} from 'react';
import {Button, createStyles, makeStyles, TextField, Theme} from '@material-ui/core';
import {VoicemailModel} from './models/VoicemailModel';
import ActionTypes from '../../store/ActionTypes';
import {connect} from 'react-redux';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
            root: {
                // border: '1px solid blue',
                paddingLeft: 0,
                '& .sub-style-root': {
                    // margin: theme.spacing(1),
                },
            },
            textField: {
                width: 300,
                alignSelf: 'center',
                margin: 20
            },
            submitButton: {
                alignSelf: 'center',
                height: 40
            }
        }
    ));

// interface IVoicemailPage3Props {
//     // prop1: string
// }

const VoicemailPage3: React.FC<any> = (props: any): ReactElement => {
    const classes = useStyles();
    const [from, setFrom]: [string, (str: string) => void] = useState('');
    const [message, setMessage] = useState('');
    // const [allVoicemails, setAllVoicemails]: [VoicemailModel[], (vms: VoicemailModel[]) => void] = useState([] as VoicemailModel[]);

    const handleFromChanged = (event: ChangeEvent<HTMLInputElement>) => {
       setFrom(event.target.value);
    };

    const handleMessageChanged = (event: ChangeEvent<HTMLInputElement>) => {
        setMessage(event.target.value);
    };

    const addVoicemailHandler = () => {
        const newVoicemail = new VoicemailModel(Date.now().toString(), from, message);

        // const newOne = curAllVoicemails.concat(newVoicemail);
        // setAllVoicemails(allVoicemails.concat(newVoicemail));
        // setAllVoicemails();
        props.addVoicemail(newVoicemail);
    }

    return <div className={classes.root}>
        <p>This is a VoicemailPage3 Component!</p>
        {/*<p>props.prop1 = {props.prop1}</p>*/}
        <div style={{display: 'flex', flexDirection: 'row', alignContent: 'center', justifyItems: 'center'}}>
            <TextField
                className={classes.textField}
                label="From"
                id="from"
                placeholder="From"
                value={from}
                variant="standard"
                onChange={handleFromChanged}
            />
            <TextField
                className={classes.textField}
                id="message"
                placeholder="message"
                label="Message"
                value={message}
                variant="standard"
                onChange={handleMessageChanged}
            />
            <Button variant="contained"
                    className={classes.submitButton}
                    type="button"
                    color="primary"
                    onClick={addVoicemailHandler}>Add Voicemail</Button>
        </div>
        <div>
            <ul>
                { props.allVoicemails.map((cur: VoicemailModel) =>
                    <li onClick={() => props.deleteVoicemail(cur.id)}>{cur.id} - {cur.from} - {cur.message}</li>)
                }
            </ul>
        </div>
    </div>;
};

const mapStateToProps = (state: any) => {
    return {
        allVoicemails: state.vms.allVoicemails
    }
}

const mapDispatchToProps = (dispatch: any) => {
    return {
        addVoicemail: (newVoicemail: VoicemailModel) => dispatch({type: ActionTypes.ADD_VOICEMAIL, newVoicemail}),
        deleteVoicemail: (id: string) => dispatch({type: ActionTypes.DELETE_VOICEMAIL, id})
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(VoicemailPage3);