const MazeRunner = artifacts.require("MazeRunner");

module.exports = function(deployer) {
  deployer.deploy(MazeRunner);
};
