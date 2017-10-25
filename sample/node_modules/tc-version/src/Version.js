class Version {
  constructor(major = null, minor = null, build = null, revision = null) {
    var self = this;
    //array in arguments
    if (major instanceof Array && minor === null && build === null && revision === null) {
      //only allow 4 elements max in array
      if (major.length > 4) {
        throw new Error('To many elements in the Version constructor array parameter. Max of only 4 elements are allowed.')
      }
      //ensure all elements are positive integers
      major.forEach((element) => {
        if (element != null && (!Number.isInteger(element) || element < 0)) {
          throw new Error('Invalid array elements in Version constructor array parameter. All elements must be positive integers.');
        }
      });
      arrayConstructor(major);
      return;
    }
    //int list in arguments
    if ((major === null || (Number.isInteger(major) && major >= 0))
      && (minor === null || (Number.isInteger(minor)) && minor >= 0)
      && (build === null || (Number.isInteger(build)) && build >= 0)
      && (revision === null || (Number.isInteger(revision)) && revision >= 0)) {
      intListConstructor(major, minor, build, revision);
      return;
    //string in arguements
    } else if (typeof major === 'string' && minor === null && build === null && revision === null) {
      stringConstructor(major);
      return;
    //Version in arguments
    } else if (major instanceof Version && minor === null && build === null && revision === null) {
      copyConstructor(major);
      return;
    }
    throw new Error('Invalid constructor parameters. Only a single string in one of the accepted formats, an array of positive integers, or up to 4 comma separated positive integer arguments are allowed.');

    function arrayConstructor(versionArray) {
      self.major = self.minor = self.build = self.revision = 0;
      for (var i = 0; i < versionArray.length; i++) {
        switch(i) {
          case 0:
            self.major = versionArray[i] || 0;
            break;
          case 1:
            self.minor = versionArray[i] || 0;
            break;
          case 2:
            self.build = versionArray[i] || 0;
            break;
          case 3:
            self.revision = versionArray[i] || 0;
            break;
        }
      }
    }

    function intListConstructor(major, minor, build, revision) {
      self.major = major || 0;
      self.minor = minor || 0;
      self.build = build || 0;
      self.revision = revision || 0;
    }

    function stringConstructor(versionString) {
      self.major = self.minor = self.build = self.revision = 0;
      var array = versionString.split('.');

      //format 'r' if it appears in the verison for revision
     if (array.length === 3 && array[2].includes('-r') && array[2].indexOf('-r') > 0) {
        var tempArray = array[2].split('-r');
        array[2] = tempArray[0] || 0;
        array[3] = tempArray[1] || 1;
      } else if (array.length === 3 && array[2].includes('r') && array[2].indexOf('r') > 0) {
        var tempArray = array[2].split('r');
        array[2] = tempArray[0] || 0;
        array[3] = tempArray[1] || 1;
      } else if (array.length === 2 && array[1].includes('-r') && array[1].indexOf('-r') > 0) {
        var tempArray = array[1].split('-r');
        array[1] = tempArray[0] || 0;
        array[3] = tempArray[1] || 1;
      } else if (array.length === 2 && array[1].includes('r') && array[1].indexOf('r') > 0) {
        var tempArray = array[1].split('r');
        array[1] = tempArray[0] || 0;
        array[3] = tempArray[1] || 1;
      } else if (array.length === 1 && array[0].includes('-r') && array[0].indexOf('-r') > 0) {
        var tempArray = array[0].split('-r');
        array[0] = tempArray[0] || 0;
        array[3] = tempArray[1] || 1;
      } else if (array.length === 1 && array[0].includes('r') && array[0].indexOf('r') > 0) {
        var tempArray = array[0].split('r');
        array[0] = tempArray[0] || 0;
        array[3] = tempArray[1] || 1;
      }
      //catch arrays that exceed max length
      if (array.length > 4) {
        throw new Error('To many "." in the Version constructor string parameter. Max of only 3 "." are allowed.');
      }
      //catch arrays that have bad input
      for (var i = 0; i < array.length; i++) {
        //all elements but the 4th element, if there are 4
        if (array[i] != null && (!Number.isInteger(array[i] * 1)) || array[i] < 0) {
          throw new Error('Invalid array elements in Version constructor string parameter. All elements must be positive integers in a supported format.');
        }
        switch(i) {
          case 0:
            self.major = array[i] * 1 || 0;
            break;
          case 1:
            self.minor = array[i] * 1 || 0;
            break;
          case 2:
            self.build = array[i] * 1 || 0;
            break;
          case 3:
            self.revision = array[i] * 1 || 0;
            break;
        }
      }
    }

    function copyConstructor(originalVersion) {
      self.major = originalVersion.major;
      self.minor = originalVersion.minor;
      self.build = originalVersion.build;
      self.revision = originalVersion.revision;
    }
  }

  isGreater(comparableVersion) {
    if (this.major > comparableVersion.major) {
      return true;
    } else if (this.major < comparableVersion.major) {
      return false;
    } else {
      if (this.minor > comparableVersion.minor) {
        return true;
      } else if (this.minor < comparableVersion.minor) {
        return false;
      } else {
        if (this.build > comparableVersion.build) {
          return true;
        } else if (this.build < comparableVersion.build) {
          return false;
        } else {
          if (this.revision > comparableVersion.revision) {
            return true;
          } else if (this.revision < comparableVersion.revision) {
            return false;
          }
          return false;
        }
      }
    }
  }

  isLess(comparableVersion) {
    if (this.major > comparableVersion.major) {
      return false;
    } else if (this.major < comparableVersion.major) {
      return true;
    } else {
      if (this.minor > comparableVersion.minor) {
        return false;
      } else if (this.minor < comparableVersion.minor) {
        return true;
      } else {
        if (this.build > comparableVersion.build) {
          return false;
        } else if (this.build < comparableVersion.build) {
          return true;
        } else {
          if (this.revision > comparableVersion.revision) {
            return false;
          } else if (this.revision < comparableVersion.revision) {
            return true;
          }
          return false;
        }
      }
    }
  }

  isEqual(comparableVersion) {
    return (this.major === comparableVersion.major && this.minor === comparableVersion.minor
      && this.build === comparableVersion.build && this.revision === comparableVersion.revision);
  }

  getMajor() {
    return this.major;
  }

  getMinor() {
    return this.minor;
  }

  getBuild() {
    return this.build;
  }

  getRevision() {
    return this.revision;
  }

  setMajor(val) {
    if (val && Number.isInteger(val)) {
      this.major = val;
      return;
    }
    throw new Error('Invalid argument passed to setMajor().  Function argument needs to be an integer.')
  }

  setMinor(val) {
    if (val && Number.isInteger(val)) {
      this.minor = val;
      return;
    }
    throw new Error('Invalid argument passed to setMinor().  Function argument needs to be an integer.')
  }

  setBuild(val) {
    if (val && Number.isInteger(val)) {
      this.build = val;
      return;
    }
    throw new Error('Invalid argument passed to setBuild().  Function argument needs to be an integer.')
  }

  setRevision(val) {
    if (val && Number.isInteger(val)) {
      this.revision = val;
      return;
    }
    throw new Error('Invalid argument passed to setRevision().  Function argument needs to be an integer.')
  }

  incrementMajor() {
    this.major += 1;
    this.minor = this.build = this.revision = 0;
  }

  incrementMinor() {
    this.minor += 1;
    this.build = this.revision = 0;
  }

  incrementBuild() {
    this.build += 1;
    this.revision = 0;
  }

  incrementRevision() {
    this.revision += 1;
  }

  toString(regex) {
    //if string formatted input, replace 'M' for major, 'm' for minor, 'B' for
    //build, and 'R' for revision
    if (regex) {
      return regex.replace(/M/, this.major).replace(/m/, this.minor).replace(/B/, this.build).replace(/R/, this.revision);
    }
    return this.major + '.' + this.minor + '.' + this.build + '.' + this.revision;
  }

  toRString() {
    return this.major + '.' + this.minor + '.' + this.build + 'r' + this.revision;
  }

  toHyphenRString() {
    return this.major + '.' + this.minor + '.' + this.build + '-r' + this.revision;
  }
}

module.exports = Version;
