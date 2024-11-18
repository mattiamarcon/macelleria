'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { MapPin, Phone, Clock } from 'lucide-react'

interface Product{
  id:number,
  name:string,
  image:string
}

export default function MacelleriaItaliana() {
  const [activeModal, setActiveModal] = useState(false)
  const [selectedProduct, setSelectedProduct] = useState<Product>()

  const products = [
    { id: 1, name: 'Bistecca Fiorentina', image: '/bistecca.jpg' },
    { id: 2, name: 'Prosciutto di Parma', image: '/prosciutto.png' },
    { id: 3, name: 'Salame Toscano', image: '/salame.jpg' },
    { id: 4, name: 'Mortadella Bologna', image: '/mortadella.jpg' },
  ]

  return (
    <div className="min-h-screen">
      {/* Header */}
      <div className="relative h-64 lg:h-96 bg-cover bg-center bg-[url('/macelleria.jpg')]">
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center ">
          <div>
            <h1 className="text-4xl md:text-6xl font-bold text-white text-center">Macelleria Casagrande</h1>
            <h2 className="text-2xl md:text-4xl font-semibold text-white text-center">Dal 1989</h2>
          </div>
          
        </div>
      </div>

      {/* Prodotti */}
      <section className="py-16 px-4 md:px-8">
        <h2 className="text-3xl font-semibold text-center mb-8 text-black">I Nostri Prodotti</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
          {products.map((product) => (
            <Card key={product.id} className="cursor-pointer hover:shadow-lg transition-shadow flex flex-col items-center" onClick={()=>{setActiveModal(true); setSelectedProduct(product)}}>
              <CardContent className="p-4 w-full">
                <div className="mb-4 relative mx-auto">
                  <Image 
                    src={product.image} 
                    alt={product.name} 
                    width={300} height={200}
                    className='rounded-md mx-auto'
                  />
                </div>
                <h3 className="text-xl font-semibold text-black text-center">{product.name}</h3>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Storia */}
      <section className="py-16 px-4 md:px-8 bg-red-700">
        <h2 className="text-4xl font-semibold text-center mb-8 text-white">La Nostra Storia</h2>
        <p className="text-xl text-white text-center max-w-3xl mx-auto leading-9">
          Dal 1950, la nostra macelleria serve la comunità con passione e dedizione. 
          Fondata da nonno Giuseppe, abbiamo mantenuto vive le tradizioni della macelleria italiana, 
          offrendo sempre prodotti di altissima qualità e un servizio personalizzato.
        </p>
      </section>

      {/* Qualità */}
      <section className="py-16 px-4 md:px-8 bg-white">
        <h2 className="text-4xl font-semibold text-center mb-8 text-black">La Qualità dei Nostri Prodotti</h2>
        <p className="text-xl text-black text-center max-w-3xl mx-auto leading-9">
          Selezioniamo solo le migliori carni da allevamenti locali e sostenibili. 
          La nostra passione per la qualità si riflette in ogni taglio, in ogni salume e in ogni consiglio che offriamo ai nostri clienti.
        </p>
      </section>

      {/* Contatti e Mappa */}
      <section className="py-16 px-4 md:px-8 bg-red-700">
        <h2 className="text-3xl font-semibold text-center mb-8 text-white">Dove Trovarci</h2>
        <div className="flex flex-col md:flex-row justify-center items-center gap-8">
          <div className="space-y-4 text-white">
            <p className="flex items-center"><MapPin className="mr-2" /> Via Roma, 123, 00100 Roma, Italia</p>
            <p className="flex items-center"><Phone className="mr-2" /> +39 06 1234567</p>
            <p className="flex items-center"><Clock className="mr-2" /> Lun-Sab: 8:00-20:00, Dom: Chiuso</p>
          </div>
          <div className="w-full md:w-1/2 h-64 md:h-96">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11880.492291371422!2d12.4829321!3d41.9027835!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x132f61b6532013ad%3A0x28f1c82e908503c4!2sColosseo!5e0!3m2!1sit!2sit!4v1653913705832!5m2!1sit!2sit" 
              width="100%" 
              height="100%" 
              style={{border:0}} 
              allowFullScreen 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade">
            </iframe>
          </div>
        </div>
      </section>

      {/* Modal per i dettagli del prodotto */}
      {activeModal && selectedProduct && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
          <Card className="w-full max-w-md">
            <CardContent className="p-6">
              <Image src={selectedProduct.image} alt={selectedProduct.name} width={400} height={250} className="rounded-md mb-4 mx-auto" />
              <h3 className="text-2xl font-semibold text-black mb-2">{selectedProduct.name}</h3>
              <p className="text-gray-600 mb-4">Descrizione dettagliata del prodotto...</p>
              <Button onClick={() => setActiveModal(false)} className="w-full bg-rose-600 hover:bg-rose-700">Chiudi</Button>
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  )
}
