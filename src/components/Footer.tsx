import Image from "next/image"

const Footer = () => {
  return (
    <>
    <div className="w-full bg-gray-300 mt-12 p-4 flex flex-col gap-8">
      <div className="w-full flex justify-center items-center flex-col md:flex-row md:justify-around gap-8">
                {/* left */}
        <div className="flex flex-col gap-8 justify-between mb-12 lg:px-10">
          <h1 className="font-semibold">Lama</h1>
          <div className="flex flex-col gap-8">
            <p>3251 Winding way central plaza Willowbrook CA 90210, Unite states</p>
            <p>Hello@Yemil.Dev</p>
            <p>+1 234-567-890</p>
              {/* redes sociales */}
            <div className="flex justify-start gap-4">
              <Image src='/facebook.png' alt="" width={16} height={16}/>
              <Image src='/instagram.png' alt="" width={16} height={16}/>
              <Image src='/pinterest.png' alt="" width={16} height={16}/>
              <Image src='/youtube.png' alt="" width={16} height={16}/>
            </div>
          </div>
        </div>



          {/* Center */}
        <div className="hidden lg:flex">
          <div className="flex gap-8">
            <div className="flex flex-col justify-between gap-8">
              <h2 className="font-bold">Company</h2>
              <ul className="flex flex-col gap-4">
                <li>About Us</li>
                <li>Careers</li>
                <li>Affiliates</li>
                <li>Blog</li>
                <li>Contact Us</li>
              </ul>
            </div>

            <div className="flex flex-col justify-between gap-8">
              <h2 className="font-bold">Shop</h2>
              <ul className="flex flex-col gap-4">
                <li>New Arrivals</li>
                <li>Accesories</li>
                <li>Men</li>
                <li>Women</li>
                <li>All Product Us</li>
              </ul>
            </div>

            <div className="flex flex-col justify-between gap-8">
              <h2 className="font-bold">Help</h2>
              <ul className="flex flex-col gap-4">
                <li>Customer Services</li>
                <li>My Account</li>
                <li>Find a Store</li>
                <li>Legal & Privacy</li>
              </ul>
            </div>
          </div>
        </div>
        



          {/* right */} 
        <div className="flex items-center justify-center lg:px-10">
          <div className="flex flex-col justify-between gap-14">
            <h1 className="font-semibold">Suscribe</h1>
            <div className="flex flex-col justify-between gap-4">
              <p>Be the firts to get the lastest news about trends,promotions and much more</p>
              <div className="flex">
                <input type="text" placeholder="Email Addres"/>
                <button className="p-3 bg-red-500 text-white">Join</button>
              </div>
              <p className="font-semibold">Secure Payments</p>
              <div className="flex gap-4">
                <Image src='/visa.png' alt="" width={40} height={40}/>
                <Image src='/paypal.png' alt="" width={40} height={40}/>
                <Image src='/discover.png' alt="" width={40} height={40}/>
                <Image src='/mastercard.png' alt="" width={40} height={40}/>
                <Image src='/skrill.png' alt="" width={40} height={40}/>
              </div>
            </div>
          </div>
        </div> 
       </div> 


      <div className="text-sm flex flex-col gap-4 md:flex-row justify-center">
        <p>&copy; 2024 Yemil Shop</p>
        <p>Languaje <span className="font-bold">Unite state</span> | English</p>
        <p>Currency <span className="font-bold">$ USD</span></p>
      </div>
    </div>
    </>
  )
}

export default Footer