CKEDITOR.editorConfig = function( config ) {
  config.extraPlugins = 'pbckcode';

  // Toolbar groups configuration.
  config.toolbarGroups = [
    { name: 'document', groups: [ 'mode', 'document', 'doctools' ] },
    { name: 'clipboard', groups: [ 'clipboard', 'undo' ] },
    { name: 'editing', groups: [ 'find', 'selection', 'spellchecker' ] },
    { name: 'forms' },
    '/',
    { name: 'basicstyles', groups: [ 'basicstyles', 'cleanup' ] },
    { name: 'paragraph', groups: [ 'list', 'indent', 'blocks', 'align', 'bidi' ] },
    { name: 'links' },
    { name: 'insert' },
    '/',
    { name: 'styles' },
    { name: 'colors' },
    { name: 'tools' },
    { name: 'others' },
    { name: 'about' },
    { name: 'pbckcode' }
  ];

  // PBCKCODE CUSTOMIZATION
  config.pbckcode = {
      // An optional class to your pre tag.
      cls : '',

      // The syntax highlighter you will use in the output view
      highlighter : 'PRETTIFY',

      // An array of the available modes for you plugin.
      // The key corresponds to the string shown in the select tag.
      // The value correspond to the loaded file for ACE Editor.
      modes :  [ ['HTML', 'html'], ['CSS', 'css'], ['PHP', 'php'], ['JS', 'javascript'], ['R', 'ruby'] ],

      // The theme of the ACE Editor of the plugin.
      theme : 'solarized_dark',

      // Tab indentation (in spaces)
      tab_size : 2
  };
};
