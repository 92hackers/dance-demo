/**
 * Video Card
 */

import Link from "next/link"
import Image from "next/image"

interface Props {
  id: string;
  desc: string;
  title: string;
  imgUrl: string;
}

export default function VideoCard({
  id, desc, title, imgUrl,
}: Props) {
  return (
    <li className="w-[385px] h-[300px] relative shadow-sm hover:shadow-lg">
      <Link href={`/videos/${id}`}>
        <Image src={imgUrl} alt='poster' fill />
        <div className="absolute bottom-0 z-50 w-[385px] bg-white p-4 border">
          <h3 className="text-lg text-[#c00]">{title}</h3>
          <p className="text-sm text-slate-500">{desc}</p>
        </div>
      </Link>
    </li>
  )
}