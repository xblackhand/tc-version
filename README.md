# Objective
To create an easy to use, lightweight Version class that can handle basic
version comparisons and operations.

# Scripts
 - `npm run demo` will run the sample main javascript file
 - `npm run test` will run the mocha unit tests on the /tests folder

# API

## Member variables

### major
 - integer value to represent the major version of the Version
### minor
 - integer value to represent the minor version of the Version
### build
 - integer value to represent the build version of the Version
### revision
 - integer value to represent the revision version of the Version

## Constructors

### Version()
 - creates a Version object with major, minor, build, and revision all set to 0
#### Example
 - var a = new Version();
 - console.log(a);
   - output: <i>{ major: 0, minor: 0, build: 0, revision: 0 }</i>
### Version(string)
 - creates a Version object by splitting the string on '.' and assigning the
 major, minor, build, and revision values respectively.
 - order used: major, minor, build, revision
 - any missing values will be set to 0
#### Example
 - var a = new Version('1.3r5');
 - console.log(a);
   - output: <i>{ major: 1, minor: 3, build: 0, revision: 5 }</i>
 - var b = new Version('1.4.5-r2');
 - console.log(b);
   - output: <i>{ major: 1, minor: 4, build: 5, revision: 2 }</i>
#####   Acceptable string parameter formats
 - "X.X.X.X"
 - "X.X.X"
 - "X.X"
 - "X"
 - "XrX"
 - "X-rX"
 - "X.XrX"
 - "X.X-rX"
 - "X.X.XrX"
 - "X.X.X-rX"
 where <i>X</i> is an integer and <i>r</i> is a the character 'r'
 - if there is a 'r' character in the string with not trailing integer, the
 revision value will be set to 1
#####   Thrown Exceptions
  - if the parameter is not one of the acceptable string formats
### Version(array)
 - creates a Version object by assigning the values in the array to their
 respective version types
 - order used: major, minor, build, revision
 - any missing values will be set to 0
#### Example
 - var a = new Version([1,2]);
 - console.log(a);
   - output: <i>{ major: 1, minor: 2, build: 0, revision: 0 }</i>
#####   Acceptable array parameter must
 - consist of all integer values
 - have a size of 4 or less
#####   Thrown Exceptions
 - if the parameter has a length greater than 4
 - if any of the parameter values are not positive integers or are not null
### Version(int, int, int, int)
 - creates a Version object by assigning the values the parameters to their
 respective version types
 - order used: major, minor, build, revision
 - all parameter values must be an integer or null
 - any missing values will be set to 0
 - only the first four parameters are used, any more will be ignored
#### Example
 - var a = new Version(1,3,2);
 - console.log(a);
   - output: <i>{ major: 1, minor: 3, build: 2, revision: 0 }</i>
#####   Thrown Exceptions
 - if any other parameters are not positive integers or are not null
### Version(Version)
 - creates a Version object with the same major, minor, build, and revision
 values as the Version parameter passed to the constructor

## Functions

### int getMajor()
 - returns the major version of the Version object as an integer
### int getMinor()
 - returns the minor version of the Version object as an integer
### int getBuild()
 - returns the build version of the Version object as an integer
### int getRevision()
 - returns the revision version of the Version object as an integer
### void setMajor(int)
 - sets the major version of the Version object to the argument integer value
 - argument must be a positive integer
##### Thrown Exceptions
 - if the parameter is not a positive integer
### void setMinor(int)
 - sets the minor version of the Version object to the argument integer value
 - argument must be a positive integer
##### Thrown Exceptions
 - if the parameter is not a positive integer
### void setBuild(int)
 - sets the build version of the Version object to the argument integer value
 - argument must be a positive integer
##### Thrown Exceptions
 - if the parameter is not a positive integer
### void setRevision(int)
 - sets the revision version of the Version object to the argument integer value
 - argument must be a positive integer
##### Thrown Exceptions
 - if the parameter is not a positive integer
### boolean isGreater(Version)
 - returns a boolean value if the Version object has a greater version number
 than the Version object argument
##### Thrown Exceptions
 - if the parameter is not a Version object
### boolean isLess(Version)
 - returns a boolean value if the Version object has a lesser version number
 than the Version object argument
##### Thrown Exceptions
 - if the parameter is not a Version object
### boolean isEqual(Version)
 - returns a boolean value if the Version object has an equal version number
 than the Version object argument
##### Thrown Exceptions
 - if the parameter is not a Version object
### void incrementMajor()
 - increments the Version object's major value by 1 and sets the minor,
 build, and revision values to 0
### void incrementMinor()
 - increments the Version object's minor value by 1 and sets the build
 and revision values to 0
 - Version object's major version is not altered
### void incrementBuild()
 - increments the Version object's build value by 1 and sets the revision
 value to 0
 - Version object's major and minor version are not altered
### void incrementRevision()
 - increments the Version object's revision value by 1
 - Version object's major, minor, and build version are not altered
### string toString()
 - returns the Version object in this string representation: <b>M.m.B.R</b>
   - M is the Version object's major version
   - m is the Version object's minor version
   - B is the Version object's build version
   - R is the Version object's revision version
#### Example
 - var version = new Version('1.3.4.r2');
 - version.toRString();
   - output: <i>1.3.4.2</i>
### string toString(string)
 - returns the Version object in the string representation that the string
 argument asks for
 - characters used to format the output
   - M is the Version object's major version
   - m is the Version object's minor version
   - B is the Version object's build version
   - R is the Version object's revision version
 - only the first of each of the format characters will used in the string
 - any other character will be left in the returned string
 - if string argument is an empty string then the output will be the same as the toString() function
#### Example
 - var version = new Version('1.3.4.2');
 - version.toString("M.m");
   - output: <i>1.3</i>
 - version.toString("M:m-B_R");
   - output: <i>1:2-4_2</i>
 - version.toString("Version: M.m.B.R-milestone");
   - output: <i>Version: 1.3.4.2-milestone</i>
 - version.toString("");
   - output: <i>1.3.4.2</i>
##### Thrown Exceptions
 - if the parameter is not a string or is not null
### string toRString()
 - returns the Version object in this string representation: <b>M.m.BrR</b>
   - M is the Version object's major version
   - m is the Version object's minor version
   - B is the Version object's build version
   - R is the Version object's revision version
#### Example
 - var version = new Version('1.3.4.2');
 - version.toRString();
   - output: <i>1.3.4r2</i>
### string toHyphenRString()
 - returns the Version object in this string representation: <b>M.m.B-rR</b>
   - M is the Version object's major version
   - m is the Version object's minor version
   - B is the Version object's build version
   - R is the Version object's revision version
#### Example
 - var version = new Version('1.3.4.2');
 - version.toHyphenRString();
   - output: <i>1.3.4-r2</i>
### int[] toArray()
 - returns an integer array of size 4 in this order: <b>[M, m, B, R]</b>
   - M is the Version object's major version
   - m is the Version object's minor version
   - B is the Version object's build version
   - R is the Version object's revision version
#### Example
 - var version = new Version('1.4.4.0');
 - version.toArray();
   - output: <i>[1, 4, 4, 0]</i>
