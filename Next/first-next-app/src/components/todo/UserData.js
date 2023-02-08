const UserData = (props) => {
  const delItem = (index) => {
    props.onDelItem(index);
  };

  return (
    <div className="mt-6 py-1 text-black">
      <ul className="">
        {props.userItem.map((items, id) => {
          return (
            <>
              <div className="flex justify-between ml-3 mb-3">
                <li>{items}</li>
                <h1
                  onClick={() => {
                    delItem(id);
                  }}
                  className="cursor-pointer text-2xl mr-10 hover:text-red-600"
                >
                  ×
                </h1>
              </div>
              <hr />
              <br />
            </>
          );
        })}
      </ul>
    </div>
  );
};

export default UserData;
