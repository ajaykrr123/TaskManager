import "bootstrap/dist/css/bootstrap.min.css";
// import "./Sidebar.css";
import "./Dashboard.css";
import React, { useEffect, useState } from "react";
import {Link} from "react-router-dom";

const axios = require("axios");
function Dashboard() {
  
  return (
    <div>
      <div class="topnav">
  <a class="active" href="#home">Dashboard</a>
 
</div>
<div class="sidenav">
<Link  to="/AddUser">AddUser</Link>

  <Link  to="/AddTask">AddTask</Link>
  <Link  to="/Tasklist">Tasklist</Link>
  <Link  to="/Dnd">Dnd</Link>
  <Link  to="/">LogOut</Link>
  {/* <a href="#">Clients</a>
  <a href="#">Contact</a> */}
</div>
</div>
  );
}

export default Dashboard;