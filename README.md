# Objective
To create an easy to use, lightweight Version class that can handle basic
version comparisons and operations.

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
### Version(string)
 - creates a Version object by splitting the string on '.' and assigning the
 major, minor, build, and revision values respectively.
 - order used: major, minor, build, revision
 - any missing values will be set to 0
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
### Version(array)
 - creates a Version object by assigning the values in the array to their
 respective version types
 - order used: major, minor, build, revision
 - any missing values will be set to 0
#####   Acceptable array parameter must
 - consist of all integer values
 - have a size of 4 or less
### Version(int, int, int, int)
 - creates a Version object by assigning the values the parameters to their
 respective version types
 - order used: major, minor, build, revision
 - all parameter values must be an integer or null
 - any missing values will be set to 0
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
 - argument must be an integer or null
 - null argument value will be set to 0
### void setMinor(int)
 - sets the minor version of the Version object to the argument integer value
 - argument must be an integer or null
 - null argument value will be set to 0
### void setBuild(int)
 - sets the build version of the Version object to the argument integer value
 - argument must be an integer or null
 - null argument value will be set to 0
### void setRevision(int)
 - sets the revision version of the Version object to the argument integer value
 - argument must be an integer or null
 - null argument value will be set to 0
### boolean isGreater(Version)
 - returns a boolean value if the Version object has a greater version number
 than the Version object argument
### boolean isLess(Version)
 - returns a boolean value if the Version object has a lesser version number
 than the Version object argument
### boolean isEqual(Version)
 - returns a boolean value if the Version object has an equal version number
 than the Version object argument
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
### string toString(format)
### string toRString()
 - returns the Version object in this string representation:
  - M.m.B.-rR
   - M is the Version object's major version
   - m is the Version object's minor version
   - B is the Version object's build version
   - R is the Version object's revision version
### string toHyphenRString()
