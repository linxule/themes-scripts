/*credit: https://forum.obsidian.md/t/hide-or-truncate-urls-in-editor-using-css/359/3?u=linxule*/

div:not(.CodeMirror-activeline) > .CodeMirror-line .cm-string.cm-url:not(.cm-formatting) {
    font-size: 0;
}
div:not(.CodeMirror-activeline) > .CodeMirror-line .cm-string.cm-url:not(.cm-formatting)::after {
    content: '🔗';
    font-size: 1rem;
}