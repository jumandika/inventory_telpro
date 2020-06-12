import React from 'react';
import { f7, f7ready } from 'framework7-react';
import Framework7, { Device, Request, Support } from 'framework7';

import {
    Page,
    List,
    Card,
    Button,
} from 'framework7-react';


export default class extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            username: '',
            password: '',
            type: 'password',
            score: 'null',
        }
    }
    render() {
        return (
            <Page name="after-splashscreen" className="after-splashscreen-bg" style={{ backgroundColor: 'whitesmoke' }} onPageInit={this.onPageinit.bind(this)} >
                <Card className="inventory-logo-after-splashscreen" style={{ boxShadow: "none" }} >
                </Card>
                <List noHairlinesMd>
                    <div style={{ margin: "30px", marginTop: "60%" }}>
                        <Button large round fill className="margin" style={{ color: "red", backgroundColor: "#ffffffba" }} onClick={this.toSignin.bind(this)}>Sign In</Button>
                        <Button large round outline className="margin" style={{ color: "whitesmoke", border: "solid 2px whitesmoke" }} >Register</Button>
                    </div>
                </List>
                <div style={{ textAlignLast: "center", marginTop: "20px", color: "gray" }}> Telpro Inventory v1.0.0</div>
            </Page >
        )
    }
    onPageinit() {

    }
    toSignin() {
        this.$f7router.navigate('/login-page/');
    }

}