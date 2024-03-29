"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_pages_transaction_TableHeader_js"],{

/***/ "./resources/js/pages/transaction/TableHeader.js":
/*!*******************************************************!*\
  !*** ./resources/js/pages/transaction/TableHeader.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "IndexTable": () => (/* binding */ IndexTable),
/* harmony export */   "TransactionBasketTable": () => (/* binding */ TransactionBasketTable),
/* harmony export */   "TransactionReportTable": () => (/* binding */ TransactionReportTable)
/* harmony export */ });
var IndexTable = [{
  field: 'transactionNumber',
  header: 'Id Transaksi'
}, {
  field: 'customer',
  header: 'Id Customer'
}, {
  field: 'price',
  header: 'Total Harga'
}, {
  field: 'transactionStatusName',
  header: 'Status'
}, {
  field: 'outlet',
  header: 'Outlet'
}];
var TransactionBasketTable = [{
  field: 'item',
  header: 'Jenis Item'
}, {
  field: 'unit',
  header: 'Satuan'
}, {
  field: 'price',
  header: 'Harga'
}, {
  field: 'quantity',
  header: 'Kuantitas'
}, {
  field: 'discount',
  header: 'Diskon'
}, {
  field: 'totalPrice',
  header: 'Total Harga'
}];
var TransactionReportTable = [{
  field: 'createdAt',
  header: 'Tanggal'
}, {
  field: 'totalTransaction',
  header: 'Jumlah Transaksi'
}, {
  field: 'totalPrice',
  header: 'Total Nilai'
}];

/***/ })

}]);