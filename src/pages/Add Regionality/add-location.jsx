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
            id_profile: '',
            id_lokasi: '',
            nama_gedung: '',
            id_admin: '',
        }
        this.myRef = React.createRef()
        this.navbarHandler = this.navbarHandler.bind(this);
    }

    render() {
        return (
            <Page pageContent={false} name="add-location" className="city-building-bg" style={{ backgroundColor: 'whitesmoke' }} onPageInit={this.onPageInit.bind(this)}>
                <div className="navbar" style={{ zIndex: "1" }}>
                    <div id="navbar-bg" className="navbar-bg navbar-custom inventory-logo-left" style={{ height: '185px', borderRadius: " 0 0 0px 0px" }}>
                        <div className="center">
                            <div className="title-page">ADD LOCATION</div>
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
                                inputId="id-location"
                                placeholder="ID Location"
                                readonly
                                className="margin-top"
                            // clearButton
                            >
                                <Icon className="icon-smooth" f7="ID" slot="media" />
                            </ListInput>
                            <li>
                                <Card className="card-in-form label-list" ><i className="icon f7-icons" style={{ fontSize: "23px" }}>info_circle</i>
                                     Info Location
                                     <div className="field-separator"></div>

                                    <CardContent padding={false}>
                                        <ul>
                                            <li className="select-input margin-inut" >
                                                <div className="item-content item-input">
                                                    <div className="item-inner">
                                                        <div className="item-input-wrap input-dropdown">
                                                            <select placeholder="ID Profile" id="id-profile" className="select-profile" style={{ textAlignLast: "center" }}>
                                                                <option value="">Select Regionality</option>
                                                            </select>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                            <div className="field-separator"></div>
                                            <li className="margin-input">
                                                <div className="item-content item-input icon-top">
                                                    <div className="item-media">
                                                        <i className="icon-smooth icon f7-icons" style={{ borderRadius: "6px", border: "none", opacity: "0.8" }}>building_2_fill</i>
                                                    </div>
                                                    <div id="label-location-name" style={{ display: "none" }}>Location Name</div>
                                                </div>
                                            </li>
                                            <li className="margin-input margin-bottom">
                                                <div className="item-input">
                                                    <div className="item-input-wrap">
                                                        <input type="text" placeholder="Location Name" onInput={this.showLabelInput.bind(this)} id="location-name" style={{ textAlignLast: "center" }} className=""></input>
                                                    </div>
                                                </div>
                                            </li>
                                        </ul>
                                    </CardContent>
                                </Card>
                            </li>
                        </List>
                        <Button md round outline className="margin margin-top" onClick={this.saveLocation.bind(this)}>Submit</Button>
                    </Card>

                </div>
            </Page >
        )
    }
    saveLocation() {
        const self = this;
        const app = self.$f7;
        // if (self.infiniteLoading) return;
        self.infiniteLoading = false;
        var url_api = 'https://api.jumantya.my.id/index.php/api/';
        Framework7.request({
            url: url_api + 'Lokasi',
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
                var id_lokasi;
                if (row_count < 9) {
                    id_lokasi = ("LK-" + "00" + id_seq);
                } else if (row_count >= 9) {
                    id_lokasi = ("LK-" + "0" + id_seq);
                } else if (row_count >= 99) {
                    id_lokasi = ("LK-" + id_seq);
                }
                $('#id-location').val(id_lokasi);
            },
            error: function () { }
        });

        var id_profile = $("#id-profile").val();
        var id_lokasi = $("#id-location").val();
        var nama_gedung = $("#location-name").val();
        var nama_admin = localStorage.getItem("nama_admin");
        var device_info = osName + ' ' + osVersion + ' ' + mobileVendor + ' ' + mobileModel + ' ' + engineName + ' ' + engineVersion;

        this.setState({ id_profile: id_profile });
        this.setState({ id_lokasi: id_lokasi });
        this.setState({ nama_gedung: nama_gedung });

        console.log("id profile : " + this.state.id_profile)
        console.log("id lokasi : " + this.state.id_lokasi)
        console.log("nama gedung : " + this.state.nama_gedung)

        if (nama_gedung == '') {
            swal("Lengkapi Form Anda untuk melakukan peng-entry-an lokasi baru", "", "warning");
        } else if (id_profile == '') {
            swal("Regionality belum dipilih", "", "warning");
        } else {
            Framework7.request({
                url: 'https://api.jumantya.my.id/index.php/api/Lokasi',
                method: 'POST',
                data: { id_lokasi: id_lokasi, id_profile: id_profile, nama_gedung: nama_gedung },
                dataType: 'json',
                statusCode: {
                    404: function (xhr) {
                        alert('page not found');
                    }
                },
                beforeSend: function (xhr) { app.progressbar.show(app.theme === 'md' ? 'white' : 'blue'); },
                success: function (data) {
                    console.log("simpan lokasi succeeded")
                    console.log(data);
                    swal("Add New Location Successful!", "", "success");
                    app.progressbar.hide();
                    f7.views.main.router.back();
                    Framework7.request({
                        url: 'https://fcm.googleapis.com/fcm/send',
                        method: 'POST',
                        data: {
                            "condition": "'goods_request' in topics",
                            "notification": {
                                "title": "New Location Addition Notification",
                                "body": nama_gedung + " Added by " + nama_admin + ""
                            }, "data": {
                                "title": "New Location Addition Notification",
                                "body": nama_gedung + " Added by " + nama_admin + "",
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
            data: {},
            dataType: 'json',
            statusCode: {
                404: function (xhr) {
                    alert('page not found');
                }
            },
            beforeSend: function (xhr) { },
            success: function (data) {
                var arr = [];
                for (var i = 0; i < data.length; i++) {
                    var id_profile = data[i].id_profile;
                    var wilayah = data[i].wilayah;
                    var html = '';
                    arr.push(
                        html = '<option value="' + id_profile + '">' + wilayah + '</option>'
                    );
                    $('.select-profile').append(html);
                }

            },
            error: function () { }
        });

        Framework7.request({
            url: url_api + 'Lokasi',
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
                var id_lokasi;
                if (row_count < 9) {
                    id_lokasi = ("LK-" + "00" + id_seq);
                } else if (row_count >= 9) {
                    id_lokasi = ("LK-" + "0" + id_seq);
                } else if (row_count >= 99) {
                    id_lokasi = ("LK-" + id_seq);
                }
                $('#id-location').val(id_lokasi);
            },
            error: function () { }
        });


    }

    showLabelInput() {
        if ($("#location-name").val() != '') {
            $("#label-location-name").show();
        } else {
            $("#label-location-name").hide();
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
