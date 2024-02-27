# MERN-tutorial

This README file serves as a reference. It briefly describes all the technologies used in this tutorial.

##################
# GLOBAL VARIABLES
##################

## process.env variable

'process.env' is a global variable injected at runtime by your Node.js application. It holds all environment variables as key-value pairs, with values stored as strings. When your Node.js process starts, it reads the environment variables set by the parent process or the operating system and stores them in the 'process.env' object.

Syntax:

process.env.VARIABLE_NAME = 'value';

OR:

process.env['VARIABLE_NAME'] = 'value';

##########################
# NODE.JS BUILT-IN MODULES
##########################

## 'path' module

The Node.js Path Module is a built-in module that comes with Node.js itself. It provides utilities for working with file and directory paths.

Here are some key features and methods provided by the path module:

- path.basename(path [, suffix]): Returns the last portion of a path (the file name) optionally with a specified suffix.
- path.delimiter: A platform-specific path delimiter (e.g., : on Unix, ; on Windows) used in environment variables.
- path.dirname(path): Returns the directory name of a path.
- path.extname(path): Extracts the file extension from a path.
- path.format(pathObject): Creates a path string from an object.
- path.isAbsolute(path): Determines if a path is absolute.
- path.join([...paths]): Joins path segments into a single path.
- path.normalize(path): Normalizes a path by resolving . and .. segments.
- path.parse(path): Parses a path into an object with properties like root, dir, base, name, and ext.
- path.relative(from, to): Generates a relative path from one location to another.
- path.resolve([...paths]): Resolves an absolute path from given segments.
- path.sep: A platform-specific path segment separator (e.g., / on Unix, \ on Windows).
- path.toNamespacedPath(path): Converts a path to a namespace-prefixed path (Windows only).
- path.win32: Provides Windows-specific path methods.
- path.posix: Provides POSIX-specific path methods.

## fs module

'fs module' allows you to interact with files and directories on your computer. Whether you need to read files, create new ones, update existing ones, or perform other file-related operations, the fs module has got you covered!

Features:

- Reading a File: To read the contents of a file, you can use the readFile() function. It reads the file asynchronously and provides the data in a callback. For instance:
JavaScript

const fs = require('fs');
fs.readFile('myFile.txt', 'utf8', (err, data) => {
    if (err) {
        console.error('Error reading file:', err);
    } else {
        console.log('File contents:', data);
    }
});

- Writing to a File: To write data to a file, use the writeFile() function. It also operates asynchronously and accepts the file path, data, and an optional encoding. Example:
JavaScript

const fs = require('fs');
const content = 'Hello, world!';
fs.writeFile('output.txt', content, (err) => {
    if (err) {
        console.error('Error writing to file:', err);
    } else {
        console.log('Data written successfully.');
    }
});

- Creating a New File: To create a new file, you can use the open() function. It allows you to specify the file path, flags (e.g., 'w' for write), and mode (optional). Example:
JavaScript

const fs = require('fs');
fs.open('newFile.txt', 'w', (err, fd) => {
    if (err) {
        console.error('Error creating file:', err);
    } else {
        console.log('File created successfully.');
        // You can now write to the file using the file descriptor (fd).
    }
});

- Other Operations:
 > Deleting a File: Use unlink() to delete a file.
 > Checking File Existence: access() checks if a file exists.
 > Reading Directories: readdir() lists files in a directory.
 > Renaming Files: rename() renames a file.

Remember that the fs module provides both asynchronous (callback-based) and synchronous (blocking) versions of these functions. Choose the appropriate one based on your application’s needs

### fs.promises subset

In Node.js, the fs.promises module provides an asynchronous API for file system operations, returning promises instead of using traditional callback-style interfaces. fs.promises is a subset of the fs module, offering promise-based alternatives for some file system methods.

Example:

const fs = require('fs').promises;

async function readFileExample() {
  try {
    const filePath = 'path/to/your/file.txt'; // Replace with your actual file path
    const fileContent = await fs.readFile(filePath, 'utf-8');
    console.log('File content:', fileContent);
  } catch (error) {
    console.error('Error reading file:', error.message);
  }
}

readFileExample();

### fs.mkdir()

The fs.mkdir() method is used to asynchronously create a directory.

Syntax: fs.mkdir(path, mode, callback)

- path: The path of the directory that needs to be created.
- mode: An optional parameter that specifies the permissions for the new directory (e.g., read, write, execute).
- callback: A function that gets called once the directory creation is complete.

