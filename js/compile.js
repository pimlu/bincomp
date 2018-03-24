function compile(target, sources) {
  let generators = {
    x86: genX86
  };
  let gen = generators[target];
  let build = object.bind(null, gen.meta)
  let obj = link(sources.map(build));
  return gen(obj);
}
