function compile(target, sources) {
  let obj = link(sources.map(object));
  let generators = {
    dcpu: genDCPU
  };
  return generators[target](obj);
}
