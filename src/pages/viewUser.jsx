import { useLocation } from "react-router-dom";

function ViewUser() {
  const location = useLocation();
  const users = console.log(location.state);
  return (
    <>
      <h1>View Data</h1>
      {/* <div>{location?.state?.firstName}</div>
      <div>{location?.state?.lastName}</div>
      <div>{location?.state?.email}</div>
      <div>{location?.state?.phone}</div>
      <div>{location?.state?.message}</div>
      <div>{location?.state?.time}</div>
      <div>{location?.state?.date}</div>
      <div>{location?.state?.country}</div> */}

      <table>
        <thead>
          <tr>
            <th></th>
            <th>First Name</th>
            <th>last Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Message</th>
            <th>Date</th>
            <th>Time</th>
            <th>Country</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td></td>
            <td>rahul</td>
            <td>Mahto</td>
            <td>Rahulmahto837@gmail.com</td>
            <td>78368278727</td>
            <td>Hii i am rahul mahto</td>
            <td>19 05 2002</td>    
            <td>28:92</td>
            <td>India</td>
          </tr>
        </tbody>
      </table>
    </>
  );
}

export default ViewUser;
