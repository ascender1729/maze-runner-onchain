import React, { useEffect, useState } from "react";
import Web3 from "web3";
import MazeRunnerContract from "./contracts/MazeRunner.json";
import MazeGrid from "./components/MazeGrid";

function App() {
  const [web3, setWeb3] = useState(null);
  const [accounts, setAccounts] = useState([]);
  const [contract, setContract] = useState(null);
  const [mazeSize, setMazeSize] = useState(5);
  const [maze, setMaze] = useState([]);
  const [playerPosition, setPlayerPosition] = useState({ x: 0, y: 0 });
  const [finishPosition, setFinishPosition] = useState({ x: 4, y: 4 });

  useEffect(() => {
    initializeWeb3();
    initializeContract();
  }, []);

  const initializeWeb3 = async () => {
    if (window.ethereum) {
      try {
        const web3Instance = new Web3(window.ethereum);
        await window.ethereum.enable();
        setWeb3(web3Instance);
      } catch (error) {
        console.error("Error initializing web3 provider:", error);
      }
    } else {
      console.error("No web3 provider detected");
    }
  };

  const initializeContract = async () => {
    try {
      const networkId = await web3.eth.net.getId();
      const deployedNetwork = MazeRunnerContract.networks[networkId];
      const mazeRunnerInstance = new web3.eth.Contract(
        MazeRunnerContract.abi,
        deployedNetwork && deployedNetwork.address
      );
      setContract(mazeRunnerInstance);
    } catch (error) {
      console.error("Error initializing contract:", error);
    }
  };

  const generateMaze = async () => {
    try {
      await contract.methods.generateMaze(mazeSize).send({ from: accounts[0] });
      const mazeData = await contract.methods.getMaze().call();
      setMaze(mazeData);
    } catch (error) {
      console.error("Error generating maze:", error);
    }
  };

  const movePlayer = async (newX, newY) => {
    try {
      await contract.methods.movePlayer(newX, newY).send({ from: accounts[0] });
      const playerPos = await contract.methods.getPlayerPosition().call();
      setPlayerPosition({ x: playerPos.x, y: playerPos.y });
    } catch (error) {
      console.error("Error moving player:", error);
    }
  };

  const resetGame = async () => {
    try {
      await contract.methods.resetGame().send({ from: accounts[0] });
      setMaze([]);
      setPlayerPosition({ x: 0, y: 0 });
    } catch (error) {
      console.error("Error resetting game:", error);
    }
  };

  const handleKeyPress = (event) => {
    const { key } = event;
    let newX = playerPosition.x;
    let newY = playerPosition.y;

    switch (key) {
      case "ArrowUp":
        newY = playerPosition.y - 1;
        break;
      case "ArrowDown":
        newY = playerPosition.y + 1;
        break;
      case "ArrowLeft":
        newX = playerPosition.x - 1;
        break;
      case "ArrowRight":
        newX = playerPosition.x + 1;
        break;
      default:
        return;
    }

    if (newX >= 0 && newX < mazeSize && newY >= 0 && newY < mazeSize) {
      movePlayer(newX, newY
