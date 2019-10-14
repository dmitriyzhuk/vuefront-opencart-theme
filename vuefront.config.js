import * as components from './components'
import '~/assets/css/main.scss'

export default {
    logo: require('~/assets/img/logo_header.svg'),
    footerLogo: require('~/assets/img/logo_footer.svg'),
    layouts: {
        '*': {
            headerMenu: [
                [
                    'Menu',
                    {
                        items: ['store', 'blog']
                    }
                ]
            ],
            footerLeft: ['Pages'],
            footerCenter: ['AccountLinks'],
            footerRight: [
                [
                    'ExtraLinks',
                    {
                        links: [{
                                to: '/store/special',
                                text: 'Special'
                            },
                            {
                                to: '/store/compare',
                                text: 'Compare'
                            },
                            {
                                to: '/contact',
                                text: 'Contact Us'
                            }
                        ]
                    }
                ]
            ]
        },
        '/': {
            contentTop: [
                [
                    'Slideshow',
                    {
                        items: [
                            'https://opencart.vuefront.com/image/cache/catalog/demo/banners/MacBookAir-1140x380.jpg',
                            'https://opencart.vuefront.com/image/cache/catalog/demo/banners/iPhone6-1140x380.jpg'
                        ]
                    }
                ],
                [
                    'FeaturedProduct',
                    {
                        ids: JSON.parse(process.env.FEATURED_PRODUCT)
                    }
                ],
                'LatestProduct',
                'SpecialProduct',
                'LatestPost'
            ]
        },
        '/search/*': {
            contentBottom: ['SearchProduct', 'SearchPost']
        },
        '/store/category*': {
            columnLeft: [
                'StoreCategory', [
                    'LatestProduct',
                    {
                        column: true
                    }
                ]
            ]
        },
        '/blog/category*': {
            columnRight: [
                'Search',
                'BlogCategory', [
                    'LatestPost',
                    {
                        column: true
                    }
                ]
            ]
        },
        '/store/product/*': {
            contentBottom: ['RelatedProduct']
        },
        '/blog/post*': {
            columnRight: [
                [
                    'LatestPost',
                    {
                        column: true
                    }
                ]
            ]
        },
        '/account*': {
            columnRight: ['Account']
        },
        '/store/checkout': {
            contentTop: ['Checkout']
        }
    },
    atoms: {
        Button: components.aButton
    },
    molecules: {
        CartLink: components.mCartLink,
        Card: components.mCard,
        Dropdown: components.mDropdown,
        InputGroup: components.mInputGroup,
        ListGroup: components.mListGroup,
        ProductThumb: components.mProductThumb,
        TableHorizontal: components.mTableHorizontal,
    },
    organisms: {
        CompareActions: components.oCompareActions,
        Currency: components.oCurrency,
        Footer: components.oFooter,
        Header: components.oHeader,
        PostModule: components.oPostModule,
        ProductModule: components.oProductModule,
        SearchInlineForm: components.oSearchInlineForm,
        WishlistActions: components.oWishlistActions
    },
    extensions: {
        Menu: components.eMenu
    },
    templates: {
        Compare: components.tCompare,
        Wishlist: components.tWishlist
    }
}