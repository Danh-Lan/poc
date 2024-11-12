import { useState } from 'react'
import './App.css'

type PatientData = {
  name: string;
  age: string;
  status: string;
  comment: string;
};

function App() {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [status, setStatus] = useState('');
  const [comment, setComment] = useState('');
  const [error, setError] = useState('');
  const [data, setData] = useState<PatientData[]>([]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !age || !status) {
      setError("Tên tuổi và thần không được để trống");
    } else {
      setError('');
      const newData: PatientData = { name, age, status, comment };
      setData([...data, newData]);
    }
  };

  return (
    <div>
      <h1>Quan Ly Benh An</h1>
      <h2>Thông Tin Bệnh Nhân</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Tên</label>
        <input
          type="text"
          id="name"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <label htmlFor="age">Tuổi</label>
        <input
          type="number"
          id="age"
          name="age"
          value={age}
          onChange={(e) => setAge(e.target.value)}
        />
        <h3>Thần</h3>
        <label>
          <input
            type="radio"
            name="status"
            value="Còn"
            checked={status === 'Còn'}
            onChange={(e) => setStatus(e.target.value)}
          />
          Còn
        </label>
        <label>
          <input
            type="radio"
            name="status"
            value="Không còn"
            checked={status === 'Không còn'}
            onChange={(e) => setStatus(e.target.value)}
          />
          Không còn
        </label>
        <label htmlFor="comment">Nhận xét</label>
        <input
          type="text"
          id="comment"
          name="comment"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
        />
        {error && <p style={{ color: 'red' }}>{error}</p>}
        <button type="submit">Submit</button>
      </form>

      <h2>Danh sách bệnh nhân hiện tại</h2>
      <ul>
        {data.map((item, index) => (
          <li key={index}>
            Tên: {item.name}, Tuổi: {item.age}, Thần: {item.status}, Nhận xét: {item.comment}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default App