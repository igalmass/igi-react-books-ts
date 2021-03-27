import React, {ReactElement} from 'react';
import {makeStyles} from '@material-ui/core';
import {BrowserRouter, NavLink, Route} from 'react-router-dom';
import {NavigationConsts} from './NavigationConsts';
import SampleHomeComponent from '../voicemail/SampleHomeComponent';
import VoicemailPage1 from '../voicemail/VoicemailPage1';
import VoicemailPage2 from '../voicemail/VoicemailPage2';
import VoicemailPage3 from '../voicemail/VoicemailPage3';
import IgiGglBookList from '../books/IgiGglBookList';

interface IMainNavigationWithToolbarComponentProps {

}

const useStyles = makeStyles({
    navigationBar: {
        '& nav': {
            '& > ul': {
                listStyleType: 'none',
                margin: 0,
                padding: 0,
                overflow: 'hidden',
                backgroundColor: 'blue', // ; /*#666;*/
                // position: 'fixed', // ;
                top: 0,
                width: '100%',
                '& li': {
                    float: 'left',
                    borderRight: '1px solid #bbb',
                },
                '& li a': {
                    display: 'block',
                    color: 'white',
                    textAlign: 'center',
                    padding: '14px 16px',
                    textDecoration: 'none',
                },
                '& li a:hover': {
                    backgroundColor: '#111'
                },
                '& .active': {
                    // backgroundColor: 'darkgreen'
                    backgroundColor: 'darkCyan',
                }
            }
        }
    }
}, { name: 'MainName'});

const MainNavigationWithToolbarComponent: React.FC<IMainNavigationWithToolbarComponentProps> = (props: IMainNavigationWithToolbarComponentProps): ReactElement => {
    const classes = useStyles();

    return <BrowserRouter>
        <div className={classes.navigationBar}>
            <header>
                <nav>
                    <ul>
                        <li><NavLink exact to={NavigationConsts.HOME}>Home</NavLink></li>
                        <li><NavLink to={NavigationConsts.VOICEMAIL_PAGE1}>Voicemail Page 1</NavLink></li>
                        <li><NavLink to={NavigationConsts.VOICEMAIL_PAGE2}>Voicemail Page 2</NavLink></li>
                        <li><NavLink to={NavigationConsts.VOICEMAIL_PAGE3}>Voicemail Page 3</NavLink></li>
                        <li><NavLink to={NavigationConsts.IGI_GGL_BOOK_LIST}>Ggl Book List</NavLink></li>
                    </ul>
                    <Route exact path={NavigationConsts.HOME}><SampleHomeComponent/></Route>
                    <Route path={NavigationConsts.VOICEMAIL_PAGE1}><VoicemailPage1/></Route>
                    <Route path={NavigationConsts.VOICEMAIL_PAGE2}><VoicemailPage2/></Route>
                    <Route path={NavigationConsts.VOICEMAIL_PAGE3}><VoicemailPage3/></Route>
                    <Route path={NavigationConsts.IGI_GGL_BOOK_LIST}><IgiGglBookList/></Route>
                </nav>
            </header>
        </div>
    </BrowserRouter>;
};

export default MainNavigationWithToolbarComponent;