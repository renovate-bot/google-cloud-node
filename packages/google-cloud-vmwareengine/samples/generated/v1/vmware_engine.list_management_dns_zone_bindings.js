// Copyright 2025 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     https://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
//
// ** This file is automatically generated by gapic-generator-typescript. **
// ** https://github.com/googleapis/gapic-generator-typescript **
// ** All changes to this file may be overwritten. **



'use strict';

function main(parent) {
  // [START vmwareengine_v1_generated_VmwareEngine_ListManagementDnsZoneBindings_async]
  /**
   * This snippet has been automatically generated and should be regarded as a code template only.
   * It will require modifications to work.
   * It may require correct/in-range values for request initialization.
   * TODO(developer): Uncomment these variables before running the sample.
   */
  /**
   *  Required. The resource name of the private cloud to be queried for
   *  management DNS zone bindings.
   *  Resource names are schemeless URIs that follow the conventions in
   *  https://cloud.google.com/apis/design/resource_names.
   *  For example:
   *  `projects/my-project/locations/us-central1-a/privateClouds/my-cloud`
   */
  // const parent = 'abc123'
  /**
   *  The maximum number of management DNS zone bindings to return in one page.
   *  The service may return fewer than this value.
   *  The maximum value is coerced to 1000.
   *  The default value of this field is 500.
   */
  // const pageSize = 1234
  /**
   *  A page token, received from a previous `ListManagementDnsZoneBindings`
   *  call. Provide this to retrieve the subsequent page.
   *  When paginating, all other parameters provided to
   *  `ListManagementDnsZoneBindings` must match the call that provided the page
   *  token.
   */
  // const pageToken = 'abc123'
  /**
   *  A filter expression that matches resources returned in the response.
   *  The expression must specify the field name, a comparison
   *  operator, and the value that you want to use for filtering. The value
   *  must be a string, a number, or a boolean. The comparison operator
   *  must be `=`, `!=`, `>`, or `<`.
   *  For example, if you are filtering a list of Management DNS Zone Bindings,
   *  you can exclude the ones named `example-management-dns-zone-binding` by
   *  specifying `name != "example-management-dns-zone-binding"`.
   *  To filter on multiple expressions, provide each separate expression within
   *  parentheses. For example:
   *  ```
   *  (name = "example-management-dns-zone-binding")
   *  (createTime > "2021-04-12T08:15:10.40Z")
   *  ```
   *  By default, each expression is an `AND` expression. However, you
   *  can include `AND` and `OR` expressions explicitly.
   *  For example:
   *  ```
   *  (name = "example-management-dns-zone-binding-1") AND
   *  (createTime > "2021-04-12T08:15:10.40Z") OR
   *  (name = "example-management-dns-zone-binding-2")
   *  ```
   */
  // const filter = 'abc123'
  /**
   *  Sorts list results by a certain order. By default, returned results
   *  are ordered by `name` in ascending order.
   *  You can also sort results in descending order based on the `name` value
   *  using `orderBy="name desc"`.
   *  Currently, only ordering by `name` is supported.
   */
  // const orderBy = 'abc123'

  // Imports the Vmwareengine library
  const {VmwareEngineClient} = require('@google-cloud/vmwareengine').v1;

  // Instantiates a client
  const vmwareengineClient = new VmwareEngineClient();

  async function callListManagementDnsZoneBindings() {
    // Construct request
    const request = {
      parent,
    };

    // Run request
    const iterable = vmwareengineClient.listManagementDnsZoneBindingsAsync(request);
    for await (const response of iterable) {
        console.log(response);
    }
  }

  callListManagementDnsZoneBindings();
  // [END vmwareengine_v1_generated_VmwareEngine_ListManagementDnsZoneBindings_async]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));
