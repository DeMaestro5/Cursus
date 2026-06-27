import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Courses from './pages/Courses';
import Landing from './pages/Landing';
import type { User } from './types/user.types';

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
      </Routes>
    </BrowserRouter>
  );
}
// watcher test
