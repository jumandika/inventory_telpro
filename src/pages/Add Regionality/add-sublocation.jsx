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
            id_lokasi: '',
            id_sublokasi: '',
            lantai: '',
        }
        this.myRef = React.createRef()
        this.navbarHandler = this.navbarHandler.bind(this);
    }

    render() {
        return (
            <Page pageContent={false} name="add-sublocation" className="city-building-bg" style={{ backgroundColor: 'whitesmoke' }} onPageInit={this.onPageInit.bind(this)}>
                 <div className="navbar" style={{ zIndex: "1" }}>
                    <div id="navbar-bg" className="navbar-bg navbar-custom inventory-logo-left" style={{ height: '185px', borderRadius: " 0 0 0px 0px" }}>
                        <div className="center">
                            <div className="title-page">ADD SUBLOCATION</div>
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
                                inputId="id-sublocation"
                                placeholder="ID Sublocation"
                                readonly
                                className="margin-top"
                            // clearButton
                            >
                                <Icon className="icon-smooth" f7="ID" slot="media" />
                            </ListInput>
                            <li>
                                <Card className="card-in-form label-list"><i className="icon f7-icons" style={{ fontSize: "23px" }}>info_circle</i>
                                     Info Location
                                     <div className="field-separator"></div>
                                    <CardContent padding={false}>
                                        <ul>
                                            <li className="select-input margin-input" >
                                                <div className="item-content item-input">
                                                    <div className="item-inner">
                                                        <div className="item-input-wrap input-dropdown">
                                                            <select placeholder="ID Profile" id="id-profile" onChange={this.showLocation.bind(this)} className="select-profile" style={{ textAlignLast: "center" }}>
                                                                <option value="">Select Regionality</option>
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
                                                            <select placeholder="ID Location" id="id-lokasi" className="select-location" style={{ textAlignLast: "center" }}>
                                                                <option value="">Select Location</option>
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
                                                    <div id="label-sublocation-name" style={{ display: "none" }}>Sublocation Name</div>
                                                </div>
                                            </li>
                                            <li className="margin-input margin-bottom">
                                                <div className="item-input">
                                                    <div className="item-input-wrap">
                                                        <input type="text" placeholder="Sublocation Name" onInput={this.showLabelInput.bind(this)} id="sublocation-name" style={{ textAlignLast: "center" }} className=""></input>
                                                    </div>
                                                </div>
                                            </li>
                                        </ul>
                                    </CardContent>
                                </Card>
                            </li>
                        </List>
                        <Button md round outline className="margin margin-top" onClick={this.saveSublocation.bind(this)}>Submit</Button>
                    </Card>

                </div>
            </Page >
        )
    }
    saveSublocation() {
        const self = this;
        const app = self.$f7;
        // if (self.infiniteLoading) return;
        self.infiniteLoading = false;
        var url_api = 'https://api.jumantya.my.id/index.php/api/';
        Framework7.request({
            url: url_api + 'Sublokasi',
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
                var row_count = data[0].row_count;
                var id_sublokasi = parseInt(row_count) + 1;
                $('#id-sublocation').val(id_sublokasi);
            },
            error: function () { }
        });

        var id_profile = $("#id-profile").val();
        var wilayah = $("#id-profile").text();
        var id_lokasi = $("#id-lokasi").val();
        var nama_gedung = $("#id-lokasi option:selected").html();
        var id_sublokasi = $("#id-sublocation").val();
        var lantai = $("#sublocation-name").val();
        var nama_admin = localStorage.getItem("nama_admin");
        var device_info = osName + ' ' + osVersion + ' ' + mobileVendor + ' ' + mobileModel + ' ' + engineName + ' ' + engineVersion;

        this.setState({ id_sublokasi: id_sublokasi });
        this.setState({ id_lokasi: id_lokasi });
        this.setState({ lantai: lantai });

        console.log("id sublokasi : " + this.state.id_sublokasi)
        console.log("id lokasi : " + this.state.id_lokasi)
        console.log("nama lantai : " + this.state.lantai)

        if (id_profile == '') {
            swal("Lengkapi Form Anda untuk melakukan peng-entry-an sublokasi baru", "", "warning");
        } else if (id_lokasi == '') {
            swal("Location belum dipilih", "", "warning");
        } else if (lantai == '') {
            swal("Sublocation belum terisi", "", "warning");
        } else {
            Framework7.request({
                url: 'https://api.jumantya.my.id/index.php/api/Sublokasi',
                method: 'POST',
                data: { id_sublokasi: id_sublokasi, id_lokasi: id_lokasi, lantai: lantai },
                dataType: 'json',
                statusCode: {
                    404: function (xhr) {
                        alert('page not found');
                    }
                },
                beforeSend: function (xhr) { app.progressbar.show(app.theme === 'md' ? 'white' : 'blue'); },
                success: function (data) {
                    console.log("simpan sublokasi succeeded")
                    console.log(data);
                    swal("Add New Sublocation Successful!", "", "success");
                    app.progressbar.hide();
                    f7.views.main.router.back();
                    Framework7.request({
                        url: 'https://fcm.googleapis.com/fcm/send',
                        method: 'POST',
                        data: {
                            "condition": "'goods_request' in topics",
                            "notification": {
                                "title": "New Sublocation Addition Notification",
                                "body": nama_gedung + " " + lantai + " Added by " + nama_admin + ""
                            }, "data": {
                                "title": "New SubLocation Addition Notification",
                                "body": nama_gedung + " " + lantai + " Added by " + nama_admin + "",
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
            url: url_api + 'Sublokasi',
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
                var row_count = data[0].row_count;
                var id_sublocation = parseInt(row_count) + 1;
                $('#id-sublocation').val(id_sublocation);
            },
            error: function () { }
        });


    }
    showLocation() {
        var url_api = 'https://api.jumantya.my.id/index.php/api/';
        var id_profile = $("#id-profile").val();
        Framework7.request({
            url: url_api + 'Lokasi',
            method: 'GET',
            data: { id_profile: id_profile },
            dataType: 'json',
            statusCode: {
                404: function (xhr) {
                    alert('page not found');
                }
            },
            beforeSend: function (xhr) { },
            success: function (data) {
                var arr = [];
                if (data.length != '') {
                    for (var i = 0; i < data.length; i++) {
                        var id_lokasi = data[i].id_lokasi;
                        var nama_gedung = data[i].nama_gedung;
                        var html = '';
                        arr.push(
                            '<option value="' + id_lokasi + '">' + nama_gedung + '</option>'
                        );
                        $('.select-location').html(arr.join(''));
                    }
                } else {
                    arr.push(
                        '<option value="">No Location Found</option>'
                    );
                    $('.select-location').html(arr.join(''));
                }

            },
            error: function () { }
        });
    }

    showLabelInput() {
        if ($("#sublocation-name").val() != '') {
            $("#label-sublocation-name").show();
        } else {
            $("#label-sublocation-name").hide();
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
