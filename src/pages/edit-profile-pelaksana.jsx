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
import app from '../components/app';


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
            <Page pageContent={false} name="add-pelaksana" className="city-building-bg" style={{ backgroundColor: 'whitesmoke' }} onPageInit={this.onPageInit.bind(this)}>
                <div className="navbar" style={{ zIndex: "1" }}>
                    <div id="navbar-bg" className="navbar-bg navbar-custom inventory-logo-left" style={{ height: '185px', borderRadius: " 0 0 0px 0px" }}>
                        <div className="center">
                            <div className="title-page">EDIT PROFILE</div>
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
                    </div>                    <Card className="card-list-form shadow">
                        <List noHairlinesMd>
                            <li>
                                <Card className="card-in-form label-list" ><i className=" icon f7-icons" style={{ fontSize: "23px" }}>person_crop_circle_fill</i>
                                     Info Pelaksana
                                <div className="field-separator"></div>
                                    <CardContent padding={false}>
                                        <ul>
                                            <li className="margin-input">
                                                <div className="item-content item-input icon-top">
                                                    <div className="item-media">
                                                        <i className="icon-smooth icon f7-icons" style={{ borderRadius: "6px", border: "none", opacity: "0.8" }}>person_fill</i>
                                                    </div>
                                                    <div id="label-nama-pelaksana-edit" style={{ display: "none" }}>Name</div>
                                                </div>
                                            </li>
                                            <li className="margin-input">
                                                <div className="item-input">
                                                    <div className="item-input-wrap">
                                                        <input type="text" onInput={this.showLabelInput.bind(this)} placeholder="Name" id="nama-pelaksana-edit" style={{ textAlignLast: "center" }} className=""></input>
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
                                            <li className="margin-input" >
                                                <div className="item-input">
                                                    <div className="item-input-wrap">
                                                        <input type="number" placeholder="NIK" readOnly onInput={this.showLabelInput.bind(this)} id="nik-pelaksana" style={{ textAlignLast: "center" }} className=""></input>
                                                    </div>
                                                </div>
                                            </li>
                                            <div className="field-separator"></div>

                                            <li className="select-input margin-input" >
                                                <div className="item-content item-input">
                                                    <div className="item-inner">
                                                        <div className="item-input-wrap input-dropdown">
                                                            <select placeholder="Jabatan" id="jabatan-pelaksana" className="select-jabatan-pelaksana" style={{ textAlignLast: "center" }}>
                                                                <option value="">Position</option>
                                                                <option value="Housekeeping">Housekeeping</option>
                                                                <option value="Lanscape">Landscape</option>
                                                                <option value="Office Boy">Office Boy</option>
                                                                <option value="Gardener">Gardener</option>
                                                            </select>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                            {/* <div className="field-separator"></div> */}

                                            <li className="select-input margin-input" style={{ display: "none" }}>
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
                                            {/* <div className="field-separator"></div> */}

                                            <li className="select-input margin-input" style={{ display: "none" }}>
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

                                            <li className="select-input margin-input" >
                                                <div className="item-content item-input">
                                                    <div className="item-inner">
                                                        <div className="item-input-wrap input-dropdown">
                                                            <select placeholder="Jenis Kelamin" id="jenis-kelamin-pelaksana" className="jenis-kelamin" style={{ textAlignLast: "center" }}>
                                                                <option value="">Gender</option>
                                                                <option value="Laki-laki">Male</option>
                                                                <option value="Perempuan">Female</option>
                                                            </select>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                            {/* <li >
                                            <div className="item-content item-input icon-top">
                                                <div className="item-media">
                                                    <i className="icon-smooth icon f7-icons" style={{ borderRadius: "6px", border: "none", opacity: "0.8" }}>lock</i>
                                                </div>
                                                <div id="label-password" style={{ display: "none" }}>Password</div>
                                            </div>
                                        </li>
                                        <li className="margin-bottom">
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
                                        </li> */}
                                            <div className="field-separator"></div>

                                            <li className="margin-input">
                                                <div className="item-content item-input icon-top">
                                                    <div className="item-media">
                                                        <i className="icon-smooth icon f7-icons" style={{ borderRadius: "6px", border: "none", opacity: "0.8" }}>envelope_fill</i>
                                                    </div>
                                                    <div id="label-email-pelaksana" style={{ display: "none" }}>Email</div>
                                                </div>
                                            </li>
                                            <li className="margin-input">
                                                <div className="item-input">
                                                    <div className="item-input-wrap">
                                                        <input type="email" placeholder="Email" onInput={this.showLabelInput.bind(this)} id="email-pelaksana" style={{ textAlignLast: "center" }} className=""></input>
                                                    </div>
                                                </div>
                                            </li>
                                            <div className="field-separator"></div>
                                            <li className="margin-input">
                                                <div className="item-content item-input icon-top">
                                                    <div className="item-media">
                                                        <i className="icon-smooth icon f7-icons" style={{ borderRadius: "6px", border: "none", opacity: "0.8" }}>phone_fill</i>
                                                    </div>
                                                    <div id="label-phone-number-pelaksana" style={{ display: "none" }}>Phone Number</div>
                                                </div>
                                            </li>
                                            <li className="margin-bottom margin-input">
                                                <div className="item-input">
                                                    <div className="item-input-wrap">
                                                        <input type="tel" placeholder="Phone Number" onInput={this.showLabelInput.bind(this)} id="phone-number-pelaksana" style={{ textAlignLast: "center" }} className=""></input>
                                                    </div>
                                                </div>
                                            </li>
                                        </ul>

                                    </CardContent>
                                </Card>
                            </li>

                        </List>
                        <Button md round outline className="margin margin-top" onClick={this.updatePelaksana.bind(this)}>Submit</Button>
                    </Card>

                </div>
            </Page >
        )
    }
    updatePelaksana() {
        var url_api = 'https://api.jumantya.my.id/index.php/api/';

        const self = this;
        const app = self.$f7;
        self.infiniteLoading = false;

        var nama = $("#nama-pelaksana").val();
        var nik = $("#nik-pelaksana").val();
        var lokasi_kerja = $('#lokasi-kerja option:selected').html();
        var sub_lokasi = $('#sub-lokasi option:selected').html();
        if (sub_lokasi == 'No Sublocation Found') {
            sub_lokasi = '';
        }
        var email = $("#email-pelaksana").val();
        var no_telp = $("#phone-number-pelaksana").val();
        var jabatan = $("#jabatan-pelaksana").val();
        var jenis_kelamin = $("#jenis-kelamin-pelaksana").val();

        this.setState({ nama: nama });
        this.setState({ nik: nik });
        this.setState({ lokasi_kerja: lokasi_kerja });
        this.setState({ sub_lokasi: sub_lokasi });
        this.setState({ email: email });
        this.setState({ no_telp: no_telp });
        this.setState({ jabatan: jabatan });
        this.setState({ jenis_kelamin: jenis_kelamin });

        console.log("nama pelaksana : " + this.state.nama)
        console.log("nik : " + this.state.nik)
        console.log("jabatan : " + this.state.jabatan)
        console.log("lokasi kerja : " + this.state.lokasi_kerja)
        console.log("sublokasi : " + this.state.sub_lokasi)
        console.log("jenis kelamin : " + this.state.jenis_kelamin)
        console.log("no telp : " + this.state.no_telp)
        console.log("email : " + this.state.email)
        console.log("id admin : " + this.state.id_admin)

        if (nama == '') {
            swal("Lengkapi Form Anda untuk melakukan peng-entry-an Pelaksana baru", "", "warning");
        } else if (nik == '') {
            swal("NIK belum terisi", "", "warning");
        } else if (jabatan == '') {
            swal("Position belum dipilih", "", "warning");
        } else if (lokasi_kerja == '') {
            swal("Location belum dipilih", "", "warning");
        }
        // else if (sub_lokasi == '') {
        //     swal("Sublocation belum dipilih", "", "warning");
        // }
        else if (jenis_kelamin == '') {
            swal("Gender belum dipilih", "", "warning");
        } else if (email == '') {
            swal("Email belum terisi", "", "warning");
        } else if (no_telp == '') {
            swal("Phone Number belum terisi", "", "warning");
        } else {
            Framework7.request({
                url: url_api + 'Pelaksana',
                method: 'PUT',
                data: { nama: nama, nik: nik, jabatan: jabatan, jenis_kelamin: jenis_kelamin, no_telp: no_telp, email: email },
                dataType: 'json',
                statusCode: {
                    404: function (xhr) {
                        alert('page not found');
                    }
                },
                beforeSend: function (xhr) { },
                success: function (data) {
                    localStorage.setItem("username", data.nik)
                    localStorage.setItem("nama_pelaksana", data.nama)
                    localStorage.setItem("jabatan", data.jabatan)
                    swal("Update Profile Successful!", "", "success");
                    app.progressbar.hide();
                    f7.views.main.router.back();

                },
                error: function () { }
            });


        }

    }

    onPageInit() {
        var url_api = 'https://api.jumantya.my.id/index.php/api/';
        Framework7.request({
            url: url_api + 'Lokasi',
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
                    var id_lokasi = data[i].id_lokasi;
                    var nama_gedung = data[i].nama_gedung;
                    arr.push(
                        '<option value="' + id_lokasi + '">' + nama_gedung + '</option>'
                    );
                    $('.select-location').html(arr.join(''));
                }

            },
            error: function () { }
        });


        const self = this;
        const app = self.$f7;
        self.infiniteLoading = false;

        var nik = localStorage.getItem("username");

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
                var lokasi_kerja = data[0].lokasi_kerja;
                var sub_lokasi = data[0].sub_lokasi;
                var jabatan = data[0].jabatan;
                var jenkel = data[0].jenis_kelamin;
                var email = data[0].email;
                var no_telp = data[0].no_telp;

                $("#nama-pelaksana-edit").val(nama);
                $("#nik-pelaksana").val(nik);
                $("#email-pelaksana").val(email);
                $('#lokasi-kerja').text(lokasi_kerja);
                var id_lokasi = $('#lokasi-kerja').val();
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
                        var arr = [];
                        for (var i = 0; i < data.length; i++) {
                            var id_sublokasi = data[i].id_sublokasi;
                            var lantai = data[i].lantai;
                            arr.push(
                                '<option value="' + lantai + '">' + lantai + '</option>'
                            );
                            $('.select-sublocation').html(arr.join(''));
                        }

                        $('#sub-lokasi').val(sub_lokasi);
                    },
                    error: function () { }
                });
                $("#phone-number-pelaksana").val(no_telp);
                $("#jabatan-pelaksana").val(jabatan);
                $("#jenis-kelamin-pelaksana").val(jenkel);

                app.progressbar.hide();
                if ($("#nama-pelaksana-edit").val() != '') {
                    console.log("show label nama barang")
                    $("#label-nama-pelaksana-edit").show();
                } else {
                    console.log("hide label nama barang")
                    $("#label-nama-pelaksana-edit").hide();
                }

                if ($("#nik-pelaksana").val() != '') {
                    console.log("show label masa pakai")
                    $("#label-nik-pelaksana").show();
                } else {
                    $("#label-nik-pelaksana").hide();
                }

                var nik_pelaksana = $("#nik-pelaksana").val();
                nik_pelaksana = parseInt(nik_pelaksana.length);
                console.log('nik pelaksana regex: ' + nik_pelaksana)
                if (nik_pelaksana > 8) {
                    swal("NIK Only 8 digits", "", "warning");
                    $("#nik-pelaksana").val("");
                } else {

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

                if ($("#email-pelaksana").val() != '') {
                    $("#label-email-pelaksana").show();
                } else {
                    $("#label-email-pelaksana").hide();
                }

                if ($("#phone-number-pelaksana").val() != '') {
                    $("#label-phone-number-pelaksana").show();
                } else {
                    $("#label-phone-number-pelaksana").hide();
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

        var nik_pelaksana = $("#nik-pelaksana").val();
        nik_pelaksana = parseInt(nik_pelaksana.length);
        console.log('nik pelaksana regex: ' + nik_pelaksana)
        if (nik_pelaksana > 8) {
            swal("NIK Only 8 digits", "", "warning");
            $("#nik-pelaksana").val("");
        } else {

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

        if ($("#email-pelaksana").val() != '') {
            $("#label-email-pelaksana").show();
        } else {
            $("#label-email-pelaksana").hide();
        }

        if ($("#phone-number-pelaksana").val() != '') {
            $("#label-phone-number-pelaksana").show();
        } else {
            $("#label-phone-number-pelaksana").hide();
        }
    }
    showLocation() {
        var url_api = 'https://api.jumantya.my.id/index.php/api/';
        // var id_profile = $("#id-profile").val();
        Framework7.request({
            url: url_api + 'Lokasi',
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
                if (data.length != '') {
                    for (var i = 0; i < data.length; i++) {
                        var id_lokasi = data[i].id_lokasi;
                        var nama_gedung = data[i].nama_gedung;
                        var html = '';
                        arr.push(
                            '<option value="' + nama_gedung + '">' + nama_gedung + '</option>'
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
    showSublocation() {
        var url_api = 'https://api.jumantya.my.id/index.php/api/';
        // var id_lokasi = $("#lokasi-kerja").val();
        Framework7.request({
            url: url_api + 'Sublokasi',
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
                if (data.length != '') {
                    for (var i = 0; i < data.length; i++) {
                        var id_sublokasi = data[i].id_sublokasi;
                        var lantai = data[i].lantai;
                        arr.push(
                            '<option value="' + lantai + '">' + lantai + '</option>'
                        );
                        $('.select-sublocation').html(arr.join(''));
                    }
                } else {
                    arr.push(
                        '<option value="">No Sublocation Found</option>'
                    );
                    $('.select-sublocation').html(arr.join(''));
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
