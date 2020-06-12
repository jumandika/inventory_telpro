import React from 'react';
import { f7, f7ready, Card } from 'framework7-react';
import Framework7, { Device, Request, Support } from 'framework7';

import {
    Page,
    Tabs,
    Tab,
    Navbar,
    NavLeft,
    NavTitle,
    NavTitleLarge,
    NavRight,
    Searchbar,
    Link,
    Toolbar,
    Block,
    BlockTitle,
    List,
    ListItem,
    Row,
    Col,
    Button
} from 'framework7-react';

export default class extends React.Component {
    constructor() {
        super();
        this.state = {
            isBottom: true,
        };

    }
    render() {
        return (
            <Page pageContent={false} className="package-bg" style={{ backgroundColor: 'whitesmoke' }} name="goods-list" onPageInit={this.onPageInit.bind(this)}>
                <div className="navbar">
                    <div className="navbar-bg navbar-custom inventory-logo-left" style={{ height: '65px' }}>
                        <div className="center">
                            <div className="title-page">GOOD'S LIST</div>
                        </div>
                    </div>
                    <div className="navbar-inner sliding">
                        <div className="left">
                            <a className="icon-only link back icon-smooth margin-left-10" href="#">
                                <i className="icon f7-icons">arrow_turn_up_left</i>
                            </a>
                        </div>

                        <div className="right">
                            <a className="link icon-only panel-open" href="#" data-panel="right">
                                <i className="icon f7-icons icon-smooth margin-right-10">ellipsis_vertical</i>
                            </a>
                        </div>
                    </div>
                </div>

                <Searchbar
                    searchContainer=".search-list"
                    searchIn=".text-list"
                    disableButton={!this.$theme.aurora}
                ></Searchbar>

                <Toolbar tabbar labels scrollable position={this.state.isBottom ? 'bottom' : 'top'}>
                    <Link className="button-bg" tabLink="#tab-cat-1" tabLinkActive text="All" iconIos="f7:layers_fill" iconAurora="f7:layers_fill" iconMd="f7:layers_fill"></Link>
                    <Link className="button-bg" tabLink="#tab-cat-2" text="Tools" iconIos="f7:hammer" iconAurora="f7:hammer" iconMd="f7:hammer"></Link>
                    <Link className="button-bg" tabLink="#tab-cat-3" text="Chemical" iconIos="f7:drop" iconAurora="f7:drop" iconMd="f7:drop"></Link>
                    <Link className="button-bg" tabLink="#tab-cat-4" text="Tissue" iconIos="f7:pano" iconAurora="f7:pano" iconMd="f7:pano"></Link>
                    <Link className="button-bg" tabLink="#tab-cat-5" text="Info" iconIos="f7:info_circle" iconAurora="f7:info_circle" iconMd="f7:info_circle"></Link>
                </Toolbar>


                <Tabs swipeable>
                    <Tab id="tab-cat-1" className="page-content" tabActive>
                        <List className="searchbar-not-found">
                            <ListItem>
                                <Card className="card-list">
                                    <span className="text-menu">Barang tidak tersedia</span><br></br>
                                </Card>
                            </ListItem>
                        </List>
                        <List id="goods-list-all" className="search-list searchbar-found">
                            <List id="skeleton" className="skeleton-text skeleton-effect-fade">
                                <ListItem>
                                    <Card className="card-list-skeleton">
                                        <span className="text-menu">Category</span><br></br>
                                        <span className="text-menu">jenis_barang kategori </span><br></br>
                                        <span className="text-menu"> stok satuan </span>
                                    </Card>
                                </ListItem>
                                <ListItem>
                                    <Card className="card-list-skeleton">
                                        <span className="text-menu">Category</span><br></br>
                                        <span className="text-menu">jenis_barang kategori </span><br></br>
                                        <span className="text-menu"> stok satuan </span>
                                    </Card>
                                </ListItem>
                                <ListItem>
                                    <Card className="card-list-skeleton">
                                        <span className="text-menu">Category</span><br></br>
                                        <span className="text-menu">jenis_barang kategori </span><br></br>
                                        <span className="text-menu"> stok satuan </span>
                                    </Card>
                                </ListItem>
                                <ListItem>
                                    <Card className="card-list-skeleton">
                                        <span className="text-menu">Category</span><br></br>
                                        <span className="text-menu">jenis_barang kategori </span><br></br>
                                        <span className="text-menu"> stok satuan </span>
                                    </Card>
                                </ListItem>
                                <ListItem>
                                    <Card className="card-list-skeleton">
                                        <span className="text-menu">Category</span><br></br>
                                        <span className="text-menu">jenis_barang kategori </span><br></br>
                                        <span className="text-menu"> stok satuan </span>
                                    </Card>
                                </ListItem>
                                <ListItem>
                                    <Card className="card-list-skeleton">
                                        <span className="text-menu">Category</span><br></br>
                                        <span className="text-menu">jenis_barang kategori </span><br></br>
                                        <span className="text-menu"> stok satuan </span>
                                    </Card>
                                </ListItem>
                            </List>
                        </List>
                    </Tab>
                    <Tab id="tab-cat-2" className="page-content">
                        <List className="searchbar-not-found">
                            <ListItem>
                                <Card className="card-list">
                                    <span className="text-menu">Barang tidak tersedia</span><br></br>
                                </Card>
                            </ListItem>
                        </List>
                        <List id="goods-list-tools" className="search-list searchbar-found">

                        </List>
                    </Tab>
                    <Tab id="tab-cat-3" className="page-content">
                        <List className="searchbar-not-found">
                            <ListItem>
                                <Card className="card-list">
                                    <span className="text-menu">Barang tidak tersedia</span><br></br>
                                </Card>
                            </ListItem>
                        </List>
                        <List id="goods-list-chem" className="search-list searchbar-found">

                        </List>
                    </Tab>
                    <Tab id="tab-cat-4" className="page-content">
                        <List className="searchbar-not-found">
                            <ListItem>
                                <Card className="card-list">
                                    <span className="text-menu">Barang tidak tersedia</span><br></br>
                                </Card>
                            </ListItem>
                        </List>
                        <List id="goods-list-tissue" className="search-list searchbar-found">

                        </List>
                    </Tab>
                    <Tab id="tab-cat-5" className="page-content">
                        <List id="goods-list-info">

                        </List>
                    </Tab>
                </Tabs>


            </Page>
        )
    }
    onPageInit() {
        // do something on page init
        // var url_api = 'http://127.0.0.1/rest_ci/index.php/api/list_barang';
        // var url_api = 'http://192.168.43.117/rest_ci/index.php/api/list_barang/';
        var url_api = 'https://api.jumantya.my.id/index.php/api/List_Barang';

        this.$request({
            url: url_api,
            method: 'GET',
            data: {},
            dataType: 'json',
            statusCode: {
                404: function (xhr) {
                    alert('page not found');
                }
            },
            beforeSend: function (xhr) { $('#skeleton').show(); },
            success: function (data) {
                var arr = [];
                for (var i = 0; i < data.length; i++) {
                    var id_barang = data[i].id_barang;
                    var nama_barang = data[i].nama_barang;
                    var stok = data[i].stok;
                    var satuan = data[i].satuan;
                    var kategori = data[i].kategori;
                    var jenis_barang = data[i].jenis_barang;
                    var card_colour
                    var text_colour
                    if (jenis_barang == "PERALATAN") {
                        card_colour = "card-list-brown"
                        text_colour = "textcolor-brown"
                    } else if (jenis_barang == "PENGHARUM & CHEMICAL") {
                        card_colour = "card-list-blue"
                        text_colour = "textcolor-blue"
                    } else if (jenis_barang == "TISSUE") {
                        card_colour = "card-list-gray"
                        text_colour = "textcolor-gray"
                    }

                    arr.push(
                        '<li class="">' +
                        '<div class="item-content">' +
                        '<div class="item-inner">' +
                        '<div class="' + card_colour + ' card link" onclick="createPopup_GoodsDetail($(\'#id-barang-all' + i + '\').text())">' +
                        '<div class="text-list" style="display:none" id="id-barang-all' + i + '">' + id_barang + '</div>' +
                        '<span class="text-list ' + text_colour + '" >' + nama_barang + '</span></br>' +
                        '<span class="label-list">' + jenis_barang + ' ~ ' + kategori + '</span></br>' +
                        '<span class="text-list">' + stok + ' ' + satuan + '</span>' +
                        '</div>' +
                        '</div>' +
                        '</div>' +
                        '</li>'
                    );

                }
                $('#goods-list-all').html(arr.join(''));
            },
            error: function () { }
        });
        this.$request({
            url: url_api,
            method: 'GET',
            data: { jenis_barang: "PERALATAN" },
            dataType: 'json',
            statusCode: {
                404: function (xhr) {
                    alert('page not found');
                }
            },
            beforeSend: function (xhr) { },
            success: function (data) {
                var arr = [];
                localStorage.setItem("tools_amount", data.length);
                for (var i = 0; i < data.length; i++) {
                    var id_barang = data[i].id_barang;
                    var nama_barang = data[i].nama_barang;
                    var stok = data[i].stok;
                    var satuan = data[i].satuan;
                    var kategori = data[i].kategori;
                    var jenis_barang = data[i].jenis_barang;
                    var card_colour
                    var text_colour
                    if (jenis_barang == "PERALATAN") {
                        card_colour = "card-list-brown"
                        text_colour = "textcolor-brown"
                    } else if (jenis_barang == "PENGHARUM & CHEMICAL") {
                        card_colour = "card-list-blue"
                        text_colour = "textcolor-blue"
                    } else if (jenis_barang == "TISSUE") {
                        card_colour = "card-list-gray"
                        text_colour = "textcolor-gray"
                    }
                    arr.push(
                        '<li class="">' +
                        '<div class="item-content">' +
                        '<div class="item-inner">' +
                        '<div class="' + card_colour + ' card link" onclick="createPopup_GoodsDetail($(\'#id-barang-alat' + i + '\').text())">' +
                        '<span class="text-list" style="display:none" id="id-barang-alat' + i + '">' + id_barang + '</span>' +
                        '<span class="text-list ' + text_colour + '" >' + nama_barang + '</span></br>' +
                        '<span class="label-list">' + jenis_barang + ' ~ ' + kategori + '</span></br>' +
                        '<span class="text-list">' + stok + ' ' + satuan + '</span>' +
                        '</div>' +
                        '</div>' +
                        '</div>' +
                        '</li>'
                    );

                }
                $('#goods-list-tools').html(arr.join(''));
            },
            error: function () { }
        });
        this.$request({
            url: url_api,
            method: 'GET',
            data: { jenis_barang: "PENGHARUM & CHEMICAL" },
            dataType: 'json',
            statusCode: {
                404: function (xhr) {
                    alert('page not found');
                }
            },
            beforeSend: function (xhr) { },
            success: function (data) {
                localStorage.setItem("chem_amount", data.length);
                var arr = [];
                for (var i = 0; i < data.length; i++) {
                    var id_barang = data[i].id_barang;
                    var nama_barang = data[i].nama_barang;
                    var stok = data[i].stok;
                    var satuan = data[i].satuan;
                    var kategori = data[i].kategori;
                    var jenis_barang = data[i].jenis_barang;
                    var card_colour
                    var text_colour
                    if (jenis_barang == "PERALATAN") {
                        card_colour = "card-list-brown"
                        text_colour = "textcolor-brown"
                    } else if (jenis_barang == "PENGHARUM & CHEMICAL") {
                        card_colour = "card-list-blue"
                        text_colour = "textcolor-blue"
                    } else if (jenis_barang == "TISSUE") {
                        card_colour = "card-list-gray"
                        text_colour = "textcolor-gray"
                    }
                    arr.push(
                        '<li class="">' +
                        '<div class="item-content">' +
                        '<div class="item-inner">' +
                        '<div class="' + card_colour + ' card link" onclick="createPopup_GoodsDetail($(\'#id-barang-chem' + i + '\').text())">' +
                        '<span class="text-list" style="display:none" id="id-barang-chem' + i + '">' + id_barang + '</span>' +
                        '<span class="text-list ' + text_colour + '" >' + nama_barang + '</span></br>' +
                        '<span class="label-list">' + jenis_barang + ' ~ ' + kategori + '</span></br>' +
                        '<span class="text-list">' + stok + ' ' + satuan + '</span>' +
                        '</div>' +
                        '</div>' +
                        '</div>' +
                        '</li>'
                    );

                }
                $('#goods-list-chem').html(arr.join(''));
                $('#skeleton').hide();
            },
            error: function () { }
        });
        this.$request({
            url: url_api,
            method: 'GET',
            data: { jenis_barang: "TISSUE" },
            dataType: 'json',
            statusCode: {
                404: function (xhr) {
                    alert('page not found');
                }
            },
            beforeSend: function (xhr) { },
            success: function (data) {
                console.log(data);
                localStorage.setItem("tissue_amount", data.length);

                var arr = [];

                for (var i = 0; i < data.length; i++) {
                    var id_barang = data[i].id_barang;
                    var nama_barang = data[i].nama_barang;
                    var stok = data[i].stok;
                    var satuan = data[i].satuan;
                    var kategori = data[i].kategori;
                    var jenis_barang = data[i].jenis_barang;
                    var card_colour
                    var text_colour
                    if (jenis_barang == "PERALATAN") {
                        card_colour = "card-list-brown"
                        text_colour = "textcolor-brown"
                    } else if (jenis_barang == "PENGHARUM & CHEMICAL") {
                        card_colour = "card-list-blue"
                        text_colour = "textcolor-blue"
                    } else if (jenis_barang == "TISSUE") {
                        card_colour = "card-list-gray"
                        text_colour = "textcolor-gray"
                    }
                    arr.push(
                        '<li class="">' +
                        '<div class="item-content">' +
                        '<div class="item-inner">' +
                        '<div class="' + card_colour + ' card link" onclick="createPopup_GoodsDetail($(\'#id-barang-tiss' + i + '\').text())">' +
                        '<span class="text-list" style="display:none" id="id-barang-tiss' + i + '">' + id_barang + '</span>' +
                        '<span class="text-list ' + text_colour + '" >' + nama_barang + '</span></br>' +
                        '<span class="label-list">' + jenis_barang + ' ~ ' + kategori + '</span></br>' +
                        '<span class="text-list">' + stok + ' ' + satuan + '</span>' +
                        '</div>' +
                        '</div>' +
                        '</div>' +
                        '</li>'
                    );

                }
                $('#goods-list-tissue').html(arr.join(''));
            },
            error: function () { }
        });
        var tools_amount = localStorage.getItem("tools_amount");
        var chem_amount = localStorage.getItem("chem_amount");
        var tissue_amount = localStorage.getItem("tissue_amount");
        var arr_info = [];
        arr_info.push(
            '<li class="">' +
            '<div class="item-content">' +
            '<div class="item-inner">' +
            '<div class="card-list card link">' +
            '<span class="text-list">Tools shows</span><span class="text-list" style="color:#75ad8f"> ' + tools_amount + '</span><span class="text-list"> Item</span></br>' +
            '<span class="text-list">Chemical shows</span><span class="text-list" style="color:#75ad8f"> ' + chem_amount + '</span><span class="text-list"> Item</span></br>' +
            '<span class="text-list">Tissue shows</span><span class="text-list" style="color:#75ad8f"> ' + tissue_amount + '</span><span class="text-list"> Item</span></br>' +
            '</div>' +
            '</div>' +
            '</div>' +
            '</li>'
        );
        $('#goods-list-info').html(arr_info.join(''));



        window.createPopup_GoodsDetail = function (id_barang) {
            console.log("id barang: " + id_barang)
            Framework7.request({
                url: url_api,
                method: 'GET',
                data: { id_barang: id_barang },
                dataType: 'json',
                statusCode: {
                    404: function (xhr) {
                        alert('page not found');
                    }
                },
                beforeSend: function (xhr) { },
                success: function (data) {
                    var id_barang = data[0].id_barang;
                    var id_supplier = data[0].id_supplier;
                    var nama_barang = data[0].nama_barang;
                    var jenis_barang = data[0].jenis_barang;
                    var kategori = data[0].kategori;
                    var stok = data[0].stok;
                    var keb_per_bulan = data[0].keb_per_bulan;
                    var satuan = data[0].satuan;
                    var masa_pakai = data[0].masa_pakai;
                    var harga = data[0].harga;

                    $("#id-barang").val(id_barang)
                    $("#id-supplier").val(id_supplier)
                    $("#jenis-barang").val(jenis_barang)
                    $("#kategori").val(kategori)
                    $("#nama-barang").val(nama_barang)
                    $("#keb-per-bulan").val(keb_per_bulan)
                    $("#masa-pakai").val(masa_pakai)
                    $("#stock").val(stok)
                    $("#satuan").val(satuan)
                    $("#harga").val(harga)
                },
                error: function () { }
            });

            self.popup_goods_detail.open();
        }

        const self = this;
        if (!self.popup_goods_detail) {
            self.popup_goods_detail = self.$f7.popup.create({
                content: `
                  <div class="popup">
                    <div class="page">
                    <div class="navbar" style="height: calc(var(--f7-navbar-height) + var(--f7-safe-area-top));">
                        <div class="navbar-bg navbar-custom inventory-logo-left" style="height: 65px;">
                            <div class="center">
                                <div class="title-page">GOODS DETAIL</div>
                            </div>
                        </div>
                        <div className="navbar-inner sliding">
                            <div className="right">
                                <a href="#" style="left:85%; color:white;" class="link popup-close"><i class="icon f7-icons">multiply_circle_fill</i></a>
                            </div>
                        </div>
                    </div>
                    <div class="fab fab-extended fab-right-bottom">
                        <a href="#" class="link popup-close" onclick="">
                            <i class="icon f7-icons">checkmark_alt_circle_fill</i>    
                            <div class="fab-text">Done</div>
                        </a>
                    </div>
                      <div class="page-content">                  
                        <div class="block">
                        <div class="card card-list shadow" style="padding:0px">
                        <div class="card card-in-form">
                        <div class="list no-hairlines-md">
                        <ul>
                            <li class="margin-input">
                                <div class="item-content item-input icon-top">
                                    <div class="item-media">
                                        <i class="icon-smooth icon f7-icons" style="border-radius: 6px; border: none; opacity: 0.8">ID</i>
                                    </div>
                                    <div id="label-id-barang" class="label-list">ID Barang</div>
                                </div>
                            </li>
                            <li class="margin-input">
                                <div class="item-input">
                                    <div class="item-input-wrap">
                                        <input type="text" placeholder="ID Barang" id="id-barang" class="input-popup input-disable" readonly></input>
                                    </div>
                                </div>
                            </li>
                            <div class="field-separator"></div>
                            <li class="margin-input">
                                <div class="item-content item-input icon-top">
                                    <div class="item-media">
                                        <i class="icon-smooth icon f7-icons" style="border-radius: 6px; border: none; opacity: 0.8">S</i>
                                    </div>
                                    <div id="label-id-supplier" class="label-list">ID Supplier</div>
                                </div>
                            </li>
                            <li class="margin-input">
                                <div class="item-input">
                                    <div class="item-input-wrap">
                                        <input type="text" placeholder="ID Supplier" id="id-supplier" class="input-popup input-disable" readonly></input>
                                    </div>
                                </div>
                            </li>
                            <div class="field-separator"></div>
                            <li class="margin-input">
                                <div class="item-content item-input icon-top">
                                    <div class="item-media">
                                        <i class="icon-smooth icon f7-icons" style="border-radius: 6px; border: none; opacity: 0.8">cube_box</i>
                                    </div>
                                    <div id="label-nama-barang" class="label-list">Nama Barang</div>
                                </div>
                            </li>
                            <li class="margin-input">
                                <div class="item-input">
                                    <div class="item-input-wrap">
                                        <input type="text" placeholder="Nama Barang" id="nama-barang" class="input-popup input-disable" readonly></input>
                                    </div>
                                </div>
                            </li>
                            <div class="field-separator"></div>

                            <li class="margin-input">
                                <div class="item-content item-input icon-top">
                                    <div class="item-media">
                                        <i class="icon-smooth icon f7-icons" style="border-radius: 6px; border: none; opacity: 0.8">cube_box</i>
                                    </div>
                                    <div id="label-jenis-barang" class="label-list">Jenis Barang</div>
                                </div>
                            </li>
                            <li class="margin-input">
                                <div class="item-input">
                                    <div class="item-input-wrap">
                                        <input type="text" placeholder="Jenis Barang" id="jenis-barang" class="input-popup input-disable" readonly></input>
                                    </div>
                                </div>
                            </li>
                            <div class="field-separator"></div>

                            <li class="margin-input">
                                <div class="item-content item-input icon-top">
                                    <div class="item-media">
                                        <i class="icon-smooth icon f7-icons" style="border-radius: 6px; border: none; opacity: 0.8">cube_box</i>
                                    </div>
                                    <div id="label-kategori" class="label-list">Kategori</div>
                                </div>
                            </li>
                            <li class="margin-input">
                                <div class="item-input">
                                    <div class="item-input-wrap">
                                        <input type="text" placeholder="Kategori" id="kategori" class="input-popup input-disable" readonly></input>
                                    </div>
                                </div>
                            </li>
                            <div class="field-separator"></div>
                        <div class="row">
                        <div class="col">
                            <li class="margin-input">
                                <div class="item-content item-input icon-top">
                                    <div class="item-media">
                                        <i class="icon-smooth icon f7-icons" style="border-radius: 6px; border: none; opacity: 0.8">calendar_badge_minus</i>
                                    </div>
                                    <div id="label-per-bulan" class="label-list">Kebutuhan/bulan</div>
                                </div>
                            </li>
                            <li class="margin-input">
                                <div class="item-input">
                                    <div class="item-input-wrap">
                                        <input type="number" placeholder="Kebutuhan/Bulan"  id="keb-per-bulan" class="input-popup input-disable" readonly></input>
                                    </div>
                                </div>
                            </li>
                        </div> 
                        <div class="col">
                            <li class="margin-input">
                                <div class="item-content item-input icon-top">
                                    <div class="item-media">
                                        <i class="icon-smooth icon f7-icons" style="border-radius: 6px; border: none; opacity: 0.8">arrow_right_arrow_left_circle_fill</i>
                                    </div>
                                    <div id="label-stock" class="label-list">Masa Pakai</div>
                                </div>
                            </li>
                            <li class="margin-input">
                                <div class=" item-input">
                                    <div class="item-input-wrap">
                                        <input type="number" placeholder="Masa Pakai" id="masa-pakai" class="input-popup input-disable" readonly></input>
                                    </div>
                                </div>
                            </li>
                        </div>
                        </div>
                            <div class="field-separator"></div>
                        <div class="row">
                        <div class="col">
                            <li class="margin-input">
                                <div class="item-content item-input icon-top">
                                    <div class="item-media">
                                        <i class="icon-smooth icon f7-icons" style="border-radius: 6px; border: none; opacity: 0.8">tray_arrow_down_fill</i>
                                    </div>
                                    <div id="label-apply-qty" class="label-list">Stock</div>
                                </div>
                            </li>
                            <li class="margin-input">
                                <div class="item-input">
                                    <div class="item-input-wrap">
                                        <input type="number" placeholder="Stock" id="stock" class="input-popup input-disable"></input>
                                    </div>
                                </div>
                            </li>
                        </div>
                        <div class="col">
                            <li class="margin-input">
                                <div class="item-content item-input icon-top">
                                    <div class="item-media">
                                        <i class="icon-smooth icon f7-icons" style="border-radius: 6px; border: none; opacity: 0.8">U</i>
                                    </div>
                                    <div id="label-satuan" class="label-list">Satuan</div>
                                </div>
                            </li>
                            <li class="margin-input">
                                <div class="item-input">
                                    <div class="item-input-wrap">
                                        <input type="text" placeholder="Satuan" id="satuan" class="input-popup" readonly></input>
                                    </div>
                                </div>
                            </li>
                        </div>
                        </div>

                            <div class="field-separator"></div>
                            <li class="margin-input">
                                <div class="item-content item-input icon-top">
                                    <div class="item-media">
                                        <i class="icon-smooth icon f7-icons" style="border-radius: 6px; border: none; opacity: 0.8">money_dollar_circle_fill</i>
                                    </div>
                                    <div id="label-harga" class="label-list">Harga (Rp.)</div>
                                </div>
                            </li>
                            <li class="margin-input margin-bottom">
                                <div class="item-input">
                                    <div class="item-input-wrap">
                                        <input type="number" placeholder="Harga (Rp.)" id="harga" class="input-popup input-disable" readonly></input>
                                    </div>
                                </div>
                            </li>

                        </ul>    
                        </div>
                        </div>
                        </div>
                        </div>
                        </div>
                      </div>
                    </div>
                  </div>
                `.trim(),
                on: {
                    closed: function (popup) {
                        console.log('Popup closed');

                    }

                }
            });
        }
    }
}