[//]: # "This README.md file is auto-generated, all changes to this file will be lost."
[//]: # "The comments you see below are used to generate those parts of the template in later states."
<img src="https://avatars2.githubusercontent.com/u/2810941?v=3&s=96" alt="Google Cloud Platform logo" title="Google Cloud Platform" align="right" height="96" width="96"/>

# [Telco Automation API: Nodejs Client][homepage]

This library is considered to be **stable**. The code surface will not change in backwards-incompatible ways
unless absolutely necessary (e.g. because of critical security issues) or with
an extensive deprecation period. Issues and requests against **stable** libraries
are addressed with the highest priority

[![npm version](https://img.shields.io/npm/v/@google-cloud/telcoautomation.svg)](https://www.npmjs.org/package/@google-cloud/telcoautomation)

Telco Automation API client for Node.js

[//]: # "partials.introduction"

A comprehensive list of changes in each version may be found in
[the CHANGELOG][homepage_changelog].

* [Telco Automation API Nodejs Client API Reference](https://cloud.google.com/nodejs/docs/reference/telcoautomation/latest)
* [Telco Automation API Documentation](https://cloud.google.com/telecom-network-automation)

Read more about the client libraries for Cloud APIs, including the older
Google APIs Client Libraries, in [Client Libraries Explained][explained].

[explained]: https://cloud.google.com/apis/docs/client-libraries-explained

**Table of contents:**

* [Quickstart](#quickstart)
  * [Before you begin](#before-you-begin)
  * [Installing the client library](#installing-the-client-library)

* [Versioning](#versioning)
* [Contributing](#contributing)
* [License](#license)

## Quickstart
### Before you begin

1.  [Select or create a Cloud Platform project][projects].
1.  [Enable billing for your project][billing].
1.  [Enable the Telco Automation API API][enable_api].
1.  [Set up authentication][auth] so you can access the
    API from your local workstation.
### Installing the client library

```bash
npm install @google-cloud/telcoautomation
```

[//]: # "partials.body"

## Samples

Samples are in the [`samples/`][homepage_samples] directory. Each sample's `README.md` has instructions for running its sample.

| Sample                      | Source Code                       |
| --------------------------- | --------------------------------- |
| cloud | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-telcoautomation/samples/generated/v1/snippet_metadata_google.cloud.telcoautomation.v1.json) |
| apply deployment | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-telcoautomation/samples/generated/v1/telco_automation.apply_deployment.js) |
| apply hydrated deployment | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-telcoautomation/samples/generated/v1/telco_automation.apply_hydrated_deployment.js) |
| approve blueprint | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-telcoautomation/samples/generated/v1/telco_automation.approve_blueprint.js) |
| compute deployment status | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-telcoautomation/samples/generated/v1/telco_automation.compute_deployment_status.js) |
| create blueprint | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-telcoautomation/samples/generated/v1/telco_automation.create_blueprint.js) |
| create deployment | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-telcoautomation/samples/generated/v1/telco_automation.create_deployment.js) |
| create edge slm | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-telcoautomation/samples/generated/v1/telco_automation.create_edge_slm.js) |
| create orchestration cluster | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-telcoautomation/samples/generated/v1/telco_automation.create_orchestration_cluster.js) |
| delete blueprint | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-telcoautomation/samples/generated/v1/telco_automation.delete_blueprint.js) |
| delete edge slm | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-telcoautomation/samples/generated/v1/telco_automation.delete_edge_slm.js) |
| delete orchestration cluster | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-telcoautomation/samples/generated/v1/telco_automation.delete_orchestration_cluster.js) |
| discard blueprint changes | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-telcoautomation/samples/generated/v1/telco_automation.discard_blueprint_changes.js) |
| discard deployment changes | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-telcoautomation/samples/generated/v1/telco_automation.discard_deployment_changes.js) |
| get blueprint | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-telcoautomation/samples/generated/v1/telco_automation.get_blueprint.js) |
| get deployment | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-telcoautomation/samples/generated/v1/telco_automation.get_deployment.js) |
| get edge slm | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-telcoautomation/samples/generated/v1/telco_automation.get_edge_slm.js) |
| get hydrated deployment | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-telcoautomation/samples/generated/v1/telco_automation.get_hydrated_deployment.js) |
| get orchestration cluster | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-telcoautomation/samples/generated/v1/telco_automation.get_orchestration_cluster.js) |
| get public blueprint | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-telcoautomation/samples/generated/v1/telco_automation.get_public_blueprint.js) |
| list blueprint revisions | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-telcoautomation/samples/generated/v1/telco_automation.list_blueprint_revisions.js) |
| list blueprints | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-telcoautomation/samples/generated/v1/telco_automation.list_blueprints.js) |
| list deployment revisions | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-telcoautomation/samples/generated/v1/telco_automation.list_deployment_revisions.js) |
| list deployments | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-telcoautomation/samples/generated/v1/telco_automation.list_deployments.js) |
| list edge slms | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-telcoautomation/samples/generated/v1/telco_automation.list_edge_slms.js) |
| list hydrated deployments | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-telcoautomation/samples/generated/v1/telco_automation.list_hydrated_deployments.js) |
| list orchestration clusters | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-telcoautomation/samples/generated/v1/telco_automation.list_orchestration_clusters.js) |
| list public blueprints | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-telcoautomation/samples/generated/v1/telco_automation.list_public_blueprints.js) |
| propose blueprint | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-telcoautomation/samples/generated/v1/telco_automation.propose_blueprint.js) |
| reject blueprint | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-telcoautomation/samples/generated/v1/telco_automation.reject_blueprint.js) |
| remove deployment | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-telcoautomation/samples/generated/v1/telco_automation.remove_deployment.js) |
| rollback deployment | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-telcoautomation/samples/generated/v1/telco_automation.rollback_deployment.js) |
| search blueprint revisions | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-telcoautomation/samples/generated/v1/telco_automation.search_blueprint_revisions.js) |
| search deployment revisions | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-telcoautomation/samples/generated/v1/telco_automation.search_deployment_revisions.js) |
| update blueprint | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-telcoautomation/samples/generated/v1/telco_automation.update_blueprint.js) |
| update deployment | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-telcoautomation/samples/generated/v1/telco_automation.update_deployment.js) |
| update hydrated deployment | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-telcoautomation/samples/generated/v1/telco_automation.update_hydrated_deployment.js) |
| cloud | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-telcoautomation/samples/generated/v1alpha1/snippet_metadata_google.cloud.telcoautomation.v1alpha1.json) |
| apply deployment | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-telcoautomation/samples/generated/v1alpha1/telco_automation.apply_deployment.js) |
| apply hydrated deployment | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-telcoautomation/samples/generated/v1alpha1/telco_automation.apply_hydrated_deployment.js) |
| approve blueprint | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-telcoautomation/samples/generated/v1alpha1/telco_automation.approve_blueprint.js) |
| compute deployment status | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-telcoautomation/samples/generated/v1alpha1/telco_automation.compute_deployment_status.js) |
| create blueprint | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-telcoautomation/samples/generated/v1alpha1/telco_automation.create_blueprint.js) |
| create deployment | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-telcoautomation/samples/generated/v1alpha1/telco_automation.create_deployment.js) |
| create edge slm | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-telcoautomation/samples/generated/v1alpha1/telco_automation.create_edge_slm.js) |
| create orchestration cluster | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-telcoautomation/samples/generated/v1alpha1/telco_automation.create_orchestration_cluster.js) |
| delete blueprint | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-telcoautomation/samples/generated/v1alpha1/telco_automation.delete_blueprint.js) |
| delete edge slm | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-telcoautomation/samples/generated/v1alpha1/telco_automation.delete_edge_slm.js) |
| delete orchestration cluster | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-telcoautomation/samples/generated/v1alpha1/telco_automation.delete_orchestration_cluster.js) |
| discard blueprint changes | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-telcoautomation/samples/generated/v1alpha1/telco_automation.discard_blueprint_changes.js) |
| discard deployment changes | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-telcoautomation/samples/generated/v1alpha1/telco_automation.discard_deployment_changes.js) |
| get blueprint | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-telcoautomation/samples/generated/v1alpha1/telco_automation.get_blueprint.js) |
| get deployment | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-telcoautomation/samples/generated/v1alpha1/telco_automation.get_deployment.js) |
| get edge slm | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-telcoautomation/samples/generated/v1alpha1/telco_automation.get_edge_slm.js) |
| get hydrated deployment | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-telcoautomation/samples/generated/v1alpha1/telco_automation.get_hydrated_deployment.js) |
| get orchestration cluster | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-telcoautomation/samples/generated/v1alpha1/telco_automation.get_orchestration_cluster.js) |
| get public blueprint | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-telcoautomation/samples/generated/v1alpha1/telco_automation.get_public_blueprint.js) |
| list blueprint revisions | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-telcoautomation/samples/generated/v1alpha1/telco_automation.list_blueprint_revisions.js) |
| list blueprints | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-telcoautomation/samples/generated/v1alpha1/telco_automation.list_blueprints.js) |
| list deployment revisions | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-telcoautomation/samples/generated/v1alpha1/telco_automation.list_deployment_revisions.js) |
| list deployments | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-telcoautomation/samples/generated/v1alpha1/telco_automation.list_deployments.js) |
| list edge slms | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-telcoautomation/samples/generated/v1alpha1/telco_automation.list_edge_slms.js) |
| list hydrated deployments | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-telcoautomation/samples/generated/v1alpha1/telco_automation.list_hydrated_deployments.js) |
| list orchestration clusters | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-telcoautomation/samples/generated/v1alpha1/telco_automation.list_orchestration_clusters.js) |
| list public blueprints | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-telcoautomation/samples/generated/v1alpha1/telco_automation.list_public_blueprints.js) |
| propose blueprint | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-telcoautomation/samples/generated/v1alpha1/telco_automation.propose_blueprint.js) |
| reject blueprint | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-telcoautomation/samples/generated/v1alpha1/telco_automation.reject_blueprint.js) |
| remove deployment | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-telcoautomation/samples/generated/v1alpha1/telco_automation.remove_deployment.js) |
| rollback deployment | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-telcoautomation/samples/generated/v1alpha1/telco_automation.rollback_deployment.js) |
| search blueprint revisions | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-telcoautomation/samples/generated/v1alpha1/telco_automation.search_blueprint_revisions.js) |
| search deployment revisions | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-telcoautomation/samples/generated/v1alpha1/telco_automation.search_deployment_revisions.js) |
| update blueprint | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-telcoautomation/samples/generated/v1alpha1/telco_automation.update_blueprint.js) |
| update deployment | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-telcoautomation/samples/generated/v1alpha1/telco_automation.update_deployment.js) |
| update hydrated deployment | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-telcoautomation/samples/generated/v1alpha1/telco_automation.update_hydrated_deployment.js) |


