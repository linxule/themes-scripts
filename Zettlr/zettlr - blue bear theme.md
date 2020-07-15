/*&lt;Font&gt;*/

  
  

body  #editor {

font-family:  'Premiere', 'Goudy Old Style', 'AirFactoryRounded 3', 'Soft Elegance', serif;

font-size:  20px;

  

}

body.dark  #editor {

background:  #1E2022;

}

body  .CodeMirror-lines {

line-height:  1.3;

color:  #000000;

}

#editor  .CodeMirror-selected {

background-color:  #9bcbe4;

}

body.dark  .CodeMirror-lines {

color:  #F6F6F6;

}

.dark  #editor  .CodeMirror-selected {

background-color:  #4f5358;

}

body  .cm-formatting ~ .cm-comment:not(.cm-formatting):not(.cm-fenced-code) {

font-size:  14px;

font-family:  'Fira code', 'DejaVu Sans Mono', 'Consolas', monospace;

border:  1px  solid  #0d0d0d;

border-radius:  4px;

background:  #666666;

color:  #f2f2f2;

}

body.dark  .cm-formatting ~ .cm-comment:not(.cm-formatting):not(.cm-fenced-code) {

border:  1px  solid  #6f6f6f;

background:  #464646;

color:  #e6e6e6;

font-family:  'Fira code', 'DejaVu Sans Mono', 'Consolas', monospace;

}

body  .cm-comment:not(.cm-formatting):not(.cm-fenced-code):last-child {

border-top-right-radius:  4px;

border-bottom-right-radius:  4px;

background-color:  #12345600;

color:  #c1c1c1;

font-size:  14px;

font-family:  'Goudy Old Style', 'Premiere';

}

body  .cm-comment:not(.cm-formatting):not(.cm-fenced-code):first-child {

border-top-right-radius:  4px;

border-bottom-right-radius:  4px;

background-color:  #12345600;

font-size:  18px;

}

body.dark  .cm-comment:not(.cm-formatting):not(.cm-fenced-code):first-child {

color:  #696969;

font-family:  'Premiere', sans-serif;

}

body  #editor  .cm-highlight {

background-color:  #66ff66;

border-radius:  10px;

}

  

body  #editor  .cm-strong {

color:  #0769ab;

font-weight:  bold;

}

body.dark  #editor  .cm-strong {

color:  #14B7E8;

font-weight:  bold;

}

/\*strong symbol\*/body  #editor  .cm-formatting-strong.cm-strong {

color:  #828282ad;

font-size:  13px;

font-weight:  lighter;

background-color:  rgb(0, 0, 0, 0);

border-color:  rgb(0,0,0,0);

font-family:  'Premiere', sans-serif;

}

body.dark  #editor  .cm-formatting-strong.cm-strong {

color:  #88888870;

}

body  #editor  .cm-em {

color:  #0769ab;

}

body.dark  #editor  .cm-em {

color:  #14B7E8;

}

/\*emphasys symbol\*/body  #editor  .cm-formatting.cm-em {

color:  #b3b3b3;

font-size:  13px;

font-weight:  lighter;

background-color:  rgb(0, 0, 0, 0);

border-color:  rgb(0,0,0,0);

vertical-align:  middle;

}

body.dark  #editor  .cm-formatting.cm-em {

color:  #b3b3b366;

}

/\*code note\*/body  #editor  .cm-zkn-id {

color:  #cccccc;

}

body  #editor  .code-block-line {

background:  #F7F7F7;

line-height:  1;

}

body.dark  #editor  .code-block-line {

background:  #001d35;

line-height:  1;

}

/\*Links\*/

body  #editor  .cma{

color:  #6600cc;

font-weight:  bold;

}

body.dark  #editor  .cma {

color:  #ff991a;

}

/*&lt;/Font&gt;*/

/*&lt;Quote&gt;*/

  

body  .cm-quote {

background-color:  #cc00ff00;

font-family:  'Kalam Light', 'Premiere', serif;

font-size:  17px;

line-height:  1;

}

