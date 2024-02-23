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
