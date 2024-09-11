import { Tag as TagType} from '@prisma/client'
import React from 'react'

const Tag = ({tag}: {tag: TagType}) => {
  return (
    <div className='border-[1px] block border-black p-1 rounded-lg'>{tag.name}</div>
  )
}

export default Tag