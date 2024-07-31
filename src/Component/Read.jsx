import { useState, useEffect } from "react";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { Link } from 'react-router-dom';

function Listing({ data, setForm }) {
  const getSavedValue = localStorage.getItem("data");
  const [parsedData, setParsedData] = useState(JSON.parse(getSavedValue) || []);

  useEffect(() => {
    localStorage.setItem("data", JSON.stringify(parsedData));
  }, [parsedData]);

  const handleDelete = (id) => {
    const updatedData = parsedData.filter(item => item.id !== id);
    setParsedData(updatedData);  
    setForm(updatedData);  
  };

  return (
    <main className="min-h-screen p-10 bg-neutral-100">
      <div className="mx-auto max-w-7xl flex justify-center items-center">
        <div className="bg-white border border-neutral-300 rounded-md overflow-auto mb-10">
          <table className="min-w-full">
            <thead className="bg-[#f3f0f0] border-b-2 border-l-orange-100">
              <tr>
                <th className="px-4 py-3">Id</th>
                <th className="px-4 py-3">Full name</th>
                <th className="px-4 py-3">Email</th>
                <th className="px-4 py-3">Phone</th>
                <th className="px-4 py-3">DOB</th>
                <th className="px-4 py-3">Country</th>
                <th className="px-4 py-3">Edit / Delete</th>
              </tr>
            </thead>
            <tbody>
              {parsedData.map((data, index) => (
                <tr
                  key={index}
                  className="hover:bg-primary-100 selected border-b-2 border-[#f5f3f3]"
                >
                  <td className="px-4 py-3">{data.id}</td>
                  <td className="px-4 py-3 font-medium">{data.name}</td>
                  <td className="px-4 py-3">{data.email}</td>
                  <td className="px-4 py-3">{data.phone}</td>
                  <td className="px-4 py-3">{data.dob}</td>
                  <td className="px-4 py-3">{data.country}</td>
                  <td className="px-4 py-3 flex items-end justify-around">
                    <Link to={`/update/${data.id}`}>
                      <span className="cursor-pointer">
                        <FaEdit size={20} color="green" />
                      </span>
                    </Link>
                    <span
                      className="cursor-pointer"
                      onClick={() => handleDelete(data.id)}
                    >
                      <MdDelete size={20} color="red" />
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </main>
  );
}

export default Listing;
