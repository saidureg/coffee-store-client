import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import swal from "sweetalert";

const Users = () => {
  const loadUsers = useLoaderData();
  const [users, setUsers] = useState(loadUsers);

  const handleDelete = (id) => {
    swal({
      title: "Are you sure?",
      text: "Once deleted, you will not be able to recover this user!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        fetch(`https://coffee-store-server-wheat-iota.vercel.app/users/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              swal("Poof! Your selected user has been deleted!", {
                icon: "success",
              });
              const remainingUsers = users.filter((user) => user._id !== id);
              setUsers(remainingUsers);
            }
          });
      } else {
        swal("Your selected user is safe!");
      }
    });
  };

  return (
    <div>
      <h3 className="text-center my-10">Total Users: {users.length}</h3>
      <div className="overflow-x-auto">
        <table className="table w-1/2 mx-auto">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Id</th>
              <th>Email</th>
              <th>created Time</th>
              <th>last Sign In</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => {
              return (
                <tr key={user._id}>
                  <td></td>
                  <td>{user._id}</td>
                  <td>{user.email}</td>
                  <td>{user.lastSignInAt}</td>
                  <td>{user.createdAt}</td>
                  <td>
                    <button
                      onClick={() => handleDelete(user._id)}
                      className="btn btn-accent"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Users;
