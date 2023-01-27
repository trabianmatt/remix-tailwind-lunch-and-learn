import clsx from "clsx";
import { SampleDropdown } from "~/components";

export default function EmailInbox() {
  return (
    <div className="m-4 space-y-6">
      <div>
        <SampleDropdown />
      </div>
      <Inbox />
    </div>
  );
}

const messages = [
  {
    id: 1,
    subject: "Velit placeat sit ducimus non sed",
    sender: "Gloria Roberston",
    time: "1d ago",
    datetime: "2021-01-27T16:35",
    highlighted: true,
    preview:
      "Doloremque dolorem maiores assumenda dolorem facilis. Velit vel in a rerum natus facere. Enim rerum eaque qui facilis. Numquam laudantium sed id dolores omnis in. Eos reiciendis deserunt maiores et accusamus quod dolor.",
  },
  {
    id: 2,
    subject: "Velit placeat sit ducimus non sed",
    sender: "Matt Dean",
    time: "January 24, 2023",
    datetime: "2023-01-24T16:35",
    preview:
      "Doloremque dolorem maiores assumenda dolorem facilis. Velit vel in a rerum natus facere. Enim rerum eaque qui facilis. Numquam laudantium sed id dolores omnis in. Eos reiciendis deserunt maiores et accusamus quod dolor.",
  },
  // More messages...
];

export function Inbox() {
  return (
    // <div className="bg-white border rounded-md shadow border-gray-50">
    <div className="card">
      <ul role="list" className="divide-y divide-gray-200">
        {messages.map((message) => (
          <li
            key={message.id}
            className={clsx(
              "relative bg-white px-4 py-5 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 hover:bg-gray-50",
              {
                "border-b-2 border-highlight-200 bg-highlight-50 hover:bg-highlight-100":
                  message.highlighted,
              }
            )}
          >
            <div className="flex justify-between space-x-3">
              <div className="flex-1 min-w-0">
                <a href="#" className="block focus:outline-none">
                  <span className="absolute inset-0" aria-hidden="true" />
                  <p className="text-sm font-medium text-gray-900 truncate">
                    {message.sender}
                  </p>
                  <p className="text-sm text-gray-500 truncate">
                    {message.subject}
                  </p>
                </a>
              </div>
              <time
                dateTime={message.datetime}
                className="flex-shrink-0 text-sm text-gray-500 whitespace-nowrap"
              >
                {message.time}
              </time>
            </div>
            <div className="mt-1">
              <p className="text-sm text-gray-600 line-clamp-2">
                {message.preview}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
