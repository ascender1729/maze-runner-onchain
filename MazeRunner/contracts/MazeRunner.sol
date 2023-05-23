// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "./Ownable.sol";

contract MazeRunner is Ownable {
    struct MazeCell {
        bool visited;
        bool hasWall;
    }

    uint256 public mazeSize;
    MazeCell[][] public maze;

    uint256 public playerRow;
    uint256 public playerCol;

    uint256 public finishRow;
    uint256 public finishCol;

    event MazeSizeSet(uint256 size);
    event MazeCellUpdated(uint256 row, uint256 col, bool visited, bool hasWall);
    event PlayerMoved(uint256 newRow, uint256 newCol);
    event FinishPositionSet(uint256 row, uint256 col);
    event PlayerReachedFinish();

    constructor(uint256 _mazeSize) {
        setMazeSize(_mazeSize);
    }

    function setMazeSize(uint256 _mazeSize) public onlyOwner {
        require(_mazeSize > 0, "Invalid maze size");
        mazeSize = _mazeSize;
        initializeMaze();
        emit MazeSizeSet(_mazeSize);
    }

    function initializeMaze() internal {
        maze = new MazeCell[][](mazeSize);
        for (uint256 i = 0; i < mazeSize; i++) {
            maze[i] = new MazeCell[](mazeSize);
            for (uint256 j = 0; j < mazeSize; j++) {
                maze[i][j].visited = false;
                maze[i][j].hasWall = true;
                emit MazeCellUpdated(i, j, false, true);
            }
        }
    }

    function setFinishPosition(uint256 _row, uint256 _col) public onlyOwner {
        require(_row < mazeSize && _col < mazeSize, "Invalid finish position");
        finishRow = _row;
        finishCol = _col;
        emit FinishPositionSet(_row, _col);
    }

    function updateMazeCell(uint256 _row, uint256 _col, bool _visited, bool _hasWall) public onlyOwner {
        require(_row < mazeSize && _col < mazeSize, "Invalid cell position");
        maze[_row][_col].visited = _visited;
        maze[_row][_col].hasWall = _hasWall;
        emit MazeCellUpdated(_row, _col, _visited, _hasWall);
    }

    function movePlayer(uint256 _newRow, uint256 _newCol) public {
        require(_newRow < mazeSize && _newCol < mazeSize, "Invalid move");
        require(!maze[_newRow][_newCol].hasWall, "Wall encountered");
        playerRow = _newRow;
        playerCol = _newCol;
        emit PlayerMoved(_newRow, _newCol);

        if (playerRow == finishRow && playerCol == finishCol) {
            emit PlayerReachedFinish();
        }
    }
}
