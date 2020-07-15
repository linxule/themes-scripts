/* Enter your custom CSS here */


body.dark #editor {
    background-color: #22222d !important;
}

body.dark #toolbar .button  {
  	opacity:0.9;
  	color: #ffffff;
}
#toolbar div.button.formatting {
  	opacity:1 !important;
  	color: #879df3;
}
#toolbar .button.pomodoro {
    display:none;
}
body.dark #toolbar div.button.menu-popup {
  	opacity:1;
}
body.dark #toolbar:hover * {
  	opacity:1;
  	transition: 0.3s all ease;
}
body.dark .cm-strong, body.dark .cm-em {
    color: #b5d3ef;
}
body.dark .cm-zkn-tag, body.dark .cm-zkn-id, body.dark .cm-zkn-link {
    color: #aeafdc;
}

body.dark .cm-zkn-tag, body.dark .cm-zkn-id, body.dark .cm-zkn-link {
    background-color: #3dab7e;
  	color: #fff;
  	padding: 1px;
  	border-radius: 5px;
  	font-size: 20px;
}
body.dark span.cm-null:nth-child(even) {
  background-color: #37a0ee;
}
body.dark .cm-null .cm-zkn-tag #text {
  display:none;
}
body.dark .cm-formatting.cm-formatting-link.cm-link.cm-zkn-link{
  display:none;
}
body.dark #file-list {
    
  	background-color: #21212b !important;
    color: #fff;
  	box-shadow: inset -14px 2px 54px -23px rgba(0,0,0,0.5);
  	margin-top: 1px;
  	font-size: 1em;
}
body.dark #file-list div.container .selected {
  	background-color: #485161 !important;
    border-left: 5px solid #df5d33;
    font-weight: bold;
    color: #df5d33 #fff !important;
}
body.dark #file-list div.container div.list-item {
    background-color: #353546;
  	box-shadow: inset -14px 2px 54px -23px rgba(0,0,0,0.5);
  	border-top-color: #444;
    border-bottom-color: #444;
  	height: 60px;
  	color: #fff !important;
}
#component-container #file-tree {
  box-shadow: inset -14px 2px 54px -23px rgba(0,0,0,0.5);
}
body.dark #sidebar #file-list ul li.directory, body.dark #sidebar #file-list ul li.virtual-directory {
    background-color: #030304;
    color: white;
  	font-weight: bold;
}
body #sidebar div.container div.list-item div.meta .date, body #sidebar #file-list .id, body #sidebar div.container div.list-item div.meta .tags
{
    color: #fff !important;
    background-color: ##25252d !important;
  	box-shadow: 0px 0px 70px -15px rgba(255,255,255,0.55) !important;
}
#sidebar ul li p.filename {
    font-weight: 500;
}
.file.file-meta.ui-draggable.ui-draggable-handle p.filename
{
  color: #fff !important;
}
.CodeMirror .cm-escape-char, .CodeMirror .cm-formatting-code, .CodeMirror .cm-formatting-code-block, .CodeMirror .cm-formatting-em, .CodeMirror .cm-formatting-quote, .CodeMirror span.cm-formatting-strong {
  	opacity: .0;
  	display: none;
  	transition: visibility 0s, opacity 0.5s linear;
  	position: absolute;
    visibility: hidden;
    transition: opacity 1s, visibility 1s;
}

.CodeMirror-line:hover .cm-formatting-em {
    opacity: .5;
  	display: inline;
}
body.dark #file-list div.container div.list-item div.meta .directories
{
  background-color: #b75a3d;
}
.CodeMirror .CodeMirror-sizer {
    margin-left: 40px !important;
    border-right-width: 30px;
    padding-right: 40px !important;
}

body #file-tree div.list-item.file:not(.root) p.filename::before {
    content: 'edit';
    font-family: 'WebHostingHub-Glyphs';
    font-size: 0.8em;
}
#file-tree .list-item.directory>p.filename::before {
    font-family: 'WebHostingHub-Glyphs';
    font-size: .9em;
    margin-right: 5px;
    display: inline-block;
    position: relative;
    text-align: text-bottom;
}
#file-tree .list-item.directory>p.filename::before {
    vertical-align: bottom;
    content: "folder";
}