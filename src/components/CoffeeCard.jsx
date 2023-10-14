import { Link } from "react-router-dom";
import swal from "sweetalert";

const CoffeeCard = ({ coffee, setCoffees, coffees }) => {
  const { _id, name, quantity, supplier, details, photo } = coffee;

  const handleDelete = (_id) => {
    swal({
      title: "Are you sure?",
      text: "Once deleted, you will not be able to recover this coffee!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        fetch(`http://localhost:5000/coffee/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount) {
              swal("Poof! Your selected coffee has been deleted!", {
                icon: "success",
              });
              const remaining = coffees.filter((cof) => cof._id !== _id);
              setCoffees(remaining);
            }
          });
      } else {
        swal("Your selected coffee is safe!");
      }
    });
  };

  return (
    <div className="card card-side bg-base-100 shadow-xl">
      <figure>
        <img src={photo} alt={name} />
      </figure>
      <div className=" flex justify-between w-full items-center py-8 pr-10">
        <div>
          <h2 className="card-title">{name}</h2>
          <p>{quantity}</p>
          <p>{supplier}</p>
          <p>{details} </p>
        </div>
        <div className="btn-group btn-group-vertical space-y-3">
          <button className="btn btn-secondary">View</button>
          <Link to={`/update_coffee/${_id}`}>
            <button className="btn btn-secondary">Edit</button>
          </Link>
          <button onClick={() => handleDelete(_id)} className="btn btn-error">
            X
          </button>
        </div>
      </div>
    </div>
  );
};

export default CoffeeCard;
