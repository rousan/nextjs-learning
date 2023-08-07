export const metadata = {
  title: 'Profile page',
  description: 'This is my profile page',
  openGraph: {
    title: 'Rousan Ali',
    description: 'This is Rousan Profile',
    images: ["https://avatars.githubusercontent.com/u/12519292?v=4"]
  },
}

export default function About() {
  return (
    <main className="h-screen w-screen flex items-center justify-center">
      <div>
        <div className="flex items-center justify-center">
          <img 
            src="https://avatars.githubusercontent.com/u/12519292?v=4"
            width={200}
            height={200}
            className="rounded-full"
          />
        </div>
        <div className="text-center text-4xl my-3">
          Rousan Ali
        </div>
      </div>
    </main>
  )
}