Example:

const fs = require('fs');

fs.mkdir('/my-directory', (err) => {
  if (err) {
    console.error('Error creating directory:', err);
  } else {
    console.log('Directory created successfully!');
  }
});

### fs.appendFile()

The fs.appendFile() method appends specified content to a file.

Syntax: fs.appendFile(path, data[, options], callback)

- path: The path to the file where data should be appended.
- data: The content (as a string or buffer) to append.
- options: Optional settings (e.g., encoding, mode).
- callback: A function called after the operation completes.

Example:

const fs = require('fs');

fs.appendFile('my-file.txt', 'Hello, world!', (err) => {
  if (err) {
    console.error('Error appending to file:', err);
  } else {
    console.log('Data appended successfully!');
  }
});

### fs.existsSync() method

The fs.existsSync() method in Node.js is used to synchronously check if a file already exists in the given path. It returns a boolean value, indicating whether the file is present or not.

Syntax:

fs.existsSync(path)

Example:

// Node.js program to demonstrate fs.existsSync()
const fs = require('fs');

// Get the current filenames in the directory
getCurrentFilenames();

let fileExists = fs.existsSync('hello.txt');
console.log("hello.txt exists:", fileExists);

fileExists = fs.existsSync('world.txt');
console.log("world.txt exists:", fileExists);

// Function to get current filenames in directory
function getCurrentFilenames() {
    console.log("\nCurrent filenames:");
    fs.readdirSync(__dirname).forEach(file => {
        console.log(file);
    });
    console.log("\n");
}

#############################
# NODE.JS THIRD-PARTY MODULES
#############################

## date-fns

date-fns is a comprehensive and versatile JavaScript library for manipulating dates. It provides a rich set of functions to work with dates in both browsers and Node.js.

Example:

import { compareAsc, format } from "date-fns";
format(new Date(2014, 1, 11), "yyyy-MM-dd"); //=> '2014-02-11'
const dates = [
  new Date(1995, 6, 2),
  new Date(1987, 1, 11),
  new Date(1989, 6, 10),
];
dates.sort(compareAsc); //=> [Wed Feb 11 1987 00:00:00, Mon Jul 10 1989 00:00:00, Sun Jul 02 1995 00:00:00]

## uuid

uuid is a library for generating universally unique identifiers (UUIDs). These identifiers are commonly used for various purposes, such as creating unique keys, session IDs, or tracking objects.

- Features:
 > Random UUIDs: Generates random UUIDs (version 4) based on cryptographic randomness.
 > Deterministic UUIDs: Supports generating UUIDs based on a namespace and a name (version 5).
 > Lightweight: The library is minimalistic and easy to use.

Example:

import { v4 as uuidv4 } from "uuid";
const uniqueId = uuidv4(); // Generate a random UUID
console.log(uniqueId); // Example output: "f47ac10b-58cc-4372-a567-0e02b2c3d479"

## cookie-parser

The cookie-parser module in Node.js is a powerful middleware that simplifies the handling of HTTP cookies. The cookie-parser middleware parses the Cookie header from incoming HTTP requests. It populates the req.cookies object with key-value pairs representing the cookies sent by the client.

Example:

const cookieParser = require('cookie-parser');

app.use(cookieParser('your-secret-key'));

## cors

The ‘cors’ module in Node.js is a powerful tool for handling Cross-Origin Resource Sharing (CORS). It allows you to manage how your server responds to requests from different origins (domains) and enables secure communication between client-side JavaScript and server-side APIs.

Example:

>>> To enable CORS for all routes:

const express = require('express');
const cors = require('cors');
const app = express();

// Enable CORS for all routes
app.use(cors());

>>> To enable CORS for a single route:

app.get('/products/:id', cors(), function (req, res, next) {
  res.json({ msg: 'This is CORS-enabled for a Single Route' });
});

<<< Configuring CORS >>>

You can configure CORS behavior by specifying options. For instance:

const corsOptions = {
  origin: 'http://example.com', // Specify the allowed origin
  optionsSuccessStatus: 200, // Handle legacy browsers that choke on 204
};

app.get('/products/:id', cors(corsOptions), function (req, res, next) {
  res.json({ msg: 'This is CORS-enabled for only example.com.' });
});

const whitelist = ['http://example1.com', 'http://example2.com'];

