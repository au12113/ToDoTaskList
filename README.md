# Setup API
### install dependencies
 ```
 npm install
 ```
 ### run service at port 3000
 ```
 npm start
 or
 node index.js
 ```
---
# API Document

## **Show All Task**

View all items in the list.

- **URL**

  /tasks

- **Method:**

  `GET`

- **URL Params**
  None

- **Data Params**

  None

- **Success Response:**

  - **Code:** 200
    **Content:**
    ```
    [
      {
        "_id": "5b3fc027fb6fc021751c70ef",
        "subject": "work",
        "description": "daily work",
        "status": true,
        "__v": 3
      },
      ...
    ]
    ```

- **Error Response:**
  `

  - **Code:** 404 `NOT FOUND`

  OR

  - **Code:** 500 `INTERNAL SERVER ERROR` <br>

---

## **Show Task**

View a single task in the list

- **URL**

  /tasks/<span style="color:blue">{:id}</span>

- **Method:**

  `GET`

- **URL Params**
  | Data Parameter | Description | 
  | -------------- | --------- | 
  | subject | Object id | 

- **Data Params**

  None

- **Success Response:**

  - **Code:** 200 `OK`
    **Content:**
    ```
    {
      "_id": "5b3fc027fb6fc021751c70ef",
      "subject": "work",
      "description": "daily work",
      "status": true,
      "__v": 3
    }
    ```

- **Error Response:**

  - **Code:** 404 `NOT FOUND`

  OR

  - **Code:** 500 `INTERNAL SERVER ERROR` <br />

---

## **Add New Task**

Add a task to the list

- **URL**

  /tasks

- **Method:**

  `POST`

- **URL Params**
  None

- **Data Params**

  |  Data Parameter | Data type  |  Default |
  |---|---|---|
  | subject | String | - |
  | description | String | - |
  | status | Boolean| false|

- **Success Response:**

  - **Code:** 201 `Created`
    **Content:** None

- **Error Response:**

  - **Code:** 500 `INTERNAL SERVER ERROR` <br />

---

## **Edit Existing Task**

Edit existing task( subject, description and status).

- **URL**

  /tasks/<span style="color:blue">{:id}</span>

- **Method:**

  `PATCH`

- **URL Params**
  | Data Parameter | Description | 
  | -------------- | --------- | 
  | subject | Object id | 

- **Data Params**

  | Data Parameter | Data type | Default |
  | -------------- | --------- | ------- |
  | subject | String | - |
  | description |  String | - |
  | status | Boolean| false|

- **Success Response:**

  - **Code:** 200 `OK`
    **Content:** task detail before update.
    ```
    {
      "_id": "5b3fc027fb6fc021751c70ef",
      "subject": "work",
      "description": "daily work",
      "status": true,
      "__v": 3
    }
    ```

- **Error Response:**

  - **Code:** 404 `NOT FOUND`

  OR

  - **Code:** 500 `INTERNAL SERVER ERROR` <br />

---

## **Set Task Status**

Set the task status.

- **URL**

  /tasks/<span style="color:blue">{:id}</span>/status

- **Method:**

  `PATCH`

- **URL Params**

  | URL Parameter | Description |
  | ------------- | --------- |
  | id            | Object id |

- **Data Params**

  | Data Parameter | Data type | Default |
  | -------------- | --------- | ------- |
  | status         | Boolean   | false   |

- **Success Response:**

  - **Code:** 200 `OK`
    **Content:** task detail before update.
    ```
    {
      "_id": "5b3fc027fb6fc021751c70ef",
      "subject": "work",
      "description": "daily work",
      "status": true,
      "__v": 3
    }
    ```

- **Error Response:**

  - **Code:** 404 `NOT FOUND`

  OR

  - **Code:** 500 `INTERNAL SERVER ERROR` <br />

---

## **Delete Task**

Delete a task from the list

- **URL**

  /tasks/<span style="color:blue">{:id}</span>

- **Method:**

  `DELETE`

- **URL Params**

  | URL Parameter | Description   |
  | ------------- | ----------- |
  | id            | Object id |

- **Data Params**

  None

- **Success Response:**

  - **Code:** 200 `OK`
    **Content:**  None

- **Error Response:**

  - **Code:** 404 `NOT FOUND`

  OR

  - **Code:** 500 `INTERNAL SERVER ERROR` <br />

---
