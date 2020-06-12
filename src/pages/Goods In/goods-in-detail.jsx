import React from 'react';
import {
    f7, Card, $f7, $f7ready, Page,
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
import Framework7 from 'framework7';

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

export default class extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isBottom: true,
        };
        this.myRef = React.createRef()
        this.navbarHandler = this.navbarHandler.bind(this);
    }
    render() {
        return (
            <Page pageContent={false} className="package-bg" style={{ backgroundColor: 'whitesmoke' }} name="goods-in-detail" onPageInit={this.onPageInit.bind(this)}>
                <div className="navbar" style={{ zIndex: "1" }}>
                    <div id="navbar-bg-detail" className="navbar-bg navbar-custom inventory-logo-left" style={{ height: '185px', borderRadius: " 0 0 0px 0px" }}>
                        <div className="center">
                            <div className="title-page">DETAIL STOCK IN</div>
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
                    <div className="goods-in-icon" style={{ textAlignLast: "center", height: "60px" }}>
                        {/* <i className="icon f7-icons icon-menu icon-title" style={{ textShadow: "rgba(0, 0, 0, 0.17) 0px 2px 0px", color: "rgb(175, 212, 186)" }}>cart_fill_badge_plus</i> */}
                    </div>
                    <div className="data-table data-table-init card-menu" style={{ margin: "15px 5px 20px" }}>
                        <div className="card-header">
                            <div className="data-table-links">
                                {/* <a className="link">Apply</a> */}
                                {/* <a className="link">Print</a> */}
                            </div>
                            <div className="data-table-actions">
                                <a className="link icon-only">
                                    <i className="icon f7-icons if-not-md">sort</i>
                                    <i className="icon material-icons md-only">sort</i>
                                </a>
                                <a className="link icon-only">
                                    <i className="icon f7-icons if-not-md">more_vertical_round</i>
                                    <i className="icon material-icons md-only">more_vert</i>
                                </a>
                            </div>
                        </div>
                        <div className="card-content">
                            <table>
                                <thead>
                                    <tr>
                                        <th className="checkbox-cell">
                                            <label className="checkbox">
                                                <input type="checkbox" />
                                                <i className="icon-checkbox"></i>
                                            </label>
                                        </th>
                                        <th className="label-cell">ID Barang</th>
                                        <th className="numeric-cell">Name)</th>
                                        <th className="numeric-cell">Goods Cat.</th>
                                        <th className="numeric-cell">In (Qty)</th>
                                        <th className="label-cell">Unity</th>
                                        <th></th>
                                    </tr>
                                </thead>
                                <tbody id="list-goods-apply">
                                    <tr id="skeleton" className="skeleton-text skeleton-effect-fade">
                                        <td className="checkbox-cell">
                                            <label className="checkbox">
                                                <input type="checkbox" />
                                                <i className="icon-checkbox"></i>
                                            </label>
                                        </td>
                                        <td className="label-cell">nama_barang </td>
                                        <td className="label-cell">nama_barang </td>
                                        <td className="label-cell">nama_barang </td>
                                        <td className="numeric-cell">keb_per_bulan </td>
                                        <td className="label-cell">satuan </td>
                                        <td className="actions-cell">
                                            <a className="link icon-only">
                                                <i className="icon f7-icons if-not-md">compose</i>
                                                <i className="icon material-icons md-only">edit</i>
                                            </a>
                                            <a className="link icon-only">
                                                <i className="icon f7-icons if-not-md">trash</i>
                                                <i className="icon material-icons md-only">delete</i>
                                            </a>
                                        </td>
                                    </tr>
                                    <tr id="skeleton" className="skeleton-text skeleton-effect-fade">
                                        <td className="checkbox-cell">
                                            <label className="checkbox">
                                                <input type="checkbox" />
                                                <i className="icon-checkbox"></i>
                                            </label>
                                        </td>
                                        <td className="label-cell">nama_barang </td>
                                        <td className="label-cell">nama_barang </td>
                                        <td className="label-cell">nama_barang </td>
                                        <td className="numeric-cell">keb_per_bulan </td>
                                        <td className="label-cell">satuan </td>
                                        <td className="actions-cell">
                                            <a className="link icon-only">
                                                <i className="icon f7-icons if-not-md">compose</i>
                                                <i className="icon material-icons md-only">edit</i>
                                            </a>
                                            <a className="link icon-only">
                                                <i className="icon f7-icons if-not-md">trash</i>
                                                <i className="icon material-icons md-only">delete</i>
                                            </a>
                                        </td>
                                    </tr>
                                    <tr id="skeleton" className="skeleton-text skeleton-effect-fade">
                                        <td className="checkbox-cell">
                                            <label className="checkbox">
                                                <input type="checkbox" />
                                                <i className="icon-checkbox"></i>
                                            </label>
                                        </td>
                                        <td className="label-cell">nama_barang </td>
                                        <td className="label-cell">nama_barang </td>
                                        <td className="label-cell">nama_barang </td>
                                        <td className="numeric-cell">keb_per_bulan </td>
                                        <td className="label-cell">satuan </td>
                                        <td className="actions-cell">
                                            <a className="link icon-only">
                                                <i className="icon f7-icons if-not-md">compose</i>
                                                <i className="icon material-icons md-only">edit</i>
                                            </a>
                                            <a className="link icon-only">
                                                <i className="icon f7-icons if-not-md">trash</i>
                                                <i className="icon material-icons md-only">delete</i>
                                            </a>
                                        </td>
                                    </tr>
                                    <tr id="skeleton" className="skeleton-text skeleton-effect-fade">
                                        <td className="checkbox-cell">
                                            <label className="checkbox">
                                                <input type="checkbox" />
                                                <i className="icon-checkbox"></i>
                                            </label>
                                        </td>
                                        <td className="label-cell">nama_barang </td>
                                        <td className="label-cell">nama_barang </td>
                                        <td className="label-cell">nama_barang </td>
                                        <td className="numeric-cell">keb_per_bulan </td>
                                        <td className="label-cell">satuan </td>
                                        <td className="actions-cell">
                                            <a className="link icon-only">
                                                <i className="icon f7-icons if-not-md">compose</i>
                                                <i className="icon material-icons md-only">edit</i>
                                            </a>
                                            <a className="link icon-only">
                                                <i className="icon f7-icons if-not-md">trash</i>
                                                <i className="icon material-icons md-only">delete</i>
                                            </a>
                                        </td>
                                    </tr>
                                    <tr id="skeleton" className="skeleton-text skeleton-effect-fade">
                                        <td className="checkbox-cell">
                                            <label className="checkbox">
                                                <input type="checkbox" />
                                                <i className="icon-checkbox"></i>
                                            </label>
                                        </td>
                                        <td className="label-cell">nama_barang </td>
                                        <td className="label-cell">nama_barang </td>
                                        <td className="label-cell">nama_barang </td>
                                        <td className="numeric-cell">keb_per_bulan </td>
                                        <td className="label-cell">satuan </td>
                                        <td className="actions-cell">
                                            <a className="link icon-only">
                                                <i className="icon f7-icons if-not-md">compose</i>
                                                <i className="icon material-icons md-only">edit</i>
                                            </a>
                                            <a className="link icon-only">
                                                <i className="icon f7-icons if-not-md">trash</i>
                                                <i className="icon material-icons md-only">delete</i>
                                            </a>
                                        </td>
                                    </tr>

                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>


            </Page>
        )
    }
    onPageInit() {
        var url_api = 'https://api.jumantya.my.id/index.php/api/';
        var device_info = osName + ' ' + osVersion + ' ' + mobileVendor + ' ' + mobileModel + ' ' + engineName + ' ' + engineVersion;

        this.$request({
            url: url_api + "Temporary",
            method: 'GET',
            data: { device_info: device_info },
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
                    var jenis_barang = data[i].jenis_barang;
                    var jumlah_masuk = data[i].jumlah_ambil;
                    var satuan = data[i].satuan;

                    arr.push(
                        '<tr>' +
                        '<td class="checkbox-cell">' +
                        '<label class="checkbox">' +
                        '<input type="checkbox" />' +
                        '<i class="icon-checkbox"></i>' +
                        '</label>' +
                        '</td>' +
                        '<td class="label-cell" id="id-barang' + i + '">' + id_barang + '</td>' +
                        '<td class="label-cell">' + nama_barang + '</td>' +
                        '<td class="label-cell">' + jenis_barang + '</td>' +
                        '<td class="numeric-cell" style="color:#8dad9c">' + jumlah_masuk + '</td>' +
                        '<td class="label-cell">' + satuan + '</td>' +
                        '<td class="actions-cell">' +
                        '<a class="link icon-only" onclick="createPopup_editStockIn($(\'#id-barang' + i + '\').text())">' +
                        '<i class="icon f7-icons if-not-md">compose</i>' +
                        '<i class="icon material-icons md-only">edit</i>' +
                        '</a>' +
                        '<a class="link icon-only">' +
                        '<i class="icon f7-icons if-not-md">trash</i>' +
                        '<i class="icon material-icons md-only">delete</i>' +
                        '</a>' +
                        '</td>' +
                        '</tr>'
                    );

                }
                $('#list-goods-apply').html(arr.join(''));
            },
            error: function () { }
        });


        // window.deleteRow = function (id_barang, nama_barang) {
        //     f7.dialog.confirm('Remove ' + nama_barang + ' from apply calculation?', function () {
        //         Framework7.request({
        //             url: url_api + "Detail_Pengajuan",
        //             method: 'GET',
        //             data: {},
        //             dataType: 'json',
        //             statusCode: {
        //                 404: function (xhr) {
        //                     alert('page not found');
        //                 }
        //             },
        //             beforeSend: function (xhr) { },
        //             success: function (data) {
        //                 f7.view.current.router.refreshPage()

        //             },
        //             error: function () { }
        //         });
        //     });

        // }

        window.createPopup_editStockIn = function (id_barang) {
            console.log("id barang: " + id_barang)
            var device_info = osName + ' ' + osVersion + ' ' + mobileVendor + ' ' + mobileModel + ' ' + engineName + ' ' + engineVersion;
            Framework7.request({
                url: url_api + "Temporary",
                method: 'GET',
                data: { id_barang: id_barang, device_info: device_info },
                dataType: 'json',
                statusCode: {
                    404: function (xhr) {
                        alert('page not found');
                    }
                },
                beforeSend: function (xhr) { },
                success: function (data) {
                    var id_barang = data[0].id_barang;
                    var nama_barang = data[0].nama_barang;
                    var jenis_barang = data[0].jenis_barang;
                    var jumlah_masuk = data[0].jumlah_ambil;
                    var satuan = data[0].satuan;

                    $("#id-barang").val(id_barang)
                    $("#nama-barang").val(nama_barang)
                    $("#jenis-barang").val(jenis_barang)
                    $("#jumlah-masuk").val(jumlah_masuk)
                    $("#satuan").val(satuan)

                },
                error: function () { }
            });

            self.popup_edit_stock_in.open();
        }



        window.updateStockIn = function () {
            var id_barang = $("#id-barang").val()
            var nama_barang = $("#nama-barang").val()
            var jenis_barang = $("#jenis-barang").val()
            var jumlah_masuk = $("#jumlah-masuk").val()
            var satuan = $("#satuan").val()
            Framework7.request({
                url: url_api + "Temporary",
                method: 'PUT',
                data: {
                    id_barang: id_barang, nama_barang: nama_barang,
                    jenis_barang: jenis_barang, jumlah_ambil: jumlah_masuk,
                    satuan: satuan, device_info: device_info
                },
                dataType: 'json',
                statusCode: {
                    404: function (xhr) {
                        alert('page not found');
                    }
                },
                beforeSend: function (xhr) {
                    $('#skeleton').show();
                    self.popup_edit_stock_in.close();
                },
                success: function (data) {
                    f7.view.current.router.refreshPage()
                    $('#skeleton').hide();
                },
                error: function () { }
            });
        }

        const self = this;
        if (!self.popup_edit_stock_in) {
            self.popup_edit_stock_in = self.$f7.popup.create({
                content: `
                <div class="popup">
                <div class="page">
                    <div class="navbar" style="height: calc(var(--f7-navbar-height) + var(--f7-safe-area-top));">
                        <div class="navbar-bg navbar-custom inventory-logo-left" style="height: 65px;">
                            <div class="center">
                                <div class="title-page">EDIT STOCK IN</div>
                            </div>
                        </div>
                        <div className="navbar-inner sliding">
                            <div className="right">
                                <a href="#" style="left:85%; color:white;" class="link popup-close"><i class="icon f7-icons">multiply_circle_fill</i></a>
                            </div>
                        </div>
                    </div>
                    <div class="fab fab-extended fab-right-bottom">
                        <a href="#" class="link " onclick="updateStockIn()">
                            <i class="icon f7-icons">checkmark_alt_circle_fill</i>
                            <div class="fab-text">Done</div>
                        </a>
                    </div>
                    <div class="page-content">
                        <div class="block">
                            <div class="card card-list" style="padding:0px">
                                <div class="card card-in-form">
                                    <div class="list no-hairlines-md">
                                        <ul>
                                            <li class="margin-input" style="display:none">
                                                <div class="item-input">
                                                    <div class="item-input-wrap">
                                                        <input type="text" placeholder="ID Barang" id="id-barang" class="input-popup"></input>
                                                    </div>
                                                </div>
                                            </li>
                                            <li class="margin-input" style="display:none">
                                                <div class="item-input">
                                                    <div class="item-input-wrap">
                                                        <input type="text" placeholder="Jenis Barang" id="jenis-barang" class="input-popup"></input>
                                                    </div>
                                                </div>
                                            </li>

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

                                            <div class="row">
                                                <div class="col">
                                                    <li class="margin-input">
                                                        <div class="item-content item-input icon-top">
                                                            <div class="item-media">
                                                                <i class="icon-smooth icon f7-icons" style="border-radius: 6px; border: none; opacity: 0.8">tray_arrow_down_fill</i>
                                                            </div>
                                                            <div id="label-apply-qty" class="label-list">Jumlah Masuk</div>
                                                        </div>
                                                    </li>
                                                    <li class="margin-input">
                                                        <div class="item-input">
                                                            <div class="item-input-wrap">
                                                                <input type="number" placeholder="Jumlah Masuk" id="jumlah-masuk" class="input-popup"></input>
                                                            </div>
                                                        </div>
                                                    </li>
                                                </div>
                                                <div class="col">
                                                    <li class="margin-input">
                                                        <div class="item-content item-input icon-top">
                                                            <div class="item-media">
                                                                <i class="icon-smooth icon f7-icons" style="border-radius: 6px; border: none; opacity: 0.8">tray_arrow_down_fill</i>
                                                            </div>
                                                            <div id="label-satuan" class="label-list">Satuan</div>
                                                        </div>
                                                    </li>
                                                    <li class="margin-input margin-bottom">
                                                        <div class="item-input">
                                                            <div class="item-input-wrap">
                                                                <input type="text" placeholder="Satuan" id="satuan" class="input-popup" readonly></input>
                                                            </div>
                                                        </div>
                                                    </li>
                                                </div>
                                            </div>

                                        </ul>
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

    navbarHandler() {
        const scrollY = window.scrollY
        const scrollTop = this.myRef.current.scrollTop

        if (scrollTop > 20) {
            $("#navbar-bg-detail").css({ 'transform': 'translateY(-65%)', 'border-radius': '0 0 35px 35px' }).removeClass('navbar-slide-down').addClass('navbar-slide-up')
            $(".title-page").css('margin-top', '140px')
            $(".left").fadeIn(500)
            $(".navbar").css('z-index', '200')
        } else {
            $("#navbar-bg-detail").css({ 'transform': 'translateY(0%)', 'border-radius': '0 0 0px 0px' }).removeClass('navbar-slide-up').addClass('navbar-slide-down')
            $(".title-page").css('margin-top', '20px')
            $(".left").fadeOut(500)
            $(".navbar").css('z-index', '1')
        }
    }

}