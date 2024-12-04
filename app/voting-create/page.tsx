import Link from "next/link";

export default function NeueAbstimmung() {
  return (
    <div className="min-h-screen flex flex-col items-center p-6 md:p-10">
      <main className="w-full max-w-md mx-auto flex flex-col items-center gap-8 mt-16 md:mt-24">
        <h1 className="text-3xl md:text-4xl font-bold text-center mb-8">
          Neue Abstimmung erstellen
        </h1>
        <form className="w-full space-y-6">
          <div>
            <label htmlFor="title" className="block text-lg mb-2">Titel der Abstimmung</label>
            <input
              type="text"
              id="title"
              name="title"
              className="w-full px-4 py-2 rounded-full border-2 border-black"
              required
            />
          </div>
          <div>
            <label htmlFor="questions" className="block text-lg mb-2">Fragen (eine pro Zeile)</label>
            <textarea
              id="questions"
              name="questions"
              rows={5}
              className="w-full px-4 py-2 rounded-lg border-2 border-black"
              required
            ></textarea>
          </div>
          <div>
            <label htmlFor="participants" className="block text-lg mb-2">Anzahl der Teilnehmer</label>
            <input
              type="number"
              id="participants"
              name="participants"
              min="1"
              className="w-full px-4 py-2 rounded-full border-2 border-black"
              required
            />
          </div>
          <div>
            <label htmlFor="endDate" className="block text-lg mb-2">Enddatum</label>
            <input
              type="date"
              id="endDate"
              name="endDate"
              className="w-full px-4 py-2 rounded-full border-2 border-black"
              required
            />
          </div>
          <button type="submit" className="w-full px-8 py-4 rounded-full bg-black text-white hover:bg-gray-800 transition-colors duration-200 font-medium text-lg">
            Abstimmung erstellen
          </button>
        </form>
        <Link href="/" className="text-lg hover:underline mt-4">
          Zurück zur Startseite
        </Link>
      </main>
    </div>
  );
}

