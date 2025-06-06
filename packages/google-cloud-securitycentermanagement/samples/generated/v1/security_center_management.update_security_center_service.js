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

function main(securityCenterService, updateMask) {
  // [START securitycentermanagement_v1_generated_SecurityCenterManagement_UpdateSecurityCenterService_async]
  /**
   * This snippet has been automatically generated and should be regarded as a code template only.
   * It will require modifications to work.
   * It may require correct/in-range values for request initialization.
   * TODO(developer): Uncomment these variables before running the sample.
   */
  /**
   *  Required. The updated service.
   */
  // const securityCenterService = {}
  /**
   *  Required. The fields to update. Accepts the following values:
   *  * `intended_enablement_state`
   *  * `modules`
   *  If omitted, then all eligible fields are updated.
   */
  // const updateMask = {}
  /**
   *  Optional. When set to `true`, the request will be validated (including IAM
   *  checks), but no service will be updated. An `OK` response indicates that
   *  the request is valid, while an error response indicates that the request is
   *  invalid.
   *  If the request is valid, a subsequent request to update the service could
   *  still fail for one of the following reasons:
   *  *  The state of your cloud resources changed; for example, you lost a
   *     required IAM permission
   *  *  An error occurred during update of the service
   *  Defaults to `false`.
   */
  // const validateOnly = true

  // Imports the Securitycentermanagement library
  const {SecurityCenterManagementClient} = require('@google-cloud/securitycentermanagement').v1;

  // Instantiates a client
  const securitycentermanagementClient = new SecurityCenterManagementClient();

  async function callUpdateSecurityCenterService() {
    // Construct request
    const request = {
      securityCenterService,
      updateMask,
    };

    // Run request
    const response = await securitycentermanagementClient.updateSecurityCenterService(request);
    console.log(response);
  }

  callUpdateSecurityCenterService();
  // [END securitycentermanagement_v1_generated_SecurityCenterManagement_UpdateSecurityCenterService_async]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));
