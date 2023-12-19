
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Homepage from './pages/Homepage'
import Hairstyles from './pages/Hairstyles'
import Appointments from './pages/Appointments'
import Signin from './pages/Signin'
import Register from './pages/Register'
import BookAppointment from './pages/BookAppointment'
import LayoutPage from './pages/LayoutPage'


import "swiper/swiper-bundle.css";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Homepage />} />
        <Route element={<LayoutPage />}>
        <Route path='hairstyles' element={<Hairstyles />} />
        <Route path='my-appointments' element={<Appointments />} />
        <Route path='sign-in' element={<Signin />} />
        <Route path='register' element={<Register />} />
        <Route path='appointments' element={<BookAppointment />} />
        </Route>
        
      </Routes>
    </BrowserRouter>
  )
}

export default App
