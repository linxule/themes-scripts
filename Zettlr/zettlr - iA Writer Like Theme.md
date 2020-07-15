/* iA Writer Like Theme for Zettlr */

:root {
    --c-primary-shade: #f0f0f0;
  }
  
  body.dark ::-webkit-scrollbar-thumb {
    background-color: #777;
  }
  
  #editor {
      font-family: 'SF Mono', Crimson;
  }

  body #editor .cm-formatting.quote {
   padding-left: 5px !important;
   border-left: 1px solid #F27983 !important;  
    }
	  
  .CodeMirror-wrap pre.CodeMirror-line {
    font-weight: lighter;
  }
  
  .CodeMirror .size-header-1,
  .CodeMirror .size-header-2,
  .CodeMirror .size-header-3,
  .CodeMirror .size-header-4,
  .CodeMirror .size-header-5,
  .CodeMirror .size-header-6
  {
    font-size: 1em;
  }
  
  .size-header-1 .CodeMirror-line > span,
  .size-header-2 .CodeMirror-line > span,
  .size-header-3 .CodeMirror-line > span,
  .size-header-4 .CodeMirror-line > span,
  .size-header-5 .CodeMirror-line > span,
  .size-header-6 .CodeMirror-line > span
   {
      border-bottom: 2px solid;
      padding-bottom: 2px;}

