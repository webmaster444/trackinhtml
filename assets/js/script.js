$(document).ready(function () {
    $('#example').DataTable({
        searching: false, paging: false, info: false, 'createdRow': function (row, data, dataIndex) {
            $('td:first-child', row).css('min-width', '120px');
        }
    });
});