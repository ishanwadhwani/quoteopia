import '@styles/globals.css'
import Navbar from '@components/Navbar'
import Provider from '@components/Provider'

export const metadata = {
    title: "quoteopia",
    description: 'Discover and Share AI quotes'
}

const RootLayout = ({ children }) => {
  return (
    <html>
        <body>
            <Provider>
                <div className='main'>
                    <div className='gradient'/>
                </div>
                <main className = 'app'>
                    <Navbar/>
                    {children}
                </main>
            </Provider>
        </body>
    </html>
  )
}

export default RootLayout;