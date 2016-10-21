const {
  ProseEditor, ProseEditorConfigurator, DocumentSession,
  ProseEditorPackage, HeadingMacro
} = substance

/*
  Example document
*/
const fixture = function(tx) {
  let body = tx.get('body')
  tx.create({
    id: 'p1',
    type: 'paragraph',
    content: "Type # followed by a space to create a heading!"
  })
  body.show('p1')
  tx.create({
    id: 'p2',
    type: 'paragraph',
    content: ""
  })
  body.show('p2')
}

/*
  Application
*/

let cfg = new ProseEditorConfigurator()
cfg.import(ProseEditorPackage)
cfg.addMacro(HeadingMacro)

window.onload = function() {
  let doc = cfg.createArticle(fixture)
  let documentSession = new DocumentSession(doc, {
    configurator: cfg
  })
  ProseEditor.mount({
    documentSession: documentSession,
    configurator: cfg
  }, document.body)
}
