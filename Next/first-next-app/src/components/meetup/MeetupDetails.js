function MeetupDetail({ id }) {
  return (
    <section className="text-center">
      {id == "m1" ? (
        <>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/1280px-Stadtbild_M%C3%BCnchen.jpg"
            alt="First Meetup Place"
            className="w-full h-[100px]"
          />
          <div className="bg-slate-300 py-8">
            <h1>A First Meetup</h1>
            <address>Some address 5, 12345 Some City</address>
            <p>This is a first meetup!</p>
          </div>
        </>
      ) : (
        <>
          <img
            src="http://cdn.cnn.com/cnnnext/dam/assets/221129153135-02-sydney-modern-project-aerial.jpg"
            alt="Second Meetup Place"
            className="w-full h-[500px]"
          />
          <div className="bg-slate-600 py-12">
            <h1>A Second Meetup</h1>
            <address>Some address 5, 12345 Some City</address>
            <p>This is a second meetup!</p>
          </div>
        </>
      )}
    </section>
  );
}

export default MeetupDetail;
