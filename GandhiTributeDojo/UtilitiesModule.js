// This module has functions to populate tribute page.
define([
    'dojo/dom', 'dojo/dom-attr', 'dojo/dom-construct', 'dojo/_base/array', 'dojo/domReady!'
], function(dom, domAttr, domConstruct, arrayUtil){

    return {
        // Sets the text.
        setText: function (id, text) {
            dom.byId(id).innerHTML = text;  
        },
        
        // Sets the attribute.
        setAttr: function(id, attr, text){
            domAttr.set(id, attr, text);
        },
        
        // Places a timeline.
        // Reference: https://dojotoolkit.org/reference-guide/1.7/dojo/create.html
        setTimeline: function(id, items){
            var ul = domConstruct.create("ul", null, id, "first");
            arrayUtil.forEach(items, function(data){
                domConstruct.create("li", {innerHTML: data}, ul);
            });
        }
    };
});