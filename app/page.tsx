import Image from 'next/image'

export default function Home() {
  return (
    <main>
     
      <div style={{width:"100%",height:"60vh"}}>
         <Image
          className="mainImage"
          src="/assets/djsuriya.jpg"
          alt="Next.js Logo"
          fill={true}
          priority
        />
      </div>

   
    </main>
  )
}
