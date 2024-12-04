import Link from "next/link";

export default function BestehendeAbstimmung() {
  return (
    <div className="min-h-screen flex flex-col items-center p-6 md:p-10">
      <main className="w-full max-w-md mx-auto flex flex-col items-center gap-8 mt-16 md:mt-24">
        <h1 className="text-3xl md:text-4xl font-bold text-center mb-8">
          Bestehender Abstimmung beitreten
        </h1>
        <form className="w-full space-y-6">
          <div>
            <label htmlFor="votingId" className="block text-lg mb-2">Abstimmungs-ID</label>
            <input
              type="text"
              id="votingId"
              name="votingId"
              className="w-full px-4 py-2 rounded-full border-2 border-black"
              required
            />
          </div>
          <div>
            <label htmlFor="name" className="block text-lg mb-2">Dein Name</label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full px-4 py-2 rounded-full border-2 border-black"
              required
            />
          </div>
          <button type="submit" className="w-full px-8 py-4 rounded-full bg-black text-white hover:bg-gray-800 transition-colors duration-200 font-medium text-lg">
            Abstimmung beitreten
          </button>
        </form>
        <Link href="/" className="text-lg hover:underline mt-4">
          Zurück zur Startseite
        </Link>
      </main>
    </div>
  );
}

