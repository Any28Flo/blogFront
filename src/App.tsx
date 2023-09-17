import './App.css'

import { lazy, Suspense } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import Spinner from './components/layout/Spinner';
import Wrapper from './components/layout/Wrapper';


const Home = lazy(() => import('./pages/Home'));
const DetailPost = lazy(() => import('./pages/DetailPost'));
const App = () => {

  return (
    <Suspense fallback={<Spinner/>}>
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
