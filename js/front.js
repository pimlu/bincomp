function isbop(expr, op) {
  return expr.type==='bop' && expr.op===op;
}
function assert(bool, msg) {
  if(!bool) throw new Error(msg);
}
function parseDecl(decl) {
  let list = [];
  while(isbop(decl, ',')) {
    list.push(decl.r);
    decl = decl.l;
  }
  list.push(decl);
  return list.reverse().map(e => {
    if(e.t === 'id') return [e.name, null];
    if(isbop(e, '=')) {
      assert(e.l.t === 'id', 'LHS of declaration assignment must be identifier');
      return [e.l.name, e.r];
    }
  });
}

function parseFunc(func, globals, syms) {

}

function object(meta, source) {
  if(typeof source != 'string') return source;
  let tree = parser.parse(source);
  let globals = meta.globals(), syms = meta.syms();
  tree.forEach(gbl => {
    if(gbl.t === 'decl') {
      let type = gbl.type;
      parseDecl(gbl).forEach(([name, expr]) => {
        globals[name] = expr;
        assert(!(name in syms), 'Can\'t redeclare `'+name+'`.')
        syms[name] = type
      });
    } else if (gbl.t === 'funcd') {
      parseFunc(gbl, globals, syms);
    }
  });

  return [globals, syms];
}

function link(objects) {
  return objects[0];
}
