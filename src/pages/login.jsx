import React from 'react';
import { f7, f7ready } from 'framework7-react';
import Framework7, { Device, Request, Support } from 'framework7';

import {
    Page,
    List,
    ListInput,
    ListItem,
    Icon,
    Card,
    Button,
    Label,
    Toggle
} from 'framework7-react';
import app from '../components/app';


export default class extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            // Login screen demo data
            username: '',
            password: '',
            type: 'password',
            score: 'null',
        }
    }
    render() {
        return (
            <Page name="login" className="city-building-bg" style={{ backgroundColor: 'whitesmoke' }} >
                <Card className="inventory-logo-login card-top " >
                    {/* <div className="text-align-center" style={{ letterSpacing: '5px', padding: '10px', fontFamily: 'Impact, Charcoal, sans-serif', fontSize: 'x-large', color: 'whitesmoke' }}>INVENTORY</div>
                    <div className="text-align-center" style={{ letterSpacing: '5px', padding: '0px', fontFamily: 'Impact, Charcoal, sans-serif', fontSize: 'x-large', color: 'whitesmoke' }}>APP</div> */}
                </Card>
                <Card className="card-custom-login shadow">
                    <List noHairlinesMd>
                        <div style={{ textAlignLast: "center", color: "#fd5757" }}>
                            <i style={{ fontSize: "100px" }} className="icon f7-icons">person_circle</i>
                        </div>
                        <div style={{ textAlignLast: "center" }}>
                        </div>
                        {/* <ListInput
                            inputStyle={{ height: "50px" }}
                            className="input-login"
                            type="text"
                            placeholder="Username"
                            value={this.state.username}
                            onInput={(e) => this.setState({ username: e.target.value })}
                        // clearButton
                        >
                            <Icon className="icon-smooth" f7="person" slot="media" />
                        </ListInput> */}

                        <li className="margin-top">
                            <div className="item-content item-input">
                                <div className="item-media" >
                                    <i className="icon-smooth icon f7-icons">person</i>
                                </div>
                                <div className="item-inner">
                                    <div className="item-input-wrap">
                                        <input type="text" placeholder="Username" className="input-login" onChange={(e) => this.setState({ username: e.target.value })} value={this.state.username} />
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li id="password" className="margin-top">
                            <div className="item-content item-input">
                                <div className="item-media">
                                    <i className="icon-smooth icon f7-icons">lock</i>
                                </div>
                                <div className="item-inner">
                                    <div className="item-input-wrap">
                                        <input type={this.state.type}
                                            placeholder="Password"
                                            className="password__input input-login"
                                            onInput={(e) => this.setState({ password: e.target.value })}
                                        // onChange={this.passwordStrength.bind(this)}
                                        />
                                        <i className="password__show icon f7-icons" onClick={this.showHide.bind(this)}>{this.state.type === 'text' ? 'eye_slash' : 'eye'}</i>
                                        {/* <span className="password__strength" data-score={this.state.score} /> */}
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li style={{ marginTop: "30px" }}>
                            <Button large round outline className="margin" onClick={this.LoginAuth.bind(this)}>LOG IN</Button>
                        </li>
                        <li>
                            {/* <Button large round outline className="margin">Sign Up</Button> */}
                        </li>
                    </List>
                </Card>
                <div style={{ textAlignLast: "center", marginTop: "50px", color: "gray" }}> Telpro Inventory v1.0.0</div>
            </Page >
        )
    }
    LoginAuth() {
        var username = this.state.username;
        var password = this.state.password;
        // if (this.state.username == "admin01" && this.state.password == "utara" || this.state.username == "dika" && this.state.password == "setya") {
        //     this.$f7router.navigate('/home-page/');
        //     // f7.dialog.toast('Welcome to our App');
        //     f7.toast.create('Welcome to our App')
        // } else {
        //     f7.dialog.alert('Please input the form correctly!');
        // }

        const self = this;
        const app = self.$f7;
        // if (self.infiniteLoading) return;
        self.infiniteLoading = true;

        var url_api = 'https://api.jumantya.my.id/index.php/api/';
        if (username == "" && username == "") {
            f7.dialog.alert('Silahkan isi form Login Anda!');
        } else if (username == "") {
            f7.dialog.alert('Isi Username Anda!');
        } else if (password == "") {
            f7.dialog.alert('Isi Password Anda!');
        } else {
            Framework7.request({
                url: url_api + 'Pelaksana?nik=' + username + '',
                method: 'GET',
                data: {},
                dataType: 'json',
                statusCode: {
                    404: function (xhr) {
                        alert('page not found');
                    }
                },
                // beforeSend: function (xhr) { self.$f7.dialog.preloader('Otentifikasi User...'); },
                beforeSend: function (xhr) { app.progressbar.show(app.theme === 'md' ? 'white' : 'blue'); },
                success: function (data) {
                    if (data.length == '0') {
                        console.log(data.length)
                        Framework7.request({
                            url: url_api + 'Admin?username=' + username + '',
                            method: 'GET',
                            data: {},
                            dataType: 'json',
                            statusCode: {
                                404: function (xhr) {
                                    alert('page not found');
                                }
                            },
                            beforeSend: function (xhr) { },
                            success: function (data) {
                                if (data.length == 0) {
                                    f7.dialog.alert('Username tidak terdaftar!');
                                    // self.$f7.dialog.close();
                                    app.progressbar.hide();
                                } else {
                                    Framework7.request({
                                        url: url_api + 'Admin',
                                        method: 'GET',
                                        data: { username: username },
                                        dataType: 'json',
                                        statusCode: {
                                            404: function (xhr) {
                                                alert('page not found');
                                            }
                                        },
                                        beforeSend: function (xhr) { },
                                        success: function (data) {
                                            if (data[0].password !== password) {
                                                // self.$f7.dialog.close();
                                                app.progressbar.hide();
                                                f7.dialog.alert('Password Salah!!');
                                            } else {
                                                app.progressbar.hide();
                                                // self.$f7.dialog.close();
                                                f7.views.main.router.navigate('/home-page/');
                                                // f7.dialog.toast('Welcome to our App');
                                                f7.toast.create('Welcome to our App')
                                                localStorage.setItem("username", username);
                                                localStorage.setItem("nama_admin", data[0].nama_admin);
                                                localStorage.setItem("jabatan", data[0].jabatan);
                                                localStorage.setItem("id_admin", data[0].id_admin);
                                                localStorage.setItem("session", "has session");
                                                if (window.StatusBar) {
                                                    StatusBar.styleLightContent()
                                                    StatusBar.backgroundColorByHexString('#fc4d4d');
                                                    StatusBar.overlaysWebView(false);
                                                }
                                            }

                                        },
                                        error: function () { }
                                    });
                                }

                            },
                            error: function () { }
                        });
                    } else {
                        Framework7.request({
                            url: url_api + 'Pelaksana',
                            method: 'GET',
                            data: { nik: username },
                            dataType: 'json',
                            statusCode: {
                                404: function (xhr) {
                                    alert('page not found');
                                }
                            },
                            beforeSend: function (xhr) { },
                            success: function (data) {
                                var password_db = data[0].password;
                                if (password !== password_db) {
                                    f7.dialog.alert('Password Salah!!');
                                    // self.$f7.dialog.close();
                                    app.progressbar.hide();
                                } else {
                                    // self.$f7.dialog.close();
                                    app.progressbar.hide();
                                    f7.views.main.router.navigate('/home-page/');
                                    localStorage.setItem("username", username);
                                    localStorage.setItem("jabatan", data[0].jabatan);
                                    localStorage.setItem("nama_pelaksana", data[0].nama);
                                    localStorage.setItem("session", "has session");
                                    if (window.StatusBar) {
                                        StatusBar.styleLightContent()
                                        StatusBar.backgroundColorByHexString('#fc4d4d');
                                        StatusBar.overlaysWebView(false);
                                    }

                                }

                            },
                            error: function () { }
                        });
                    }
                },
                error: function () { }
            });

        }


    }
    showHide(e) {
        e.preventDefault();
        e.stopPropagation();
        this.setState({
            type: this.state.type === 'text' ? 'password' : 'text'
        })
    }

    passwordStrength(e) {
        if (e.target.value === '') {
            this.setState({
                score: 'null'
            })
        }
        else {
            var zxcvbn = require('zxcvbn');
            var pw = zxcvbn(e.target.value);
            this.setState({
                score: pw.score
            });
        }
    }

}