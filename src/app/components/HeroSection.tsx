import Image from "next/image"
const HeroSection = () => {
    return (
      <main className="flex gap-8 mx-10">
          <div className="text-2xl flex items-center w-1/2 bg-white text-black font-bold h-96"><h1>Governor Sindh Kamran Khan Tessori Certified Cloud 
            Applied Generative AI Engineer (GenEng) Earn up to $5,000 / month
            Now admissions are open in Hyderabad</h1></div>
          <div className="w-12/24 bg-white h-100">
          <img src="./image/cover.png" alt="logo.png" width={800} height={600}/></div>
      </main>
  
      )
  }
  
  export default HeroSection