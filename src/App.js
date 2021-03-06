import React from 'react'


import Header from '../../React_Project/src/components/Header'
import Layout from '../../React_Project/src/components/Layout'
import Footer from '../../React_Project/src/components/Footer'

import PICACHU from '../../React_Project/src/assets/bg1.jpg'


 function App() {
    return (
        <div className='app'>
            <Header title='Something' descr='something else'/>
            <Layout title='Something for layout' descr='something else for layout' urlBg={PICACHU} />
            <Layout title='Something for layout' descr='something else for layout' colorBg={'red'}/>
            <Layout title='Something for layout' descr='something else for layout' urlBg={PICACHU}/>
            <Footer />
        </div>
    )
}

export default App