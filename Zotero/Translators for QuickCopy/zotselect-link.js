{
"translatorID":"04623cf0-313c-11df-9aae-0800200c9a66",
"translatorType":2,
"label":"ZotSelect Link",
"creator":"Scott Campbell, Avram Lyon",
"target":"html",
"minVersion":"2.0",
"maxVersion":"",
"priority":200,
"inRepository":false,
"displayOptions":{"exportCharset":"UTF-8"},
"lastUpdated":"2012-07-17 22:27:00"
}

function doExport() {
	var item;
	while(item = Zotero.nextItem()) {
		Zotero.write("[Zotero Link](zotero://select/items/");
		var library_id = item.libraryID ? item.libraryID : 0;
		Zotero.write(library_id+"_"+item.key+")");
		Zotero.write(item.creators[0].lastName+". "+item.date+". "+item["title"]);
	}
}