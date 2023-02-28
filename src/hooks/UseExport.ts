type Palette = {
  name: string,
  colors: {
    [key: string]: {
      [key: number]: string
    }
  }
}

export default function UseExport(value: Palette, style: string): string {
  const intensity = Object.keys(value.colors.light);
  let Json = '';

  const light = intensity.map((shade: string) => `    ${shade}': ${value.colors.light[Number(shade)]}`);
  const dark = intensity.map((shade: string) => `    ${shade}': ${value.colors.dark[Number(shade)]}`);
  const mantineLight = intensity.map((shade: string) => `    ${value.colors.light[Number(shade)]}`);
  const mantineDark = intensity.map((shade: string) => `    ${value.colors.light[Number(shade)]}`);

  if (style === 'light') {
    Json = `'${value.name.toLowerCase()}': {
${light.join(", \n")}
}`;
  } else if (style === 'dark') {
    Json = `'${value.name.toLowerCase()}': {
${dark.join(", \n")}
}`;
  } else if (style === 'mantine-light') {
    Json = `'${value.name.toLowerCase()}': {
${mantineLight.join(", \n")}
}`;
  } else if (style === 'mantine-dark') {
    Json = `'${value.name.toLowerCase()}': {
${mantineDark.join(", \n")}
}`;
  } else {
    Json = `'${value.name.toLowerCase()}': {
  'light': {
${light.join(", \n")}
  }, 
  'dark': {
${dark.join(", \n")}
  }
}`;
  }

  return JSON.stringify(Json);
}