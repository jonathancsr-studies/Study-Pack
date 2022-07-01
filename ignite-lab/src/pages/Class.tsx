import { Header } from "../components/Header";
import { LessonCard } from "../components/LessonCard";
import { Sidebar } from "../components/Sidebar";
import { VideoPlayer } from "../components/VideoPlayer";

export function Class() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex flex-1">
        <VideoPlayer />
        <Sidebar />
      </main>
    </div>
  )
}