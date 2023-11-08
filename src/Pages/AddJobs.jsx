import Swal from "sweetalert2";

const AddJobs = () => {
  const handleAddJobs = (e) => {
    e.preventDefault();
    const form = e.target;

    const name = form.name.value;
    const date = form.date.value;
    const price = form.price.value;
    const price2 = form.price2.value;
    const photo = form.photo.value;
    const description = form.description.value;

    const newJobs = { name, date, price, price2, photo, description };
    console.log(newJobs);

    fetch('http://localhost:5000/jobs', {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(newJobs)
    })
    .then(res => res.json())
    .then(data => {
      console.log(data);

      if(data.insertedId){
        Swal.fire({
          title: 'Success',
          text: 'Job Added Successfully',
          icon: 'success',
          confirmButtonText: 'Cool'
        })
      }
    })
  };

  return (
    <div>
      <h2>This is addjobs section</h2>

      <div className=" bg-[#F4F3F0] p-20">
        <h1 className="text-5xl font-bold uppercase text-center text-emerald-900 italic mb-5">
          Please Add Jobs
        </h1>
        <form onSubmit={handleAddJobs}>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
            <div className="form-control">
              <label className="label">
                <span className="label-text text-gray-500 font-bold uppercase">Jobs Title</span>
              </label>
              <input
                type="text"
                placeholder="Our jobs"
                name="name"
                className="input input-bordered w-full"
                required
              />
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text text-gray-500 font-bold uppercase">Deadline</span>
              </label>
              <input
                type="date"
                name="date"
                placeholder=""
                className="input input-bordered w-full"
                required
              />
            </div>

            <div>
                <h2 className="text-gray-500 font-bold uppercase">Choose an Categories</h2>
                <div className="form-control mt-3">
                    <select className="select select-bordered w-full max-w-xs">
                      <option>Web Development</option>
                      <option>Digital Marketing</option>
                      <option>Graphics Design</option>
                    </select>
                </div>
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text text-gray-500 font-bold uppercase">Photo</span>
              </label>
              <input
                type="text"
                placeholder="photo"
                name="photo"
                className="input input-bordered w-full"
                required
              />
            </div>

            

            <div className="form-control">
              <label className="label">
                <span className="label-text text-gray-500 font-bold uppercase">Minimum Price</span>
              </label>
              <input
                type="number"
                placeholder="prices"
                name="price"
                className="input input-bordered w-full"
                required
              />
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text text-gray-500 font-bold uppercase">Maximum Price</span>
              </label>
              <input
                type="number"
                placeholder="prices"
                name="price2"
                className="input input-bordered w-full"
                required
              />
            </div>
          </div>

          <div className="form-control">
            <p>Short Description</p>
            <textarea name="" className="border-2" cols="30" rows="10"></textarea>
            </div>

          <input
            type="submit"
            value="Add Job"
            id=""
            className="btn bg-orange-700 text-white font-bold mt-4 w-full"
          />
        </form>
      </div>
    </div>
  );
};

export default AddJobs;
