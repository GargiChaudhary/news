/**
 * Created by 宇乔 on 13-11-20.
 */
jex.define('viewport', {
    alias: 'viewport',
    type: 'view',
    isComponet: 'true',
    config: {
    },
    getType: function () {
        return 'view';
    },
    parent: document.body,
    ready: function () {

    },
    render: function () {
    },
    childs: [],
    unload: function () {
    },
    add: function (instance) {
        this.childs.push(instance);
        jex.instancesManager.update(this);
        jex.render(this);

    }
})