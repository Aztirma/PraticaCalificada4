#!/usr/bin/env node

const fs = require('fs');

// Obtén los argumentos de la línea de comandos
const args = process.argv.slice(2);

// Función principal de grep
function grep(searchString, flags, files) {
  const regex = new RegExp(searchString, flags.includes('i') ? 'i' : '');

  // Itera sobre cada archivo
  files.forEach((file) => {
    // Lee el contenido del archivo
    const content = fs.readFileSync(file, 'utf-8').split('\n');

    // Itera sobre cada línea del archivo
    for (let i = 0; i < content.length; i++) {
      const line = content[i];
      const match = regex.test(line);

      // Aplica los indicadores y muestra la línea si es una coincidencia
      if ((flags.includes('v') && !match) || (!flags.includes('v') && match)) {
        let output = '';
        if (files.length > 1) {
          // Si se están buscando en varios archivos, muestra el nombre del archivo
          output += `${file}:`;
        }
        if (flags.includes('n')) {
          // Si se especifica el indicador -n, muestra el número de línea
          output += `${i + 1}:`;
        }
        // Muestra la línea coincidente
        output += `${line}`;
        console.log(output);
      }
    }
  });
}

// Extrae la cadena de búsqueda, los indicadores y los archivos de los argumentos
const searchString = args.shift();
const flags = args.filter(arg => arg.startsWith('-'));
const files = args.filter(arg => !arg.startsWith('-'));

// Llama a la función grep con los argumentos proporcionados
grep(searchString, flags, files);