'use client'

import "./TopHeader.css"
import Image from 'next/image'

const TopHeader = () => {
    return <div className="TopHeader">
        <span className="logoText">DJ SURIYA</span>
        <Image
          className="logoImage"
          src="/assets/logo.png"
          alt="Next.js Logo"
          style={{width:"max-content"}}
          width={100}
          height={100}
          priority
        />
    </div>
}

export default TopHeader;