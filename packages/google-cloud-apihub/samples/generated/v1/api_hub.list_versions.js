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
  // [START apihub_v1_generated_ApiHub_ListVersions_async]
  /**
   * This snippet has been automatically generated and should be regarded as a code template only.
   * It will require modifications to work.
   * It may require correct/in-range values for request initialization.
   * TODO(developer): Uncomment these variables before running the sample.
   */
  /**
   *  Required. The parent which owns this collection of API versions i.e., the
   *  API resource Format: `projects/{project}/locations/{location}/apis/{api}`
   */
  // const parent = 'abc123'
  /**
   *  Optional. An expression that filters the list of Versions.
   *  A filter expression consists of a field name, a comparison
   *  operator, and a value for filtering. The value must be a string, a
   *  number, or a boolean. The comparison operator must be one of: `<`, `>` or
   *  `=`. Filters are not case sensitive.
   *  The following fields in the `Version` are eligible for filtering:
   *    * `display_name` - The display name of the Version. Allowed
   *    comparison operators: `=`.
   *    * `create_time` - The time at which the Version was created. The
   *    value should be in the (RFC3339)https://tools.ietf.org/html/rfc3339 
   *    format. Allowed comparison operators: `>` and `<`.
   *    * `lifecycle.enum_values.values.id` - The allowed value id of the
   *    lifecycle attribute associated with the Version. Allowed comparison
   *    operators: `:`.
   *    * `lifecycle.enum_values.values.display_name` - The allowed value display
   *    name of the lifecycle attribute associated with the Version. Allowed
   *    comparison operators: `:`.
   *    * `compliance.enum_values.values.id` -  The allowed value id of the
   *    compliances attribute associated with the Version. Allowed comparison
   *    operators: `:`.
   *    * `compliance.enum_values.values.display_name` -  The allowed value
   *    display name of the compliances attribute associated with the Version.
   *    Allowed comparison operators: `:`.
   *    * `accreditation.enum_values.values.id` - The allowed value id of the
   *    accreditations attribute associated with the Version. Allowed
   *    comparison operators: `:`.
   *    * `accreditation.enum_values.values.display_name` - The allowed value
   *    display name of the accreditations attribute associated with the Version.
   *    Allowed comparison operators: `:`.
   *  Expressions are combined with either `AND` logic operator or `OR` logical
   *  operator but not both of them together i.e. only one of the `AND` or `OR`
   *  operator can be used throughout the filter string and both the operators
   *  cannot be used together. No other logical operators are
   *  supported. At most three filter fields are allowed in the filter
   *  string and if provided more than that then `INVALID_ARGUMENT` error is
   *  returned by the API.
   *  Here are a few examples:
   *    * `lifecycle.enum_values.values.id: preview-id` - The filter string
   *    specifies that the id of the allowed value associated with the lifecycle
   *    attribute of the Version is _preview-id_.
   *    * `lifecycle.enum_values.values.display_name: \"Preview Display Name\"` -
   *    The filter string specifies that the display name of the allowed value
   *    associated with the lifecycle attribute of the Version is `Preview
   *    Display Name`.
   *    * `lifecycle.enum_values.values.id: preview-id AND create_time <
   *    \"2021-08-15T14:50:00Z\" AND create_time > \"2021-08-10T12:00:00Z\"` -
   *    The id of the allowed value associated with the lifecycle attribute of
   *    the Version is _preview-id_ and it was created before _2021-08-15
   *    14:50:00 UTC_ and after _2021-08-10 12:00:00 UTC_.
   *    * `compliance.enum_values.values.id: gdpr-id OR
   *    compliance.enum_values.values.id: pci-dss-id`
   *    - The id of the allowed value associated with the compliance attribute is
   *    _gdpr-id_ or _pci-dss-id_.
   */
  // const filter = 'abc123'
  /**
   *  Optional. The maximum number of versions to return. The service may return
   *  fewer than this value. If unspecified, at most 50 versions will be
   *  returned. The maximum value is 1000; values above 1000 will be coerced to
   *  1000.
   */
  // const pageSize = 1234
  /**
   *  Optional. A page token, received from a previous `ListVersions` call.
   *  Provide this to retrieve the subsequent page.
   *  When paginating, all other parameters (except page_size) provided to
   *  `ListVersions` must match the call that provided the page token.
   */
  // const pageToken = 'abc123'

  // Imports the Apihub library
  const {ApiHubClient} = require('@google-cloud/apihub').v1;

  // Instantiates a client
  const apihubClient = new ApiHubClient();

  async function callListVersions() {
    // Construct request
    const request = {
      parent,
    };

    // Run request
    const iterable = apihubClient.listVersionsAsync(request);
    for await (const response of iterable) {
        console.log(response);
    }
  }

  callListVersions();
  // [END apihub_v1_generated_ApiHub_ListVersions_async]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));
