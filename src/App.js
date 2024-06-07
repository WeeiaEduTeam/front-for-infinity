// App.js

import React from 'react';
import { BrowserRouter as Router, Route, Routes, NavLink } from 'react-router-dom';
import UserList from './UserList';
import SingleUser from './SingleUser';
import UpdateUser from './UpdateUser';
import DeleteUser from './DeleteUser';
import Login from './Login';
import CategoriesList from './CategoriesList';
import UserTransactions from './UserTransactions';
import CreateTransaction from './CreateTransactions';
import UpdateTransaction from './UpdateTransaction';
import UserCategoryTransactions from './UserCategoryTransactions';
import DeleteTransaction from './DeleteTransaction';
import User2Transaction from './User2Transaction';
import AdminUser from './AdminUser';

const App = () => {
    return (
        <Router>
            <div>
                <nav>
                    <ul>
                        <li>
                            <NavLink to="/" exact activeClassName="active">Home</NavLink>
                        </li>
                        <li>
                            <NavLink to="/users" activeClassName="active">User List</NavLink>
                        </li>
                        <li>
                            <NavLink to="/adminuser" activeClassName="active">admin user</NavLink>
                        </li>
                        <li>
                            <NavLink to="/singleUser" activeClassName="active">Single User</NavLink>
                        </li>
                        <li>
                            <NavLink to="/update-user" activeClassName="active">Update User</NavLink>
                        </li>
                        <li>
                            <NavLink to="/delete-user" activeClassName="active">Delete User</NavLink>
                        </li>
                        <li>
                            <NavLink to="/login" activeClassName="active">Login</NavLink>
                        </li>
                        <li>
                            <NavLink to="/categories" activeClassName="active">Categories</NavLink>
                        </li>
                        <li>
                            <NavLink to="/transactions" activeClassName="active">User Transactions</NavLink>
                        </li>
                        <li>
                            <NavLink to="/create-transaction" activeClassName="active">Create Transaction</NavLink>
                        </li>
                        <li>
                            <NavLink to="/update-transaction" activeClassName="active">Update Transaction</NavLink>
                        </li>
                        <li>
                            <NavLink to="/user-category-transactions" activeClassName="active">User Category
                                Transactions</NavLink>
                        </li>
                        <li>
                            <NavLink to="/delete-transaction" activeClassName="active">Delete Transaction</NavLink>
                        </li>
                        <li>
                            <NavLink to="/User2Transaction" activeClassName="active">User2Transactions</NavLink>
                        </li>
                    </ul>
                </nav>

                <hr/>

                <Routes>
                    <Route path="/" element={<h1>Welcome to the User Admin Panel</h1>}/>
                    <Route path="/users" element={<UserList/>}/>
                    <Route path="/user/:userId" element={<SingleUser/>}/>
                    <Route path="/update-user" element={<UpdateUser />} />
                    <Route path="/delete-user" element={<DeleteUser />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/categories" element={<CategoriesList />} />
                    <Route path="/transactions" element={<UserTransactions />} />
                    <Route path="/create-transaction" element={<CreateTransaction />} />
                    <Route path="/update-transaction" element={<UpdateTransaction />} />
                    <Route path="/user-category-transactions" element={<UserCategoryTransactions />} />
                    <Route path="/delete-transaction" element={<DeleteTransaction />} />
                    <Route path="/User2Transaction" element={<User2Transaction />} />
                    <Route path="/adminUser" element={<AdminUser />} />
                </Routes>
            </div>
        </Router>
    );
};

export default App;