body  #editor  .cm-formatting-quote {

text-indent:  200px;

text-align:  right;

line-height:  10px;

}

body  #editor  .cm-comment.cm-quote {

font-size:  12px;

font-family:  'Fira code', 'DejaVu Sans Mono', 'Consolas', monospace;

border:  1px  solid  #0d0d0d;

border-radius:  4px;

background:  #cccccc;

color:  #404040;

}

body.dark  #editor  .cm-comment.cm-quote {

border:  1px  solid  #ffffff;

background:  #b9b9b9;

color:  #000000;

}

body  #editor  .cm-formatting.cm-formatting-code.cm-comment.cm-quote {

font-size:  14px;

color:  #000000;

border:  0px  solid;

background:  rgb(0, 0, 0, 0);

}

body.dark  .cm-quote, body.dark  .cm-link, body.dark  .cm-strong, body.dark  .cm-em {

color:  #9c9c9c;

}

  

/*&lt;/Quote&gt;*/

/*&lt;Lists&gt;*/

body  #editor  .cm-formatting-list-ul {

color:  #007acc;

font-family:  'Premiere', sans-serif;

}

body  #editor  .cm-formatting-list-ol {

color:  #007acc;

font-family:  'Kaufmann bd BT', sans-serif;

font-size:  20px;

}

body.dark  #editor  .cm-formatting-list-ul {

color:  #62e0fd;

font-family:  'Premiere', sans-serif;

}

body.dark  #editor  .cm-formatting-list-ol {

color:  #62e0fd;

font-family:  'Kaufmann bd BT', sans-serif;

font-size:  20px;

}

/*&lt;/Lists&gt;*/

/*&lt;code&gt;*/

/\*FootNote indiscreet\*/

/*body #editor .cm-link {

color: #f2f2f2;

background: #666666;

border: 1px solid #0d0d0d;

border-radius: 3px;

font-size: 14px;

font-family: 'MYB', 'Doubt', 'Comic Sans MS', 'Comiquita Sans', serif;

vertical-align: top;

}*/

/\*FootNote: discreet\*/

body  #editor  .cm-link {

color:  #0769ab;

background:  #96767600;

font-size:  14px;

font-family:  'MYB', serif;

font-weight:  bolder;

vertical-align:  top;

}

body.dark  #editor  .cm-link {

color:  #14b7e8;

}

body  #editor  .cm-formatting-link {

color:  #0000001c;

background:  rgb(0, 0, 0, 0);

border:  0px  solid  #0d0d0d;

vertical-align:  middle;

font-size:  8px;

}

body.dark  #editor  .cm-formatting-link {

color:  #14b7e826;

background:  rgb(0, 0, 0, 0);

border:  0px  solid  #0d0d0d;

vertical-align:  middle;

font-size:  8px;

}

body  #editor  .cm-formatting-code {

font-size:  16px;

color:  #000000;

border:  0px;

background:  rgb(0, 0, 0, 0);

}

body.dark  #editor  .cm-formatting-code {

color:  #bdbdbd;

}

/*&lt;Code Block&gt;*/

body  #editor  .cm-fenced-code {

font-size:  15px;

font-family:  'Fira code', 'DejaVu Sans Mono', 'Consolas', monospace;

}

/*&lt;/Code Block&gt;*/

/*&lt;Code outside the block&gt;*/

body  .cm-tag {

font-family:  'Fira code', 'DejaVu Sans Mono', 'Consolas', monospace;

font-size:  18px;

color:  var(--orange-2);

}

body  .cm-attribute {

font-family:  'Fira code', 'DejaVu Sans Mono', 'Consolas', monospace;

color:  var(--blue-0);

font-size:  18px;

}

body  .cm-string {

font-family:  'Fira code', 'DejaVu Sans Mono', 'Consolas', monospace;

font-size:  16px;

}

body  .cm-bracket {

font-family:  'Fira code', 'DejaVu Sans Mono', 'Consolas', monospace;

color:  var(--grey-5);

font-size:  18px;

}

  

