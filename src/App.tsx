import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Courses from './pages/course-page/Courses';
import Landing from './pages/Landing';
import type { User } from './types/user.types';
import CourseDetail from './pages/course-page/CourseDetail';
import Login from './pages/auth/Login';

const user: User = {
  id: '1',
  name: 'Stephen',
  avatar: '/src/assets/landing/whatIsImage.jpg',
  authenticated: true,
};

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Landing />} />
        <Route path='/courses' element={<Courses user={user} />} />
        <Route path='/course/:id' element={<CourseDetail user={user} />} />
        <Route path='/login' element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}
