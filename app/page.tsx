import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center p-6 md:p-10">
      <main className="w-full max-w-md mx-auto flex flex-col items-center gap-12 mt-16 md:mt-24">
        <h1 className="text-3xl md:text-4xl font-bold text-center decoration-4 underline-offset-8 mb-8">
          Das Abstimmungstool
        </h1>

        <div className="w-full flex flex-col items-center gap-12">
          <div className="text-center">
            <p className="text-xl mb-6">Hier kannst du eine neue:</p>
            <Link href="/voting-create" className="block">
              <button className="w-full max-w-xs px-8 py-4 rounded-full border-2 border-black hover:bg-black hover:text-white transition-colors duration-200 font-medium text-lg">
                Abstimmung erstellen
              </button>
            </Link>
          </div>

          <div className="text-center w-full">
            <p className="text-xl mb-6">oder einer bestehenden</p>
            <Link href="/voting-join-existing" className="block">
              <button className="w-full max-w-xs px-8 py-4 rounded-full border-2 border-black hover:bg-black hover:text-white transition-colors duration-200 font-medium text-lg">
                Abstimmung beitreten
              </button>
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}

