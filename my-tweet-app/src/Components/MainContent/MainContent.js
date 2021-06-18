import React, { Component } from 'react'
import './MainContent.css'
import Grid from '@material-ui/core/Grid';
import MainPage from '../MainPage/MainPage';
import InfoSection from '../Infosection/InfoSection';
import Suggestions from '../Suggestions/Suggestions';
import statusadd from '../../Images/statusadd.png';

export default class MainContent extends Component {
    constructor(props) {
        super(props);
        this.state = {
           
         }
    }
    render() {
        return (
            <div>
                <Grid container>
                    <Grid item xs={2}>
                
                    </Grid>
                    <Grid item xs={6} className="maincontent__container">
                        <div>
                            {/* status and post */}
                           <MainPage></MainPage>
                        </div>
                    </Grid>
                    <Grid item xs={2}>
                        <InfoSection />
                        <Suggestions />
                    </Grid>
                    <Grid item xs={2}>
                    </Grid>
                </Grid>
            </div>
        )
    }
}
