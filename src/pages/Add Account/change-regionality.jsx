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
            nama: '',
            nik: '',
            jabatan: '',
            lokasi_kerja: '',
            sub_lokasi: '',
            jenis_kelamin: '',
            no_telp: '',
            email: '',
            id_admin: '',
            password: '',
            type: 'password',
            score: 'null',
        }
        this.myRef = React.createRef()
        this.navbarHandler = this.navbarHandler.bind(this);

    }

    render() {
        return (
            <Page pageContent={false} name="change-regionality" className="city-building-bg" style={{ backgroundColor: 'whitesmoke' }} onPageInit={this.onPageInit.bind(this)}>
                <div className="navbar" style={{ zIndex: "1" }}>
                    <div id="navbar-bg" className="navbar-bg navbar-custom inventory-logo-left" style={{ height: '185px', borderRadius: " 0 0 0px 0px" }}>
                        <div className="center">
                            <div className="title-page">CHANGE REGIONALITY</div>
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
                    <Card className="card-list-form ">
                        <List noHairlinesMd>
                            <li>
                                <Card className="card-in-form label-list" ><i className=" icon f7-icons margin-right" style={{ fontSize: "23px" }}>person_crop_circle_fill</i>
                                     Info Pelaksana
                                     <div className="field-separator"></div>
                                    <CardContent padding={false}>
                                        <ul>

                                            <li className="margin-input">
                                                <div className="item-content item-input icon-top">
                                                    <div className="item-media">
                                                        <i className="icon-smooth icon f7-icons" style={{ borderRadius: "6px", border: "none", opacity: "0.8" }}>person_fill</i>
                                                    </div>
                                                    <div id="label-nama-pelaksana" style={{ display: "none" }}>Name</div>
                                                </div>
                                            </li>
                                            <li className="margin-input">
                                                <div className="item-input">
                                                    <div className="item-input-wrap">
                                                        <input type="text" readOnly onInput={this.showLabelInput.bind(this)} placeholder="Name" id="nama-pelaksana" style={{ textAlignLast: "center" }} className=""></input>
                                                    </div>
                                                </div>
                                            </li>
                                            <div className="field-separator"></div>
                                            <li className="margin-input">
                                                <div className="item-content item-input icon-top">
                                                    <div className="item-media">
                                                        <i className="icon-smooth icon f7-icons" style={{ borderRadius: "6px", border: "none", opacity: "0.8" }}>creditcard_fill</i>
                                                    </div>
                                                    <div id="label-nik-pelaksana" style={{ display: "none" }}>NIK</div>
                                                </div>
                                            </li>
                                            <li className="margin-input " >
                                                <div className="item-input">
                                                    <div className="item-input-wrap">
                                                        <input type="number" placeholder="NIK" readOnly onInput={this.showLabelInput.bind(this)} id="nik-pelaksana" style={{ textAlignLast: "center" }} className=""></input>
                                                    </div>
                                                </div>
                                            </li>
                                            <div className="field-separator"></div>
                                            <li className="margin-input">
                                                <div className="item-content item-input icon-top">
                                                    <div className="item-media">
                                                        <i className="icon-smooth icon f7-icons" style={{ borderRadius: "6px", border: "none", opacity: "0.8" }}>person_crop_square</i>
                                                    </div>
                                                    <div id="label-jabatan-pelaksana" style={{ display: "none" }}>Jabatan</div>
                                                </div>
                                            </li>
                                            <li className="margin-input margin-bottom" >
                                                <div className="item-input">
                                                    <div className="item-input-wrap">
                                                        <input type="text" placeholder="Jabatan" readOnly onInput={this.showLabelInput.bind(this)} id="jabatan-pelaksana" style={{ textAlignLast: "center" }} className=""></input>
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
                                <Card className="card-in-form label-list" ><i className=" icon f7-icons margin-right" style={{ fontSize: "23px" }}>building_2_fill</i>
                                                Info Regionality
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
                                                            <select placeholder="ID Location" id="lokasi-kerja" onChange={this.showSublocation.bind(this)} className="select-location" style={{ textAlignLast: "center" }}>
                                                                <option value="">Select Location</option>
                                                            </select>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                            <div className="field-separator"></div>
                                            <li className="select-input margin-input margin-bottom" >
                                                <div className="item-content item-input">
                                                    <div className="item-inner">
                                                        <div className="item-input-wrap input-dropdown">
                                                            <select placeholder="ID Sublocation" id="sub-lokasi" className="select-sublocation" style={{ textAlignLast: "center" }}>
                                                                <option value="">Select Sublocation</option>
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
                            <Button md round fill className="margin margin-top" onClick={this.updateRegionality.bind(this)}>Submit</Button>
                        </List>
                    </Card>

                </div>
            </Page >
        )
    }
    updateRegionality() {
        // var url_api = 'https://api.jumantya.my.id/index.php/api/';

        // const self = this;
        // const app = self.$f7;
        // self.infiniteLoading = false;

        // var nama = $("#nama-pelaksana").val();
        // var nik = $("#nik-pelaksana").val();
        // var lokasi_kerja = $('#lokasi-kerja option:selected').html();
        // var sub_lokasi = $('#sub-lokasi option:selected').html();
        // if (sub_lokasi == 'No Sublocation Found') {
        //     sub_lokasi = '';
        // }
        // var email = $("#email-pelaksana").val();
        // var no_telp = $("#phone-number-pelaksana").val();
        // var jabatan = $("#jabatan-pelaksana").val();
        // var jenis_kelamin = $("#jenis-kelamin-pelaksana").val();

        // this.setState({ nama: nama });
        // this.setState({ nik: nik });
        // this.setState({ lokasi_kerja: lokasi_kerja });
        // this.setState({ sub_lokasi: sub_lokasi });
        // this.setState({ email: email });
        // this.setState({ no_telp: no_telp });
        // this.setState({ jabatan: jabatan });
        // this.setState({ jenis_kelamin: jenis_kelamin });

        // console.log("nama pelaksana : " + this.state.nama)
        // console.log("nik : " + this.state.nik)
        // console.log("jabatan : " + this.state.jabatan)
        // console.log("lokasi kerja : " + this.state.lokasi_kerja)
        // console.log("sublokasi : " + this.state.sub_lokasi)
        // console.log("jenis kelamin : " + this.state.jenis_kelamin)
        // console.log("no telp : " + this.state.no_telp)
        // console.log("email : " + this.state.email)
        // console.log("id admin : " + this.state.id_admin)

        // if (nama == '') {
        //     swal("Lengkapi Form Anda untuk melakukan peng-entry-an Pelaksana baru", "", "warning");
        // } else if (nik == '') {
        //     swal("NIK belum terisi", "", "warning");
        // } else if (jabatan == '') {
        //     swal("Position belum dipilih", "", "warning");
        // } else if (lokasi_kerja == '') {
        //     swal("Location belum dipilih", "", "warning");
        // }
        // // else if (sub_lokasi == '') {
        // //     swal("Sublocation belum dipilih", "", "warning");
        // // }
        // else if (jenis_kelamin == '') {
        //     swal("Gender belum dipilih", "", "warning");
        // } else if (email == '') {
        //     swal("Email belum terisi", "", "warning");
        // } else if (no_telp == '') {
        //     swal("Phone Number belum terisi", "", "warning");
        // } else {
        //     Framework7.request({
        //         url: url_api + 'Pelaksana',
        //         method: 'PUT',
        //         data: { nama: nama, nik: nik, jabatan: jabatan, jenis_kelamin: jenis_kelamin, no_telp: no_telp, email: email },
        //         dataType: 'json',
        //         statusCode: {
        //             404: function (xhr) {
        //                 alert('page not found');
        //             }
        //         },
        //         beforeSend: function (xhr) { },
        //         success: function (data) {
        //             localStorage.setItem("username", data.nik)
        //             localStorage.setItem("nama_pelaksana", data.nama)
        //             localStorage.setItem("jabatan", data.jabatan)
        //             swal("Update Profile Successful!", "", "success");
        //             app.progressbar.hide();
        //             f7.views.main.router.back();

        //         },
        //         error: function () { }
        //     });


        // }

    }

    onPageInit() {
        var url_api = 'https://api.jumantya.my.id/index.php/api/';
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

        const self = this;
        const app = self.$f7;
        self.infiniteLoading = false;

        var nik = localStorage.getItem("nik_pelaksana_edit");

        Framework7.request({
            url: url_api + 'Pelaksana',
            method: 'GET',
            data: { nik: nik },
            dataType: 'json',
            statusCode: {
                404: function (xhr) {
                    alert('page not found');
                }
            },
            beforeSend: function (xhr) { app.progressbar.show(app.theme === 'md' ? 'white' : 'blue'); },
            success: function (data) {
                var nama = data[0].nama;
                var nik = data[0].nik;
                var jabatan = data[0].jabatan;

                $("#nama-pelaksana").val(nama);
                $("#nik-pelaksana").val(nik);
                $("#jabatan-pelaksana").val(jabatan);

                app.progressbar.hide();
                if ($("#nama-pelaksana").val() != '') {
                    console.log("show label nama barang")
                    $("#label-nama-pelaksana").show();
                } else {
                    console.log("hide label nama barang")
                    $("#label-nama-pelaksana").hide();
                }

                if ($("#nik-pelaksana").val() != '') {
                    console.log("show label masa pakai")
                    $("#label-nik-pelaksana").show();
                } else {
                    $("#label-nik-pelaksana").hide();
                }

                if ($("#jabatan-pelaksana").val() != '') {
                    console.log("show label masa pakai")
                    $("#label-jabatan-pelaksana").show();
                } else {
                    $("#label-jabatan-pelaksana").hide();
                }


            },
            error: function () { }
        });

    }
    showLabelInput() {
        if ($("#nama-pelaksana").val() != '') {
            console.log("show label nama barang")
            $("#label-nama-pelaksana").show();
        } else {
            console.log("hide label nama barang")
            $("#label-nama-pelaksana").hide();
        }

        if ($("#nik-pelaksana").val() != '') {
            console.log("show label masa pakai")
            $("#label-nik-pelaksana").show();
        } else {
            $("#label-nik-pelaksana").hide();
        }
        if ($("#jabatan-pelaksana").val() != '') {
            console.log("show label masa pakai")
            $("#label-jabatan-pelaksana").show();
        } else {
            $("#label-jabatan-pelaksana").hide();
        }


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
                $('.select-location').html('<option value="">Select Location</option>');
                var arr = [];
                if (data.length != '') {
                    for (var i = 0; i < data.length; i++) {
                        var id_lokasi = data[i].id_lokasi;
                        var nama_gedung = data[i].nama_gedung;
                        var html = '';
                        arr.push(
                            html = '<option value="' + id_lokasi + '">' + nama_gedung + '</option>'
                        );
                        $('.select-location').append(html);
                    }
                } else {
                    var html = '';
                    arr.push(
                        html = '<option value="">No Location Found</option>'
                    );
                    $('.select-location').append(html);
                }

            },
            error: function () { }
        });
    }
    showSublocation() {
        var url_api = 'https://api.jumantya.my.id/index.php/api/';
        var id_lokasi = $("#lokasi-kerja").val();
        Framework7.request({
            url: url_api + 'Sublokasi',
            method: 'GET',
            data: { id_lokasi: id_lokasi },
            dataType: 'json',
            statusCode: {
                404: function (xhr) {
                    alert('page not found');
                }
            },
            beforeSend: function (xhr) { },
            success: function (data) {
                var arr = []
                $('.select-sublocation').html('<option value="">Select Sublocation</option>');

                if (data.length != '') {
                    for (var i = 0; i < data.length; i++) {
                        var id_sublokasi = data[i].id_sublokasi;
                        var lantai = data[i].lantai;
                        var html = '';
                        arr.push(
                            html = '<option value="' + id_sublokasi + '">' + lantai + '</option>'
                        );
                        $('.select-sublocation').append(html);
                    }
                } else {
                    var html = '';
                    arr.push(
                        html = '<option value="">No Sublocation Found</option>'
                    );
                    $('.select-sublocation').append(html);
                }

            },
            error: function () { }
        });
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