/*&lt;/Code outside the block&gt;*/

body  #editor  .cm-string.cm-url {

color:  #0769ab;

font-weight:  bold;

text-transform:  capitalize;

line-height:  1;

font-size:  24px;

font-family:  'Premiere', 'Goudy Old Style', sans-serif;

}

body.dark  #editor  .cm-string.cm-url {

color:  #14b7e8;

}

/*&lt;Image link&gt;*/

#editor  .cm-image-alt-text.cm-link {

font-family:  'Microsoft Yi Baiti', sans-serif;

background-color:  rgb(0, 0, 0, 0);

color:  #404040;

border:  0px  solid  black;

font-size:  18px;

font-weight:  bold;

}

/*&lt;/Image link&gt;*/

  

/*&lt;Attachments tab&gt;*/

#attachments {

font-family:  'Premiere', 'Soft Elegance', 'Microsoft Yi Baiti', 'Comfortaa', serif;

font-size:  16px;

}

/*&lt;/Attachments tab&gt;*/

/*&lt;New line (***)&gt;*/

body  .cm-hr {

color:  #005fd4;

font-family:  'Voor2', sans-serif;

font-weight:  lighter;

padding-left:  50%;

font-size:  50px;

}

body.dark  .cm-hr {

color:  #42ffe5;

}

/*&lt;/New line (***)&gt;*/

  

/\*Titles\*/

body  .heading-tag {

font-family:  'Proxima Nova Soft';

color:  #dedede;

text-transform:  uppercase;

}

body.dark  .heading-tag {

color:  #333333;

}

#editor  .cm-header-1 {

font-size:  60px;

font-family:  'Proxima Nova Soft', 'Arial Black', sans-serif;

/\*text-transform: uppercase;\*/

text-align:  center;

text-decoration:  underline;

color:  #404040;

text-shadow:  1px  1px  #000000;

line-height:  1;

}

#editor  .cm-header-2 {

font-size:  60px;

font-family:  'Comfortaa Light', sans-serif;

color:  #404040;

line-height:  1;

font-weight:  lighter;

}

#editor  .cm-header-3 {

font-family:  'Averia Serif', 'Thin Lines and Curves', serif;

font-size:  40px;

color:  #404040;

line-height:  1;

}

#editor  .cm-header-4 {

font-family:  'Averia Serif', 'Thin Lines and Curves', serif;

font-size:  30px;

color:  #404040;

line-height:  1;

}

#editor  .cm-header-5 {

font-family:  'Averia Serif', 'Thin Lines and Curves', serif;

font-size:  25px;

color:  #404040;

line-height:  1;

}

#editor  .cm-header-6 {

font-family:  'Averia Serif', 'Thin Lines and Curves', serif;

font-size:  22px;

color:  #404040;

line-height:  1;

}

.dark  #editor  .cm-header-1 {

font-size:  60px;

font-family:  'Proxima Nova Soft', 'Arial Black', sans-serif;

/\*text-transform: uppercase;\*/

text-align:  center;

text-decoration:  underline;

color:  #FFFFFF;

text-shadow:  1px  1px  #000000;

line-height:  1;

}

.dark  #editor  .cm-header-2 {

font-size:  60px;

font-family:  'Comfortaa Light', sans-serif;

color:  #FFFFFF;

line-height:  1;

font-weight:  lighter;

}

.dark  #editor  .cm-header-3 {

font-family:  'Averia Serif', 'Thin Lines and Curves', serif;

font-size:  40px;

color:  #FFFFFF;

line-height:  1;

}

.dark  #editor  .cm-header-4 {

font-family:  'Averia Serif', 'Thin Lines and Curves', serif;

font-size:  30px;

color:  #FFFFFF;

line-height:  1;

}

.dark  #editor  .cm-header-5 {

font-family:  'Averia Serif', 'Thin Lines and Curves', serif;

font-size:  25px;

color:  #FFFFFF;

line-height:  1;

}

.dark  #editor  .cm-header-6 {

