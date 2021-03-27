import React, {ChangeEvent, useEffect, useReducer, useState} from 'react';
import {
    Button,
    createStyles,
    makeStyles,
    TextField,
    Theme
} from '@material-ui/core';
import axios from 'axios';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        sentenceCtrl: {
            paddingLeft: 20
        },
        sendButton: {
            margin: 20,
            width: 200
        },
        formControl: {
            margin: theme.spacing(1),
            minWidth: 120,
            marginLeft: 20,
            marginTop: 20,
            width: 200
        },
        resultDiv: {
            marginLeft: 20,
            border: '1px solid green'
        },
        selectEmpty: {
            marginTop: theme.spacing(2),
        }
    }));

export default function VoicemailPage2 () {
    const classes = useStyles();
    const [enteredSentence, setEnteredSentence]: [string, (str: string) => void] = useState("This is a text edit sample");
    const [resultText, setResultText] = useState("This is the result text");
    const submitHandler = () => {
        axios.get("http://localhost:38181/vmup-api-gw/getBaseResponse2")
            .then(result => {
                const theResult = JSON.stringify(result.data);
                setResultText(theResult);
            })
            .catch((error:any) => {
                setResultText(JSON.stringify(error));
        });
    };

    const handleEnteredSentenceChanged = (event: ChangeEvent<HTMLInputElement>) => {
        setEnteredSentence(event.target.value);
    };

    return <div style={{width: '98%', border: '1px solid green', boxSizing: 'border-box'}}>
        <div>I'm Page 2 component !</div>
        <form style={{display: 'flex', flexDirection: 'column', marginTop: 100}}>
            <TextField
                className={classes.sentenceCtrl}
                id="sentence"
                placeholder="Please enter a multiline sentence here"
                multiline
                value={enteredSentence}
                variant="filled"
                onChange={handleEnteredSentenceChanged}
            />

            <div className={classes.resultDiv}>{resultText}</div>

            <div style={{display: 'flex', alignItems: 'center'}}>
                <Button variant="contained"
                        className={classes.sendButton}
                        type="button"
                        color="primary"
                        onClick={submitHandler}>Send</Button>

                <Button variant="contained"
                        className={classes.sendButton}
                        type="button"
                        color="primary"
                        onClick={() => setResultText("Please Click 'Send'")}>Cancel</Button>
            </div>
        </form>
    </div>;
}

