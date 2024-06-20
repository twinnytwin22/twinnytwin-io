"use client";
import { useState } from "react";
import Link from "next/link";
// import { polygonMumbai } from 'viem/chains';
// import 'viem/window';
// import { ethers, } from "ethers";
// import { Address, useAccount } from "wagmi";
// import { urlFor } from "lib/hooks/sanityImage";
// import { ActiveIndicator, NonActiveIndicator, UpcomingIndicator } from "ui/Misc/Indicator";
// import { useSession } from "next-auth/react";
// import CrossMint from "ui/Buttons/Crossmint/CrossMint";
// import { IPFSRenderer } from "ui/Misc/IPFSRenderer";
// import { createPublicClient, createWalletClient, http, parseAbi, parseEther, parseGwei } from 'viem';
// export const walletClient = createWalletClient({
  //account,
//   chain: polygonMumbai,
//   transport: http(
//     'https://polygon-mumbai.g.alchemy.com/v2/4NyYhTtu_4zARxhQQvw6aXni7lkwtBZE'
//   )
// });

// export const publicClient = createPublicClient({
//   chain: polygonMumbai,
//   transport: http(
//     'https://polygon-mumbai.g.alchemy.com/v2/4NyYhTtu_4zARxhQQvw6aXni7lkwtBZE'
//   )
// });


import { toast } from "react-toastify";
import { getSanityImage } from "@/lib/providers/sanity/lib/image";
import Image from "next/image";
import { ConnectToMint as ConnectButton } from "./ConnectToMint";
// import { DecentSDK, edition } from "@decent.xyz/sdk";
// import LaunchCountdown from "ui/Misc/Countdown/LaunchCountdown";
// import { TARGET_DATE } from "ui/Misc/Countdown/targetDate";
// import { PoweredByDecent } from "ui/Decent/PoweredByDecent";
// import { MintPrice } from "ui/Misc/MintPrice";
// import { allowlist } from "lib/utils/allowlist";

