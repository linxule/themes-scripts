/* To add these "title" types manually, here are the settings & values copied out of Zotero: */
/* Related discussion on GitHub https://github.com/argenos/zotero-mdnotes/issues/42 */

# Mdnotes Custom Preferences

## Titles of Item
* publicationTitle
	* extensions.mdnotes.placeholder.publicationTitle;{"content":"{{bullet}} Publication: {{field_contents}}", "field_contents": "{{content}}", "link_style": "wiki"}
* programTitle
	* extensions.mdnotes.placeholder.programTitle;{"content":"{{bullet}} Program: {{field_contents}}", "field_contents": "{{content}}", "link_style": "wiki"}
* websiteTitle
	* extensions.mdnotes.placeholder.websiteTitle;{"content":"{{bullet}} Website: {{field_contents}}", "field_contents": "{{content}}", "link_style": "wiki"}
* blogTitle
	* extensions.mdnotes.placeholder.blogTitle;{"content":"{{bullet}} Blog: {{field_contents}}", "field_contents": "{{content}}", "link_style": "wiki"}
* bookTitle
	* extensions.mdnotes.placeholder.bookTitle;{"content":"{{bullet}} Book: {{field_contents}}", "field_contents": "{{content}}", "link_style": "wiki"}
* encyclopediaTitle
	* extensions.mdnotes.placeholder.encyclopediaTitle;{"content":"{{bullet}} Encyclopedia: {{field_contents}}", "field_contents": "{{content}}", "link_style": "wiki"}
* forumTitle
	* extensions.mdnotes.placeholder.forumTitle;{"content":"{{bullet}} Forum: {{field_contents}}", "field_contents": "{{content}}", "link_style": "wiki"}
* shortTitle
	* extensions.mdnotes.placeholder.shortTitle;{"content":"{{bullet}} Short Title: {{field_contents}}", "field_contents": "{{content}}", "link_style": "wiki"}
	* extensions.mdnotes.placeholder.shortTitle;{"content":"{{field_contents}}", "field_contents": "{{content}}", "link_style": "no-links"}
		* ==used with citekey for Note Name==


## Modified items

- title
	- extensions.mdnotes.placeholder.title;{"content":"{{field_contents}}", "field_contents": "{{content}}", "link_style": "no-links"}
- citekey
	- extensions.mdnotes.placeholder.citekey;{"content":"{{field_contents}}", "field_contents": "{{content}}", "link_style": "no-links"}
- notes
	- extensions.mdnotes.placeholder.notes;{"content":"## Notes\n\n- {{field_contents}}", "field_contents": "{{content}}", "link_style": "wiki", "list_separator": "\n- "}
- tags
	- extensions.mdnotes.placeholder.tags;{"content":"{{bullet}} Tags: {{field_contents}}", "field_contents": "{{content}}", "link_style": "wiki", "list_separator": ", ", "remove_spaces": "true"}

## Wildcards

### Zotfile examples
{
"a": "author", 
"A": {"field": "author", "operations":[{"function":"exec","regex": "\\w{1}"},{"function":"toUpperCase"}]}, 
"F": "authorLastF", 
"I": "authorInitials", 
"d": "editor", 
"D": {"field": "editor", "operations":[{"function":"exec","regex": "\\w{1}"},{"function":"toUpperCase"}]}, 
"L": "editorLastF", 
"l": "editorInitials", 
"t": "titleFormated", 
"h": "shortTitle", 
"j": "publicationTitle", 
"s": "journalAbbreviation", 
"p": "publisher", 
"w": {"default": "publisher", "audioRecording": "label", "bill": "legislativeBody", "case": "court", "computerProgram": "company", "film": "distributor", "journalArticle": "publicationTitle", "magazineArticle": "publicationTitle", "newspaperArticle": "publicationTitle", "patent": "issuingAuthority", "presentation": "meetingName", "radioBroadcast": "network", "report": "institution", "thesis": "university", "tvBroadcast": "network"}, 
"n": "patentNumber", 
"i": "assignee", 
"y": {"field": {"default": "date", "patent": "issueDate"}, "operations":[{"function":"exec","regex": "\\d{4}"}]}, "v": "volume", 
"e": "issue", 
"T": "itemType", 
"f": "pages", 
"x": "extra", 
"c": "collectionPaths", 
"g": "authorLastG", 
"q":"lastAuthor", 
"Q":"lastAuthor_lastInitial", 
"u":"lastAuthor_lastf", 
"U":"lastAuthor_initials", 
"b":"citekey"
}