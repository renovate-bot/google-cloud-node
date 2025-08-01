# Changelog

## [3.3.0](https://github.com/googleapis/google-cloud-node/compare/generativelanguage-v3.2.0...generativelanguage-v3.3.0) (2025-07-09)


### Features

* [Many APIs] add methods from gax to cache proto root and process custom error details ([#6417](https://github.com/googleapis/google-cloud-node/issues/6417)) ([0d6d584](https://github.com/googleapis/google-cloud-node/commit/0d6d584a0c5c8f9f96daf3ede46f9440758e0f35))
* [Many APIs] add methods from gax to cache proto root and process custom error details ([#6419](https://github.com/googleapis/google-cloud-node/issues/6419)) ([f8a324c](https://github.com/googleapis/google-cloud-node/commit/f8a324ca5c3bc0f730e4ed67d9407c44f2414936))
* Add protobufjs 2023 edition support ([#6303](https://github.com/googleapis/google-cloud-node/issues/6303)) ([4a0cba1](https://github.com/googleapis/google-cloud-node/commit/4a0cba1e41a9aeb9c15ad31487ef013c8277cfef))

## [3.2.0](https://github.com/googleapis/google-cloud-node/compare/generativelanguage-v3.1.0...generativelanguage-v3.2.0) (2025-05-09)


### Features

* [generativelanguage] add CODE_RETRIEVAL_QUERY embedding task type ([#6307](https://github.com/googleapis/google-cloud-node/issues/6307)) ([484c6e0](https://github.com/googleapis/google-cloud-node/commit/484c6e0934fa16c4d500fb9d441dbf8c9f441015))
* [generativelanguage] add support for live API (https://togithub.com/googleapis/go-genai/issues/275) ([484c6e0](https://github.com/googleapis/google-cloud-node/commit/484c6e0934fa16c4d500fb9d441dbf8c9f441015))
* Add CODE_RETRIEVAL_QUERY embedding task type ([484c6e0](https://github.com/googleapis/google-cloud-node/commit/484c6e0934fa16c4d500fb9d441dbf8c9f441015))
* Add language_code to speech config ([484c6e0](https://github.com/googleapis/google-cloud-node/commit/484c6e0934fa16c4d500fb9d441dbf8c9f441015))
* Add minimum, maximum, any_of, property_ordering, default and null type to Schema ([484c6e0](https://github.com/googleapis/google-cloud-node/commit/484c6e0934fa16c4d500fb9d441dbf8c9f441015))
* Add seed to GenerationConfig ([484c6e0](https://github.com/googleapis/google-cloud-node/commit/484c6e0934fa16c4d500fb9d441dbf8c9f441015))
* Add support for ModalityTokenCounts in UsageMetadata responses ([484c6e0](https://github.com/googleapis/google-cloud-node/commit/484c6e0934fa16c4d500fb9d441dbf8c9f441015))
* Add support for ModalityTokenCounts in UsageMetadata responses ([484c6e0](https://github.com/googleapis/google-cloud-node/commit/484c6e0934fa16c4d500fb9d441dbf8c9f441015))
* Add support for Veo: PredictLongRunning and generated/downloadable files ([484c6e0](https://github.com/googleapis/google-cloud-node/commit/484c6e0934fa16c4d500fb9d441dbf8c9f441015))
* Add ThinkingConfig, MediaResolution, and seed to GenerationConfig ([484c6e0](https://github.com/googleapis/google-cloud-node/commit/484c6e0934fa16c4d500fb9d441dbf8c9f441015))

## [3.1.0](https://github.com/googleapis/google-cloud-node/compare/generativelanguage-v3.0.0...generativelanguage-v3.1.0) (2025-03-19)


### Features

* [Many APIs] await/catch promises, and update listOperationsAsync return type ([#6182](https://github.com/googleapis/google-cloud-node/issues/6182)) ([c41ff07](https://github.com/googleapis/google-cloud-node/commit/c41ff0729b65a1207978b4029d6369cc0552e0bf))

## [3.0.0](https://github.com/googleapis/google-cloud-node/compare/generativelanguage-v2.9.1...generativelanguage-v3.0.0) (2025-03-18)


### ⚠ BREAKING CHANGES

* upgrade to Node 18 ([#6096](https://github.com/googleapis/google-cloud-node/issues/6096))

### Features

* [Many APIs] add request/response debug logging to gapics, update templates to gax 5  ([54a73fe](https://github.com/googleapis/google-cloud-node/commit/54a73fe74eab0675c006f24d5f1e4574c44d829b))


### Miscellaneous Chores

* Upgrade to Node 18 ([#6096](https://github.com/googleapis/google-cloud-node/issues/6096)) ([eadae64](https://github.com/googleapis/google-cloud-node/commit/eadae64d54e07aa2c65097ea52e65008d4e87436))

## [2.9.1](https://github.com/googleapis/google-cloud-node/compare/generativelanguage-v2.9.0...generativelanguage-v2.9.1) (2025-02-12)


### Bug Fixes

* [Many APIs] finalize fixing typings for headers in generator ([#6011](https://github.com/googleapis/google-cloud-node/issues/6011)) ([ee865ff](https://github.com/googleapis/google-cloud-node/commit/ee865ff34a696fbd657e4cfb6cc4be2f6651f77a))

## [2.9.0](https://github.com/googleapis/google-cloud-node/compare/generativelanguage-v2.8.0...generativelanguage-v2.9.0) (2025-01-11)


### Features

* [generativelanguage] Add GoogleSearch tool type ([#5929](https://github.com/googleapis/google-cloud-node/issues/5929)) ([e5a665a](https://github.com/googleapis/google-cloud-node/commit/e5a665a909fb52d2ec4d05f147ac2c7ebd8ceb01))

## [2.8.0](https://github.com/googleapis/google-cloud-node/compare/generativelanguage-v2.7.0...generativelanguage-v2.8.0) (2024-11-21)


### Features

* [generativelanguage] Adds search grounding ([#5828](https://github.com/googleapis/google-cloud-node/issues/5828)) ([0b27dc2](https://github.com/googleapis/google-cloud-node/commit/0b27dc2c46300e144e82f6bd90a0fbf7072b22db))

## [2.7.0](https://github.com/googleapis/google-cloud-node/compare/generativelanguage-v2.6.0...generativelanguage-v2.7.0) (2024-10-10)


### Features

* [generativelanguage] Add GoogleSearchRetrieval tool and candidate.grounding_metadata ([#5699](https://github.com/googleapis/google-cloud-node/issues/5699)) ([3eb6375](https://github.com/googleapis/google-cloud-node/commit/3eb6375a4e4f28565de5e921c33e8547654a0fa2))

## [2.6.0](https://github.com/googleapis/google-cloud-node/compare/generativelanguage-v2.5.0...generativelanguage-v2.6.0) (2024-06-26)


### Features

* [generativelanguage] Add code execution ([#5506](https://github.com/googleapis/google-cloud-node/issues/5506)) ([13034af](https://github.com/googleapis/google-cloud-node/commit/13034af24e1d08cccab85e1f1f448a8ff24e469c))
* [generativelanguage] Add content caching ([#5451](https://github.com/googleapis/google-cloud-node/issues/5451)) ([75c026f](https://github.com/googleapis/google-cloud-node/commit/75c026f34b039e368c38bfb6242f01048d3bfb79))

## [2.5.0](https://github.com/googleapis/google-cloud-node/compare/generativelanguage-v2.4.0...generativelanguage-v2.5.0) (2024-05-21)


### Features

* [generativelanguage] Add video metadata to files API ([#5359](https://github.com/googleapis/google-cloud-node/issues/5359)) ([4185d57](https://github.com/googleapis/google-cloud-node/commit/4185d574058dea56f118cf019cd28adf89c7b5a9))
* [Many APIs] update Nodejs generator to send API versions in headers for GAPICs ([#5350](https://github.com/googleapis/google-cloud-node/issues/5350)) ([6c03873](https://github.com/googleapis/google-cloud-node/commit/6c038731de1f36456042e6b4ecf2a9686be662c7))
* [Many APIs] update Nodejs generator to send API versions in headers for GAPICs ([#5351](https://github.com/googleapis/google-cloud-node/issues/5351)) ([01f48fc](https://github.com/googleapis/google-cloud-node/commit/01f48fce63ec4ddf801d59ee2b8c0db9f6fb8372))
* [Many APIs] update Nodejs generator to send API versions in headers for GAPICs ([#5354](https://github.com/googleapis/google-cloud-node/issues/5354)) ([a9784ed](https://github.com/googleapis/google-cloud-node/commit/a9784ed3db6ee96d171762308bbbcd57390b6866))

## [2.4.0](https://github.com/googleapis/google-cloud-node/compare/generativelanguage-v2.3.0...generativelanguage-v2.4.0) (2024-05-08)


### Features

* Add FileState to File  ([#5312](https://github.com/googleapis/google-cloud-node/issues/5312)) ([01f4b53](https://github.com/googleapis/google-cloud-node/commit/01f4b533eab40cbc0868be66418bda716b998dc3))

## [2.3.0](https://github.com/googleapis/google-cloud-node/compare/generativelanguage-v2.2.0...generativelanguage-v2.3.0) (2024-04-18)


### Features

* [generativelanguage] Add rest binding for tuned models ([#5228](https://github.com/googleapis/google-cloud-node/issues/5228)) ([b0ddbbe](https://github.com/googleapis/google-cloud-node/commit/b0ddbbecf97de696c7699efbb351e8f862f7d8cf))

## [2.2.0](https://github.com/googleapis/google-cloud-node/compare/generativelanguage-v2.1.1...generativelanguage-v2.2.0) (2024-04-05)


### Features

* [generativelanguage] Add system instructions ([#5208](https://github.com/googleapis/google-cloud-node/issues/5208)) ([54c5762](https://github.com/googleapis/google-cloud-node/commit/54c5762d6ea9ac57d14271e651c03353326f15ac))

## [2.1.1](https://github.com/googleapis/google-cloud-node/compare/generativelanguage-v2.1.0...generativelanguage-v2.1.1) (2024-03-26)


### Bug Fixes

* [generativelanguage] make learning rate a one-of ([#5142](https://github.com/googleapis/google-cloud-node/issues/5142)) ([b2a5f9d](https://github.com/googleapis/google-cloud-node/commit/b2a5f9d476c5cc5bbf9eb47f0dc605284943d8c5))

## [2.1.0](https://github.com/googleapis/google-cloud-node/compare/generativelanguage-v2.0.1...generativelanguage-v2.1.0) (2024-02-09)


### Features

* Trusted Private Cloud support, use the universeDomain parameter  ([#5022](https://github.com/googleapis/google-cloud-node/issues/5022)) ([b6498d8](https://github.com/googleapis/google-cloud-node/commit/b6498d8580d056817981dedbaa0ea5d82e9dccc2))

## [2.0.1](https://github.com/googleapis/google-cloud-node/compare/generativelanguage-v2.0.0...generativelanguage-v2.0.1) (2024-01-23)


### Bug Fixes

* [generativelanguage] improve retry logic for streaming API calls ([#4955](https://github.com/googleapis/google-cloud-node/issues/4955)) ([cafe82f](https://github.com/googleapis/google-cloud-node/commit/cafe82f06e0afa498ae234b0afe01f8014311f4b))

## [2.0.0](https://github.com/googleapis/google-cloud-node/compare/generativelanguage-v1.1.0...generativelanguage-v2.0.0) (2023-12-11)


### Features

* [generativelanguage] Add v1 and v1beta, adds GenerativeService and RetrievalService ([#4879](https://github.com/googleapis/google-cloud-node/issues/4879)) ([d98f897](https://github.com/googleapis/google-cloud-node/commit/d98f897acb7aa3bcb01b7494dcdfd6cdb8b861e5)).
* **BREAKING CHANGE:** version v1beta is now the default version.

## [1.1.0](https://github.com/googleapis/google-cloud-node/compare/generativelanguage-v1.0.1...generativelanguage-v1.1.0) (2023-09-20)


### Features

* [generativelanguage] Upgrade to API v1beta3 ([#4681](https://github.com/googleapis/google-cloud-node/issues/4681)) ([bf0f0e2](https://github.com/googleapis/google-cloud-node/commit/bf0f0e27911d56cb3e24ae8fb7ef29a2ae9ab9a6))

## [1.0.1](https://github.com/googleapis/google-cloud-node/compare/generativelanguage-v1.0.0...generativelanguage-v1.0.1) (2023-09-06)


### Bug Fixes

* [Many APIs] simplify logic for HTTP/1.1 REST fallback option ([#4583](https://github.com/googleapis/google-cloud-node/issues/4583)) ([c3ddba8](https://github.com/googleapis/google-cloud-node/commit/c3ddba8df9fee6185e36a4e99f7c67b0319f1242))

## [1.0.0](https://github.com/googleapis/google-cloud-node/compare/generativelanguage-v0.2.1...generativelanguage-v1.0.0) (2023-08-06)


### ⚠ BREAKING CHANGES

* migrate to Node 14 ([#4443](https://github.com/googleapis/google-cloud-node/issues/4443))

### Bug Fixes

* [Many APIs] fix typings for IAM methods ([#4459](https://github.com/googleapis/google-cloud-node/issues/4459)) ([1d510be](https://github.com/googleapis/google-cloud-node/commit/1d510bef5bd7b0ac3552b4729ef3d9ebe1ac3dc4))


### Miscellaneous Chores

* Migrate to Node 14 ([#4443](https://github.com/googleapis/google-cloud-node/issues/4443)) ([2260f12](https://github.com/googleapis/google-cloud-node/commit/2260f12543d171bda95345e53475f5f0fdc45770))

## [0.2.1](https://github.com/googleapis/google-cloud-node/compare/generativelanguage-v0.2.0...generativelanguage-v0.2.1) (2023-07-04)


### Bug Fixes

* [generativelanguage] Update safety protos ([#4382](https://github.com/googleapis/google-cloud-node/issues/4382)) ([d06c733](https://github.com/googleapis/google-cloud-node/commit/d06c733eac7699f2a10853b150cfdeae464a9962))

## [0.2.0](https://github.com/googleapis/google-cloud-node/compare/generativelanguage-v0.1.1...generativelanguage-v0.2.0) (2023-05-06)


### Features

* [generativelanguage] Add safety settings ([#4248](https://github.com/googleapis/google-cloud-node/issues/4248)) ([76b2df7](https://github.com/googleapis/google-cloud-node/commit/76b2df71b44de5f1764749f8393f2a2cee68221e))

## [0.1.1](https://github.com/googleapis/google-cloud-node/compare/generativelanguage-v0.1.0...generativelanguage-v0.1.1) (2023-05-04)


### Bug Fixes

* **docs:** Fix sample links in README ([#4236](https://github.com/googleapis/google-cloud-node/issues/4236)) ([d852042](https://github.com/googleapis/google-cloud-node/commit/d8520421c0d4c306d8a0d2cf8bf94186d6a27a6b))

## 0.1.0 (2023-05-02)


### Features

* Add initial files for google.ai.generativelanguage.v1beta2 ([#4224](https://github.com/googleapis/google-cloud-node/issues/4224)) ([8db807a](https://github.com/googleapis/google-cloud-node/commit/8db807ae80a695bb1ad4fa290bc9a50ce29a8365))
