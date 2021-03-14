import React from 'react'
import s from './data.json'
import './app.css'
import Header from '../../React_Project/src/components/Header'
import Layout from '../../React_Project/src/components/Layout'
import Footer from '../../React_Project/src/components/Footer'

import PICACHU from '../../React_Project/src/assets/bg1.jpg'
import PokemonCard from './components/PokemonCard'

const bgImg = 'https://s3.us-west-2.amazonaws.com/secure.notion-static.com/0a722b8b-d83c-42ff-9044-2019adf1ff3b/card-back-side.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAT73L2G45O3KS52Y5%2F20210314%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20210314T135132Z&X-Amz-Expires=86400&X-Amz-Signature=baa0ce1048e79da08dbf2bbea3324237fdad78c6a47fb6ab8eadfa35453e6f3f&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22card-back-side.jpg%22'
 
function App() {
    return (
        <div className='app'>
            <Header title='Something' descr='something else'/>
            <Layout title='Somethin for layout' descr='somethin else for layout' urlBg={PICACHU} />
            <Layout title='Somethin for layout' descr='somethin else for layout' colorBg={'red'}/>
            <div className="flex">
                {
                    s.map(item=><PokemonCard key={item.id} {...item} bg={bgImg}/>)
                }
            </div>
            <Layout title='Somethin for layout' descr='somethin else for layout' urlBg={PICACHU}/>
            <Footer />
        </div>
    )
}

export default App