font-family:  'Averia Serif', 'Thin Lines and Curves', serif;

font-size:  22px;

color:  #FFFFFF;

line-height:  1;

}

#editor  .CodeMirror-cursor {

border-left:  2px  solid  #668cff;

z-index:  3;

}

/*&lt;Docs & Files&gt;*/

body  #file-tree {

background-color:  #2E3235;

transition:  0.2s  all  ease;

color:  #F0F0F0;

font-size:  0.9em;

}

body.dark  #file-tree {

background-color:  #2B2B2B;

transition:  0.2s  all  ease;

color:  #F0F0F0;

font-size:  0.9em;

}

#file-tree  .filename {

line-height:  1.4em;

padding:  0.1em  0.4em;

white-space:  nowrap;

padding-left:  5px;

margin:  0px  0px;

overflow:  hidden;

}

#sidebar  .list-item.directory {

font-weight:  bold;

font-size:  14px;

font-family:  'Proxima Nova Soft', 'Arial Black', sans-serif;

}

#file-tree  .list-item {

font-family:  'Microsoft Yi Baiti', 'Buda Light', 'ImperiumSerif', 'Garamond', serif;

font-size:  16px;

}

body  #file-tree  div.list-item:hover {

background-color:  #616161;

color:  inherit;

}

body  #editor  .document.active {

background:  #1D75B3;

border-radius:  3px;

color:  #FFF;

box-shadow:  0px  0px  5px  1px  #000000;

margin-left:  1px;

}body.dark  #editor  .document.active {

background:  #465a78;

}

body  #document-tabs  .document  .filename {

padding-left:  8px;

text-align:  center;

}

body  #document-tabs  .document  .close {

transition:  0.5s  all  ease;

font-weight:  bold;

border-right:  1px  solid  #0000000f;

border-radius:  1px;

}

#sidebar  .list-item.file.selected {

background:  #a7a7a7;

color:  #171717;

box-shadow:  inset  1px  2px  3px  1px  #000;

}

body.dark  #file-tree  div.list-item.selected {

background-color:  #465a78;

}

body.dark  #file-list  div.container  div.list-item.selected {

background-color:  #8e8e8e;

}

.dark  #sidebar  .list-item.file.selected {

background:  #a7a7a7;

}

#sidebar  .list-item.directory.selected {

font-weight:  bold;

background:  #0067af;

}

#sidebar  #sidebar-resize::after, #sidebar  #sidebar-inner-resizer::after {

border-radius:  10px;

transition:  0.4s  all  ease;

align-content:  flex-start;

}

#file-tree  .list-item.directory  .sorter  .sortDirection, #file-tree  .list-item.directory  .sorter  .sortType {

margin:  3px  3px;

background-color:  transparent;

color:  #daf5fb;

}

body.dark  #file-tree  div.list-item  .sorter  .sortDirection, body.dark  #file-tree  div.list-item  .sorter  .sortType {

background-color:  transparent;

}

/\*Second sidebar\*/

body  #sidebar.expanded  #file-list, body  #sidebar.expanded  #file-tree {

transition:  none;

background:  #2E3235;

}

body  #file-list  div.list-item.directory {

background-color:  #1D75B3;

transition:  0.2s  background-color  ease;

color:  var(--c-primary);

}

body.dark  #file-list  div.container  div.list-item.directory {

background-color:  #465A78;

}

body.dark  #file-list  div.container  div.list-item.directory  .sorter  .sortDirection, body.dark  #file-list  div.container  div.list-item.directory  .sorter  .sortType {

background-color:  #14141e00;

}

#file-list  div.list-item  p.filename {

white-space:  nowrap;

display:  block;

line-height:  30px;

width:  100%;

overflow:  hidden;

color:  #fff;

font-family:  Proxima  Nova  Soft;

font-size:  15px;

font-weight:  bolder;

}

body  #file-list  div.list-item  div.meta  .date {

color:  #72ffff;

}

body.dark  #file-list  div.container  div.list-item  div.meta  .date {

