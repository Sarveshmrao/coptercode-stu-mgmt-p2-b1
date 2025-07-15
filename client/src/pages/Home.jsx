import StudentCard from "../components/StudentCard";

const dummyStudents = [
  {
    id: 1,
    name: "John Doe",
    roll: "12345",
    department: "Computer Science",
    email: "john.doe@example.com",
  },
  {
    id: 2,
    name: "Jane Smith",
    roll: "67890",
    department: "Mathematics",
    email: "jane.smith@example.com",
  },
];

function Home() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {dummyStudents.map((student) => (
        <StudentCard key={student.id} student={student} />
      ))}
    </div>
  );
}
export default Home;
