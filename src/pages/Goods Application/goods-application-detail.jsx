import React from 'react';
import { f7, Card, $f7, $f7ready } from 'framework7-react';


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
            <Page pageContent={false} className="package-bg" style={{ backgroundColor: 'whitesmoke' }} name="goods-application-detail" onPageInit={this.onPageInit.bind(this)}>
                <div className="navbar">
                    <div className="navbar-bg navbar-custom inventory-logo-left" style={{ height: '65px' }}>
                        <div className="center">
                            <div className="title-page">Detail Pengajuan</div>
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

                {/* <FabBackdrop slot="fixed" />

                <Fab position="right-bottom" slot="fixed" style={{ marginBottom: "55px", textAlignLast: "center" }}>
                    <Icon ios="f7:plus" aurora="f7:plus" md="material:add"></Icon>
                    <Icon ios="f7:xmark" aurora="f7:xmark" md="material:close"></Icon>
                    <FabButtons position="top">
                        <FabButton onClick={() => this.$f7router.navigate('/add-sublocation-page/')} label="Add New Sub Location">+</FabButton>
                        <FabButton onClick={() => this.$f7router.navigate('/add-location-page/')} label="Add New Location">+</FabButton>
                        <FabButton onClick={() => this.$f7router.navigate('/add-regional-page/')} label="Add New Regional">+</FabButton>
                    </FabButtons>
                </Fab> */}


                <Toolbar tabbar labels scrollable position={this.state.isBottom ? 'bottom' : 'top'}>
                    <Link tabLink="#tab-det-application-list" tabLinkActive text="Application Detail" iconIos="f7:arrowshape_turn_up_right_circle_fill" iconAurora="f7:arrowshape_turn_up_right_circle_fill" iconMd="f7:arrowshape_turn_up_right_circle_fill"></Link>
                    {/* <Link tabLink="#tab-location-list" text="Location List" iconIos="f7:hammer" iconAurora="f7:building_2_fill" iconMd="f7:building_2_fill"></Link>
                    <Link tabLink="#tab-sublocation-list" text="Sub Location List" iconIos="f7:drop" iconAurora="f7:building_2_fill" iconMd="f7:building_2_fill"></Link> */}

                </Toolbar>

                <Tabs >
                    <Tab id="tab-det-application-list" className="page-content" tabActive>
                        <div className="data-table data-table-init card-menu" style={{ margin: "15px 5px 20px" }}>
                            <div id="nama-supplier" style={{ fontSize: "larger" }}></div><br />
                            <div className="card-header">
                                <div className="data-table-links">
                                    <a className="link">Apply</a>
                                    <a className="link">Print</a>
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
                                            <th className="label-cell">Name</th>
                                            <th className="numeric-cell">Month(qty)</th>
                                            <th className="numeric-cell">Stock</th>
                                            <th className="numeric-cell">Apply</th>
                                            <th className="label-cell">Unity</th>
                                            <th className="numeric-cell">Price (Rp.)</th>
                                            <th className="numeric-cell">Subtotal (Rp.)</th>
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
                                            <td className="numeric-cell">keb_per_bulan </td>
                                            <td className="numeric-cell"> stok </td>
                                            <td className="numeric-cell" > Qty </td>
                                            <td className="label-cell">satuan </td>
                                            <td className="numeric-cell"> harga </td>
                                            <td className="numeric-cell"> Subtotal </td>
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
                                            <td className="numeric-cell">keb_per_bulan </td>
                                            <td className="numeric-cell"> stok </td>
                                            <td className="numeric-cell" > Qty </td>
                                            <td className="label-cell">satuan </td>
                                            <td className="numeric-cell"> harga </td>
                                            <td className="numeric-cell"> Subtotal </td>
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
                                            <td className="numeric-cell">keb_per_bulan </td>
                                            <td className="numeric-cell"> stok </td>
                                            <td className="numeric-cell" > Qty </td>
                                            <td className="label-cell">satuan </td>
                                            <td className="numeric-cell"> harga </td>
                                            <td className="numeric-cell"> Subtotal </td>
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
                                            <td className="numeric-cell">keb_per_bulan </td>
                                            <td className="numeric-cell"> stok </td>
                                            <td className="numeric-cell" > Qty </td>
                                            <td className="label-cell">satuan </td>
                                            <td className="numeric-cell"> harga </td>
                                            <td className="numeric-cell"> Subtotal </td>
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
                                            <td className="numeric-cell">keb_per_bulan </td>
                                            <td className="numeric-cell"> stok </td>
                                            <td className="numeric-cell" > Qty </td>
                                            <td className="label-cell">satuan </td>
                                            <td className="numeric-cell"> harga </td>
                                            <td className="numeric-cell"> Subtotal </td>
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
                                            <td className="numeric-cell">keb_per_bulan </td>
                                            <td className="numeric-cell"> stok </td>
                                            <td className="numeric-cell" > Qty </td>
                                            <td className="label-cell">satuan </td>
                                            <td className="numeric-cell"> harga </td>
                                            <td className="numeric-cell"> Subtotal </td>
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
                                            <td className="numeric-cell">keb_per_bulan </td>
                                            <td className="numeric-cell"> stok </td>
                                            <td className="numeric-cell" > Qty </td>
                                            <td className="label-cell">satuan </td>
                                            <td className="numeric-cell"> harga </td>
                                            <td className="numeric-cell"> Subtotal </td>
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

        var id_supplier = localStorage.getItem("id_supplier_apply")
        var no_po = localStorage.getItem("no_po")
        var nama_supplier = localStorage.getItem("nama_supplier")
        if (id_supplier !== "") {
            this.$request({
                url: url_api + "Detail_Pengajuan",
                method: 'GET',
                data: { id_supplier: id_supplier },
                dataType: 'json',
                statusCode: {
                    404: function (xhr) {
                        alert('page not found');
                    }
                },
                beforeSend: function (xhr) { $('#skeleton').show(); },
                success: function (data) {
                    var arr = [];
                    var supplier = data[0].Supplier;
                    $("#nama-supplier").text(supplier)

                    for (var i = 0; i < data.length; i++) {
                        var id_barang = data[i].id_barang;
                        var nama_barang = data[i].nama_barang;
                        var jenis_barang = data[i].jenis_barang;
                        var Masuk = data[i].Masuk;
                        var Keluar = data[i].Keluar;
                        var stok = data[i].stok;
                        var keb_per_bulan = data[i].keb_per_bulan;
                        var Qty = data[i].Qty;
                        var satuan = data[i].satuan;
                        var masa_pakai = data[i].masa_pakai;
                        var harga = data[i].harga;
                        var Subtotal = data[i].Subtotal;
                        arr.push(
                            '<tr>' +
                            '<td class="checkbox-cell">' +
                            '<label class="checkbox">' +
                            '<input type="checkbox" />' +
                            '<i class="icon-checkbox"></i>' +
                            '</label>' +
                            '</td>' +
                            '<td class="label-cell">' + nama_barang + '</td>' +
                            '<td class="numeric-cell">' + keb_per_bulan + '</td>' +
                            '<td class="numeric-cell">' + stok + '</td>' +
                            '<td class="numeric-cell" style="color:#8dad9c">' + Qty + '</td>' +
                            '<td class="label-cell">' + satuan + '</td>' +
                            '<td class="numeric-cell">' + harga + '</td>' +
                            '<td class="numeric-cell">' + Subtotal + '</td>' +
                            '<td class="actions-cell">' +
                            '<a class="link icon-only">' +
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
        } else if (no_po !== "" && nama_supplier !== "") {
            this.$request({
                url: url_api + "Detail_Pengajuan",
                method: 'GET',
                data: { no_po: no_po, nama_mitra: nama_supplier },
                dataType: 'json',
                statusCode: {
                    404: function (xhr) {
                        alert('page not found');
                    }
                },
                beforeSend: function (xhr) { $('#skeleton').show(); },
                success: function (data) {
                    var arr = [];
                    var supplier = data[0].nama_mitra;
                    var total = 0;
                    var subtotal_trigger = 0;
                    $("#nama-supplier").text(supplier)

                    $("#item-amount" + supplier.replace(/ /g, "_").replace(".", "") + "").text(data.length + " items");


                    for (var i = 0; i < data.length; i++) {
                        var id_barang = data[i].id_barang;
                        var nama_barang = data[i].nama_barang;
                        var jenis_barang = data[i].jenis_barang;
                        var Masuk = data[i].masuk;
                        var Keluar = data[i].keluar;
                        var stok = data[i].stok_akhir;
                        var keb_per_bulan = data[i].keb_perbulan;
                        var Qty = data[i].order_qty;
                        var satuan = data[i].satuan;
                        var masa_pakai = data[i].masa_pakai;
                        var harga = data[i].harga;
                        var Subtotal = data[i].subtotal;
                        subtotal_trigger = parseInt(data[i].subtotal)
                        total += subtotal_trigger

                        arr.push(
                            '<tr>' +
                            '<td class="checkbox-cell">' +
                            '<label class="checkbox">' +
                            '<input type="checkbox" />' +
                            '<i class="icon-checkbox"></i>' +
                            '</label>' +
                            '</td>' +
                            '<td class="label-cell" id="nama-barang' + i + '">' + nama_barang + '</td>' +
                            '<td class="label-cell" id="id-barang' + i + '" style="display:none">' + id_barang + '</td>' +
                            '<td class="numeric-cell">' + keb_per_bulan + '</td>' +
                            '<td class="numeric-cell">' + stok + '</td>' +
                            '<td class="numeric-cell" style="color:#8dad9c">' + Qty + '</td>' +
                            '<td class="label-cell">' + satuan + '</td>' +
                            '<td class="numeric-cell">' + harga + '</td>' +
                            '<td class="numeric-cell">' + Subtotal + '</td>' +
                            '<td class="actions-cell">' +
                            '<a class="link icon-only" onclick="createPopup_EditPO($(\'#id-barang' + i + '\').text())">' +
                            '<i class="icon f7-icons if-not-md">compose</i>' +
                            '<i class="icon material-icons md-only">edit</i>' +
                            '</a>' +
                            '<a class="link icon-only" onclick="deleteRow($(\'#id-barang' + i + '\').text(),$(\'#nama-barang' + i + '\').text())">' +
                            '<i class="icon f7-icons if-not-md">trash</i>' +
                            '<i class="icon material-icons md-only">delete</i>' +
                            '</a>' +
                            '</td>' +
                            '</tr>'
                        );

                    }
                    $('#list-goods-apply').html(arr.join(''));
                    $("#subtotal" + supplier.replace(/ /g, "_").replace(".", "") + "").text(formatMoney(total))
                    localStorage.setItem("subtotal_" + supplier.replace(/ /g, "_").replace(".", "") + "", total)

                },
                error: function () { }
            });
        }

        window.formatMoney = function (number) {
            return number.toLocaleString('id-ID', { style: 'currency', currency: 'IDR' });
        }

        window.deleteRow = function (id_barang, nama_barang) {
            f7.dialog.confirm('Remove ' + nama_barang + ' from apply calculation?', function () {
                Framework7.request({
                    url: url_api + "Detail_Pengajuan",
                    method: 'GET',
                    data: { no_po: no_po, id_barang: id_barang, action: 'delete' },
                    dataType: 'json',
                    statusCode: {
                        404: function (xhr) {
                            alert('page not found');
                        }
                    },
                    beforeSend: function (xhr) { },
                    success: function (data) {
                        // swal(nama_barang + " deleted!")
                        f7.view.current.router.refreshPage()

                        f7.view.main.router.back('/goods-application-view-page/', { force: true });


                        // f7.view.current.router.back(f7.view.main.router.previousRoute.url, { ignoreCache: false, reload: true, force: false })
                    },
                    error: function () { }
                });
            });

        }

        window.createPopup_EditPO = function (id_barang) {
            console.log("id barang: " + id_barang)
            Framework7.request({
                url: url_api + "Detail_Pengajuan",
                method: 'GET',
                data: { no_po: no_po, id_barang: id_barang },
                dataType: 'json',
                statusCode: {
                    404: function (xhr) {
                        alert('page not found');
                    }
                },
                beforeSend: function (xhr) { $('#skeleton').show(); },
                success: function (data) {
                    var id_barang = data[0].id_barang;
                    var nama_barang = data[0].nama_barang;
                    var jenis_barang = data[0].jenis_barang;
                    var Masuk = data[0].masuk;
                    var Keluar = data[0].keluar;
                    var stok = data[0].stok_akhir;
                    var keb_per_bulan = data[0].keb_perbulan;
                    var Qty = data[0].order_qty;
                    var satuan = data[0].satuan;
                    var masa_pakai = data[0].masa_pakai;
                    var harga = data[0].harga;
                    var Subtotal = data[0].subtotal;

                    $("#id-barang").val(id_barang)
                    $("#jenis-barang").val(jenis_barang)
                    $("#keluar").val(Keluar)
                    $("#masuk").val(Masuk)
                    $("#nama-barang").val(nama_barang)
                    $("#keb-per-bulan").val(keb_per_bulan)
                    $("#masa-pakai").val(masa_pakai)
                    $("#stock").val(stok)
                    $("#apply-qty").val(Qty)
                    $("#satuan").val(satuan)
                    $("#harga").val(harga)
                    $("#subtotal").val(Subtotal)

                },
                error: function () { }
            });

            self.popup_edit_det_po.open();
        }

        window.recalculateSubtotal = function (apply_qty, price) {
            var subtotal = apply_qty * price
            $("#subtotal").val(subtotal)
        }

        window.updateApplyDetail = function () {
            var id_barang = $("#id-barang").val()
            var nama_barang = $("#nama-barang").val()
            var jenis_barang = $("#jenis-barang").val()
            var keb_perbulan = $("#keb-per-bulan").val()
            var masuk = $("#masuk").val()
            var keluar = $("#keluar").val()
            var stok_akhir = $("#stock").val()
            var masa_pakai = $("#masa-pakai").val()
            var order_qty = $("#apply-qty").val()
            var satuan = $("#satuan").val()
            var harga = $("#harga").val()
            var subtotal = $("#subtotal").val()
            var bulan = localStorage.getItem("bulan_po")

            Framework7.request({
                url: url_api + "Detail_Pengajuan",
                method: 'PUT',
                data: {
                    no_po: no_po, nama_mitra: nama_supplier,
                    id_barang: id_barang, nama_barang: nama_barang,
                    jenis_barang: jenis_barang, keb_perbulan: keb_perbulan,
                    masuk: masuk, keluar: keluar, stok_akhir: stok_akhir,
                    masa_pakai: masa_pakai, order_qty: order_qty, satuan: satuan,
                    harga: harga, subtotal: subtotal, bulan: bulan
                },
                dataType: 'json',
                statusCode: {
                    404: function (xhr) {
                        alert('page not found');
                    }
                },
                beforeSend: function (xhr) {
                    $('#skeleton').show();
                    self.popup_edit_det_po.close();
                },
                success: function (data) {
                    f7.view.current.router.refreshPage()
                    f7.view.main.router.back('/goods-application-view-page/', { force: true });
                    $('#skeleton').hide();
                },
                error: function () { }
            });
        }

        const self = this;
        if (!self.popup_edit_det_po) {
            self.popup_edit_det_po = self.$f7.popup.create({
                content: `
                  <div class="popup">
                    <div class="page">
                    <div class="navbar" style="height: calc(var(--f7-navbar-height) + var(--f7-safe-area-top));">
                        <div class="navbar-bg navbar-custom inventory-logo-left" style="height: 65px;">
                            <div class="center">
                                <div class="title-page">EDIT APPLY</div>
                            </div>
                        </div>
                        <div className="navbar-inner sliding">
                            <div className="right">
                                <a href="#" style="left:85%; color:white;" class="link popup-close"><i class="icon f7-icons">multiply_circle_fill</i></a>
                            </div>
                        </div>
                    </div>
                    <div class="fab fab-extended fab-right-bottom">
                        <a href="#" class="link " onclick="updateApplyDetail()">
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
                            <li class="margin-input" style="display:none">
                                <div class="item-input">
                                    <div class="item-input-wrap">
                                        <input type="text" placeholder="Keluar" id="keluar" class="input-popup"></input>
                                    </div>
                                </div>
                            </li>
                            <li class="margin-input" style="display:none">
                                <div class="item-input">
                                    <div class="item-input-wrap">
                                        <input type="text" placeholder="Masuk" id="masuk" class="input-popup"></input>
                                    </div>
                                </div>
                            </li>
                            <li class="margin-input" style="display:none">
                                <div class="item-input">
                                    <div class="item-input-wrap">
                                        <input type="text" placeholder="Masa Pakai" id="masa-pakai" class="input-popup"></input>
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
                                    <div id="label-stock" class="label-list">Stock</div>
                                </div>
                            </li>
                            <li class="margin-input">
                                <div class=" item-input">
                                    <div class="item-input-wrap">
                                        <input type="number" placeholder="Current Stock " id="stock" class="input-popup input-disable" readonly></input>
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
                                    <div id="label-apply-qty" class="label-list">Apply Qty</div>
                                </div>
                            </li>
                            <li class="margin-input">
                                <div class="item-input">
                                    <div class="item-input-wrap">
                                        <input type="number" placeholder="Apply Qty" onkeyup="recalculateSubtotal(this.value, $(\'#harga\').val())" id="apply-qty" class="input-popup"></input>
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
                            <li class="margin-input">
                                <div class="item-input">
                                    <div class="item-input-wrap">
                                        <input type="number" placeholder="Harga (Rp.)" id="harga" class="input-popup input-disable" readonly></input>
                                    </div>
                                </div>
                            </li>
                            <div class="field-separator"></div>
                            <li class="margin-input">
                                <div class="item-content item-input icon-top">
                                    <div class="item-media">
                                        <i class="icon-smooth icon f7-icons" style="border-radius: 6px; border: none; opacity: 0.8">money_dollar_circle_fill</i>
                                    </div>
                                    <div id="label-subtotal" class="label-list">Subtotal (Rp.)</div>
                                </div>
                            </li>
                            <li class="margin-input margin-bottom">
                                <div class="item-input">
                                    <div class="item-input-wrap">
                                        <input type="number" placeholder="Subtotal (Rp.)" id="subtotal" class="input-popup " readonly></input>
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