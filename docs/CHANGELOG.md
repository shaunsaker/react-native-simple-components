# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](http://keepachangelog.com/en/1.0.0/)
and this project adheres to [Semantic Versioning](http://semver.org/spec/v2.0.0.html).

## 2.0.4

### Added

* Licence

### Changed

* Updated README

## 2.0.3

### Changed

* Github repository moved from [https://github.com/shaunsaker/react-native-simple-components](https://github.com/AuxStudio/react-native-simple-components) to [https://github.com/shaunsaker/react-native-simple-components](https://github.com/AuxStudio/react-native-simple-components)
* Updated README

## 2.0.2

### Fixed

* NotificationIcon component was incorrectly named CountIcon

### Changed

* Updated README

## 2.0.1

### Changed

* Updated README

## 2.0.0

### Fixed

* Correct use of propTypes in all components
* Button - iconRight and textLeft at the same time
* ButtonIcon - removed overflow: 'hidden' style prop to allow showShadow on iOS

### Changed

* CountIcon renamed to NotificationIcon
* StatusBarComponent renamed to StatusBar
* HeaderBar left and right components no longer render containers when passed custom components
* ImageWidget renamed to SmartImage
* MenuIcon renamed to RotatingChevron
* TabBar changed handleTabPress => handlePress and disabledStyle => disabledTabStyle

### Added

* Touchable - disabled prop
* Button - androidRippleBorderless prop
* ButtonIcon - androidRipple set of props
* CheckBox - androidRipple set of props
* CheckBox - customIcon prop
* DeleteButton - customIcon, showShadow and androidRipple set of props
* HeaderBar - androidRipple set of props
* IconTextRow - customIcon, handlePress and androidRipple set of props
* SmartImage - offline and error states
* InfoBlock - style prop
* RotatingChevron - androidRipple set of props
* Page - verticalCenter, horizontalCenter and testing props
* Loader - width and height props
* StarRating - handlePress and androidRipple set of props
* TabBar - wrapperStyle and androidRipple set of props

### Removed

* TouchableIcon
* TouchableText
* Button - disabledStyle prop
* ButtonIcon - disabledStyle prop
* CountIcon - handlePress prop
* Input - in favour of [react-native-material-textfield](https://www.npmjs.com/package/react-native-material-textfield)
* InputBar
* InputContainer - in favour of [react-native-keyboard-aware-scroll-view](https://github.com/APSL/react-native-keyboard-aware-scroll-view) as an external dependency
* Menu - in favour of [react-native-material-menu](https://github.com/mxck/react-native-material-menu)
* Modal - in favour of [react-native-modal](https://github.com/react-native-community/react-native-modal)
* Page - dimensions prop
* ScrollHeader - to be externalised as it's own package
* Snackbar - in favour of [react-native-snackbar](https://github.com/cooperka/react-native-snackbar)
* StarRatingInput - use the StarRating component

## < 2.0.0

Not documented.
