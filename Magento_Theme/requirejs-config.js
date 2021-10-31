var config = {
    paths: {
        'slick': "Magento_Theme/js/lib/slick"
    },
    map: {
        '*': {
            'slick-carousel': 'Magento_Theme/js/slick-carousel'
        }
    },
    shim: {
        'slick': {
            deps: ['jquery']
        }
    }
};