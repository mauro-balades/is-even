#!/usr/bin/env bash

# Filename for the current number of solutions
SOLUTIONS="solutions.txt"

# Filenames for the javascript files
INDEX="index.js"

# Read the number of solutions from that file name
# and then increment that number.
NUMBER_SOLUTIONS=$(awk '{print $1}' ${SOLUTIONS})
NUMBER_SOLUTIONS=$((NUMBER_SOLUTIONS+1))
echo -n ${NUMBER_SOLUTIONS} > ${SOLUTIONS}

mkdir -p ${NUMBER_SOLUTIONS}
cd ${NUMBER_SOLUTIONS}

touch $INDEX

cat > $INDEX <<- EOM

module.exports.default = (number) => {
    // your code.
    // note: visit r/programmerhumor for ideas!
}
EOM

cd ..