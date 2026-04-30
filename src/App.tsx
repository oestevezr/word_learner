import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Navbar from '@/components/Navbar'
import Practice from '@/pages/Practice'
import Progress from '@/pages/Progress'
import WordBank from '@/pages/WordBank'
import Settings from '@/pages/Settings'

export default function App() {
  return (
    <BrowserRouter>
      <div className="flex flex-col min-h-dvh max-w-[480px] mx-auto">
        <main className="flex-1 pb-20">
          <Routes>
            <Route path="/" element={<Navigate to="/practice" replace />} />
            <Route path="/practice" element={<Practice />} />
            <Route path="/progress" element={<Progress />} />
            <Route path="/wordbank" element={<WordBank />} />
            <Route path="/settings" element={<Settings />} />
          </Routes>
        </main>
        <Navbar />
      </div>
    </BrowserRouter>
  )
}
