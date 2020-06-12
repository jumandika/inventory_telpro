import React from 'react';
import { f7, f7ready, Card } from 'framework7-react';


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
    Button,
    FabBackdrop,
    FabButtons,
    FabButton,
    Fab,
    Icon

} from 'framework7-react';
import swal from 'sweetalert';

export default class extends React.Component {
    constructor() {
        super();
        this.state = {
            isBottom: true,
        };

    }
    render() {
        return (
            <Page pageContent={false} className="package-bg" style={{ backgroundColor: 'whitesmoke' }} name="patrol-sublocation-list" onPageInit={this.onPageInit.bind(this)}>
                <div className="navbar">
                    <div className="navbar-bg navbar-custom inventory-logo-left" style={{ height: '65px' }}>
                        <div className="center">
                            <div className="title-page">Daftar Lantai</div>
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

                <Fab className="fab-send-color" position="right-bottom" slot="fixed" text="Send" onClick={this.shareTo.bind(this)}>
                    <Icon ios="f7:paperplane_fill" aurora="f7:paperplane_fill" md="f7:paperplane_fill"></Icon>
                </Fab>

                <Toolbar tabbar labels scrollable position={this.state.isBottom ? 'bottom' : 'top'}>
                    <Link tabLink="#tab-patrol-location-list" tabLinkActive text="Patrol Location List" iconIos="f7:building_2_fill" iconAurora="f7:building_2_fill" iconMd="f7:building_2_fill"></Link>
                    {/* <Link tabLink="#tab-location-list" text="Location List" iconIos="f7:hammer" iconAurora="f7:building_2_fill" iconMd="f7:building_2_fill"></Link>
                    <Link tabLink="#tab-sublocation-list" text="Sub Location List" iconIos="f7:drop" iconAurora="f7:building_2_fill" iconMd="f7:building_2_fill"></Link> */}

                </Toolbar>

                <Tabs swipeable>
                    <Tab id="tab-patrol-location-list" className="page-content" tabActive>

                        <List className="searchbar-not-found">
                            <ListItem>
                                <Card className="card-list">
                                    <span className="text-menu">Gedung tidak tersedia</span><br></br>
                                </Card>
                            </ListItem>
                        </List>
                        <List>
                            <ListItem>
                                <Card className="card-list">
                                    <span className="text-list" >FM : </span>
                                    <span className="text-list" id="current-profile-patrol" style={{ color: "#8dad9c" }}></span><br />
                                    <span className="text-list" >Gedung : </span>
                                    <span className="text-list" id="current-location-patrol" style={{ color: "#8dad9c" }}></span><br />
                                    <span className="text-list" >Tanggal : </span>
                                    <span className="text-list" id="current-date-patrol" style={{ color: "#8dad9c" }}></span><br />
                                </Card>
                            </ListItem>
                        </List>
                        <List id="patrol-sublocation-list" className="search-list searchbar-found">
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
                    {/* <Tab id="tab-location-list" className="page-content">
                        <Block>
                            <List className="searchbar-not-found">
                                <ListItem>
                                    <Card className="card-list">
                                        <span className="text-menu">Barang tidak tersedia</span><br></br>
                                    </Card>
                                </ListItem>
                            </List>
                            <List id="location-list" className="search-list searchbar-found">

                            </List>
                        </Block>
                    </Tab>
                    <Tab id="tab-sublocation-list" className="page-content">
                        <Block>
                            <List className="searchbar-not-found">
                                <ListItem>
                                    <Card className="card-list">
                                        <span className="text-menu">Barang tidak tersedia</span><br></br>
                                    </Card>
                                </ListItem>
                            </List>
                            <List id="sublocation-list" className="search-list searchbar-found">

                            </List>
                        </Block>
                    </Tab> */}

                </Tabs>


            </Page>
        )
    }
    onPageInit() {
        var url_api = 'https://api.jumantya.my.id/index.php/api/';

        var date_now = new Date();
        var dd = String(date_now.getDate()).padStart(2, '0');
        var mm = String(date_now.getMonth() + 1).padStart(2, '0');
        var yyyy = date_now.getFullYear();

        var month = new Array();
        month[0] = "Januari";
        month[1] = "Februari";
        month[2] = "Maret";
        month[3] = "April";
        month[4] = "Mei";
        month[5] = "Juni";
        month[6] = "Juli";
        month[7] = "Agustus";
        month[8] = "September";
        month[9] = "Oktober";
        month[10] = "November";
        month[11] = "Desember";
        var bulan = month[date_now.getMonth()];

        var weekday = new Array(7);
        weekday[0] = "Minggu";
        weekday[1] = "Senin";
        weekday[2] = "Selasa";
        weekday[3] = "Rabu";
        weekday[4] = "Kamis";
        weekday[5] = "Jum'at";
        weekday[6] = "Sabtu";
        var hari = weekday[date_now.getDay()];

        var tanggal = hari + ', ' + dd + ' ' + bulan + ' ' + yyyy;


        $("#current-location-patrol").text(localStorage.getItem("location_patrol"))
        $("#current-profile-patrol").text(localStorage.getItem("profile_patrol"))
        $("#current-date-patrol").text(tanggal)

        // var id_profile = localStorage.getItem("id_profile_patrol")
        // this.$request({
        //     url: url_api + "Lokasi",
        //     method: 'GET',
        //     data: { id_profile : id_profile},
        //     dataType: 'json',
        //     statusCode: {
        //         404: function (xhr) {
        //             alert('page not found');
        //         }
        //     },
        //     beforeSend: function (xhr) { },
        //     success: function (data) {
        //         var arr = [];
        //         for (var i = 0; i < data.length; i++) {
        //             var id_lokasi = data[i].id_lokasi;
        //             var nama_gedung = data[i].nama_gedung;
        //             arr.push(
        //                 '<li class="">' +
        //                 '<div class="item-content">' +
        //                 '<div class="item-inner">' +
        //                 '<div class="card-list card">' +
        //                 // '<span class="text-list" >Location :</span></br>' +
        //                 '<span class="text-list" style="color:#8dad9c">' + nama_gedung + '</span></br>' +
        //                 '</div>' +
        //                 '</div>' +
        //                 '</div>' +
        //                 '</li>'
        //             );

        //         }
        //         $('#patrol-location-list').html(arr.join(''));
        //     },
        //     error: function () { }
        // });
        window.scanQrBarcode = function (i, id) {
            var date_now = new Date();
            var dd = String(date_now.getDate()).padStart(2, '0');
            var mm = String(date_now.getMonth() + 1).padStart(2, '0');
            var yyyy = date_now.getFullYear();

            var hours = String(date_now.getHours()).padStart(2, '0');
            var minutes = String(date_now.getMinutes()).padStart(2, '0');
            var seconds = String(date_now.getSeconds()).padStart(2, '0');

            var month = new Array();
            month[0] = "Januari";
            month[1] = "Februari";
            month[2] = "Maret";
            month[3] = "April";
            month[4] = "Mei";
            month[5] = "Juni";
            month[6] = "Juli";
            month[7] = "Agustus";
            month[8] = "September";
            month[9] = "Oktober";
            month[10] = "November";
            month[11] = "Desember";
            var bulan = month[date_now.getMonth()];

            var weekday = new Array(7);
            weekday[0] = "Minggu";
            weekday[1] = "Senin";
            weekday[2] = "Selasa";
            weekday[3] = "Rabu";
            weekday[4] = "Kamis";
            weekday[5] = "Jum'at";
            weekday[6] = "Sabtu";
            var hari = weekday[date_now.getDay()];

            var tanggal = hari + ', ' + dd + ' ' + bulan + ' ' + yyyy;

            var pukul = hours + ':' + minutes + ':' + seconds + ' WIB';
            cordova.plugins.barcodeScanner.scan(
                function (result) {
                    var scan_result = result.text
                    if (result.cancelled == true) {

                    } else {
                        console.log("i = " + i)
                        console.log("nama gedung = " + id)
                        console.log("scan = " + scan_result)
                        var arr = [];
                        var html = ''
                        var seq = $(".list-scan-result-" + id + "").length
                        console.log("seq = " + seq)
                        arr.push(
                            html = '<li class="list-scan list-scan-result-' + id + '">' +
                            '<div class="item-content">' +
                            '<div class="item-inner">' +
                            '<div class="card-scan-list card ">' +
                            '<span class="text-list" id="scan-result-' + seq + '-' + id + '" >' + scan_result + '' +
                            ' <=> ' + pukul + '</span>' +
                            // '<span class="text-list" id="id-location-patrol-' + i + '" >' + id_lokasi + '</span>' +
                            '</div>' +
                            '</div>' +
                            '</div>' +
                            '</li>'
                        );

                        $("#" + i + "").append(html);
                    }


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
                    prompt: "Pindai Barcode di dalam kotak Frame", // Android
                    resultDisplayDuration: 500, // Android, display scanned text for X ms. 0 suppresses it entirely, default 1500
                    formats: "QR_CODE,PDF_417,CODE_39,CODE_128,CODE_93,UPC_A,UPC_E,EAN_8,EAN_13", // default: all but PDF_417 and RSS_EXPANDED
                    orientation: "potrait", // Android only (portrait|landscape), default unset so it rotates with the device
                    disableAnimations: true, // iOS
                    disableSuccessBeep: false // iOS and Android
                }
            );
        }

        var id_lokasi = localStorage.getItem("id_location_patrol")
        this.$request({
            url: url_api + "Sublokasi",
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
                // localStorage.setItem("chem_amount", data.length);
                var arr = [];
                for (var i = 0; i < data.length; i++) {
                    var id_profile = data[i].id_profile;
                    var wilayah = data[i].wilayah;
                    var id_lokasi = data[i].id_lokasi;
                    var nama_gedung = data[i].nama_gedung;
                    var id_sublokasi = data[i].id_sublokasi;
                    var lantai = data[i].lantai;
                    arr.push(
                        '<li class="list-location-current">' +
                        '<div class="item-content">' +
                        '<div class="item-inner">' +
                        '<div class="card-list card">' +
                        '<span class="text-list" style="display:none" id="id-profile-patrol-' + i + '" >' + id_profile + '</span>' +
                        '<span class="text-list" style="display:none" id="regional-patrol-' + i + '" >' + id_profile + '</span>' +
                        '<span class="text-list" style="display:none" id="id-location-patrol-' + i + '" >' + id_lokasi + '</span>' +
                        '<span class="text-list" style="display:none" id="location-patrol-' + i + '" >' + id_lokasi + '</span>' +
                        '<span class="text-list" style="display:none" id="id-sublocation-patrol-' + i + '" >' + id_sublokasi + '</span>' +
                        '<div class="row">' +
                        '<div class=" col text-list" style="color:#8dad9c" id="sublocation-patrol-' + i + '" class="margin-right">' + lantai + '</div>' +
                        '<div class="col"><button style=" background-color: #fb6f6f" class=" button button-fill" onclick="scanQrBarcode(\'scan-list-' + i + '\', \'' + id_sublokasi + '\')"><i class="icon f7-icons">barcode_viewfinder</i>Scan</button></div></br>' +
                        '</div>' +
                        '<div class="list" id="scan-list-' + i + '"></div>' +
                        '</div>' +
                        '</div>' +
                        '</div>' +
                        '</li>'
                    );

                }
                $('#patrol-sublocation-list').html(arr.join(''));
                $('#skeleton').hide();
            },
            error: function () { }
        });
    }

    shareTo() {
        var location = []
        var location_length = $(".list-location-current").length - 1
        var i, j

        var title_lantai = "```Daftar Lantai :``` \n";
        var title_scan = "```Daftar Urutan Scan Barcode :``` \n";
        var lantai = ''
        var scan = ''
        var footer = '\n\n```Salam Birawa!```'

        for (i = 0; i <= location_length; i++) {
            location.push($("#id-sublocation-patrol-" + i + "").text())

            var scan_length = $(".list-scan-result-" + location[i] + "").length - 1

            for (j = 0; j <= scan_length; j++) {
                scan += "✅ *" + $("#scan-result-" + j + "-" + location[i] + "").text() + "*  _(titik ke-" + (j + 1) + ")_ \n"
            }
            scan_length = $(".list-scan-result-" + location[i] + "").length
            lantai += "▫️" + " *" + $("#sublocation-patrol-" + i + "").text() + "* <=> _" + scan_length + " titik_ \n"

        }

        var list_scan_amount = "~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~\n" +
            "🔖 *Total* = _" + $(".list-scan").length + " titik_ \n" +
            "~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~"



        var info = "📑 ```LAPORAN SCAN BARCODE RUANGAN``` \n~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~\n🗓️ ```Tanggal : " + $("#current-date-patrol").text() + "``` \n📍 ```FM : " + $("#current-profile-patrol").text() + "``` \n" + "🏢 ```Gedung : " + $("#current-location-patrol").text() + "``` \n~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~\n"

        // console.log(scan_length)
        // console.log(lantai)
        // console.log(scan)

        // console.log(list_result_all)
        window.plugins.socialsharing.shareViaWhatsApp(
            info + title_lantai + lantai + list_scan_amount + "\n" + title_scan + scan + footer,
            null /* img */,
            null /* url */,
            function () {
                console.log('share ok')
            },
            function (errormsg) {
                alert(errormsg)
            })
    }
}