const corsOptions = {
  origin: function (origin, callback) {
    if (whitelist.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
};

app.get('/products/:id', cors(corsOptions), function (req, res, next) {
  res.json({ msg: 'This is CORS-enabled for a whitelisted domain.' });
});

## dotenv

The dotenv module in Node.js is a zero-dependency package that simplifies the management of environment variables. It allows you to load environment variables from a .env file into the process.env object. 

## mongoose

Mongoose is a powerful Node.js module designed for working with MongoDB. Mongoose is an ODM (Object Data Modeling) library specifically tailored for MongoDB. It acts as a bridge between your Node.js application and the MongoDB database.
With Mongoose, you can define schemas and models to interact with your data in a structured manner.

### Mongoose schema

A Mongoose schema defines the structure of documents within a collection. It specifies what properties, validation rules, virtuals, getters, setters, and methods the documents can have. Essentially, a schema acts as a blueprint for how data should be organized in MongoDB.

const mongoose = require('mongoose');

// Define a schema
const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    validate: {
      validator: (value) => /\S+@\S+\.\S+/.test(value),
      message: 'Invalid email format',
    },
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

// Create a model using the schema
const User = mongoose.model('User', userSchema);

################################
# NODE.JS REQ & RES OBJECTS
################################

## res.sendFile() method in Node.js

The sendFile() method in Node.js is used to send files as a response to an HTTP request. It’s particularly useful when you want to serve static files like HTML, PDFs, multimedia, or any other type of file.

- Purpose: The primary purpose of this method is to stream the file data directly to the client as it’s being read, rather than loading the entire file into memory before sending it. This approach is more efficient and avoids memory overhead.
- Content-Type: THE METHOD SETS THE CONTENT-TYPE HTTP HEADER FIELD BASED ON THE FILENAME EXTENSION. This ensures that the web browser handles the response appropriately.

Example:

const http = require('http');
const fs = require('fs');
const path = require('path');

http.createServer((request, response) => {
    const filePath = path.join(__dirname, 'myfile.mp3');
    const stat = fs.statSync(filePath);

    response.writeHead(200, {
        'Content-Type': 'audio/mpeg',
        'Content-Length': stat.size
    });

    const readStream = fs.createReadStream(filePath);
    readStream.pipe(response);
}).listen(2000);

## req.accepts() method

accepts() method checks if the specified content types are acceptable based on the request’s Accept HTTP header field.

Example:

const http = require('http');

const server = http.createServer((req, res) => {
  const accept = req.accepts(['json', 'html']);
  switch (accept) {
    case 'json':
      res.setHeader('Content-Type', 'application/json');
      res.write('{"message": "Hello, world!"}');
      break;
    case 'html':
      res.setHeader('Content-Type', 'text/html');
      res.write('<h1>Hello, world!</h1>');
      break;
    default:
      res.statusCode = 406; // Not Acceptable
      res.end('Not acceptable content type.');
  }
  res.end();
});

server.listen(3000);

############
# Express.js 
############

Express is a minimal and flexible web application framework for Node.js.

Basic Concepts:
- Middleware: Express uses middleware for tasks like routing, authentication, and error handling.
- Routing: Express simplifies defining routes for different endpoints.
- HTTP Utilities: It adds helpful utilities to Node’s HTTP objects.
- Rendering Dynamic Content: Express facilitates rendering dynamic HTTP objects.

## express.static() method

express.static() method is a built-in middleware function in Express. Its primary purpose is to serve static files such as images, CSS files, and JavaScript files.

Example:

app.use(express.static('public'));

Here, the 'public' directory contains your static assets (images, CSS, JS files).

## app.use() method

The app.use() method in Express.js is a powerful tool for managing middleware within your application. An Express application is essentially a series of middleware function calls. Middleware functions have access to the request object (req), the response object (res), and the 'next' middleware function in the application’s request-response cycle. If a middleware function doesn’t end the cycle, it must call next() to pass control to the 'next' middleware function.

TYPES OF MIDDLEWARE

<<< Application-level middleware >>>

Bound to an instance of the app object using app.use() or app.METHOD(). It handles requests for specific HTTP methods (e.g., GET, PUT, POST).

Example without a mount path:

const express = require('express');
const app = express();

app.use((req, res, next) => {
  console.log('Time:', Date.now());
  next();
});

Example with a mount path (/user/:id):

app.use('/user/:id', (req, res, next) => {
  console.log('Request Type:', req.method);
  next();
});

<<< Router-level middleware >>>

Associated with specific routes. You can define multiple routes for a path.

Example:

app.get('/user/:id', (req, res, next) => {
  console.log('ID:', req.params.id);
  next();
}, (req, res, next) => {
  res.send('User Info');
});

# express.Router() function

express.Router() allows you to create modular route handlers, making your Express application more organized and maintainable. express.Router() is a function that returns an instance of an Express router. 

Use

- Modularity: By using routers, you can organize your routes into separate files or modules. This makes your codebase more maintainable and easier to understand.
- Middleware: You can attach middleware functions to specific routes within the router. These middleware functions will only apply to the routes defined within that router.
- Scalability: As your application grows, you can create multiple routers for different parts of your app (e.g., authentication, API endpoints, user profiles).

Example:

const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.send('Hello, world!');
});

