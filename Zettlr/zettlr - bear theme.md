/********** Root **********/

:root {
	/*colors*/
	--editor-background: rgba(251, 251, 251);
	--editor-textcolor: rgba(70, 70, 70);
	--editor-selectedtextcolor: rgb(204, 230, 255);
}

/*** Minimalist Mode. Comment this section out for Normal Mode ***/

#editor,
#sidebar {
	top: 0px;
}

#document-tabs {
	height: 0px;
	border-bottom: 0px !important;
}

body #file-tree #directories-dirs-header {
	padding-top: 31px;
	padding-bottom: 21px;
}

/********** End Minimalist Mode **********/

/********** Toolbar **********/
body.dark #toolbar .searchbar input,
body #toolbar .searchbar input {
	background-color: white;
	border: 1px solid lightgrey;
}

/********** Body CodeMirror **********/

body .CodeMirror {
	/*set text clour*/
	color: var(--editor-textcolor) !important;
	font-size: 1em;
}

body .CodeMirror-selected {
	background-color: var(--editor-selectedtextcolor) !important;
}

/********** Editor **********/
#editor * {
	font-family: 'Avenir', sans-serif;
}

body #editor,
body.dark #editor {
	background-color: var(--editor-background);
}

#editor .cm-strong {
	color: black;
	font-weight: 500;
}

#editor .cm-em {
	color: black;
}

/***** Sidebar Resize (small section to left of editor) *****/

body #sidebar-resize,
body.dark #sidebar-resize {
	background-color: var(--editor-background) !important;
}

/********** File Tree **********/

#file-tree {
	font-family: 'Avenir', sans-serif;
}

body #file-tree div.list-item.selected {
	color: var(--c-primary);
	background-color: transparent;
	border-left: 4px solid var(--c-primary);
}

body.dark #file-tree div.list-item.selected {
	color: var(--c-primary);
	background-color: transparent;
	border-left: 4px solid var(--c-primary);
}

body #file-tree div.list-item.project {
	color: var(--grey-4);
}

body.dark #file-tree div.list-item.project {
	color: white;
}

body #file-tree div.list-item.project.selected,
body.dark #file-tree div.list-item.project.selected {
	color: var(--c-primary);
}

body #file-tree #directories-dirs-header {
	color: var(--editor-textcolor);
}

body.dark #file-tree #directories-dirs-header {
	color: white;
}

/********** File Lists **********/

#file-list {
	background-color: var(--editor-background) !important;
	box-shadow: 0px 0px var(--editor-background) !important;
	border-right: 1px solid lightgrey;
	font-family: 'Avenir', sans-serif;
}

body #file-list div.list-item {
	background-color: var(--editor-background);
	color: var(--editor-textcolor);
}

body #file-list div.list-item.selected,
body.dark #file-list div.list-item.selected {
	background-color: var(--editor-background) !important;
	background-color: white !important;
}

body #file-list div.list-item.directory,
body.dark #file-list div.list-item.directory {
	background-color: var(--editor-background) !important;
}

/********** Document Tabs **********/
body.dark #document-tabs,
body #document-tabs {
	background-color: var(--editor-background);
	color: lightgrey;
	border-bottom: 1px dotted lightgrey;
	/*height: 0;*/
}

body.dark #document-tabs .document.active,
body #document-tabs .document.active {
	background-color: var(--editor-background);
	color: var(--c-primary);
	border-left: 2px solid var(--c-primary);
	;
}

/********** Scrollbars **********/

::-webkit-scrollbar {
	display: none;
}