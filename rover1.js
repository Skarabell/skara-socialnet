
console.log(function calculateRoverPath(grid) {
    grid = [
        [0, 2, 3, 4, 1],
        [2, 3, 4, 4, 1],
        [3, 4, 5, 6, 2],
        [4, 5, 6, 7, 1],
        [6, 7, 8, 7, 1]
    ];
    grid.forEach(function(row, rowIndex) {
        row.forEach(function(element, elementIndex) {
            if (rowIndex === 0 && elementIndex === 0) {
                return;
            } else if (rowIndex === 0) {
                grid[rowIndex][elementIndex] += grid[rowIndex][elementIndex - 1];
            } else if (elementIndex === 0) {
                grid[rowIndex][elementIndex] += grid[rowIndex - 1][elementIndex];
            } else {
                grid[rowIndex][elementIndex] += Math.min(grid[rowIndex - 1][elementIndex],
                    grid[rowIndex][elementIndex - 1]);
            }
        });
    });

    fs = require('fs');
    fs.writeFile('path-plan.txt', 'Hello World!', function (err) {
        if (err) return console.log(err);
        console.log('Hello World > helloworld.txt');
    });

    console.log(map)

    return map[map.length - 1][map[0].length - 1];

}())

/*
map.push(map[rowIndex][elementIndex])
module.exports = {
    calculateRoverPath,
};
*/



/*
const minPathSum = function(grid) {
     grid = [
        [0, 2, 3, 4, 1],
        [2, 3, 4, 4, 1],
        [3, 4, 5, 6, 2],
        [4, 5, 6, 7, 1],
        [6, 7, 8, 7, 1]
    ];
    grid.forEach(function(row, rowIndex) {
        row.forEach(function(element, elementIndex) {
            if (rowIndex === 0 && elementIndex === 0) {
                return;
            } else if (rowIndex === 0) {
                grid[rowIndex][elementIndex] += grid[rowIndex][elementIndex - 1];
            } else if (elementIndex === 0) {
                grid[rowIndex][elementIndex] += grid[rowIndex - 1][elementIndex];
            } else {
                grid[rowIndex][elementIndex] += Math.min(grid[rowIndex - 1][elementIndex],
                    grid[rowIndex][elementIndex - 1]);
            }
        });
    });

    return grid[grid.length - 1][grid[0].length - 1];
};
*/

/*
const getPath = (function() {
    function getPath(maze, row, col, path, cache) {
        if (col < 0 || row < 0 || maze[row][col] === 0) {
            return false;
        }
        const key = row + col;
        if (cache[key]) {
            return true;
        }
        const isAtOrigin = row === 0 && col === 0;
        const success = false

        if (isAtOrigin || getPath(maze, row, col - 1, path, cache) || getPath(maze, row - 1, col, path, cache)) {
            path.push([row, col]);
            cache[key] = true;
            return true;
        }
        return false;
    }

    return function(maze) {
        if (maze === null || maze.length === 0) {
            return null;
        }
        const path = [];
        const cache = {};
        if (getPath(maze, maze.length - 1, maze[0].length - 1, path, cache)) {
            return path;
        }
        return null;
    }
}());
*/

/*function calculateRoverPath(arr) {
    let result = [arr[0]]
    for (let i=0; i < n; i++) {
        for (let j=0; j < m; j++)
        {
            d[i][j] = a[i][j]
            if (i > 0){
                d[i][j] = max(d[i][j], d[i - 1][j] + a[i][j])
                p[i][j] = 0
            }
            if (j > 0){
                d[i][j] = max(d[i][j], d[j - 1][j] + a[i][j])
                p[i][j] = 0
            }
            count << d[n - 1][m - 1] << end
            recount (n - 1, m - 1)
        }}
    function recount(i, j)
    {
        if (i == 0 && j == 0)
            return
        if (p[i][j] == 0)
        {
            recount(i - 1, j)
            count << "D";
        }
        if (p[i][j] == 1)
        {
            recount(i, j - 1)
            count << "R";
        }
    }

    return result

}*/


/*let a[30],[30], n, m;*/
/*let main() {
    scanf(" %d %d", &n, &m);
    for(let i = 0; i < n; i++)
    for(let j = 0; j < m; j++)
    scanf(" %d", &a[i][j]);
    for(let i = 1; i < m; i++) a[0][i] += a[0][i - 1];
    for(let i = 1; i < n; i++) a[i][0] += a[i - 1][0];
    for(let i = 1; i < n; i++)
    for(let j = 1; j < m; j++)
    a[i][j] += min(a[i - 1][j], a[i][j - 1]);
    printf("%d", a[n - 1][m - 1]);
    return 0;
}*/
/*
return arr.reduce((acc, point) => {
    return acc.some(val => arr[i])
}, [])*/
