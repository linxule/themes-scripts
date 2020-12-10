{
"translatorID":"04623cf0-313c-11df-9aae-0800200c9a66",
"translatorType":2,
"label":"ZotSelect Link",
"creator":"Scott Campbell, Avram Lyon, Nathan Schneider, Xule Lin",
"target":"html",
"minVersion":"2.0",
"maxVersion":"",
"priority":200,
"inRepository":false,
"displayOptions":{"exportCharset":"UTF-8"},
"lastUpdated":"2010-07-19 03:03:00"
}

/* original html output */
function doExport() {
	var item;
	while(item = Zotero.nextItem()) {
		Zotero.write('<a href="zotero://select/items/');
		var library_id = item.libraryID ? item.libraryID : 0;

		var titleS = (item.title) ? item.title.replace(/&/g,'&amp;').replace(/"/g,'&quot;') : "(no title)";
		var pubTitleS = (item.publicationTitle) ? item.publicationTitle.replace(/&/g,'&amp;').replace(/"/g,'&quot;') : "";
		if (!pubTitleS && item.type)
			pubTitleS = '['+item.type+']';
		Zotero.write(library_id+'_'+item.key+'" title="'+titleS+'&#13;'+((item.conferenceName) ? item.conferenceName : pubTitleS)+'">');

		var creatorsS = item.creators[0].lastName;
		if (item.creators.length>2)
			creatorsS += " et al.";
		else if (item.creators.length==2)
			creatorsS += " &amp; " + item.creators[1].lastName;

		var date = Zotero.Utilities.strToDate(item.date);
		var dateS = (date.year) ? date.year : item.date;

		Zotero.write('(' + creatorsS + ' ' + dateS + ')</a><br/>');
	}
}

/* my adaptation for markdown output */
/* output format: [Title (Author et al. year)](zotero-select-link) */
	
function doExport() {
	var item;
	while(item = Zotero.nextItem()) {

		var titleS = (item.title);
		Zotero.write( "[" + titleS);

		var creatorsS = item.creators[0].lastName;
		if (item.creators.length>2)
			creatorsS += " et al.";
		else if (item.creators.length==2)
			creatorsS += " ; " + item.creators[1].lastName;

		var date = Zotero.Utilities.strToDate(item.date);
		var dateS = (date.year) ? date.year : item.date;

		Zotero.write(" (" + creatorsS + " " + dateS + ")]");

		var library_id = item.libraryID ? item.libraryID : 0;
		Zotero.write("(zotero://select/items/" + library_id + "_" + item.key + ")");
		
		
	}
}


