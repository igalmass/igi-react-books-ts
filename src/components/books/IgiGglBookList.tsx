import React, {ChangeEvent, ReactElement, useEffect, useState} from 'react';
import {Button, createStyles, FormControlLabel, makeStyles, Switch, TextField, Theme} from '@material-ui/core';
import axios from 'axios';
import {GglBookModel} from './models/GglBook.model';
import GglBookItem from './GglBookItem';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
            root: {
                border: '1px solid blue',
                paddingLeft: 0,
                '& .sub-style-root': {
                    // margin: theme.spacing(1),
                },
            },
            resultDiv: {
                border: '1px solid red',
                margin: 10
            },
            button: {
                margin: 10
            },
            textField: {
                margin: 10
            }
        }
    ));

interface IIgiGglBookListProps {
    // prop1: string
}

// https://www.googleapis.com/books/v1/volumes?q=flowers+inauthor:joe+abercombie

const IgiGglBookList: React.FC<IIgiGglBookListProps> = (props: IIgiGglBookListProps): ReactElement => {
    const [allBooksAsJson, setAllBooksAsJson] = useState({theResult: '1', innerObject: {name1: 'val1'}});
    const [authorName, setAuthorName] = useState('Joe Abercombie');
    const [allBookModels, setAllBookModels] = useState<GglBookModel[]>([]);
    const [toShowBookDescription, setToShowBookDescription] = useState(true);

    const classes = useStyles();

    useEffect(() => {
        console.log('Rendering book list ...');
    });


    const convertResponseToBookModels = (response: any): GglBookModel[] => {
        const result: GglBookModel[] = response.items.map((cur: any) => {
            const id = cur.id;
            const volumeInfo = cur.volumeInfo;
            const author = volumeInfo.authors[0];
            let title = volumeInfo.title;
            const description = volumeInfo.description;
            let imageUrl = volumeInfo.imageLinks?.smallThumbnail;
            return new GglBookModel(id, author, title, description, imageUrl);
            //
        });
        debugger;
        return result;
    };


    const getBooksHandler = () => {
        const encodedAuthorName = encodeURI(authorName);
        let url = `https://www.googleapis.com/books/v1/volumes?q=inauthor:${encodedAuthorName}&maxResults=40`;
        debugger;
        axios.get(url)
            .then(response => {
                return response.data;
            })
            .then(responseData => {
                setAllBooksAsJson(responseData);
                const gglBookModels = convertResponseToBookModels(responseData);
                setAllBookModels(gglBookModels);
            })
            .catch(
                error => {
                    debugger;
                    alert(error)
                }
            );
    };

    const getTheResultAsJson = (): string => {
        const result = JSON.stringify(allBooksAsJson, null, 4);
        return result;
    };

    const handleToShowBookDescriptionSwitchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setToShowBookDescription(event.target.checked);
    };

    return <div className={classes.root}>
        <p>This is a IgiGglBookList Component!</p>
        <p>To Show = {toShowBookDescription ? "YES" : "NO"}</p>
        <TextField
            className={classes.textField}
            id="message"
            placeholder="message"
            label="Message"
            value={authorName}
            variant="standard"
            onChange={(event) => setAuthorName(event.target.value)}
        />
        <Button variant="contained"
                className={classes.button}
                type="button"
                color="primary"
                onClick={getBooksHandler}>Get Books</Button>

        <FormControlLabel style={{marginLeft: 20}}
                          control={
                              <Switch color="primary"
                                      checked={toShowBookDescription}
                                      onChange={handleToShowBookDescriptionSwitchChange}
                                      />
                          }
                          label='Show Book Description'
                                  />

        {
            allBookModels.map((curGglBookModel: GglBookModel) =>
                    <GglBookItem {...curGglBookModel} toShowBookDescription={toShowBookDescription}></GglBookItem>
                // <GglBookItem id={cur.id} author={cur.author} imageUrl={cur.imageUrl} title={cur.title}></GglBookItem>
            )
        }
        <textarea value={getTheResultAsJson()} style={{width: '100%', height: '500px'}}></textarea>
    </div>;
};

export default IgiGglBookList;