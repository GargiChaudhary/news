/**
 * Created by 宇乔 on 13-11-21.
 */
jex.define('main', {
    alias: 'main',
    extend: 'tab',
    type: 'view',
    config: {

    },
    items: [
        {
            title: 'news',
            items: [
                {
                    alias: 'titlebar',
                    text: 'news'
                },
                {
                    alias: 'panel',
                    text: 'panel1'
                }
            ]

        },
        {
            title: 'info',
            items: [
                {
                    alias: 'titlebar',
                    text: 'asdasds'
                }
            ]
        }
    ],
    ready: function () {


    }


});