Mounting the Router

app.use('/api', router); // Mounts the router at '/api'

#################################################
# HTTP RESPONSE ERROR CODES (USED IN THE PROJECT)
#################################################

- 404 Not Found - The server cannot find the requested resource. In the browser, this means the URL is not recognized. In an API, this can also mean that the endpoint is valid but the resource itself does not exist. Servers may also send this response instead of 403 Forbidden to hide the existence of a resource from an unauthorized client.

############
# MIDDLEWARE
############

# BUILT-IN

## express.json()

express.json() is a built-in middleware function provided by Express. Its purpose is to parse incoming requests with JSON PAYLOADS. Specifically, it focuses on POST requests (i.e., the .post request object) and PUT requests (i.e., the .put request object).
You do not need express.json() for GET requests or DELETE requests.

Example:

const express = require('express');
const app = express();

// Recognize incoming Request Object as a JSON Object
app.use(express.json());

## express.urlencoded()

express.urlencoded() is another built-in middleware function in Express. It recognizes the incoming Request Object as STRINGS or ARRAYS.

Example:

// Recognize incoming Request Object as strings or arrays
app.use(express.urlencoded({ extended: false }));

The { extended: false } object is one of the options you can pass to express.urlencoded().
It controls how the middleware handles the URL-encoded data.

<<< extended: false vs. extended: true: >>>

- When extended is set to false:
 > The middleware uses the classic querystring library to parse the data.
 > It only supports simple key-value pairs (no nested objects or arrays).
 > For example, if the form data contains name=John&age=30, it will be parsed correctly.
 > However, if the data includes nested structures like arrays or objects, they won’t be parsed correctly.
- When extended is set to true:
 > The middleware uses the qs library (a more feature-rich querystring parser) to handle the data.
 > It supports nested objects, arrays, and more complex data structures.
 > For example, if the form data contains person[name]=John&person[age]=30, it will be parsed correctly.
 > Setting extended to true allows you to handle more complex form submissions.

<<< Choosing the Right Option >>>

If your form data is simple (mostly flat key-value pairs), using { extended: false } is sufficient. If your form data includes nested structures (e.g., arrays, objects), consider setting extended to true. In practice, many developers use 'body-parser' (an external package) instead of express.urlencoded(). body-parser provides more flexibility and better handling of complex data.

# CUSTOM

Example:

>>> errorHandler.js:

const { logEvents } = require('./logger')

const errorHandler = (err, req, res, next) => {
    logEvents(`${err.name}: ${err.message}\t${req.method}\t${req.url}\t${req.headers.origin}`, 'errLog.log')
    console.log(err.stack)

    const status = res.statusCode ? res.statusCode : 500 // server error 

    res.status(status)

    res.json({ message: err.message })
}

module.exports = errorHandler 

>>> server.js:

app.use(errorHandler)

# 3RD PARTY

## body-parser

'body-parser' is often considered more flexible and comprehensive middleware compared to express.json() and express.urlencoded(). 'body-parser' is an external package (not part of Express) that provides more features and flexibility. It’s preferred by many developers for:

- Richer Parsing Options:
body-parser supports various content types beyond JSON and URL-encoded data. It can handle raw text, XML, and more. You can configure it to parse specific content types based on your needs.
- Extended Parsing:
With body-parser, you can handle nested objects, arrays, and other complex data structures. Setting extended: true allows it to parse deeply nested data.
- Customization:
You have more control over how data is parsed. You can set custom limits (e.g., maximum request size) and other options.
- Modularity:
Since body-parser is a separate package, you can choose to use only the parts you need. It’s not tied to Express, so you can use it with other frameworks too.