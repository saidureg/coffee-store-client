import { useLoaderData } from "react-router-dom";

const Users = () => {
  const loadUsers = useLoaderData();

  return (
    <div>
      <h3 className="text-center my-10">Total Users: {loadUsers.length}</h3>
      <div className="overflow-x-auto">
        <table className="table w-1/2 mx-auto">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Id</th>
              <th>Email</th>
              <th>created Time</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {loadUsers.map((user) => {
              return (
                <tr key={user.id}>
                  <td></td>
                  <td>{user._id}</td>
                  <td>{user.email}</td>
                  <td>{user.createdAt}</td>
                  <td>
                    <button className="btn btn-warning">Delete</button>
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
