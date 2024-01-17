import { useEffect } from 'react';
import { useState } from 'react';

const StudentTable = () => {
  const [studentData, setStudentData] = useState({});

  useEffect(() => {
    fetch('/students.json')
      .then(res => res.json())
      .then(data => setStudentData(data));
  }, []);
  console.log(studentData);
  return (
    <div>
      <div className="text-center mx-auto">
        <h2 className="sm:text-4xl md:text-5xl font-bold text-[#127958] pt-10">
          Students <span className="text-white">of the year</span>
        </h2>

        <form>
          <input
            className="rounded-full h-10 my-8 p-4 w-1/4 min-w-2/4"
            placeholder="Search by Student"
            type="text"
          />
        </form>
      </div>
      <div className="max-w-[848px] mx-auto overflow-auto text-white">
        <table className="w-full">
          <thead>
            <tr className="border-b border-[#FFFFFF0D]">
              <th className="uppercase p-5 text-sm md:text-xl font-semibold md:min-w-[110px] text-left">
                ID
              </th>
              <th className="p-5 text-sm md:text-xl font-semibold text-left">
                Name
              </th>
              <th className="p-5 text-sm md:text-xl font-semibold">Scores</th>
              <th className="p-5 text-sm md:text-xl font-semibold">
                Percentage
              </th>
            </tr>
          </thead>
          <tr className="bg-[#232d32]">
            <td className="p-5 text-sm md:text-xl">Class One</td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          {studentData.class1?.map(student => (
            <tbody key={student.id}>
              <tr className="bg-white/5"></tr>
              <tr className="border-b border-[#7ECEB529]">
                <td className="p-5 text-sm md:text-xl">{student.id}</td>
                <td className="p-5 text-sm md:text-xl">
                  <div className="flex space-x-3 items-center">
                    <img
                      className="w-8 h-8 rounded-full"
                      src={student.image}
                      width="32"
                      height="32"
                      alt="John Smith"
                    />
                    <span className="whitespace-nowrap">{student.name}</span>
                  </div>
                </td>
                <td className="p-5 text-sm md:text-xl text-center">
                  {student.score}
                </td>
                <td className="p-5 text-sm md:text-xl text-center">
                  {student.percentage}
                </td>
              </tr>
            </tbody>
          ))}
          <tr className="bg-[#232d32]">
            <td className="p-5 text-sm md:text-xl">Class Two</td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          {studentData.class2?.map(student => (
            <tbody key={student.id}>
              <tr className="bg-white/5"></tr>
              <tr className="border-b border-[#7ECEB529]">
                <td className="p-5 text-sm md:text-xl">{student.id}</td>
                <td className="p-5 text-sm md:text-xl">
                  <div className="flex space-x-3 items-center">
                    <img
                      className="w-8 h-8 rounded-full"
                      src={student.image}
                      width="32"
                      height="32"
                      alt="John Smith"
                    />
                    <span className="whitespace-nowrap">{student.name}</span>
                  </div>
                </td>
                <td className="p-5 text-sm md:text-xl text-center">
                  {student.score}
                </td>
                <td className="p-5 text-sm md:text-xl text-center">
                  {student.percentage}
                </td>
              </tr>
            </tbody>
          ))}
          <tr className="bg-[#232d32]">
            <td className="p-5 text-sm md:text-xl">Class Three</td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          {studentData.class3?.map(student => (
            <tbody key={student.id}>
              <tr className="bg-white/5"></tr>
              <tr className="border-b border-[#7ECEB529]">
                <td className="p-5 text-sm md:text-xl">{student.id}</td>
                <td className="p-5 text-sm md:text-xl">
                  <div className="flex space-x-3 items-center">
                    <img
                      className="w-8 h-8 rounded-full"
                      src={student.image}
                      width="32"
                      height="32"
                      alt="John Smith"
                    />
                    <span className="whitespace-nowrap">{student.name}</span>
                  </div>
                </td>
                <td className="p-5 text-sm md:text-xl text-center">
                  {student.score}
                </td>
                <td className="p-5 text-sm md:text-xl text-center">
                  {student.percentage}
                </td>
              </tr>
            </tbody>
          ))}
        </table>
      </div>
    </div>
  );
};

export default StudentTable;
