## [0.0.9](https://github.com/rapid-build-ui/rb-base/compare/v0.0.8...v0.0.9) (2019-05-09)


### Features

* **host event interceptor:** technique for intercepting and exposing onevents for the components ([914c1f5](https://github.com/rapid-build-ui/rb-base/commit/914c1f5))
* **styles service:** for creating helper css classes to prevent fouc ([4054d4b](https://github.com/rapid-build-ui/rb-base/commit/4054d4b))


### Performance Improvements

* **base mixin:** only import and use what is necessary from skatejs ([8efc8f3](https://github.com/rapid-build-ui/rb-base/commit/8efc8f3))



## [0.0.8](https://github.com/rapid-build-ui/rb-base/compare/v0.0.7...v0.0.8) (2019-03-05)


### Features

* **property converters:** helpers for deserializing attributes ([db7e1eb](https://github.com/rapid-build-ui/rb-base/commit/db7e1eb))
* **new converter:** boolean ([13eb1d4](https://github.com/rapid-build-ui/rb-base/commit/13eb1d4))



## [0.0.7](https://github.com/rapid-build-ui/rb-base/compare/v0.0.6...v0.0.7) (2019-02-24)


### Features

* **bump:** dep lit-html to v1.0.0 from v0.14.0 ([ca13835](https://github.com/rapid-build-ui/rb-base/commit/ca13835))
* **slot mixin:** adds helpers for working with slots ([5dbd4f6](https://github.com/rapid-build-ui/rb-base/commit/5dbd4f6))



## [0.0.6](https://github.com/rapid-build-ui/rb-base/compare/v0.0.5...v0.0.6) (2018-12-05)


### Bug Fixes

* **iOS:** from randomly losing the component template via bumping dep lit-html to v0.14.0 ([a6c0547](https://github.com/rapid-build-ui/rb-base/commit/a6c0547))



## [0.0.5](https://github.com/rapid-build-ui/rb-base/compare/v0.0.4...v0.0.5) (2018-11-13)


### Dependencies

* **bump:** dep lit-html v0.13.0 ([523dd35](https://github.com/rapid-build-ui/rb-base/commit/523dd35))



## [0.0.4](https://github.com/rapid-build-ui/rb-base/compare/v0.0.3...v0.0.4) (2018-09-26)


### Dependencies

* **bump:** dep lit-html v0.11.4 ([609e299](https://github.com/rapid-build-ui/rb-base/commit/609e299))



## [0.0.3](https://github.com/rapid-build-ui/rb-base/compare/v0.0.2...v0.0.3) (2018-09-14)


### Features

* **lit-html:** bump to v0.11.3 and expose it's two new view directives classMap and styleMap ([2867f88](https://github.com/rapid-build-ui/rb-base/commit/2867f88))
* **this.rb.elms:** provide namespace for storing component elements via this.rb.elms property ([41ad0b7](https://github.com/rapid-build-ui/rb-base/commit/41ad0b7))



## [0.0.2](https://github.com/rapid-build-ui/rb-base/compare/v0.0.1...v0.0.2) (2018-09-05)


### Features

* **bump:** deps skatejs to v5.2.4 and lit-html to v0.11.1 ([ce2f778](https://github.com/rapid-build-ui/rb-base/commit/ce2f778))
	* Bumping lit-html to >= v0.11.1 introduces breaking changes to all components.
	* Component views must be updated to comply with lit-html's new view syntax.
* **lit-html directives:** create optional view-directives.js import that contains them ([e5ba9a7](https://github.com/rapid-build-ui/rb-base/commit/e5ba9a7))



