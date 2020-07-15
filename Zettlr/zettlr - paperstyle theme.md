/* Paperstyle custom CSS */
 
/* Add Monospace font */
body.darwin { font-family: 'Menlo Regular', monospace; }
 
#editor.fullscreen, .CodeMirror-fullscreen { top: 0px; }
 
/* Set the surrounding background color */
body #editor { background-color: #333; } /* Light mode */
body.dark #editor { background-color: black; } /* Dark mode */
 
/* Set the background colour of the writing area (light mode) */
body #editor .CodeMirror-sizer, body #editor .CodeMirror-gutter {
    background-color: white;
    height: 100%; /* Necessary for shorter texts */
}
 
/* Here for dark mode */
body.dark #editor .CodeMirror-sizer, body.dark #editor .CodeMirror-gutter {
    background-color: #333;
}