## Supported Node.js Versions

Our client libraries follow the [Node.js release schedule](https://github.com/nodejs/release#release-schedule).
Libraries are compatible with all current _active_ and _maintenance_ versions of
Node.js.
If you are using an end-of-life version of Node.js, we recommend that you update
as soon as possible to an actively supported LTS version.

Google's client libraries support legacy versions of Node.js runtimes on a
best-efforts basis with the following warnings:

* Legacy versions are not tested in continuous integration.
* Some security patches and features cannot be backported.
* Dependencies cannot be kept up-to-date.

Client libraries targeting some end-of-life versions of Node.js are available, and
can be installed through npm [dist-tags](https://docs.npmjs.com/cli/dist-tag).
The dist-tags follow the naming convention `legacy-(version)`.
For example, `npm install @google-cloud/telcoautomation@legacy-8` installs client libraries
for versions compatible with Node.js 8.

## Versioning

This library follows [Semantic Versioning](http://semver.org/).

More Information: [Google Cloud Platform Launch Stages][launch_stages]

[launch_stages]: https://cloud.google.com/terms/launch-stages

## Contributing

Contributions welcome! See the [Contributing Guide](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-telcoautomation/CONTRIBUTING.md).

Please note that this `README.md`
and a variety of configuration files in this repository (including `.nycrc` and `tsconfig.json`)
are generated from a central template.

## License

Apache Version 2.0

See [LICENSE](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-telcoautomation/LICENSE)

[shell_img]: https://gstatic.com/cloudssh/images/open-btn.png
[projects]: https://console.cloud.google.com/project
[billing]: https://support.google.com/cloud/answer/6293499#enable-billing
[enable_api]: https://console.cloud.google.com/flows/enableapi?apiid=telcoautomation.googleapis.com
[auth]: https://cloud.google.com/docs/authentication/external/set-up-adc-local
[homepage_samples]: https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-telcoautomation/samples
[homepage_changelog]: https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-telcoautomation/CHANGELOG.md
[homepage]: https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-telcoautomation
