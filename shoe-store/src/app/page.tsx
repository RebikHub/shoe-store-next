import Image from 'next/image'
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import AboutLayout from './about/layout';

export default function Home() {
  return (
    <>
      <Header/>
        <main className="container">
          <div className="row">
            <div className="col">
              <div className="banner">
                <Image
                          className="max-w-full h-auto"
                          width={300}
                          height={200}
                          alt="К весне готовы!"
                          priority
                src='/images/banner.png' />

                <h2 className="banner-header">К весне готовы!</h2>
              </div>
            </div>
          </div>
        </main>
      <Footer/>
    </>
  )
}