function Card(props) {
  return <div className='flex flex-col bg-white w-[70%] mx-auto rounded-md shadow-md'>{props.children}</div>;
}

export default Card;