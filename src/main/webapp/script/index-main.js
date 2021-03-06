require.config({
    baseUrl: 'script/',
    paths: {
        'jquery': 'plugins/jquery-1.10.2.min',
        'jquery-migrate': 'plugins/jquery-migrate-1.2.1.min',
        'jquery-ui': 'plugins/jquery-ui/jquery-ui-1.10.3.custom.min',
        'bootstrap': 'plugins/bootstrap-3.3.1/js/bootstrap.min',
        'underscore': 'plugins/underscore-min',
        'datatables': 'plugins/data-tables/jquery.dataTables.min',
        'dataTables-tableTools': 'plugins/data-tables/dataTables.tableTools.min',
        'DT_bootstrap': 'plugins/data-tables/DT_bootstrap',
        'index': 'index-feature'
    },
    shim: {
        'jquery-migrate': ['jquery'],
        'jquery-ui':['jquery'],
        'bootstrap': ['jquery'],
        'datatables': ['jquery'],
        'dataTables-tableTools': ['datatables'],
        'DT_bootstrap': ['jquery', 'bootstrap', 'dataTables-tableTools']
    },
    priority: [
        'jquery'
    ]
});

require([
    'jquery',
    'index',
    'jquery-migrate',
    'jquery-ui',
    'bootstrap'
], function (jquery, index) {
    index.main();
});