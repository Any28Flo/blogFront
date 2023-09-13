import './App.css'

import { lazy, Suspense } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import Wrapper from './components/Wrapper';


const Home = lazy(() => import('./pages/Home'));
const DetailPost = lazy(() => import('./pages/DetailPost'));
const App = () => {

  return (
    <Suspense fallback={<h1>Cargando...</h1>}>
    <Routes>
    <Route element={<Wrapper/>}>
     <Route index element={<Home />} />
     <Route path='/post/:id'element={<DetailPost />} />
     <Route path='*' element={<Navigate to='/' />}/>
     </Route>
   </Routes>
 </Suspense>
  )
}

export default App
