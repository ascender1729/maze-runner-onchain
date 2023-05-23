const MazeRunner = artifacts.require("MazeRunner");

contract("MazeRunner", (accounts) => {
  let mazeRunnerInstance;

  before(async () => {
    mazeRunnerInstance = await MazeRunner.deployed();
  });

  it("should create a maze and validate player moves", async () => {
    // Create a maze
    await mazeRunnerInstance.createMaze(5, 5);

    // Get the maze dimensions
    const mazeWidth = await mazeRunnerInstance.getMazeWidth();
    const mazeHeight = await mazeRunnerInstance.getMazeHeight();

    // Validate maze dimensions
    assert.equal(mazeWidth, 5, "Maze width is incorrect");
    assert.equal(mazeHeight, 5, "Maze height is incorrect");

    // Start the game at position (0, 0)
    await mazeRunnerInstance.startGame(0, 0);

    // Move the player to the right
    await mazeRunnerInstance.movePlayer(1, 0);

    // Get the player's current position
    const playerPosition = await mazeRunnerInstance.getPlayerPosition();

    // Validate player position
    assert.equal(playerPosition.x, 1, "Player x-coordinate is incorrect");
    assert.equal(playerPosition.y, 0, "Player y-coordinate is incorrect");

    // Move the player to the bottom
    await mazeRunnerInstance.movePlayer(0, 1);

    // Get the player's current position
    const newPlayerPosition = await mazeRunnerInstance.getPlayerPosition();

    // Validate new player position
    assert.equal(newPlayerPosition.x, 1, "Player x-coordinate is incorrect");
    assert.equal(newPlayerPosition.y, 1, "Player y-coordinate is incorrect");

    // Check if the player has reached the finish line
    const hasFinished = await mazeRunnerInstance.hasFinished();

    // Validate if the player has finished the maze
    assert.equal(hasFinished, false, "Player should not have finished yet");

    // Move the player to the right and reach the finish line
    await mazeRunnerInstance.movePlayer(1, 0);

    // Check if the player has reached the finish line again
    const hasFinishedAfterMove = await mazeRunnerInstance.hasFinished();

    // Validate if the player has finished the maze
    assert.equal(hasFinishedAfterMove, true, "Player should have finished the maze");
  });
});