color:  #fcffca;

}

body  #file-list  div.list-item  div.meta  .id, body  #file-list  div.list-item  div.meta  .tags, body  #file-list  div.list-item  div.meta  .directories, body  #file-list  div.list-item  div.meta  .files {

border:  1px  solid  #929292;

border-radius:  10px;

font-family:  Segoe  Ui;

font-weight:  500;

}

body  #file-list  div.list-item.file:hover {

background:  #616161  !important;

color:  #fff;

}

body  #file-list  div.list-item.directory  .sorter  .sortDirection, body  #file-list  div.list-item.directory  .sorter  .sortType {

background-color:  transparent;

color:  white;

}

body  #file-list {

background-color:  #2E3235;

transition:  0.2s  all  ease;

font-size:  0.9em;

box-shadow:  inset  -14px  2px  54px  -23px  rgba(0, 0, 0, 0.25);

}

body.dark  #sidebar  #sidebar-resize, body.dark  #sidebar  #sidebar-inner-resizer {

background-color:  #1E2022;

}

body.dark  #sidebar  #sidebar-inner-resizer {

left:  calc(50% \- 5px);

right:  auto;

background:  transparent  !important;

}

/*&lt;/selected files&gt;*/

/*&lt;Search Bar&gt;*/

body  #toolbar  .searchbar  input {

color:  inherit;

background-color:  white;

border:  0px  solid  white;

font-size:  0.72em;

transition:  0.5s  border-color  ease;

box-shadow:  inset  1px  1px  5px  -2px;

}

body.dark  #toolbar  .searchbar  input {

border:  1px  solid  var(--grey-8);

box-shadow:  inset  1px  1px  3px  0px  #000;

background:  #c1c1c1;

color:  #000;

}

#toolbar  .searchbar  div.end-search {

position:  relative;

right:  26px;

width:  0px;

height:  12px;

display:  inline-block;

line-height:  11px;

font-size:  80%;

text-align:  center;

color:  black;

}

/*&lt;/Search Bar&gt;*/

#editor  .CodeMirror-code  .mute {

opacity:  0.5;

}

.dark  #editor  .CodeMirror-code  .mute {

opacity:  0.3;

}

/*&lt;Tag icon&gt;*/

#file-list  div.list-item  .taglist  .tag {

height:  12px;

width:  auto;

margin:  0  auto;

transition:  0.2s  all  ease-out;

}

#file-list  div.list-item  .taglist {

position:  absolute;

top:  0;

bottom:  0;

right:  10px;

display:  flex;

align-items:  center;

width:  50px;

justify-content:  space-between;

transition:  0.2s  width  ease;

}

#file-list  div.list-item  .taglist  .tagspacer  .tag {

border-top:  1px  solid  white;

border-bottom:  1px  solid  white;

}

#file-list  div.list-item  .taglist  .tagspacer:first-child  .tag {

border-top-left-radius:  12.5px;

border-bottom-left-radius:  12.5px;

border-left:  1px  solid  white;

}

#file-list  div.list-item  .taglist  .tagspacer:last-child  .tag {

border-top-right-radius:  12.5px;

border-bottom-right-radius:  12.5px;

border-right:  1px  solid  white;

}

body  #editor  .cm-zkn-id {

font-family:  'Microsoft Yi Baiti', serif;

}

body.dark  #editor  .cm-zkn-id {

color:  #656565;

}

.CodeMirror  .cm-zkn-tag {

font-weight:  bold;

font-family:  'Kalam Light', serif;

}

body  .cm-zkn-tag, body  .cm-zkn-id, body  .cm-zkn-link, body  .cm-zkn-link-formatting {

color:  #1000ff;

}

body.dark  .cm-zkn-tag, body.dark  .cm-zkn-id, body.dark  .cm-zkn-link, body.dark  .cm-zkn-link-formatting {

color:  #42ff59;

}

/*&lt;/Tag icon&gt;*/

body  .citeproc-citation {

border-radius:  20px;

}