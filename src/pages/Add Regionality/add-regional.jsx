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
            // Login screen demo data
            id_profile: '',
            wilayah: '',
            alamat: '',
            no_telp: '',
            id_admin: '',
        }
        this.myRef = React.createRef()
        this.navbarHandler = this.navbarHandler.bind(this);
    }

    render() {
        return (
            <Page pageContent={false} name="add-regional" className="city-building-bg" style={{ backgroundColor: 'whitesmoke' }} onPageInit={this.onPageInit.bind(this)}>
                <div className="navbar" style={{ zIndex: "1" }}>
                    <div id="navbar-bg" className="navbar-bg navbar-custom inventory-logo-left" style={{ height: '185px', borderRadius: " 0 0 0px 0px" }}>
                        <div className="center">
                            <div className="title-page">ADD REGIONAL</div>
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
                    <div style={{ textAlignLast: "center", height: "60px" }} className="regionality-icon">
                        {/* <i className="icon f7-icons icon-menu icon-title icon-disable" style={{ textShadow: "rgba(0, 0, 0, 0.17) 0px 2px 0px", color: "rgb(239, 225, 197)" }}>building_2_fill</i> */}
                    </div>
                    <Card className="card-list-form shadow">
                        <List noHairlinesMd>
                            <ListInput
                                // className="input-border"
                                type="text"
                                inputId="id-profile"
                                placeholder="ID Regional"
                                readonly
                                className="margin-top"
                            // clearButton
                            >
                                <Icon className="icon-smooth" f7="ID" slot="media" />
                            </ListInput>
                            <li>
                                <Card className="card-in-form label-list" ><i className="icon f7-icons" style={{ fontSize: "23px" }}>info_circle</i>
                                     Info Regional
                                     <div className="field-separator"></div>
                                    <CardContent padding={false}>
                                        <ul>
                                            <li className="margin-input">
                                                <div className="item-content item-input icon-top">
                                                    <div className="item-media">
                                                        <i className="icon-smooth icon f7-icons" style={{ borderRadius: "6px", border: "none", opacity: "0.8" }}>building_2_fill</i>
                                                    </div>
                                                    <div id="label-regional-name" style={{ display: "none" }}>Regional Name</div>
                                                </div>
                                            </li>
                                            <li className="margin-input">
                                                <div className="item-input">
                                                    <div className="item-input-wrap">
                                                        <input type="text" placeholder="Regional Name" onInput={this.showLabelInput.bind(this)} id="regional-name" style={{ textAlignLast: "center" }} className=""></input>
                                                    </div>
                                                </div>
                                            </li>
                                            <div className="field-separator"></div>

                                            <li className="margin-input">
                                                <div className="item-content item-input icon-top">
                                                    <div className="item-media">
                                                        <i className="icon-smooth icon f7-icons" style={{ borderRadius: "6px", border: "none", opacity: "0.8" }}>phone</i>
                                                    </div>
                                                    <div id="label-phone-number" style={{ display: "none" }}>Phone Number</div>
                                                </div>
                                            </li>
                                            <li className="margin-input">
                                                <div className=" item-input">
                                                    <div className="item-input-wrap">
                                                        <input type="number" placeholder="Phone Number" onInput={this.showLabelInput.bind(this)} id="phone-number" style={{ textAlignLast: "center" }} className=""></input>
                                                    </div>
                                                </div>
                                            </li>
                                            <div className="field-separator"></div>

                                            <li className="margin-input">
                                                <div className="item-content item-input icon-top">
                                                    <div className="item-media">
                                                        <i className="icon-smooth icon f7-icons" style={{ borderRadius: "6px", border: "none", opacity: "0.8" }}>placemark</i>
                                                    </div>
                                                    <div id="label-address" style={{ display: "none" }}>Address</div>
                                                </div>
                                            </li>
                                            <li className="margin-input margin-bottom">
                                                <div className="item-input">
                                                    <div className="item-input-wrap">
                                                        <input type="textarea" resizable="true" placeholder="Address" onInput={this.showLabelInput.bind(this)} id="address" style={{ textAlignLast: "center", width: "-webkit-fill-available" }} className=""></input>
                                                    </div>
                                                </div>
                                            </li>
                                        </ul>
                                    </CardContent>
                                </Card>
                            </li>
                        </List>
                        <Button md round outline className="margin margin-top" onClick={this.saveRegional.bind(this)}>Submit</Button>
                    </Card>

                </div>
            </Page >
        )
    }
    saveRegional() {
        const self = this;
        const app = self.$f7;
        // if (self.infiniteLoading) return;
        self.infiniteLoading = false;
        var url_api = 'https://api.jumantya.my.id/index.php/api/';
        Framework7.request({
            url: url_api + 'Profile',
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
                var id_masuk;
                if (row_count < 9) {
                    id_masuk = ("PR-" + "00" + id_seq);
                } else if (row_count >= 9) {
                    id_masuk = ("PR-" + "0" + id_seq);
                } else if (row_count >= 99) {
                    id_masuk = ("PR-" + id_seq);
                }
                $('#id-profile').val(id_masuk);
            },
            error: function () { }
        });

        var id_profile = $("#id-profile").val();
        var wilayah = $("#regional-name").val();
        var alamat = $("#address").val();
        var no_telp = $("#phone-number").val();
        var id_admin = localStorage.getItem("id_admin");
        var nama_admin = localStorage.getItem("nama_admin");
        var device_info = osName + ' ' + osVersion + ' ' + mobileVendor + ' ' + mobileModel + ' ' + engineName + ' ' + engineVersion;

        this.setState({ id_profile: id_profile });
        this.setState({ wilayah: wilayah });
        this.setState({ alamat: alamat });
        this.setState({ no_telp: no_telp });
        this.setState({ id_admin: id_admin });

        console.log("id profile : " + this.state.id_profile)
        console.log("wilayah : " + this.state.wilayah)
        console.log("alamat : " + this.state.alamat)
        console.log("no telp : " + this.state.no_telp)
        console.log("id admin : " + this.state.id_admin)

        if (wilayah == '') {
            swal("Lengkapi Form Anda untuk melakukan peng-entry-an regional baru", "", "warning");
        } else if (wilayah == '') {
            swal("Regional Name belum terisi", "", "warning");
        } else if (no_telp == '') {
            swal("Phone Number belum terisi", "", "warning");
        } else if (alamat == '') {
            swal("Address belum terisi", "", "warning");
        } else {
            Framework7.request({
                url: 'https://api.jumantya.my.id/index.php/api/Profile',
                method: 'POST',
                data: { id_profile: id_profile, wilayah: wilayah, alamat: alamat, no_telp: no_telp, id_admin: id_admin },
                dataType: 'json',
                statusCode: {
                    404: function (xhr) {
                        alert('page not found');
                    }
                },
                beforeSend: function (xhr) { app.progressbar.show(app.theme === 'md' ? 'white' : 'blue'); },
                success: function (data) {
                    console.log("simpan wilayah succeeded")
                    console.log(data);
                    swal("Add New Regional Successful!", "", "success");
                    app.progressbar.hide();
                    f7.views.main.router.back();
                    Framework7.request({
                        url: 'https://fcm.googleapis.com/fcm/send',
                        method: 'POST',
                        data: {
                            "condition": "'goods_request' in topics",
                            "notification": {
                                "title": "New Regional Addition Notification",
                                "body": wilayah + " Added by " + nama_admin + ""
                            }, "data": {
                                "title": "New Regional Addition Notification",
                                "body": wilayah + " Added by " + nama_admin + "",
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

        var deviceId = Framework7.device.os;
        console.log(deviceId);

        Framework7.request({
            url: url_api + 'Profile',
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
                var id_masuk;
                if (row_count < 9) {
                    id_masuk = ("PR-" + "00" + id_seq);
                } else if (row_count >= 9) {
                    id_masuk = ("PR-" + "0" + id_seq);
                } else if (row_count >= 99) {
                    id_masuk = ("PR-" + id_seq);
                }
                $('#id-profile').val(id_masuk);
            },
            error: function () { }
        });


    }

    showLabelInput() {
        if ($("#regional-name").val() != '') {
            console.log("show label nama barang")
            $("#label-regional-name").show();
        } else {
            console.log("hide label nama barang")
            $("#label-regional-name").hide();
        }

        if ($("#phone-number").val() != '') {
            $("#label-phone-number").show();
        } else {
            $("#label-phone-number").hide();
        }

        if ($("#address").val() != '') {
            $("#label-address").show();
        } else {
            $("#label-address").hide();
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
