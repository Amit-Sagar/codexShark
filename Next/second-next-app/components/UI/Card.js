function Card(props) {
  return (
    <div className={`w-[90%] bg-slate-200 my-5 rounded-md shadow-sm shadow-white ${props.className}`}>
      {props.children}
    </div>
  );
}

export default Card;
