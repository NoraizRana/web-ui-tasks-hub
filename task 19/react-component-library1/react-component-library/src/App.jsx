import React, { useState, useEffect } from "react";
import Button from "./components/Button";
import Card from "./components/Card";
import Modal from "./components/Modal";
import DarkModeToggle from "./components/DarkModeToggle";

export default function App() {
  const [modalOpen, setModalOpen] = useState(false);
  const [dark, setDark] = useState(() => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("theme");
      if (saved) return saved === "dark";
      return window.matchMedia("(prefers-color-scheme: dark)").matches;
    }
    return false;
  });

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
    localStorage.setItem("theme", dark ? "dark" : "light");
  }, [dark]);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950 text-gray-900 dark:text-gray-100 transition-colors">
      <nav className="flex items-center justify-between py-6 px-6 sm:px-10 max-w-4xl mx-auto">
        <div className="text-2xl font-bold tracking-tight text-primary dark:text-blue-400">
          React Component Library
        </div>
        <DarkModeToggle isDark={dark} toggle={() => setDark((d) => !d)} />
      </nav>

      <main className="max-w-4xl mx-auto py-6 px-4 space-y-14">
        {/* Button Demo */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">Buttons</h2>
          <div className="flex gap-4 flex-wrap">
            <Button variant="primary">Primary</Button>
            <Button variant="secondary">Secondary</Button>
            <Button variant="outline">Outline</Button>
            <Button loading>Loading</Button>
            <Button disabled>Disabled</Button>
          </div>
        </section>

        {/* Card Demo */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">Card</h2>
          <div className="grid sm:grid-cols-2 gap-6">
            <Card
              image="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80"
              title="Beautiful Landscape"
              description="A scenic card with image, title, and description."
            >
              <Button variant="primary" className="mt-4">Explore</Button>
            </Card>
            <Card title="No Image Card" description="Card without an image.">
              <span className="text-sm text-gray-400 dark:text-gray-300">Custom children slot!</span>
            </Card>
          </div>
        </section>

        {/* Modal Demo */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">Modal</h2>
          <Button onClick={() => setModalOpen(true)} variant="primary">
            Open Modal
          </Button>
          <Modal open={modalOpen} onClose={() => setModalOpen(false)} title="Demo Modal">
            <p>This is a customizable modal component.</p>
            <div className="mt-4 flex justify-end">
              <Button onClick={() => setModalOpen(false)} variant="secondary">
                Close
              </Button>
            </div>
          </Modal>
        </section>
      </main>

      <footer className="py-8 text-center text-sm text-gray-400 dark:text-gray-600">
        &copy; {new Date().getFullYear()} React Component Library by YourName
      </footer>
    </div>
  );
}