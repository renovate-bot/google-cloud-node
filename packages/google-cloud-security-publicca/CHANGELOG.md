# Changelog

## [2.2.0](https://github.com/googleapis/google-cloud-node/compare/publicca-v2.1.0...publicca-v2.2.0) (2025-07-09)


### Features

* [Many APIs] add methods from gax to cache proto root and process custom error details ([#6419](https://github.com/googleapis/google-cloud-node/issues/6419)) ([f8a324c](https://github.com/googleapis/google-cloud-node/commit/f8a324ca5c3bc0f730e4ed67d9407c44f2414936))
* [Many APIs] add methods from gax to cache proto root and process custom error details ([#6423](https://github.com/googleapis/google-cloud-node/issues/6423)) ([df9184f](https://github.com/googleapis/google-cloud-node/commit/df9184fe9fb00013ef519f093c4de5fd54ec2ce9))
* Add protobufjs 2023 edition support ([#6303](https://github.com/googleapis/google-cloud-node/issues/6303)) ([4a0cba1](https://github.com/googleapis/google-cloud-node/commit/4a0cba1e41a9aeb9c15ad31487ef013c8277cfef))

## [2.1.0](https://github.com/googleapis/google-cloud-node/compare/publicca-v2.0.1...publicca-v2.1.0) (2025-05-09)


### Features

* [security] added protos for publicca v1alpha1 ([#6255](https://github.com/googleapis/google-cloud-node/issues/6255)) ([273ff46](https://github.com/googleapis/google-cloud-node/commit/273ff46e1e2ba9a8aec91d1b68d9b6e26875d629))
* Multiple ai-platform updates ([0b8b1a7](https://github.com/googleapis/google-cloud-node/commit/0b8b1a75f33bdf94000321d239834b9b10757862))

## [2.0.1](https://github.com/googleapis/google-cloud-node/compare/publicca-v2.0.0...publicca-v2.0.1) (2025-03-19)


### Bug Fixes

* [Many APIs] await/catch promises, and update listOperationsAsync return type ([#6188](https://github.com/googleapis/google-cloud-node/issues/6188)) ([a73cdbf](https://github.com/googleapis/google-cloud-node/commit/a73cdbfe33d5ba9952f0c87cb9d5d12ee8753dd2))

## [2.0.0](https://github.com/googleapis/google-cloud-node/compare/publicca-v1.3.0...publicca-v2.0.0) (2025-03-18)


### ⚠ BREAKING CHANGES

* upgrade to Node 18 ([#6096](https://github.com/googleapis/google-cloud-node/issues/6096))

### Features

* Add request/response debug logging to gapics, update templates to gax 5 and node 18 ([#1671](https://github.com/googleapis/google-cloud-node/issues/1671)) ([eed00f4](https://github.com/googleapis/google-cloud-node/commit/eed00f4e4de22392db3a440a20486c3eeb9d33a6))


### Bug Fixes

* Add json files to tsconfig templates ([#1692](https://github.com/googleapis/google-cloud-node/issues/1692)) (ba6be1d) ([eed00f4](https://github.com/googleapis/google-cloud-node/commit/eed00f4e4de22392db3a440a20486c3eeb9d33a6))


### Miscellaneous Chores

* Upgrade to Node 18 ([#6096](https://github.com/googleapis/google-cloud-node/issues/6096)) ([eadae64](https://github.com/googleapis/google-cloud-node/commit/eadae64d54e07aa2c65097ea52e65008d4e87436))

## [1.3.0](https://github.com/googleapis/google-cloud-node/compare/publicca-v1.2.0...publicca-v1.3.0) (2024-05-21)


### Features

* [Many APIs] update Nodejs generator to send API versions in headers for GAPICs ([#5351](https://github.com/googleapis/google-cloud-node/issues/5351)) ([01f48fc](https://github.com/googleapis/google-cloud-node/commit/01f48fce63ec4ddf801d59ee2b8c0db9f6fb8372))
* [Many APIs] update Nodejs generator to send API versions in headers for GAPICs ([#5354](https://github.com/googleapis/google-cloud-node/issues/5354)) ([a9784ed](https://github.com/googleapis/google-cloud-node/commit/a9784ed3db6ee96d171762308bbbcd57390b6866))
* [security] update Nodejs generator to send API versions in headers for GAPICs ([#5341](https://github.com/googleapis/google-cloud-node/issues/5341)) ([8eb07ac](https://github.com/googleapis/google-cloud-node/commit/8eb07ac8084a06ff6c917eefba46a764a27dfcac))

## [1.2.0](https://github.com/googleapis/google-cloud-node/compare/publicca-v1.1.0...publicca-v1.2.0) (2024-03-29)


### Features

* [Many APIs] add several fields to manage state of database encryption update ([#5191](https://github.com/googleapis/google-cloud-node/issues/5191)) ([57567db](https://github.com/googleapis/google-cloud-node/commit/57567db36033ca53ae2f54e6517b8cd12145bb82))

## [1.1.0](https://github.com/googleapis/google-cloud-node/compare/publicca-v1.0.1...publicca-v1.1.0) (2024-02-09)


### Features

* Trusted Private Cloud support, use the universeDomain parameter  ([#5027](https://github.com/googleapis/google-cloud-node/issues/5027)) ([88763bb](https://github.com/googleapis/google-cloud-node/commit/88763bb1b7ce9ff884b9e3f476230d38985b2ff2))

## [1.0.1](https://github.com/googleapis/google-cloud-node/compare/publicca-v1.0.0...publicca-v1.0.1) (2023-09-06)


### Bug Fixes

* [Many APIs] simplify logic for HTTP/1.1 REST fallback option ([#4588](https://github.com/googleapis/google-cloud-node/issues/4588)) ([e5ad564](https://github.com/googleapis/google-cloud-node/commit/e5ad564f74dc7a36c0e8cd8de173428a99f1deae))

## [1.0.0](https://github.com/googleapis/google-cloud-node/compare/publicca-v0.1.5...publicca-v1.0.0) (2023-08-06)


### ⚠ BREAKING CHANGES

* migrate to Node 14 ([#4443](https://github.com/googleapis/google-cloud-node/issues/4443))

### Bug Fixes

* [Many APIs] fix typings for IAM methods ([#4463](https://github.com/googleapis/google-cloud-node/issues/4463)) ([64109b0](https://github.com/googleapis/google-cloud-node/commit/64109b007521c418cefe09c18a92cc6eaef0932c))


### Miscellaneous Chores

* Migrate to Node 14 ([#4443](https://github.com/googleapis/google-cloud-node/issues/4443)) ([2260f12](https://github.com/googleapis/google-cloud-node/commit/2260f12543d171bda95345e53475f5f0fdc45770))

## [0.1.5](https://github.com/googleapis/google-cloud-node/compare/publicca-v0.1.4...publicca-v0.1.5) (2023-04-13)


### Bug Fixes

* **deps:** Bump `google-gax` to ^3.5.8 ([#4117](https://github.com/googleapis/google-cloud-node/issues/4117)) ([0b67d88](https://github.com/googleapis/google-cloud-node/commit/0b67d883963643ce1b4f6d2ccd3e8d37adf6e029))
* Minify JSON and JS files, and remove .map files ([#4143](https://github.com/googleapis/google-cloud-node/issues/4143)) ([170f7d5](https://github.com/googleapis/google-cloud-node/commit/170f7d57b8fd344d182a8e758867b8124722eebc))

## [0.1.4](https://github.com/googleapis/google-cloud-node/compare/publicca-v0.1.3...publicca-v0.1.4) (2023-02-15)


### Bug Fixes

* [Many APIs] changing format of the jsdoc links ([#3989](https://github.com/googleapis/google-cloud-node/issues/3989)) ([95399f7](https://github.com/googleapis/google-cloud-node/commit/95399f731547b06cde5ed0914d89c59fdc9fd968))

## [0.1.3](https://github.com/googleapis/google-cloud-node/compare/publicca-v0.1.2...publicca-v0.1.3) (2022-11-10)


### Bug Fixes

* Regenerated proto JS and TS definitions (generator update) ([#3472](https://github.com/googleapis/google-cloud-node/issues/3472)) ([5e2230d](https://github.com/googleapis/google-cloud-node/commit/5e2230dfc4302bb2ac9628ff4200eb46509e103d))

## [0.1.2](https://github.com/googleapis/google-cloud-node/compare/publicca-v0.1.1...publicca-v0.1.2) (2022-11-03)


### Bug Fixes

* **deps:** Use google-gax v3.5.2 ([#3478](https://github.com/googleapis/google-cloud-node/issues/3478)) ([09305e0](https://github.com/googleapis/google-cloud-node/commit/09305e06548b89dc17bb3d3167e2d1e69588caa4))

## [0.1.1](https://github.com/googleapis/google-cloud-node/compare/publicca-v0.1.0...publicca-v0.1.1) (2022-09-28)


### Bug Fixes

* preserve default values in x-goog-request-params header ([#3353](https://github.com/googleapis/google-cloud-node/issues/3353)) ([da99ad5](https://github.com/googleapis/google-cloud-node/commit/da99ad57f592a504750d57fdb1c7423734fec069))

## 0.1.0 (2022-09-09)


### Features

* add initial files for google.cloud.security.publicca.v1beta1 ([bed9205](https://github.com/googleapis/google-cloud-node/commit/bed9205b5169cd7a66622e877b01d23a6df9e915))
