import HeroSection from "./components/HeroSection";
import Navbar from "./components/navbar"
import Card from './components/card'


export default function Home() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <main className="max-w-6xl mx-auto mt-10 px-4">
        <h1 className="text-4xl font-bold text-blue-500 text-center mb-8">Certified Cloud Applied Generative AI Engineer 
          (GenEng) and Solopreneur Developing Billion-Dollar Valued Developers and Solopreneurs</h1>
          <h3 className="font-bold text-black text-center mb-8">The pace of technological change is accelerating, big players like Microsoft, Amazon, Google, and OpenAI are winning by providing infrastructure, large AI foundation models, frameworks, 3D Metaverse experiences, and massive distribution networks. Solopreneurs trained in this program will win by automating work typically outsourced to employees, by directly connecting to customers by eliminating the middleman, and by developing vertical metaverses, thus paving the way for the first billion-dollar valued solopreneur businesses. This program has the objective to train this new breed of billion-dollar solopreneurs. These solopreneurs will adopt the ultra-lean business model and work independently and will not need to hire employees or other team members.</h3>
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cardData.map((card, index) => (
            <Card 
              key={index} 
              title={card.title} 
              content={card.content} 
              imageUrl={card.imageUrl}
            />
          ))}
        </div>
      </main>
    </div>
  )
}
const cardData = [
  {  
    imageUrl: "/image/image1.jpg"
  },
  { 
    imageUrl: "/image/image2.jpg"
  },
  { 
   imageUrl: "/image/image3.jpg"
  },
  
]