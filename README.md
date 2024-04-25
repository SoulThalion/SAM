# SAM



<details>
<summary><b> User Login</b></summary>

METHOD | ENDPOINT         | TOKEN | ROLE | DESCRIPTION              | POST PARAMS                                                                 | RETURNS
-------|------------------|-------|------|--------------------|-----------------------------------------------------------------------------------|--------------------
POST   | /auth/login      | -     | user | User Login               | `userName`, `password`                                                      | { message: 'User logged up successfully', data: `token`}
</details>
<details> <summary><b>User Endpoints</b></summary>

METHOD | ENDPOINT         | TOKEN | ROLE | DESCRIPTION              | POST PARAMS                                                                 | RETURNS
-------|------------------|-------|------|--------------------|-----------------------------------------------------------------------------------|--------------------
GET    | /user            | YES   | admin/manager | Get All Users   |                                                                             | { message: 'Users fetched successfully', data: [`user`]}
GET    | /user/profile    | YES   | user | Get Own Profile          |                                                                             | { message: 'User fetched successfully', data: [`user`]}
GET    | /user/:userId    | YES   | admin/manager | Get One User    | `params: userId`                                                            | { message: 'User fetched successfully', data: [`user`]}
POST   | /user            | YES   | admin| Create one user          | `userName`, `name`, `surname`, `telephone`, `email`, `role`, `password`     | { message: 'User created successfully', data: [`user`]}
PATCH  | /user/profile    | YES   | user | Update own profile       | `userName`, `nickName`, `avatar`, `email`                                   | { message: 'User created successfully', data: [`user`]}
PATCH  | /user/password   | YES   | user | Reset password           | `newPassword`, `repeatPassword`                                             | { message: 'Password reset successfully'}
PATCH  | /user/:userId    | YES   | admin| Update one user          | `userName`, `name`, `surname`, `telephone`, `email`, `role`, `password`     | { message: 'User updated successfully', data: [`user`]}
DELETE | /user/:userId    | YES   | admin| Delete one user          |  `params: userId`                                                           | { message: 'User deleted successfully', data: [`user`]}
</details>

<details>
<summary><b>Ship Endpoints</b></summary>

METHOD | ENDPOINT         | TOKEN | ROLE | DESCRIPTION              | POST PARAMS                                     | RETURNS
-------|------------------|-------|------|--------------------------|-------------------------------------------------|--------------------
GET    | /ship            | YES   | user | Get All ships   |                                                 | { message: 'Ships fetched successfully', data: [`ships`]}
GET    | /ship/:shipId    | YES   | user | Get One Ship             |                                               | { message: 'Ship fetched successfully', data: [`ship`]}
POST   | /ship            | YES   | admin/manager  | Post new Ship  |  `brand`, `model`, `registration_number`       | { message: 'Create new Ship successfully', data: `ship`}
PATCH  | /ship/:shipId   | YES   | admin/manager | Update a Ship    |  `brand`, `model`, `registration_number`      | { message: 'Update Ship successfully', data: `ship`}
DELETE | /ship/:shipId    | YES   | admin/manager | Delete a Ship   |                                              | { message: 'Ship deleted successfully', data: [`ship`]}
</details>
<details> <summary><b>Client Endpoints</b></summary>

METHOD | ENDPOINT         | TOKEN | ROLE | DESCRIPTION              | POST PARAMS                                                                 | RETURNS
-------|------------------|-------|------|--------------------|-----------------------------------------------------------------------------------|--------------------
GET    | /client          | YES   | admin/manager | Get All Clients   |                                                                           | { message: 'Clients fetched successfully', data: [`client`]}
GET    | /client/:clientId| YES   | user | Get One Client           | `params: clientId`                                                          | { message: 'Client fetched successfully', data: [`client`]}
POST   | /client          | YES   | admin/manager| Create one client| `name`, `surname`, `address`, `cif`, `telephone`, `email`                   | { message: 'Client created successfully', data: [`client`]}
PATCH  | /client/:clientId| YES   | admin/manager| Update one client| `name`, `surname`, `address`, `cif`, `telephone`, `email`                   | { message: 'Client updated successfully', data: [`client`]}
DELETE | /client/:clientId| YES   | admin/manager| Delete one client|  `params: clientId`                                                         | { message: 'Client deleted successfully', data: [`client`]}
</details>

<details> <summary><b>Order Endpoints</b></summary>

METHOD | ENDPOINT         | TOKEN | ROLE | DESCRIPTION              | POST PARAMS                                                                 | RETURNS
-------|------------------|-------|------|--------------------|-----------------------------------------------------------------------------------|--------------------
GET    | /order           | YES   | admin/manager | Get All Orders  |                                                                             | { message: 'Orders fetched successfully', data: [`order`]}
GET    | /order/:orderId  | YES   | admin/manager | Get One Order   | `params: orderId`                                                           | { message: 'Order fetched successfully', data: [`order`]}
GET    | /order/myOrders  | YES   | user | Get All My Orders        |                                                                             | { message: 'Orders fetched successfully', data: [`order`]}
POST   | /order           | YES   | admin/manager| Create one order | `appointment`, `work`, `observations`, `hours`                              | { message: 'Order created successfully', data: [`order`]}
PATCH  | /order/:orderId  | YES   | user| Update one order          | `name`, `surname`, `address`, `cif`, `telephone`, `email`                   | { message: 'Order updated successfully', data: [`order`]}
DELETE | /order/:orderId  | YES   | admin/manager| Delete one order|  `params: orderId`                                                           | { message: 'Order deleted successfully', data: [`order`]}
<<<<<<< HEAD
</details>
=======
</details>
