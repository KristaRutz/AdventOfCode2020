let slope = [
  ".#..#.....#....##..............",
  "...#.#...#...#.#..........#....",
  "#...###...#.#.....#.##.#.#...#.",
  "#.....#.#...##....#...#...#....",
  "##.......##.#.....#........##.#",
  "#..#....#......#..#......#...#.",
  "#..#......#.......#............",
  "##...#.#..#...#........#....##.",
  "#.#.#...#...#..#........#....#.",
  ".......#...........##......#...",
  "##.##.##......#..#............#",
  "..#.###..#..............#......",
  ".##..#.....#......#.#..........",
  "........#.........#....#....###",
  "#..........#........#.#.#......",
  "...##.....#..####.###..#.##....",
  "....#...###............#..#....",
  "...#.#...#.#...#..#.#........##",
  ".....#...#.............#..#....",
  "....#.#.#.##.....##.##....#....",
  "..#....#............#.##.##..#.",
  ".#..#..#................#...###",
  "#..###.#..##..#............#...",
  ".......#.#....#.##.#.##........",
  "##...###.#....#...........###.#",
  "...#.#....#..####.........#....",
  "....##........#.#.#.###........",
  "#...#..#.....#....##..#.##...#.",
  "##....................##..#....",
  ".#....##...........##...##...#.",
  ".#.#..#.........#.........#.#.#",
  "#.#..#.....#.#..#..#..#.#......",
  "...#.............#......#....##",
  "....#.#.......#....#...#.##...#",
  "#.#.#..###..........#...#......",
  "......#.....#..#..#.......##..#",
  ".#......#......#.....#...#.....",
  "......#..#......#.#............",
  "..#............#..#....#.#.....",
  ".....#..##.......#...##.###.#.#",
  ".....#........##....#.#...##..#",
  "..........##.#..#.#...#..#....#",
  "#.#.#.#.##...................#.",
  ".....#....##.....#..#...#..#...",
  "...#....#.............#....#.#.",
  ".........#.##..##..............",
  "#...#.#....#..#...#.......#....",
  ".#...#......#.##.#...#.#..###..",
  "..#.#.#......#..#...##..##.##..",
  ".........#.....#......##....##.",
  "...###.......#..#........#.....",
  "...#....#...#.#.#......##....#.",
  ".#.....#......#...##.##..#.....",
  "..#.##...#....####...##........",
  "..#.#.###....#..##.......##....",
  ".....#....##...#......#.......#",
  ".#....#......#..............#..",
  ".......#.#......#..#....#.#.#..",
  ".......#.#.........###....#....",
  ".#...#.......#.#..#..####....#.",
  "..#...#.#......#..#.##.###..#..",
  "..##.........#............#.#.#",
  "#.........##.##.........#.###..",
  "...#....#.......#..#..##.......",
  ".#....##........##.......#..#..",
  "...#.....#.#.##.#.#.....##.....",
  ".#.#........#.......#.#..#..#..",
  ".....####..##.##.#.#....#......",
  "..#.##.#.#.#....###..#....#.#..",
  "..##..#.#......##.#..#.........",
  "....#..#.#.##.......#...##.....",
  "....###.....#..###...#....###.#",
  "..#....#.......#......#...##..#",
  "..#..##......#....#.###..#..##.",
  "..#..#...............#.#.#.....",
  "...##...#.#..#.#...#......#....",
  "#....#...#.#.#.#.#....#....#...",
  "....##...#....#.....##..#.....#",
  "......##.....#...##..#.......#.",
  "......###......#....#.##..#....",
  ".....#........#........#...#..#",
  ".#..##.....##....#.#......#.#..",
  "#..#.#.....#........#......#.#.",
  ".#..#.##.....#####.#....#.#....",
  "....##........#..........#.#...",
  ".......#.....#.......#...#.#...",
  ".#....#...##.###....#.#......#.",
  "#...#...........##.#...........",
  "#...##.......#..#........#.#..#",
  ".....#..##..###....#.#.#....#..",
  "..#..#.....#............#.#....",
  "............#......#.....#.....",
  ".#..#.....##.........#....###.#",
  "#.........#....#....#.#..#...#.",
  "##.#...##....#..#...#.#...#....",
  "....###..##...................#",
  "....##...#......#...#.#...#...#",
  "#....#....###..........#...#..#",
  ".....##.#....###.###....#..###.",
  "#.....#...........#...........#",
  "##..###.##........#..#.#..#.#..",
  ".##...#..#.......#.#....#.....#",
  "......##..#..#.......#.#...##..",
  "......#..#..#.#...###..#.#....#",
  "#.##.#..#......#...##........##",
  ".....#..........##.....#...#...",
  "........#....##......#......#.#",
  "..#..#.#...#.#.#.......#......#",
  ".#....#........#............#..",
  "......##.....#...#.............",
  "#......##..#.......##....##.#..",
  ".....#..#..#...#.......#..#....",
  "...#..##.#..#.#....##.....#..##",
  "......#...#.#...#.#......###.#.",
  ".#.#...#.....#..###.....#......",
  "#..####.#....#.......##...#....",
  ".##.......#.....#.........#....",
  "#......##.#...............#....",
  ".######.#...##...#...#...#..##.",
  "....#...####....##.#..#...##...",
  ".#...................#.#..#..#.",
  ".#.#....##...#...#.#..#.#.#.#..",
  "......#......#........##.#...#.",
  "##..#...#..#.............##.#..",
  "#.............#..........#.#...",
  "...##.....#.............#......",
  "......###.....#................",
  "#.#.#....#..##.#.....#.........",
  ".#.#........#.........#.#.##.#.",
  "......#...##...#.#.....#....#..",
  "#...#.........##.##.#..........",
  "#..............#..#.......##...",
  "#...#......#.#......#...#....#.",
  "...#...#........#.#......#.###.",
  "##.....#...#.#..#..#..#.......#",
  "..#.##..##.........#...##.##...",
  "#....#....#.....#..........#...",
  "#.####..#..###.....#..#..#.....",
  "..#.....#.##.##..####....#.#.#.",
  "...#.#....#...#.......#..#.....",
  "......###...#.#..#..#..........",
  ".........#..#.....#.#.##......#",
  ".......#.#....##.....##.#..#.#.",
  ".#..#.#..#......##.###...##..#.",
  "....###...........#.....#....#.",
  ".#.##.....#..#.....#......##...",
  "#..##....#..........#.##.##..#.",
  ".###.#.#..#.#.....#..##....#.#.",
  "..##.#....#.....##..#..........",
  "##........#...#..#........###.#",
  "#...#...........##.......#.#...",
  "...###.....##.#....#...#...#...",
  "......#....#.#.......###....#..",
  "...#...#.......##.......###.#..",
  "..............#.#..........##..",
  "#.#....###..#..#.........#.....",
  ".###.#.......#.....#....#.#....",
  ".....###...#.#..#.#.......#....",
  ".........#.##.#......#.#..#....",
  ".......#....#....#.#....#..##.#",
  "...............#...##.#..#.#..#",
  ".....##........#..##...........",
  ".##.#..#....#..#.#...#.........",
  ".#.#..##.#..#......#....#.#...#",
  "##....#.......##...........#...",
  "..#...#.............#.#....#..#",
  "..#......#..#.....#...##.....#.",
  "....##...#.#...##...#..##......",
  ".....#..#..........#...........",
  "..##....#..#.#....#..#........#",
  ".###....#.....#.#....#..##.....",
  "#.......##.......#..#..#....#.#",
  ".##..#...........#..##..##..#..",
  ".#.................#...#....#..",
  ".######.......#............##..",
  ".#.........#......##.#.#.#.#.#.",
  ".#.......#...#...#....###....#.",
  "....#...##.#.#...#.....#.#..#..",
  ".#..#..#...#.....###....#......",
  "...#.##.###........#.....##....",
  "..#....#.#.#..........#..#..#..",
  "......#.....#...#..#..##..#.#..",
  "#.#.......##.......#....#.....#",
  "..#...#..#.#....#.##.##........",
  "..#....#..##..#..##......#.....",
  "#....#..##.....#....###........",
  "##...#......#..###.#.....#.....",
  "#..###....#...#...#...#......##",
  ".....###....#......#..#..#...#.",
  ".##......#.......##...#........",
  "....#.#.....##.....#.....#.....",
  "...##.#.....#..##...#...##.#...",
  "..#...#.#....#....#...##.......",
  "......#....#..#....#.#.........",
  "..........#.#.#...##....#......",
  "...#....................#..#...",
  "...#....###....#..#.....#.....#",
  "..#....#....#..#.#..##.#...#...",
  "..#.##....##.....#.#........#..",
  "#.....###..#.#.#...#..#....#...",
  "........#..#.#..#........##....",
  ".##....#................##.#.##",
  "..##...#.#.#.....##..#....#....",
  "....#..#....#..#........#..##..",
  "...#...##....#....#..##......#.",
  "##........#...#.....#.....#...#",
  ".#......#....##...#.........##.",
  "##........#...#.....#..#...#.#.",
  "...##..#..#.....#..###.#..#....",
  "....#..#..............#.......#",
  ".......#.##...#......#.###.....",
  "#........##..##....#.#.#.......",
  "#.#..##.#.......#..##.....###..",
  ".....##...#..#.....#...........",
  "...#..#..#......#...#.#........",
  ".#....#....#.#.....#.....#....#",
  "...#..#...#..#.##.#......#.#.#.",
  "..##....#..#..#.....#....#....#",
  "...#....#.##.#..#.###......#...",
  ".......#..#.....#.......#..#...",
  "..###.#####..#..##.#.........#.",
  "...#.......##...#.#..#.#......#",
  "....#...#.###..#..........#....",
  "...........#...#..##........#..",
  ".......#...#....#....#.#..#....",
  ".........#..........#...#....##",
  ".##.........##..#.......##.#...",
  "........#......###...##...#.#.#",
  "#.#...##.##...........#...#.#..",
  ".....###...#..##......#..#.....",
  "#.#.....#.#....##..........#..#",
  "#..#.......#.#.........####....",
  "#.#...#.....#........#.....#..#",
  ".....#..#.#.###.....#.#.###....",
  ".###..#......##..#..#..........",
  "#....#.#......#...#.##......#..",
  "..#.........##.#.....#.........",
  "...#....#.....##.#..#..##.#..#.",
  "##.....#.#..#.#....#......#....",
  "....###.#.....#.......#..#.#...",
  "#.....##.....##...........#....",
  "..........#..#......#.##...#...",
  "#...#.###....##....#.###..###..",
  "##........#.#...#..#.........#.",
  "##........##.......#.....###...",
  ".##....###........#..##...#...#",
  "......#..##....##.....#..#.#...",
  ".....#..##..#.......#.......#..",
  "......#....#.......##.#........",
  ".#.####.#..#......#..#.........",
  ".##..#....#...##.#....#....#...",
  "..#..#..#####.........#...#....",
  "....#.....#.#.#.#...#.#......#.",
  "....#...#.#..#.##...#...#......",
  "..#...#...#...#...#..#.#.##..#.",
  "..#......#.#.#.##.##.##..#.....",
  "#..###......#.##...#....#.##.#.",
  ".#.#.......##..##....##...##.#.",
  ".##......##....##.#.......#...#",
  "..#...#...................#....",
  ".#...#.......######.....#.#..##",
  "......#.##.....#.#.............",
  "...........##.#........#..#....",
  "#.............#.#.....#....##..",
  "#...........#...#..###.....#...",
  "....#.......#.#..#..#.#........",
  "......#...##.......#..##....#..",
  "......#.##.##..#........#.#...#",
  ".#..#...##...................#.",
  ".#.............#...#.#.#.#...#.",
  ".........#.....#........#.#....",
  "#..#...#.............##.#.....#",
  "...#.#....#...##............#..",
  "..#...#.##.###.#.....#......##.",
  "...#.#..###...#.#............#.",
  "...#....#........#.#...........",
  ".#......#.#.#.........#.#....#.",
  "....#..#......#.##.....#.#.....",
  "..#..###....#....#.........###.",
  "#..#.#....##.#....#.##..#......",
  "#..#.....#.#.....##..#.##......",
  "......#...#.#.............#..#.",
  "#.#....#.#..#...#......#.#.....",
  "..#.........#.#....#...#.......",
  ".#..#.#...#....#...#......#...#",
  ".......#........#.#..#..#...#..",
  "..##.#......#..##.##.#..#..#...",
  ".##...#....##.....#.....#...##.",
  "#.....##.#....#.#......##..#...",
  ".......#.#..#...#.......#.#...#",
  "..#...#.......#...#..##........",
  "#....##..#...#..#.#......#..#.#",
  "##.#....#....#....#...#..#.##..",
  "###........#.#..#..#......#....",
  ".#......#.....#....#.#..#...#..",
  ".#.....#.....#...##.......#..##",
  "#..##.#..#..........#..........",
  "...#.##.........#.#.##.#.......",
  ".#..#...............#...#.#.#..",
  ".....#.#.....#...####..#.....#.",
  ".#....#.##..##...#...##.#...#.#",
  "....#......##...#.#.#.....#.##.",
  "#...#..#.#...#.#.....##...#....",
  "..#..#....##..###......#..#....",
  ".........#......##.....##....#.",
  ".......#....#...#........###...",
  ".....#..#..#...#...#......#....",
  "..#..#...#.....#.....###..#.###",
  "............#.#..#..#....#.....",
  "...#..#...###.......#.......#..",
  "#.........#........#.....##....",
  ".#.#........#.....#........###.",
  "....#.##.#...#.#.#.....#....#..",
  ".##...#..#.......#.#...........",
  "##...#.##...#...........#.....#",
  "##....#.#.....##..#.......#....",
  "##....#...#....#..#.......####.",
  "......#...#..#.....#.#....#...#",
  ".......#.....#..###............",
  "#.#.#..#.....#.............#..#",
  ".#..#.....##.....#...#.......##",
  "..#.##........##...........#.#.",
  "....##.#..###.#.........#...##.",
];

function toboggan(slope, right, down) {
  let x = 0;
  let y = 0;
  let count = 0;
  while (y < slope.length) {
    if (slope[y].charAt(x % slope[0].length) === "#") {
      count++;
    }
    x += right;
    y += down;
  }
  return count;
}

let final =
  toboggan(slope, 3, 1) *
  toboggan(slope, 1, 1) *
  toboggan(slope, 5, 1) *
  toboggan(slope, 7, 1) *
  toboggan(slope, 1, 2);
console.log(final);
