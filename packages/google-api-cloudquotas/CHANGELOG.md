# Changelog

## [2.2.1](https://github.com/googleapis/google-cloud-node/compare/cloudquotas-v2.2.0...cloudquotas-v2.2.1) (2025-10-13)


### Bug Fixes

* [gkeconnect-gateway] remove unused GatewayServiceClient ([#6775](https://github.com/googleapis/google-cloud-node/issues/6775)) ([41c2ff2](https://github.com/googleapis/google-cloud-node/commit/41c2ff2851b5fdadabf4f9bd3500167c34b32ff7))

## [2.2.0](https://github.com/googleapis/google-cloud-node/compare/cloudquotas-v2.1.0...cloudquotas-v2.2.0) (2025-07-09)


### Features

* [cloudquotas] Added support for hierarchical enrollment in Quota Adjuster consumer API ([#6401](https://github.com/googleapis/google-cloud-node/issues/6401)) ([89933b9](https://github.com/googleapis/google-cloud-node/commit/89933b9713d6ced47d52081cff7b4c076f7b4fbb))
* [Many APIs] add methods from gax to cache proto root and process custom error details ([#6417](https://github.com/googleapis/google-cloud-node/issues/6417)) ([0d6d584](https://github.com/googleapis/google-cloud-node/commit/0d6d584a0c5c8f9f96daf3ede46f9440758e0f35))
* [Many APIs] add methods from gax to cache proto root and process custom error details ([#6419](https://github.com/googleapis/google-cloud-node/issues/6419)) ([f8a324c](https://github.com/googleapis/google-cloud-node/commit/f8a324ca5c3bc0f730e4ed67d9407c44f2414936))
* Add protobufjs 2023 edition support ([#6303](https://github.com/googleapis/google-cloud-node/issues/6303)) ([4a0cba1](https://github.com/googleapis/google-cloud-node/commit/4a0cba1e41a9aeb9c15ad31487ef013c8277cfef))

## [2.1.0](https://github.com/googleapis/google-cloud-node/compare/cloudquotas-v2.0.0...cloudquotas-v2.1.0) (2025-03-19)


### Features

* [Many APIs] await/catch promises, and update listOperationsAsync return type ([#6182](https://github.com/googleapis/google-cloud-node/issues/6182)) ([c41ff07](https://github.com/googleapis/google-cloud-node/commit/c41ff0729b65a1207978b4029d6369cc0552e0bf))

## [2.0.0](https://github.com/googleapis/google-cloud-node/compare/cloudquotas-v1.0.0...cloudquotas-v2.0.0) (2025-03-18)


### ⚠ BREAKING CHANGES

* upgrade to Node 18 ([#6096](https://github.com/googleapis/google-cloud-node/issues/6096))

### Features

* [cloudquotas] add request/response debug logging to gapics, update templates to gax 5  ([5d8bb18](https://github.com/googleapis/google-cloud-node/commit/5d8bb188b7c6f447f75b88e2b0807f89a7c5f6b7))


### Miscellaneous Chores

* Upgrade to Node 18 ([#6096](https://github.com/googleapis/google-cloud-node/issues/6096)) ([eadae64](https://github.com/googleapis/google-cloud-node/commit/eadae64d54e07aa2c65097ea52e65008d4e87436))

## [1.0.0](https://github.com/googleapis/google-cloud-node/compare/cloudquotas-v0.6.0...cloudquotas-v1.0.0) (2025-02-28)


### ⚠ BREAKING CHANGES

* This is a breaking change for Node, but on a v1beta surface.

### Bug Fixes

* [cloudquotas] remove unneeded dependency on common Cloud resources ([#6023](https://github.com/googleapis/google-cloud-node/issues/6023)) ([c525ede](https://github.com/googleapis/google-cloud-node/commit/c525ede76e56ba30bbfd5ab34eb9b11729d8f168))

## [0.6.0](https://github.com/googleapis/google-cloud-node/compare/cloudquotas-v0.5.0...cloudquotas-v0.6.0) (2025-01-11)


### Features

* [cloudquotas] Add v1beta client libraries for cloudquotas API ([#5927](https://github.com/googleapis/google-cloud-node/issues/5927)) ([e14659f](https://github.com/googleapis/google-cloud-node/commit/e14659f200d28f9ea34258682ed781909b039ea5))

## [0.5.0](https://github.com/googleapis/google-cloud-node/compare/cloudquotas-v0.4.0...cloudquotas-v0.5.0) (2024-11-14)


### Features

* [cloudquotas] A new value `NOT_SUPPORTED` is added to enum `IneligibilityReason` ([#5801](https://github.com/googleapis/google-cloud-node/issues/5801)) ([8764de1](https://github.com/googleapis/google-cloud-node/commit/8764de199b0bbe7188e6c2a225bd5692734412a3))

## [0.4.0](https://github.com/googleapis/google-cloud-node/compare/cloudquotas-v0.3.0...cloudquotas-v0.4.0) (2024-05-21)


### Features

* [Many APIs] update Nodejs generator to send API versions in headers for GAPICs ([#5350](https://github.com/googleapis/google-cloud-node/issues/5350)) ([6c03873](https://github.com/googleapis/google-cloud-node/commit/6c038731de1f36456042e6b4ecf2a9686be662c7))
* [Many APIs] update Nodejs generator to send API versions in headers for GAPICs ([#5351](https://github.com/googleapis/google-cloud-node/issues/5351)) ([01f48fc](https://github.com/googleapis/google-cloud-node/commit/01f48fce63ec4ddf801d59ee2b8c0db9f6fb8372))
* [Many APIs] update Nodejs generator to send API versions in headers for GAPICs ([#5354](https://github.com/googleapis/google-cloud-node/issues/5354)) ([a9784ed](https://github.com/googleapis/google-cloud-node/commit/a9784ed3db6ee96d171762308bbbcd57390b6866))

## [0.3.0](https://github.com/googleapis/google-cloud-node/compare/cloudquotas-v0.2.0...cloudquotas-v0.3.0) (2024-04-05)


### Features

* [cloudquotas] Add `rollout_info` field to `QuotaDetails` message ([#5194](https://github.com/googleapis/google-cloud-node/issues/5194)) ([39da4b1](https://github.com/googleapis/google-cloud-node/commit/39da4b1b5e02da47dd449420bfd215461bec4801))

## [0.2.0](https://github.com/googleapis/google-cloud-node/compare/cloudquotas-v0.1.0...cloudquotas-v0.2.0) (2024-02-09)


### Features

* Trusted Private Cloud support, use the universeDomain parameter  ([#5022](https://github.com/googleapis/google-cloud-node/issues/5022)) ([b6498d8](https://github.com/googleapis/google-cloud-node/commit/b6498d8580d056817981dedbaa0ea5d82e9dccc2))

## 0.1.0 (2024-01-05)


### ⚠ BREAKING CHANGES

* migrate to Node 14 ([#4443](https://github.com/googleapis/google-cloud-node/issues/4443))

### Features

* Add initial files for google.api.cloudquotas.v1 ([#4920](https://github.com/googleapis/google-cloud-node/issues/4920)) ([557011f](https://github.com/googleapis/google-cloud-node/commit/557011f7de32dfb6f500364a5317a6d1063362f4))


### Miscellaneous Chores

* Migrate to Node 14 ([#4443](https://github.com/googleapis/google-cloud-node/issues/4443)) ([2260f12](https://github.com/googleapis/google-cloud-node/commit/2260f12543d171bda95345e53475f5f0fdc45770))
