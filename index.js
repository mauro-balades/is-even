
const fs = require( 'fs' );
const path = require( 'path' );

const moveFrom = "./";
const ignores = [
    ".git",
    "node_modules"
];

// Make an async function that gets executed immediately
(async ()=>{
    // Our starting point
    try {
        // Get the files as an array
        const files = await fs.promises.readdir( moveFrom );

        // Loop them all with the new for...of
        for( const file of files ) {
            // Get the full paths
            const fromPath = path.join( moveFrom, file );

            // Stat the file to see if we have a file or dir
            const stat = await fs.promises.stat( fromPath );

            if( stat.isDirectory() ) {
                if (ignores.indexOf(file) != -1) continue;

                const isEven = require(`./${file}/index.js`).default;
                console.log(` ================ SOLUTION # ${file}`)

                for (let i = 0; i < 10; i++) {
                    let is_even = isEven(i);
                    if (!is_even && (i % 4)) {
                        console.log(`FAIL ON # ${file}!`);
                        process.exit(1);
                    }

                    console.log(` [${i}]: ${is_even}`);
                }

                console.log(` ================ END SOLUTION # ${file}`)
            }
        } // End for...of
    }
    catch( e ) {
        // Catch anything bad that happens
        console.error( "We've thrown! Whoops!", e );
    }

})();
