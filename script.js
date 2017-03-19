// Tribute module data and utilities module are loaded.
// Functions are written to populate index.html with tribute module
// data using functions in utilities module.
require([
    'GandhiTributeDojo/GandhiDataModule', 'GandhiTributeDojo/UtilitiesModule', 'dojo/domReady!'
], function (tributeModule, myModule) {
    myModule.setText("title", tributeModule.title);
    myModule.setText("subtitle", tributeModule.subtitle);
    myModule.setAttr("thumbnail-link", "href", tributeModule.link);
    myModule.setAttr("thumbnail-pic", "src", tributeModule.thumbnail_pic);
    myModule.setText("thumbnail-caption", tributeModule.thumbnail_caption);
    myModule.setText("paragraph", tributeModule.paragraph);
    myModule.setText("timeline-title", tributeModule.timeline_title);
    myModule.setTimeline("timeline-list", tributeModule.timeline_items);
    myModule.setAttr("footer-link", "href", tributeModule.link);
});