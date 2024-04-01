import Link from "next/link";
import React from "react";
import { IoTicketSharp } from "react-icons/io5";
import { reformatDate } from "lib/hooks/formatDate";
function Shows({ shows }: any) {
  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg w-full max-w-7xl">
      <h2 className="font-owners text-3xl font-extrabold uppercase pb-2">
        Shows
      </h2>
      <table className="w-full text-base text-left rtl:text-right text-gray-500 dark:text-gray-200 font-bold">
        <tbody>
          {shows.map((show: any) => {
            const date = reformatDate(show.date);
            return (
              <tr
                key={show._id}
                className="bg-white border-b dark:bg-black dark:border-gray-700 font-owners-wide text-xs sm:text-sm md:text-base"
              >
                <th
                  scope="row"
                  className="md:px-6 md:py-4 px-4 py-2 text-gray-900 whitespace-nowrap dark:text-white"
                >
                  {date.mmddyyyy}
                </th>
                <td className="md:px-6 md:py-4 px-4 py-2">{show.venue}</td>
                <td className="md:px-6 md:py-4 px-4 py-2">{show.location}</td>

                <td className="md:px-6 md:py-4 px-2 py-2">
                  <div className="rounded bg-red-700 hover:bg-red-500 ease-in-out duration-300 p-2 text-center">
                    <Link
                      href="#"
                      className="font-extrabold font-owners text-white hover:underline hidden md:block"
                    >
                      TICKETS
                    </Link>
                    <Link
                      href={show.ticketLink}
                      className="font-extrabold font-owners text-white hover:underline flex justify-center md:hidden "
                    >
                      <IoTicketSharp className="scale-110" />
                    </Link>
                  </div>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default Shows;
