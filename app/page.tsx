import NavBar from "@/components/nav-bar";

const items = [
  {
    title: 'Files',
    link: '/file-system'
  },
  {
    title: 'Notes',
    link: '/note-system'
  },
  {
    title: 'Drive',
    link: '/drive'
  }
]

export default function Home() {
  return (
    <div>
      <div>
        <NavBar/>
        <main className="flex flex-col items-center justify-center text-3xl lg:text-4xl">
          { items.map( item => (
            <a
              key={ item.title }
              href={ item.link }
              className="mt-4 text-secondary-foreground bg-primary p-4 rounded-full hover:underline w-full text-center"
            >
              { item.title }
            </a>
          ) ) }
        </main>
      </div>


    </div>
  );
}
