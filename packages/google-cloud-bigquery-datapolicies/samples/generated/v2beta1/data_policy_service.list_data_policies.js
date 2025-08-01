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
  // [START bigquerydatapolicy_v2beta1_generated_DataPolicyService_ListDataPolicies_async]
  /**
   * This snippet has been automatically generated and should be regarded as a code template only.
   * It will require modifications to work.
   * It may require correct/in-range values for request initialization.
   * TODO(developer): Uncomment these variables before running the sample.
   */
  /**
   *  Required. Resource name of the project for which to list data policies.
   *  Format is `projects/{project_number}/locations/{location_id}`.
   */
  // const parent = 'abc123'
  /**
   *  Optional. The maximum number of data policies to return. Must be a value
   *  between 1 and 1000. If not set, defaults to 50.
   */
  // const pageSize = 1234
  /**
   *  Optional. The `nextPageToken` value returned from a previous list request,
   *  if any. If not set, defaults to an empty string.
   */
  // const pageToken = 'abc123'

  // Imports the Datapolicies library
  const {DataPolicyServiceClient} = require('@google-cloud/datapolicies').v2beta1;

  // Instantiates a client
  const datapoliciesClient = new DataPolicyServiceClient();

  async function callListDataPolicies() {
    // Construct request
    const request = {
      parent,
    };

    // Run request
    const iterable = datapoliciesClient.listDataPoliciesAsync(request);
    for await (const response of iterable) {
        console.log(response);
    }
  }

  callListDataPolicies();
  // [END bigquerydatapolicy_v2beta1_generated_DataPolicyService_ListDataPolicies_async]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));
