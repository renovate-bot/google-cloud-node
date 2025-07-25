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

function main(parent, authzExtensionId, authzExtension) {
  // [START networkservices_v1_generated_DepService_CreateAuthzExtension_async]
  /**
   * This snippet has been automatically generated and should be regarded as a code template only.
   * It will require modifications to work.
   * It may require correct/in-range values for request initialization.
   * TODO(developer): Uncomment these variables before running the sample.
   */
  /**
   *  Required. The parent resource of the `AuthzExtension` resource. Must
   *  be in the format `projects/{project}/locations/{location}`.
   */
  // const parent = 'abc123'
  /**
   *  Required. User-provided ID of the `AuthzExtension` resource to be
   *  created.
   */
  // const authzExtensionId = 'abc123'
  /**
   *  Required. `AuthzExtension` resource to be created.
   */
  // const authzExtension = {}
  /**
   *  Optional. An optional request ID to identify requests. Specify a unique
   *  request ID so that if you must retry your request, the server can ignore
   *  the request if it has already been completed. The server guarantees
   *  that for 60 minutes since the first request.
   *  For example, consider a situation where you make an initial request and the
   *  request times out. If you make the request again with the same request
   *  ID, the server ignores the second request This prevents
   *  clients from accidentally creating duplicate commitments.
   *  The request ID must be a valid UUID with the exception that zero UUID is
   *  not supported (00000000-0000-0000-0000-000000000000).
   */
  // const requestId = 'abc123'

  // Imports the Networkservices library
  const {DepServiceClient} = require('@google-cloud/networkservices').v1;

  // Instantiates a client
  const networkservicesClient = new DepServiceClient();

  async function callCreateAuthzExtension() {
    // Construct request
    const request = {
      parent,
      authzExtensionId,
      authzExtension,
    };

    // Run request
    const [operation] = await networkservicesClient.createAuthzExtension(request);
    const [response] = await operation.promise();
    console.log(response);
  }

  callCreateAuthzExtension();
  // [END networkservices_v1_generated_DepService_CreateAuthzExtension_async]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));
