**Show All Task**
----
  Returns all tasks in json.

* **URL**

  /tasks

* **Method:**

  `GET`
  
*  **URL Params**
  None

* **Data Params**

  None

* **Success Response:**

  * **Code:** 200
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
 
* **Error Response:**

  * **Code:** 404 NOT FOUND
  
  OR

  * **Code:** 500 INTERNAL SERVER ERROR <br>

***

**Show Task**
----
  Returns a single task.

* **URL**

  /tasks/<span style="color:blue">{:id}</span>

* **Method:**

  `GET`
  
*  **URL Params**
  id = [object id]

* **Data Params**

  None

* **Success Response:**

  * **Code:** 200
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
 
* **Error Response:**

  * **Code:** 404 NOT FOUND
  
  OR

  * **Code:** 500 INTERNAL SERVER ERROR <br />

***

**Add New Task**
----
  Add a task to server with .

* **URL**

  /tasks/

* **Method:**

  `POST`
  
*  **URL Params**
  None

* **Data Params**

  subject = [String]
  description = [String]

* **Success Response:**

  * **Code:** 201
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
 
* **Error Response:**

  * **Code:** 404 NOT FOUND
  
  OR

  * **Code:** 500 INTERNAL SERVER ERROR <br />

***