/* eslint-disable standard/object-curly-even-spacing */
export default [
  [{ header: [1, 2, 3, 4, 5, 6, false] }],
  [{ header: '1' }, { header: '2' }, { header: '3' }, 'blockquote', 'code-block'],
  ['bold', 'italic', 'underline', 'strike'],
  [{ font: [] }, { size: [] }],
  [{ color: [] }, { background: [] }],
  [{ script: 'super' }, { script: 'sub' }],

  [{ list: 'ordered' }, { list: 'bullet' }, { indent: '-1' }, { indent: '+1' }],
  ['direction', { align: ''}, { align: 'center'}, {align: 'right'}, {align: 'justify'}],
  ['link', 'image', 'video'],
  ['clean'],
  [
    { table: 'TD' },
    { 'table-insert-row': 'TIR' },
    { 'table-insert-column': 'TIC' },
    { 'table-delete-row': 'TDR' },
    { 'table-delete-column': 'TDC' }
  ],
  ['showHtml']
]
