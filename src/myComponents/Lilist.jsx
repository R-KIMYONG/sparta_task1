function Lilist({ item, removeUser }) {
  return (
    <li id={item.id}>
      <p>이름 : {item.name}</p>
      <p>나이 : {item.age}</p>
      <button onClick={removeUser}>삭제</button>
    </li>
  );
}

export default Lilist;
