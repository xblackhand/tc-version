# Objective
 - Create an easy to use, lightweight Version class that can handle basic Version needs.

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
####   Acceptable string parameter formats
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
####   Acceptable array parameter must
 - consist of all integer values
 - have a size of 4 or less
### Version(int, int, int, int)
 - creates a Version object by assigning the values the parameters to their
 respective version types
 - order used: major, minor, build, revision
 - any missing values will be set to 0
