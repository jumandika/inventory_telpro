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
            id_masuk: '',
            tgl_masuk: '',
            id_supplier: '',
            nama_supplier: '',
            id_barang: '',
            nama_barang: '',
            jenis_barang: '',
            kategori: '',
            masa_pakai: '',
            keb_per_bulan: '',
            harga: '',
            qty_masuk: '',
            satuan: '',
            id_admin: '',
            scrollTop: 0
        }
        this.myRef = React.createRef()
        this.navbarHandler = this.navbarHandler.bind(this);


    }

    render() {
        return (
            <Page pageContent={false} name="goods-add" className="city-building-bg" style={{ backgroundColor: 'whitesmoke' }}
                onPageInit={this.onPageInit.bind(this)}
                onPageBeforeRemove={this.onPageBeforeRemove.bind(this)}
                onPageBeforeOut={this.onPageBeforeOut.bind(this)}
            >
                <div className="navbar" style={{ zIndex: "1" }}>
                    <div id="navbar-bg" id="navbar-bg" className="navbar-bg navbar-custom inventory-logo-left" style={{ height: '185px', borderRadius: " 0 0 0px 0px" }}>
                        <div className="center">
                            <div className="title-page">GOOD'S ADD</div>
                        </div>
                    </div>
                    <div className="navbar-inner sliding">
                        <div style={{ display: "none" }} className="left">
                            <a className="icon-only link back icon-smooth margin-left-10" href="#">
                                <i className="icon f7-icons">arrow_turn_up_left</i>
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
                    <div style={{ textAlignLast: "center", height: "60px" }} className="add-goods-icon">
                        {/* <i  className="icon f7-icons icon-menu icon-title icon-disable" style={{ textShadow: "rgba(0, 0, 0, 0.17) 0px 2px 0px", color: "rgb(239, 225, 197)" }}>plus_rectangle_fill_on_rectangle_fill</i> */}
                    </div>
                    <Card className="card-list-form">
                        <List noHairlinesMd>
                            <ListInput
                                // className="input-border"
                                type="text"
                                inputId="id-masuk"
                                placeholder="ID Masuk"
                                readonly
                                className="margin-top"
                            // clearButton
                            >
                                <Icon className="icon-smooth" f7="ID" slot="media" />
                                <div className="field-separator"></div>
                            </ListInput>
                            <ListInput
                                className="margin-bottom"
                                type="text"
                                inputId="tgl-masuk"
                                placeholder="Tanggal"
                                onChange={(e) => this.setState({ tgl_pengambilan: e.target.value })}
                                readonly
                            // clearButton
                            >
                                <Icon className="icon-smooth" f7="today" slot="media" />
                            </ListInput>
                        </List>
                    </Card>
                    <Card className="card-list-form">
                        <List noHairlinesMd>
                            <li>
                                <Card className="card-in-form label-list" ><i className="margin-right icon f7-icons" style={{ fontSize: "23px" }}>cart_fill_badge</i>
                                     Info Barang
                                     <div className="field-separator"></div>
                                    <CardContent padding={false}>
                                        <ul>
                                            <li className="select-input margin-input ">
                                                <div className="item-content item-input">
                                                    <div className="item-inner">
                                                        <div className="item-input-wrap input-dropdown">
                                                            <select placeholder="ID Supplier" id="id-supplier" className="select-supplier" style={{ textAlignLast: "center" }}>
                                                                <option value="">Pilih Supplier</option>
                                                            </select>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                            <div className="field-separator"></div>
                                            <li className="select-input margin-input">
                                                <div className="item-content item-input">
                                                    <div className="item-inner">
                                                        <div className="item-input-wrap input-dropdown">
                                                            <select placeholder="Kategori" id="kategori" className="kategori" style={{ textAlignLast: "center" }}>
                                                                <option value="">Pilih Kategori</option>
                                                                <option value="Housekeeping">Housekeeping</option>
                                                                <option value="Landscape">Landscape</option>
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
                                                            <select placeholder="Jenis Barang" id="jenis-barang" className="jenis-barang" onChange={this.getIdBarang.bind(this)} style={{ textAlignLast: "center" }}>
                                                                <option value="">Pilih Jenis Barang</option>
                                                                <option value="PERALATAN">PERALATAN</option>
                                                                <option value="PENGHARUM & CHEMICAL">PENGHARUM & CHEMICAL</option>
                                                                <option value="TISSUE">TISSUE</option>
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
                    <Card className="card-list-form">
                        <List noHairlinesMd>
                            <li>
                                <Card className="card-in-form label-list" ><i className=" icon f7-icons margin-right" style={{ fontSize: "23px" }}>cart_fill_badge</i>
                                     Info Barang
                                     <div className="field-separator"></div>
                                    <CardContent padding={false}>
                                        <ul>
                                            <li className="margin-input">
                                                <div className="item-content item-input icon-top">
                                                    <div className="item-media">
                                                        <i className="icon-smooth icon f7-icons" style={{ borderRadius: "6px", border: "none", opacity: "0.8" }}>ID</i>
                                                    </div>
                                                    <div id="label-id-barang" style={{ display: "none" }}>ID Barang</div>
                                                </div>
                                            </li>
                                            <li className="margin-input">
                                                <div className="item-input">
                                                    <div className="item-input-wrap">
                                                        <input type="text" readOnly placeholder="ID Barang" id="id-barang" style={{ textAlignLast: "center" }} className=""></input>
                                                    </div>
                                                </div>
                                            </li>
                                            <div className="field-separator"></div>
                                            <li className="margin-input">
                                                <div className="item-content item-input icon-top">
                                                    <div className="item-media">
                                                        <i className="icon-smooth icon f7-icons" style={{ borderRadius: "6px", border: "none", opacity: "0.8" }}>cube_box</i>
                                                    </div>
                                                    <div id="label-nama-barang" style={{ display: "none" }}>Nama Barang</div>
                                                </div>
                                            </li>
                                            <li className="margin-input">
                                                <div className="item-input">
                                                    <div className="item-input-wrap">
                                                        <input type="text" placeholder="Nama Barang" onInput={this.showLabelInput.bind(this)} id="nama-barang" style={{ textAlignLast: "center" }} className=""></input>
                                                    </div>
                                                </div>
                                                <span className="margin-top"><button style={{ backgroundColor: '#fb6f6f' }} className=" margin-top button button-fill" onClick={this.scanQrBarcode.bind(this)}><i className="icon f7-icons">barcode_viewfinder</i>Scan</button></span>
                                            </li>
                                            <div className="field-separator"></div>
                                        </ul>
                                    </CardContent>
                                </Card>
                            </li>
                        </List>
                    </Card>
                    <Card className="card-list-form">
                        <List noHairlinesMd>
                            <li>
                                <Card className="card-in-form label-list" ><i className=" icon f7-icons margin-right" style={{ fontSize: "23px" }}>cart_fill_badge</i>
                                     Info Barang
                                     <div className="field-separator"></div>
                                    <CardContent padding={false}>
                                        <ul>
                                            <li className="margin-input">
                                                <div className="item-content item-input icon-top">
                                                    <div className="item-media">
                                                        <i className="icon-smooth icon f7-icons" style={{ borderRadius: "6px", border: "none", opacity: "0.8" }}>arrow_right_arrow_left_circle_fill</i>
                                                    </div>
                                                    <div id="label-masa-pakai" style={{ display: "none" }}>Masa Pakai (bulan)</div>
                                                </div>
                                            </li>
                                            <li className="margin-input">
                                                <div className=" item-input">
                                                    <div className="item-input-wrap">
                                                        <input type="number" placeholder="Masa Pakai (Bulan)" onInput={this.showLabelInput.bind(this)} id="masa-pakai" style={{ textAlignLast: "center" }} className=""></input>
                                                    </div>
                                                </div>
                                            </li>
                                            <div className="field-separator"></div>
                                            <li className="margin-input">
                                                <div className="item-content item-input icon-top">
                                                    <div className="item-media">
                                                        <i className="icon-smooth icon f7-icons" style={{ borderRadius: "6px", border: "none", opacity: "0.8" }}>calendar_badge_minus</i>
                                                    </div>
                                                    <div id="label-per-bulan" style={{ display: "none" }}>Kebutuhan/bulan</div>
                                                </div>
                                            </li>
                                            <li className="margin-input">
                                                <div className="item-input">
                                                    <div className="item-input-wrap">
                                                        <input type="number" placeholder="Kebutuhan/Bulan" onInput={this.showLabelInput.bind(this)} id="keb-per-bulan" style={{ textAlignLast: "center" }} className=""></input>
                                                    </div>
                                                </div>
                                            </li>
                                            <div className="field-separator"></div>
                                            <li className="margin-input">
                                                <div className="item-content item-input icon-top">
                                                    <div className="item-media">
                                                        <i className="icon-smooth icon f7-icons" style={{ borderRadius: "6px", border: "none", opacity: "0.8" }}>money_dollar_circle_fill</i>
                                                    </div>
                                                    <div id="label-harga" style={{ display: "none" }}>Harga (Rp.)</div>
                                                </div>
                                            </li>
                                            <li className="margin-input">
                                                <div className="item-input">
                                                    <div className="item-input-wrap">
                                                        <input type="number" placeholder="Harga (Rp.)" onInput={this.showLabelInput.bind(this)} id="harga" style={{ textAlignLast: "center" }} className=""></input>
                                                    </div>
                                                </div>
                                            </li>
                                            <div className="field-separator"></div>
                                            <li className="margin-input">
                                                <div className="item-content item-input icon-top">
                                                    <div className="item-media">
                                                        <i className="icon-smooth icon f7-icons" style={{ borderRadius: "6px", border: "none", opacity: "0.8" }}>tray_arrow_down_fill</i>
                                                    </div>
                                                    <div id="label-qty-masuk" style={{ display: "none" }}>Jumlah Masuk</div>
                                                </div>
                                            </li>
                                            <li className="margin-input">
                                                <div className="item-input">
                                                    <div className="item-input-wrap">
                                                        <input type="number" placeholder="Qty Masuk" onInput={this.showLabelInput.bind(this)} id="qty-masuk" style={{ textAlignLast: "center" }} className=""></input>
                                                    </div>
                                                </div>
                                            </li>
                                            <div className="field-separator"></div>

                                            {/* <ListInput
                                            type="text"
                                            inputId="nama-barang"
                                            placeholder="Nama Barang"
                                            onInput={(e) => this.setState({ nama_barang: e.target.value })}
                                        // clearButton
                                        >
                                            <Icon className="icon-smooth" f7="cube_box" slot="media" />
                                        </ListInput>
                                        <ListInput
                                            type="text"
                                            inputId="masa-pakai"
                                            placeholder="Masa Pakai"
                                            onInput={(e) => this.setState({ masa_pakai: e.target.value })}
                                        >
                                            <Icon className="icon-smooth" f7="arrow_right_arrow_left_circle_fill" slot="media" />
                                        </ListInput>
                                        <ListInput
                                            type="text"
                                            inputId="keb-per-bulan"
                                            placeholder="Kebutuhan/Bulan"
                                            onInput={(e) => this.setState({ keb_per_bulan: e.target.value })}
                                        >
                                            <Icon className="icon-smooth" f7="calendar_badge_minus" slot="media" />
                                        </ListInput>
                                        <ListInput
                                            type="text"
                                            inputId="harga"
                                            placeholder="Harga (Rp.)"
                                            onInput={(e) => this.setState({ harga: e.target.value })}
                                        // clearButton
                                        >
                                            <Icon className="icon-smooth" f7="money_dollar_circle_fill" slot="media" />
                                        </ListInput>
                                        <ListInput
                                            type="text"
                                            inputId="qty-masuk"
                                            placeholder="Jumlah Masuk"
                                            onInput={(e) => this.setState({ qty_masuk: e.target.value })}
                                        // clearButton
                                        >
                                            <Icon className="icon-smooth" f7="tray_arrow_down_fill" slot="media" />
                                        </ListInput> */}
                                            <li className="select-input margin-input margin-bottom" >
                                                <div className="item-content item-input">
                                                    <div className="item-inner">
                                                        <div className="item-input-wrap input-dropdown">
                                                            <select placeholder="Satuan" id="satuan" className="satuan">
                                                                <option value="">Pilih Satuan</option>
                                                                <option value="Unit">Unit</option>
                                                                <option value="Buah">Buah</option>
                                                                <option value="Galon">Galon</option>
                                                                <option value="Pack">Pack</option>
                                                                <option value="Lembar">Lembar</option>
                                                                <option value="Liter">Liter</option>
                                                                <option value="Kg">Kg</option>
                                                                <option value="Meter">Meter</option>
                                                                <option value="Kaleng">Kaleng</option>
                                                                <option value="Bungkus">Bungkus</option>
                                                                <option value="Botol">Botol</option>
                                                                <option value="Pasang">Pasang</option>
                                                                <option value="Stel">Stel</option>
                                                            </select>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                        </ul>
                                    </CardContent>
                                </Card>
                            </li>
                        </List>
                    </Card>
                    <Card className="card-list-form">
                        <List noHairlinesMd>
                            <Button md round outline className="margin " onClick={this.saveGoods.bind(this)}>Submit</Button>
                        </List>
                    </Card>

                </div>
            </Page >
        )
    }
    saveGoods() {
        const self = this;
        const app = self.$f7;
        if (self.infiniteLoading) return;
        self.infiniteLoading = false;
        var url_api = 'https://api.jumantya.my.id/index.php/api/';
        Framework7.request({
            url: url_api + 'Masuk',
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
                    id_masuk = ("IN" + "000" + id_seq);
                } else if (row_count >= 9) {
                    id_masuk = ("IN" + "00" + id_seq);
                } else if (row_count >= 99) {
                    id_masuk = ("IN" + "0" + id_seq);
                } else if (row_count >= 999) {
                    id_masuk = ("IN" + id_seq);
                }
                $('#id-masuk').val(id_masuk);
            },
            error: function () { }
        });

        var id_masuk = $("#id-masuk").val();
        var id_supplier = $("#id-supplier").val();
        var nama_supplier = $("#id-supplier").text();
        var id_masuk = $("#id-masuk").val();
        var id_barang = $("#id-barang").val();
        var nama_barang = $("#nama-barang").val();
        var jenis_barang = $("#jenis-barang").val();
        var kategori = $("#kategori").val();
        var masa_pakai = $("#masa-pakai").val();
        var keb_per_bulan = $("#keb-per-bulan").val();
        var qty_masuk = $("#qty-masuk").val();
        var satuan = $("#satuan").val();
        var harga = $("#harga").val();
        var tgl_masuk = this.state.tgl_masuk;
        var id_admin = localStorage.getItem("id_admin");
        var device_info = osName + ' ' + osVersion + ' ' + mobileVendor + ' ' + mobileModel + ' ' + engineName + ' ' + engineVersion;
        var nama_admin = localStorage.getItem("nama_admin");

        this.setState({ id_masuk: id_masuk });
        this.setState({ id_supplier: id_supplier });
        this.setState({ id_barang: id_barang });
        this.setState({ nama_supplier: nama_supplier });
        this.setState({ jenis_barang: jenis_barang });
        this.setState({ kategori: kategori });
        this.setState({ nama_barang: nama_barang });
        this.setState({ masa_pakai: masa_pakai });
        this.setState({ keb_per_bulan: keb_per_bulan });
        this.setState({ qty_masuk: qty_masuk });
        this.setState({ satuan: satuan });
        this.setState({ harga: harga });
        this.setState({ id_admin: id_admin });

        console.log("id masuk : " + this.state.id_masuk)
        console.log("tgl masuk : " + this.state.tgl_masuk)
        console.log("id supp : " + this.state.id_supplier)
        console.log("nama supp : " + this.state.nama_supplier)
        console.log("kategori : " + this.state.kategori)
        console.log("jenis barang : " + this.state.jenis_barang)
        console.log("id barang : " + this.state.id_barang)
        console.log("nama barang : " + this.state.nama_barang)
        console.log("masa pakai : " + this.state.masa_pakai)
        console.log("keb per bulan : " + this.state.keb_per_bulan)
        console.log("qty masuk : " + this.state.qty_masuk)
        console.log("satuan : " + this.state.satuan)
        console.log("harga : " + this.state.harga)
        console.log("id admin : " + this.state.id_admin)

        if (id_supplier == '') {
            swal("Lengkapi Form Anda untuk melakukan peng-entry-an barang baru", "", "warning");
        } else if (kategori == '') {
            swal("Kategori belum dipilih", "", "warning");
        } else if (jenis_barang == '') {
            swal("Jenis Barang belum dipilih", "", "warning");
        } else if (id_barang == '') {
            swal("ID Barang belum terisi", "", "warning");
        } else if (nama_barang == '') {
            swal("Nama Barang belum terisi", "", "warning");
        } else if (masa_pakai == '') {
            swal("Masa Pakai belum terisi", "", "warning");
        } else if (keb_per_bulan == '') {
            swal("Kebutuhan Per Bulan belum terisi", "", "warning");
        } else if (harga == '') {
            swal("Harga belum terisi", "", "warning");
        } else if (qty_masuk == '') {
            swal("Jumlah Masuk belum terisi", "", "warning");
        } else if (satuan == '') {
            swal("Satuan belum dipilih", "", "warning");
        } else {
            Framework7.request({
                url: 'https://api.jumantya.my.id/index.php/api/List_Barang',
                method: 'POST',
                data: { id_barang: id_barang, id_supplier: id_supplier, jenis_barang: jenis_barang, nama_barang: nama_barang, kategori: kategori, masa_pakai: masa_pakai, harga: harga, stok: 0, satuan: satuan, keb_per_bulan: keb_per_bulan, id_admin: id_admin },
                dataType: 'json',
                statusCode: {
                    404: function (xhr) {
                        alert('page not found');
                    }
                },
                beforeSend: function (xhr) { app.progressbar.show(app.theme === 'md' ? 'white' : 'blue'); },
                success: function (data) {
                    console.log("simpan barang succeeded")
                    Framework7.request({
                        url: 'https://api.jumantya.my.id/index.php/api/Masuk',
                        method: 'POST',
                        data: { id_masuk: id_masuk, tgl_masuk: tgl_masuk, id_admin: id_admin },
                        dataType: 'json',
                        statusCode: {
                            404: function (xhr) {
                                alert('page not found');
                            }
                        },
                        beforeSend: function (xhr) { },
                        success: function (data) {
                            console.log("simpan masuk succeeded")
                            Framework7.request({
                                url: 'https://api.jumantya.my.id/index.php/api/Detail_Register_Masuk',
                                method: 'POST',
                                data: { id_masuk: id_masuk, id_barang: id_barang, jenis_barang: jenis_barang, nama_barang, jml_masuk: qty_masuk, satuan: satuan },
                                dataType: 'json',
                                statusCode: {
                                    404: function (xhr) {
                                        alert('page not found');
                                    }
                                },
                                beforeSend: function (xhr) { },
                                success: function (data) {
                                    console.log("simpan detail register masuk succeeded")
                                    swal("Entry Barang Berhasil Disimpan!", "", "success");
                                    Framework7.request({
                                        url: 'https://fcm.googleapis.com/fcm/send',
                                        method: 'POST',
                                        data: {
                                            "condition": "'goods_request' in topics",
                                            "notification": {
                                                "title": "Notifikasi Barang Masuk",
                                                "body": qty_masuk + " " + satuan + " " + nama_barang + ", Oleh " + nama_admin + ""
                                            }, "data": {
                                                "title": "Notifikasi Barang Masuk",
                                                "body": qty_masuk + " " + satuan + " " + nama_barang + ", Oleh " + nama_admin + "",
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
                },
                error: function () { }
            });



        }

    }
    onPageInit() {

        var url_api = 'https://api.jumantya.my.id/index.php/api/';
        var date_now = new Date();
        var dd = String(date_now.getDate()).padStart(2, '0');
        var mm = String(date_now.getMonth() + 1).padStart(2, '0');
        var yyyy = date_now.getFullYear();

        var hours = String(date_now.getHours()).padStart(2, '0');
        var minutes = String(date_now.getMinutes()).padStart(2, '0');
        var seconds = String(date_now.getSeconds()).padStart(2, '0');

        var today = dd + '-' + mm + '-' + yyyy;
        var today_state = yyyy + '-' + mm + '-' + dd + ' ' + hours + ':' + minutes + ':' + seconds;
        this.setState({ tgl_masuk: today_state })
        localStorage.setItem("list_temporary_count", 0);

        console.log('device info: ' + osName + ' ' + osVersion + ' ' + mobileVendor + ' ' + mobileModel + ' ' + engineName + ' ' + engineVersion);

        var deviceId = Framework7.device.os;
        console.log(deviceId);

        Framework7.request({
            url: url_api + 'Masuk',
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
                    id_masuk = ("IN" + "000" + id_seq);
                } else if (row_count >= 9) {
                    id_masuk = ("IN" + "00" + id_seq);
                } else if (row_count >= 99) {
                    id_masuk = ("IN" + "0" + id_seq);
                } else if (row_count >= 999) {
                    id_masuk = ("IN" + id_seq);
                }

                $('#id-masuk').val(id_masuk);
                $('#tgl-masuk').val(today);

            },
            error: function () { }
        });

        Framework7.request({
            url: url_api + 'Supplier',
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
                var arr = [];
                for (var i = 0; i < data.length; i++) {
                    var id_supplier = data[i].id_supplier;
                    var nama_supplier = data[i].nama_supplier;
                    var html = '';
                    arr.push(
                        html = '<option value="' + id_supplier + '">' + nama_supplier + '</option>'
                    );
                    $('.select-supplier').append(html);
                }

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



    }


    getIdBarang() {
        var jenis_barang = $("#jenis-barang").val();

        var kd_jenis = '';
        if (jenis_barang == "PERALATAN") {
            kd_jenis = "AL";
        } else if (jenis_barang == "PENGHARUM & CHEMICAL") {
            kd_jenis = "CH";
        } else if (jenis_barang == "TISSUE") {
            kd_jenis = "TS";
        }
        var url_api = 'https://api.jumantya.my.id/index.php/api/';
        this.$request({
            url: url_api + 'List_Barang',
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
                var row_count = parseInt(data[0].row_count);
                var seq = parseInt(row_count + 1);
                var id_barang;
                if (row_count < 9) {
                    id_barang = (kd_jenis + "000" + seq);
                } else if (row_count >= 9) {
                    id_barang = (kd_jenis + "00" + + seq);
                } else if (row_count >= 99) {
                    id_barang = (kd_jenis + "0" + + seq);
                } else if (row_count >= 999) {
                    id_barang = (kd_jenis + "" + seq);
                }
                $("#id-barang").val(id_barang);
                $("#label-id-barang").show();
            },
            error: function () { }
        });
    }
    showLabelInput() {
        if ($("#nama-barang").val() != '') {
            console.log("show label nama barang")
            $("#label-nama-barang").show();
        } else {
            console.log("hide label nama barang")
            $("#label-nama-barang").hide();
        }

        if ($("#masa-pakai").val() != '') {
            console.log("show label masa pakai")
            $("#label-masa-pakai").show();
        } else {
            $("#label-masa-pakai").hide();
        }

        if ($("#keb-per-bulan").val() != '') {
            $("#label-per-bulan").show();
        } else {
            $("#label-per-bulan").hide();

        }

        if ($("#harga").val() != '') {
            $("#label-harga").show();
        } else {
            $("#label-harga").hide();
        }

        if ($("#qty-masuk").val() != '') {
            $("#label-qty-masuk").show();
        } else {
            $("#label-qty-masuk").hide();
        }
    }
    scanQrBarcode() {
        cordova.plugins.barcodeScanner.scan(
            function (result) {
                $("#nama-barang").val(result.text)
                // alert("We got a barcode\n" +
                //     "Result: " + result.text + "\n" +
                //     "Format: " + result.format + "\n" +
                //     "Cancelled: " + result.cancelled);
            },
            function (error) {
                alert("Scanning failed: " + error);
            },
            {
                preferFrontCamera: false, // iOS and Android
                showFlipCameraButton: true, // iOS and Android
                showTorchButton: true, // iOS and Android
                torchOn: false, // Android, launch with the torch switched on (if available)
                saveHistory: true, // Android, save scan history (default false)
                prompt: "Place a barcode inside the scan area", // Android
                resultDisplayDuration: 500, // Android, display scanned text for X ms. 0 suppresses it entirely, default 1500
                formats: "QR_CODE,PDF_417,CODE_39,CODE_128,CODE_93,UPC_A,UPC_E,EAN_8,EAN_13", // default: all but PDF_417 and RSS_EXPANDED
                orientation: "potrait", // Android only (portrait|landscape), default unset so it rotates with the device
                disableAnimations: true, // iOS
                disableSuccessBeep: false // iOS and Android
            }
        );
    }
    onPageBeforeRemove() {
        const self = this;
        const self1 = this;
        // Destroy popup when page removed
        if (self.popup_pelaksana) self.popup_pelaksana.destroy();
        if (self1.popup_barang) self1.popup_barang.destroy();
        $(".navbar").show();


    }
    onPageBeforeOut() {
        const self = this;
        // Destroy sheet modal when page removed
        if (self.sheet) self.sheet.destroy();
        $(".title-page").css('margin-top', '20px')
        $(".navbar").css('z-index', '200')
        $(".left").fadeIn(500)

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
