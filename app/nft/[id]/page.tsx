import { getAllNFTs, getAllSlugs } from '@/utils/db'
import React from 'react'
import NFTMinter from 'ui/Components/CollectionMinter'
import CollectionNav from 'ui/Components/collectionNav'
export const dynamic = 'force-dynamic'
async function Page({ params }: { params: { id: string } }) {
    let nft = null
    const nfts = await getAllNFTs()

    if (nfts){
      nft = nfts.find((nft: {contract: string}) => nft.contract === params.id);
      console.log(nft)
    }
  return (
    <main className="flex min-h-screen flex-col items-center top-16 relative w-full mx-auto ">

   <NFTMinter nft={nft}/>
   <CollectionNav/>
    </main>
  )
}

export default Page