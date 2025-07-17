import { Link } from 'react-router-dom';
function StudentCard({ student }) {
  return (
    <div className="bg-white shadow-md rounded-xl p-4 text-gray-800">
      <h2 className="text-xl font-semibold">{student.name}</h2>
      <p>
        <strong>Roll:</strong> {student.roll}
      </p>
      <p>
        <strong>Dept:</strong> {student.department}
      </p>
      <p>
        <strong>Email:</strong> {student.email}
      </p>
      <div className="mt-4">
        <Link
          to={`/edit/${student.id}`}
          className="text-blue-600 hover:text-blue-800 font-medium transition-colors"
        >
          Edit
        </Link>
      </div>
    </div>
  );
}

export default StudentCard;
