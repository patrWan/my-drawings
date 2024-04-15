import api from "@/api";
import {dateFormat} from "@/lib/util";

export default async function Home() {
  const drawings = await api.drawing.list();
  return (
    <main className="grid gap-4 md:grid-cols-2 lg:grid-cols-4 my-16">
      {drawings.map(({ id, date, url, description }) => (
        <div key={id}>
          <p className="text-center text-sm opacity-55 mb-2">{dateFormat(date)}</p>
          <img
            className="h-60 w-60 mx-auto shadow-lg shadow-black opacity-90 hover:opacity-100 rounded-sm cursor-pointer"
            src={url}
          />
          <p className="text-center my-4 text-sm text-balance opacity-70">
            {description}
          </p>
        </div>
      ))}
    </main>
  );
}
