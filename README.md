# Practica Calificada 4
### Alumna:Zuñiga Chicaña Alejandra Aztirma 
### Codigo: 20202142E

## Pregunta 1

Se nos pide implementar un comando grep simplificado que admita la busqueda de cadenas fijas, para ello crearemos un archivo llamado grep.js que contenga las siguientes lineas:

```
grep.js
```
Este ejemplo buscará la cadena `searchString` en los archivos `file1.txt` y `file2.txt`, mostrando el número de línea (`-n`) e ignorando mayúsculas y minúsculas (`-i`). 

```javascript
#!/usr/bin/env node

const fs = require('fs');
const args = process.argv.slice(2);

function grep(searchString, flags, files) {
  const regex = new RegExp(searchString, flags.includes('i') ? 'i' : '');

  files.forEach((file) => {
    const content = fs.readFileSync(file, 'utf-8').split('\n');

    for (let i = 0; i < content.length; i++) {
      const line = content[i];
      const match = regex.test(line);

      if ((flags.includes('v') && !match) || (!flags.includes('v') && match)) {
        let output = '';
        if (files.length > 1) {
          output += `${file}:`;
        }
        if (flags.includes('n')) {
          output += `${i + 1}:`;
        }
        output += `${line}`;
        console.log(output);
      }
    }
  });
}

const searchString = args.shift();
const flags = args.filter(arg => arg.startsWith('-'));
const files = args.filter(arg => !arg.startsWith('-'));

grep(searchString, flags, files);
```

Guardamos este código en un archivo llamado `grep.js` y nos aseguramos de darle permisos de ejecución:

```bash
chmod +x grep.js
```

Luego podemos usarlo de la siguiente manera:

```bash
./grep.js searchString -n -i file1.txt
```
Al realizar este comando vemos que no tenemos salida alguno puesto que no se ha encontrado la cadena `searchString` en el archivo `file1.txt`.

![Alt text](image-1.png)

Ahora por ello vamos a crear los archivos de texto para poder verificar la funcionalidad de nuestro código, dicho archivo de texto contiene lo siguiente:

```
This is an example
It contains some words
For example We want to drink some water
```
Para poder verificar que el archivo de texto contiene la palabra "water" se debe usar el comando `grep`:

![Alt text](image-2.png)

Como se observa se encontro la cadena mencionada y se obtuvo como salida la linea de nuestro archivo de texto que contenia la palabra "water" en este caso.



## Pregunta 2

En este ejercicio, se crearon dos archivos principales: `pokemon.js` y `examples.js`, para implementar la funcionalidad de las clases "Pokemon" y "Charizard" en JavaScript.

### Archivo `pokemon.js`:

Este archivo contiene la definición de las clases `Pokemon` y `Charizard`. Aquí hay una breve descripción de cada clase:

- **Clase `Pokemon`:**
  - Representa a un Pokémon genérico con propiedades como puntos de salud (`HP`), ataque (`ataque`), defensa (`defensa`), movimiento (`movimiento`), nivel (`nivel`) y tipo (`tipo`).
  - Ofrece métodos como `fight()` que verifica si se ha seleccionado algún movimiento y `canFly()` que verifica si el Pokémon puede volar.
  
- **Clase `Charizard`:**
  - Hereda de la clase `Pokemon` y representa a Charizard.
  - Agrega un constructor que configura específicamente el movimiento y el tipo de Charizard.
  - Sobreescribe el método `fight()` para personalizar la lógica de combate de Charizard.

### Archivo `examples.js`:

Este archivo contiene ejemplos de uso de las clases definidas en `pokemon.js`. Se crean instancias de Pokémon y Charizard, y se realizan diversas operaciones para ilustrar las funcionalidades de las clases. Algunos ejemplos incluyen la validación de movimientos, la comprobación de tipos y la realización de acciones específicas de Charizard.

En el archivo `examples.js`, se proporcionan cinco ejemplos que ilustran el uso de las clases `Pokemon` y `Charizard`:

1. **Ejemplo 1:**
   - Creación de un Pokemon sin movimiento y tipo.
   - Debería lanzar un error indicando "No se ha seleccionado ningún movimiento."

2. **Ejemplo 2:**
   - Creación de un Pokemon con movimiento y tipo "Volar".
   - Debería imprimir `true`, indicando que el Pokemon puede volar.

3. **Ejemplo 3:**
   - Creación de un Charizard sin movimiento.
   - Debería lanzar un error indicando "No se ha seleccionado ningún movimiento."

4. **Ejemplo 4:**
   - Creación de un Charizard con movimiento personalizado ("Lanzallamas").
   - Debería imprimir "Charizard usó Lanzallamas."

5. **Ejemplo 5:**
   - Creación de un Charizard sin especificar un movimiento (utilizando el movimiento por defecto "Disparar").
   - Debería imprimir "Charizard usó Disparar."

Se puede comprobar lo expuesto con la siguiente salida de la ejecucion del archivo `examples.js`

![Alt text](image.png)

## Pregunta 3