function NFTMinter({ nft, data }: any) {

 // alert(JSON.stringify(nft))
  /// Grabbing User Session and Address
  // const { data:session, status } = useSession();
  // const { address } = useAccount();
  // const isConnected = !!address;

  // const {data:signer} = useSigner();
//console.log(session?.address)
    /// Web3 Connection 
  const RPC = 'https://ethereum-mainnet-rpc.allthatnode.com'
  
  /// Mint Amount and Price Data - Pulls Price from Sanity
  const [mintAmount, setMintAmount] = useState(1);
  const price: number = nft?.mintPrice;

  // const isCrib = allowlist.find((item: any) =>  item.cribAddress.toLowerCase() === address?.toLowerCase());
  // console.log(isCrib)

  ///Images - Pulling from Sanity
  const image = getSanityImage(nft?.nftImage)
  const bgImage = getSanityImage(nft?.nftImage)

  ///Contract Information - Pull Mint status from Sanity
  const contractAddress = nft?.contract;
  const chainId = nft?.chain == 'eth' ? 1 : 137
  const chainSymbol = nft?.chain == 'eth' ? 'ETH' : 'MATIC'
  const sanityAbi = nft?.abiURL;
  const mintStatus: string = nft?.mintStatus
  const hasCrossMint = nft?.crossMintId
  const tags = [...nft?.tags];
  const decentSDK = tags.includes("Decent.xyz");

  /// Fetching Contract ABI - Stored in Sanity
  async function getABI() {
    const res = await fetch(sanityAbi);
    return res.json();
  }


const testMint = async () => {
  // const mintPrice = isCrib ? 0.0 : price
  // const abi: any = await getABI()
  
  // const {result} = await publicClient.simulateContract({
  //  // maxFeePerGas: parseGwei('20'),  
  //   abi: parseAbi([abi]),
  //   account: address!,
  //   address: contractAddress!,
  //   functionName: "mint" as never
  // })



}
 const decentMint = async () => {
  // if (signer) {
  //   try { 
  //     const sdk = new DecentSDK(chainId, signer);
  //     const decentNFT = await edition.getContract(sdk, contractAddress); 
  //     const mintPrice = isCrib ? 0.0 : price
  //     const response = await decentNFT.mint(address, Number(mintAmount), {
  //       value: ethers.utils.parseEther((mintPrice * mintAmount).toString()),
  //     });
  //     console.log("response: ", response);
  //   } catch (err) {
  //     console.log("error: ", err);
  //     toast("Please update your balance and try again");
  //     }
  // }
}



  /// Normal Mint Function takes in the const price
  async function handleMint() {
    // if (signer) {
    //   const abi = await getABI();
    //   const sdk = new DecentSDK(chainId, signer);
    //   const cribNFT = new ethers.Contract(contractAddress, abi.abi);
    //   try {
    //     const response = await cribNFT.publicPurchase(address, Number(mintAmount), {
    //       value: ethers.utils.parseEther((price * mintAmount).toString()),
    //     });
    //     console.log("response: ", response);
    //   } catch (err) {
    //     console.log("error: ", err);
    //     toast("Please update your balance and try again");
    //   }
    // }
  }
  
  
  
  /// This handles free claims for TWINESIS Holders -twinesisPurchase will never change.
  async function handleClaim() {
  //   if (signer) {
  //   const abi = await getABI();
  //   const sdk = new DecentSDK(chainId, signer);
  //   const cribNFT = new ethers.Contract(contractAddress, abi.abi);
  //   try {
  //     const response = await cribNFT.twinesisPurchase(
  //       address?.toString(),
  //      Number(mintAmount),
  //       {
  //         value: ethers.utils.parseEther((0.0 * mintAmount).toString()),
  //       }
  //     );
  //     console.log("response: ", response);
  //   } catch (err) {
  //     console.log(address);
  //     toast("Please update your balance and try again");
  //   }
  // }
}
  
  /// This handles the minting of a TWINESIS, very unique set up, so I had to hard code - OPEN FOR FEEDBACK AND PR
  async function handleTwinesisMint() {
    // try {
    //   if (signer) {
    //     const tPrice = 0.06;
    //     const abi = await getABI();
    //     const sdk = new DecentSDK(chainId, signer);
    //     const cribNFT = new ethers.Contract(contractAddress, abi.abi);
  
    //     let tx;
    //     if (mintAmount == 1) tx = await cribNFT.mintTwin({ value: ethers.utils.parseEther(tPrice.toString()) });
    //     else if (mintAmount > 1) tx = await cribNFT.mintTwins(mintAmount, { value: ethers.utils.parseEther((tPrice * mintAmount).toString()) });
  
    //     const receipt = await tx.wait();
    //     receipt.status === 1 ? console.log(`Twinesis minted! https://etherscan.com/tx/${tx.hash}`) : toast("Please update your balance and try again");
    //   }
    // } catch (error) {
    //   toast("Please update your balance and try again");
    //   console.log(error);
    // }
  }
  
  

  

  /// This handles quantity selection on the Minter
  const handleDecrement = () => {
    if (mintAmount <= 1) return;
    setMintAmount(mintAmount - 1);
  };
  const handleIncrement = () => {
    if (mintAmount >= 100) return;
    setMintAmount(mintAmount + 1);
  };

  return (
    <div
      className="bg-cover w-full max-w-screen mx-auto justify-items-center content-center"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundPosition: "center",
      }}
    >
      <div
        className="bg-black bg-opacity-75 w-full"
        style={{ backdropFilter: "blur(8px)" }}
      >
        <div className="grid xl:max-w-7xl max-w-screen px-10 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 gap-8 lg:grid-cols-12 justify-items-center content-center items-center">
          <div className="mx-auto place-self-center place-items-center md:mx-auto md:col-span-12 sm:col-span-12 lg:col-span-6 h-96">
            <div className="w-full content-center justify-center items-center relative">
              {/* <IPFSRenderer image={image} data={data} /> */}
              <Image src={image} width={380} height={380} alt={nft.title}/>
            </div>
          </div>
         
          <div className="flex relative flex-col lg:mt-0 md:col-span-12 sm:col-span-12 lg:col-span-6 justify-around gap-5 mx-auto items-center">
            <h1 className="text-3xl md:text-5xl font-bold text-white text-center uppercase">
              {nft.title}
            </h1>
            <div>
              <ConnectButton/>
            </div>
                        <div className="flex items-center content-center justify-center text-white">
              <h6 className="text-sm uppercase text-white tracking-tight pr-5">
                {" "}
              </h6>
              {/* {mintStatus === "upcoming" && <div className="flex items-center text-white"><UpcomingIndicator/><MintPrice mintPrice={price}/></div>
           } */}
              {/* {mintStatus === 'active' && (
                <>
                  <ActiveIndicator />
                  <MintPrice mintPrice={price} chainSymbol={chainSymbol}/>
                </>
              )}{" "} */}
              {/* {mintStatus === 'inactive' && <NonActiveIndicator />} */}
            </div>
            {/* {mintStatus === "upcoming" && <LaunchCountdown targetDate={TARGET_DATE}/>} */}
            
            {status === "authenticated" && mintStatus === "active" ? (
              <>
                {/* {!signer && ( */}
                  <div>
                    <p className="text-center text-xs text-white block">
                      If you are seeing this message please install the metamask
                      browswer extension or open this page in your crypto wallet
                      browser
                    </p>
                  </div>
                {/* )} */}
                <>
                  {/* {isConnected && ( */}
                    <>
                      <div className="flex flex-row justify-center">
                        <button
                          className="text-white bg-red-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5  dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800"
                          onClick={handleDecrement}
                        >
                          -
                        </button>
                        <input
                          className=" w-lg h-10 text-center font-bold"
                          readOnly
                          type="number"
                          value={mintAmount}
                        />
                        <button
                          className="text-white bg-red-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800"
                          onClick={handleIncrement}
                        >
                          +
                        </button>
                      </div>
                      <div className="flex flex-row items-center justify-center space-between">
                        <button
                          className="text-white bg-red-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800"
                          onClick={
                            nft.title == "Twinesis" 
                              ? ( handleTwinesisMint )
                              : (  decentSDK ? decentMint : handleMint )
                           
                          }
                        >
                          MINT
                        </button>
                        {nft.slug.current === "super-twinny-sabet" ? (
                          <button
                            className="text-white bg-red-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800"
                            onClick={handleClaim}
                          >
                            CLAIM
                          </button>
                        ) : (
                          ""
                        )}
                      </div>
                    </>
                  {/* )} */}
                </>
              </>
            ) : (
              <div className="flex content-center items-center justify-center pt-10">
                {mintStatus === "active" ? (
                  <p className="text-white">Please sign-in to collect</p>
                ) : (
                  ""
                )}
              </div>
            )}
            {/* {mintStatus === 'active' &&
            <>
            {hasCrossMint && <CrossMint id ={hasCrossMint} price={price} />}</>
            }
            {decentSDK &&  <PoweredByDecent contractAddress={contractAddress}/>
          } */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default NFTMinter;
