import Image from 'next/image'
import React from 'react'
import { getSanityImage } from '@/lib/providers/sanity/lib/image'
import { ButtonGroup } from 'ui/Components/LinkModal'
import { getLinks, getSongs } from 'utils/db'
export const dynamic = 'force-dynamic'
async function page({params}:{params: {id: string}}) {
  const [songs, links] = await Promise.all([
    getSongs(), getLinks()
  ])
  const {id} = params
  const song = songs.find((song: any) => song._id === id)
console.log(songs, )
const props = {
  links, 
  song

}
  return (
    <>
    {song && (
      <div className="fixed w-screen h-screen  z-20 flex items-center overflow-y-auto">
        <div className="bg-black opacity-50 fixed z-20 h-screen w-screen overflow-visible" />
        <div className="absolute inset-0 overflow-hidden bg-black opacity-90">
          <Image
            alt={song?.title}
            src={getSanityImage(song.coverImage)}
            fill
            className="object-cover scale-150 blur"
          />
        </div>
        
        <div className="bg-[#507880] border border-zinc-600 rounded p-5 max-w-md mx-auto min-h-72 relative z-30 -mt-36">
          <ButtonGroup {...props} />
        </div>
      </div>
    )}
  </>
  )
}

export default page

