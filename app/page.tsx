import Image from 'next/image'
import ContactForm from './components/ContactForm/ContactForm'
import TopHeader from './components/TopHeader/TopHeader'

export default function Home() {
  return (
    <main>
     
      <div style={{width:"100%",height:"60vh",display:"flex",flexDirection:"column"}}>
         <TopHeader></TopHeader>
         <Image
          className="mainImage"
          src="/assets/djsuriya.jpg"
          alt="Next.js Logo"
          fill={true}
          priority
        />
        <ContactForm></ContactForm>
      </div>

   
    </main>
  )
}
