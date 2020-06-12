import React from 'react';
import { f7, f7ready } from 'framework7-react';
import Framework7, { Device, Request, Support } from 'framework7';
import swal from 'sweetalert';

import {
    BrowserView,
    MobileView,
    mobileModel,
    mobileVendor,
    isMobile,
    deviceDetect,
    deviceType,
    engineName,
    engineVersion,
    osName,
    osVersion
} from "react-device-detect";

import {
    Page,
    List,
    Input,
    ListInput,
    Icon,
    Card,
    CardContent,
    ListItem,
    Button,
    Fab,
    Toggle,
    Row,
    Col
} from 'framework7-react';
import app from '../../components/app';


export default class extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            id_admin: '',
            nama_admin: '',
            username: '',
            password: '',
            nik: '',
            jabatan: '',
            email: '',
            no_telp: '',
            jenis_kelamin: '',
            type: 'password',
            score: 'null',
        }
        this.myRef = React.createRef()
        this.navbarHandler = this.navbarHandler.bind(this);
    }

    render() {
        return (
            <Page pageContent={false} name="add-administrator" className="city-building-bg" style={{ backgroundColor: 'whitesmoke' }} onPageInit={this.onPageInit.bind(this)}>
                <div className="navbar" style={{ zIndex: "1" }}>
                    <div id="navbar-bg" className="navbar-bg navbar-custom inventory-logo-left" style={{ height: '185px', borderRadius: " 0 0 0px 0px" }}>
                        <div className="center">
                            <div className="title-page">ADD ADMINISTRATOR</div>
                        </div>
                    </div>
                    <div className="navbar-inner sliding">
                        <div style={{ display: "none" }} className="left">
                            <a className="icon-only link back icon-smooth margin-left-10" href="#">
                                <i className="icon f7-icons">arrow_turn_up_left</i>
                                {/* <i className="icon icon-back"></i> */}
                            </a>
                        </div>

                        <div className="right">
                            <a className="link icon-only panel-open" href="#" data-panel="right">
                                {/* <i className="icon f7-icons icon-smooth margin-right-10">ellipsis_vertical</i> */}
                            </a>
                        </div>
                    </div>
                </div>

                <div className="page-content" onScroll={this.navbarHandler} ref={this.myRef}>
                    <div style={{ textAlignLast: "center", height: "60px" }} className="person-icon">
                        {/* <i className="icon f7-icons icon-menu icon-title icon-disable" style={{ textShadow: "rgba(0, 0, 0, 0.17) 0px 2px 0px", color: "rgb(196, 192, 185)" }}>person_crop_circle_fill_badge_plus</i> */}
                    </div>
                    <Card className="card-list-form padding-bottom">
                        <List noHairlinesMd>
                            <ListInput
                                className="margin-bottom"
                                type="text"
                                inputId="id-admin"
                                placeholder="ID Admin"
                                readonly
                                className="margin-top"
                            // clearButton
                            >
                                <Icon className="icon-smooth" f7="ID" slot="media" />
                            </ListInput>
                        </List>
                    </Card>
                    <Card className="card-list-form ">
                        <List noHairlinesMd>
                            <li>
                                <Card className="card-in-form label-list" ><i className=" icon f7-icons  margin-right" style={{ fontSize: "23px" }}>person_fill</i>
                                     Info Administrator
                                <div className="field-separator"></div>
                                    <CardContent padding={false}>
                                        <ul>
                                            <li className="margin-input">
                                                <div className="item-content item-input icon-top">
                                                    <div className="item-media">
                                                        <i className="icon-smooth icon f7-icons" style={{ borderRadius: "6px", border: "none", opacity: "0.8" }}>person_fill</i>
                                                    </div>
                                                    <div id="label-nama-admin" style={{ display: "none" }}>Admin Name</div>
                                                </div>
                                            </li>
                                            <li className="margin-input">
                                                <div className="item-input">
                                                    <div className="item-input-wrap">
                                                        <input type="text" onInput={this.showLabelInput.bind(this)} placeholder="Admin Name" id="nama-admin" style={{ textAlignLast: "center" }} className=""></input>
                                                    </div>
                                                </div>
                                            </li>
                                            <div className="field-separator"></div>
                                            <li className="margin-input">
                                                <div className="item-content item-input icon-top">
                                                    <div className="item-media">
                                                        <i className="icon-smooth icon f7-icons" style={{ borderRadius: "6px", border: "none", opacity: "0.8" }}>creditcard_fill</i>
                                                    </div>
                                                    <div id="label-nik-admin" style={{ display: "none" }}>NIK</div>
                                                </div>
                                            </li>
                                            <li className="margin-input" style={{ marginBottom: "20px" }}>
                                                <div className="item-input">
                                                    <div className="item-input-wrap">
                                                        <input type="number" placeholder="NIK" onInput={this.showLabelInput.bind(this)} id="nik-admin" style={{ textAlignLast: "center" }} className=""></input>
                                                    </div>
                                                </div>
                                            </li>
                                            <div className="field-separator"></div>
                                            <li className="select-input margin-input" >
                                                <div className="item-content item-input">
                                                    <div className="item-inner">
                                                        <div className="item-input-wrap input-dropdown">
                                                            <select placeholder="Jabatan" id="jabatan-admin" className="select-jabatan" style={{ textAlignLast: "center" }}>
                                                                <option value="">Position</option>
                                                                <option value="Manager">Manager</option>
                                                                <option value="3S">3S</option>
                                                                <option value="Chief">Chief</option>
                                                                <option value="Supervisor">Supervisor</option>
                                                                <option value="Leader">Leader</option>
                                                                <option value="Administrator">Administrator</option>
                                                            </select>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                            <div className="field-separator"></div>
                                            <li className="select-input margin-input" >
                                                <div className="item-content item-input">
                                                    <div className="item-inner">
                                                        <div className="item-input-wrap input-dropdown">
                                                            <select placeholder="Jenis Kelamin" id="jenis-kelamin-admin" className="jenis-kelamin" style={{ textAlignLast: "center" }}>
                                                                <option value="">Gender</option>
                                                                <option value="Laki-laki">Male</option>
                                                                <option value="Perempuan">Female</option>
                                                            </select>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                            <div className="field-separator"></div>
                                        </ul>
                                    </CardContent>
                                </Card>
                            </li>
                        </List>
                    </Card>
                    <Card className="card-list-form ">
                        <List noHairlinesMd>
                            <li>
                                <Card className="card-in-form label-list" ><i className=" icon f7-icons margin-right" style={{ fontSize: "23px" }}>person_crop_circle_badge_checkmark</i>
                                     Account Info
                                <div className="field-separator"></div>
                                    <CardContent padding={false}>
                                        <ul>
                                            <li className="margin-input">
                                                <div className="item-content item-input icon-top">
                                                    <div className="item-media">
                                                        <i className="icon-smooth icon f7-icons" style={{ borderRadius: "6px", border: "none", opacity: "0.8" }}>checkmark_shield_fill</i>
                                                    </div>
                                                    <div id="label-username" style={{ display: "none" }}>Username</div>
                                                </div>
                                            </li>
                                            <li className="margin-input">
                                                <div className=" item-input">
                                                    <div className="item-input-wrap">
                                                        <input type="text" placeholder="Username" onInput={this.showLabelInput.bind(this)} id="username" style={{ textAlignLast: "center" }} className=""></input>
                                                    </div>
                                                </div>
                                            </li>
                                            <div className="field-separator"></div>
                                            <li className="margin-input">
                                                <div className="item-content item-input icon-top">
                                                    <div className="item-media">
                                                        <i className="icon-smooth icon f7-icons" style={{ borderRadius: "6px", border: "none", opacity: "0.8" }}>lock</i>
                                                    </div>
                                                    <div id="label-password" style={{ display: "none" }}>Password</div>
                                                </div>
                                            </li>
                                            <li className="margin-bottom margin-input">
                                                <div className="item-input">
                                                    <div className="item-input-wrap">
                                                        <input type={this.state.type}
                                                            placeholder="Password"
                                                            className="password__input"
                                                            onChange={this.passwordStrength.bind(this)}
                                                            onInput={this.showLabelInput.bind(this)}
                                                            id="password"
                                                            style={{ textAlignLast: "center" }}
                                                        />
                                                        <i className="password__show icon f7-icons" onClick={this.showHide.bind(this)}>{this.state.type === 'text' ? 'eye_slash' : 'eye'}</i>
                                                        <span className="password__strength" data-score={this.state.score} />
                                                    </div>
                                                </div>
                                            </li>
                                            <div className="field-separator"></div>
                                            <li className="margin-input">
                                                <div className="item-content item-input icon-top">
                                                    <div className="item-media">
                                                        <i className="icon-smooth icon f7-icons" style={{ borderRadius: "6px", border: "none", opacity: "0.8" }}>pencil_ellipsis_rectangle</i>
                                                    </div>
                                                    <div id="label-retype-password" style={{ display: "none" }}>Retype Password</div>
                                                </div>
                                            </li>
                                            <li className="margin-input">
                                                <div className="item-input">
                                                    <div className="item-input-wrap">
                                                        <input type={this.state.type}
                                                            placeholder=" Retype Password"
                                                            className="password__input"
                                                            onInput={this.showLabelInput.bind(this)}
                                                            id="retype-password"
                                                            style={{ textAlignLast: "center" }}
                                                        />
                                                        <i className="password__show icon f7-icons" onClick={this.showHide.bind(this)}>{this.state.type === 'text' ? 'eye_slash' : 'eye'}</i>
                                                    </div>
                                                </div>
                                            </li>
                                            <div className="field-separator"></div>
                                        </ul>
                                    </CardContent>
                                </Card>
                            </li>
                        </List>
                    </Card>
                    <Card className="card-list-form ">
                        <List noHairlinesMd>
                            <li>
                                <Card className="card-in-form label-list" ><i className=" icon f7-icons  margin-right" style={{ fontSize: "23px" }}>phone_down_circle</i>
                                     Contact Info
                                <div className="field-separator"></div>
                                    <CardContent padding={false}>
                                        <ul>
                                            <li className="margin-input">
                                                <div className="item-content item-input icon-top">
                                                    <div className="item-media">
                                                        <i className="icon-smooth icon f7-icons" style={{ borderRadius: "6px", border: "none", opacity: "0.8" }}>envelope_fill</i>
                                                    </div>
                                                    <div id="label-email-admin" style={{ display: "none" }}>Email</div>
                                                </div>
                                            </li>
                                            <li className="margin-input">
                                                <div className="item-input">
                                                    <div className="item-input-wrap">
                                                        <input type="email" placeholder="Email" onInput={this.showLabelInput.bind(this)} id="email-admin" style={{ textAlignLast: "center" }} className=""></input>
                                                    </div>
                                                </div>
                                            </li>
                                            <div className="field-separator"></div>
                                            <li className="margin-input">
                                                <div className="item-content item-input icon-top">
                                                    <div className="item-media">
                                                        <i className="icon-smooth icon f7-icons" style={{ borderRadius: "6px", border: "none", opacity: "0.8" }}>phone_fill</i>
                                                    </div>
                                                    <div id="label-phone-number-admin" style={{ display: "none" }}>Phone Number</div>
                                                </div>
                                            </li>
                                            <li className="margin-input margin-bottom">
                                                <div className="item-input">
                                                    <div className="item-input-wrap">
                                                        <input type="tel" placeholder="Phone Number" onInput={this.showLabelInput.bind(this)} id="phone-number-admin" style={{ textAlignLast: "center" }} className=""></input>
                                                    </div>
                                                </div>
                                            </li>
                                            <div className="field-separator"></div>
                                        </ul>
                                    </CardContent>
                                </Card>
                            </li>
                        </List>
                    </Card>
                    <Card className="card-list-form ">
                        <List noHairlinesMd>
                            <Button md round outline className="margin margin-top" onClick={this.saveGoods.bind(this)}>Submit</Button>
                        </List>
                    </Card>

                </div>
            </Page >
        )
    }
    saveGoods() {
        var url_api = 'https://api.jumantya.my.id/index.php/api/';
        Framework7.request({
            url: url_api + 'Admin',
            method: 'GET',
            data: { get_id: 1 },
            dataType: 'json',
            statusCode: {
                404: function (xhr) {
                    alert('page not found');
                }
            },
            beforeSend: function (xhr) { },
            success: function (data) {
                var arr = [];
                var row_count = data[0].row_count;
                var id_seq = parseInt(row_count) + 1;
                var id_admin;
                if (row_count < 9) {
                    id_admin = ("ADM" + "0" + id_seq);
                } else if (row_count >= 999) {
                    id_admin = ("ADM" + id_seq);
                }
                $('#id-admin').val(id_admin);
            },
            error: function () { }
        });

        var id_admin = $("#id-admin").val();
        var nama_admin = $("#nama-admin").val();
        var nik = $("#nik-admin").val();
        var username = $("#username").val();
        var password = $("#password").val();
        var email = $("#email-admin").val();
        var no_telp = $("#phone-number-admin").val();
        var jabatan = $("#jabatan-admin").val();
        var jenis_kelamin = $("#jenis-kelamin-admin").val();
        var photo = null;

        var nama_admin_current = localStorage.getItem("nama_admin");

        this.setState({ id_admin: id_admin });
        this.setState({ nama_admin: nama_admin });
        this.setState({ nik: nik });
        this.setState({ username: username });
        this.setState({ password: password });
        this.setState({ email: email });
        this.setState({ no_telp: no_telp });
        this.setState({ jabatan: jabatan });
        this.setState({ jenis_kelamin: jenis_kelamin });

        console.log("id admin : " + this.state.id_admin)
        console.log("nama admin : " + this.state.nama_admin)
        console.log("nik : " + this.state.nik)
        console.log("username : " + this.state.username)
        console.log("password : " + this.state.password)
        console.log("email : " + this.state.username)
        console.log("no telp : " + this.state.no_telp)
        console.log("jabatan : " + this.state.jabatan)
        console.log("jenis kelamin : " + this.state.jenis_kelamin)

        if (nama_admin == '') {
            swal("Lengkapi Form Anda untuk melakukan peng-entry-an Admin baru", "", "warning");
        } else if (jabatan == '') {
            swal("Position belum dipilih", "", "warning");
        } else if (jenis_kelamin == '') {
            swal("Gender belum dipilih", "", "warning");
        } else if (nik == '') {
            swal("NIK belum terisi", "", "warning");
        } else if (username == '') {
            swal("Username belum terisi", "", "warning");
        } else if (password == '') {
            swal("Password belum terisi", "", "warning");
        } else if (email == '') {
            swal("Email belum terisi", "", "warning");
        } else if (no_telp == '') {
            swal("Phone Number belum terisi", "", "warning");
        } else {
            Framework7.request({
                url: 'https://api.jumantya.my.id/index.php/api/Admin',
                method: 'POST',
                data: { id_admin: id_admin, nama_admin: nama_admin, NIK: nik, jabatan: jabatan, username: username, password: password, jenis_kelamin: jenis_kelamin, no_telp: no_telp, email: email, photo: photo },
                dataType: 'json',
                statusCode: {
                    404: function (xhr) {
                        alert('page not found');
                    }
                },
                beforeSend: function (xhr) { },
                success: function (data) {
                    swal("Add New Administrator Successful!", "", "success");
                    Framework7.request({
                        url: 'https://fcm.googleapis.com/fcm/send',
                        method: 'POST',
                        data: {
                            "condition": "'goods_request' in topics",
                            "notification": {
                                "title": "New Admin Addition Notification",
                                "body": nama_admin + " (" + jabatan + "), Added by " + nama_admin_current + ""
                            }, "data": {
                                "title": "New Admin Addition Notification",
                                "body": nama_admin + " (" + jabatan + "), Added by " + nama_admin_current + "",
                                "message": "Hello how are you?",
                                "meta": {
                                    "type": "small",
                                    "info": "Search"
                                }
                            }
                            // "to": "ewZ219dVyPQ:APA91bGiTjzr_Gca2QZfU_DCCWNno0gRnBe5ttoVIzGF2o6hvLuEvMpkFS4Mq5U0bH2c1oR4TJ3ezH9rVZCn4q-Cct2ZAr0YFJuAVGEiI6ehRjMhYL5Zxqcqd6EDcsarAqV27MCsTcdA",
                        },
                        headers: { 'Authorization': 'key=AAAAN3i6dpI:APA91bE2nZqF9ux6Z6iQdUP-Y60ATUx4Whks15O_IjpGYQ3gfI_KgkoykfnUX6WbbonmMj2E4OLEYLGeGKodJkiAWIEkEGfeaqRhqIObMfGL-I1IO7bWj3LdDAg1KldgwOqDlhu52rZ4' },
                        contentType: 'application/json',
                        dataType: 'json',
                        statusCode: {
                            404: function (xhr) {
                                alert('page not found');
                            }
                        },
                        beforeSend: function (xhr) { },
                        success: function (data) {
                            console.log(data);
                            f7.views.main.router.back();
                        },
                        error: function () { }
                    });


                },
                error: function () { }
            });



        }

    }

    onPageInit() {
        var url_api = 'https://api.jumantya.my.id/index.php/api/';

        console.log('device info: ' + osName + ' ' + osVersion + ' ' + mobileVendor + ' ' + mobileModel + ' ' + engineName + ' ' + engineVersion);

        Framework7.request({
            url: url_api + 'Admin',
            method: 'GET',
            data: { get_id: 1 },
            dataType: 'json',
            statusCode: {
                404: function (xhr) {
                    alert('page not found');
                }
            },
            beforeSend: function (xhr) { },
            success: function (data) {
                var arr = [];
                var row_count = data[0].row_count;
                var id_seq = parseInt(row_count) + 1;
                var id_admin;
                if (row_count < 9) {
                    id_admin = ("ADM" + "0" + id_seq);
                } else if (row_count >= 999) {
                    id_admin = ("ADM" + id_seq);
                }
                $('#id-admin').val(id_admin);
            },
            error: function () { }
        });



    }
    showLabelInput() {
        if ($("#nama-admin").val() != '') {
            console.log("show label nama barang")
            $("#label-nama-admin").show();
        } else {
            console.log("hide label nama barang")
            $("#label-nama-admin").hide();
        }

        if ($("#nik-admin").val() != '') {
            console.log("show label masa pakai")
            $("#label-nik-admin").show();
        } else {
            $("#label-nik-admin").hide();
        }

        var nik_admin = $("#nik-admin").val();
        nik_admin = parseInt(nik_admin.length);
        console.log('nik admin regex: ' + nik_admin)
        if (nik_admin > 8) {
            swal("NIK Only 8 digits", "", "warning");
            $("#nik-admin").val("");
        } else {

        }

        if ($("#username").val() != '') {
            $("#label-username").show();
        } else {
            $("#label-username").hide();

        }

        if ($("#password").val() != '') {
            $("#label-password").show();
        } else {
            $("#label-password").hide();
        }

        if ($("#retype-password").val() != '') {
            $("#label-retype-password").show();
        } else {
            $("#label-retype-password").hide();
        }

        if ($("#email-admin").val() != '') {
            $("#label-email-admin").show();
        } else {
            $("#label-email-admin").hide();
        }

        if ($("#phone-number-admin").val() != '') {
            $("#label-phone-number-admin").show();
        } else {
            $("#label-phone-number-admin").hide();
        }
    }
    onPageBeforeRemove() {
        const self = this;
        const self1 = this;
        // Destroy popup when page removed
        if (self.popup_pelaksana) self.popup_pelaksana.destroy();
        if (self1.popup_barang) self1.popup_barang.destroy();
        $(".navbar").show();
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
    navbarHandler() {
        const scrollY = window.scrollY //Don't get confused by what's scrolling - It's not the window
        const scrollTop = this.myRef.current.scrollTop

        if (scrollTop > 20) {
            $("#navbar-bg").css({ 'transform': 'translateY(-65%)', 'border-radius': '0 0 35px 35px' }).removeClass('navbar-slide-down').addClass('navbar-slide-up')
            $(".title-page").css('margin-top', '140px')
            $(".left").fadeIn(500)
            $(".navbar").css('z-index', '200')
        } else {
            $("#navbar-bg").css({ 'transform': 'translateY(0%)', 'border-radius': '0 0 0px 0px' }).removeClass('navbar-slide-up').addClass('navbar-slide-down')
            $(".title-page").css('margin-top', '20px')
            $(".left").fadeOut(500)
            $(".navbar").css('z-index', '1')
        }
    }

}
