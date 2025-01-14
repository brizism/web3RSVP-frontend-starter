import abiJSON from "./Web3RSVP.json";
import { ethers } from "ethers";

function connectContract() {
  const contractAddress = "0xF14155069D10076CE5e8E177eA3a8b5Cbc67aE49";
  const contractABI = abiJSON.abi;
  let rsvpContract;
  try {
    const { ethereum } = window;

    if (ethereum.chainId === "0x13881") {
      //checking for eth object in the window, see if they have wallet connected to Polygon Mumbai network
      const provider = new ethers.providers.Web3Provider(ethereum);
      const signer = provider.getSigner();
      rsvpContract = new ethers.Contract(
        contractAddress,
        contractABI,
        signer
      ); // instantiating new connection to the contract
    } else {
      console.log("Ethereum object doesn't exist!");
    }
  } catch (error) {
    console.log("ERROR:", error);
  }
  return rsvpContract;
}

export default connectContract;
