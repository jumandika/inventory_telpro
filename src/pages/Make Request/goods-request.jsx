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
} from 'framework7-react';


export default class extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            id_pengambilan: '',
            nik: '',
            tgl_pengambilan: '',
            nama_pelaksana: '',
            nama_barang: '',
            lokasi_kerja: '',
            sub_lokasi: '',
            id_admin: 'ADM01',
        }
        this.myRef = React.createRef()
        this.navbarHandler = this.navbarHandler.bind(this);


    }

    render() {
        return (
            <Page pageContent={false} name="goods-request" className="city-building-bg" style={{ backgroundColor: 'whitesmoke' }} onPageInit={this.onPageInit.bind(this)}>
                <div className="navbar" style={{ zIndex: "1" }}>
                    <div id="navbar-bg" className="navbar-bg navbar-custom inventory-logo-left" style={{ height: '185px', borderRadius: " 0 0 0px 0px" }}>
                        <div className="center">
                            <div className="title-page">GOOD'S REQUEST</div>
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
                    <div style={{ textAlignLast: "center", height: "60px" }} className="goods-taking-icon">
                        {/* <i className="icon f7-icons icon-menu icon-title" style={{ textShadow: "rgba(0, 0, 0, 0.17) 0px 2px 0px", color: "rgb(175, 212, 186)" }}>cart_fill_badge_plus</i> */}
                    </div>
                    <Card className="card-list-form">
                        <List noHairlinesMd>
                            <ListInput
                                // className="input-border"
                                type="text"
                                inputId="id-pengambilan"
                                placeholder="ID Pengambilan"
                                className="margin-top"
                                readonly
                            >
                                <Icon className="icon-smooth" f7="ID" slot="media" />
                            </ListInput>
                            <ListInput
                                className="margin-bottom"
                                type="text"
                                inputId="tgl-pengambilan"
                                placeholder="Tanggal"
                                onChange={(e) => this.setState({ tgl_pengambilan: e.target.value })}
                                readonly
                            >
                                <Icon className="icon-smooth" f7="today" slot="media" />
                            </ListInput>

                        </List>
                    </Card>
                    <Card className="card-list-form">
                        <List noHairlinesMd>
                            <li>
                                <Card className="card-in-form label-list" style={{ textAlign: "left" }}>
                                    <i className=" icon f7-icons margin-right" style={{ fontSize: "23px", marginLeft: "15px" }}>person</i>
                                     Info Pelaksana
                                <div style={{ borderBottom: 'solid 2px #fcc7c76b', marginTop: '10px' }}></div>
                                    <CardContent padding={false}>
                                        <List noHairlinesMd>
                                            <ListInput
                                                style={{ textAlignLast: "center" }}
                                                type="text"
                                                inputId="nama-pelaksana-form"
                                                placeholder="Pilih Pelaksana"
                                                onChange={(e) => this.setState({ nama_pelaksana: e.target.value })}
                                                onFocus={this.createPopup_Pelaksana.bind(this)}
                                                readonly
                                            >
                                            </ListInput>
                                        </List>
                                        <div style={{ borderBottom: 'solid 2px #fcc7c76b', marginBottom: '10px' }}></div>
                                        <input type="checkbox" className="read-more-state" id="post-2" />
                                        <label style={{ marginLeft: "15px" }} htmlFor="post-2" className="text-list">Detail Pelaksana</label>
                                        <div style={{ borderBottom: 'solid 2px #fcc7c76b', marginTop: '10px', marginBottom: "10px" }}></div>
                                        <ul className="read-more-wrap">
                                            <ListItem className="read-more-target" ><span className="label-list">NIK:</span><span className="text-list textcolor-green" id="nik-form"></span></ListItem>
                                            <ListItem className="read-more-target"><span className="label-list">Lokasi Kerja:</span><span className="text-list" id="lokasi-kerja-form"></span></ListItem>
                                            <ListItem className="read-more-target"><span className="label-list">Sublokasi:</span><span className="text-list" id="sub-lokasi-form"></span></ListItem>
                                            <ListItem className="read-more-target" ><span className="label-list">Jabatan:</span><span className="text-list" id="jabatan-form"></span></ListItem>
                                            <ListItem className="read-more-target" ><span className="label-list">Jenis Kelamin:</span><span className="text-list" id="jenis-kelamin-form"></span></ListItem>
                                            <ListItem className="read-more-target" ><span className="label-list">Email:</span><span className="text-list" id="email-form"></span></ListItem>
                                            <ListItem className="read-more-target" ><span className="label-list">No Telepon:</span><span className="text-list" id="no-telp-form"></span></ListItem>
                                        </ul>
                                    </CardContent>
                                </Card>
                            </li>
                        </List>
                    </Card>
                    <Card className="card-list-form">
                        <List noHairlinesMd>
                            <li>
                                <Card className="card-in-form label-list " style={{ textAlign: "left" }}><i className="margin-right icon f7-icons" style={{ fontSize: "23px", marginLeft: "15px" }}>cart_fill_badge</i>
                                     Info Barang
                                <div style={{ borderBottom: 'solid 2px #fcc7c76b', marginTop: '10px' }}></div>
                                    <CardContent padding={false}>
                                        <List noHairlinesMd>
                                            <ListInput
                                                style={{ textAlignLast: "center" }}
                                                type="text"
                                                inputId="pilih-barang"
                                                placeholder="Pilih Barang"
                                                onChange={(e) => this.setState({ pilih_barang: e.target.value })}
                                                onFocus={this.createPopup_Barang.bind(this)}
                                                readonly
                                            >
                                            </ListInput>
                                        </List>
                                        <div style={{ borderBottom: 'solid 2px #fcc7c76b', marginBottom: '10px' }}></div>
                                        <i className=" icon f7-icons margin-right" style={{ fontSize: "23px", marginLeft: "15px" }}>line_horizontal_3_decrease_circle</i>
                                        List Permintaan Barang :
                                        <div className="field-separator"></div>
                                        <List id="list-temporary">

                                        </List>

                                        <input type="checkbox" className="read-more-state" id="det-barang" />
                                        {/* <label htmlFor="det-barang" className="text-list">Detail Barang</label>
                                    <div style={{ borderBottom: 'solid 2px #fcc7c76b', marginTop: '10px' }}></div>
                                    <ul className="read-more-wrap">
                                        <ListItem className="read-more-target" ><span className="label-list">NIK:</span><span className="text-list textcolor-green" id="nik"></span></ListItem>
                                        <ListItem className="read-more-target"><span className="label-list">Lokasi Kerja:</span><span className="text-list" id="lokasi-kerja"></span></ListItem>
                                        <ListItem className="read-more-target"><span className="label-list">Sublokasi:</span><span className="text-list" id="sub-lokasi"></span></ListItem>
                                        <ListItem className="read-more-target" ><span className="label-list">Jabatan:</span><span className="text-list" id="jabatan"></span></ListItem>
                                        <ListItem className="read-more-target" ><span className="label-list">Jenis Kelamin:</span><span className="text-list" id="jenis-kelamin"></span></ListItem>
                                        <ListItem className="read-more-target" ><span className="label-list">Email:</span><span className="text-list" id="email"></span></ListItem>
                                        <ListItem className="read-more-target" ><span className="label-list">No Telepon:</span><span className="text-list" id="no-telp"></span></ListItem>
                                    </ul> */}
                                    </CardContent>
                                </Card>
                            </li>

                        </List>
                    </Card>

                    <Card className="card-list-form">
                        <List noHairlinesMd>
                            <Button md round outline className="margin margin-top" onClick={this.showData.bind(this)}><i className="icon f7-icons margin-right">arrow_up_doc_fill</i>Submit</Button>
                        </List>
                    </Card>
                </div>
            </Page >
        )
    }
    showData() {
        var date_now = new Date();
        const self = this;
        const app = self.$f7;
        if (self.infiniteLoading) return;
        self.infiniteLoading = false;

        Framework7.request({
            url: 'https://api.jumantya.my.id/index.php/api/Pengambilan',
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
                var id_seq = parseInt(row_count) + 1;
                var month = date_now.getMonth() + 1;
                if (month < 10) {
                    month = '0' + month;
                }
                var year = date_now.getFullYear();
                year = year.toString().substring(2, 4);
                var Id_Pengambilan;
                if (row_count < 9) {
                    Id_Pengambilan = ("KL" + year + month + "000" + id_seq);
                } else if (row_count >= 9) {
                    Id_Pengambilan = ("KL" + year + month + "00" + id_seq);
                } else if (row_count >= 99) {
                    Id_Pengambilan = ("KL" + year + month + "0" + id_seq);
                } else if (row_count >= 999) {
                    Id_Pengambilan = ("KL" + year + month + "" + id_seq);
                }
                $('#id-pengambilan').val(Id_Pengambilan);

            },
            error: function () { }
        });
        var id_pengambilan = $("#id-pengambilan").val();
        var nik = $("#nik-form").text();
        var nama_pelaksana = $("#nama-pelaksana-form").val();
        var nama_barang = $("#nama-barang-form").val();
        var lokasi_kerja = $("#lokasi-kerja-form").text();
        var sub_lokasi = $("#sub-lokasi-form").text();
        var list_temporary = localStorage.getItem("list_temporary_count");
        var tgl_pengambilan = this.state.tgl_pengambilan;
        var id_admin = this.state.id_admin;
        var device_info = osName + ' ' + osVersion + ' ' + mobileVendor + ' ' + mobileModel + ' ' + engineName + ' ' + engineVersion;

        this.setState({ id_pengambilan: id_pengambilan });
        this.setState({ nik: nik });
        this.setState({ nama_pelaksana: nama_pelaksana });
        this.setState({ nama_barang: nama_barang });
        this.setState({ lokasi_kerja: lokasi_kerja });
        this.setState({ sub_lokasi: sub_lokasi });

        console.log(this.state.id_pengambilan)
        console.log(this.state.nik)
        console.log(this.state.nama_pelaksana)
        console.log(this.state.lokasi_kerja)
        console.log(this.state.sub_lokasi)
        console.log(this.state.tgl_pengambilan)
        console.log(this.state.id_admin)
        if (nik == '' && list_temporary == 0) {
            swal("Lengkapi Form Anda untuk melakukan Permintaan Barang", "", "warning");
        } else if (nik == '') {
            swal("Identitas Pelaksana belum terisi", "", "warning");
        } else if (list_temporary == 0) {
            swal("Daftar Permintaan Barang belum terisi", "", "warning");
        }
        else {
            Framework7.request({
                url: 'https://api.jumantya.my.id/index.php/api/Pengambilan',
                method: 'POST',
                data: { id_pengambilan: id_pengambilan, nik: nik, nama_pelaksana: nama_pelaksana, lokasi_kerja: lokasi_kerja, sub_lokasi: sub_lokasi, tanggal: tgl_pengambilan, id_admin: id_admin },
                dataType: 'json',
                statusCode: {
                    404: function (xhr) {
                        alert('page not found');
                    }
                },
                beforeSend: function (xhr) { app.progressbar.show(app.theme === 'md' ? 'white' : 'blue'); },
                success: function (data) {
                    console.log("simpan barang")
                    Framework7.request({
                        url: 'https://api.jumantya.my.id/index.php/api/Detail_Pengambilan',
                        method: 'POST',
                        data: { id_pengambilan: id_pengambilan, device_info: device_info },
                        dataType: 'json',
                        statusCode: {
                            404: function (xhr) {
                                alert('page not found');
                            }
                        },
                        beforeSend: function (xhr) { },
                        success: function (data) {
                            console.log("simpan detail barang")
                            swal("Pengambilan Barang Berhasil Disimpan!", "", "success");
                            Framework7.request({
                                url: 'https://fcm.googleapis.com/fcm/send',
                                method: 'POST',
                                data: {
                                    "condition": "'goods_request' in topics",
                                    "notification": {
                                        "title": "Pengambilan " + list_temporary + " Item Barang",
                                        "body": "Oleh " + nama_pelaksana + ""
                                    }, "data": {
                                        "title": "Pengambilan " + list_temporary + " Item Barang",
                                        "body": "Oleh " + nama_pelaksana + "",
                                        "message": "Hello how are you?",
                                        "meta": {
                                            "type": "small",
                                            "info": "Pengambilan Barang"
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
                                    app.progressbar.hide();
                                    f7.views.main.router.back();
                                },
                                error: function () { }
                            });
                        },
                        error: function () { }
                    });
                },
                error: function () { }
            });
            localStorage.setItem("list_temporary_count", 0);
        }

    }

    onPageInit() {
        var url_api = 'https://api.jumantya.my.id/index.php/api/';
        // bisa di eksekusi
        // document.addEventListener("deviceready", function () {
        //     console.log("executed on page init");

        //     window.FirebasePlugin.getToken(function (token) {
        //         // save this server-side and use it to push notifications to this device
        //         console.log(token);
        //     }, function (error) {
        //         console.error(error);
        //     });

        //     // Get notified when a token is refreshed
        //     window.FirebasePlugin.onTokenRefresh(function (token) {
        //         // save this server-side and use it to push notifications to this device
        //         console.log("Refresh to get new token: " + token);
        //     }, function (error) {
        //         alert(error);
        //     });

        //     // Get notified when the user opens a notification
        //     window.FirebasePlugin.onNotificationOpen(function (notification) {
        //         console.log(notification);
        //     }, function (error) {
        //         console.error(error);
        //     });
        // }, false);

        var date_now = new Date();

        var dd = String(date_now.getDate()).padStart(2, '0');
        var mm = String(date_now.getMonth() + 1).padStart(2, '0');
        var yyyy = date_now.getFullYear();

        var hours = String(date_now.getHours()).padStart(2, '0');
        var minutes = String(date_now.getMinutes()).padStart(2, '0');
        var seconds = String(date_now.getSeconds()).padStart(2, '0');

        var today = dd + '-' + mm + '-' + yyyy;
        var today_state = yyyy + '-' + mm + '-' + dd + ' ' + hours + ':' + minutes + ':' + seconds;
        this.setState({ tgl_pengambilan: today_state })
        localStorage.setItem("list_temporary_count", 0);

        console.log('device info: ' + osName + ' ' + osVersion + ' ' + mobileVendor + ' ' + mobileModel + ' ' + engineName + ' ' + engineVersion);

        var deviceId = Framework7.device.os;
        console.log(deviceId);

        Framework7.request({
            url: url_api + 'Pengambilan',
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
                var month = date_now.getMonth() + 1;
                if (month < 10) {
                    month = '0' + month;
                }
                var year = date_now.getFullYear();
                year = year.toString().substring(2, 4);
                var Id_Pengambilan;
                if (row_count < 9) {
                    Id_Pengambilan = ("KL" + year + month + "000" + id_seq);
                } else if (row_count >= 9) {
                    Id_Pengambilan = ("KL" + year + month + "00" + id_seq);
                } else if (row_count >= 99) {
                    Id_Pengambilan = ("KL" + year + month + "0" + id_seq);
                } else if (row_count >= 999) {
                    Id_Pengambilan = ("KL" + year + month + "" + id_seq);
                }
                $('#id-pengambilan').val(Id_Pengambilan);
                $('#tgl-pengambilan').val(today);

            },
            error: function () { }
        });


        Framework7.request({
            url: url_api + 'Pelaksana?nik=' + localStorage.getItem("username") + '',
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

                } else {
                    console.log("page init good request : " + data);
                    var nama = data[0].nama;
                    var nik = data[0].nik;
                    var lokasi_kerja = data[0].lokasi_kerja;
                    var sub_lokasi = data[0].sub_lokasi;
                    var jabatan = data[0].jabatan;
                    var jenkel = data[0].jenis_kelamin;
                    var email = data[0].email;
                    var no_telp = data[0].no_telp;
                    $('#nama-pelaksana-form').val(nama);
                    $('#nik-form').text(nik);
                    $('#lokasi-kerja-form').text(lokasi_kerja);
                    $('#sub-lokasi-form').text(sub_lokasi);
                    $('#jabatan-form').text(jabatan);
                    $('#jenis-kelamin-form').text(jenkel);
                    $('#email-form').text(email);
                    $('#no-telp-form').text(no_telp);
                    $('#nama-pelaksana-form').removeAttr("onfocus");
                }

            },
            error: function () { }
        });


        var device_info = osName + ' ' + osVersion + ' ' + mobileVendor + ' ' + mobileModel + ' ' + engineName + ' ' + engineVersion;
        this.$request({
            url: 'https://api.jumantya.my.id/index.php/api/Delete_Temporary',
            method: 'GET',
            data: { device_info: device_info },
            dataType: 'json',
            statusCode: {
                404: function (xhr) {
                    alert('page not found');
                }
            },
            beforeSend: function (xhr) { },
            success: function (data) {
                console.log('temporary has been reset')
            },
            error: function () { }
        });



    }


    createPopup_Pelaksana() {
        window.setPelaksana = function (nama_pelaksana, nik, lokasi_kerja, sub_lokasi, jabatan, jenis_kelamin, email, no_telp) {
            $('#nama-pelaksana-form').val(nama_pelaksana);
            $('#nik-form').text(nik);
            $('#lokasi-kerja-form').text(lokasi_kerja);
            $('#sub-lokasi-form').text(sub_lokasi);
            $('#jabatan-form').text(jabatan);
            $('#jenis-kelamin-form').text(jenis_kelamin);
            $('#email-form').text(email);
            $('#no-telp-form').text(no_telp);
        }

        var url_api = 'https://api.jumantya.my.id/index.php/api/';
        Framework7.request({
            url: url_api + 'Pelaksana?nik=' + localStorage.getItem("username") + '',
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
                    Framework7.request({
                        url: url_api + 'Pelaksana',
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
                                var nama = data[i].nama;
                                var nik = data[i].nik;
                                var lokasi_kerja = data[i].lokasi_kerja;
                                var sub_lokasi = data[i].sub_lokasi;
                                var jabatan = data[i].jabatan;
                                var jenkel = data[i].jenis_kelamin;
                                var email = data[i].email;
                                var no_telp = data[i].no_telp;
                                arr.push(
                                    '<li class="">' +
                                    '<div class="">' +
                                    '<div style="font-size: initial" class="card-list margin-bottom link popup-close"' +
                                    'onclick="setPelaksana($(\'#nama-pelaksana' + i + '\').text(),$(\'#nik' + i + '\').text(),$(\'#lokasi-kerja' + i + '\').text(),$(\'#sub-lokasi' + i + '\').text(),$(\'#jabatan' + i + '\').text(),$(\'#jenis-kelamin' + i + '\').text(),$(\'#email' + i + '\').text(),$(\'#no-telp' + i + '\').text())">' +
                                    '<span class="text-list" id="nama-pelaksana' + i + '" style="color:#8dad9c">' + nama + '</span>' +
                                    '<span class="text-list"> (</span><span class="text-list" id="nik' + i + '">' + nik + '</span><span class="text-list">)</span></br>' +
                                    '<span class="text-list" id="lokasi-kerja' + i + '">' + lokasi_kerja + '</span> <span class="text-list" id="sub-lokasi' + i + '">' + sub_lokasi + '</span>' +
                                    '<span style="display:none" id="jabatan' + i + '">' + jabatan + '</span>' +
                                    '<span style="display:none" id="jenis-kelamin' + i + '">' + jenkel + '</span>' +
                                    '<span style="display:none" id="email' + i + '">' + email + '</span>' +
                                    '<span style="display:none" id="no-telp' + i + '">' + no_telp + '</span>' +
                                    '</div>' +
                                    '</div>' +
                                    '</li>'
                                );
                            }
                            $('#pelaksana-list-all').html(arr.join(''));
                        },
                        error: function () { }
                    });

                } else {
                    var arr = [];
                    for (var i = 0; i < data.length; i++) {
                        var nama = data[i].nama;
                        var nik = data[i].nik;
                        var lokasi_kerja = data[i].lokasi_kerja;
                        var sub_lokasi = data[i].sub_lokasi;
                        var jabatan = data[i].jabatan;
                        var jenkel = data[i].jenis_kelamin;
                        var email = data[i].email;
                        var no_telp = data[i].no_telp;
                        arr.push(
                            '<li class="">' +
                            '<div style="font-size: initial" class="card-list margin-bottom link popup-close"' +
                            'onclick="setPelaksana($(\'#nama-pelaksana' + i + '\').text(),$(\'#nik' + i + '\').text(),$(\'#lokasi-kerja' + i + '\').text(),$(\'#sub-lokasi' + i + '\').text(),$(\'#jabatan' + i + '\').text(),$(\'#jenis-kelamin' + i + '\').text(),$(\'#email' + i + '\').text(),$(\'#no-telp' + i + '\').text())">' +
                            '<span class="text-list" id="nama-pelaksana' + i + '" style="color:#8dad9c">' + nama + '</span>' +
                            '<span class="text-list"> (</span><span class="text-list" id="nik' + i + '">' + nik + '</span><span class="text-list">)</span></br>' +
                            '<span class="text-list" id="lokasi-kerja' + i + '">' + lokasi_kerja + '</span> <span class="text-list" id="sub-lokasi' + i + '">' + sub_lokasi + '</span>' +
                            '<span style="display:none" id="jabatan' + i + '">' + jabatan + '</span>' +
                            '<span style="display:none" id="jenis-kelamin' + i + '">' + jenkel + '</span>' +
                            '<span style="display:none" id="email' + i + '">' + email + '</span>' +
                            '<span style="display:none" id="no-telp' + i + '">' + no_telp + '</span>' +
                            '</div>' +
                            '</li>'
                        );
                    }
                    $('#pelaksana-list-all').html(arr.join(''));
                }

            },
            error: function () { }
        });


        window.searchPelaksana = function (nama_pelaksana) {
            Framework7.request({
                url: url_api + 'Pelaksana?nama_pelaksana=' + nama_pelaksana + '',
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
                        var nama = data[i].nama;
                        var nik = data[i].nik;
                        var lokasi_kerja = data[i].lokasi_kerja;
                        var sub_lokasi = data[i].sub_lokasi;
                        var jabatan = data[i].jabatan;
                        var jenkel = data[i].jenis_kelamin;
                        var email = data[i].email;
                        var no_telp = data[i].no_telp;
                        arr.push(
                            '<li class="">' +
                            '<div style="font-size: initial" class="card-list margin-bottom link popup-close"' +
                            'onclick="setPelaksana($(\'#nama-pelaksana' + i + '\').text(),$(\'#nik' + i + '\').text(),$(\'#lokasi-kerja' + i + '\').text(),$(\'#sub-lokasi' + i + '\').text(),$(\'#jabatan' + i + '\').text(),$(\'#jenis-kelamin' + i + '\').text(),$(\'#email' + i + '\').text(),$(\'#no-telp' + i + '\').text())">' +
                            '<span class="text-list" id="nama-pelaksana' + i + '" style="color:#8dad9c">' + nama + '</span>' +
                            '<span class="text-list"> (</span><span class="text-list" id="nik' + i + '">' + nik + '</span><span class="text-list">)</span></br>' +
                            '<span class="text-list" id="lokasi-kerja' + i + '">' + lokasi_kerja + '</span> <span class="text-list" id="sub-lokasi' + i + '">' + sub_lokasi + '</span>' +
                            '<span style="display:none" id="jabatan' + i + '">' + jabatan + '</span>' +
                            '<span style="display:none" id="jenis-kelamin' + i + '">' + jenkel + '</span>' +
                            '<span style="display:none" id="email' + i + '">' + email + '</span>' +
                            '<span style="display:none" id="no-telp' + i + '">' + no_telp + '</span>' +
                            '</div>' +
                            '</li>'
                        );
                    }
                    $('#pelaksana-list-all').html(arr.join(''));


                },
                error: function () { }
            });
        }


        const self = this;
        // Create popup
        if (!self.popup_pelaksana) {
            self.popup_pelaksana = self.$f7.popup.create({
                content: `
              <div class="popup">
                <div class="page">
                <div class="navbar" style="height: calc(var(--f7-navbar-height) + var(--f7-safe-area-top));">
                    <div class="navbar-bg navbar-custom inventory-logo-left" style="height: 65px;">
                        <div class="center">
                            <div class="title-page">PELAKSANA LIST</div>
                        </div>
                    </div>
                    <div className="navbar-inner sliding">
                        <div className="right">
                            <a href="#" style="left:85%; color:white;" class="link popup-close"><i class="icon f7-icons">multiply_circle_fill</i></a>
                        </div>
                    </div>
                </div>

                <form class="searchbar searchbar-init" data-search-container=".search-list" data-search-in=".text-list">
                    <div class="searchbar-inner">
                        <div class="searchbar-input-wrap" >
                            <input placeholder="Search" type="search" onkeyup="searchPelaksana(this.value)" value=""></input>
                            <i class="searchbar-icon"></i>
                            <span class="input-clear-button">
                            </span>
                        </div>
                        <span class="searchbar-disable-button">Cancel</span>
                    </div>
                </form>

                  
                  <div class="page-content">
                  <div class="searchbar-backdrop"></div>
                  
                    <div class="block">
                    <div class="list search-list searchbar-found">
                    <ul id="pelaksana-list-all" >
                    
                    </ul>    
                    </div>
                    </div>
                  </div>
                </div>
              </div>
            `.trim(),
            });
        }
        // Open it
        self.popup_pelaksana.open();
    }

    createPopup_Barang() {
        localStorage.setItem("list_temporary_count", 0);
        var device_info = osName + ' ' + osVersion + ' ' + mobileVendor + ' ' + mobileModel + ' ' + engineName + ' ' + engineVersion;
        this.$request({
            url: 'https://api.jumantya.my.id/index.php/api/Delete_Temporary',
            method: 'GET',
            data: { device_info: device_info },
            dataType: 'json',
            statusCode: {
                404: function (xhr) {
                    alert('page not found');
                }
            },
            beforeSend: function (xhr) { },
            success: function (data) {
                console.log('temporary has been reset')
                var arr = [];
                arr.push(
                    ''
                );
                $('#list-temporary').html(arr.join(''));
            },
            error: function () { }
        });

        window.show_ambil = function (seq) {
            $('#show-ambil' + seq + '').slideDown(500);
            $('#line' + seq + '').slideDown(500);
        }
        window.disable_add = function (seq) {
            $('#add-to-list' + seq + '').removeAttr("onclick");

        }

        window.setBarang_Temporary = function (seq, id_barang, jenis_barang, nama_barang, jumlah_ambil, satuan) {
            var device_info = osName + ' ' + osVersion + ' ' + mobileVendor + ' ' + mobileModel + ' ' + engineName + ' ' + engineVersion;
            if (jumlah_ambil == '0' || jumlah_ambil == '') {
                swal("Jumlah Ambil tidak bisa \"nol\" atau kosong", "", "warning");
            } else {
                Framework7.request({
                    url: url_api + 'Temporary?id_barang=' + id_barang + '&device_info=' + device_info + '',
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
                            Framework7.request({
                                url: 'https://api.jumantya.my.id/index.php/api/Temporary',
                                method: 'POST',
                                data: { id_barang: id_barang, jenis_barang: jenis_barang, nama_barang: nama_barang, jumlah_ambil: jumlah_ambil, satuan: satuan, device_info: device_info },
                                dataType: 'json',
                                statusCode: {
                                    404: function (xhr) {
                                        alert('page not found');
                                    }
                                },
                                beforeSend: function (xhr) { },
                                success: function (data) {
                                    var arr = [];
                                    // for (var i = 0; i < data.length; i++) {
                                    var id_barang = data.id_barang;
                                    var jenis_barang = data.jenis_barang;
                                    var nama_barang = data.nama_barang;
                                    var jumlah_ambil = data.jumlah_ambil;
                                    var satuan = data.satuan;
                                    var text_colour
                                    if (jenis_barang == "PERALATAN") {
                                        text_colour = "textcolor-brown"
                                    } else if (jenis_barang == "PENGHARUM & CHEMICAL") {
                                        text_colour = "textcolor-blue"
                                    } else if (jenis_barang == "TISSUE") {
                                        text_colour = "textcolor-gray"
                                    }
                                    var html = '';
                                    arr.push(
                                        html = '<li class="">' +
                                        '<div class="card-list-temporary card">' +
                                        '<span class="text-list">' + jenis_barang + '</span></br>' +
                                        '<span class="text-list" style="display:none">' + id_barang + ' | </span><span class="text-list ' + text_colour + '">' + nama_barang + '</span>' +
                                        '<span class="text-list">  ' + jumlah_ambil + ' ' + satuan + '</span>' +
                                        '</div>' +
                                        '</li>'
                                    );
                                    // }
                                    $('#list-temporary').append(html)
                                    // $('#list-temporary').html(arr.join(''));
                                    disable_add(seq);
                                    swal("" + nama_barang + " Berhasil Ditambahkan!", "", "success");
                                    var ltc = parseInt(localStorage.getItem("list_temporary_count")) + 1;
                                    localStorage.setItem("list_temporary_count", ltc);
                                },
                                error: function () { }
                            });
                        } else {
                            swal("" + nama_barang + " sudah ditambahkan!", "", "warning");
                        }
                    },
                    error: function () { }
                });
            }

        }

        window.stok_validation = function (seq, stok, jumlah_ambil) {
            var stok = parseInt(stok)
            var jumlah_ambil = parseInt(jumlah_ambil)
            if (jumlah_ambil > stok) {
                console.log("jumlah ambil = " + jumlah_ambil)
                f7.dialog.alert('Jumlah ambil tidak bisa melebihi stok persediaan!');
                $("#jumlah-ambil" + seq + "").val("");
            }
        }

        var url_api = 'https://api.jumantya.my.id/index.php/api/';

        window.setJenisBarang = function (jenis_barang) {
            Framework7.request({
                url: url_api + 'List_Barang',
                method: 'GET',
                data: { jenis_barang: jenis_barang },
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

                        var id_barang = data[i].id_barang;
                        var id_supplier = data[i].id_supplier;
                        var jenis_barang = data[i].jenis_barang;
                        var nama_barang = data[i].nama_barang;
                        var stok = data[i].stok;
                        var harga = data[i].harga;
                        var satuan = data[i].satuan;
                        var kategori = data[i].kategori;
                        var keb_per_bulan = data[i].keb_per_bulan;
                        var masa_pakai = data[i].masa_pakai;
                        var text_colour
                        if (jenis_barang == "PERALATAN") {
                            text_colour = "textcolor-brown"
                        } else if (jenis_barang == "PENGHARUM & CHEMICAL") {
                            text_colour = "textcolor-blue"
                        } else if (jenis_barang == "TISSUE") {
                            text_colour = "textcolor-gray"
                        }

                        arr.push(
                            '<div class="item-content">' +
                            '<div class="item-inner">' +
                            '<div style="font-size: initial" class="card-list margin-bottom"' +
                            'onclick="show_ambil(' + i + ')">' +
                            '<span class="text-list" style="display:none" id="id-barang' + i + '" >' + id_barang + '</span><span class="text-list" >  </span><span class="text-list ' + text_colour + '" id="nama-barang' + i + '" style="color:#8dad9c">' + nama_barang + '</span>' +
                            '<span class="text-list" >  </span> <span class="text-list" id="stok' + i + '">' + stok + '</span> <span class="text-list" id="satuan' + i + '">' + satuan + '</span>' +
                            '<div id="line' + i + '" style="border-bottom: 2px solid rgba(252, 199, 199, 0.42); margin-bottom: 10px; display:none;"></div>' +
                            '<div class="row" id="show-ambil' + i + '" style="display:none">' +
                            '<div class="item-content item-input col-50">' +
                            '<div class="item-inner">' +

                            // '<div class="stepper stepper-small stepper-round stepper-init">' +
                            // '<div class="stepper-button-minus"></div>' +
                            // '<div class="stepper-input-wrap">' +
                            // '<input type="text" onchange="stok_validation(' + i + ',$(\'#stok' + i + '\').text(), $(\'#jumlah-ambil' + i + '\').val())" placeholder="Jumlah Ambil" id="jumlah-ambil' + i + '" style="font-size: 14px" value="0" min="0" max="100" step="1" readonly>' +
                            // '</div>' +
                            // ' <div class="stepper-button-plus"></div>' +
                            // '</div>' +

                            '<input type="number" onkeyup="stok_validation(' + i + ',$(\'#stok' + i + '\').text(), $(\'#jumlah-ambil' + i + '\').val())" placeholder="Jumlah Ambil" id="jumlah-ambil' + i + '" style="font-size: 14px !important;padding: 6px !important;padding-left: 15px !important;">' +
                            '</div>' +
                            '</div>' +
                            '<div class="item-content col-50"><div class="item-inner"><a class="button button-round button-outline button-small" id="add-to-list' + i + '" href="#" style="margin-left: 40px;margin-top: 1.5px;" ' +
                            'onclick="setBarang_Temporary(' + i + ',$(\'#id-barang' + i + '\').text(),$(\'#jenis-barang' + i + '\').text(),$(\'#nama-barang' + i + '\').text(),$(\'#jumlah-ambil' + i + '\').val(),$(\'#satuan' + i + '\').text())" >Masukkan</a></div></div>' +
                            '</div>' +
                            '<span style="display:none" class="text-list" id="jenis-barang' + i + '">' + jenis_barang + '</span>' +
                            '<span style="display:none" id="harga' + i + '">' + harga + '</span>' +
                            '<span style="display:none" id="keb-per-bulan' + i + '">' + keb_per_bulan + '</span>' +
                            '<span style="display:none" id="masa-pakai' + i + '">' + masa_pakai + '</span>' +
                            '<span style="display:none" id="kategori' + i + '">' + kategori + '</span>' +
                            '<span style="display:none" id="id-supplier' + i + '">' + id_supplier + '</span>' +
                            '</div>' +
                            '</div>' +
                            '</div>'
                        );
                    }
                    $('#barang-list-all').html(arr.join(''));
                },
                error: function () { }
            });

        }

        this.$request({
            url: url_api + 'List_Barang',
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

                    var id_barang = data[i].id_barang;
                    var id_supplier = data[i].id_supplier;
                    var jenis_barang = data[i].jenis_barang;
                    var nama_barang = data[i].nama_barang;
                    var stok = data[i].stok;
                    var harga = data[i].harga;
                    var satuan = data[i].satuan;
                    var kategori = data[i].kategori;
                    var keb_per_bulan = data[i].keb_per_bulan;
                    var masa_pakai = data[i].masa_pakai;
                    var text_colour
                    if (jenis_barang == "PERALATAN") {
                        text_colour = "textcolor-brown"
                    } else if (jenis_barang == "PENGHARUM & CHEMICAL") {
                        text_colour = "textcolor-blue"
                    } else if (jenis_barang == "TISSUE") {
                        text_colour = "textcolor-gray"
                    }

                    arr.push(
                        '<div class="item-content">' +
                        '<div class="item-inner">' +
                        '<div style="font-size: initial" class="card-list margin-bottom"' +
                        'onclick="show_ambil(' + i + ')">' +
                        '<span class="text-list" id="id-barang' + i + '" style="display:none">' + id_barang + '</span><span class="text-list" >  </span><span class="text-list ' + text_colour + '" id="nama-barang' + i + '" style="color:#8dad9c">' + nama_barang + '</span>' +
                        '<span class="text-list" >  </span> <span class="text-list" id="stok' + i + '">' + stok + '</span> <span class="text-list" id="satuan' + i + '">' + satuan + '</span>' +
                        '<div id="line' + i + '" style="border-bottom: 2px solid rgba(252, 199, 199, 0.42); margin-bottom: 10px; display:none;"></div>' +
                        '<div class="row" id="show-ambil' + i + '" style="display:none">' +
                        '<div class="item-content item-input col-50">' +
                        '<div class="item-inner">' +

                        // '<div class="stepper stepper-small stepper-round stepper-init">' +
                        // '<div class="stepper-button-minus"></div>' +
                        // '<div class="stepper-input-wrap">' +
                        // '<input type="text" onchange="stok_validation(' + i + ',$(\'#stok' + i + '\').text(), $(\'#jumlah-ambil' + i + '\').val())" placeholder="Jumlah Ambil" id="jumlah-ambil' + i + '" style="font-size: 14px" value="0" min="0" max="100" step="1" readonly>' +
                        // '</div>' +
                        // ' <div class="stepper-button-plus"></div>' +
                        // '</div>' +

                        '<input type="number" onkeyup="stok_validation(' + i + ',$(\'#stok' + i + '\').text(), $(\'#jumlah-ambil' + i + '\').val())" placeholder="Jumlah Ambil" id="jumlah-ambil' + i + '" style="font-size: 14px !important;padding: 6px !important;padding-left: 15px !important;">' +
                        '</div>' +
                        '</div>' +
                        '<div class="item-content col-50"><div class="item-inner"><a class="button button-round button-outline button-small" id="add-to-list' + i + '" href="#" style="margin-left: 40px;margin-top: 1.5px;" ' +
                        'onclick="setBarang_Temporary(' + i + ',$(\'#id-barang' + i + '\').text(),$(\'#jenis-barang' + i + '\').text(),$(\'#nama-barang' + i + '\').text(),$(\'#jumlah-ambil' + i + '\').val(),$(\'#satuan' + i + '\').text())" >Masukkan</a></div></div>' +
                        '</div>' +
                        '<span style="display:none" class="text-list" id="jenis-barang' + i + '">' + jenis_barang + '</span>' +
                        '<span style="display:none" id="harga' + i + '">' + harga + '</span>' +
                        '<span style="display:none" id="keb-per-bulan' + i + '">' + keb_per_bulan + '</span>' +
                        '<span style="display:none" id="masa-pakai' + i + '">' + masa_pakai + '</span>' +
                        '<span style="display:none" id="kategori' + i + '">' + kategori + '</span>' +
                        '<span style="display:none" id="id-supplier' + i + '">' + id_supplier + '</span>' +
                        '</div>' +
                        '</div>' +
                        '</div>'
                    );
                }
                $('#barang-list-all').html(arr.join(''));
            },
            error: function () { }
        });

        const self1 = this;
        // Create popup
        if (!self1.popup_barang) {
            self1.popup_barang = self1.$f7.popup.create({
                content: `
              <div class="popup">
                <div class="page">
                <div class="navbar" style="height: calc(var(--f7-navbar-height) + var(--f7-safe-area-top));">
                    <div class="navbar-bg navbar-custom inventory-logo-left" style="height: 65px;">
                        <div class="center">
                            <div class="title-page">GOOD'S LIST</div>
                        </div>
                    </div>
                    <div className="navbar-inner sliding">
                        <div className="right">
                            <a href="#" style="left:85%; color:white;" class="link popup-close"><i class="icon f7-icons">multiply_circle_fill</i></a>
                        </div>
                    </div>
                </div>
                
                <div class="fab fab-extended fab-center-bottom">
                    <a href="#" class="link popup-close">
                        <i class="icon f7-icons">checkmark_alt_circle_fill</i>    
                        <div class="fab-text">Selesai</div>
                    </a>
                </div>
                  
                  <div class="page-content">
                  
                    <div class="block">
                    <Block>
                    <div class="item-input-wrap input-dropdown-wrap">
                    <select class="select-input" style="padding: 10px" onchange="setJenisBarang(this.value)" placeholder="Please choose...">
                      <option value="">ALL</option>
                      <option value="PERALATAN">PERALATAN</option>
                      <option value="PENGHARUM & CHEMICAL">PENGHARUM & CHEMICAL</option>
                      <option value="TISSUE">TISSUE</option>
                    </select>
                    </div>
                    <div class="field-separator"></div>
                    <div id="barang-list-all">
                        
                    </div>
                </Block>
                    </div>
                  </div>
                </div>
              </div>
            `.trim(),
            });
        }
        // Open it
        self1.popup_barang.open();
    }
    onPageBeforeRemove() {
        const self = this;
        const self1 = this;
        // Destroy popup when page removed
        if (self.popup_pelaksana) self.popup_pelaksana.destroy();
        if (self1.popup_barang) self1.popup_barang.destroy();
        $(".navbar").show();
        $(".navbar").css('z-index', '200')

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
