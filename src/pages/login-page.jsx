import React from 'react';
import lineBg from '../assets/line-background.png';

import {
    Page,
    List,
    ListInput,
    Icon,
    Card,
    Button,
} from 'framework7-react';


export default () => (
    <Page name="login-page" className="background-default">
        <div className="bg-line">
            <div className="logo-login">
            </div>
            <Card className="card-custom shadow margin">
                <Card className="card-custom shadow" style={{ marginTop: '-60px' }}>
                    <List noHairlinesMd>
                        <ListInput
                            className="input-border"
                            type="text"
                            placeholder="Username"
                            clearButton
                        >
                            <Icon className="icon-smooth" f7="person" slot="media" />
                        </ListInput>
                        <ListInput
                            className="input-border"
                            type="password"
                            placeholder="Password"
                            clearButton
                        >
                            <Icon className="icon-smooth" f7="lock" slot="media" />
                        </ListInput>
                    </List>
                </Card>
                <Button large raised round outline className="margin">Sign In</Button>
                <Button large raised round outline className="margin">Sign Up</Button>
            </Card>

        </div>


    </Page >
);