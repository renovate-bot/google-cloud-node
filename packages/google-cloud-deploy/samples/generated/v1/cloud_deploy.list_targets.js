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
  // [START clouddeploy_v1_generated_CloudDeploy_ListTargets_async]
  /**
   * This snippet has been automatically generated and should be regarded as a code template only.
   * It will require modifications to work.
   * It may require correct/in-range values for request initialization.
   * TODO(developer): Uncomment these variables before running the sample.
   */
  /**
   *  Required. The parent, which owns this collection of targets. Format must be
   *  `projects/{project_id}/locations/{location_name}`.
   */
  // const parent = 'abc123'
  /**
   *  Optional. The maximum number of `Target` objects to return. The service may
   *  return fewer than this value. If unspecified, at most 50 `Target` objects
   *  will be returned. The maximum value is 1000; values above 1000 will be set
   *  to 1000.
   */
  // const pageSize = 1234
  /**
   *  Optional. A page token, received from a previous `ListTargets` call.
   *  Provide this to retrieve the subsequent page.
   *  When paginating, all other provided parameters match
   *  the call that provided the page token.
   */
  // const pageToken = 'abc123'
  /**
   *  Optional. Filter targets to be returned. See https://google.aip.dev/160 for
   *  more details.
   */
  // const filter = 'abc123'
  /**
   *  Optional. Field to sort by. See https://google.aip.dev/132#ordering for
   *  more details.
   */
  // const orderBy = 'abc123'

  // Imports the Deploy library
  const {CloudDeployClient} = require('@google-cloud/deploy').v1;

  // Instantiates a client
  const deployClient = new CloudDeployClient();

  async function callListTargets() {
    // Construct request
    const request = {
      parent,
    };

    // Run request
    const iterable = deployClient.listTargetsAsync(request);
    for await (const response of iterable) {
        console.log(response);
    }
  }

  callListTargets();
  // [END clouddeploy_v1_generated_CloudDeploy_ListTargets_async]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));
