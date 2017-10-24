## Objective
Create an easy to use, lightweight Version class that can handle basic Version needs.

## API
### Member variables
#### major
integer value to represent the major version of the Version
#### minor
integer value to represent the minor version of the Version
#### build
integer value to represent the build version of the Version
#### revision
integer value to represent the revision version of the Version
### Constructors
#### Version()
creates a Version object with major, minor, build, and revision all set to 0
#### Version(string)
creates a Version object by splitting the string on '.' and assigning the
major, minor, build, and revision values respectively.
#####   Acceptable string parameter formats
  <ul>
    <li>"X.X.X.X"</li>
    <li>"X.X.X"</li>
    <li>"X.X"</li>
    <li>"X"</li>
    <li>"XrX"</li>
    <li>"X-rX"</li>
    <li>"X.XrX"</li>
    <li>"X.X-rX"</li>
    <li>"X.X.XrX"</li>
    <li>"X.X.X-rX"</li>
  </ul>
#### Version(array)
creates a Version object by assigning the values in the array to their
respective version types
#####   Acceptable array parameter must
  <ul>
    <li>consist of all integer values</li>
    <li>have a size of 4 or less</li>
  </ul>
