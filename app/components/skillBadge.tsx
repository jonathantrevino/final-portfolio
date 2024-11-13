import Image from 'next/image'
import React from 'react'

const SkillBadge = ({ image_url, title }: { image_url: string, title: string }) => {
  return (
    <span className='badge items-center self-center badge-lg !rounded-md badge-neutral !py-2 infline-flex  gap-2'>
      <Image className='rounded-full' src={image_url} width={20} height={20} alt={`${title} logo`} />
      {title}
    </span>
  )
}

export default SkillBadge
