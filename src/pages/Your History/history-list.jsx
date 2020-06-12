import React from 'react';
import { f7, f7ready, Card } from 'framework7-react';

import {
    Page,
    Tabs,
    Tab,
    CardContent,
    CardHeader,
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
import Framework7 from 'framework7';

export default class extends React.Component {
    constructor() {
        super();
        this.state = {
            isBottom: true,
        };

    }
    render() {
        return (
            <Page
                pageContent={false}
                className="package-bg" style={{ backgroundColor: 'whitesmoke' }}
                name="history-list"
                onPageInit={this.onPageInit.bind(this)}
                onPageAfterIn={this.onPageAfterIn.bind(this)}
            // ptr onPtrRefresh={this.loadMore.bind(this)}
            >
                <div className="navbar">
                    <div className="navbar-bg navbar-custom inventory-logo-left" style={{ height: '65px' }}>
                        <div className="center">
                            <div className="title-page">HISTORY LIST</div>
                        </div>
                    </div>
                    <div className="navbar-inner sliding" style={{ boxShadow: "0px 5px 10px -10px rgb(0, 0, 0)", borderRadius: "35px" }}>
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
                    searchIn=".text-list-expandable"
                    disableButton={!this.$theme.aurora}
                    className="search"
                ></Searchbar>

                <Toolbar tabbar labels scrollable position={this.state.isBottom ? 'bottom' : 'top'}>
                    <Link className="button-bg" tabLink="#tab-his-1" tabLinkActive text="All" iconIos="f7:layers_fill" iconAurora="f7:layers_fill" iconMd="f7:layers_fill"></Link>
                    <Link className="button-bg" tabLink="#tab-his-2" text="Tools" iconIos="f7:hammer" iconAurora="f7:hammer" iconMd="f7:hammer"></Link>
                    <Link className="button-bg" tabLink="#tab-his-3" text="Chemical" iconIos="f7:drop" iconAurora="f7:drop" iconMd="f7:drop"></Link>
                    <Link className="button-bg" tabLink="#tab-his-4" text="Tissue" iconIos="f7:pano" iconAurora="f7:pano" iconMd="f7:pano"></Link>
                    <Link className="button-bg" tabLink="#tab-his-5" text="Info" iconIos="f7:info_circle" iconAurora="f7:info_circle" iconMd="f7:info_circle"></Link>
                </Toolbar>

                <Tabs swipeable >
                    <Tab id="tab-his-1" className="page-content" tabActive>
                        <List className="searchbar-not-found">
                            <ListItem>
                                <Card className="card-list">
                                    <span className="text-menu">History not found</span><br></br>
                                </Card>
                            </ListItem>
                        </List>
                        {/* 
                            <Card expandable>
                                <CardContent padding={false}>
                                    <div className="bg-color-yellow" style={{ height: '300px' }}>
                                        <CardHeader textColor="black" className="display-block">
                                            Framework7
        <br />
                                            <small style={{ opacity: 0.7 }}>Build Mobile Apps</small>
                                        </CardHeader>
                                        <Link cardClose color="black" className="card-opened-fade-in" style={{ position: 'absolute', right: '15px', top: '15px' }} iconF7="multiply_circle_fill" />
                                    </div>
                                    <div className="card-content-padding">
                                        <p>Framework7 - is a free and open source HTML mobile framework to develop hybrid mobile apps or web apps with iOS or Android (Material) native look and feel...</p>
                                    </div>
                                </CardContent>
                            </Card> */}
                        {/* 
                            <div className="card card-list card-expandable" >
                                <div className="card-content" >
                                    <div>
                                        <span class="text-list">KL20020022</span><br></br>
                                        <span class="text-list" style={{ Color: '#8dad9c' }}>Muhammad Djajadi (13660023)</span><br></br>
                                        <span class="text-list">WITEL JAKARTA UTARA Lantai 4</span><br></br>
                                        <span class="text-list">2020-02-18</span>
                                        <a className="card-opened-fade-in link icon-only color-black card-close close-icon-expandable" href="#" >
                                            <i className="icon f7-icons">multiply_circle_fill</i>
                                        </a>
                                    </div>
                                    <div className="card-content-padding">
                                        <p>Framework7 - is a free and open source HTML mobile framework to develop hybrid mobile apps or web apps with iOS or Android (Material) native look and feel...</p>
                                    </div>
                                </div>
                            </div> */}

                        <List id="history-list-all" style={{ display: 'none' }} className="search-list searchbar-found">

                        </List>
                        <List id="skeleton" className="skeleton-text skeleton-effect-fade">
                            <ListItem>
                                <Card className="card-list-skeleton">
                                    <span className="text-menu">Category</span>
                                    <span className="text-menu">jenis_barang kategori </span>
                                </Card>
                            </ListItem>
                            <ListItem>
                                <Card className="card-list-skeleton">
                                    <span className="text-menu">Category - </span>
                                    <span className="text-menu">jenis_barang kategori </span>
                                </Card>
                            </ListItem>
                            <ListItem>
                                <Card className="card-list-skeleton">
                                    <span className="text-menu">Category - </span>
                                    <span className="text-menu">jenis_barang kategori </span>
                                </Card>
                            </ListItem>
                            <ListItem>
                                <Card className="card-list-skeleton">
                                    <span className="text-menu">Category - </span>
                                    <span className="text-menu">jenis_barang kategori </span>
                                </Card>
                            </ListItem>
                            <ListItem>
                                <Card className="card-list-skeleton">
                                    <span className="text-menu">Category - </span>
                                    <span className="text-menu">jenis_barang kategori </span>
                                </Card>
                            </ListItem>
                            <ListItem>
                                <Card className="card-list-skeleton">
                                    <span className="text-menu">Category - </span>
                                    <span className="text-menu">jenis_barang kategori </span>
                                </Card>
                            </ListItem>
                            <ListItem>
                                <Card className="card-list-skeleton">
                                    <span className="text-menu">Category - </span>
                                    <span className="text-menu">jenis_barang kategori </span>
                                </Card>
                            </ListItem>
                            <ListItem>
                                <Card className="card-list-skeleton">
                                    <span className="text-menu">Category - </span>
                                    <span className="text-menu">jenis_barang kategori </span>
                                </Card>
                            </ListItem>
                            <ListItem>
                                <Card className="card-list-skeleton">
                                    <span className="text-menu">Category - </span>
                                    <span className="text-menu">jenis_barang kategori </span>
                                </Card>
                            </ListItem>
                            <ListItem>
                                <Card className="card-list-skeleton">
                                    <span className="text-menu">Category - </span>
                                    <span className="text-menu">jenis_barang kategori </span>
                                </Card>
                            </ListItem>
                            <ListItem>
                                <Card className="card-list-skeleton">
                                    <span className="text-menu">Category - </span>
                                    <span className="text-menu">jenis_barang kategori </span>
                                </Card>
                            </ListItem>
                        </List>
                    </Tab>
                    <Tab id="tab-his-2" className="page-content">
                        <Block>
                            <List className="searchbar-not-found">
                                <ListItem>
                                    <Card className="card-list">
                                        <span className="text-menu">Barang tidak tersedia</span><br></br>
                                    </Card>
                                </ListItem>
                            </List>
                            <List id="goods-list-tools" className="search-list searchbar-found">

                            </List>
                        </Block>
                    </Tab>
                    <Tab id="tab-his-3" className="page-content">
                        <Block>
                            <List className="searchbar-not-found">
                                <ListItem>
                                    <Card className="card-list">
                                        <span className="text-menu">Barang tidak tersedia</span><br></br>
                                    </Card>
                                </ListItem>
                            </List>
                            <List id="goods-list-chem" className="search-list searchbar-found">

                            </List>
                        </Block>
                    </Tab>
                    <Tab id="tab-his-4" className="page-content">
                        <Block>
                            <List className="searchbar-not-found">
                                <ListItem>
                                    <Card className="card-list">
                                        <span className="text-menu">Barang tidak tersedia</span><br></br>
                                    </Card>
                                </ListItem>
                            </List>
                            <List id="goods-list-tissue" className="search-list searchbar-found">

                            </List>
                        </Block>
                    </Tab>
                    <Tab id="tab-his-5" className="page-content">
                        <Block>
                            <List id="goods-list-info">

                            </List>
                        </Block>
                    </Tab>
                </Tabs>


            </Page>
        )
    }
    loadMore() {
        f7.views.main.router.refreshPage()
    }
    onPageBeforeRemove() {
        $(".navbar").show();
    }
    pageAfterOut() {
        $(".navbar").show();
    }
    onPageInit() {
        document.addEventListener("deviceready", function () {
            window.FirebasePlugin.onNotificationOpen(function (notification) {
                console.log(notification)
                f7.views.main.router.refreshPage()
                var title = notification.title;
                var body = notification.body;
                var notificationFull = f7.notification.create({
                    icon: '<i class="icon f7-icons">info_circle</i>',
                    title: 'Telpro Inventory',
                    titleRightText: 'now',
                    subtitle: title,
                    text: body,
                    swipeToClose: true,
                    closeButton: true,
                    // closeTimeout: 10000,
                    on: {
                        close: function () {

                        },
                    },
                });
                if (title != null || title != undefined) {
                    notificationFull.open();
                }
            }, function (error) {
                console.error(error);
            });
        }, false);
        // var url_api = 'http://127.0.0.1/rest_ci/index.php/api/list_barang';
        // var url_api = 'http://192.168.43.117/rest_ci/index.php/api/list_barang/';
        var url_api = 'https://api.jumantya.my.id/index.php/api/Logbook';

        window.hideSearchbar = function () {
            console.log("hide searchbar");
            $(".searchbar").css("z-index", "1");
        }

        window.printPengambilanPdf = function (id_pengambilan) {
            var url = 'https://api.jumantya.my.id/index.php/api/PrintPengambilanPdf?id_pengambilan=' + id_pengambilan + '';

            PreviewAnyFile.preview(url,
                function (win) {
                    if (win == "SUCCESS") {
                        console.log('success')
                    } else {
                        console.log('error')
                    }
                },
                function (err) {
                    var ref = cordova.InAppBrowser.open(url, '_system', 'hidden=yes');
                    ref.hide();
                    console.log('err', err)
                });
            return false;

            // var fileTransfer = new FileTransfer();
            // var uri = encodeURI("https://api.jumantya.my.id/index.php/api/PrintPengambilanPdf?id_pengambilan=" + id_pengambilan + "");
            // var filePath = 'cdvfile://localhost/persistent/path/to/downloads/';
            // // var filePath = cordova.file.dataDirectory;
            // // console.log(cordova.file.dataDirectory);

            // // var filePath = 'file:///storage/emulated/0/download/';

            // fileTransfer.download(
            //     uri,
            //     filePath,
            //     function (entry) {
            //         console.log("download complete: " + entry.fullPath);
            //     },
            //     function (error) {
            //         console.log("download error source " + error.source);
            //         console.log("download error target " + error.target);
            //         console.log("upload error code" + error.code);
            //     },
            //     true,
            //     // {
            //     //     headers: {
            //     //         "Authorization": "Basic dGVzdHVzZXJuYW1lOnRlc3RwYXNzd29yZA=="
            //     //     }
            //     // }
            // );
        }


        this.$$(document).on('card:close', '.card', function (e) {
            console.log("pg content event");
            $(".searchbar").css("z-index", "600");
        });

        // document.addEventListener('backbutton', function (e) {

        // }, false);

        var jabatan = localStorage.getItem("jabatan");
        var nama_pelaksana = localStorage.getItem("nama_pelaksana");
        if (jabatan == 'Housekeeping' || jabatan == 'Landscape' || jabatan == 'Office Boy' || jabatan == 'Gardener') {
            this.$request({
                url: url_api,
                data: { nama_pelaksana: nama_pelaksana },
                method: 'GET',
                dataType: 'json',
                statusCode: {
                    404: function (xhr) {
                        alert('page not found');
                    }
                },
                beforeSend: function (xhr) { $('#skeleton').show(500); },
                success: function (data) {
                    var arr = [];
                    for (var i = 0; i < data.length; i++) {
                        var id_pengambilan = data[i].id_pengambilan;
                        var nama_pelaksana = data[i].nama_pelaksana;
                        var nik = data[i].nik;
                        var lokasi_kerja = data[i].lokasi_kerja;
                        var sub_lokasi = data[i].sub_lokasi;
                        var tanggal = data[i].tanggal;

                        Framework7.request({
                            url: 'https://api.jumantya.my.id/index.php/api/Detail_Pengambilan?',
                            method: 'GET',
                            data: { id_pengambilan: data[i].id_pengambilan },
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
                                    var id_pengambilan = data[i].id_pengambilan;
                                    var id_barang = data[i].id_barang;
                                    var nama_barang = data[i].nama_barang;
                                    var jenis_barang = data[i].jenis_barang;
                                    var jumlah_ambil = data[i].jumlah_ambil;
                                    var satuan = data[i].satuan;
                                    arr.push(
                                        '<div class="item-content">' +
                                        '<div class="item-inner">' +
                                        '<div class="card-list-nested card">' +
                                        '<span class="text-list">' + jenis_barang + '</span></br>' +
                                        '<span class="text-list">' + id_barang + ' | </span><span class="text-list" style="color:#8dad9c">' + nama_barang + '</span>' +
                                        '<span class="text-list"> | ' + jumlah_ambil + ' ' + satuan + '</span>' +
                                        '</div>' +
                                        '</div>' +
                                        '</div>'
                                    );

                                }
                                $('#detail-history-list' + id_pengambilan + '').html(arr.join(''));
                            },
                            error: function () { }
                        });

                        arr.push(
                            '<li >' +
                            '<div class="item-content">' +
                            '<div class="item-inner">' +
                            '<div class="card card-list-expandable card-expandable" style="min-width: -webkit-fill-available;" onclick="hideSearchbar()">' +
                            '<div class="card-content" >' +
                            '<div>' +
                            '<div>' +
                            '<span class="text-list-expandable" id="id-pengambilan' + i + '">' + id_pengambilan + '</span>' +
                            '<span class="text-list-expandable" style="color: #8dad9c"> | ' + nama_pelaksana + ' (' + nik + ')</span></br>' +
                            '<div style="border-bottom: solid 1px #d4d4d463;margin: 5px 15px 5px 15px;"></div>' +
                            '<span class="text-list">' + lokasi_kerja + ' - ' + sub_lokasi + '</span></br>' +
                            '<div style="border-bottom: solid 1px #d4d4d463;margin: 5px 15px 5px 15px;"></div>' +
                            '<span class="text-list">Tanggal : ' + tanggal + '</span></br>' +
                            '<div style="border-bottom: solid 1px #d4d4d463;margin: 5px 15px 5px 15px;"></div>' +
                            '<span class="text-list">Detail barang:</span></br>' +
                            '</div>' +
                            '<a class="card-opened-fade-in link icon-only color-black card-close close-icon-expandable" href="#" >' +
                            '<i class="icon f7-icons">multiply_circle_fill</i>' +
                            '</a>' +
                            '</div>' +
                            '<div class="card-content-padding bg-gradient-grey" >' +
                            '<div class="list" id="detail-history-list' + id_pengambilan + '">' +

                            '</div>' +
                            '</div>' +
                            '</div>' +
                            '</div>' +
                            '<div style=" z-index: 100; margin-left: -50px; ">' +
                            '<button style="margin-top: 7px; background-color: white;color: #fdbaba; border: 2px solid #fdbaba;" class="button button-outline button-raised button-round" onclick="printPengambilanPdf($(\'#id-pengambilan' + i + '\').text())" >' +
                            '<i style="font-size: 18px;" class="icon f7-icons">printer_fill</i>' +
                            '</button>' +
                            '</div>' +
                            '</li>'

                        );

                    }
                    $('#history-list-all').html(arr.join(''));
                    $('#skeleton').hide();
                    $('#history-list-all').show();
                },
                error: function () { }
            });
        } else {
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
                beforeSend: function (xhr) { $('#skeleton').show(500); },
                success: function (data) {
                    var arr = [];
                    for (var i = 0; i < data.length; i++) {
                        var id_pengambilan = data[i].id_pengambilan;
                        var nama_pelaksana = data[i].nama_pelaksana;
                        var nik = data[i].nik;
                        var lokasi_kerja = data[i].lokasi_kerja;
                        var sub_lokasi = data[i].sub_lokasi;
                        var tanggal = data[i].tanggal;

                        Framework7.request({
                            url: 'https://api.jumantya.my.id/index.php/api/Detail_Pengambilan?',
                            method: 'GET',
                            data: { id_pengambilan: data[i].id_pengambilan },
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
                                    var id_pengambilan = data[i].id_pengambilan;
                                    var id_barang = data[i].id_barang;
                                    var nama_barang = data[i].nama_barang;
                                    var jenis_barang = data[i].jenis_barang;
                                    var jumlah_ambil = data[i].jumlah_ambil;
                                    var satuan = data[i].satuan;
                                    arr.push(
                                        '<div class="item-content">' +
                                        '<div class="item-inner">' +
                                        '<div class="card-list-nested card">' +
                                        '<span class="text-list">' + jenis_barang + '</span></br>' +
                                        '<span class="text-list">' + id_barang + ' | </span><span class="text-list" style="color:#8dad9c">' + nama_barang + '</span>' +
                                        '<span class="text-list"> | ' + jumlah_ambil + ' ' + satuan + '</span>' +
                                        '</div>' +
                                        '</div>' +
                                        '</div>'
                                    );

                                }
                                $('#detail-history-list' + id_pengambilan + '').html(arr.join(''));
                            },
                            error: function () { }
                        });

                        // arr.push(
                        //     '<li class="">' +
                        //     '<div class="item-content">' +
                        //     '<div class="item-inner">' +
                        //     '<div class="card-list card">' +
                        //     '<span class="text-list">' + id_pengambilan + '</span></br>' +
                        //     '<span class="text-list" style="color:#8dad9c">' + nama_pelaksana + ' (' + nik + ')</span></br>' +
                        //     '<span class="text-list">' + lokasi_kerja + ' ' + sub_lokasi + '</span></br>' +
                        //     '<span class="text-list">' + tanggal + '</span>' +
                        //     '</div>' +
                        //     '</div>' +
                        //     '</div>' +
                        //     '</li>'
                        // );



                        arr.push(
                            '<li >' +
                            '<div class="item-content">' +
                            '<div class="item-inner">' +
                            '<div class="card card-list-expandable card-expandable" style="min-width: -webkit-fill-available;" onclick="hideSearchbar()">' +
                            '<div class="card-content" >' +
                            '<div>' +
                            // '<div class="card-list card">' +
                            '<div>' +
                            '<span class="text-list-expandable" id="id-pengambilan' + i + '">' + id_pengambilan + '</span>' +
                            '<span class="text-list-expandable" style="color: #8dad9c"> | ' + nama_pelaksana + ' (' + nik + ')</span></br>' +
                            '<div style="border-bottom: solid 1px #d4d4d463;margin: 5px 15px 5px 15px;"></div>' +
                            '<span class="text-list">' + lokasi_kerja + ' - ' + sub_lokasi + '</span></br>' +
                            '<div style="border-bottom: solid 1px #d4d4d463;margin: 5px 15px 5px 15px;"></div>' +
                            '<span class="text-list">Tanggal : ' + tanggal + '</span></br>' +
                            '<div style="border-bottom: solid 1px #d4d4d463;margin: 5px 15px 5px 15px;"></div>' +
                            '<span class="text-list">Detail barang:</span></br>' +
                            '</div>' +
                            // '</div>' +
                            '<a class="card-opened-fade-in link icon-only color-black card-close close-icon-expandable " href="#" >' +
                            '<i class="icon f7-icons">multiply_circle_fill</i>' +
                            '</a>' +
                            '</div>' +
                            '<div class="card-content-padding bg-gradient-grey" >' +
                            '<div class="list" id="detail-history-list' + id_pengambilan + '">' +

                            '</div>' +
                            '</div>' +
                            '</div>' +
                            '</div>' +
                            '<div style=" z-index: 100; margin-left: -50px; ">' +
                            '<button style="margin-top: 7px; background-color: white;    color: #fdbaba;border: 2px solid #fdbaba;" class="button button-outline button-raised button-round" onclick="printPengambilanPdf($(\'#id-pengambilan' + i + '\').text())" >' +
                            '<i style="font-size: 18px;" class="icon f7-icons">printer_fill</i>' +
                            '</button>' +
                            '</div>' +
                            // '</div>' +
                            // '</div>' +
                            '</li>'

                        );

                    }
                    $('#history-list-all').html(arr.join(''));
                    $('#skeleton').hide();
                    $('#history-list-all').show();

                },
                error: function () { }
            });

        }




        // this.$request({
        //     url: url_api,
        //     method: 'GET',
        //     data: { jenis_barang: "PERALATAN" },
        //     dataType: 'json',
        //     statusCode: {
        //         404: function (xhr) {
        //             alert('page not found');
        //         }
        //     },
        //     beforeSend: function (xhr) { },
        //     success: function (data) {
        //         var arr = [];
        //         localStorage.setItem("tools_amount", data.length);
        //         for (var i = 0; i < data.length; i++) {
        //             var nama_barang = data[i].nama_barang;
        //             var stok = data[i].stok;
        //             var satuan = data[i].satuan;
        //             var kategori = data[i].kategori;
        //             var jenis_barang = data[i].jenis_barang;
        //             arr.push(
        //                 '<li class="">' +
        //                 '<div class="item-content">' +
        //                 '<div class="item-inner">' +
        //                 '<div class="card-list card">' +
        //                 '<span class="text-list" style="color:#8dad9c">' + nama_barang + '</span></br>' +
        //                 '<span class="text-list">' + jenis_barang + ' ' + kategori + '</span></br>' +
        //                 '<span class="text-list">' + stok + ' ' + satuan + '</span>' +
        //                 '</div>' +
        //                 '</div>' +
        //                 '</div>' +
        //                 '</li>'
        //             );

        //         }
        //         $('#goods-list-tools').html(arr.join(''));
        //     },
        //     error: function () { }
        // });
        // this.$request({
        //     url: url_api,
        //     method: 'GET',
        //     data: { jenis_barang: "PENGHARUM & CHEMICAL" },
        //     dataType: 'json',
        //     statusCode: {
        //         404: function (xhr) {
        //             alert('page not found');
        //         }
        //     },
        //     beforeSend: function (xhr) { },
        //     success: function (data) {
        //         localStorage.setItem("chem_amount", data.length);
        //         var arr = [];
        //         for (var i = 0; i < data.length; i++) {
        //             var nama_barang = data[i].nama_barang;
        //             var stok = data[i].stok;
        //             var satuan = data[i].satuan;
        //             var kategori = data[i].kategori;
        //             var jenis_barang = data[i].jenis_barang;
        //             arr.push(
        //                 '<li class="">' +
        //                 '<div class="item-content">' +
        //                 '<div class="item-inner">' +
        //                 '<div class="card-list card">' +
        //                 '<span class="text-list" style="color:#8dad9c">' + nama_barang + '</span></br>' +
        //                 '<span class="text-list">' + jenis_barang + ' ' + kategori + '</span></br>' +
        //                 '<span class="text-list">' + stok + ' ' + satuan + '</span>' +
        //                 '</div>' +
        //                 '</div>' +
        //                 '</div>' +
        //                 '</li>'
        //             );

        //         }
        //         $('#goods-list-chem').html(arr.join(''));
        //     },
        //     error: function () { }
        // });
        // this.$request({
        //     url: url_api,
        //     method: 'GET',
        //     data: { jenis_barang: "TISSUE" },
        //     dataType: 'json',
        //     statusCode: {
        //         404: function (xhr) {
        //             alert('page not found');
        //         }
        //     },
        //     beforeSend: function (xhr) { },
        //     success: function (data) {
        //         console.log(data);
        //         localStorage.setItem("tissue_amount", data.length);

        //         var arr = [];

        //         for (var i = 0; i < data.length; i++) {
        //             var nama_barang = data[i].nama_barang;
        //             var stok = data[i].stok;
        //             var satuan = data[i].satuan;
        //             var kategori = data[i].kategori;
        //             var jenis_barang = data[i].jenis_barang;
        //             arr.push(
        //                 '<li class="">' +
        //                 '<div class="item-content">' +
        //                 '<div class="item-inner">' +
        //                 '<div class="card-list card">' +
        //                 '<span class="text-list" style="color:#8dad9c">' + nama_barang + '</span></br>' +
        //                 '<span class="text-list">' + jenis_barang + ' ' + kategori + '</span></br>' +
        //                 '<span class="text-list">' + stok + ' ' + satuan + '</span>' +
        //                 '</div>' +
        //                 '</div>' +
        //                 '</div>' +
        //                 '</li>'
        //             );

        //         }
        //         $('#goods-list-tissue').html(arr.join(''));
        //     },
        //     error: function () { }
        // });
        // var tools_amount = localStorage.getItem("tools_amount");
        // var chem_amount = localStorage.getItem("chem_amount");
        // var tissue_amount = localStorage.getItem("tissue_amount");
        // var arr_info = [];
        // arr_info.push(
        //     '<li class="">' +
        //     '<div class="item-content">' +
        //     '<div class="item-inner">' +
        //     '<div class="card-list card">' +
        //     '<span class="text-list">Tools shows</span><span class="text-list" style="color:#75ad8f"> ' + tools_amount + '</span><span class="text-list"> Item</span></br>' +
        //     '<span class="text-list">Chemical shows</span><span class="text-list" style="color:#75ad8f"> ' + chem_amount + '</span><span class="text-list"> Item</span></br>' +
        //     '<span class="text-list">Tissue shows</span><span class="text-list" style="color:#75ad8f"> ' + tissue_amount + '</span><span class="text-list"> Item</span></br>' +
        //     '</div>' +
        //     '</div>' +
        //     '</div>' +
        //     '</li>'
        // );
        // $('#goods-list-info').html(arr_info.join(''));
    }
    onPageAfterIn() {

    }

}